var user = new DBmembers();

function oDBmembers(ID) {
    var oDBmember = new DBmembers(ID);
    return oDBmember;
}

$.CreatePickupLocations = (function (){
     var oPickupTable = aMainDBparser()[2];
    $("#TxtSelectPickup").append("<select id=\"PickUpSelector\"></select>");
    console.log(oPickupTable.name);
    
    for (i in oPickupTable.id){
        console.log(oPickupTable.name[i]);
        $("#PickUpSelector").append("<option id=\"OptionOne\" value=\"Choice 1\" >" + oPickupTable.name[i] + "</option>");
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
                    oDBmembers().Login($("#TxtUserEmail").val(), $("#TxtRepeatPassword").val());
                    user = oDBmembers(aUserParser()[0]);
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
        oDBmembers().Login(LoginEmail, LoginPassword);
        $.Disabled("LoginUserEmail");
        $.Disabled("LoginPassword");
        $.Disabled("TxtLogin");
        $.deleteAttr("TxtLogout", "disabled");
        
        // Set Member Information to object when he logs in
        if(aUserParser()){
            user = oDBmembers(aUserParser()[0]);
            var user_type = user.GetM_type().GetName();
           if(user_type == "Admin"){
               console.log("You logged in as an ADMIN");
           } else {
               console.log("You loged in as an USER");
           } 
        }
    });
    
    // Logout
    $("#TxtLogout").click(function(){
         oDBmembers().Logout();
         $.deleteAttr("LoginUserEmail", "disabled");
         $.deleteAttr("LoginPassword", "disabled");
         $.deleteAttr("TxtLogin", "disabled");
         $.Disabled("TxtLogout");
    });
    
    // Edit User
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
    
    /*   PARSER   */
    
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