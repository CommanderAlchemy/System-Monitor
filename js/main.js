'use strict';

$('#btnHelp').on('click', function() {
    bootbox.dialog({
        size: "small",
        title: "This is a form in a modal.",
        message: "Welcome User",
        buttons: {
            success: {
                label: "Save",
                className: "btn-success",
                callback: function () {
                    bootbox.alert("yay");
                }
            }
        }
    });
});
