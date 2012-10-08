$(function() {
    
    /* [SECTION] MAIN PAGE VIDEO PRESENTATION */   
    
$("#PlayVideo").click(function(){
   $.ShowVideo();
});
$.ShowVideo = function(){
        var params = { allowScriptAccess: "always" };
        var attr = { id: "YTPlayer" };
        swfobject.embedSWF("http://www.youtube.com/v/2mt19JukTrk?version=3&enablejsapi=1&playerapiid=MyYTplayer&controls=0&showinfo=0&autoplay=1&end=87&rel=0",
                          "Presentation", "708", "398", "8", null, null, params, attr);
                          $("#Video").css("padding", "0");
};
$("#PlayVideo").css("opacity", "0.4");
$("#PlayVideo").hover(
    function(){
    $(this).fadeTo("500", "1");
    },
    function(){
    $(this).fadeTo("500", "0.4");
    }
);

 function onYouTubePlayerReady() {
          var ytplayer = document.getElementById("YTPlayer");
          ytplayer.addEventListener("onStateChange", "TrackPlaybackStatus");
          ytplayer.playVideo();
          console.log(ytplayer);
}
function TrackPlaybackStatus(newState) {
    var ytplayer = document.getElementById("YTPlayer");
    if(newState == 0) {
        console.log(newState);
        var img ='<img src="img/play.png" id="PlayVideo">';
        $("#Presentation object").replaceWith(img);
        $("#PlayVideo").css("opacity", "0.4");
        $("#PlayVideo").hover(
            function(){
                $(this).fadeTo("500", "1");
            },
            function(){
                $(this).fadeTo("500", "0.4");
            }
        );
    }
    $("#PlayVideo").click(function(){
        $.ShowVideo();
    });
}
    /* [SECTION END] */
    
 });   
    

    /*** [SECTION] USER CONTROLS DEFINITION ***/
    
    
    
    
    
    /*** [SECTION] END ***/
