<div id="AdminNavigationPanel" class="navbar navbar-static-top" >
    <div class="navbar-inner">
        <div class="conatainer">
            <!-- Navigation collapse button -->
            <a class="btn btn-navbar" data-toggle="collapse" data-target=".nav-collapse">
                <span class="icon-download-alt"></span>
            </a>
            <!-- Start of "MyCarShare" -->
            <ul class="nav">
                <!-- Start of "MyCarShare" drop down -->
                <li id="MyCarShare-dropdown" class="dropdown">
                    <!-- Top left Name of the site "MyCarShare"-->
                    <a class="brand dropdown-toggle" data-toggle="dropdown" href="#">
                        <span class="text-info">MyCarShare&nbsp;</span>
                        <small class="LblAdmin text-error">[admin]</small>
                        <i class="caret"></i>
                    </a>
                    <!-- Start "MyCarShare" drop down menu -->
                    <ul class="dropdown-menu" role="menu" aria-labelledby="MyCarShare-dropdown">
                        <!-- Menu header -->
                        <li role="menuitem" class="nav-header">Admin&nbsp;Data</li>
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
                            <h1 id="LblUserBookingsModal" class="text-info">My Bookings</h1>
                        </div>
                        <div class="modal-body">
                            <ul class="nav nav-pills" >
                                <li class="active"><a href="#ActiveBookingsTab" data-toggle="tab">Active</a></li>
                                <li class=""><a href="#PastBookingsTab" data-toggle="tab">Past Bookings</a></li>
                            </ul>
                            <!--Start of tabs content-->
                            <div class="tab-content" style="clear: left; width: 800px;">
                                <!--"Active" tab content--> 
                                <div class="active tab-pane" id="ActiveBookingsTab">
                                    <!--User Active Bookings are Here-->
                                </div>
                                <!--"Past Bookings" content-->
                                <div class="tab-pane" id="PastBookingsTab">
                                    <!--User Past Bookings are Here-->
                                </div>
                            </div>
                        </div>
                        <div class="modal-footer">
                            <button class="btn MyCarShare-remove-active" data-dismiss="modal" aria-hidden="true">Close</button>
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
                            <button class="btn MyCarShare-remove-active" data-dismiss="modal" aria-hidden="true">Close</button>
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
                            <!--User Requests are Here-->
                        </div>
                        <div class="modal-footer">
                            <button class="btn MyCarShare-remove-active" data-dismiss="modal" aria-hidden="true">Close</button>
                        </div>
                    </div>
                </li>
            </ul>
            
            <!--Start Collapsible Navigation Menu-->
            <div class="nav-collapse">
                <ul class="nav pull-left">
                    <li class="divider-vertical"></li>
                    <!--Start of VIEW button -->
                    <!--Start of drop down for "View"-->
                    <li id="admin-dropdown" class="dropdown">
                        <a class="dropdown-toggle nav" role="navigation" data-toggle="dropdown" href="#">View <i class="caret"></i></a>
                        <!--Start of drop down menu for View-->
                        <ul class="dropdown-menu" role="menu" aria-labelledby="admin-dropdown">

                            <!--=====================================-->
                            <!--Start Sharings drop down menu section-->
                            <li class="nav nav-header" role="menuitem">Sharings</li>
                                <!--Start of Active Sharings menu item-->
                                <li role="menuitem">
                                    <!--Trigger for AvailableSharingsModal -->
                                    <a class="BtnTriggerAvailableSharings" id="BtnTriggerAvailableSharings" 
                                       role="button" tabindex="-1" href="#AvailableSharingsModal" data-toggle="modal" data-target="#AvailableSharingsModal">
                                        <i class="icon-map-marker"></i>
                                        &nbsp;Active&nbsp;Sharings
                                    </a>
                                </li>
                                <!--Start of Past Sharings menu item-->
                                <li role="menuitem">
                                    <!--Trigger for PastSharingsModal -->
                                    <a id="BtnTriggerPastSharings" href="#" tabindex="-1" data-toggle="modal" data-target="#PastSharingsModal">
                                        <i class="icon-thumbs-up"></i>
                                        &nbsp;Past&nbsp;Sharings
                                    </a>
                                </li>
                            <li class="divider" role="menuitem"></li>

                            <!--=====================================-->
                            <!--Start of Bookings drop down section-->
                            <li class="nav nav-header" role="menuitem">Bookings</li>
                                <!--Start of All Bookings menu item-->
                                <li role="menuitem">
                                    <a id="BtnTriggerAllBookings" tabindex="-1" href="#" data-toggle="modal" data-target="#AllBookingsModal">
                                        <i class="icon-map-marker"></i>
                                        &nbsp;All&nbsp;Bookings
                                    </a>
                                </li>
                                <!--Start of Active Bookings menu item-->
                                <li role="menuitem">
                                    <a id="BtnTriggerActiveBookings" tabindex="-1" href="#" data-toggle="modal" data-target="#ActiveBookingsModal">
                                    <i class="icon-map-marker"></i>
                                    &nbsp;Active&nbsp;Bookings
                                    </a>
                                </li>
                                <!--Start of Past Active Bookings menu item-->
                                <li role="menuitem">
                                    <a id="BtnTriggerPastBookings" tabindex="-1" href="#" data-toggle="modal" data-target="#PastBookingsModal">
                                    <i class="icon-map-marker"></i>
                                    &nbsp;Past&nbsp;Bookings
                                    </a>
                                </li>
                        </ul>

                        <!--============= MODALS FOR VIEW MENU BUTTON ===================-->
                        <!--Start of Active Sharings Modal-->
                        <!-- triggered on drop down menu "Available Sharings" click -->
                        <div id="AvailableSharingsModal" class="modal fade hide" role="dialog" tabindex="-1" aria-labelledby="LblAvailableSharings" aria-hidden="true">
                            <div class="modal-header">
                                <button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>
                                <h1 id="LblAvailableSharings">Active Sharings</h1>
                            </div>
                            <div class="modal-body">
                                <!--Available Sharings are Here-->
                            </div>
                            <div class="modal-footer">
                                <button class="btn" data-dismiss="modal" aria-hidden="true">Close</button>
                            </div>
                        </div>
                        <!--Start of Past Sharings Modal-->
                        <!-- triggered on drop down menu "Past Sharings" click -->
                        <div id="PastSharingsModal" class="modal fade hide" role="dialog" tabindex="-1" aria-labelledby="LblPastSharingsModal" aria-hidden="true">
                            <div class="modal-header">
                                <button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>
                                <h1 id="LblPastSharingsModal">Past Sharings</h1>
                            </div>
                            <div class="modal-body">
                                <!--Past Sharings are Here-->
                            </div>
                            <div class="modal-footer">
                                <button class="btn" data-dismiss="modal" aria-hidden="true">Close</button>
                            </div>
                        </div>
                        <!--Start of All Bookings Modal-->
                        <!-- triggered on drop down menu "All Bookings" click -->
                        <div id="AllBookingsModal" class="modal fade hide" role="dialog" tabindex="-1" aria-labelledby="LblAllBookingsModal" aria-hidden="true">
                            <div class="modal-header">
                                <button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>
                                <h1 id="LblAllBookingsModal">All Bookings</h1>
                            </div>
                            <div class="modal-body">
                                <!--All Bookings are here-->
                            </div>
                            <div class="modal-footer">
                                <button class="btn" data-dismiss="modal" aria-hidden="true">Close</button>
                            </div>
                        </div>
                        <!--Start of Active Bookings Modal-->
                        <!-- triggered on drop down menu "Active Bookings" click -->
                        <div id="ActiveBookingsModal" class="modal fade hide" role="dialog" tabindex="-1" aria-labelledby="LblActiveBookingsModal" aria-hidden="true">
                            <div class="modal-header">
                                <button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>
                                <h1 id="LblActiveBookingsModal">Active Bookings</h1>
                            </div>
                            <div class="modal-body">
                                <!--Active Bookings are here-->
                            </div>
                            <div class="modal-footer">
                                <button class="btn" data-dismiss="modal" aria-hidden="true">Close</button>
                            </div>
                        </div>
                        <!--Start of Past Bookings Modal-->
                        <!-- triggered on drop down menu "Past Bookings" click -->
                        <div id="PastBookingsModal" class="modal fade hide" role="dialog" tabindex="-1" aria-labelledby="LblPastBookingsModal" aria-hidden="true">
                            <div class="modal-header">
                                <button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>
                                <h1 id="LblPastBookingsModal">Past Bookings</h1>
                            </div>
                            <div class="modal-body">
                                <!--Past Bookings are here-->
                            </div>
                            <div class="modal-footer">
                                <button class="btn" data-dismiss="modal" aria-hidden="true">Close</button>
                            </div>
                        </div>
                    </li>
                    <!--Start of Users button-->
                    <li>
                        <!--trigger for AllUsersModal on "Users" click-->
                        <a id="BtnTriggerUsers" class="nav" tabindex="-1" href="#" data-toggle="modal" data-target="#AllUsersModal">Users</a>
                        <div id="AllUsersModal" class="modal fade hide" role="dialog" tabindex="-1" aria-labelledby="LblAllUsersModals" aria-hidden="true">
                            <div class="modal-header">
                                <button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>
                                <h1 id="LblAllUsersModals">Registered Users</h1>
                            </div>
                            <div class="modal-body">
                                <!--All Users are Here-->
                            </div>
                            <div class="modal-footer">
                                <button class="btn" data-dismiss="modal" aria-hidden="true">Close</button>
                            </div>
                        </div>
                    </li>
                    <!--Start of Search User-->
                    <li>
                        <form id="TriggerFindUserInfoModal" class="navbar-search pull-left" method="post" onsubmit="return false;">
                          <input id="TxtSearchUserEmail" type="text" class="search-query span2" placeholder="Search User Email">
                        </form>
                        <div id="FindUserInfoModal" class="modal fade hide" role="dialog" tabindex="-1" aria-labelledby="LblFindUserInfoModal" aria-hidden="true" style="width: 800px;">
                            <div class="modal-header">
                                <button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>
                                <h1 id="LblFindUserInfoModal">User Info</h1>
                            </div>
                            <div class="modal-body">
                                <!--Start of User Info-->
                                <!--Start of User info tabs-->
                                <ul class="nav nav-tabs" id="UserInfoTabs" style="width: 790px; margin-bottom: 25px;">
                                  <li class="active"><a href="#UserInfoTab" data-toggle="tab">User Info</a></li>
                                  <li><a href="#UserSharingsTab">Sharings</a></li>
                                  <li><a href="#UserBookingsTab">Bookings</a></li>
                                  <li><a href="#UserRequestsTab">Requests</a></li>
                                </ul>

                                <div class="tab-content" style="width: 790px;">
                                  <div class="tab-pane active" id="UserInfoTab">
                                        <form id="UserInfoForm" class="ModalForm form-horizontal " action="index.php" method="post" accept-charset="UTF-8" onsubmit="return false;" >
                                            <div class="control-group">
                                                <div class="input-prepend">
                                                    <span class="add-on"><i class="icon-user"></i></span>
                                                    <input id="TxtUserInfoName" class="input-large" placeholder="User Name" type="text" name="TxtUserInfoName" value="" />
                                                </div>
                                            </div>
                                            <div class="control-group">
                                                <div class="input-prepend">
                                                    <span class="add-on"><i class="icon-cog"></i></span>
                                                    <input id="TxtUserInfoLastName" class="input-large" placeholder="User Lastname" type="text" name="TxtUserInfoLastName" value="" />
                                                </div>
                                            </div>
                                            <div class="control-group">
                                                <div class="input-prepend">
                                                    <span class="add-on"><i class="icon-cog"></i></span>
                                                    <input id="TxtUserInfoEmail" class="input-large" placeholder="User Email" type="text" name="TxtUserInfoEmail" value="" />
                                                </div>
                                            </div>
                                            <div class="control-group">
                                                <div class="input-prepend">
                                                    <span class="add-on"><i class="icon-cog"></i></span>
                                                    <input id="TxtUserInfoPhone" class="input-large" placeholder="User Phone" type="text" name="TxtUserInfoPhone" value="" />
                                                </div>
                                            </div>
                                            <div class="control-group">
                                                <div class="btn-group">
                                                    <button id="BtnCancelEditUserInfo" type="button" class="btn btn-large">Cancel</button>
                                                    <button id="BtnEditUserInfo" type="submit" class="btn btn-large btn-primary">Edit</button>
                                                </div>
                                            </div>
                                        </form>
                                  </div>
                                  <div class="tab-pane" id="UserSharingsTab">
                                      <!--Start info about user Sharings -->
                                      
                                  </div>
                                  <div class="tab-pane" id="UserBookingsTab">
                                      <!--Start info about user Bookings -->
                                  </div>
                                  <div class="tab-pane" id="UserRequestsTab">User Requests</div>
                                </div>
                            </div>
                            <div class="modal-footer">
                                <button class="btn" data-dismiss="modal" aria-hidden="true">Close</button>
                            </div>
                        </div>
                    </li>
                </ul>

                <!-- Start of most right Admin Profile controls menu -->
                <ul class="nav pull-right clearfix">
                    <li id="UserBtnGroup">
                        <div class="btn-group">
                            <!-- Start of Button with name of Logged in User Name -->
                            <a id="LogedinUserName" class="btn btn-inverse" data-toggle="dropdown" href="#"><i class="icon-user icon-white"></i></a>
                            <!-- Start  of Arrow button-->
                            <a class="btn btn-inverse dropdown-toggle" data-toggle="dropdown" href="#"><span class="caret"></span></a>
                            <!-- Start of Dropdown menu for logged in user-->
                            <ul class="dropdown-menu" role="menu" aria-labelledby="LogedinUserName">
                                <li role="menuitem">
                                    <!--Start of Admin Edit Modal Trigger-->
                                    <a id="BtnTriggerEdit" role="button" href="#" tabindex="-1" 
                                       data-toggle="modal" data-target="#EditUserModal">
                                        <i class="icon-pencil"></i>
                                        &nbsp;&nbsp;Edit
                                    </a>
                                </li>
                                <li role="menuitem">
                                    <a role="button" href="#" tabindex="-1">
                                        <i class="icon-list"></i>
                                        &nbsp;&nbsp;Profile
                                    </a>
                                </li>
                            </ul>
                            <!--Start of sign out button-->
                            <button id="BtnSignout" class="btn btn-inverse" role="button" type="button" style="margin-left: -3px;">
                                Logout&nbsp;
                                <i class="icon-share icon-white"></i>
                            </button>
                        </div>
                        <!--Start of Admin Edit User Info Modal-->
                        <!-- triggered on drop down menu "Edit" click -->
                        <div id="EditUserModal" class="modal fade hide" tabindex="-1" aria-labelledby="LblEditUser" aria-hidden="true">
                            <div class="modal-header">
                                <button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>
                                <h1 id="LblEditUser">Edit Your Info</h1>
                            </div>
                            <div class="modal-body">

                                <!--Edit User Form Here-->
                                <form id="EditUserForm" class="ModalForm form-horizontal " action="index.php" method="post" accept-charset="UTF-8" onsubmit="return false;" >
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
                                </form>
                            </div>
                            <div class="modal-footer">
                                <button class="btn" data-dismiss="modal" aria-hidden="true">Close</button>
                                <button id="BtnEditUser" class="btn btn-primary" type="button">Save</button>
                            </div>
                        </div>
                    </li>
                </ul>

                <!--Start of Admin Actions-->
                <ul id="UserActions" class="nav pull-right clearfix">
                    <li>
                        <div class="btn-group">
                            <!--Start of Add Sharing Action User Modal-->
                            <a id="BtnTriggerAddSharing" class="btn btn-inverse" href="#" data-toggle="modal" data-remote="" data-target="#AddSharingModal">Share</a>
                            <div id="AddSharingModal" class="modal fade hide" aria-labelledby="LblAddSharing"  aria-hidden="true">
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
                            <a class="btn btn-inverse" href="#" data-toggle="modal" data-remote="" data-target="#AddRequest">Request</a>

                            <div id="AddRequest" class="modal fade hide" aria-labelledby="LblAddRequest"  aria-hidden="true">
                                <div class="modal-header">
                                    <button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>
                                    <h1 id="LblAddRequest">Add Sharing</h1>
                                </div>
                                <div class="modal-body">

                                    <!--Add Request Form Here-->

                                </div>
                                <div class="modal-footer">
                                    <button class="btn" data-dismiss="modal" aria-hidden="true">Close</button>
                                    <button id="BtnAddRequest" class="btn btn-inverse" type="button">Request</button>
                                </div>
                            </div>

                            <!--Start of Booking -->
                            <a class="btn btn-inverse BtnTriggerAvailableSharings" href="#" data-toggle="modal" data-target="#AvailableSharingsModal">Book</a>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</div>