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

$.CreatePickupLocations = (function (){
     var oPickupTable = DB[2]; // or aMainDBparser()[2] if to take from loclaStorage;
    $("#TxtSelectPickup").append("<select id=\"TxtPickUpSelector\"></select>");
//    console.log(oPickupTable.name);
    
    for (i in oPickupTable.id){
//        console.log(oPickupTable.name[i]);
        $("#TxtPickUpSelector").append("<option id=\"OptionOne\" value=\""+oPickupTable.id[i]+"\" >" + oPickupTable.name[i] + "</option>");
    }
    
})();


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
            sharings = oDBsharings(aUserParser()[0]);
            car = oDBcars(aUserParser()[0])
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
            

    });
        
    
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