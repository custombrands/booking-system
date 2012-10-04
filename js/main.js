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

$.CreatePickupLocations = (function (){
     var oPickupTable = DB[2]; // or aMainDBparser()[2] if to take from loclaStorage;
    $("#TxtSelectPickup").append("<select id=\"TxtPickUpSelector\"></select>");
        for (i in oPickupTable.id){
            $("#TxtPickUpSelector").append("<option id=\"OptionOne\" value=\""+oPickupTable.id[i]+"\" >" + oPickupTable.name[i] + "</option>");
        }
})();

$.CreateUserSharingsTable = function(){
    var allSharings = aSharingsParser();
    var theadRow = "<tr><th>Status</th><th>Pickup Location</th><th >Via</th><th>Destination</th><th>Sharing Date</th><th>Seats</th><th>Booked Seats</th></tr>"
    $('<table>', {'id': 'TxtUserSharingsTable', "class": 'MarginTop10 MarginAuto TxtUserSharingsTable'}).appendTo("#LblDisplayUserSharings");
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
                                    "<td class=\"button\"><button id=\"BtnEdit"+allSharings[i].id+"\" class=\"BtnEdit\">Edit</button></td>"+
                                    "<td class=\"button\"><button id=\"BtnDelete"+allSharings[i].id+"\" class=\"BtnDelete\">Delete</button></td>"+
                                    "</tr>";
            $(tbodyRow).appendTo("#TxtUserSharingsTable tbody");                     
        }
    }
}

$.CreateUserBookingsTable = function(){
    var allBookings = aBookingsParser();
    var theadRow = "<tr><th>Sharing ID</th><th>Creator</th><th>Member Booked</th><th >Date Made</th><th >Booking Date</th></tr>"
    $('<table>', {'id': 'TxtUserBookingsTable', "class": 'MarginTop10 MarginAuto TxtSharingsTable'}).appendTo("#LblDisplayUserBookings");
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
                                    "<td class=\"button\"><button id=\"BtnBookDelete"+allBookings[i].id+"\" class=\"BtnBook\">Delete</button></td>"+
                                    "</tr>";
         $(tbodyRow).appendTo("#TxtUserBookingsTable tbody");                       
    }
}

$('#LblDisplaySharingsToBook').ready(function(){
    $.CreateBookings = (function(){
    //    console.log($("div#LblDisplaySharingsToBook").children());
        var allBookSharings = oDBsharings().GetAllSharings();
        var theadRow = "<tr><th>ID</th><th>Status</th><th>Pickup Location</th><th >Via</th><th>Destination</th><th>Sharing Date</th><th>Seats</th><th>Booked Seats</th></tr>"
        $('<table>', {'id': 'TxtBookSharingsTable', "class": 'MarginTop10 MarginAuto TxtSharingsTable'}).appendTo("#LblDisplaySharingsToBook");
        $("#TxtBookSharingsTable").append("<thead>" , theadRow , "<tbody>");
    //    $("#TxtBookSharingsTable thead").append(theadRow);
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
                                            "<td class=\"button\"><button id=\"BtnBook"+allBookSharings[i].id+"\" class=\"BtnBook\">Book</button></td>"+
                                            "</tr>";
                 $(tbodyRow).appendTo("#TxtBookSharingsTable tbody");                       
            }
    })();    
});
    



