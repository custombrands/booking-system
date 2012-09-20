<!DOCTYPE html>
<html>
    <head>
        <title>Title Here</title>
        <link rel="stylesheet" href="css/Main.css" />
        <meta http-equiv="content-type" content="text/html;charset=UTF-8" />
    </head>

    <body>
        
        <div class="MainContainer">
            <div id="SignUpForm" class="SignUpForm MarginTop20">
                <form action="index.php" method="post" onsubmit="return false" >
                    
                    <label class="label"  for="TxtUserName" >TxtUserName</label>
                    <div><input id="TxtUserName" name="username" type="text" placeholder="Enter Your Name" value=""></div>
                    
                    <label class="label" for="TxtUserLastName">TxtUserLastName</label>
                    <div><input id="TxtUserLastName" name="lastname" type="text"  placeholder="Enter Your Last Name" value=""></div>
                    
                    <label class="label" for="TxtUserEmail">TxtUserEmail</label>
                    <div><input id="TxtUserEmail" type="text" name="email" placeholder="Enter Your Last Name" value=""></div>
                    
                        <label class="label" for="TxtUserPhone">TxtUserPhone</label>
                    <div><input id="TxtUserPhone" type="text"  name="phone" placeholder="Phone"  value=""></div>
                    
                    <label class="label" for="TxtPassword">TxtPassword</label>
                    <div><input id="TxtPassword" type="password"  name="password" placeholder="Password"  value=""></div>
                    
                    <div>
                        <input id="TxtSignUpUser" type="submit" name="submit" value="Signup" />
                    </div>
                </form> 
            </div>
            
            <div class="SubmitButtons">
                
                <form action="index.php" method="get" onsubmit=" return false">
                    
                </form>
                
                <form action="index.php" method="post" onsubmit=" return false">
                    
                    <label class="label" for="EditUserEmail">EditUserEmail</label>
                    <div><input id="EditUserEmail" type="text" name="email" placeholder="Enter Email" value="d@gmail.com"></div>
                    
                    <div>
                        <input id="TxtEditUser" type="submit" name="edit" value="Edit User" />
                    </div>
                </form>
                
                <form action="index.php" method="post" onsubmit=" return false;">
                    
                    <label class="label" for="LoginUserEmail">LoginUserEmail</label>
                    <div><input id="LoginUserEmail" type="text" name="email" placeholder="Enter Email" value="d@gmail.com"></div>
                    
                    <label class="label" for="LoginPassword">LoginPassword</label>
                    <div><input id="LoginPassword" type="password"  name="password" placeholder="Password"  value="NEWPASSWORD"></div>
                    <div>
                        <input id="TxtLogin" type="submit" name="login" value="Login" />
                    </div>
                </form>
                
            </div>

            
            <div id="LblDisplayUsers" class="LblDisplayUsers"></div>
            
        </div>

        
        <script type="text/javascript" src="js/taffy.js"></script>
        <script type="text/javascript" src="js/jquery-1.8.1.js"></script>
        <script type="text/javascript" src="database/database.js"></script>           
        <script type="text/javascript" src="classes/DBmembers.js"></script>           
        <script type="text/javascript" src="js/main.js"></script>           
        <!--<script type="text/javascript" src="database/database.print.js"></script>-->           
        <script type="text/javascript">
                
        var sName =  

                console.log(sName);
            
//            x = JSON.parse(localStorage.User)
//            console.log(x);
//            x =  DB[0]
//            email: Array[7]
//            id: Array[7]
//            lastname: Array[7]
//            name: Array[7]
//            password: Array[7]
//            phone: Array[7]
            
//            console.log(x);

//            console.log(DB);
//            console.log(DB[0].email);
            
                
                
            
        </script>

    </body>

</html>