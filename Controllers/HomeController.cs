using CaseTransfer.Data.Inteface;
using CaseTransfer.Framework.Helper;
using CaseTransfer.Models;
using CaseTransfer.Service.Interface;
using Microsoft.AspNetCore.Mvc;

namespace CaseTransfer.Controllers
{
    public class HomeController : Controller
    {
        CaseTransferModel caseTransferModel = new CaseTransferModel();
        private readonly ICaseTransferServices _caseTransferServices;
        private readonly ICaseTransferRepository _caseTransferRepository;
        public HomeController(ICaseTransferServices _caseTransferServices, ICaseTransferRepository _caseTransferRepository)
        {
            this._caseTransferServices   =  _caseTransferServices;
            this._caseTransferRepository = _caseTransferRepository;
        }

        public async Task<IActionResult> Index()
        {
            return View(await _caseTransferRepository.GetAgencies());
        }

        public async Task<IActionResult> Authenticate(CaseTransferModel user)
        {
            var Response = new Result();
            try
            {
                //string DCPassword = Common.Common.CommonMethods.DecryptValue("QejQhcawT8Et0u23gNWY4g=="); //Use to Decrypt Password
                Response = await _caseTransferServices.AuthenticateUserAsync(user);
                if (Response.ResultData == null || Response.StatusCode != 200)
                    return Unauthorized(Response);

                UserDetailResult objUserDetail = new UserDetailResult();
                objUserDetail = (UserDetailResult)Response.ResultData;

                Response.ResultData = objUserDetail;
            }
            catch (Exception ex)
            {
                new ErrorLog().WriteLog(ex);
                return Unauthorized();
            }
            return Json(Response);
        }

        public IActionResult Privacy()
        {
            return View();
        }
    }
}