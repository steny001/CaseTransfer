using CaseTransfer.Data;
using CaseTransfer.Data.Inteface;
using CaseTransfer.Framework;
using CaseTransfer.Models;
using CaseTransfer.Service.Interface;
using Microsoft.AspNetCore.Mvc;

namespace CaseTransfer.Controllers
{
    public class DashboardController : Controller
    {
        CaseTransferModel caseTransferModel = new CaseTransferModel();
        private readonly IDashboardService _dashboardService;
        public DashboardController(IDashboardService _dashboardService)
        {
            this._dashboardService = _dashboardService;
        }
        public IActionResult AdminDashboard()
        {
            return View();
        }

        public async Task<IActionResult> GetCaseDetailsByAdmin()
        {
            return Json(await _dashboardService.GetCaseDetailsByAgencyAdmin());
        }
    }
}
