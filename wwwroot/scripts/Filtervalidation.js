$(document).ready(function () {
    SetIncidentText = function () {
        var count = $("[id*=cblIncidentList] input:checkbox:checked").length;
        if (count > 0) {
            var checked_checkboxes = $("[id*=cblIncidentList] input:checked");
            var SelectedItems = "";
            checked_checkboxes.each(function () {
                var value = $(this).val();
                var text = $(this).closest("td").find("label").html();
                SelectedItems = SelectedItems + text + ",";
            });
            SelectedItems = SelectedItems.substring(0, SelectedItems.length - 1)
            $('#txtIncident').val(SelectedItems);
        }
        else {
            $('#txtIncident').val(" -- All --");
        }
    }
    SetStatusText = function () {
        var count = $("[id*=cblStatus] input:checkbox:checked").length;
        if (count > 0) {
            var checked_checkboxes = $("[id*=cblStatus] input:checked");
            var SelectedItems = "";
            checked_checkboxes.each(function () {
                var value = $(this).val();
                var text = $(this).closest("td").find("label").html();
                SelectedItems = SelectedItems + text + ",";
            });
            SelectedItems = SelectedItems.substring(0, SelectedItems.length - 1)
            $('#txtStatus').val(SelectedItems);
        }
        else {
            $('#txtStatus').val(" -- All --");
        }
    }
    SetSeverityText = function () {
        var count = $("[id*=cblSeverity] input:checkbox:checked").length;
        if (count > 0) {
            var checked_checkboxes = $("[id*=cblSeverity] input:checked");
            var SelectedItems = "";
            checked_checkboxes.each(function () {
                var value = $(this).val();
                var text = $(this).closest("td").find("label").html();
                SelectedItems = SelectedItems + text + ",";
            });
            SelectedItems = SelectedItems.substring(0, SelectedItems.length - 1)
            $('#txtSeverity').val(SelectedItems);
        }
        else {
            $('#txtSeverity').val(" -- All --");
        }
    }
    SetRoles = function () {
        var count = $("[id*=chkRoles] input:checkbox:checked").length;
        if (count > 0) {
            var checked_checkboxes = $("[id*=chkRoles] input:checked");
            var SelectedItems = "";
            checked_checkboxes.each(function () {
                var value = $(this).val();
                var text = $(this).closest("td").find("label").html();
                SelectedItems = SelectedItems + text + ",";
            });
            SelectedItems = SelectedItems.substring(0, SelectedItems.length - 1)
            $('#txtRole').val(SelectedItems);
        }
        else {
            $('#txtRole').val(" -- All --");
        }
    }

    SetIncidentPlaceText = function () {
        var count = $("[id*=cblIncidentPlaces] input:checkbox:checked").length;
        if (count > 0) {
            var checked_checkboxes = $("[id*=cblIncidentPlaces] input:checked");
            var SelectedItems = "";
            checked_checkboxes.each(function () {
                var value = $(this).val();
                var text = $(this).closest("td").find("label").html();
                SelectedItems = SelectedItems + text + ",";
            });
            SelectedItems = SelectedItems.substring(0, SelectedItems.length - 1)
            $('#txtIncidentPlace').val(SelectedItems);
        }
        else {
            $('#txtIncidentPlace').val(" -- All --");
        }
    }

    $("[id*=cblIncidentList] input:checkbox").change(function () {
        SetIncidentText();
    });
    $("[id*=cblSeverity] input:checkbox").change(function () {
        SetSeverityText();
    });
    $("[id*=cblIncidentPlaces] input:checkbox").change(function () {
        SetIncidentPlaceText();
    });
    $("[id*=cblStatus] input:checkbox").change(function () {
        SetStatusText();
    });
    $("[id*=chkRoles] input:checkbox").change(function () {
        SetStatusText();
    });
    //This method is used to show /hide Chart
    $('.ShowChart').click(function () {
        var lagn = $('#hdLang').val();
        if (lagn == "en") {
            if ($(this).text().trim() == "Show Chart") {
                $(this).text('Hide Chart')
            }
            else {
                $(this).text('Show Chart');
            }
        }
        else {
            if ($(this).text().trim() == "عرض الرسم البياني") {
                $(this).text('إخفاء الرسم البياني')
            }
            else {
                $(this).text('عرض الرسم البياني');
            }
        }
        // $(".HideShowChart").hide(1000);
        $(".HideShowChart").toggle(1000);
    });

    SetIncidentText();
    SetSeverityText();
    SetIncidentPlaceText();
    SetStatusText();
    SetRoles();

});