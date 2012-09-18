/** 
 * @name Booking-System Database
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
        
        
        /* Constructor that will run on LOAD and will create an empty database and if user has a record will fetch data from DB and assing value to global variables */
        DBmembers.prototype.DatabaseContructor = function (iId){
            // Initialize TAFFYDB Create Members Database (DB used as Database - not aplicable like in SQL, in SQL it will be a table [Database=Table])   
            this.membersDB = new TAFFY();
            // Sets up an empty columns with specified names
            this.membersDB.settings({template:{"id":"","name":"", "lastname":"", "email":"", "phone":"", "password":""}})
            //Runs an insert query to create some users
            //PENDING: DATABASE SHOULD BE CREATED FROM USER REGISTRATIONS USING JS AND SAVED DATA SHOULD BE SAVED ADDED TO SERVER FILE
            
            this.membersDB.insert(
                [
                 {"id":0, "name":"Dimul" , "lastname":"Sergejenkov" , "email":"a@gmial.com" , "phone":"+4553257007", "password":"123456"},
                 {"id":1, "name":"Elena" , "lastname":"Hadjihristova" ,  "email":"b@b.com" , "phone":"+4553257007", "password":"123456"},
                 {"id":2, "name":"Santiago" , "lastname":"Donoso" , "email":"c@c.com" , "phone":"+4553257007", "password":"123456"}
                ]
            );
            /* IF USER already has a Record in Database then compare his ID that is passed to a CONSTRUCTOR againsts IDS in MembersDB   */    
            if (typeof iId != undefined){
                   var ids = this.membersDB().select("id");
                   iIdsLength = ids.length;
                   for (i = 0; i < iIdsLength; i++){
                       if(iId == i-1){
                           
                           // SELECTS SPECEFIC ROW BASED ON MEMBER ID
                           // Returns an array selected based on Member ID
                           var query = this.membersDB().select("id", "name", "lastname", "email", "phone", "password")[i-1];
                           
                           // FETCH DB FIELD VALUES INTO GLOBAL VARIABLES
                           this.id = query[0]; // this is position of ID column (interger)
                           this.name = query[1]; //this is position of NAME column (string)
                           this.lastname = query[2]; //this is position of  LASTNAME column(string)
                           this.email = query[3]; // this is position of EMAIL column (string)
                           this.phone = query[4]; // this is position of PHONE column (string)
                           this.password = query[5]; //this is posiiton of PASSWORD column (string)
                           
                           console.log("User with id " + [i-1] + " has name:" + this.membersDB().select("name")[i-1] );
                       }
                   }
                    
                   
                    
//                    db().each(function (record,recordnumber) {
//                            alert(record["balance"]);
//                    }); // alerts the value of the balance column for each record
            }

                
          
//            $match = this.membersDB().filter("id").count();
//            
//            console.log($match);
//            console.log("-------------------------------------------------");
//            
//            var query = this.membersDB().select("id");
//            console.log(query);
//            
//            
//            if (iId > 0){
//                 
//                if( this.membersDB.id == iId){
//                    
//                    
//                }
                
                
               
               
//               this.id = this.membersDB.id;
//               this.name = this.membersDB.name;
//               this.lastname = this.membersDB.lastname;
//               this.phone = this.membersDB.phone;
//               this.password = this.membersDB.password;
                
            }
           
           
           
//           console.log(Array(this.id, this.name , this.lastname ,  this.phone , this.password));
//           
//           
//           console.log("------------------------------------------------------");
//           console.dir(this.membersDB.settings());
           
               
//        };
        
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
        
        DBmembers.prototype.GetMembersTable = function () {
            return this.membersDB().get();
        };
        
        
    
    this.DatabaseContructor(iId);
}
