$("#nav1").click(function() {
    $("#nav1").css("font-weight", "bold");
    $("#nav2").css("font-weight", "normal");
    $("#nav3").css("font-weight", "normal");
    $("#nav4").css("font-weight", "normal");
    $("#nav1_sub").attr("hidden", false);
});

$("#nav2").click(function() {
    $("#nav1").css("font-weight", "normal");
    $("#nav2").css("font-weight", "bold");
    $("#nav3").css("font-weight", "normal");
    $("#nav4").css("font-weight", "normal");
    $("#nav1_sub").attr("hidden", true);
});

$("#nav3").click(function() {
    $("#nav1").css("font-weight", "normal");
    $("#nav2").css("font-weight", "normal");
    $("#nav3").css("font-weight", "bold");
    $("#nav4").css("font-weight", "normal");
    $("#nav1_sub").attr("hidden", true);
});

$("#nav4").click(function() {
    $("#nav1").css("font-weight", "normal");
    $("#nav2").css("font-weight", "normal");
    $("#nav3").css("font-weight", "normal");
    $("#nav4").css("font-weight", "bold");
    $("#nav1_sub").attr("hidden", true);
});