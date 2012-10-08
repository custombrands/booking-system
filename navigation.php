
<div id="NavigationPanel" class="navbar navbar-static-top">
    <div class="navbar-inner">
        <div class="container">
            <!-- Site name for the upper left corner of the site-->
            
            <!--Start of the nav bar content--> 
            
            <!--Start Signup and Signin-->
            <ul class="nav pull-right">
                <li>
                    <a href="#" data-toggle="modal" data-remote="modals/signup_form.php" data-target="#SignUpModal">Sing Up</a>
                    <div id="SignUpModal" class="modal fade hide" tabindex="-1" aria-labelledby="SignUpModalLabel"  aria-hidden="true">
                        <div class="modal-header">
                            <button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>
                            <h1 id="SignUpModalLabel">Please Signup</h1>
                        </div>
                        <div class="modal-body">
                            <!--Sign Up Form Here-->
                            
                        </div>
                        <div class="modal-footer">
                            <div class="btn-group">
                                <button class="btn" data-dismiss="modal" aria-hidden="true">Close</button>
                                <button id="BtnSignUpUser" class="btn btn-primary" type="button">SIGN UP</button>
                            </div>
                        </div>
                    </div>
                </li>
                
                <li class="divider-vertical"></li>
                
                <!--The drop down menu here -->
                <li id="LoginDropdown" class="DropdownMenu">
                    <a href="#" id="ToggleDropdown" data-toggle="dropdown">Sign In</a>
                    <div class="dropdown-menu">
                        <!--Warning will be here-->
                        
                        <!--Login form here--> 
                        <form id="LoginForm" class="form-horizontal" action="index.php" method="post" accept-charset="UTF-8" onsubmit="return false;" >
                            <div class="control-group">
                                <div class="input-prepend">
                                    <span class="add-on"><i class="icon-user"></i></span>
                                    <input id="LoginUserEmail" class="input-medium" placeholder="Username or Email" type="text" name="LoginUserEmail" value="b@gmdb.com" />
                                </div>
                            </div>
                            <div class="control-group">
                                <div class="input-prepend">
                                    <span class="add-on"><i class="icon-cog"></i></span>
                                    <input id="LoginPassword" class="input-medium" placeholder="Password" type="password" name="LoginPassword" value="111111" />
                                </div>
                            </div>    
                            <div class="control-group">
                                <label class="checkbox">
                                    <input id="LoginRememberMe" type="checkbox" name="LoginRememberMe" value="1" />
                                    Remember Me
                                </label>
                                <button id="BtnSignIn" class="btn btn-primary btn-block" type="submit" name="submit">Sign In</button>
                                
                            </div>    
                        </form>
                    </div>
                </li>
            </ul>
        </div>
    </div>
    
</div>










<?php
//<div class="navbar navbar-fixed-top">
//  <div class="navbar-inner">
//    <div class="container"> <!--Collapsable nav bar -->
//        
//        <a class="btn btn-navbar" data-toggle="collapse" data-target=".nav-collapse">
//            <span class="icon-bar"></span>
//            <span class="icon-bar"></span>
//            <span class="icon-bar"></span>
//        </a>
//
//         <!--Your site name for the upper left corner of the site--> 
//        <a class="brand">Car Share</a>
//
//         <!--Start of the nav bar content--> 
//        <div class="nav-collapse"> <!--Other nav bar content -->
//             <!--The drop down menu--> 
//            <ul class="nav pull-right">
//                <li><a href="/users/sign_up">Sign Up</a></li>
//                <li class="divider-vertical"></li>
//                <li class="dropdown">
//                <a class="dropdown-toggle" href="#" data-toggle="dropdown">Sign In<strong class="caret"></strong></a>
//                <div class="dropdown-menu" style="padding: 15px; padding-bottom: 0px;">
//                     <!--Login form here--> 
//
//                    <form action="index.php" method="post" accept-charset="UTF-8" onsubmit="return false;">
//                      <input id="LoginUserEmail" style="margin-bottom: 15px;" type="text" name="LoginUserEmail" size="30" />
//                      <input id="LoginPassword" style="margin-bottom: 15px;" type="password" name="LoginPassword" size="30" />
//                      <input id="LoginRememberMe" style="float: left; margin-right: 10px;" type="checkbox" name="LoginRememberMe" value="1" />
//                      <label class="RememberMe" for="LoginRememberMe">Remember me</label>
//
//                      <input id="BtnSignIn" class="btn btn-primary" style="clear: left; width: 100%; height: 32px; font-size: 13px;" type="submit" name="submit" value="Sign In" />
//                    </form>
//                </div>
//                </li>
//            </ul>
//        </div>
//    </div>
//  </div>
//</div>
?>