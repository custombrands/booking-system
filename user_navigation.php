<div id="UserNavigationPanel" class="navbar navbar-static-top" >
    <div class="navbar-inner">
        <div class="container">
            <!-- Start of "MyCarShare" -->
            <ul class="nav">
                <!-- Start of "MyCarShare" drop down -->
                <li id="MyCarShare-dropdown" class="dropdown">
                    <!-- Top left name of the site "MyCarShare" -->
                    <a class="brand dropdown-toggle"  data-toggle="dropdown" href="#">
                        <span class="text-info">MyCarShare&nbsp;</span>
                        <i class="caret"></i>
                    </a>
                    <!-- Start MyCarShare drop down menu -->
                    <ul class="dropdown-menu" role="menu" aria-labelledby="MyCarShare-dropdown">
                        <!-- Menu header -->
                        <li role="menuitem" class="nav-header">Your&nbsp;Data</li>
                        <!-- Menu item "CarBookings" -->
                        <li role="menuitem">
                            <a id="BtnTriggerUserBookings" href="#" tabindex="-1" data-toggle="modal" data-target="#UserBookingsModal">
                                <i class="icon-tags"></i>
                                &nbsp;CarBookings
                            </a>
                        </li>
                        <!-- Menu item "CarSharings" --> 
                        <li role="menuitem">
                            <a id="BtnTriggerUserSharings" href="#" tabindex="-1" data-toggle="modal" data-target="#UserSharingsModal">
                                <i class="icon-briefcase"></i>
                                &nbsp;CarSharings
                            </a>
                        </li>
                        <!-- Menu item "CarRequests" -->
                        <li role="menuitem">
                            <a id="BtnTriggerUserRequests" href="#" tabindex="-1" data-toggle="modal" data-target="#UserRequestsModal">
                                <i class="icon-calendar"></i>
                                &nbsp;CarRequests
                            </a>
                        </li>
                    </ul>
                    
                    <!--Start of User Bookings Modal-->
                    <!-- triggered on drop down menu "CarBookings" click -->
                    <div id="UserBookingsModal" class="modal fade hide" tabindex="-1" aria-labelledby="LblUserBookingsModal" aria-hidden="true">
                        <div class="modal-header">
                            <button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>
                            <h1 id="LblUserBookingsModal">My Bookings</h1>
                        </div>
                        <div class="modal-body">
                            <ul class="nav nav-pills" >
                                <li class="active"><a href="#ActiveBookingsTab" data-toggle="tab">Active</a></li>
                                <li class=""><a href="#PastBookingsTab" data-toggle="tab">Past Bookings</a></li>
                            </ul>
                            <div class="tab-content" style="clear: left; width: 800px;">
                                <div class="active tab-pane" id="ActiveBookingsTab">
                                    <!--User Active Bookings are Here-->
                                </div>
                                <div class="tab-pane" id="PastBookingsTab">
                                    <!--User Past Bookings are Here-->
                                </div>
                            </div>
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
                            <ul class="nav nav-pills" >
                                <li class="active">
                                    <a href="#ActiveSharingsTab" data-toggle="tab">Active</a>
                                </li>
                                <li class="">
                                    <a href="#PastSharingsTab" data-toggle="tab">Past Sharings</a>

                                </li>
                            </ul>
                            <div class="tab-content" style="clear: left; width: 800px;">
                                <div class="active tab-pane" id="ActiveSharingsTab">
                                    <!--User Active Sharings are Here-->
                                </div>
                                <div class="tab-pane" id="PastSharingsTab">
                                    <!--User Past Sharings are Here-->
                                </div>
                            </div>
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
            
            <!-- Start of most right User Profile Controls menu -->
            <ul class="nav pull-right">
                <li id="UserBtnGroup">
                    <div class="btn-group">
                        <!-- Start of Button with name of Logged in User Name -->
                        <a id="LogedinUserName" class="btn btn-primary" data-toggle="dropdown" href="#"><i class="icon-user icon-white"></i></a>
                        <!-- Start  of Arrow button-->
                        <a class="btn btn-primary dropdown-toggle" data-toggle="dropdown" href="#"><span class="caret"></span></a>
                        <!-- Start of Dropdown menu for logged in user-->
                        <ul class="dropdown-menu" role="menu" aria-labelledby="LogedinUserName">
                            <!-- Modal Edit User Modal Trigger -->
                            <li role="menuitem">
                                <a id="BtnTriggerEdit" href="#" role="button" tabindex="-1" 
                                   data-toggle="modal" data-target="#EditUserModal">
                                    <i class="icon-pencil"></i>
                                    &nbsp;&nbsp;&nbsp;Edit
                                </a>
                            </li>
                            <li role="menuitem">
                                <a href="#"><i class="icon-list"></i>
                                    &nbsp;&nbsp;&nbsp;Profile
                                </a>
                            </li>
                        </ul>
                        <!-- Start of sign out button -->
                        <button id="BtnSignout" class="btn btn-primary" role="button" type="button" style="margin-left: -3px;">
                            Logout&nbsp;
                            <i class="icon-share icon-white"></i>
                        </button>
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
                
                <li>
                    <div class="btn-group">
                        <!--Start of Add Sharing Action User Modal-->
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