/************************[SECTION]  EVENT LISTENERS******************************/

    // SINGUP
    $("#TxtSignUpUser").click(function(){
            var email = $("#TxtUserEmail").val();
            var password = $("#TxtPassword").val();
            
            bValid = oDBmembers().ValidateElements(email, password);
            if(bValid == true){
                oDBmembers().SaveUser();
                if(!aUserParser()){
                    login = oDBmembers().Login($("#TxtUserEmail").val(), $("#TxtRepeatPassword").val());
                    user = oDBmembers(aUserParser()[0]);
                    car = oDBcars(aUserParser()[0]);
                    sharings = oDBsharings(aUserParser()[0]);
                     if(login){
                        $.Disabled("LoginUserEmail");
                        $.Disabled("LoginPassword");
                        $.Disabled("TxtLogin");
                        $.deleteAttr("TxtLogout", "disabled");
                    }
                    console.log("Uset Loged IN");
                } else {
                    localStorage.removeItem("User");
                    oDBmembers().Login($("#TxtUserEmail").val(), $("#TxtRepeatPassword").val());
                    user = oDBmembers(aUserParser()[0]);
                    console.log("User loged in and LocalStorage overwritten");
                }
            }
    });
    
    // LOGIN
    $("#TxtLogin").click(function(){
        var LoginEmail = $("#LoginUserEmail").val();
        var LoginPassword = $("#LoginPassword").val();
        var user_type
        if(!aUserParser()){
            login = user.Login(LoginEmail, LoginPassword);
            if(login){
            user = oDBmembers(aUserParser()[0]);
            
            $.Disabled("LoginUserEmail");
            $.Disabled("LoginPassword");
            $.Disabled("TxtLogin");
            $.deleteAttr("TxtLogout", "disabled");
            user_type = user.GetM_type().GetName();
                if(user_type == "Admin"){
                   alert("You logged in as an ADMIN");
                
                } else {
                    car = oDBcars(aUserParser()[0])
                    sharings = oDBsharings(aUserParser()[0]);
                    sharingStatus = oDBsharingsStatuses(1);
                    bookings = oDBbookings(aUserParser()[0])

                    bookings.SaveBookingsOnLogin();
                    sharings.SaveSharingsOnLogin();    
                    car.SaveCarOnLogin();
                    console.log("You loged in as an USER");
                    $.CreateUserSharingsTable();
                    $.CreateUserBookingsTable();
                    $.AddListenerToTableEdit();
                    $.AddListenerDelete()
                    
               } 
            }
        }
    });
    
    // LOGOUT
    $("#TxtLogout").click(function(){
         user.Logout();
         $.deleteAttr("LoginUserEmail", "disabled");
         $.deleteAttr("LoginPassword", "disabled");
         $.deleteAttr("TxtLogin", "disabled");
         $.DestroyTables();
         $.Disabled("TxtLogout");
    });
    
    // EDIT USER
    $("#TxtEditUser").click(function(){
        var sBtnId = $("#TxtEditUser");
        var sInput = $("#EditUserEmail");
        
        if(sBtnId.val() == "Edit User"){
            
            sBtnId.val("Update User");
            oDBmembers().EditUser();
            return true
        } else if (sBtnId.val() == "Update User"){
            
            oDBmembers().EditUser(sBtnId.val());
            sBtnId.val("Edit User");
            return true
        } else {
            
            console.log("there is nothing to edit");
            return false;
        }
    });
    
    // ADD SHARING
    $("#BtnAddSharing").click(function(){
            oDBsharings().AddSharing();
            var sBtnViewSharingsId = $("#BtnViewSharings");
            
            if(sBtnViewSharingsId.val() == "Hide Sharings"){
                $("#TxtSharingsTable").remove();
                $.CreateUserSharingsTable();
            } else {
                sBtnViewSharingsId.val("Hide Sharings")
                $.CreateUserSharingsTable();
            }
    });
    
    // VIEW SHARINGS
$("#BtnViewSharings").click(function(){
    var sBtnId = $("#BtnViewSharings")
    $.CreateUserSharingsTable();
    if (sBtnId.val()=="View Sharings"){
        aSharingsParser()
        sBtnId.val("Hide Sharings");
                    $.AddListenerToTableEdit();
                    $.AddListenerDelete();
    } else {
        sBtnId.val("View Sharings");
        $("#TxtSharingsTable").remove();
    }
});



$.AddListenerToTableEdit = function () {
//if($("#BtnViewSharings").val() == "Hide Sharings"){
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
//}
};



$.AddListenerDelete = function () {
//    if($("#BtnViewSharings").val() == "Hide Sharings"){
            $(".BtnDelete").click(function(){
                var rowID = $(this).parents("tr").attr("id");
                var rowIDNumber = rowID.split("EditRow")[1];
                var btnIDNumber = $(this).attr("id").split("BtnDelete")[1];
                if(rowIDNumber == btnIDNumber){
                    $("#"+rowID).remove();
                    oDBsharings().DeleteUserSharing(Number(rowIDNumber))
                }

            });
//    }
}

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
    
    $.Disabled = function (ID){
        $("#" + ID).attr("disabled", "disabled");
    }
    $.deleteAttr = function (ID, attr){
        $("#" + ID).removeAttr(attr);
    }

    $.CheckLogedIn = (function () {
        if(localStorage.User){
            $.Disabled("LoginUserEmail");
            $.Disabled("LoginPassword");
            $.Disabled("TxtLogin");
            $.deleteAttr("TxtLogout", "disabled");
            $.CreateUserSharingsTable();
            $.CreateUserBookingsTable();
            $.AddListenerToTableEdit();
            $.AddListenerDelete();
        } else {
            console.log("noone is loged int");
        }
    })();
    
   
    $.DestroyTables = function (){
        $("#TxtUserSharingsTable").empty();  //("#TxtSharingsTable");
        $("#TxtUserBookingsTable").empty();  //("#TxtSharingsTable");
    }
    

// FIXME: Think about how to save database without localStorage, so that database will be available to all users
// FIXME: Later on implement encryption for users password safety user sha1 + salt combination