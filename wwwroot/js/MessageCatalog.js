/*=========================================================================================    File Name: MessageCatalog.js    Description:      --------------------------------------------------------------------------------------    Application Name: Audit Processing System    Version: 1.0==========================================================================================*///#region Functions//Common toaster MessageCodevar MessageCode = function () {    return {        Success: 200,
        Failed: 500,
        Referred: 203,
        AlreadyExist: -99,        PasswordIncorrect: -92,        PreconditionFailed: 412,
        EmployeeExists: -97
    };}();//Common toaster Messagevar ToastrMessage = function () {    return {        SaveSuccess: 'Saved Successfully',         AuditClosed: 'Audit closed successfully.',         AuditClosedFailed: 'Unable to close',         SaveFailed: 'Unable to save',        DeleteSuccess: 'Deleted Successfully',        DeleteFailed: 'Unable to delete',        ApproveSuccess: 'Approved Successfully',        ApproveFailed: 'Unable to approve',        CancelSuccess: 'Canceled Successfully',        CancelFailed: 'Unable to cancel',        Exists: 'Already Exists',        EmailExists: 'Email already exists',        EmployeeExists: 'Employee number exists already',        Referred: 'Record Referred',        FieldRequiredValidation: 'Please fill in the required fields',        SopFieldRequiredValidation: 'SOP grid should have atleast one record',        SopimportValidation: 'Please upload only excel file or file name is invalid',        RegisterSuccess: 'You have registered successfully',        RegisterFailed: 'Unable to register',        LoginrFailed: 'Unable to login',        InvalidMail: 'The given email is not registered or user can be in inactive/waiting for approval status',        SecurityNotMatch: 'Answer does not match for the prompted question',        RejectSuccess: 'Rejected Successfully',
        RejectFailed: 'Unable to rejected',        FileSizeValidation: 'File size limit is 2 Mb. Could not attach image',        FileFormatValidation: 'Please choose only .jpg, .jpeg, .png, .gif file formats',        FileUploadrestriction: 'You can upload only 3 files. Please remove and upload the files again',        PublishSuccess: 'Published Successfully',        VersionSuccess: 'Created Successfully',        PublishFailed: 'Unable to Publish',
    };}();//Common toaster Typevar ToastrType = function () {    return {        primary: 'primary',        success: 'success',        warning: 'warning',        info: 'info',        error: 'error',    };}();//toaster Message Page Name var ToasterMessagePageName = function () {    return {        UserRole: 'User Role',        UserDetail: 'User',        MasterThermometer: 'Master Thermometer Certificate',
        WatertankCleaning: 'Water Tank Cleaning Certificate',
        HoodCleaning: 'Hood Cleaning Certificate',        LuxMeterCalibrationCertificate: 'Lux Meter Calibration Certificate',        ChargesSheet: 'Charges Sheet',
        ColorScheme: 'Color Scheme',
        UserRights: 'User Rights',        ViolationPoints: 'Violation Points',        ApplicationSettings: 'Application Settings',        AuditScheduleSettings: 'Audit Schedule Settings',        Sop: 'Standard Operating Procedure',        Supplier: 'Supplier Details',        AuditGroups: 'Audit Groups',        AuditSchedule: 'Audit Schedule',        FSQ1: 'Fire and Safety Quarterly Inspection 1',        FSQ2: 'Fire and Safety Quarterly Inspection 2',        ActionItemOfconductedAudit: 'Action Items of Conducted Audit',        ActionItemComment: 'Action Item Comment',        AddComments: 'Add Comments',        Vendor: 'Vendor/Service Provider Details',        Registration: 'Registration',
        Login: 'Login',
        UserProfile: 'User Profile',
        ForgotPassword: 'Forgot Password',
        LuminanceLevelChecklist: 'Luminance Level Checklist',        PostComplaints: 'Post Complaint',        ActionToCompaint: 'Action on Complaint',        RegisterYourComplaints: 'Register Your Complaint',        ComplaintDetails: 'Complaint Details',        Employee: 'Employee',        ReportSettings: 'Report Settings',
        PreventativeMaintenance: 'Preventive Maintenance',        WatertankCleaningModule: 'Water Tank Cleaning Details',        Artifact: 'Artifact',        EducationInfo: 'Educational Information',        ProfessionalInfo: 'Professional Information',        ReportSettings:'Report Settings',        ForgotPassword: 'Forgot Password',        SOPCorrection: 'SOP Correction',        SOPCorrectionClause: 'SOP Correction Clause',        RescheduleRequest: 'Reschedule Request',        StandardOperatingProcedure:'SOP Clause',        WaterTankCleaningDetailsImage: 'Water Tank Image',        ConductAudit: 'Conduct Audit',        ChangePassword: 'Change Password',        AuditChecklist: 'Audit Checklist',        CompleteAudit: 'Complete Audit',        Auditobservation: 'Audit Observation',        CalibrationChiller: 'Calibration Chiller'    };}();
