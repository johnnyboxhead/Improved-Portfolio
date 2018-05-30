$(window).scroll(function(){
    parallax()
})

function parallax(){
    var wScroll = $(window).scrollTop();
    console.log("scroll= "+wScroll)
    console.log("This is the test: "+(10+((wScroll*25))/625))
    $("#parallax1").css("background-position", "center "+((wScroll*.75)*-1)+"px");
    $("#parallax2").css("background-position", "center "+(180+(((wScroll*.5)*.5)*-1))+"px");
    $("#AboutMeDiv1").css("margin-top", (0+((wScroll*15)/625))+"%");
    $("#parallax3").css("background-position", "center "+(120+(((wScroll*.2)*.5)*-1))+"px");
    $("#AboutMeDiv2").css("margin-top", (-15+((wScroll*12)/625))+"%");
    $("#ParisSelfie").css("background-position", "right " + (500+(((wScroll*.5)*.5)*-1))+"px");
    $("#SpeakIT").css("background-position", "left " + (750+(((wScroll*.5)*.5)*-1))+"px");
}