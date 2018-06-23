$(document).ready(function(){

    $("#corel").click(function () {
        $(".content").empty();
        $(".content").load("../html/annCorel.html");
    });

    $("#ps").click(function () {
        $(".content").empty();
        $(".content").load("../html/annPS.html");
    });

    $("#flash").click(function () {
        $(".content").empty();
        $(".content").load("../html/annFlash.html");
    });
});