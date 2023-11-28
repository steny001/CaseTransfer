using CaseTransfer.Models;

namespace CaseTransfer.Service.Interface
{
    public interface IDashboardService
    {
        Task<Result> GetCaseDetailsByAgencyAdmin();
    }
}
