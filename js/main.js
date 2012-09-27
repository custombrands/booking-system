var user = oDBmembers();
var car = oDBcars();
var sharings = oDBsharings();
var sharingStatus = oDBsharingsStatuses();
var login;
 
function oDBmembers(ID) {
    var oDBmember = new DBmembers(ID);
    return oDBmember;
}
function oDBcars(M_ID){
    var oDBcar = new DBcars(M_ID);
    return oDBcar;
}
function oDBsharings(M_ID) {
    var oDBsharing = new DBsharings(M_ID);
    return oDBsharing;
}
function oDBsharingsStatuses(S_ID){
    var oDBsharingStatus = new DBsharingStatuses(S_ID);
    return oDBsharingStatus;
}

    /*   DYNAMIC ELEMENTS CREATION   */

$.CreatePickupLocations = (function (){
     var oPickupTable = DB[2]; // or aMainDBparser()[2] if to take from loclaStorage;
    $("#TxtSelectPickup").append("<select id=\"TxtPickUpSelector\"></select>");
        for (i in oPickupTable.id){
            $("#TxtPickUpSelector").append("<option id=\"OptionOne\" value=\""+oPickupTable.id[i]+"\" >" + oPickupTable.name[i] + "</option>");
        }
})();

$.CreateAllSharingsTable = function(){
    var allSharings = aSharingsParser();
    var theadRow = "<tr><th>Nr.</th><th>Status</th><th>Pickup Location</th><th class=\"TxtVia\">Via</th><th>Destination</th><th>Sharing Date</th><th>Seats</th><th>Booked Seats</th></tr>"
    $('<table>', {'id': 'TxtSharingsTable', "class": 'MarginTop10 MarginAuto TxtSharingsTable'}).appendTo("#LblDisplaySharings");
    $("#TxtSharingsTable").append("<thead>" , "<tbody>");
    $("#TxtSharingsTable thead").append(theadRow);
   for (i in allSharings ){
        var count = Number(i)+1;
        var tbodyRow = "<tr id=\"EditRow" +allSharings[i].id+"\">"+
                                    "<td>"+ count +"</td>"+
                                    "<td>"+allSharings[i].SHstatus_id +"</td>"+
                                    "<td >"+allSharings[i].pickup_id+"</td>"+
                                    "<td >" +allSharings[i].via+"</td>"+
                                    "<td>"+allSharings[i].destination+"</td>"+
                                    "<td>"+allSharings[i].sharing_datetime+"</td>"+
                                    "<td>"+allSharings[i].seats+"</td>"+
                                    "<td>Booked Seats</td>"+
                                    "<td><button id=\"BtnEdit"+count+"\" class=\"BtnEdit\">Edit</button></td>"+
                                    "<td><button id=\"BtnDelete"+count+"\" class=\"BtnDelete\">Delete</button></td>"+
                                    "</tr>";
         $(tbodyRow).appendTo("#TxtSharingsTable tbody");                       
//        $("#TxtSharingsTable tbody").append(tbodyRow);
    }
}


//    @todo Create Update User, Delete User add Validation

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

        if(!aUserParser()){
            login = user.Login(LoginEmail, LoginPassword);
            if(login){
            user = oDBmembers(aUserParser()[0]);
            car = oDBcars(aUserParser()[0])
            sharings = oDBsharings(aUserParser()[0]);
            sharingStatus = oDBsharingsStatuses(1);
            
            sharings.SaveSharingsOnLogin()
            car.SaveCarOnLogin();
            $.Disabled("LoginUserEmail");
            $.Disabled("LoginPassword");
            $.Disabled("TxtLogin");
            $.deleteAttr("TxtLogout", "disabled");
            }
        }
        //Check User type and provide functionality
        if(aUserParser()){
            var user_type = user.GetM_type().GetName();
           if(user_type == "Admin"){
               console.log("You logged in as an ADMIN");
           } else {
               console.log("You loged in as an USER");
           } 
        }
    });
    
    // LOGOUT
    $("#TxtLogout").click(function(){
         user.Logout();
         $.deleteAttr("LoginUserEmail", "disabled");
         $.deleteAttr("LoginPassword", "disabled");
         $.deleteAttr("TxtLogin", "disabled");
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
                $.CreateAllSharingsTable();
                
                
                
            } else {
                sBtnViewSharingsId.val("Hide Sharings")
                $.CreateAllSharingsTable();
            }
    });
    
    // VIEW SHARINGS
