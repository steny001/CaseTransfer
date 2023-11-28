//To allow only numbers
function numbersonly(e, decimal, objtxt) {
    // alert('CALL');
    var key;
    var keychar;

    if (window.event) {
        key = window.event.keyCode;
    }
    else if (e) {
        key = e.which;
    }
    else {
        return true;
    }
    keychar = String.fromCharCode(key);

    if ((key == null) || (key == 0) || (key == 8) || (key == 9) || (key == 13) || (key == 27)) {
        return true;
    }
    else if ((("0123456789").indexOf(keychar) > -1)) {
        return true;
    }
    else if (decimal && (keychar == ".") && objtxt.value.indexOf(keychar) == -1 && objtxt.value.length < 6) {
        return true;
    }
    else
        return false;
}

function AlphaNumCheck(e) {
    // alert('mdhgfjkh');
    var charCode = (e.which) ? e.which : e.keyCode;
    if (charCode == 8) return true;

    var keynum;
    var keychar;
    var charcheck = /[0-9\/]/;
    if (window.event) // IE
    {
        keynum = e.keyCode;
    }
    else {
        if (e.which) // Netscape/Firefox/Opera
        {
            keynum = e.which;
        }
        else return true;
    }

    keychar = String.fromCharCode(keynum);
    return charcheck.test(keychar);
}


//To set max length for multiline text box
function checkTextAreaMaxLength(textBox, e, length) {

    var mLen = textBox["MaxLength"];
    if (null == mLen)
        mLen = length;

    var maxLength = parseInt(mLen);
    if (!checkSpecialKeys(e)) {
        if (textBox.value.length > maxLength - 1) {
            if (window.event)//IE
                e.returnValue = false;
            else//Firefox
                e.preventDefault();
        }
    }
}
function checkSpecialKeys(key) {
    //alert('ssss');
    var keycode = (key.which) ? key.which : key.KeyCode;
    //alert(keycode);
    if (keycode != 8 && keycode != 46 && keycode != 37 && keycode != 38 && keycode != 39 && keycode != 40)
        return false;
    else
        return true;
}
function validateMobile(e) {
    var k = (e.which) ? e.which : e.keyCode;
    return ((k > 64 && k < 91) || (k > 96 && k < 123) || k == 8 || (k >= 48 && k <= 57));
}
//**********************Date Validation (Begins)***********************************************

//This script is to return the date to dd/MM/yyyy format
//Author Joyce A.
function GetFormatDate(currentDate) {
    if (currentDate != null) {
        var d = currentDate.getDate();
        var day = (d < 10) ? '0' + d : d;
        var m = currentDate.getMonth() + 1;
        var month = (m < 10) ? '0' + m : m;
        var y = currentDate.getFullYear();
        var Year = (y < 1000) ? y + 1990 : y;
        var rtnDate = new Date();
        rtnDate = (day + "/" + month + "/" + Year);
        return rtnDate;
    }
}

//Function Placed By : Joyce A.
function compareDate(fromDate, toDate) {
    //    alert('Call from compare date');
    //    alert('from date' + fromDate);
    //    alert('to date' + toDate);
    var dtToday = new Date();
    var currentDate = dtToday.getDate() + "/" + (dtToday.getMonth() + 1) + "/" + dtToday.getFullYear();
    var arrayFromDate = fromDate.split("/");
    var arrayToDate = toDate.split("/");

    arrayFromDate[2] = isValidNumber(arrayFromDate[2]) == "0" ? dtToday.getFullYear() : arrayFromDate[2];
    if (arrayFromDate[2] > arrayToDate[2])
        return false;
    else if (arrayFromDate[2] < arrayToDate[2])
        return true;

    arrayFromDate[1] = isValidNumber(arrayFromDate[1]) == "0" ? (dtToday.getMonth() + 1) : arrayFromDate[1];
    if (arrayFromDate[1] > arrayToDate[1])
        return false;
    else if (arrayFromDate[1] < arrayToDate[1])
        return true;

    arrayFromDate[0] = isValidNumber(arrayFromDate[0]) == "0" ? dtToday.getDate() : arrayFromDate[0];
    if (arrayFromDate[0] > arrayToDate[0])
        return false;
    else if (arrayFromDate[0] < arrayToDate[0])
        return true;

    return true;
}


function ValidateFutureDate(sdate) {
    var sSelecteddate = sdate;
    var returnstatus = true;
    var sStart = sSelecteddate.toString().split('/');
    var dd = sStart[0];
    var mm = sStart[1];
    var yyyy = sStart[2];
    var presentdate = new Date();
    var curdate = GetFormatDate(presentdate);
    alert(yyyy + ' ' + mm + ' ' + dd);
    var scurdate = curdate.toString().split('/');
    var cdd = scurdate[0];
    var cmm = scurdate[1];
    var cyyyy = scurdate[2];
    alert(cyyyy + ' ' + cmm + ' ' + cdd);
    if (dd > cdd || mm > cmm || yyyy > cyyyy) {
        return false;
    }
    else {
        return true;
    }
}


function isValidNumber(value) {
    var reg1 = /^[0-9]+$/;
    if (!reg1.test(value)) {
        return "0";
    }
    return value;
}

function isNumericData(value) {
    var reg1 = /^[0-9]+$/;
    var _bIsvalid = reg1.test(value);
    return _bIsvalid;
}
function getDateObject(dateString, dateSeperator) {
    //This function return a date object after accepting
    //a date string ans dateseparator as arguments
    var curValue = dateString;
    var sepChar = dateSeperator;
    var curPos = 0;
    var cDate, cMonth, cYear;

    //extract day portion
    curPos = dateString.indexOf(sepChar);
    cDate = dateString.substring(0, curPos);

    //extract month portion
    endPos = dateString.indexOf(sepChar, curPos + 1); cMonth = dateString.substring(curPos + 1, endPos);

    //extract year portion
    curPos = endPos;
    endPos = curPos + 5;
    cYear = curValue.substring(curPos + 1, endPos);

    //Create Date Object
    dtObject = new Date(cYear, cMonth, cDate);
    return dtObject;
}



//******************************Date Compare Validation (Ends)************************************************