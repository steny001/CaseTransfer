using CaseTransfer.Framework;
using CaseTransfer.Models;

namespace CaseTransfer.Service.Interface
{
    public interface ICaseTransferServices
    {
        //Task<Result> GetAgencies();

        Task<Result> AuthenticateUserAsync(CaseTransferModel user);
    }
}
