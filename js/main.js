$(document).ready(function(){

    $("#kateCorel").click(function () {
        $(".content").empty();
        $(".content").load("../html/katePS.html");
    });

    $("#annCorel").click(function () {
        $(".content").empty();
        $(".content").load("../html/annCorel.html");
    });

    $("#katePS").click(function () {
        $(".content").empty();
        $(".content").load("../html/kateCorel.html");
    });

    $("#annPS").click(function () {
        $(".content").empty();
        $(".content").load("../html/annPS.html");
    });

    $("#kateFlash").click(function () {
        $(".content").empty();
        $(".content").load("../html/kateFlash.html");
    });

    $("#annFlash").click(function () {
        $(".content").empty();
        $(".content").load("../html/annFlash.html");
    });

});