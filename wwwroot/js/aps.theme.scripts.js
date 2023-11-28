/*=========================================================================================
  File Name: aps.theme.script.js
  Description: Audit Processing System Custom Script file
  ----------------------------------------------------------------------------------------
  Item Name:Audit Processing System
  Version: 1.0
  ==========================================================================================*/

//BEGIN: Toaster Methoads
function ShowToastr(message, title, type) {
    toastr.options = {
        "closeButton": false, // true/false
        "debug": false, // true/false
        "newestOnTop": false, // true/false
        "progressBar": false, // true/false
        "positionClass": "toast-top-right", // toast-top-right / toast-top-left / toast-bottom-right / toast-bottom-left
        "preventDuplicates": false, //true//false
        "onclick": null,
        "showDuration": "3000000", // in milliseconds
        "hideDuration": "100", // in milliseconds
        "timeOut": "3000", // in milliseconds
        "extendedTimeOut": "1000", // in milliseconds
        "showEasing": "swing",
        "hideEasing": "linear",
        "showMethod": "fadeIn",
        "hideMethod": "fadeOut"
    }
    switch (type) {
        case "primary":
            toastr.primary(message, title);
            break;
        case "success":
            toastr.success(message, title);
            break;
        case "warning":
            toastr.warning(message, title);
            break;
        case "error":
            toastr.error(message, title);
            break;
        case "info":
            toastr.info(message, title);
            break;
        default:
            break;
    }
}

//END: Toaster Methoads

//BEGIN: Number and Text Validations
// Restricts input for each element in the set of matched elements to the given inputFilter.
(function ($) {
    $.fn.inputFilter = function (inputFilter) {
        return this.on("input keydown keyup mousedown mouseup select contextmenu drop", function () {
            if (inputFilter(this.value)) {
                this.oldValue = this.value;
                this.oldSelectionStart = this.selectionStart;
                this.oldSelectionEnd = this.selectionEnd;
            } else if (this.hasOwnProperty("oldValue")) {
                this.value = this.oldValue;
                this.setSelectionRange(this.oldSelectionStart, this.oldSelectionEnd);
            } else {
                this.value = "";
            }
        });
    };
}(jQuery));

