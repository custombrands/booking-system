/** @author <a href="mailto:lamukra@gmail.com">Dimul Sergejenkov</a>
 /**  @class This class is used to create, select and update members table 
 *
 */


$.getScript("./js/taffy.js", function() {
    
/* 
* CREATE MEMBERS DATABASE
* This table holds all data about users registered in the system
* This table will bi used to create, retrieve, update, delete Users 
*/
        
    $MembersTable = TAFFY([
        {
            "name":"Dimul",
            "lastname":"Sergejenkov",
            "phone":"+4553257007"
        },
        {
            "name":"Elena",
            "lastname":"Hadjihristova",
            "phone":"+4553257007"

        },
        {
            "name":"Santiago",
            "lastname":"Donoso",
            "phone":"+4553257007"

        }
    ]);


//  SELECT ALL MEMBERS
                   
    $GetMembersTable = $MembersTable().get();
        $iLengthMembers = $GetMembersTable.length;
        for (i = 0; i < $iLengthMembers; i++){
           console.log($GetMembersTable[i].name + " " + $GetMembersTable[i].lastname);
        }

//  END OF SELECT ALL MEMBERS



//  ADD USER TO MEMBERS TABLE

    /*  
     *  Call function SaveUser only when submit button is click
     * Add JQuery Event Listener in Section Event Listeners to process users submit
     */
    
    $.SaveUser = function(){
        
        $UserName = $('#TxtUserName').val( );
        $UserLastName = $('#TxtUserLastName').val( );
        $UserPhone = $('#TxtUserPhone').val( );

        $MembersTable.insert({"name":$UserName, "lastname":$UserLastName, "phone":$UserPhone});
    }           

/************************[SECTION] EVENT LISTENERS******************************/


    $("#TxtSignUpUser").click(function(){
        $.SaveUser();
        console.log($MembersTable().get());
    });

});
