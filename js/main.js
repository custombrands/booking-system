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
function oDBsharings(M_ID, SH_ID) {
    var oDBsharing = new DBsharings(M_ID, SH_ID);
    return oDBsharing;
}
function oDBsharingsStatuses(S_ID){
    var oDBsharingStatus = new DBsharingStatuses(S_ID);
    return oDBsharingStatus;
}
function oDBbookings(M_ID, BOOK_ID){
    var oDBbooking = new DBbookings(M_ID, BOOK_ID);
    return oDBbooking;
}


$(function(){

/************************** [SECTION] ADMIN FUNCTIONS *********************************/

        /* [SECTION] ADMIN ALL BOOKINGS*/
    $.BtnTriggerAllBookingsListener = function () {
        $("#BtnTriggerAllBookings").click(function() {
            var table = $("#AllBookingsModal table").html();
            if(table == undefined){
               $.CreateAllBookings();
            } else {
                $("#AllBookingsModal table").remove();
                $.CreateAllBookings();
            }
        });

    };
    $.CreateAllBookings = function () {
        var allBookings = oDBbookings().GetAllBookings();
            var theadRow = "<tr>"+
                                "<th>Sharings ID</th>"+
                                "<th>Who Booked</th>"+
                                "<th>Booked Member</th>"+
                                "<th>Booking Date</th>"+
                                "<th>Departure</th>"+
                                "<th></th>"+
                            "</tr>";
            $('<table>', {'id': 'TxtAllBookingsTable', "class": 'table table-striped'}).prependTo("#AllBookingsModal .modal-body");
            $("#TxtAllBookingsTable").append("<thead>" , "<tbody>");
            $("#TxtAllBookingsTable thead").append(theadRow);

            for(i in allBookings){
                var booking_id = allBookings[i].id;
                var booking = oDBbookings("", booking_id);

                var tbodyRow = "<tr id=\"EditRow" +booking.GetId()+"\">"+
                                    "<td class=\"sharings_id\">"+ booking.GetSharing().GetId() +"</td>"+
                                    "<td class=\"who-booked\">"+ booking.GetBookMember().GetName() +"</td>"+
                                    "<td class=\"booked-member\">"+ booking.GetSharing().GetMember().GetName() +"</td>"+
                                    "<td class=\"booking-date\">" + booking.GetMade_Date() +"</td>"+
                                    "<td class=\"departure\">" +booking.GetSharing().GetDateTime()+"</td>"+
                                    "<td class=\"button\"><button class=\"btn btn-info BtnBook\" id=\"BtnBookDelete"+booking.GetId()+"\">Delete</button></td>"+
                                "</tr>";
                $(tbodyRow).appendTo("#TxtAllBookingsTable tbody");
            }
    };
    
        /* [SECTION] ADMIN ALL USERS*/
    $.BtnTriggerAllUsersListener = function () {
        $("#BtnTriggerUsers").click(function () {
            var table = $("#AllUsersModal table").html();
            if(table == undefined){
               $.CreateAllUsers();
               $.AddListenerToTableView();
            } else {
                $("#AllUsersModal table").remove();
                $.CreateAllUsers();
                $.AddListenerToTableView();
            }
        });
        
    }
    $.CreateAllUsers = function (forTypeHead){
        var allUsers = oDBmembers().GetAllUsers();
        var m_id, oUser;
        var theadRow = "<tr>"+
                            "<th>Name</th>"+
                            "<th>Lastname</th>"+
                            "<th>Email</th>"+
                            "<th>Phone</th>"+
                            "<th>Type</th>"+
                        "</tr>";
        $('<table>', {'id': 'TxtAllUsersTable', "class": 'table table-striped'}).appendTo("#AllUsersModal .modal-body");
        $("#TxtAllUsersTable").append("<thead>" , "<tbody>");
        $("#TxtAllUsersTable thead").append(theadRow);
        if(forTypeHead == "true"){
            var TypeaheadSource = [];
            var TypeaheadSourceLength = TypeaheadSource.length;
            for(i in allUsers){
                m_id = allUsers[i].id;
                oUser = oDBmembers(m_id); 
                TypeaheadSource.splice(TypeaheadSourceLength, 0, oUser.GetEmail());
            }
            return TypeaheadSource;
        }
        for(i in allUsers){
            m_id = allUsers[i].id;
            oUser = oDBmembers(m_id);
            var tbodyRow = "<tr id=\"ViewRow" +oUser.GetId()+"\">"+
                                "<td class=\"name\">"+ oUser.GetName() +"</td>"+
                                "<td class=\"lastname\">"+ oUser.GetLastName() +"</td>"+
                                "<td class=\"email\">"+ oUser.GetEmail() +"</td>"+
                                "<td class=\"phone\">" + oUser.GetPhone() +"</td>"+
                                "<td class=\"type\">" +oUser.GetM_type().GetName()+"</td>"+
                                "<td class=\"button\"><button class=\"btn btn-info BtnView\" id=\"BtnView"+oUser.GetId()+"\">View</button></td>"+
                            "</tr>";
            $(tbodyRow).appendTo("#TxtAllUsersTable tbody");
        }
        return false;
    };
    
    $.AddListenerToTableView = function () {
        $(".BtnView").click(function(){
            var rowID = $(this).parents("tr").attr("id");
            var rowIDNumber = rowID.split("ViewRow")[1];
            var btnIDNumber = $(this).attr("id").split("BtnView")[1];
            if(rowIDNumber == btnIDNumber){
            $("#AllUsersModal").modal('hide');
            var FindEmail = $(this).parent().siblings(".email").html();
             $.ShowUserInfoModal(FindEmail);
//            var FindUserEmail = $("#TxtSearchUserEmail").val();
//            var oUserInfo = oDBmembers().FindUserInfo(FindUserEmail);
                              
                
            }
        });
    }
    
    $.ShowUserInfoModal = function (sEmail) {
        $("#FindUserInfoModal").modal({
                show: "true",
                backdrop: "static"
        });
        $('#UserInfoTabs a:first').tab('show');
        $('#UserInfoTabs a').click(function (e) {
            e.preventDefault();
            $(this).tab('show');
        });
        var oUserInfo = oDBmembers().FindUserInfo(sEmail);
        $("#UserInfoTab #UserInfoForm input").attr("disabled", "disabled");
        $("#UserInfoTab #UserInfoForm #BtnCancelEditUserInfo").attr("disabled", "disabled");
        $.InsertUserInfo(oUserInfo);
        $.CreateUserInfoSharings(oUserInfo.id);
        $.CreateUserInfoBookings(oUserInfo.id);
        $.AddListenerToUserInfoEdit(oUserInfo);
    };
    
        /* [SECTION] SEARCH USER */
        
    $.TriggerTypeaheadAdmin = function () {
        var typeheadSource = $.CreateAllUsers("true");
        $("#TxtSearchUserEmail").typeahead({source: typeheadSource});
    }
    $.FormTriggerFindUserListener = function () {
        $("#TriggerFindUserInfoModal").submit(function (){
            var FindUserEmail = $("#TxtSearchUserEmail").val();
            $.ShowUserInfoModal(FindUserEmail);
        });
    }
    $.AddlistenerToEditUserInfoCancel = function (oUserInfo){
        $("#BtnCancelEditUserInfo").click(function (){
            $("#UserInfoTab #UserInfoForm input").attr("disabled", "disabled");
            $("#UserInfoTab #BtnCancelEditUserInfo").attr("disabled", "disabled");
            $("#BtnEditUserInfo").html("Edit");
            $.InsertUserInfo(oUserInfo)
        });
    }    
    $.AddListenerToUserInfoEdit = function (oUserInfo) {
      var BtnUserInfoEdit = $("#BtnEditUserInfo");
      $("#BtnEditUserInfo").click(function () {
          if(BtnUserInfoEdit.html() == "Edit"){
              BtnUserInfoEdit.html("Update");
              $("#UserInfoTab #BtnCancelEditUserInfo").removeAttr("disabled");
              $("#UserInfoTab #UserInfoForm input").removeAttr("disabled");
              $.AddlistenerToEditUserInfoCancel(oUserInfo);
          } else if (BtnUserInfoEdit.html() == "Update"){
              BtnUserInfoEdit.html("Edit");
              $("#UserInfoTab #UserInfoForm input").attr("disabled", "disabled");
              var sName = $("#UserInfoForm #TxtUserInfoName").val();
              var sLastname = $("#UserInfoForm #TxtUserInfoLastName").val();
              var sEmail = $("#UserInfoForm #TxtUserInfoEmail").val();
              var sPhone = $("#UserInfoForm #TxtUserInfoPhone").val();
              var oInfoToEdit = {
                  id: oUserInfo.id,
                  name: sName,
                  lastname: sLastname,
                  email: sEmail,
                  phone: sPhone
              }
              
              var user_type = user.GetM_type().GetName()
              oDBmembers().EditUser(user_type, oInfoToEdit);
          }
      });
    };
    
    $.CreateUserInfoSharings = function (iUserId) {
        var UserInfoSharings = oDBsharings(iUserId).GetSharings();
        if(UserInfoSharings == ""){
            $("#FindUserInfoModal .modal-body #UserSharingsTab").html("<h5 class=\"muted\">User has no active sharings</h5>")
        } else {
            $("#FindUserInfoModal .modal-body #UserSharingsTab h5").remove();
            var theadRow = "<tr>"+
                                "<th>Status</th>"+
                                "<th>Pickup Location</th>"+
                                "<th class=\"via\">Via</th>"+
                                "<th class=\"destination\">Destination</th>"+
                                "<th class=\"sharingdate\">Sharing Date</th>"+
                                "<th>Seats</th>"+
                                "<th>Booked Seats</th>"+
                            "</tr>";
            $('<table>', {'id': 'TxtUserInfoSharingsTable', "class": 'table table-striped'}).appendTo("#FindUserInfoModal .modal-body #UserSharingsTab");
            $("#TxtUserInfoSharingsTable").append("<thead>" , "<tbody>");
            $("#TxtUserInfoSharingsTable thead").append(theadRow);
            for (i in UserInfoSharings ){
                if(UserInfoSharings[i].status == 1){
                    var validateDate = DateValidator(UserInfoSharings[i], "sharing_datetime");
                    if (validateDate == true){
                        var sharing_id = UserInfoSharings[i].id;
                        var oSharing = oDBsharings("", sharing_id)
                        var tbodyRow = "<tr id=\"EditRow" +oSharing.GetId()+"\">"+
                                                "<td class=\"status\">"+oSharing.GetSharingStatus().GetName() +"</td>"+
                                                "<td class=\"pickup\">"+ oSharing.GetPickuUpLocation().GetName() +"</td>"+
                                                "<td class=\"via\">" +oSharing.GetVia()+"</td>"+
                                                "<td class=\"destination\">"+oSharing.GetDestination()+"</td>"+
                                                "<td class=\"sharingdate\">"+oSharing.GetDateTime()+"</td>"+
                                                "<td class=\"seats\">"+oSharing.GetFreeSeats()+"</td>"+
                                                "<td class=\"seatsbooked\">Booked Seats</td>"+
                                                "<td class=\"button\"><button class=\"btn btn-info BtnEdit\" id=\"BtnEdit"+oSharing.GetId()+"\">Edit</button></td>"+
                                                "<td class=\"button\"><button class=\"btn btn-info BtnDelete\" id=\"BtnDelete"+oSharing.GetId()+"\">Delete</button></td>"+
                                                "</tr>";
                        $(tbodyRow).appendTo("#TxtUserInfoSharingsTable tbody");
                    }
                }
            }
        }
    }
    
    $.CreateUserInfoBookings = function (iUserId){
        var UserInfoBookings = oDBbookings(iUserId).GetBookings();
        if(UserInfoBookings == ""){
            $("#FindUserInfoModal .modal-body #UserBookingsTab").html("<h5 class=\"muted\">User has no active bookings</h5>");
        } else {
            $("#FindUserInfoModal .modal-body #UserBookingsTab h5").remove();

            var theadRow = "<tr>"+
                                "<th>Sharing ID</th>"+
                                "<th>Creator</th>"+
                                "<th>Member Booked</th>"+
                                "<th>Bookings Date</th>"+
                                "<th>Departure</th>"+
                            "</tr>";
            $('<table>', {'id': 'TxtUserInfoBookingsTable', "class": 'table table-striped'}).appendTo("#FindUserInfoModal .modal-body #UserBookingsTab");
            $("#TxtUserInfoBookingsTable").append("<thead>" , "<tbody>");
            $("#TxtUserInfoBookingsTable thead").append(theadRow);
            for (i in UserInfoBookings ){
                var validateDate = DateValidator(UserInfoBookings[i], "made_date")
                if(validateDate == false){
                    var book_id = UserInfoBookings[i].id;
                    var oBooking = oDBbookings("", book_id);
                    var tbodyRow = "<tr id=\"EditRow" +oBooking.GetId()+"\">"+
                                                "<td class=\"number\">"+ oBooking.GetSharing().GetId() +"</td>"+
                                                "<td class=\"status\">"+oBooking.GetBookMember().GetName()+"</td>"+
                                                "<td class=\"pickup\">"+oBooking.GetSharing().GetMember().GetName()+"</td>"+
                                                "<td class=\"via\">" +oBooking.GetMade_Date()+"</td>"+
                                                "<td class=\"via\">" +oBooking.GetSharing().GetDateTime()+"</td>"+
                                                "<td class=\"button\"><button class=\"btn btn-info BtnBook\" id=\"BtnBookDelete"+oBooking.GetId()+"\">Delete</button></td>"+
                                                "</tr>";
                     $(tbodyRow).appendTo("#TxtUserInfoBookingsTable tbody");
                 }
            }
        }
    };
    
    $.InsertUserInfo = function (oUser) {
        $("#UserInfoForm #TxtUserInfoName").val(oUser.name);
        $("#UserInfoForm #TxtUserInfoLastName").val(oUser.lastname);
        $("#UserInfoForm #TxtUserInfoEmail").val(oUser.email);
        $("#UserInfoForm #TxtUserInfoPhone").val(oUser.phone);
    };


/******************************* [SECTION] END ****************************************/

/************************** [SECTION] USER BOOKINGS *********************************/

    $.BtnTriggerUserBookings = function () {
        $("#BtnTriggerUserBookings").click(function(){
            var table = $("#UserBookingsModal table").html();
            if(table == undefined){
               $.CreateUserBookings();
               $.CreateUserPastBookings();
               $.AddListenerClose();
            } else {
                $("#UserBookingsModal table").remove();
                $("#no-active").remove();
                $.CreateUserBookings();
                $.CreateUserPastBookings();
                $.AddListenerClose();
            }
        });
    };

    $.CreateUserBookings = function(){
        var allUserBookings = aBookingsParser();
        console.log(allUserBookings);
        if(allUserBookings == ""){
            $("#UserBookingsModal .modal-body #ActiveBookingsTab").html("<h5 class=\"muted\">You have no active bookings</h5>");
        } else {
            $("#UserBookingsModal .modal-body #ActiveBookingsTab h5").remove();

            var theadRow = "<tr>"+
                                "<th>Sharing ID</th>"+
                                "<th>Creator</th>"+
                                "<th>Member Booked</th>"+
                                "<th>Bookings Date</th>"+
                                "<th>Departure</th>"+
                            "</tr>";
            $('<table>', {'id': 'TxtUserBookingsTable', "class": 'table table-striped'}).appendTo("#UserBookingsModal .modal-body #ActiveBookingsTab");
            $("#TxtUserBookingsTable").append("<thead>" , "<tbody>");
            $("#TxtUserBookingsTable thead").append(theadRow);
            for (i in allUserBookings ){
                var booking_id = allUserBookings[i].id;
                var sh_id = allUserBookings[i].sharing_id;
                var oSharing = oDBsharings("", sh_id);
                var validateDate = DateValidator(oSharing, "sharing_datetime")
                if(validateDate == true){
                    var oBooking = oDBbookings("", booking_id);
                    var tbodyRow = "<tr id=\"EditRow" +oBooking.GetId()+"\">"+
                                                "<td class=\"number\">"+ oBooking.GetSharing().GetId() +"</td>"+
                                                "<td class=\"status\">"+oBooking.GetBookMember().GetName() +"</td>"+
                                                "<td class=\"pickup\">"+oBooking.GetSharing().GetMember().GetName()+"</td>"+
                                                "<td class=\"via\">" +oBooking.GetMade_Date()+"</td>"+
                                                "<td class=\"via\">" +oBooking.GetSharing().GetDateTime()+"</td>"+
                                                "<td class=\"button\"><button class=\"btn btn-info BtnBook\" id=\"BtnBookDelete"+oBooking.GetId()+"\">Delete</button></td>"+
                                                "</tr>";
                     $(tbodyRow).appendTo("#TxtUserBookingsTable tbody");
                 }
            }
        }
    };

    $.CreateUserPastBookings = function (){
        var allUserBookings = aBookingsParser();
        if(allUserBookings == ""){
            $("#UserBookingsModal .modal-body #PastBookingsTab").html("<h5 class=\"muted\">You have no past bookings</h5>")
        } else {
            $("#UserBookingsModal .modal-body #PastBookingsTab h5").remove();
            var theadRow = "<tr>"+
                            "<th>Sharing ID</th>"+
                            "<th>Creator</th>"+
                            "<th>Member Booked</th>"+
                            "<th>Bookings Date</th>"+
                            "<th>Departure</th>"+
                           "</tr>";
            $('<table>', {'id': 'TxtUserPastBookingsTable', "class": 'table table-striped'}).appendTo("#UserBookingsModal .modal-body #PastBookingsTab");
            $("#TxtUserPastBookingsTable").append("<thead>" , "<tbody>");
            $("#TxtUserPastBookingsTable thead").append(theadRow);
            for (i in allUserBookings ){
                var booking_id = allUserBookings[i].id;
                var sh_id = allUserBookings[i].sharing_id;
                var oSharing = oDBsharings("", sh_id);
                var validateDate = DateValidator(oSharing, "sharing_datetime")
                if(validateDate == false){
                    var oBooking = oDBbookings("", booking_id);
                    
                    var tbodyRow = "<tr id=\"EditRow" +oBooking.GetId()+"\">"+
                                        "<td class=\"number\">"+ oBooking.GetSharing().GetId() +"</td>"+
                                        "<td class=\"status\">"+oBooking.GetBookMember().GetName()+"</td>"+
                                        "<td class=\"pickup\">"+oBooking.GetSharing().GetMember().GetName()+"</td>"+
                                        "<td class=\"via\">" +oBooking.GetMade_Date()+"</td>"+
                                        "<td class=\"via\">" +oBooking.GetSharing().GetDateTime()+"</td>"+
                                        "<td class=\"button\"><button class=\"btn btn-info BtnBook\" id=\"BtnBookDelete"+oBooking.GetId()+"\">Delete</button></td>"+
                                    "</tr>";
                    $(tbodyRow).appendTo("#TxtUserPastBookingsTable tbody");
                }
            }
        }
    };

    $.AddListenerClose = function () {
        $(".MyCarShare-remove-active").click(function () {
           $("#MyCarShare-dropdown").attr("class", "dropdown");
        });
    };
/************************** [SECTION] END USER BOOKINGS *********************************/


/************************** [SECTION] USER SHARINGS *********************************/

    $.BtnTriggerUserSharings = function () {
        $("#BtnTriggerUserSharings").click(function(){
            var table = $("#UserSharingsModal table").html();
            if(table == undefined){
               $.CreateUserSharings();
               $.CreateUserPastSharings();
               $.AddListenerToTableEdit();
               $.AddListenerDelete();
            } else {
                $("#UserSharingsModal table").remove();
                $.CreateUserSharings();
                $.CreateUserPastSharings();
                $.AddListenerToTableEdit();
                $.AddListenerDelete();
            }
        });
    };

    $.CreateUserSharings = function(){
        var allUserSharings = aSharingsParser();
        if(allUserSharings == ""){
            $("#UserSharingsModal .modal-body #ActiveSharingsTab").html("<h5 class=\"muted\">You have no active sharings</h5>")
        } else {
            $("#UserSharingsModal .modal-body #ActiveSharingsTab h5").remove();
            var theadRow = "<tr>"+
                                "<th>Status</th>"+
                                "<th>Pickup Location</th>"+
                                "<th class=\"via\">Via</th>"+
                                "<th class=\"destination\">Destination</th>"+
                                "<th class=\"sharingdate\">Sharing Date</th>"+
                                "<th>Seats</th>"+
                                "<th>Booked Seats</th>"+
                            "</tr>";
            $('<table>', {'id': 'TxtUserSharingsTable', "class": 'table table-striped'}).appendTo("#UserSharingsModal .modal-body #ActiveSharingsTab");
            $("#TxtUserSharingsTable").append("<thead>" , "<tbody>");
            $("#TxtUserSharingsTable thead").append(theadRow);
            for (i in allUserSharings ){
                if(allUserSharings[i].status == 1){
                    var validateDate = DateValidator(allUserSharings[i], "sharing_datetime");
                    if (validateDate == true){
                        var sharing_id = allUserSharings[i].id;
                        var oSharing = oDBsharings("", sharing_id)
                        var tbodyRow = "<tr id=\"EditRow" +oSharing.GetId()+"\">"+
                                                "<td class=\"status\">"+oSharing.GetSharingStatus().GetName() +"</td>"+
                                                "<td class=\"pickup\">"+ oSharing.GetPickuUpLocation().GetName() +"</td>"+
                                                "<td class=\"via\">" +oSharing.GetVia()+"</td>"+
                                                "<td class=\"destination\">"+oSharing.GetDestination()+"</td>"+
                                                "<td class=\"sharingdate\">"+oSharing.GetDateTime()+"</td>"+
                                                "<td class=\"seats\">"+oSharing.GetFreeSeats()+"</td>"+
                                                "<td class=\"seatsbooked\">Booked Seats</td>"+
                                                "<td class=\"button\"><button class=\"btn btn-info BtnEdit\" id=\"BtnEdit"+oSharing.GetId()+"\">Edit</button></td>"+
                                                "<td class=\"button\"><button class=\"btn btn-info BtnDelete\" id=\"BtnDelete"+oSharing.GetId()+"\">Delete</button></td>"+
                                                "</tr>";
                        $(tbodyRow).appendTo("#TxtUserSharingsTable tbody");
                    }
                }
            }
        }
    };

    $.CreateUserPastSharings = function() {
        var allSharings = aSharingsParser();
        if(allSharings == ""){
            $("#UserSharingsModal .modal-body #PastSharingsTab").html("<h5 class=\"muted\">You have no past sharings</h5>")
        } else {
            $("#UserSharingsModal .modal-body #PastSharingsTab h5").remove();
            var theadRow = "<tr>"+
                                "<th>Status</th>"+
                                "<th>Pickup Location</th>"+
                                "<th class=\"via\">Via</th>"+
                                "<th class=\"destination\">Destination</th>"+
                                "<th class=\"sharingdate\">Sharing Date</th>"+
                                "<th>Seats</th>"+
                                "<th>Booked Seats</th>"+
                            "</tr>";
            $('<table>', {'id': 'TxtUserPastSharingsTable', "class": 'table table-striped'}).appendTo("#UserSharingsModal .modal-body #PastSharingsTab");
            $("#TxtUserPastSharingsTable").append("<thead>" , "<tbody>");
            $("#TxtUserPastSharingsTable thead").append(theadRow);
            for (i in allSharings ){
                var validateDate = DateValidator(allSharings[i], "sharing_datetime");
                if(validateDate == false){
                    var sharing_id = allSharings[i].id;
                    var oSharing = oDBsharings("", sharing_id)
                    var tbodyRow = "<tr id=\"EditRow" +oSharing.GetId()+"\">"+
                                            "<td class=\"status\">"+oSharing.GetSharingStatus().GetName() +"</td>"+
                                            "<td class=\"pickup\">"+ oSharing.GetPickuUpLocation().GetName() +"</td>"+
                                            "<td class=\"via\">" +oSharing.GetVia()+"</td>"+
                                            "<td class=\"destination\">"+oSharing.GetDestination()+"</td>"+
                                            "<td class=\"sharingdate\">"+oSharing.GetDateTime()+"</td>"+
                                            "<td class=\"seats\">"+oSharing.GetFreeSeats()+"</td>"+
                                            "<td class=\"seatsbooked\">Booked Seats</td>"+
                                            "<td class=\"button\"><button class=\"btn btn-info BtnEdit\" id=\"BtnEdit"+oSharing.GetId()+"\">Edit</button></td>"+
                                            "<td class=\"button\"><button class=\"btn btn-info BtnDelete\" id=\"BtnDelete"+oSharing.GetId()+"\">Delete</button></td>"+
                                            "</tr>";
                    $(tbodyRow).appendTo("#TxtUserPastSharingsTable tbody");
                }
            }
        }
    };



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
    };
    
   

/************************[SECTION] END USER SHARINGS ********************************/


/************************[SECTION]  AVAILABLE SHARINGS ******************************/

    $.BtnTriggerAvailBookListener = function () {
        $(".BtnTriggerAvailableSharings").click(function(){
            var table = $("#AvailableSharingsModal table").html();
            if(table == undefined){
               $.CreateAvailableSharings();
               $.AddListenerBook();
            } else {
                $("#AvailableSharingsModal table").remove();
                $.CreateAvailableSharings();
                $.AddListenerBook();
            }
        });
    };

    $.CreateAvailableSharings = function(){
        var allAvailableSharings = oDBsharings().GetAvailableSharings();
        console.log(allAvailableSharings);
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
        for (i in allAvailableSharings ){
            var validateDate = DateValidator(allAvailableSharings[i], "sharing_datetime");
            if(validateDate == true){
                var sharing_id = allAvailableSharings[i].id;
                var oSharing = oDBsharings("", sharing_id);
                var tbodyRow = "<tr id=\"BookingId=" +oSharing.GetId()+"\">"+
                                            "<td class=\"number\">"+oSharing.GetId() +"</td>"+
                                            "<td class=\"status\">"+oSharing.GetSharingStatus().GetName() +"</td>"+
                                            "<td class=\"pickup\">"+ oSharing.GetPickuUpLocation().GetName()+"</td>"+
                                            "<td class=\"via\">" +oSharing.GetVia()+"</td>"+
                                            "<td class=\"destination\">"+oSharing.GetDestination()+"</td>"+
                                            "<td class=\"sharingdate\">"+oSharing.GetDateTime()+"</td>"+
                                            "<td class=\"seats\">"+oSharing.GetFreeSeats()+"</td>"+
                                            "<td class=\"seatsbooked\">Booked Seats</td>"+
                                            "<td class=\"button\"><button class=\"btn btn-info BtnBook\" id=\"BtnBook"+oSharing.GetId()+"\">Book</button></td>"+
                                            "</tr>";
                 $(tbodyRow).appendTo("#TxtBookSharingsTable tbody");
            }
        }
    };

    $.AddListenerBook = function () {
                $(".BtnBook").click(function(){
                    $('#AvailableSharingsModal').modal('hide');
                    var rowID = $(this).parents("tr").attr("id");
                    var rowIDNumber = rowID.split("=")[1];
                    var btnIDNumber = $(this).attr("id").split("BtnBook")[1];
                    var user_id = user.GetId();
                    var sharing_id = rowIDNumber;
                    if(rowIDNumber == btnIDNumber){

                        oDBbookings().AddBooking(user_id, sharing_id);
                    }

                });
    };

 /************************[SECTION]  END AVAILABLE SHARINGS ******************************/


/************************[SECTION]  USER ACTIONS  ******************************/

    /******** SIGN UP functionality *********/
            /* [LISTENER] SIGN UP */

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
    };

    /******** SIGN IN functionality *********/
            /* [LISTENER] SIGN IN */

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
                        sharings = oDBsharings(aUserParser()[0]);
                        car = oDBcars(aUserParser()[0]);
                        bookings = oDBbookings(aUserParser()[0]);
                        sharings.SaveSharingsOnLogin();
                        car.SaveCarOnLogin();
                        bookings.SaveBookingsOnLogin();
                        $.AdminNavigationPanel("none");
                       console.log("You logged in as an ADMIN");
                    } else {
                        car = oDBcars(aUserParser()[0]);
                        sharings = oDBsharings(aUserParser()[0]);
                        sharingStatus = oDBsharingsStatuses(1);
                        bookings = oDBbookings(aUserParser()[0]);

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

    /******** SIGN OUT functionality *********/
            /* [LISTENER] SIGN OUT */

    $.SignOutListener = function () {
        $("#BtnSignout").click(function(){
            user.Logout();
            $.DefaultNavigationPanel("none");
        });
    };

    /********** EDIT PROFILE functionality **********/
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
    };
    $.BtnEditUser = function () {
        $("#EditUserModal #BtnEditUser").click(function(){
            $('#EditUserModal').modal('hide');
            user.EditUser();
            $("#LogedinUserName").html('<i class="icon-user icon-white"></i>&nbsp;'+aUserParser()[1]);
        });
    };

    /******** ADD SHARING functionality *********/
            /* [LISTENER] ADD SHARING */

    $.BtnTriggerAddSharingListener = function () {
        $("#BtnTriggerAddSharing").click(function (){
            if($("#TxtPickUpSelector").html() == ""){
                $.CreatePickupLocations();
            }
            $("#TxtDate").datepicker({dateFormat: "dd/mm/yy", minDate: "+1D", maxDate: "+1M +10D"});
            $.BtnAddSharingListener();
        });
    };
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
    };

