<div id="AdminNavigationPanel" class="navbar navbar-static-top" >
    <div class="navbar-inner">
            <!-- Site name for the upper left corner of the site with user Specific Options-->
            <ul class="nav">
                <li class="dropdown">
                    <a class="brand dropdown-toggle dropdown"  data-toggle="dropdown" href="#"><span class="text-info">MyCarShare&nbsp;</span><small class="LblAdmin text-error">[admin]</small>&nbsp;<i class="caret"></i></a>
                    <ul class="dropdown-menu">
                        <li class="nav-header">Admin Data</li>
                        <li><a href="#"><i class="icon-tags"></i>&nbsp;CarBookings</a></li>
                        <li><a href="#"><i class="icon-briefcase"></i>&nbsp;CarSharings</a></li>
                        <li><a href="#"><i class="icon-calendar"></i>&nbsp;CarRequests</a></li>
                    </ul>
                </li>
                <li class="divider-vertical"></li>
            </ul>
            
            <!--Start of Navigation View Button --> 
            <ul class="nav pull-left">
                <li>
                    <div class="btn-group">
                        <button class="btn btn-inverse">Users</button>
                        <button class="btn btn-inverse">Bookings</button>
                        <button class="btn btn-inverse">User Bookings</button>
                        <button class="btn btn-inverse">Edit User</button>
                    </div>
                </li>
                <li>
                    <form  id="AdminSearchUser" class="navbar-search pull-left">
                      <input type="text" class="search-query" placeholder="Search User">
                    </form>
                </li>
            </ul>
            
            <!-- Start of Admin Main Controls Menu -->
            <ul class="nav pull-right">
                <li>
                    <div class="btn-group">
                      <a id="LogedinUserName" class="btn btn-inverse" data-toggle="dropdown" href="#"><i class="icon-user icon-white"></i></a>
                      <a class="btn btn-inverse dropdown-toggle"  href="#"><span class="caret"></span></a>
                      <ul class="dropdown-menu">
                        <li><a href="#"><i class="icon-pencil"></i>& Edit</a></li>
                        <li><a href="#"><i class="icon-list"></i> Profile</a></li>
                      </ul>
                        <button id="BtnSignout" class="btn btn-inverse" type="button" style="margin-left: -3px;" >Logout <i class="icon-share icon-white"></i></button>
                    </div>
                </li>
            </ul>
            
            <!--Start of Admin Actions-->
            <ul id="UserActions" class="nav pull-right">
                <li>
                    <div class="btn-group">
                        <!--Start of Add Sharing Action User Modal-->
                        <a class="btn btn-inverse" href="#" data-toggle="modal" data-remote="" data-target="#AddSharing">Share</a>
                        <div id="AddSharing" class="modal fade hide" aria-labelledby="LblAddSharing"  aria-hidden="true">
                            <div class="modal-header">
                                <button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>
                                <h1 id="LblAddSharing">Add Sharing</h1>
                            </div>
                            <div class="modal-body">
                                <!--Add Sharing Form Here-->

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
                        <a class="btn btn-inverse" href="#" data-toggle="modal" data-remote="" data-target="#AddBooking">Book</a>
                    </div>
            </ul>
        </div>
</div>