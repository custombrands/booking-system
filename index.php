<!DOCTYPE html>
<html>
    <head>
        <title>Title Here</title>
        <link rel="stylesheet" href="css/Main.css" />
        <meta http-equiv="content-type" content="text/html;charset=UTF-8" />
    </head>

<body>
    
        <div class="Header">
            <h1 id="TxtHeading">Car Share</h1>
            <p>Open Source for car Sharing</p>
        </div>
        <div class="MainContainer" id="Display">
            <div class="LeftColumn">   
                <h2>Test Add Sharing</h2>
                <div class="LoginForm">
                    <form action="index.php" method="post" onsubmit="return false;">
                        <div id="TxtSelectPickup"></div>
                        <div>
                            <input id="TxtVia" type="text" placeholder="Enter via point" name="via" value="Søborg">
                        </div>
                        <div>
                            <input id="TxtDestination" type="text" placeholder="Enter destination point" name="destination" value="Vesteport">
                        </div>
                        <div>
                            <input id="TxtDate" type="text" placeholder="Enter Date" name="date" value="29/09/2012">
                        </div>
                        <div>
                            <input id="TxtSeats" type="text" placeholder="Enter Free Seats" name="seats" value="3">
                        </div>
                        <div>
                            <input id="BtnAddSharing" type="submit" value="Add Sharing" />
                        </div>
                    </form>  
                </div>
                <h2>Test View Sharings</h2>
                <div class="LoginForm">
                    <form action="index.php" method="post" onsubmit="return false;">
                        <div>
                            <input id="BtnViewSharings" type="submit" name="view" value="View Sharings">
                        </div>
                    </form>  
                </div>
            </div>
            
                
<!--                <table id="TxtSharingsTable" class="MarginTop10 MarginAuto TxtSharingsTable">
                    <thead>
                        <tr>
                            <th>Nr.</th>
                            <th>Status</th>
                            <th>Pickup Location</th>
                            <th>Via</th>
                            <th>Destination</th>
                            <th>Sharing Date</th>
                            <th>Seats</th>
                            <th>Booked Seats</th>
                            <th></th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr class="EditRow1">
                            <td>1</td>
                            <td>1</td>
                            <td>2</td>
                            <td>Charlottelund</td>
                            <td>Amager</td>
                            <td>01/11/2012</td>
                            <td>2</td>
                            <td>Booked Seats</td>
                            <td><button class="BtnEdit">Edit</button></td>
                            <td><button class="BtnDelete">Delete</button></td>
                        </tr>
                    </tbody>
                </table>-->
        </div>
        <div id="LblDisplaySharings" class="MainContainer"></div>
                
        <div class="MainContainer">
            
            <div class="LeftColumn">
                
                <div class="LoginForm">
                    <h2>Login</h2>
                    <div >
                        <form action="index.php" method="post" onsubmit=" return false;">

                            <div><input id="LoginUserEmail" type="text" name="email" placeholder="Enter Email" value="b@gmdb.com"></div>

                            <div><input id="LoginPassword" type="password"  name="password" placeholder="Password"  value="111111"></div>
                            <div>
                                <input id="TxtLogin" type="submit" name="login" value="Login" />
                            </div>
                            <div>
                                <input id="TxtLogout" type="submit" name="logout" value="Logout" disabled="disabled" />
                            </div>
                        </form>    
                    </div>
                </div>
            
                <div class="SignUpForm MarginTop20">
                    <h2>Signup</h2>
                        <div id="SignUpForm">
                            <form action="index.php" method="post" onsubmit="return false" >

                                <div><input id="TxtUserName" name="username" type="text" placeholder="Enter Your Name" value="Dmitri"></div>

                                <div><input id="TxtUserLastName" name="lastname" type="text"  placeholder="Enter Your Last Name" value="Sergejenkov"></div>

                                <div><input id="TxtUserEmail" type="text" name="email" placeholder="Enter Your Email" value="lamukra@gmail.com"></div>

                                <div><input id="TxtUserPhone" type="text"  name="phone" placeholder="Phone"  value="53257007"></div>

                                <div><input id="TxtPassword" type="password"  name="password" placeholder="Password"  value="1234566" maxlength="20"></div>
                                <div><input id="TxtRepeatPassword" type="password"  name="password" placeholder="Repeat Password"  value="1234566"></div>

                                <div>
                                    <input id="TxtSignUpUser" type="submit" name="submit" value="Signup" />
                                </div>
                            </form> 
                        </div>
                </div>
            </div>
            
<!--            <div class="EditForm">
                <form action="index.php" method="post" onsubmit=" return false">
                    <label class="label" for="EditUserEmail">EditUserEmail</label>
                    <div><input id="EditUserEmail" type="text" name="email" placeholder="Enter Email" value="lamukra@gmail.com"></div>
                    <div>
                        <input id="TxtEditUser" type="submit" name="edit" value="Edit User" />
                    </div>
                </form>      
            </div>-->

            
            <div id="LblDisplayUsers" class="RightColumn"></div>
            
        </div>

        
        <script type="text/javascript" src="js/taffy.js"></script>
        <script type="text/javascript" src="js/jquery-1.8.1.js"></script>
        <script type="text/javascript" src="database/database.js"></script>           
        <script type="text/javascript" src="classes/DBsharingStatuses.js"></script>           
        <script type="text/javascript" src="classes/DBpickup_places.js"></script>           
        <script type="text/javascript" src="classes/DBm_types.js"></script>           
        <script type="text/javascript" src="classes/DBsharings.js"></script>           
        <script type="text/javascript" src="classes/DBmembers.js"></script>           
        <script type="text/javascript" src="classes/DBcars.js"></script>           
        <script type="text/javascript" src="js/main.js"></script>           
        <!--<script type="text/javascript" src="database/database.print.js"></script>-->           
        <script type="text/javascript">
        $.CreateAllSharingsTable();
        
        $.AddListenerToTableEdit();
//        $.AddListenerToTableDelete();
//          $(".BtnDelete").click(function(){
//                var trElements = $("table tbody tr");
//                var iTbodyLenght = trElements.length
//                 for (i =0; i<iTbodyLenght; i++){
//                 var sBtnId = "BtnDelete"+(Number(i)+1);
//                      if($(this).attr("id") == sBtnId){
//
//                        $(this).parent().parent().remove();
//                        
//                        var toDeleteRowId = trElements[i].id;
//                        var SharingsIdfromRow = toDeleteRowId.split("EditRow")[1];
//                        var Sharings_Id = Number(SharingsIdfromRow);
//                        sharings.DeleteSharing(Sharings_Id);
//                        
//                    }
//                }
//            });
            
//            for(var x in aSharingsParser()){
                
//                if(aSharingsParser()[x].status == 1){
//                    console.log( aSharingsParser()[x].status);
//                }
                
//            }
          
          
//            console.log(DB[6].id[0] , DB[6].via[0] , DB[6].destination[0]);
            
        </script>
</body>

    

</html>