var ShowToastrMessage = function () {    Message = function (Code, PageName, ToastrType = 0) {        var IsSuccess = 0;        switch (Code) {            //If ToastrType Value = 1 - Save , 2 - Delete , 3 - Approve , 4 -Cancele  , 5 - Reject             case MessageCode.Success:
                if (ToastrType == 1) {                    IsSuccess = 1;                    ShowToastr(ToastrMessage.SaveSuccess, PageName, 'success');
                }                else if (ToastrType == 2) {                    ShowToastr(ToastrMessage.DeleteSuccess, PageName, 'success');                }                else if (ToastrType == 3) {                    IsSuccess = 1;                    ShowToastr(ToastrMessage.ApproveSuccess, PageName, 'success');                }                else if (ToastrType == 4) {                    ShowToastr(ToastrMessage.CancelSuccess, PageName, 'success');                }                else if (ToastrType == 5) {                    ShowToastr(ToastrMessage.RejectSuccess, PageName, 'success');                }                break;            case MessageCode.Failed:                if (ToastrType == 1)
                    ShowToastr(ToastrMessage.SaveFailed, PageName, 'error');                else if (ToastrType == 2)
                    ShowToastr(ToastrMessage.DeleteFailed, PageName, 'error');                else if (ToastrType == 3)
                    ShowToastr(ToastrMessage.ApproveFailed, PageName, 'error');                else if (ToastrType == 4)
                    ShowToastr(ToastrMessage.CancelFailed, PageName, 'error');                else if (ToastrType == 5)
                    ShowToastr(ToastrMessage.RejectFailed, PageName, 'error');                break;            case MessageCode.Referred:                ShowToastr(ToastrMessage.Referred, PageName, 'warning');                break;            case MessageCode.AlreadyExist:                ShowToastr(ToastrMessage.Exists, PageName, 'warning');                break;            case MessageCode.EmployeeExists:                ShowToastr(ToastrMessage.EmployeeExists, PageName, 'warning');                break;            default:                break;        }        return IsSuccess;    }    return {
        Message: Message    };}();// BEGIN: Currency Formatter$("input[data-type='currency']").on({    keyup: function () {        formatCurrency($(this));    },    blur: function () {        formatCurrency($(this), "blur");    }});function formatCurrency(input, blur) {    // appends $ to value, validates decimal side    // and puts cursor back in right position.    // get input value    var input_val = input.val();    // don't validate empty input    if (input_val === "") { return; }    // original length    var original_len = input_val.length;    // initial caret position    var caret_pos = input.prop("selectionStart");    // check for decimal    if (input_val.indexOf(".") >= 0) {        // get position of first decimal        // this prevents multiple decimals from        // being entered        var decimal_pos = input_val.indexOf(".");        // split number by decimal point        var left_side = input_val.substring(0, decimal_pos);        var right_side = input_val.substring(decimal_pos);        // add commas to left side of number        left_side = formatNumber(left_side);        // validate right side        right_side = formatNumber(right_side);        // On blur make sure 2 numbers after decimal        if (blur === "blur") {            right_side += "00";        }        // Limit decimal to only 2 digits        right_side = right_side.substring(0, 2);        // join number by .        input_val = left_side + "." + right_side;    } else {        // no decimal entered        // add commas to number        // remove all non-digits        input_val = formatNumber(input_val);        input_val = input_val;        // final formatting        if (blur === "blur") {            input_val += ".00";        }    }    // send updated string to input    input.val(input_val);    // put caret back in the right position    var updated_len = input_val.length;    caret_pos = updated_len - original_len + caret_pos;    input[0].setSelectionRange(caret_pos, caret_pos);}//This function using for Currency formatfunction formatNumber(n) {    // format number 1000000 to 1,234,567    return n.replace(/\D/g, "").replace(/\B(?=(\d{3})+(?!\d))/g, ",")}//END: Currency formatter//Common User Rights Code
var RightsCode = function () {
    return {
        Read: 1,
        Write: 2,
        Deny: 3
    };
}();

