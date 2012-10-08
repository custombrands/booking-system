var user = oDBmembers();
var car = oDBcars();
var pickup_places = oDBpickup_places();
var sharings = oDBsharings();
var sharingStatus = oDBsharingsStatuses();
var bookings = oDBbookings();
var login;


function oDBmembers(ID) {
    var oDBmember = new DBmembers(ID);
    return oDBmember;
}
function oDBcars(M_ID){
    var oDBcar = new DBcars(M_ID);
    return oDBcar;
}
function oDBpickup_places(P_ID){
    var oDBpickup_place = new DBpickup_places(P_ID);
    return oDBpickup_place;
}
function oDBsharings(M_ID) {
    var oDBsharing = new DBsharings(M_ID);
    return oDBsharing;
}
function oDBsharingsStatuses(S_ID){
    var oDBsharingStatus = new DBsharingStatuses(S_ID);
    return oDBsharingStatus;
}
function oDBbookings(M_ID){
    var oDBbooking = new DBbookings(M_ID);
    return oDBbooking;
}

    /*   DYNAMIC ELEMENTS CREATION   */

$(function(){

/************************** [SECTION] USER BOOKINGS *********************************/

$.BtnTriggerUserBookings = function () {
    $("#BtnTriggerUserBookings").click(function(){
        var table = $("#UserBookingsModal table").html();
        if(table == undefined){
           $.CreateUserBookings(); 
        } else {
            $("#UserBookingsModal table").remove();
            $.CreateUserBookings(); 
        }
    });
}
$.CreateUserBookings = function(){
    
    var allBookings = aBookingsParser();
    var theadRow = "<tr>"+
                        "<th>Sharing ID</th>"+
                        "<th>Creator</th>"+
                        "<th>Member Booked</th>"+
                        "<th >Date Made</th>"+
                        "<th >Booking Date</th>"+
                    "</tr>";
    $('<table>', {'id': 'TxtUserBookingsTable', "class": 'table table-striped'}).appendTo("#UserBookingsModal .modal-body");
    $("#TxtUserBookingsTable").append("<thead>" , "<tbody>");
    $("#TxtUserBookingsTable thead").append(theadRow);
   for (i in allBookings ){
        var count = Number(i)+1;
        var tbodyRow = "<tr id=\"EditRow" +allBookings[i].id+"\">"+
                                    "<td class=\"number\">"+ allBookings[i].sharing_id +"</td>"+
                                    "<td class=\"status\">"+allBookings[i].book_member_id +"</td>"+
                                    "<td class=\"pickup\">"+allBookings[i].sharing_member_id+"</td>"+
                                    "<td class=\"via\">" +allBookings[i].made_date+"</td>"+
                                    "<td class=\"via\">" +allBookings[i].booking_date+"</td>"+
                                    "<td class=\"button\"><button class=\"btn btn-info BtnBook\" id=\"BtnBookDelete"+allBookings[i].id+"\">Delete</button></td>"+
                                    "</tr>";
         $(tbodyRow).appendTo("#TxtUserBookingsTable tbody");                       
    }
}
/************************** [SECTION] END USER BOOKINGS *********************************/


/************************** [SECTION] USER SHARINGS *********************************/

$.BtnTriggerUserSharings = function () {
    $("#BtnTriggerUserSharings").click(function(){
        var table = $("#UserSharingsModal table").html();
        if(table == undefined){
           $.CreateUserSharings();
           $.AddListenerToTableEdit();
           $.AddListenerDelete();
        } else {
            $.AddListenerToTableEdit();
            $.AddListenerDelete();
        }
    });
}

$.CreateUserSharings = function(){
    var allSharings = aSharingsParser();
    var theadRow = "<tr>"+
                        "<th>Status</th>"+
                        "<th>Pickup Location</th>"+
                        "<th class=\"via\">Via</th>"+
                        "<th class=\"destination\">Destination</th>"+
                        "<th class=\"sharingdate\">Sharing Date</th>"+
                        "<th>Seats</th>"+
                        "<th>Booked Seats</th>"+
                    "</tr>";
    $('<table>', {'id': 'TxtUserSharingsTable', "class": 'table table-striped'}).appendTo("#UserSharingsModal .modal-body");
    $("#TxtUserSharingsTable").append("<thead>" , "<tbody>");
    $("#TxtUserSharingsTable thead").append(theadRow);
    for (i in allSharings ){
        if(allSharings[i].status == 1){
            var tbodyRow = "<tr id=\"EditRow" +allSharings[i].id+"\">"+
                                    "<td class=\"status\">"+allSharings[i].SHstatus_id +"</td>"+
                                    "<td class=\"pickup\">"+ allSharings[i].pickup_id +"</td>"+
                                    "<td class=\"via\">" +allSharings[i].via+"</td>"+
                                    "<td class=\"destination\">"+allSharings[i].destination+"</td>"+
                                    "<td class=\"sharingdate\">"+allSharings[i].sharing_datetime+"</td>"+
                                    "<td class=\"seats\">"+allSharings[i].seats+"</td>"+
                                    "<td class=\"seatsbooked\">Booked Seats</td>"+
                                    "<td class=\"button\"><button class=\"btn btn-info BtnEdit\" id=\"BtnEdit"+allSharings[i].id+"\">Edit</button></td>"+
                                    "<td class=\"button\"><button class=\"btn btn-info BtnDelete\" id=\"BtnDelete"+allSharings[i].id+"\">Delete</button></td>"+
                                    "</tr>";
            $(tbodyRow).appendTo("#TxtUserSharingsTable tbody");                     
        }
    }
}

$.AddListenerToTableEdit = function () {
            $(".BtnEdit").click(function(){
                 var rowID = $(this).parents("tr").attr("id");
                 var rowIDNumber = rowID.split("EditRow")[1];
                 var btnIDNumber = $(this).attr("id").split("BtnEdit")[1];
                 var editField1 = $(this).parents("tr").children(".via");
                 var editField2 = $(this).parents("tr").children(".destination");
                 var editField3 = $(this).parents("tr").children(".sharingdate");
                 if(rowIDNumber == btnIDNumber){
                     if($(this).html() == "Edit"){
                         $(this).html("Update"); 
                         $(editField1).replaceWith($('<td class="via">' + '<input type="text" value="'+ editField1.html() +'"/>' + '</td>' ));
                         $(editField2).replaceWith($('<td class="destination">' + '<input type="text" value="'+ editField2.html() +'"/>'+'</td>' ));
                         $(editField3).replaceWith($('<td class="sharingdate">' + '<input type="text" value="'+ editField3.html() +'"/>'+'</td>' ));
                     } else {
                         $(this).html("Edit");
                         var replaceVia = editField1.children("input").val();
                         var replaceDestination = editField2.children("input").val();
                         var replaceDate = editField3.children("input").val();
                         
                         $(editField1).replaceWith('<td class="via">' + replaceVia + '</td>');
                         $(editField2).replaceWith('<td class="destination">' + replaceDestination + '</td>');
                         $(editField3).replaceWith('<td class="sharingdate">' + replaceDate + '</td>');
                         
                         oDBsharings().UpdateUserSharings(Number(rowIDNumber) , replaceVia , replaceDestination , replaceDate);
                     }
                 }
             });
};

$.AddListenerDelete = function () {
            $(".BtnDelete").click(function(){
                var rowID = $(this).parents("tr").attr("id");
                var rowIDNumber = rowID.split("EditRow")[1];
                var btnIDNumber = $(this).attr("id").split("BtnDelete")[1];
                if(rowIDNumber == btnIDNumber){
                    $("#"+rowID).remove();
                    oDBsharings().DeleteUserSharing(Number(rowIDNumber))
                }

            });
}

/************************[SECTION] END USER SHARINGS ********************************/


/************************[SECTION]  AVAILABLE SHARINGS ******************************/  
    $.BtnTriggerAvailBookListener = function () {
        $(".BtnTriggerAvailableSharings").click(function(){
            var table = $("#AvailableSharingsModal table").html();
            if(table == undefined){
               $.CreateBookings(); 
               $.AddListenerBook();
            }
        });        
    }
    $.CreateBookings = function(){
        var allBookSharings = oDBsharings().GetAvailableSharings();
        var theadRow = "<tr>"+
                            "<th>ID</th>"+
                            "<th>Status</th>"+
                            "<th>Pickup Location</th>"+
                            "<th>Via</th>"+
                            "<th>Destination</th>"+
                            "<th>Sharing Date</th>"+
                            "<th>Seats</th>"+
                            "<th>Booked Seats</th>"+
                        "</tr>";
        $('<table>', {'id': 'TxtBookSharingsTable', "class": 'table table-striped'}).appendTo("#AvailableSharingsModal .modal-body");
        $("#TxtBookSharingsTable").append("<thead>" , "<tbody>");
        $("#TxtBookSharingsTable thead").append(theadRow);
        for (i in allBookSharings ){
            var tbodyRow = "<tr id=\"BookingId=" +allBookSharings[i].id+"\">"+
                                        "<td class=\"number\">"+allBookSharings[i].id +"</td>"+
                                        "<td class=\"status\">"+allBookSharings[i].SHstatus_id +"</td>"+
                                        "<td class=\"pickup\">"+ allBookSharings[i].pickup_id+"</td>"+
                                        "<td class=\"via\">" +allBookSharings[i].via+"</td>"+
                                        "<td class=\"destination\">"+allBookSharings[i].destination+"</td>"+
                                        "<td class=\"sharingdate\">"+allBookSharings[i].sharing_datetime+"</td>"+
                                        "<td class=\"seats\">"+allBookSharings[i].seats+"</td>"+
                                        "<td class=\"seatsbooked\">Booked Seats</td>"+
                                        "<td class=\"button\"><button class=\"btn btn-info BtnBook\" id=\"BtnBook"+allBookSharings[i].id+"\">Book</button></td>"+
                                        "</tr>";
             $(tbodyRow).appendTo("#TxtBookSharingsTable tbody");                       
        }
    };

$.AddListenerBook = function () {
            $(".BtnBook").click(function(){
                var rowID = $(this).parents("tr").attr("id");
                var rowIDNumber = rowID.split("=")[1];
                var btnIDNumber = $(this).attr("id").split("BtnBook")[1];
                var user_id = user.GetId();
                var sharing_id = rowIDNumber;
                if(rowIDNumber == btnIDNumber){
                    
                    oDBbookings().AddBooking(user_id, sharing_id);
                }

            });
}
 /************************[SECTION]  END AVAILABLE SHARINGS ******************************/   



/************************[SECTION]  USER ACTIONS DEFINITION ******************************/

    // SIGN UP
    $.SignUpListener = function () {
        $("#SignUpModal #BtnSignUpUser").click(function(){
                var email = $("#TxtUserEmail").val();
                var password = $("#TxtPassword").val();
                var bValid = oDBmembers().ValidateElements(email, password);
                if(bValid == true){
                    $("#SignUpModal").modal('hide');
                    oDBmembers().SaveUser();
                    if(!aUserParser()){
                        login = oDBmembers().Login($("#TxtUserEmail").val(), $("#TxtRepeatPassword").val());
                        user = oDBmembers(aUserParser()[0]);
                        car = oDBcars(aUserParser()[0]);
                        sharings = oDBsharings(aUserParser()[0]);
                        if(login){
                            $.UserNavigationPanel("none");
                            console.log("User Loged IN");
                        }
                    } else {
                        localStorage.removeItem("User");
                        oDBmembers().Login($("#TxtUserEmail").val(), $("#TxtRepeatPassword").val());
                        user = oDBmembers(aUserParser()[0]);
                        console.log("User loged in and LocalStorage overwritten");
                    }
                } 
        });
    }
    
    /******** SIGN IN functionality *********/
    
$.SignInListener = function (){
    $("#BtnSignIn").click(function(){
        var LoginEmail = $("#LoginUserEmail").val();
        var LoginPassword = $("#LoginPassword").val();
        var user_type;
        $("#BtnSignIn").popover({
                title: "<strong>You Made a Mistake!</strong>",
                content: "Please Try Again",
                trigger: "click",
                placement: "left"
                });
        if(!aUserParser()){
            login = user.Login(LoginEmail, LoginPassword);
            if(login){
            user = oDBmembers(aUserParser()[0]);
            
            user_type = user.GetM_type().GetName();
                if(user_type == "Admin"){
                    $.AdminNavigationPanel("none");
                   console.log("You logged in as an ADMIN");
                } else {
                    car = oDBcars(aUserParser()[0])
                    sharings = oDBsharings(aUserParser()[0]);
                    sharingStatus = oDBsharingsStatuses(1);
                    bookings = oDBbookings(aUserParser()[0])

                    bookings.SaveBookingsOnLogin();
                    sharings.SaveSharingsOnLogin();
                    car.SaveCarOnLogin();
                    console.log("You loged in as an USER");
                    $.UserNavigationPanel("none");
               } 
            } else {
                $("#BtnSignIn").popover('show');
                setTimeout(function () {
                    $("#BtnSignIn").popover('destroy')
                }, 1000);
                $("#LoginForm input[type=text], input[type=password]").css("background-color", "#ff9999");
            }
        }
    });
};

/************************[SECTION] NAVIGATION PANELS ********************************/

$.AdminNavigationPanel = function (displayrule){
        var admin_nav = $.GetNavigationPanel("admin_navigation.php");
        $("body").prepend(admin_nav);
        $("#AdminNavigationPanel").css("display", displayrule);
        $("#AdminNavigationPanel").slideDown(390);
        $("#LogedinUserName").html('<i class="icon-user icon-white"></i>&nbsp;'+user.GetName());
        $.SignOutListener();
    $("#NavigationPanel").slideUp(410, function(){
        $(this).remove();
    });
}

$.UserNavigationPanel = function (displayrule){
        var user_nav = $.GetNavigationPanel("user_navigation.php");
        $("body").prepend(user_nav);
        $("#UserNavigationPanel").css("display", displayrule);
        $("#UserNavigationPanel").slideToggle(390);
        $("#LogedinUserName").html('<i class="icon-user icon-white"></i>&nbsp;'+user.GetName());
        $.SignOutListener();
        $.BtnTriggerEditListener();
        $.BtnTriggerAddSharingListener();
        $.BtnTriggerAvailBookListener();
        $.BtnTriggerUserSharings();
        $.BtnTriggerUserBookings();
    $("#NavigationPanel").slideToggle(410, function(){
        $(this).remove();
    });
}

$.DefaultNavigationPanel = function(displayrule) {
        var navigation = $.GetNavigationPanel("navigation.php");
        $("body").prepend(navigation);
        $("#NavigationPanel").css("display", displayrule);
        $("#NavigationPanel").slideDown(390);
        $.SignInListener();
        $.SignUpListener();
        $.FixSignInForm();
    $("#UserNavigationPanel").slideUp(410, function(){
        $(this).remove();
    });
    $("#AdminNavigationPanel").slideUp(410, function(){
        $(this).remove();
    });
}

/************************[SECTION] END NAVIGATION PANELS ********************************/


    /******** SIGN OUT functionality *********/
            /* [LISTENER] SIGN OUT */
    $.SignOutListener = function () {
        $("#BtnSignout").click(function(){
            user.Logout();
            $.DefaultNavigationPanel("none");
        });
    }
            /* [LISTENER] END */
    /***************END**********************/
    

    /********** USER EDIT PROFILE functionality **********/
            /* [LISTENER] EDIT USER */
    
    $.BtnTriggerEditListener = function (){
        $("#BtnTriggerEdit").click(function(){
            var aUser = aUserParser();
            console.log(aUser[1]);
            $("#EditUserForm #TxtUserName").val(aUser[1]);
            $("#EditUserForm #TxtUserLastName").val(aUser[2]);
            $("#EditUserForm #TxtUserEmail").val(aUser[3]);
            $("#EditUserForm #TxtUserPhone").val(aUser[4]);            
        });
        $.BtnEditUser();
    }
    $.BtnEditUser = function () {
        $("#EditUserModal #BtnEditUser").click(function(){
            $('#EditUserModal').modal('hide');
            user.EditUser();
            $("#LogedinUserName").html('<i class="icon-user icon-white"></i>&nbsp;'+aUserParser()[1]);
        });
    }
            /* [LISTENER] END USER EDIT PROFILE */
    /*****************************************************/

    
    
    /******** ADD SHARING functionality *********/
        /* [LISTENER] ADD SHARING */
    $.BtnTriggerAddSharingListener = function () {
        $("#BtnTriggerAddSharing").click(function (){
            if($("#TxtPickUpSelector").html() == ""){
                $.CreatePickupLocations();
            }
            $.BtnAddSharingListener();
        });
    }
    $.CreatePickupLocations = function (){
        var oPickupTable = DB[2]; // or aMainDBparser()[2] if to take from loclaStorage;
        for (i in oPickupTable.id){
            $("#TxtPickUpSelector").append("<option id=\"OptionOne\" value=\""+oPickupTable.id[i]+"\" >" + oPickupTable.name[i] + "</option>");
        }
    };
    $.BtnAddSharingListener = function (){
       $("#BtnAddSharing").click(function(){
           $('#AddSharingModal').modal('hide');
            oDBsharings().AddSharing();

        }); 
    }
    
        /* [LISTENER] END ADD SHARING */
    /****************************************/










/************************[SECTION]  END******************************/



/************************[SECTION]  PARSERS ******************************/
    
    function aUserParser () {
        var aUser;
        if(localStorage.User){
            aUser = JSON.parse(localStorage.User);
            return aUser;
        } else {
            return false;
        }
    }
    function aMainDBparser (){
        var aMainDB;
        if(localStorage.taffy_DB){
            aMainDB = JSON.parse(localStorage.taffy_DB)
            return aMainDB;
        } else {
            return false;
        }
    }
    function aSharingsParser (){
        var aUserSharings;
        if(localStorage.User_Sharings){
            aUserSharings = JSON.parse(localStorage.User_Sharings)
            return aUserSharings;
        } else {
            return false;
        }
    }
    function aBookingsParser (){
        var aUserBookings;
        if(localStorage.User_Bookings){
            aUserBookings = JSON.parse(localStorage.User_Bookings)
            return aUserBookings;
        } else {
            return false;
        }
    }
/************************[SECTION]  END ******************************/



/************************ [SECTION]  FUNCTIONS ******************************/
 
    $.GetNavigationPanel = function (filename) {
        var xmlHTTP = new XMLHttpRequest;
        xmlHTTP.open("GET", filename, false);
        xmlHTTP.send();
        var navigation = xmlHTTP.responseText;
        return navigation;
    }
 
    $.Disabled = function (ID){
        $("#" + ID).attr("disabled", "disabled");
    }
    $.deleteAttr = function (ID, attr){
        $("#" + ID).removeAttr(attr);
    }
    $.FixSignInForm = function () {
        $('.DropdownMenu button, .DropdownMenu input, .DropdownMenu label').click(function(e) {
            e.stopPropagation();
        });
    }

    $.CheckLogedIn = function () {
        if(localStorage.User){
            var user_type = user.GetM_type().GetName();
            if(user_type == "Admin"){
                $("body").prepend($.GetNavigationPanel("admin_navigation.php"));
                $("#AdminNavigationPanel").css("display", "block");
            } else {
                $("body").prepend($.GetNavigationPanel("user_navigation.php"));
                $("#UserNavigationPanel").css("display", "block");
            }
            $("#LogedinUserName").html('<i class="icon-user icon-white"></i>&nbsp;'+user.GetName());
            $.SignOutListener();
            $.BtnTriggerEditListener();
            $.BtnTriggerAddSharingListener();
            $.BtnTriggerAvailBookListener();
            $.BtnTriggerUserSharings();
            $.BtnTriggerUserBookings();
            $.FixSignInForm();
            $("#BtnSignIn").popover('destroy');
        } else {
            $("body").prepend($.GetNavigationPanel("navigation.php"));
            $("#NavigationPanel").css("display", "block");
            $.SignInListener();
            $.SignUpListener();
            $.FixSignInForm();
            console.log("no one is loged int");
        }
    };
    
/************************ [SECTION] END ******************************/

    $.CheckLogedIn();
    

    
});
// FIXME: Later on implement encryption for users password safety user sha1 + salt combination