$(document).ready(function(){
    $(".nav-item").scroll({duration: 500})
    console.log("it is working again!!!!!!")
})

$(window).scroll(function(){
    parallax()
})

function parallax(){
    var wScroll = $(window).scrollTop();
    console.log("scroll= "+wScroll)
    console.log("This is the test: "+(10+((wScroll*25))/625))
    $("#parallax1").css("background-position", "center "+((wScroll*.75)*-1)+"px");
    $("#parallax2").css("background-position", "center "+(180+(((wScroll*.5)*.5)*-1))+"px");
    $("#AboutMeDiv1").css("margin-top", (0+((wScroll*12)/625))+"%");
    $("#AboutMeDiv1-2").css("margin-top", (5+((wScroll*10)/625))+"%");
    $("#parallax3").css("background-position", "center "+(120+(((wScroll*.2)*.5)*-1))+"px");
    $("#AboutMeDiv2").css("margin-top", (-8+((wScroll*.1)/625))+"%");
    $("#AboutMeDiv2").css("margin-right", (40-(wScroll*.01)+"%"));
    $("#ParisSelfie").css("background-position", "right " + (500+(((wScroll*.5)*.5)*-1))+"px");
    $("#SpeakIT").css("background-position", "left " + (730+(((wScroll*.5)*.5)*-1))+"px");
    $("#GatheRVA").css("background-position", "right " + (900+(((wScroll*.5)*.5)*-1))+"px");
    $("#Bamazon").css("background-position", "left " + (1050+(((wScroll*.5)*.5)*-1))+"px");
    $("#Giftastic").css("background-position", "right " + (1200+(((wScroll*.5)*.5)*-1))+"px");

    console.log("this is horizontal scroll: "+(10+((wScroll*.05))))
}

