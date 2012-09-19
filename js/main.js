    //  SAVE USER TO MEMBERS TABLE
    /*  
     *  Call function SaveUser only when submit button is clicked
     * Add JQuery Event Listener in [SECTION]  EVENT LISTENERS to process users submit
     */

    $.SaveMember = function(username, lastname, email, userphone){
        $MembersTable.insert({"name":username, "lastname":lastname, "email":email, "phone":userphone});
    }
    //  END SAVE USER
    
    
    
    
//    @todo Create Update User, Delete User add Validation

/************************[SECTION]  EVENT LISTENERS******************************/


    // Listens to submit button in div.SignUpForm
    $("#TxtSignUpUser").click(function(){
        $UserName = $('#TxtUserName').val( );
        $UserLastName = $('#TxtUserLastName').val( );
        $UserEmail = $('#TxtUserEmail').val( );
        $UserPhone = $('#TxtUserPhone').val( );
        $.SaveMember($UserName, $UserLastName, $UserEmail, $UserPhone);
        console.log($MembersTable().get());
    });

//});


//PENDING
//
// FIXME: Think about how to save database without localStorage, so that database will be available to all users
// FIXME: Later on implement encryption for users password safety user sha1 + salt combination