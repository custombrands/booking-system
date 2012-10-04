<!DOCTYPE html>
<html lang="en">
    <head>
        <title>Title Here</title>
        <meta charset="utf-8" />
        <link rel="stylesheet" href="css/Style.css" />
        <link rel="stylesheet" href="css/main.css" />
        <link rel="stylesheet" href="css/bootstrap/bootstrap.css" />
    </head>
        
    <body>
        <div id="TopContainer">
            <div class="CenterColumn">
                <div id="Header" class="">
                    <div id="Logo"><a href="index.html"><img src="img/Car-Logo.png" alt=""/></a></div><!-- end Logo div -->
                    
                        <div id="Navigation">
                            <ul id="nav" >
                                <li ><a href="index.html">HOME<span>the starting page</span></a></li>
                                <li><a href="info.html">INFO<span>about us</span></a></li>
                                <li><a href="rides.html">RIDES<span>search them all</span></a></li>
                                <li><a href="sharing.html">SHARE<span>your car</span></a></li>
                            </ul>
                            <ul></ul>
                        </div><!-- end Navigation -->
                    
                    <div class="Clear"></div>
                </div><!--end Header div-->
                
                <div id="VideoContainer">
                    <div id="Video">
                        <div id="Presentation">
                            <img src="img/play.png" id="PlayVideo" alt="PLAY"/>
                        </div>
                            
                    </div>
                </div><!-- end VideoContainer -->
                
                <div id="MainContent">
                    <div id="SearchFields">
                        <h1 class="Cufon">Your search criteria down here</h1>
                        
                        <div id="SearchSharing">
                            <input type="text" placeholder="Search Your Sharer">
                        </div>
                        <div id="SearchRequst">
                            <input type="text" placeholder="Search Your Requester">
                        </div>
                        <div class="Clear"></div>
                        <hr>
                    </div><!-- end SearchFields -->
                    
                    <div id="BoxContainer">
                        <div class="Box BoxLeft" id="Sharings"> 
                            <table class="table table-striped table-hover ">
                                <caption><h2>Closet Available Sharings</h2></caption>
                                <thead>
                                    <tr>
                                        <th>Date</th>
                                        <th>From</th>
                                        <th>Via</th>
                                        <th>To</th>
                                        <th></th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>04/10/2012</td>
                                        <td>Næerum Station</td>
                                        <td>Gentofte</td>
                                        <td>Noreport</td>
                                        <td>More Info</td>
                                    </tr>
                                    <tr>
                                        <td>04/10/2012</td>
                                        <td>Næerum Station</td>
                                        <td>Gentofte</td>
                                        <td>Noreport</td>
                                        <td>More Info</td>
                                    </tr>
                                    <tr>
                                        <td>04/10/2012</td>
                                        <td>Næerum Station</td>
                                        <td>Gentofte</td>
                                        <td>Noreport</td>
                                        <td>More Info</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div> <!--end LeftTable-->
                        <div class="Box BoxRigth" id="Requests">
                            <table class="table table-striped table-hover" >
                                <caption><h2>Closest Requests</h2></caption>
                                <thead>
                                    <tr>
                                        <th>Date</th>
                                        <th>From</th>
                                        <th>Via</th>
                                        <th>To</th>
                                        <th>Info</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>04/10/2012</td>
                                        <td>Næerum Station</td>
                                        <td>Gentofte</td>
                                        <td>Noreport</td>
                                        <td>More Info</td>
                                    </tr>
                                    <tr>
                                        <td>04/10/2012</td>
                                        <td>Næerum Station</td>
                                        <td>Gentofte</td>
                                        <td>Noreport</td>
                                        <td>More Info</td>
                                    </tr>
                                    <tr>
                                        <td>04/10/2012</td>
                                        <td>Næerum Station</td>
                                        <td>Gentofte</td>
                                        <td>Noreport</td>
                                        <td>More Info</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div><!--end rigth Table-->
                    </div><!-- end BoxContainer -->
                    
                    <div class="Clear"></div>
                </div><!--end MainContent-->
                
            </div><!--end CenterColumn-->
        </div><!--end top container-->
        <div id="BottomContainer">
            <div class="CenterColumn">
                <div id="BottomBoxContainer"></div> <!-- BottomBoxContainer-->
                <div id="FooterContainer">
                    <div id="Footer">Copyright &copy; 2012 Dimul. <a href="#">All rights reserved</a>   |   Privacy Policy</div><!-- end foot -->
                </div><!-- end footer_container -->
            </div><!-- end CenterColumn -->
        </div><!--end bottom container-->
        
        
            
        <!--<script type="text/javascript" src="js/main.js"></script>-->
         <script type="text/javascript" src="js/jquery-1.8.1.js"></script>
        <script type="text/javascript" src="js/cufon-yui.js"></script>
        <script type="text/javascript" src="js/swfobject.js"></script>
        <script type="text/javascript" src="js/bootstrap.js"></script>
        <script type="text/javascript" src="js/NovocentoRegular_400.font.js"></script>
        <script type="text/javascript">
//            Cufon.replace('h1') ('h2')('h3') ('h4') ('h5') ('h6') ('.title') ('.text') ('#Navigation ul li', {hover: true, fontFamily: "NovocentoRegular"});
               
               
               $("#PlayVideo").click(function(){
                   $.ShowVideo();
                });
                
                    $.ShowVideo =function(){
                            var params = { allowScriptAccess: "always" };
                            var attr = { id: "YTPlayer" };
                            swfobject.embedSWF("http://www.youtube.com/v/2mt19JukTrk?version=3&enablejsapi=1&playerapiid=MyYTplayer&controls=0&showinfo=0&end=87&rel=0",
                                                              "Presentation", "708", "398", "8", null, null, params, attr);
                                                              $("#Video").css("padding", "0")
                    };
                    
                    $("#PlayVideo").css("opacity", "0.4");
                    $("#PlayVideo").hover(
                        function(){
                        $(this).fadeTo("500", "1")
                        },
                        function(){
                        $(this).fadeTo("500", "0.4")
                        }
                    );

             function onYouTubePlayerReady() {
                      var ytplayer = document.getElementById("YTPlayer");
                      ytplayer.addEventListener("onStateChange", "TrackPlaybackStatus");
                      ytplayer.playVideo();
                      console.log(ytplayer);
            };
            function TrackPlaybackStatus(newState) {
                var ytplayer = document.getElementById("YTPlayer");
                if(newState == 0) {
                    console.log(newState);
                       var img ='<img src="img/play.png" id="PlayVideo">';
                       $("#Presentation object").replaceWith(img);
                       $("#PlayVideo").css("opacity", "0.4");
                       $("#PlayVideo").hover(
                            function(){
                            $(this).fadeTo("500", "1")
                            },
                            function(){
                            $(this).fadeTo("500", "0.4")
                            }
                        );
                            
                            
                }
                    $("#PlayVideo").click(function(){
                       $.ShowVideo();
                    });
           };
            
        </script>
            
    </body>
        
</html>
