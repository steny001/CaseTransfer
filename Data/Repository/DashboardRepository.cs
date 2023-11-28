using CaseTransfer.Data.Inteface;
using CaseTransfer.DBEngine;
using CaseTransfer.Framework.Helper;
using CaseTransfer.Framework;
using CaseTransfer.Models;
using System.Data;
using Dapper;

namespace CaseTransfer.Data.Repository
{
    public class DashboardRepository : IDashboardRepository
    {
        CaseTransferModel caseTransferModel = new CaseTransferModel();

        private readonly ISQLServerHandler _SQLServerHandler;

        #region Constructor
        public DashboardRepository(ISQLServerHandler sQLServerHandler)
        {
            _SQLServerHandler = sQLServerHandler;
        }
        #endregion Constructor


        public async Task<CaseDetailResult> GetCaseDetailsByAgencyAdmin()
        {
            CaseDetailResult caseDetailResult = new CaseDetailResult();
            try
            {
                using (_SQLServerHandler.Connection)
                {
                    var parameters = new DynamicParameters();
                    parameters.Add(CommonVariable.User.Arabic, 1, DbType.String, ParameterDirection.Input);
                    var multipleResults = await _SQLServerHandler.QueryMultipleAsync(_SQLServerHandler.Connection, StroredProc.GetCaseDetailsByAgencyAdmin, CommandType.StoredProcedure, parameters);

                    if (multipleResults != null)
                    {
                        caseDetailResult.CaseDetailsList = (await multipleResults.ReadAsync<CaseDetails>()).ToList();
                    }
                }
            }
            catch (Exception ex)
            {
                new ErrorLog().WriteLog(ex);
            }
            return caseDetailResult;
        }

    }
}
