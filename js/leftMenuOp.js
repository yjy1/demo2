function displayDiv(number) {
    var count = 30;
    var divOwner_Header = $("#div" + number.toString() + "_1");
    var divOwner_Body = $("#div" + number.toString() + "_2");
    if (divOwner_Body.css("display") != 'none') { divOwner_Body.hide(); return; }
    for (var i = 1; i <= count; i++) {
        var content = $("#div" + i.toString() + "_2");
        if (content.attr("id") != null) {
            $("#div" + i.toString() + "_1").removeClass("header_bar_over");
            $("#div" + i.toString() + "_1").addClass("header_bar_out");
            content.hide();
        }
        else continue;
    }
    if (divOwner_Body.css("display") == 'none') {
        if (divOwner_Header.attr("id") != null) divOwner_Header.show();
        if (divOwner_Body.attr("id") != null) divOwner_Body.show();
    }
    else {
        if (divOwner_Header.attr("id") != null) divOwner_Header.hide();
        if (divOwner_Body.attr("id") != null) divOwner_Body.hide();
    }
    divOwner_Header.removeClass("header_bar_out");
    divOwner_Header.addClass("header_bar_over");
}

function SetHeight() {
    $(".header").each(function () {
        $(this).hover(
            function () { $(this).addClass("header_over"); },
            function () { $(this).removeClass("header_over"); }
        );
    });
    var parentHeight = parent.$("#outlook").height();
    $("#tbBody").css("height", parentHeight + "px");
    var fix = 0;
    if ($(".jsTreeIcon-defaultTop").length > 0 || $(".treeStyle").length > 0) fix = 10;

    var divheight = parentHeight - ($("#tbBody").find(".header:visible").length * 29) - fix;
    var divheight1 = parentHeight - ($("#tbBody").find(".header:visible").length * 29);

    $(".itemStyle").css("height", divheight1 + "px").css("max-height", divheight1 + "px").css("overflow", "auto").css("overflow-x", "hidden");
    $(".treeStyle").css("height", divheight + "px").css("max-height", divheight + "px").css("overflow", "auto").css("overflow-x", "hidden");

    if ($(".TreeViewStyle").length > 0) $(".TreeViewStyle").css("height", divheight - 1 + "px").css("max-height", divheight - 1 + "px");


    if (IsIE(6)) {
        var divwidth = $(".header").width();
        $("#PyTree").parent().css("width", (divwidth - 2) + "px");
        if ($(".bjx").length > 0) {
            var divwidth2 = $(".bjx").width();
            $(".bjx").width(divwidth2 - 20);
        }
    }
    else if (IsIE(7)) {
        if ($(".bjx").length > 0) {
            var divwidth2 = $(".bjx").width();
            $(".bjx").width(divwidth2 - 15);
        }
    }
    if (location.href.toLowerCase().indexOf("cmclient") > -1) {
        $("#div6_1").hide(); $("#div6_2").hide();
    }
}
