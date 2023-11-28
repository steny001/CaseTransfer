﻿/*=========================================================================================
        Failed: 500,
        Referred: 203,
        AlreadyExist: -99,
        EmployeeExists: -97
    };
        RejectFailed: 'Unable to rejected',
    };
        WatertankCleaning: 'Water Tank Cleaning Certificate',
        HoodCleaning: 'Hood Cleaning Certificate',
        ColorScheme: 'Color Scheme',
        UserRights: 'User Rights',
        Login: 'Login',
        UserProfile: 'User Profile',
        ForgotPassword: 'Forgot Password',
        LuminanceLevelChecklist: 'Luminance Level Checklist',
        PreventativeMaintenance: 'Preventive Maintenance',
var ShowToastrMessage = function () {
                if (ToastrType == 1) {
                }
                    ShowToastr(ToastrMessage.SaveFailed, PageName, 'error');
                    ShowToastr(ToastrMessage.DeleteFailed, PageName, 'error');
                    ShowToastr(ToastrMessage.ApproveFailed, PageName, 'error');
                    ShowToastr(ToastrMessage.CancelFailed, PageName, 'error');
                    ShowToastr(ToastrMessage.RejectFailed, PageName, 'error');
        Message: Message
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

//Common User RoleID
//#endregion Functions


var norecord = '';
norecord += '<div class="col-12 norecord">'
    + ' <img src = "../assets/images/no-data-img.jpg" alt = "No Data Available" class="img-fluid" />'
    + '<h4>No records found</h4>'
    + '<p>Sorry, we could not find any matches. <br /> Please try again.</p > '
    + '</div >';