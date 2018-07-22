$(document).ready(function(){
    $(".nav-item").scroll({duration: 500})
    console.log("it is working again!!!!!!")

 
    // Add smooth scrolling to all links
    $("a").on('click', function(event) {
    
        // Make sure this.hash has a value before overriding default behavior
        if (this.hash !== "") {
        // Prevent default anchor click behavior
        event.preventDefault();
    
        // Store hash
        var hash = this.hash;
    
        // Using jQuery's animate() method to add smooth page scroll
        // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
        $('html, body').animate({
            scrollTop: $(hash).offset().top
        }, 800, function(){
        
            // Add hash (#) to URL when done scrolling (default click behavior)
            window.location.hash = hash;
        });
        } // End if
    });

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
    $("#ConnectWithMeDiv").css("margin-top", (5+(wScroll*.01)+"%"));
    $("#ParisSelfie").css("background-position", "right " + (500+(((wScroll*.5)*.5)*-1))+"px");
    $("#River-Rat").css("background-position", "right " + (700+(((wScroll*.5)*.5)*-1))+"px");
    $("#SpeakIT").css("background-position", "left " + (900+(((wScroll*.5)*.5)*-1))+"px");
    $("#GatheRVA").css("background-position", "right " + (1050+(((wScroll*.5)*.5)*-1))+"px");
    $("#Bamazon").css("background-position", "left " + (1200+(((wScroll*.5)*.5)*-1))+"px");
    $("#Giftastic").css("background-position", "right " + (1200+(((wScroll*.5)*.5)*-1))+"px");

    console.log("this is horizontal scroll: "+(10+((wScroll*.05))))
}

