$(document).ready(function () {
    $("#form").submit(function (event) {
        isValid = true;
        // validate username
        if (!Boolean($("#username")[0].value)) {
            $("#usernameBox").addClass("has-error");
            isValid = false;
            toastr.error("Username is missing");
        }
        else {
            $("#usernameBox").removeClass("has-error");
        }

        // validate firstname
        if (!Boolean($("#firstname")[0].value)) {
            $("#firstnameBox").addClass("has-error");
            isValid = false;
            toastr.error("First Name is missing");
        }
        else {
            $("#firstnameBox").removeClass("has-error");
        }

        // validate lastname
        if (!Boolean($("#lastname")[0].value)) {
            $("#lastnameBox").addClass("has-error");
            isValid = false;
            toastr.error("Last name is missing");
        }
        else {
            $("#lastnameBox").remove("has-error");
        }

        // validate phone number
        if (!Boolean($("#phone")[0].value)) {
            $("#phoneBox").addClass("has-error");
            isValid = false;
            toastr.error("Phone number is missing");
        }
        else {
            $("#phoneBox").removeClass("has-error");
        }

        // validate tax number
        if (!Boolean($("#tax")[0].value)) {
            $("#taxBox").addClass("has-error");
            isValid = false;
            toastr.error("Tax number is missing");
        }
        else {
            $("#taxBox").removeClass("has-error");
        }

        // validate email
        if (!Boolean($("#email")[0].value)) {
            $("#emailBox").addClass("has-error");
            isValid = false;
            toastr.error("Email is missing");
        }
        else {
            $("#emailBox").removeClass("has-error");
        }

        // validate cost
        if (!Boolean($("#cost")[0].value)) {
            isValid = false;
            toastr.error("No cost was calculated");
        }
        else {
            if ($("#cost")[0].value < 0) {
                isValid = false;
                toastr.error("The cost is negative");
            }
        }

        if (isValid) {
            toastr.success("Form has been successfully submitted");
        }
        event.preventDefault();

    });
});

$(document).ready(function () {
    $("#checkin, #checkout, #adults").hover(function () {
        if (Boolean($("#checkin")[0].value) && Boolean($("#checkout")[0].value)) {
            const checkInDate = moment($("#checkin")[0].value, "YYYY-MM-DD");
            const checkOutDate = moment($("#checkout")[0].value, "YYYY-MM-DD");
            $("#days")[0].value = checkOutDate.diff(checkInDate, "days");
            $("#cost")[0].value = 150 * $("#days")[0].value * $("#adults")[0].value;
        }
    });
});

$(document).ready(function () {
    $("#reset").click(function () {
        $(".has-error").removeClass("has-error");
        toastr.info("Field has been successfully reset!");
    });
});
