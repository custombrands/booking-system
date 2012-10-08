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
        var m_type;
        
        DBmembers.prototype.DatabaseContructor = function (iId){
            
            /* IF USER already has a Record in Database then compare his ID that is passed to a CONSTRUCTOR againsts IDS in MemberstTable   */    
            
             var ids = DB[0].id;
             var iIdsLength = ids.length;
             
             if (typeof iId == "number"){
//                console.log("Got the ID, building");                    
                   for (i = 0; i < iIdsLength; i++){
                       if(iId == i){
                           // SELECTS SPECEFIC DATA BASED ON MEMBER ID
                           // Returns an array where selection is based on Member ID
                           //select("id", "name", "lastname", "email", "phone", "password");
                           var query = [ DB[0].id[i], DB[0].name[i], DB[0].lastname[i], DB[0].email[i], DB[0].phone[i], DB[0].password[i], DB[0].m_type_id[i] ];  
//                           console.log(query);
                           // FETCH DB FIELD VALUES INTO GLOBAL VARIABLES
                           this.id = query[0]; // this is position of ID column (interger)
                           this.name = query[1]; //this is position of NAME column (string)
                           this.lastname = query[2]; //this is position of  LASTNAME column(string)
                           this.email = query[3]; // this is position of EMAIL column (string)
                           this.phone = query[4]; // this is position of PHONE column (string)
                           this.password = query[5]; //this is posiiton of PASSWORD column (string)
                           this.m_type = new DBm_types(query[6]); //this is posiiton of m_type_id in query and creates new object Member Types;
                       }
                   }
            }else if (localStorage.User){
                var aUser = JSON.parse(localStorage.User); 
                           this.id = aUser[0]; // this is position of ID column (interger)
                           this.name = aUser[1]; //this is position of NAME column (string)
                           this.lastname = aUser[2]; //this is position of  LASTNAME column(string)
                           this.email = aUser[3]; // this is position of EMAIL column (string)
                           this.phone = aUser[4]; // this is position of PHONE column (string)
                           for(var i in DB[0].id){
                               if(aUser[0] == DB[0].id[i]){
                                   this.password = DB[0].password[i];
                               }
                           }
                           this.m_type = new DBm_types(aUser[5]); //this is posiiton of m_type_id in query and creates new object Member Types;
            }
            return true;
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
        DBmembers.prototype.SetM_type= function(m_type_id){
            this.m_type = new DBm_types(m_type_id);
        }
        
        /*     GETTERS     */
     /**   @GetId This is for gettings ID */
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
        DBmembers.prototype.GetM_type = function () {
            return this.m_type;
        }
//        DBmembers.prototype.GetSharings = function(){
//            return this.sharings;
//        }
        
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
            
            //Add Member from SignupForm into Main DB
            DB[0].name.splice(iDBidslength, 0, name);
            DB[0].lastname.splice(iDBidslength, 0, lastname);
            DB[0].email.splice(iDBidslength, 0, email);
            DB[0].phone.splice(iDBidslength, 0, phone);
            DB[0].password.splice(iDBidslength, 0, password);
            DB[0].m_type_id.splice(iDBidslength, 0, 1);
            // Add Member to localStorage.taffy_DB to MainDB as main DB will not be renewed on next reload it will Parsed from localStorage.taffy_DB
            // Main DB is build only once if it does not exist in localStorage
            
            localStorage.setItem("taffy_DB", JSON.stringify(DB));
            console.log("User Is Saved");
            console.log(DB[0].name);
            console.log(DB[0].email);
            return true;
        }
        
        DBmembers.prototype.EditUser = function (sBtnId) {
            var aUser = JSON.parse(localStorage.User);
            var sName = this.GetElement("TxtUserName");
            var sLastname = this.GetElement("TxtUserLastName");
            var sEmail = this.GetElement("TxtUserEmail");
            var sPhone =  this.GetElement("TxtUserPhone");
                aUser[1] = sName.value;
                aUser[2] = sLastname.value;
                aUser[3] = sEmail.value;
                aUser[4] = sPhone.value;
                localStorage.User = JSON.stringify(aUser);
                console.log(aUser);
                console.log(localStorage.getItem("User"));
                console.log("---------------------------------------------------------");
                console.log("Updated Me to main DB");
                var MainDBids = DB[0].id;
                var updateID = DB[0].id[aUser[0]];
                var IndexOfupdateID = MainDBids.indexOf(updateID);
                DB[0].name.splice(IndexOfupdateID, 1, aUser[1]);
                DB[0].lastname.splice(IndexOfupdateID, 1, aUser[2]);
                DB[0].email.splice(IndexOfupdateID, 1, aUser[3]);
                DB[0].phone.splice(IndexOfupdateID, 1, aUser[4]);
                localStorage.taffy_DB = JSON.stringify(DB);
                console.log(DB[0].name[updateID] +", " + DB[0].lastname[updateID] + " " +  DB[0].email[updateID]+" "+ DB[0].phone[updateID]);
        }
        
        DBmembers.prototype.Login = function (email, password){
             // Compare that the email and password are registered 
            // Foreach, never goes outside the length of the array
               for(var i in DB[0].email &&  DB[0].password){
                    var MemberEmail = DB[0].email[i];
                    var MemberPassword = DB[0].password[i];
                    
                    // Find a match in Members Table
                    if(MemberEmail == email && MemberPassword == password ){ 
                        var aUser = [DB[0].id[i], DB[0].name[i], DB[0].lastname[i], DB[0].email[i], DB[0].phone[i], DB[0].m_type_id[i]];
                        localStorage.setItem("User", JSON.stringify(aUser));
                        return true;
                    } 
                }
                return false;
        }
        DBmembers.prototype.Logout = function () {
            localStorage.removeItem("User");
            localStorage.removeItem("User_Sharings");
            localStorage.removeItem("User_Car");
            localStorage.removeItem("User_Bookings");
            console.log("User Is Loged out");
            console.log(localStorage);
            return true;
        }
        
        /* VALIDATION */
        
        DBmembers.prototype.ValidateElements = function (email_val, password_val){
                //ValidateInfo('TxtLoginEmail', 6, 50);
//                var oEmailInput = this.GetElement(oEmailInputId);
//                var oPasswordInput = this.GetElement(oPasswordInputId);
                if (this.ValidateFields()){
                var bValidEmail = this.IsEmailValid(email_val);
                var bValidPassword = this.IsPasswordValid(password_val, 6, 20);
                if(bValidEmail == true && bValidPassword == true){
                    return true;
                }
                }
                return false;
            }
            
         DBmembers.prototype.IsEmailValid = function(email){

                var regularExpresion = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

                if(regularExpresion.test(email) == true){
                    return true;
                }  
                else{
                    return false;
                }

            }
            DBmembers.prototype.IsPasswordValid = function (password, minCharacters, maxCharacters){
                
//                var oInput = this.GetElement(inputId);
//                var info = oInput.value;
                console.log(password);
                console.log(this.GetElement("TxtRepeatPassword").value);
                
                if(this.GetElement("TxtPassword").value !== ""){
                    
                        if(password.length >= minCharacters && password.length <= maxCharacters){
                             console.log("this password will work");

                             if ((this.GetElement("TxtRepeatPassword").value != password)){
                                console.log(" but Passwords don't match");
                                return false;
                            } else {
                                console.log("and they match");
                                return true;
                            }
                        } else {
                            console.log("password is too short");
                            return false
                        }
                        
               } else {
                   console.log("Please Repeat Passwords");
                   return false
               }
                console.log("done");
                
            }
            
            DBmembers.prototype.ValidateFields = function (){
                    var sName = this.GetElement("TxtUserName").value;
                    var sLastname = this.GetElement("TxtUserLastName").value;
                    var sEmail = this.GetElement("TxtUserEmail").value;
                    var sPhone =  this.GetElement("TxtUserPhone").value;
                    var sPassword = this.GetElement("TxtPassword").value;
                    var sPasswordRepeat = this.GetElement("TxtRepeatPassword").value;
                    
                    if ( typeof sName == "" || sLastname == "" || sEmail == "" || sPhone == "" || sPassword == "" || sPasswordRepeat == "") {
                        console.log("Please fill in all required fields");
                        return false
                    } else {
                        console.log("all fields filled");
                        return true;
                    }
             }            
 
        
        /* RECURSIVE ACTIONS */
        
        DBmembers.prototype.GetElement = function (sId){
               var get = document.getElementById(sId);
               return get
        }
        
        
    
    this.DatabaseContructor(iId);
}