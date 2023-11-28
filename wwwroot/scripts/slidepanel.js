$(document).ready(function () {

    $(".btn-slide").click(function () {

        $("#panel").slideToggle("slow");
        $("#txtloginUsername").focus();
        $(this).toggleClass("active"); return false;
    });


});