$("#BtnViewSharings").click(function(){
    var sBtnId = $("#BtnViewSharings")
    $.CreateAllSharingsTable();
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
                var trElements = $("table tbody tr");
                var iTbodyLenght = trElements.length
                 var editField1;
                 var editField2;
                 var editField3;
                 for (i =0; i<iTbodyLenght; i++){
                 var counter = Number(i);
                 var sBtnId = "BtnEdit"+(Number(i)+1);
                      if($(this).attr("id") == sBtnId){
//                          console.log($(this).attr("id"));
//                         console.log(trElements[i].id);
                        if($("#" + sBtnId).html() == "Edit"){
                            $("#" + sBtnId).html("Update");
//                            console.log();
                            editField1 = trElements[i].children[3];
                            editField2 = trElements[i].children[4];
                            editField3 = trElements[i].children[5];
                        
//                            console.log(editField);
                            $(editField1).replaceWith($('<td>' + '<input type="text" value="'+ editField1.innerHTML +'"/>' + '</td>' ));
                            $(editField2).replaceWith($('<td>' + '<input type="text" value="'+ editField2.innerHTML +'"/>'+'</td>' ));
                            $(editField3).replaceWith($('<td>' + '<input type="text" value="'+ editField3.innerHTML +'"/>'+'</td>' ));
                        } else {
                            $("#" + sBtnId).html("Edit");
                            editField1 = trElements[i].children[3];
                            editField2 = trElements[i].children[4];
                            editField3 = trElements[i].children[5];
                            
                            $(editField1).replaceWith('<td>' + editField1.childNodes[0].value + '</td>')
                            $(editField2).replaceWith('<td>' + editField2.childNodes[0].value + '</td>')
                            $(editField3).replaceWith('<td>' + editField3.childNodes[0].value + '</td>')
                            
                            var EditedRowId = trElements[i].id;
                            var SharingsIdfromRow = EditedRowId.split("EditRow")[1];
                            var Sharings_Id = Number(SharingsIdfromRow);
                            
                            sharings.UpdateSharing(Sharings_Id);
                            
                        }
                    }
                    }
                 });
//}
};

$.AddListenerDelete = function () {
    if($("#BtnViewSharings").val() == "Hide Sharings"){

            $(".BtnDelete").click(function(){
                var trElements = $("table tbody tr");
                var iTbodyLenght = trElements.length
                 for (i =0; i<iTbodyLenght; i++){
                     var counter = Number(i)+1;
                     var sBtnId = "BtnDelete"+(Number(i)+1);
                     var RowId = $(this).parent().parent().attr("id");
//                     console.log(RowId);
                      if($(this).attr("id") == sBtnId){
                          console.log("#"+RowId);
//                          console.log(trElements);
                         trElements.remove("#"+RowId);
//                        $(this).parent().parent().remove();
//                        
                        var toDeleteRowId = trElements[i].id;
//                        
                        var SharingsIdfromRow = toDeleteRowId.split("EditRow")[1];
                        var Sharings_Id = Number(SharingsIdfromRow);
                        sharings.DeleteSharing(Sharings_Id);
                    }
                }
            });
    }
}

/************************[SECTION]  EVENT LISTENERS******************************/
    
    /*   PARSERS   */
    
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
    
    /* Useful Functions */
    
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
        } else {
            console.log("noone is loged int");
        }
    })();


// FIXME: Think about how to save database without localStorage, so that database will be available to all users
// FIXME: Later on implement encryption for users password safety user sha1 + salt combination