<!DOCTYPE html>
<html>
    <head>
        <title>Title Here</title>
        <link rel="stylesheet" href="css/Main.css" />
        <meta http-equiv="content-type" content="text/html;charset=UTF-8" />
    </head>

    <body>
        <div class="MainContainer">
            <p>Please Signup</p>
            <div class="SignUpForm">
                <form action="index.php" method="post" onsubmit="return false">
                    <div>
                        <input id="TxtUserName" name="username" type="text" placeholder="Enter Your Name" value="Maria">
                    </div>
                    <div>
                        <input id="TxtUserLastName" name="lastname" type="text"  placeholder="Enter Your Last Name" value="Obahina">
                    </div>
                    <div>
                        <input id="TxtUserEmail" type="text" name="email" placeholder="Enter Your Last Name" value="d@gmail.com">
                    </div>
                    <div>
                        <input id="TxtUserPhone" type="text"  name="phone" placeholder="Phone"  value="65547896">
                    </div>
                    <div>
                        <input id="TxtPassword" type="password"  name="password" placeholder="Password"  value="">
                    </div>
                    <div>
                        <input id="TxtSignUpUser" type="submit" name="submit" value="Signup" />
                    </div>
                </form>  
                
            </div>
        </div>

        
        <script type="text/javascript" src="js/taffy.js"></script>
        <script type="text/javascript" src="js/jquery-1.8.1.js"></script>
        <script type="text/javascript" src="js/sha1.js"></script>
        <script type="text/javascript" src="classes/DBmembers.js"></script>           
        <script type="text/javascript">            
                var memberOne = new DBmembers(0);
                
                console.log(memberOne.GetName());
                
//            console.log(typeof memberOne.GetId());
                
                
            
        </script>

    </body>

</html>