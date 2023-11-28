using CaseTransfer.Framework;
using CaseTransfer.Models;
using System.Threading.Tasks;

namespace CaseTransfer.Data.Inteface
{
    public interface IDashboardRepository
    {
        Task<CaseDetailResult> GetCaseDetailsByAgencyAdmin();

    }
}
