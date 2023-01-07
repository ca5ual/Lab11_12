$(document).ready(function() {
    $("#button_04").click (function () {
        $("p.intro").hide();
    });

    $("#button_05").click(function () {
        $("a[target!='_blank']").hide();
    });

    $("#button_06").click(function () {
        $("a[target='_blank']").hide();
    });

    $("#button_07").click(function () {
        $("p:first").hide();
    });
    $("#button_08").click(function () {
        $("p").show();
    });

    $("#button_09").click(function () {
        $(".cp_01").hide().show();
    });
});

