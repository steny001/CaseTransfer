using CaseTransfer.Common;
using CaseTransfer.Data.Inteface;
using CaseTransfer.Data.Repository;
using CaseTransfer.Framework;
using CaseTransfer.Framework.Helper;
using CaseTransfer.Models;
using CaseTransfer.Service.Interface;

namespace CaseTransfer.Service.Service
{
    public class CaseTransferServices: ICaseTransferServices
    {
        private readonly ICaseTransferRepository _caseTransferRepository;

        public CaseTransferServices(ICaseTransferRepository _caseTransferRepository)
        {
            this._caseTransferRepository = _caseTransferRepository;
        }

        //public async Task<Result> GetAgencies()
        //{
        //    var Rresult = new Result();

        //    var AllAgncies = await _caseTransferRepository.GetAgencies();
        //    if (AllAgncies != null)
        //    {
        //        Rresult.StatusCode = MessageCatalog.ErrorCodes.Success;
        //        Rresult.StatusMessage = MessageCatalog.ErrorMessages.Success;
        //        Rresult.ResultData = AllAgncies;
        //    }
        //    else
        //    {
        //        Rresult.StatusCode = MessageCatalog.ErrorCodes.Failed;
        //        Rresult.StatusMessage = MessageCatalog.ErrorMessages.Failed; ;
        //    }
        //    return Rresult;
        //}

        public async Task<Result> AuthenticateUserAsync(CaseTransferModel user)
        {
            UserDetailResult objUserDetail = new UserDetailResult();
            var Rresult = new Result();
            try
            {
                objUserDetail = await _caseTransferRepository.AuthenticateUserAsync(user);
                if (objUserDetail.StatusCode == 200 && objUserDetail.objUserDetail != null && !string.IsNullOrEmpty(objUserDetail.objUserDetail.Username))
                {
                    //Hashencryption for password
                    if (!string.IsNullOrEmpty(objUserDetail.objUserDetail.Username))
                    {
                        Rresult.StatusCode = MessageCatalog.ErrorCodes.Success;
                        Rresult.StatusMessage = MessageCatalog.ErrorMessages.Success;
                        Rresult.ResultData = objUserDetail;
                    }
                    else
                    {
                        Rresult.StatusCode = MessageCatalog.ErrorCodes.NoRecordFound;
                        Rresult.StatusMessage = MessageCatalog.ErrorMessages.PasswordIncorrect;
                        Rresult.ResultData = objUserDetail;
                    }
                }
                else
                {
                    if (objUserDetail.StatusCode == -91)
                    {
                        Rresult.StatusCode = MessageCatalog.ErrorCodes.NoRecordFound;
                        Rresult.StatusMessage = MessageCatalog.ErrorMessages.InvalidUserNamePassword;
                    }
                    //else if (objUserDetail.StatusCode == -91)
                    //{
                    //    Rresult.StatusCode = MessageCatalog.ErrorCodes.NoRecordFound;
                    //    Rresult.StatusMessage = MessageCatalog.ErrorMessages.UserNameNotExists;
                    //}
                    //else if (objUserDetail.StatusCode == -92)
                    //{
                    //    Rresult.StatusCode = MessageCatalog.ErrorCodes.NoRecordFound;
                    //    Rresult.StatusMessage = MessageCatalog.ErrorMessages.PasswordIncorrect;
                    //}
                    //else
                    //{
                    //    Rresult.StatusCode = MessageCatalog.ErrorCodes.NoRecordFound;
                    //    Rresult.StatusMessage = MessageCatalog.ErrorMessages.UserNameNotExists;
                    //}
                }
            }
            catch (Exception ex)
            {
                new ErrorLog().WriteLog(ex);
            }
            return Rresult;
        }
    }
}
