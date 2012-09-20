var oDBmembers = new DBmembers();
//    @todo Create Update User, Delete User add Validation

/************************[SECTION]  EVENT LISTENERS******************************/

    // Listens to submit button in SignUp
        $("#TxtSignUpUser").click(function(){
        
        oDBmembers.SaveUser();
    });
    //Login on press 
    $("#TxtLogin").click(function(){
        var email = $("#LoginUserEmail").val();
        var password = $("#LoginPassword").val();
        oDBmembers.Login(email, password);
    });
    // Edit User
    
    $("#TxtEditUser").click(function(){
        var sBtnId = $("#TxtEditUser").val();
        var sInput = $("#EditUserEmail").val();
        console.log(sInput);
        if(sBtnId == "Edit User" && sInput ){
            
            $("#TxtEditUser").val("Update User");
            oDBmembers.EditUser();
            
        } else if (sBtnId == "Update User"){
            
            oDBmembers.EditUser(sBtnId)
            $("#TxtEditUser").val("Edit User");
            
        } else {
            console.log("there is nothing to edit");
        }
        
    });
    
    
    

//});


//PENDING
//
// FIXME: Think about how to save database without localStorage, so that database will be available to all users
// FIXME: Later on implement encryption for users password safety user sha1 + salt combination