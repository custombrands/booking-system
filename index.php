<!DOCTYPE html>
<html>
    <head>
        <title>Title Here</title>
        <link rel="stylesheet" href="css/Main.css" />
        <meta http-equiv="content-type" content="text/html;charset=UTF-8" />
    </head>

<body>
    
        <header class="Header">
            <h1>Car Share</h1>
            <p>Open Source for car Sharing</p>
        </header>
                
        <div class="MainContainer">
            
            <div class="LeftColumn">
                
                <div class="LoginForm">
                    <h2>Login</h2>
                    <div >
                        <form action="index.php" method="post" onsubmit=" return false;">

                            <div><input id="LoginUserEmail" type="text" name="email" placeholder="Enter Email" value="lamukra@gmail.com"></div>

                            <div><input id="LoginPassword" type="password"  name="password" placeholder="Password"  value="1234566"></div>
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
        <script type="text/javascript" src="classes/DBm_types.js"></script>           
        <script type="text/javascript" src="classes/DBmembers.js"></script>           
        <script type="text/javascript" src="js/main.js"></script>           
        <!--<script type="text/javascript" src="database/database.print.js"></script>-->           
        <script type="text/javascript">
                        
        </script>
</body>

    

</html>