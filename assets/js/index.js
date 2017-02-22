//<------------------------變數宣告------------------------>

var rot = 0;
var page = 0;
var name = $("#id").val();
var nickname = $("#nickname").val();
var tele = $("#tele").val();
var wiggle_Time = 16;

//<------------------------FUNCTION----------------------->

$("document").ready(function(){

    $(".i5").click (function () {
        $(".phone").css("width", "");
        $(".screen").css("height", "");
        $(".phonename").text($(this).text());
        $(".audio-player")[0].play();
        $(".phone").removeClass("phone_rot");
    });

    $(".i5s").click (function () {
        $(".phone").css("width", "280px");
        $(".screen").css("height", "380px");
        $(".phonename").text($(this).text());
        $(".audio-player")[0].play();
        $(".phone").removeClass("phone_rot");
    });

    $(".i6").click (function () {
        $(".phone").css("width", "280px");
        $(".screen").css("height", "410px");
        $(".phonename").text($(this).text());
        $(".audio-player")[0].play();
        $(".phone").removeClass("phone_rot");
    });

    $(".i6s").click (function () {
        $(".phone").css("width", "300px");
        $(".screen").css("height", "440px");
        $(".phonename").text($(this).text());
        $(".audio-player")[0].play();
        $(".phone").removeClass("phone_rot");
    });

    $(".next").click (function () {
        if ($(":input").val() != "" && $("#tele").val().length == 10) {
            page += 1;
            if (page >= 3) {
                page = 0;
            }
            $(".pages").css("left", "-" + page * 100 + "%");
            $(".audio-player")[1].play();
        }
        else {
            alert("提醒：資料輸入不全!");
        }
    });


    $(".next1").click(function () {
        $("#id2").text($("#id").val());
        $("#nickname2").text($("#nickname").val());
        $("#tele2").text($("#tele").val());
    });

    $(".next3").click(function () {
        $("#id").val("");
        $("#nickname").val("");
        $("#tele").val("");
    });

    $(".button").click(function() {
        page = 0;
        $(".pages").css("left", "-" + page * 100 + "%");
        $(".audio-player")[1].play();
        $(".phone").removeClass("phone_rot");
    });

    $(".turn").click(function() {
        if (rot == 0) {
            rot += 1;
            $(".phone").addClass("phone_rot");
        }
        else {
            rot = 0;
            $(".phone").removeClass("phone_rot");
        }

        $(".audio-player")[2].play();
    });

    $(".wiggle").click(function() {
        wiggle_Time = 0;
        $(".audio-player")[3].play();
        $(".phone").removeClass("phone_rot");
    });

    setInterval(function() {
        if (wiggle_Time <= 15) {
            wiggle_Time += 1;
            console.log(wiggle_Time);

            if (wiggle_Time % 2 == 0) {
                $(".phone").css("left", "-30px");
            }
            else {
                $(".phone").css("left", "30px");
            }

            if (wiggle_Time == 16) {
                $(".phone").css("left", "");
            }
        }
    }, 60);
});
