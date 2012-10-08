<div id="UserNavigationPanel" class="navbar navbar-static-top" >
    <div class="navbar-inner">
        <div class="container">
            <!-- Site name for the upper left corner of the site with user Specific Options-->
            <ul class="nav">
                <li class="dropdown">
                    <a class="brand dropdown-toggle dropdown"  data-toggle="dropdown" href="#">MyCarShare&nbsp;<i class="caret"></i></a>
                    <ul class="dropdown-menu">
                        <li class="nav-header">Your Data</li>
                        <li><a id="BtnTriggerUserBookings" href="#" data-toggle="modal" data-target="#UserBookingsModal"><i class="icon-tags"></i>&nbsp;CarBookings</a></li>
                        <li><a id="BtnTriggerUserSharings" href="#" data-toggle="modal" data-target="#UserSharingsModal"><i class="icon-briefcase"></i>&nbsp;CarSharings</a></li>
                        <li><a id="BtnTriggerUserRequests" href="#" data-toggle="modal" data-target="#UserRequestsModal"><i class="icon-calendar"></i>&nbsp;CarRequests</a></li>
                    </ul>
                    
                    <!--Start of User Bookings Modal-->
                    <!-- triggered on drop down menu "CarBookings" click -->
                    <div id="UserBookingsModal" class="modal fade hide" tabindex="-1" aria-labelledby="LblUserBookingsModal" aria-hidden="true">
                        <div class="modal-header">
                            <button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>
                            <h1 id="LblUserBookingsModal">My Bookings</h1>
                        </div>
                        <div class="modal-body">
                            <!--User Bookings are Here-->
                        </div>
                        <div class="modal-footer">
                            <button class="btn" data-dismiss="modal" aria-hidden="true">Close</button>
                        </div>
                    </div>
                    
                    <!--Start of User Sharings Modal-->
                    <!-- triggered on drop down menu "CarSharings" click -->
                    <div id="UserSharingsModal" class="modal fade hide" tabindex="-1" aria-labelledby="LblUserSharingsModal" aria-hidden="true">
                        <div class="modal-header">
                            <button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>
                            <h1 id="LblUserSharingsModal">My Car Sharings</h1>
                        </div>
                        <div class="modal-body">
                            <!--User Sharings are Here-->
                        </div>
                        <div class="modal-footer">
                            <button class="btn" data-dismiss="modal" aria-hidden="true">Close</button>
                        </div>
                    </div>
                    
                    <!--Start of User Requests Modal-->
                    <!-- triggered on drop down menu "CarRequests" click -->
                    <div id="UserRequestsModal" class="modal fade hide" tabindex="-1" aria-labelledby="LblUserRequestsModal" aria-hidden="true">
                        <div class="modal-header">
                            <button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>
                            <h1 id="LblUserRequestsModal">My Car Requests</h1>
                        </div>
                        <div class="modal-body">
                            <!--User Sharings are Here-->
                        </div>
                        <div class="modal-footer">
                            <button class="btn" data-dismiss="modal" aria-hidden="true">Close</button>
                        </div>
                    </div>
                    
                </li>
                <li class="divider-vertical"></li>
            </ul>
            
            <!--Start of Navigation View Button --> 
            <ul class="nav pull-left">
                <li class="divider-vertical"></li>
                <li class="dropdown">
                    <a class="dropdown-toggle" data-toggle="dropdown" href="#">View <i class="caret"></i></a>
                    <ul class="dropdown-menu">
                        <!--Start of Available Sharings-->
                        <!--Trigger for modal-->
                        <li><a class="BtnTriggerAvailableSharings" id="BtnTriggerAvailableSharings" href="#" data-toggle="modal" data-target="#AvailableSharingsModal"><i class="icon-map-marker"></i>&nbsp;Available&nbsp;Sharings</a></li>
                        <li><a href="#"><i class="icon-thumbs-up"></i>&nbsp;Member&nbsp;Requests</a></li>
                    </ul>
                    <!--Start of AvailableSharings Modal-->
                    <!-- triggered on drop down menu "Available Sharings" click -->
                    <div id="AvailableSharingsModal" class="modal fade hide" tabindex="-1" aria-labelledby="LblAvailableSharings" aria-hidden="true">
                        <div class="modal-header">
                            <button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>
                            <h1 id="LblAvailableSharings">Available Sharings</h1>
                        </div>
                        <div class="modal-body">
                            <!--Available Sharings are Here-->
                        </div>
                        <div class="modal-footer">
                            <button class="btn" data-dismiss="modal" aria-hidden="true">Close</button>
                        </div>
                    </div>
                </li>            
            </ul>
            
            <!-- Start of most right button group -->
            <ul class="nav pull-right">
                <li id="UserBtnGroup">
                    <div class="btn-group">
                        <!-- Start of drop down menu -->
                        <!-- Logged in user Name on the button and button trigger for drop down -->
                        <a id="LogedinUserName" class="btn btn-primary" data-toggle="dropdown" href="#"><i class="icon-user icon-white"></i> User</a>
                        <a class="btn btn-primary dropdown-toggle" data-toggle="dropdown" href="#"><span class="caret"></span></a>                        
                        <ul class="dropdown-menu">
                            <!-- Modal Edit User Trigger -->
                            <li><a id="BtnTriggerEdit" href="#" data-toggle="modal" data-target="#EditUserModal"><i class="icon-pencil"></i>&nbsp;&nbsp;&nbsp;Edit</a></li>
                            <li><a href="#"><i class="icon-list"></i>&nbsp;&nbsp;&nbsp;Profile</a></li>
                        </ul>
                        <!-- Sign out button -->
                        <button id="BtnSignout" class="btn btn-primary" type="button" style="margin-left: -3px;" >Logout <i class="icon-share icon-white"></i></button>
                    </div>
                    <!--Start of Edit User Info Modal-->
                    <!-- triggered on drop down menu "Edit" click -->
                    <div id="EditUserModal" class="modal fade hide" tabindex="-1" aria-labelledby="LblEditUser" aria-hidden="true">
                        <div class="modal-header">
                            <button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>
                            <h1 id="LblEditUser">Edit Your Info</h1>
                        </div>
                        <div class="modal-body">

                            <!--Edit User Here-->
                            <form id="EditUserForm" class="ModalForm form-horizontal " action="index.php" method="post" accept-charset="UTF-8" onsubmit="return false;" >
                                <div class="conatainer" >
                                    <div class="control-group">
                                        <div class="input-prepend">
                                            <span class="add-on"><i class="icon-user"></i></span>
                                            <input id="TxtUserName" class="input-large" placeholder="Your Name" type="text" name="TxtUserName" value="" />
                                        </div>
                                    </div>
                                    <div class="control-group">
                                        <div class="input-prepend">
                                            <span class="add-on"><i class="icon-cog"></i></span>
                                            <input id="TxtUserLastName" class="input-large" placeholder="Your Lastname" type="text" name="TxtUserLastName" value="" />
                                        </div>
                                    </div>
                                    <div class="control-group">
                                        <div class="input-prepend">
                                            <span class="add-on"><i class="icon-cog"></i></span>
                                            <input id="TxtUserEmail" class="input-large" placeholder="Your Email" type="text" name="TxtUserEmail" value="" />
                                        </div>
                                    </div>
                                    <div class="control-group">
                                        <div class="input-prepend">
                                            <span class="add-on"><i class="icon-cog"></i></span>
                                            <input id="TxtUserPhone" class="input-large" placeholder="Your Phone" type="text" name="TxtUserPhone" value="" />
                                        </div>
                                    </div>
                                </div>
                            </form>
                        </div>
                        <div class="modal-footer">
                            <button class="btn" data-dismiss="modal" aria-hidden="true">Close</button>
                            <button id="BtnEditUser" class="btn btn-primary" type="button">Save</button>
                        </div>
                    </div>
                    
                        
                </li>
            </ul>
            
            
            <!-- Start of User Actions Share, Request, Book -->
            <ul id="UserActions" class="nav pull-right">
                
                <!--Start of Add Sharing Action User Modal-->
                <li>
                    <div class="btn-group">
                        <a id="BtnTriggerAddSharing" class="btn btn-primary" href="#"  data-toggle="modal"  data-target="#AddSharingModal">Share</a>
                        <div id="AddSharingModal" class="modal fade hide" tabindex="-1" aria-labelledby="LblAddSharing"  aria-hidden="true">
                            <div class="modal-header">
                                <button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>
                                <h1 id="LblAddSharing">Add Sharing</h1>
                            </div>
                            <div class="modal-body">
                                
                                <!--Add Sharing Form Here-->
                                <form id="AddSharingForm" class="ModalForm form-horizontal " action="index.php" method="post" accept-charset="UTF-8" onsubmit="return false;" >
                                    <div class="conatainer" >
                                        <div class="control-group">
                                            <div id="TxtSelectPickup">
                                                <select id="TxtPickUpSelector"></select>
                                            </div>
                                        </div>
                                        <div class="control-group">
                                            <div class="input-prepend">
                                                <span class="add-on"><i class="icon-cog"></i></span>
                                                <input id="TxtVia" class="input-large" placeholder="You will be going via" type="text" name="TxtUserLastName" value="" />
                                            </div>
                                        </div>
                                        <div class="control-group">
                                            <div class="input-prepend">
                                                <span class="add-on"><i class="icon-cog"></i></span>
                                                <input id="TxtDestination" class="input-large" placeholder="Final destination will be" type="text" name="TxtUserEmail" value="" />
                                            </div>
                                        </div>
                                        <div class="control-group">
                                            <div class="input-prepend">
                                                <span class="add-on"><i class="icon-cog"></i></span>
                                                <input id="TxtDate" class="input-large" placeholder="Date you will be going there" type="text" name="TxtUserPhone" value="" />
                                            </div>
                                        </div>
                                        <div class="control-group">
                                            <div class="input-prepend">
                                                <span class="add-on"><i class="icon-cog"></i></span>
                                                <input id="TxtSeats" class="input-large" placeholder="How many free seats" type="text" name="TxtUserPhone" value="" />
                                            </div>
                                        </div>
                                    </div>
                                </form>

                            </div>
                            <div class="modal-footer">
                                    <button class="btn" data-dismiss="modal" aria-hidden="true">Close</button>
                                    <button id="BtnAddSharing" class="btn btn-primary" type="button">Share</button>
                            </div>

                        </div>
                
                <!--Start of Add Request User Modal-->
                    <a class="btn btn-primary" href="#" data-toggle="modal" data-remote="" data-target="#AddRequestModal">Request</a>
                    
                    <div id="AddRequestModal" class="modal fade hide" aria-labelledby="LblAddRequest"  aria-hidden="true">
                        <div class="modal-header">
                            <button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>
                            <h1 id="LblAddRequest">Add Request</h1>
                        </div>
                        <div class="modal-body">
                            
                            <!--Add Request Form Here-->
                            
                        </div>
                        <div class="modal-footer">
                            <button class="btn" data-dismiss="modal" aria-hidden="true">Close</button>
                            <button id="BtnAddRequest" class="btn btn-primary" type="button">Request</button>
                        </div>
                    </div>
                
                
                <!--Start of Booking -->
                
                    <a class="btn btn-primary BtnTriggerAvailableSharings" href="#" data-toggle="modal" data-target="#AvailableSharingsModal">Book</a>
                    </div>
                </li>
            </ul>
        </div>
    </div>
</div>