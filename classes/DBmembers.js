/** 
 * @name Booking-System MembersTable Manipulation
 * @author Dimul Sergejenkov <lamukra@gmail.com>
 * @constructor Database builder with empty fields
 */

function DBmembers(iId){
        
        /* GLOBAL VARIABLES*/
        var id;
        var name;
        var lastname;
        var email;
        var phone;
        var password;
        var membersDB;
        
        DBmembers.prototype.DatabaseContructor = function (iId){
            
            /* IF USER already has a Record in Database then compare his ID that is passed to a CONSTRUCTOR againsts IDS in MemberstTable   */    
            if (typeof iId != undefined){
                   var ids = DB[0].id;
                   iIdsLength = ids.length;                    
                   for (i = 0; i < iIdsLength; i++){
                       if(iId == i){
                           
                           // SELECTS SPECEFIC ROW BASED ON MEMBER ID
                           // Returns an array selected based on Member ID
                           var query = [ DB[0].id[i], DB[0].name[i], DB[0].lastname[i], DB[0].email[i], DB[0].phone[i], DB[0].password[i] ];  //select("id", "name", "lastname", "email", "phone", "password");
                           console.log(query);
                           
                           console.log(DB[0]);
                           
                           // FETCH DB FIELD VALUES INTO GLOBAL VARIABLES

                           this.id = query[0]; // this is position of ID column (interger)
                           this.name = query[1]; //this is position of NAME column (string)
                           this.lastname = query[2]; //this is position of  LASTNAME column(string)
                           this.email = query[3]; // this is position of EMAIL column (string)
                           this.phone = query[4]; // this is position of PHONE column (string)
                           this.password = query[5]; //this is posiiton of PASSWORD column (string)
                           
//                           console.log("User with id " + [i] + " has name: " + DB[0].name[i] );
                       }
                   }
            }
                    
        }        
        /*     SETTERS     */
        
        DBmembers.prototype.SetId = function (iId){
            this.id = iId;
        }
        DBmembers.prototype.SetName = function(sName){
            this.name = sName;
        }
        DBmembers.prototype.SetLastName = function(sLastName){
            this.lastname = sLastName;
        }
        DBmembers.prototype.SetEmail = function(sEmail){
            this.email = sEmail;
        }
        DBmembers.prototype.SetPhone= function(sPhone){
            this.phone = sPhone;
        }      
        DBmembers.prototype.SetPassword= function(sPassword){
            this.password = sPassword;
        }
        
        /*     GETTERS     */
        
        DBmembers.prototype.GetId = function (){
            return this.id;
        }        
        DBmembers.prototype.GetName = function () {
            return this.name;
        }
        DBmembers.prototype.GetLastName = function () {
            return this.lastname;
        }
        DBmembers.prototype.GetEmail = function () {
            return this.email;
        }
        DBmembers.prototype.GetPhone = function () {
            return this.phone;
        }
        DBmembers.prototype.GetPassword = function () {
            return this.password;
        }      
        DBmembers.prototype.GetMembersTable = function () {
            return this.membersDB().get();
        };
        
        /*     FUNCTIONS     */
        
        DBmembers.prototype.SaveUser = function () {
            //Get values from SignUp Form
            
            var name = this.GetElement("TxtUserName").value;
            var lastname = this.GetElement("TxtUserLastName").value;
            var email = this.GetElement("TxtUserEmail").value;
            var phone = this.GetElement("TxtUserPhone").value;
            var password = this.GetElement("TxtPassword").value;
            
            // Save member in MembersTable
            
            // id will be added automatically based on array length
            var iDBidslength = DB[0].id.length;
            DB[0].id.splice(iDBidslength, 0, iDBidslength ); //don't change it
            
            //Add Member from SignupForm
            DB[0].name.splice(iDBidslength, 0, name);
            DB[0].lastname.splice(iDBidslength, 0, lastname);
            DB[0].email.splice(iDBidslength, 0, email);
            DB[0].phone.splice(iDBidslength, 0, phone);
            DB[0].password.splice(iDBidslength, 0, password);
            
            localStorage.setItem("taffy_DB", JSON.stringify(DB));
        }
        
        DBmembers.prototype.EditUser = function (sBtnId) {
            var aUser = JSON.parse(localStorage.User);
            
            var sName = this.GetElement("TxtUserName");
            var sLastname = this.GetElement("TxtUserLastName");
            var sEmail = this.GetElement("TxtUserEmail");
            var sPhone =  this.GetElement("TxtUserPhone");
            
            var sInputField = this.GetElement("EditUserEmail");
            
            if(localStorage.User){
                console.log("Edit me");
                console.log(aUser);
                
                sName.value = aUser[1];
                sLastname.value = aUser[2];
                sEmail.value = aUser[3];
                sPhone.value = aUser[4];
                return true;                
            }
            if(sBtnId == "Update User"){
                console.log("Update Me");
               aUser.splice(0, 5, aUser[0], sName.value, sLastname.value, sEmail.value, sPhone.value)               
               localStorage.User = JSON.stringify(aUser);
               console.log(aUser);
               console.log(localStorage);
               return true;
            }
            return false;
        }
        
        
        DBmembers.prototype.Login = function (email, password){
             // Compare that the email and password are registered 
            // Foreach, never goes outside the length of the array
               for(var i in DB[0].email &&  DB[0].password){
                    var MemberEmail = DB[0].email[i];
                    var MemberPassword = DB[0].password[i];
                    
                    // Find a match in Members Table
                    if(MemberEmail == email && MemberPassword == password ){
                        this.id = DB[0].id[i];
                        this.name = DB[0].name[i];
                        this.lastname = DB[0].lastname[i];
                        this.email = DB[0].email[i];
                        this.phone = DB[0].phone[i]; 
                        var aUser = [DB[0].id[i], DB[0].name[i], DB[0].lastname[i], DB[0].email[i], DB[0].phone[i]];
                        localStorage.setItem("User", JSON.stringify(aUser));
                        console.log("User has loged in and has this INFO: " +this.id +" "+ this.name +" "+ this.lastname +" "+ this.email +" "+ this.phone);
                        console.log(localStorage);
                        return true;
                    } 
                }
                console.log("user does not exist");
                return false;
        }
        
        
        
        DBmembers.prototype.GetElement = function (sId){
               var get = document.getElementById(sId);
               return get
        }
        
        
    
    this.DatabaseContructor(iId);
}