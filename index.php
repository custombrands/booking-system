
<!DOCTYPE html>
<html lang="en">
    <head>
        <title>Car Share - Your Open Source for Car Sharing</title>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link rel="stylesheet" href="css/bootstrap/bootstrap.css" />
        <link rel="stylesheet" href="css/ui-lightness/jquery-ui-1.9.0.custom.min.css" />
        <link rel="stylesheet" href="css/Style.css" />
        <link rel="stylesheet" href="css/main.css" />
    </head>
        
    <body id="body">

        <div id="TopContainer">
            <div class="CenterColumn">
                <div id="Header" class="">
                    <div id="Logo"><a href="index.php"><img src="img/Car-Logo.png" alt=""/></a></div><!-- end Logo div -->
                        <div id="Navigation">
                            <ul id="nav" >
                                <li><a href="index.html">HOME</a></li>
                                <li><a href="info.html">INFO</a></li>
                                <li><a href="rides.html">RIDES</a></li>
                                <li><a href="sharing.html">SHARE</a></li>
                            </ul>
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
        
        
            
        <script type="text/javascript" src="js/taffy.js"></script>
        <script type="text/javascript" src="js/jquery-1.8.1.js"></script>
        <script type="text/javascript" src="js/jquery-ui-1.9.0.custom.min.js"></script>
        <script type="text/javascript" src="js/cufon-yui.js"></script>
        <script type="text/javascript" src="js/swfobject.js"></script>
        <script type="text/javascript" src="js/bootstrap.js"></script>
        <script type="text/javascript" src="js/Bauh_400.font.js"></script>
        <script type="text/javascript" src="database/database.js"></script>           
        <script type="text/javascript" src="classes/DBsharingStatuses.js"></script>           
        <script type="text/javascript" src="classes/DBpickup_places.js"></script>           
        <script type="text/javascript" src="classes/DBm_types.js"></script>           
        <script type="text/javascript" src="classes/DBsharings.js"></script>           
        <script type="text/javascript" src="classes/DBmembers.js"></script>           
        <script type="text/javascript" src="classes/DBbookings.js"></script>           
        <script type="text/javascript" src="classes/DBcars.js"></script>           
        <script type="text/javascript" src="js/main.js"></script>
        <script type="text/javascript" src="js/ui-effects.js"></script>
        <script type="text/javascript">
            Cufon.replace('#SignUpModal h1')('#Navigation ul li', {hover: true, fontFamily: "Bauh"});
            
            
           
            
        </script>
            
    </body>
        
</html>