//Menu Codes 
var MenuCodes = function () {
    return {
        //Main Modules
        Dashboard: 'liDashboard',
         //Sub Modules
        UsersDB: 'liUsersDB',
        AuditDB: 'liAuditDB',
        ComplainceDB: 'liComplianceDB',
        HappensNowDB: 'liHappensNowDB',
        ReviewerApproverDB : 'liReviewerApproverDB',
        GeneralRenwalsCalibrationDB: 'liGeneralRenwalsCalibrationDB',

        QualitySystem        : 'liQualitySystem',
        Audit                : 'liAudit',
        Administration       : 'liAdministration',
        Reports              : 'liReports',
        Complaints           : 'liComplaints',
        Chargesheet          : 'liChargesheet',
        General              : 'liGeneral',

        //Sub Modules
        //--Quality System
        Policy               : 'liPolicy',
        SOP                  : 'liSOP',
        CheckList            : 'liChecklist',
        Guideline            : 'liGuideline',
        Template             : 'liTemplate',
        ArtifactToBeReviewed : 'liArtifactToBeReviewed',

        //--Audit
        AuditSchedule        : 'liAuditSchedule',
        AuditChecklist       : 'liAuditChecklisk',
        AuditGroups          : 'liAuditGroups',
        ActionItems          : 'liActionItems',
        QuickAudit           : 'liQuickAudit',

        //--Administration
        Users                : 'liUsers',
        UserRights           : 'liUserRights',
        ApplicationSettings  : 'liApplicationSettings',
        LevelInformation     : 'liLevelInformation',
        SupportData          : 'liSupportData',
        Supplier             : 'liSuppliers',
        ViolationPoints      : 'liViolationPoints',
        ColorScheme          : 'liColorScheme',
        ReportSettings       : 'liReportSettings',
        AuditScheduleSettings: 'liAuditScheduleSettings',
        UserRole             : 'liUserRole',
        SOPCorrection        : 'liSOPCorrection',
        Location             : 'liLocation',
        Vendors              : 'liVendors',

        //--Reports
        AuditResult                   : 'liAuditResult',
        FollowupSummary               : 'liFollowupSummary',
        AnnualAuditCalendar           : 'liAnnualAuditCalendar',
        YearwiseComparativeReport     : 'liYearwiseComparativeReport',
        FunctionwiseComparisionReport : 'liFunctionwiseComparisionReport',
        AuditorsAuditSummary          : 'liAuditorsAuditSummary',
        AuditeesAuditSummary          : 'liAuditeesAuditSummary',
        TopPerformersReport           : 'liTopPerformersReport',
        AuditResponseReport           : 'liAuditResponseReport',
        AuditPlanExecutionSummary     : 'liAuditPlanExecutionSummary',
        CumulativeAuditReport         : 'liCumulativeAuditReport',
        AnnualAuditSummary            : 'liAnnualAuditSummary',
        SubReport                     : 'liSubReport',

        //--Complaints
        ComplaintsAndActions          : 'liComplaintsActions',
        PostComplaint                 : 'liPostComplaint',
                                      
        //--Chargesheet               
        Employee                      : 'liEmployees',
        ChargeSheet                   : 'liChargesheets',
        ViolationPointsCS             : 'liViolationPointsCS',
        ViolationPointsOccurrence     : 'liPostComplaint',

        //--General
        WaterTankCleaning: 'liWaterTankCleaning',
        LuminanceLevelChecklist: 'liLuminanceLevelChecklist',
        FireAndSafetyQI1: 'liFireandSafetyQI1',
        FireAndSafetyQI2: 'liFireandSafetyQI2',
        CalibrationChiller: 'liCalibrationChiller',
        PreventativeMaintenance: 'liPreventativeMaintenance',
        PreventativePlanSchedule: 'liPreventativePlanSchedule',
        PreventativeMaintenanceChecklist: 'liPreventativeMaintenanceChecklist',
        PreventativeMaintenanceRecord: 'liPreventativeMaintenanceRecord',
        Certificate                      : 'liCertificates',
    };
}();

//Common toaster MessageCode
var AuditResult = function () {
    return {
        Scheduled: 1,
        Cancelled: 2,
        Review: 3,
        Completed: 4,
        Rescheduled: 5,
        Closed: 6,
        InProgress: 7,
    };
}();

//Common User RoleIDvar Roles = function () {    return {        Prisident: 1,        VicePresident: 2,        HygieneManager: 3,        DepartmentManager: 4,        Auditor: 5,        Auditee: 6,        Administrator: 7,        Staff: 8    };}();
//#endregion Functions


var norecord = '';
norecord += '<div class="col-12 norecord">'
    + ' <img src = "../assets/images/no-data-img.jpg" alt = "No Data Available" class="img-fluid" />'
    + '<h4>No records found</h4>'
    + '<p>Sorry, we could not find any matches. <br /> Please try again.</p > '
    + '</div >';