// This function allows only Numbers
function AllowNumbersOnly(num) {
    var id = num;
    $("#" + id).inputFilter(function (value) {
        return /^-?\d*[.,]?\d*$/.test(value);
    });
}
function AllowNumbersOnlyZip(num) {
    var id = num;
    $("#" + id).inputFilter(function (value) {
        return /^-?\d*[.,-]?\d*$/.test(value);
    });
}
// This function allows only Characters,dot, hyphen and apostrophe
function AllowCharectersOnly(idattr) {
    var id = idattr;
    $("#" + id).inputFilter(function (value) {
        //return /^[a-z'-.]*$/i.test(value); 
        return /^[a-z-.' ]*$/i.test(value);
    });
}
function AllowCharectersOnlyFamilyName(idattr) {
    var id = idattr;
    $("#" + id).inputFilter(function (value) {
        //return /^[a-z'-.]*$/i.test(value); 
        return /^[a-z-.&' ]*$/i.test(value);
    });
}
function AllowNumbersOnlyPhone(num) {
    var id = num;
    $("#" + id).inputFilter(function (value) {
        return /^-?\d*[.,() ]?\d*$/.test(value);
    });
}
//END: Number and Text Validation
//BEGIN: Confirmation Message Box Functions
function MsgboxAlertConfirmDelete(targetCntrl, event, CustomMsg) {
    if (!CustomMsg) {
        CustomMsg = 'record';
    }
    if (targetCntrl.dataset.confirmed) {
        // The action was already confirmed by the user, proceed with server event
        targetCntrl.dataset.confirmed = false;
        return true;
    }
    else {
        // Ask the user to confirm/cancel the action
        event.preventDefault();
        $.msgbox("Are you sure you want to delete this " + CustomMsg + "?",
            {
                type: "confirm",
                buttons: [{ type: "submit", value: "Yes" }, { type: "cancel", value: "No" }]
            },
            function (result) {

                if (result == 'Yes') {
                    // Set data-confirmed attribute to indicate that the action was confirmed
                    targetCntrl.dataset.confirmed = true;
                    // Trigger button click programmatically
                    targetCntrl.click();
                }

            }
        );
    }

}




function MsgboxAlertConfirmCustomMsg(targetCntrl, event, CustomMsg) {
    if (!CustomMsg) {
        CustomMsg = 'record';
    }
    if (targetCntrl.dataset.confirmed) {
        // The action was already confirmed by the user, proceed with server event
        targetCntrl.dataset.confirmed = false;
        return true;
    }
    else {
        // Ask the user to confirm/cancel the action
        event.preventDefault();
        $.msgbox(CustomMsg + "?",
            {
                type: "confirm",
                buttons: [{ type: "submit", value: "Yes" }, { type: "cancel", value: "No" }]
            },
            function (result) {

                if (result == 'Yes') {
                    // Set data-confirmed attribute to indicate that the action was confirmed
                    targetCntrl.dataset.confirmed = true;
                    // Trigger button click programmatically
                    targetCntrl.click();
                }

            }
        );
    }

}
//END: Confirmation Message Box Functions
//BEGIN: Datatable Grid Styles
// Commont Style for All the Grids with Removed first column sorting
function ApplyCommonGridStyle(norecordmessage) {
    var table = $('.table');
    var oTable = table.DataTable({
        responsive: true,
        ordering: true,
        "bLengthChange": true, //thought this line could hide the LengthMenu
        "bInfo": true,
        "columnDefs": [{
            "orderable": false,
            "targets": [0]
        },
            { "width": "100px", "targets": 0 }
        ],
        "order": [
            [1, 'asc']
        ],
        "language": {
            "emptyTable": norecordmessage
        },
        "lengthMenu": [
            [25, 50, 75, -1],
            [25, 50, 75, "All"] // change per page values here
        ],
        "pageLength": 25
    });
}
function ApplyAllSortingGridStyle(norecordmessage) {
    var table = $('.table');
    var oTable = table.DataTable({
        responsive: true,
        ordering: true,
        "bLengthChange": true, //thought this line could hide the LengthMenu
        "bInfo": true,
        "columnDefs": [{
            "orderable": false,
            "targets": [0]
        },
            { "width": "100px", "targets": 0 }
        ],
        "order": [
            [1, 'asc']
        ],
        "language": {
            "emptyTable": norecordmessage
        },
        "lengthMenu": [
            [10, 25, 50, 75, -1],
            [10, 25, 50, 75, "All"] // change per page values here
        ],
        "pageLength": 25,
    });
}
function ApplyNormalGridStyle() {
    var table = $('.table');
    var oTable = table.dataTable({
        "paging": false,
        "ordering": false,
        "searching": false,
        "scrollX": true,
        "scrollCollapse": true,

    });
    var tableWrapper = $('.datatable_wrapper'); // datatable creates the table wrapper by adding with id {your_table_jd}_wrapper
}
function ApplyScrollingGridStyle() {
    table = $('.table').DataTable({
        responsive: true,
        ordering: true,
        "bLengthChange": false, //thought this line could hide the LengthMenu
        "bInfo": true,
        "columnDefs": [{
            "orderable": false,
            "targets": [0]
        },
        { "width": "30px", "targets": 0 },
        ],
        "order": [
            [1, 'asc']
        ],
        "language": {
            "emptyTable": 'No data available in table'
        },
        "lengthMenu": [
            [25, 50, 75, -1],
            [25, 50, 75, "All"] // change per page values here
        ],       
        scrollY: "200px",
        scrollX: true,
        scrollCollapse: true,
        paging: false,
    });
}
//Server Side 
function ApplyCommonGridStyleServerSide(tableid, url, colunms) {
    $("#" + tableid).DataTable({
        "processing": true,
        "serverSide": true,
        "responsive": true,
        "ordering": true,
        "bLengthChange": true, //thought this line could hide the LengthMenu
        "bInfo": true,
        "bAutoWidth": false,
        "columnDefs": [{
            "orderable": false,
            "targets": [0]
        },
            { "width": "100px", "targets": 0 }
        ],
        "order": [
            [1, 'asc']
        ],
        "language": {
            "emptyTable": ''
        },
        "ajax": {
            "url": ($("#hdnSAPTAPIBaseURL").val() + url),
            "type": "POST",
            "datatype": "json",
            "headers": {
                Authorization: 'Bearer ' + $('#txttoken').val()
            },
            "contentType": "application/json",
            data: function (d) {
                return JSON.stringify(d);
            },
            error: function (err) {

            }
        },
        columns: colunms,
        "lengthMenu": [
            [ 25, 50, 75, -1],
            [ 25, 50, 75, "All"] // change per page values here
        ],
        "pageLength": 25,
    });
}
//END: Datatable Grid Styles
//Custom sort Sever side bindinig
function ApplyCommonGridStyleServerSideCustomSort(tableid, url, colunms,SortColumn,SortType) {
    $("#" + tableid).DataTable({
        "processing": true,
        "serverSide": true,
        "responsive": true,
        "ordering": true,
        "bLengthChange": true, //thought this line could hide the LengthMenu
        "bInfo": true,
        "bAutoWidth": false,
        "columnDefs": [{
            "orderable": false,
            "targets": [0]
        },
        { "width": "100px", "targets": 0 }
        ],
        "order": [
            [SortColumn, SortType]
        ],
        "language": {
            "emptyTable": ''
        },
        "ajax": {
            "url": ($("#hdnSAPTAPIBaseURL").val() + url),
            "type": "POST",
            "datatype": "json",
            "headers": {
                Authorization: 'Bearer ' + $('#txttoken').val()
            },
            "contentType": "application/json",
            data: function (d) {
                return JSON.stringify(d);
            },
            error: function (err) {

            }
        },
        columns: colunms,
        "lengthMenu": [
            [25, 50, 75, -1],
            [25, 50, 75, "All"] // change per page values here
        ],
        "pageLength": 25,
    });
}
//END
//BEGIN: Datepicker Functions
function DataofBirth() {
    $('.birth-date').datepicker({
        orientation: "left",
        autoclose: true,
        format: 'mm/dd/yyyy',
        "setDate": "-21y",
        endDate: "-21y",
        todayBtn: false,
        todayHighlight: true,
        //startView: 4
    });
}
function Datepicker() {
    $('.date-picker').datepicker({
        orientation: "left",
        autoclose: true,
        format: 'mm/dd/yyyy',
        "setDate": new Date(),
        todayBtn: false,
        todayHighlight: true,
    }).datepicker("setDate", "0");
}
//Year Picker
function Yearlypicker() {
    $('.yearly-picker').datepicker({
        autoclose: true,
        minViewMode: 2,
        format: 'yyyy',
        startDate: new Date()
    });
}
//END: Datepicker Functions
//BEGIN: Datetimepicker Function
function Timepicker() {
    $('.time-picker').datetimepicker({
        useCurrent: false,
        format: "hh:mm A",
    }).on('dp.show', function () {
        let firstOpen;
        if (firstOpen) {
            time = moment().startOf('day');
            firstOpen = false;
        } else {
            time = "01:00 PM"
        }

        $(this).data('DateTimePicker').date(time);
    });
}
//$('.time-picker').on('click', function () {
//    $(this).data('datetimepicker').show();
//});

//$('.time-picker').on('blur', function () {
//    $(this).data('datetimepicker').show();
//});
//END: Datetimepicker Function
//BEGIN: Color Picker Function
function Colorpicker() {
   $('.color-picker').each(function () {
        $(this).minicolors({
            control: $(this).attr('data-control') || 'hue',
            defaultValue: $(this).attr('data-defaultValue') || '',
            format: $(this).attr('data-format') || 'hex',
            keywords: $(this).attr('data-keywords') || '',
            inline: $(this).attr('data-inline') === 'true',
            letterCase: $(this).attr('data-letterCase') || 'lowercase',
            opacity: $(this).attr('data-opacity'),
            position: $(this).attr('data-position') || 'bottom',
            swatches: $(this).attr('data-swatches') ? $(this).attr('data-swatches').split('|') : [],
            change: function (value, opacity) {
                if (!value) return;
                if (opacity) value += ', ' + opacity;
                if (typeof console === 'object') {
                    console.log(value);
                }
            },
            theme: 'bootstrap'
        });

    });
}
//END: Color Picker Function

//BEGIN: Footer Align Bottom
function footerAlign() {
    $('footer').css('display', 'block');
    $('footer').css('height', 'auto');
    var footerHeight = $('footer').outerHeight();
    $('body').css('padding-bottom', footerHeight);
    $('footer').css('height', footerHeight);
}
//END: Footer Align Bottom

//BEGIN: Main menu and Sub Menu relatated Scripts
$(".main-menu").click(function () {
    $('.main-menu-header').slideToggle('slow');
})
$(document).mouseup(function (e) {
    var container = $(".main-menu-header");

    // if the target of the click isn't the container nor a descendant of the container
    if (!container.is(e.target) && container.has(e.target).length === 0) {
        container.hide();
    }
});
$(function () {
    footerAlign();
    var url = window.location.pathname,
        urlRegExp = new RegExp(url.replace(/\/$/, '') + "$"); // create regexp to match current url pathname and remove trailing slash if present as it could collide with the link in navigation in case trailing slash wasn't present there
    // now grab every link from the navigation
    $('.sub-menu-list a').each(function (i) {       
        if (urlRegExp.test(this.href.replace(/\/$/, ''))) {
            $('.sub-menu-list a').removeClass('active');
            $(this).addClass('active');                    
            const number = i;
            const result = number % 2;
            debugger
            if (i > 5) {
                
                if (result == 0) {
                    let even = i + 1;
                    $('.owl-carousel').trigger('to.owl.carousel', even);
                    console.log(even)
                }
                else {
                    $('.owl-carousel').trigger('to.owl.carousel', i);
                    console.log(i)
                }
            }
                            
        }
        
    });
  
});
//END: Main Menu and Sub Menu related Scripts

//BEGIN: Confirmation Message Box Functions
function MsgboxAlertConfirm(targetCntrl, event, CustomMsg) {
    if (!CustomMsg) {
        CustomMsg = 'record';
    }
    if (targetCntrl.dataset.confirmed) {
        // The action was already confirmed by the user, proceed with server event
        targetCntrl.dataset.confirmed = false;
        return true;
    }
    else {
        // Ask the user to confirm/cancel the action
        event.preventDefault();
        $.msgbox(CustomMsg + "?",
            {
                type: "confirm",
                buttons: [{ type: "submit", value: "Yes" }, { type: "cancel", value: "No" }]
            },
            function (result) {

                if (result == 'Yes') {
                    // Set data-confirmed attribute to indicate that the action was confirmed
                    targetCntrl.dataset.confirmed = true;
                    // Trigger button click programmatically
                    targetCntrl.click();
                }

            }
        );
    }
}
//END: Confirmation Message Box Functions


// BEGIN: Currency Formatter
$("input[data-type='currency']").on({
    keyup: function () {
        formatCurrency($(this));
    },
    blur: function () {
        formatCurrency($(this), "blur");
    }
});
function formatCurrency(input, blur) {
    // appends $ to value, validates decimal side
    // and puts cursor back in right position.

    // get input value
    var input_val = input.val();

    // don't validate empty input
    if (input_val === "") { return; }

    // original length
    var original_len = input_val.length;

    // initial caret position
    var caret_pos = input.prop("selectionStart");

    // check for decimal
    if (input_val.indexOf(".") >= 0) {

        // get position of first decimal
        // this prevents multiple decimals from
        // being entered
        var decimal_pos = input_val.indexOf(".");

        // split number by decimal point
        var left_side = input_val.substring(0, decimal_pos);
        var right_side = input_val.substring(decimal_pos);

        // add commas to left side of number
        left_side = formatNumber(left_side);

        // validate right side
        right_side = formatNumber(right_side);

        // On blur make sure 2 numbers after decimal
        if (blur === "blur") {
            right_side += "00";
        }

        // Limit decimal to only 2 digits
        right_side = right_side.substring(0, 2);

        // join number by .
        input_val = left_side + "." + right_side;

    } else {
        // no decimal entered
        // add commas to number
        // remove all non-digits
        input_val = formatNumber(input_val);
        input_val = input_val;

        // final formatting
        if (blur === "blur") {
            input_val += ".00";
        }
    }

    // send updated string to input
    input.val(input_val);

    // put caret back in the right position
    var updated_len = input_val.length;
    caret_pos = updated_len - original_len + caret_pos;
    input[0].setSelectionRange(caret_pos, caret_pos);
}
//This function using for Currency format
function formatNumber(n) {
    // format number 1000000 to 1,234,567
    return n.replace(/\D/g, "").replace(/\B(?=(\d{3})+(?!\d))/g, ",")
}

//END: Currency formatter

//BEGIN: Clear Validation
function ClearValidationMessage() { 
    $('form').validate().resetForm();
    $('.form-group.has-error').find(".help-block-error").remove();
    $(".form-group").removeClass("has-error");
}
$(".modal").on('hide.bs.modal', function () {
    ClearValidationMessage()
});
$(document).ready(function () {
    $("input:disabled").parent(".input-icon-group").addClass("disabled-parent");
})
$('.nav-pills .nav-link').on('hide.bs.tab', function (e) {
    ClearValidationMessage()
});
$('.nav-pills .nav-link').on('show.bs.tab', function () {
    ClearValidationMessage()
});
//END: Clear Validation