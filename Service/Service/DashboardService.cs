using CaseTransfer.Data.Inteface;
using CaseTransfer.Framework;
using CaseTransfer.Models;
using CaseTransfer.Service.Interface;

namespace CaseTransfer.Service.Service
{
    public class DashboardService: IDashboardService
    {
        private readonly IDashboardRepository _dashboardRepository;

        public DashboardService(IDashboardRepository _dashboardRepository)
        {
            this._dashboardRepository = _dashboardRepository;
        }

        public async Task<Result> GetCaseDetailsByAgencyAdmin()
        {

            var Rresult = new Result();

            var CaseDetails = await _dashboardRepository.GetCaseDetailsByAgencyAdmin();
            if (CaseDetails != null)
            {
                Rresult.StatusCode = MessageCatalog.ErrorCodes.Success;
                Rresult.StatusMessage = "Record is success";
                Rresult.ResultData = CaseDetails;
            }
            else
            {
                Rresult.StatusCode = MessageCatalog.ErrorCodes.Failed;
                Rresult.StatusMessage = "Failed to save";
            }
            return Rresult;
        }
    }
}
