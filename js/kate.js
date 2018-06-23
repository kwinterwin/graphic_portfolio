$(document).ready(function(){

    $("#corel").click(function () {
        $(".content").empty();
        $(".content").load("../html/katePS.html");
    });

    $("#ps").click(function () {
        $(".content").empty();
        $(".content").load("../html/kateCorel.html");
    });

    $("#flash").click(function () {
        $(".content").empty();
        $(".content").load("../html/kateFlash.html");
    });
});