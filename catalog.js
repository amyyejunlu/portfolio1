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

$(".responsive").hover(function() {
    $(this).find(".responsive-text").css("display", "inline-block");
}, function() {
    $(this).find(".responsive-text").hide();
});

/*
$("#persona_1").click(function() {
    $(this).css("width", "30vw");
});
*/