using CaseTransfer.Framework;
using CaseTransfer.Models;

namespace CaseTransfer.Data.Inteface
{
    public interface ICaseTransferRepository
    {

        Task<CaseTransferModel> GetAgencies();
        Task<UserDetailResult> AuthenticateUserAsync(CaseTransferModel user);
    }
}