/************************[SECTION]  END USER ACTIONS ******************************/


/************************[SECTION] NAVIGATION PANELS ********************************/

$.AdminNavigationPanel = function (displayrule){
        var admin_nav = $.GetNavigationPanel("admin_navigation.php");
        $("body").prepend(admin_nav);
        $("#AdminNavigationPanel").css("display", displayrule);
        $("#AdminNavigationPanel").slideDown(390);
        $("#LogedinUserName").html('<i class="icon-user icon-white"></i>&nbsp;'+user.GetName());
        $.SignOutListener();
        $.BtnTriggerEditListener();
        $.BtnTriggerAddSharingListener();
        $.BtnTriggerAvailBookListener();
        $.BtnTriggerUserSharings();
        $.BtnTriggerUserBookings();
        $.BtnTriggerAllBookingsListener();
        $.BtnTriggerAllUsersListener();
        $.TriggerTypeaheadAdmin();
        $.FormTriggerFindUserListener();
    $("#NavigationPanel").slideUp(410, function(){
        $(this).remove();
    });
};

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
};

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
};

/************************[SECTION] END NAVIGATION PANELS ********************************/


/************************[SECTION] PARSERS ******************************/

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

/************************[SECTION] END ******************************/



/************************ [SECTION]  FUNCTIONS ******************************/

    $.GetNavigationPanel = function (filename) {
        var xmlHTTP = new XMLHttpRequest;
        xmlHTTP.open("GET", filename, false);
        xmlHTTP.send();
        var navigation = xmlHTTP.responseText;
        return navigation;
    };
    $.Disabled = function (ID){
        $("#" + ID).attr("disabled", "disabled");
    };
    $.deleteAttr = function (ID, attr){
        $("#" + ID).removeAttr(attr);
    };
    $.FixSignInForm = function () {
        $('.DropdownMenu button, .DropdownMenu input, .DropdownMenu label').click(function(e) {
            e.stopPropagation();
        });
    };

    function DateValidator (Object, arrayDateProperty){
        var today = new Date;
        today.setHours(0, 0, 0, 0);
        var date_time = Object[arrayDateProperty];
        var Pday = date_time.split("/")[0],
            PMonth = date_time.split("/")[1]-1,
            PYear = date_time.split("/")[2],
            parsedDate = new Date(PYear, PMonth, Pday );
        if(parsedDate < today){
            return false
        } else if (parsedDate >= today){
            return true;
        }
        return today;
    }

    $.CheckLogedIn = function () {
        if(localStorage.User){
            var user_type = user.GetM_type().GetName();
            if(user_type == "Admin"){
                $("body").prepend($.GetNavigationPanel("admin_navigation.php"));
                $("#AdminNavigationPanel").css("display", "block");
                
                $.BtnTriggerAllBookingsListener();
                $.BtnTriggerAllUsersListener();
                $.TriggerTypeaheadAdmin();
                $.FormTriggerFindUserListener();
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
//            console.log("no one is loged int");
        }
    };
    

/************************ [SECTION] END ******************************/

    $.CheckLogedIn();



});
// FIXME: Later on implement encryption for users password safety user sha1 + salt combination