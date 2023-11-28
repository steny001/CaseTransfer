using CaseTransfer.Framework.Helper;
using CaseTransfer.Framework;
using System.Data;
using CaseTransfer.Data.Inteface;
using CaseTransfer.Models;
using CaseTransfer.DBEngine;
using Dapper;

namespace CaseTransfer.Data.Repository
{
    public class CaseTransferRepository : ICaseTransferRepository
    {
        CaseTransferModel caseTransferModel = new CaseTransferModel();

        private readonly ISQLServerHandler _SQLServerHandler;

        #region Constructor
        public CaseTransferRepository(ISQLServerHandler sQLServerHandler)
        {
            _SQLServerHandler = sQLServerHandler;
        }
        #endregion Constructor

        public async Task<CaseTransferModel> GetAgencies()
        {
            CaseTransferModel caseTransferModel = new CaseTransferModel();
            var parameters = new DynamicParameters();
            try
            {
                using (_SQLServerHandler.Connection)
                {
                    caseTransferModel.objAgencyList = (await _SQLServerHandler.QueryAsync<Agency>(_SQLServerHandler.Connection, StroredProc.GetALLAgencies, CommandType.StoredProcedure, parameters)).ToList();
                }
            }
            catch (Exception ex)
            {
                new ErrorLog().WriteLog(ex);
            }
            return caseTransferModel;
        }

        public async Task<UserDetailResult> AuthenticateUserAsync(CaseTransferModel user)
        {
            UserDetailResult userDetailResult = new UserDetailResult();
            try
            {
                var parameters = new DynamicParameters();
                using (_SQLServerHandler.Connection)
                {
                    parameters.Add(CommonVariable.User.ActionId, 1, DbType.String, ParameterDirection.Input);
                    parameters.Add(CommonVariable.User.Username, user.Username, DbType.String, ParameterDirection.Input);
                    parameters.Add(CommonVariable.User.Password, Common.Common.CommonMethods.EncryptValue(user.Password != null ? user.Password : string.Empty), DbType.String, ParameterDirection.Input);
                    var multipleResults = await _SQLServerHandler.QueryMultipleAsync(_SQLServerHandler.Connection, StroredProc.AuthenticateUser, CommandType.StoredProcedure, parameters);
                    if (multipleResults != null)
                    {
                        userDetailResult.StatusCode = await multipleResults.ReadSingleOrDefaultAsync<Int16>();
                        if (userDetailResult.StatusCode == 200)
                            userDetailResult.objUserDetail = await multipleResults.ReadSingleOrDefaultAsync<User>();
                        //userDetailResult.objUserRightList = (await multipleResults.ReadAsync<UserRight>()).ToList();
                    }
                }
            }
            catch (Exception ex)
            {
                new ErrorLog().WriteLog(ex);
            }
            return userDetailResult;
        }
    }
}
