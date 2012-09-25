/** 
 * @name Booking-System MembersTable Manipulation
 * @author Dimul Sergejenkov <lamukra@gmail.com>
 * @constructor Database builder with empty fields
 */
// DONE Sharings class, MAIN FUNCTIONALITY (Getters, Setters);
function DBsharings(m_id){
        
        /* GLOBAL VARIABLES*/
        var id;
        var member_id;
        var car_id;
        var SHstatus_id; // 0 or 1
        var pickup_id;
        var via;
        var destination;
        var sharing_datetime;
        var seats;
        
        var sharings;
                
        DBsharings.prototype.DatabaseContructor = function (m_id){
            
           this.sharings = [];
           var MemberIds = DB[6].member_id;
           var MemberiIdsLength = MemberIds.length;
           if (typeof m_id == "number"){
                   for (i = 0; i < MemberiIdsLength; i++ ){
                       if(m_id == MemberIds[i]){                            
                           var sharings = {
                            id:                          DB[6].id[i],
                            member_id:             DB[6].member_id[i],
                            car_id:                     DB[6].car_id[i],
                            SHstatus_id:            DB[6].SHstatus_id[i],
                            pickup_id:                DB[6].pickup_id[i],
                            via:                          DB[6].via[i],
                            destination:             DB[6].destination[i],
                            sharing_datetime:   DB[6].sharing_datetime[i],
                            seats:                      DB[6].seats[i]                               
                           }
                           this.sharings.splice(0, 0, sharings);
                           
//                           // SELECTS SPECEFIC ROW BASED ON m_type_id
//                           // Returns an array selected based on m_type_id
//                            var query = [ DB[6].id[i], DB[6].member_id[i], DB[6].car_id[i], DB[6].SHstatus_id[i], DB[6].pickup_id[i], DB[6].via[i], DB[6].destination[i], DB[6].sharing_datetime[i], DB[6].seats[i]];  //select("id", "name")
//                               console.log(query);
//                           // FETCH DB FIELD VALUES INTO GLOBAL VARIABLES
//                           this.id = query[0]; // this is position of ID column (interger)
//                           this.member_id = query[1]; //this is position of NAME column (string)
//                           this.car_id = new DBcars(query[2]); //this is position of NAME column (string)
//                           this.SHstatus_id = new DBsharingStatuses(query[3]); //this is position of NAME column (string)
//                           this.pickup_id = new DBpickup_places(query[4]); //this is position of NAME column (string)
//                           this.via = query[5]; //this is position of NAME column (string)
//                           this.destination = query[6]; //this is position of NAME column (string)
//                           this.sharing_datetime = query[7]; //this is position of NAME column (string)
//                           this.seats = query[8]; //this is position of NAME column (string)
//                           console.log(this.member_id);
                       } 
                   }
                          
            }
//           for (i in this.sharings){
//               var query = [ this.sharings[i].id , 
//                                     this.sharings[i].member_id , 
//                                     this.sharings[i].car_id , 
//                                     this.sharings[i].SHstatus_id , 
//                                     this.sharings[i].pickup_id , 
//                                     this.sharings[i].pickup_id,
//                                     this.sharings[i].via,
//                                     this.sharings[i].destination,
//                                     this.sharings[i].sharing_datetime,
//                                     this.sharings[i].seats];
//                           console.log(query);}
                       
            return true;
        }        
        
        /*     SETTERS     */
        
        DBsharings.prototype.SetVia = function(via){
            this.via = via;
        }
        DBsharings.prototype.SetDestination = function(sDestination){
            this.destination = sDestination;
        }
        DBsharings.prototype.SetDateTime = function(datetime){
            this.sharing_datetime = datetime;
        }
        DBsharings.prototype.SetSeats = function(iSeats){
            this.seats = iSeats;
        }
        
        /*     GETTERS     */
        
        
        DBsharings.prototype.GetId = function (){
            return this.id;
        }        
        DBsharings.prototype.GetMember = function () {
            return this.member_id;
        }
        DBsharings.prototype.GetCar = function () {
            return this.car_id;
        }
        DBsharings.prototype.GetSharingStatus = function () {
            return this.SHstatus_id;
        }
        DBsharings.prototype.GetPickuUpLocation = function () {
            return this.pickup_id;
        }
        DBsharings.prototype.GetVia = function () {
            return this.via;
        }
        DBsharings.prototype.GetDestination = function () {
            return this.destination;
        }
        DBsharings.prototype.GetDateTime = function () {
            return this.sharing_datetime;
        }
        DBsharings.prototype.GetFreeSeats = function () {
            return this.seats;
        }
        DBsharings.prototype.GetAllSharings = function () {
            return this.sharings;
        }
        

    /*  FUNCTIONS */
    
        DBsharings.prototype.AddSharing = function () {
            //Get values from SignUp Form
            var member_id = user.GetId();
            var car_id = car.GetId();
            var SHstatus_id = 1; // 0 or 1 - Default will be added FreeSeats
            var pickup_id = this.GetElement("TxtPickUpSelector").value;
            var sVia = this.GetElement("TxtVia").value;
            var sDestination = this.GetElement("TxtDestination").value;
            var sDate = this.GetElement("TxtDate").value;
            var iSeats = this.GetElement("TxtSeats").value;
//             id will be added automatically based on array length
            var iDBidslength = DB[6].id.length;
            
            var Sharing = {
                            id:                            iDBidslength,
                            member_id:             member_id,
                            car_id:                     car_id,
                            SHstatus_id:            SHstatus_id,
                            pickup_id:                pickup_id,
                            via:                          sVia,
                            destination:             sDestination,
                            sharing_datetime:   sDate,
                            seats:                      iSeats                               
                           }

                DB[6].id.splice(iDBidslength, 0, iDBidslength ); //don't change it
                DB[6].member_id.splice(iDBidslength, 0, member_id);
                DB[6].car_id.splice(iDBidslength, 0, car_id);
                DB[6].SHstatus_id.splice(iDBidslength, 0, SHstatus_id);
                DB[6].pickup_id.splice(iDBidslength, 0, pickup_id);
                DB[6].via.splice(iDBidslength, 0, sVia);
                DB[6].destination.splice(iDBidslength, 0, sDestination);
                DB[6].sharing_datetime.splice(iDBidslength, 0, sDate);
                DB[6].seats.splice(iDBidslength, 0, iSeats);
                
                var aUserSharings = JSON.parse(localStorage.User_Sharings);
               aUserSharings.push(Sharing);
               localStorage.setItem("User_Sharings", JSON.stringify(aUserSharings));
               localStorage.setItem("taffy_DB", JSON.stringify(DB));
    
//            // Add Member to localStorage.taffy_DB to MainDB as main DB will not be renewed on next reload it will Parsed from localStorage.taffy_DB
//            // Main DB is build only once if it does not exist in localStorage
//            
                
            
//            console.log("Sharing is Saved Is Saved");
            console.log(DB[6].destination);
            console.log(DB[6].sharing_datetime);
//            return true;
        }
        DBsharings.prototype.SaveSharingsOnLogin = function(){
            localStorage.setItem("User_Sharings", JSON.stringify(this.sharings));
        }
        
        
        /* REPEATED ACTINOS*/
        
        DBsharings.prototype.GetElement = function (sId){
               var get = document.getElementById(sId);
               return get
        }




        this.DatabaseContructor(m_id);

}
    