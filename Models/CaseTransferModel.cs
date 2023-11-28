namespace CaseTransfer.Models
{

    public class CaseTransferModel
    {
        public List<Agency>? objAgencyList;

        public User? objUser;

        public List<User>? objUserList;

        public string? Username { get; set; }
        public string? Password { get; set; }

    }

    public class Agency
    {
        public long AgencyId { get; set; }

        public string? AgencyCode { get; set; }

        public string? AgencyName { get; set; }

        public string? Address1 { get; set; }

        public string? Address2 { get; set; }

        public long EmiratesId { get; set; }

        public long CountryId { get; set; }

        public string? ContactNo { get; set; }

        public string? Area { get; set; }

        public string? PoboxNo { get; set; }

        public string? AgencyLogo { get; set; }

        public string? LogoPath { get; set; }

        public string? AgencyDescription { get; set; }

        public int? Dfwac { get; set; }

        public bool? IsActive { get; set; }
    }


    public class User
    {
        public long UserId { get; set; }

        public string? FirstName { get; set; }

        public string? LastName { get; set; }

        public string? PhoneNo { get; set; }

        public int DepartmentId { get; set; }

        public string? Username { get; set; }

        public string? Password { get; set; }

        public int AgencyId { get; set; }

        public int RoleId { get; set; }

        public int JobTitleId { get; set; }

        public bool? IsActive { get; set; }
    }

    public class CaseDetails
    {
        public string? Agency { get; set; }
        public string? ClientName { get; set; }
        public string? CaseNumber { get; set; }
        public string? Gender { get; set; }
        public string? TFrom { get; set; }
        public string? TTo { get; set; }
        public string? ResponseBy { get; set; }
        public string? SeverityLevelText { get; set; }
        public string? Transferredfrom { get; set; }
        public string? Assignedto { get; set; }
        public string? Casemanager { get; set; }
        public string? Status { get; set; }
        public string? CaseStatus { get; set; }
        public string? ResponseByStatus { get; set; }
        public int TransferId { get; set; }
        public int SeverityLevel { get; set; }
        public DateTime? TransferredDate { get; set; }
        public DateTime? RequestedDate { get; set; }
    }

    public class Result
    {
        public Int64 StatusCode { get; set; }
        public string? StatusMessage { get; set; }
        public object? ResultData { get; set; }
        public object? ReturnValue { get; set; }

    }
    public class GetResultArgs
    {
        public Int64 StatusCode { get; set; }
        public string? StatusMessage { get; set; }
        public object? ResultData { get; set; }
        public Int64 TotalResultCount { get; set; }
        public Int64 FilteredResultCount { get; set; }

    }

    public class UserDetailResult
    {
        public User? objUserDetail { get; set; }
        //public List<UserRight>? objUserRightList { get; set; }
        public Int16? StatusCode { get; set; }
    }

    public class CaseDetailResult
    {
        public List<CaseDetails> CaseDetailsList { get; set; }
    }
}
