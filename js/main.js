
function oDBmembers() {
    var oDBmembers = new DBmembers();
    return oDBmembers;
}

//    @todo Create Update User, Delete User add Validation

/************************[SECTION]  EVENT LISTENERS******************************/

    // Listens SINGUP button
    $("#TxtSignUpUser").click(function(){
            var email = $("#TxtUserEmail").val();
            var password = $("#TxtPassword").val();
            
            bValid = oDBmembers().ValidateElements(email, password);
            if(bValid == true){
                oDBmembers().SaveUser();
                if(!localStorage.User){
                    oDBmembers().Login($("#TxtUserEmail").val(), $("#TxtRepeatPassword").val());
                } else {
                    localStorage.removeItem("User");
                    oDBmembers().Login($("#TxtUserEmail").val(), $("#TxtRepeatPassword").val());
                }
            }
    });
    
    //Login on press 
    $("#TxtLogin").click(function(){
        var LoginEmail = $("#LoginUserEmail").val();
        var LoginPassword = $("#LoginPassword").val();
        
        oDBmembers().Login(LoginEmail, LoginPassword);
        
    });
    // Logout
    $("#TxtLogout").click(function(){
         oDBmembers().Logout();
        $("#SignUpForm").css("display", "");
    });
    
    // Edit User
    $("#TxtEditUser").click(function(){
        var sBtnId = $("#TxtEditUser");
        var sInput = $("#EditUserEmail");
        console.log(sInput.val());
        
        if(sBtnId.val() == "Edit User" && sInput.val() ){
            
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
    
    
    

//});


//PENDING
//
// FIXME: Think about how to save database without localStorage, so that database will be available to all users
// FIXME: Later on implement encryption for users password safety user sha1 + salt combination