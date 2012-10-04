/** 
 * @name Booking-System MembersTable Manipulation
 * @author Dimul Sergejenkov <lamukra@gmail.com>
 * @constructor Database builder for Logedin User SHarings
 */
// DONE Sharings class, MAIN FUNCTIONALITY (Getters, Setters);
function DBsharings(m_id, sh_id){
        
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
        var status;
        
        var sharings;
                
        DBsharings.prototype.DatabaseContructor = function (m_id, sh_id){
           
           var SharingIds = DB[6].id;
           var MainDBidIndex
           var iSharingsIdsLength = SharingIds.length;
           if(typeof sh_id == "number"){
               for(i=0; i<iSharingsIdsLength; i++){
                   if(sh_id == SharingIds[i]){
                       MainDBidIndex = SharingIds.indexOf(SharingIds[i])
                       this.id = SharingIds[MainDBidIndex];
                       this.member_id = new DBmembers(DB[6].member_id[MainDBidIndex]);
                       this.car_id = new DBcars(DB[6].member_id[MainDBidIndex]);
                       this.SHstatus_id = new DBsharingStatuses(DB[6].SHstatus_id[MainDBidIndex]);
                       this.pickup_id = new DBpickup_places(DB[6].pickup_id[MainDBidIndex]);
                       this.via = DB[6].via[MainDBidIndex];
                       this.destination = DB[6].destination[MainDBidIndex];
                       this.sharing_datetime = DB[6].sharing_datetime[MainDBidIndex];
                       this.seats = DB[6].seats[MainDBidIndex];
                       this.status = DB[6].status[MainDBidIndex];
                   }
               }
           } else if(localStorage.User){
                 for(i=0; i<iSharingsIdsLength; i++){
                   if(sh_id == SharingIds[i]){
                       MainDBidIndex = SharingIds.indexOf(SharingIds[i])
                       this.id = SharingIds[MainDBidIndex];
                       this.member_id = new DBmembers(DB[6].member_id[MainDBidIndex]);
                       this.car_id = new DBcars(DB[6].member_id[MainDBidIndex]);
                       this.SHstatus_id = new DBsharingStatuses(DB[6].SHstatus_id[MainDBidIndex]);
                       this.pickup_id = new DBpickup_places(DB[6].pickup_id[MainDBidIndex]);
                       this.via = DB[6].via[MainDBidIndex];
                       this.destination = DB[6].destination[MainDBidIndex];
                       this.sharing_datetime = DB[6].sharing_datetime[MainDBidIndex];
                       this.seats = DB[6].seats[MainDBidIndex];
                       this.status = DB[6].status[MainDBidIndex];
                   }
               }               
           }
           
           this.sharings = [];
           var iSharingsLength = this.sharings.length;
           
           if (typeof m_id == "number"){
               var MemberIds = DB[6].member_id;
               var MemberiIdsLength = MemberIds.length;
               var oUser = new DBmembers(m_id);
               var oCar = new DBcars(m_id);
                   for (i = 0; i < MemberiIdsLength; i++ ){
                       if(m_id == MemberIds[i]){
                           var oShstatus = new DBsharingStatuses(DB[6].SHstatus_id[i]);
                           var sShstatus = JSON.stringify(oShstatus);
                           var oPickupPlace = new DBpickup_places(DB[6].pickup_id[i]);
                           var sharings = {
                            id:                          DB[6].id[i],
                            member_id:             oUser.GetName(),
                            car_id:                     oCar.GetBrand(),
                            SHstatus_id:            oShstatus.GetName(),
                            pickup_id:                oPickupPlace.GetName(),
                            via:                          DB[6].via[i],
                            destination:             DB[6].destination[i],
                            sharing_datetime:   DB[6].sharing_datetime[i],
                            seats:                      DB[6].seats[i],
                            status:                     DB[6].status[i]    
                           }
                           this.sharings.splice(iSharingsLength, 0, sharings);
                       } 
                   }
            } else if (localStorage.User_Sharings){
                var aUserSharings = JSON.parse(localStorage.User_Sharings);
                for (var i in aUserSharings){
                    this.sharings.splice(iSharingsLength, 0, aUserSharings[i]);
                }
            }
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
        DBsharings.prototype.SetStatus = function(iStatus){
            this.status = iStatus;
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
        DBsharings.prototype.GetStatus = function () {
            return this.status;
        }
        DBsharings.prototype.GetAllSharings = function () {
            var SharingIds = DB[6].id;
            var iAllSharingsLenght = this.sharings.length;
            for(i in SharingIds){
                var iMaindDBIndex = DB[6].id.indexOf(SharingIds[i]);
                    var oUser = new DBmembers(DB[6].member_id[iMaindDBIndex]);
                    var oCar = new DBcars(DB[6].member_id[iMaindDBIndex]);
                    var oShstatus = new DBsharingStatuses(DB[6].SHstatus_id[iMaindDBIndex]);
                    var oPickupPlace = new DBpickup_places(DB[6].pickup_id[iMaindDBIndex]);
                   var sharings = {
                    id:                          DB[6].id[iMaindDBIndex],
                    member_id:             oUser.GetName(),
                    car_id:                     oCar.GetBrand(),
                    SHstatus_id:            oShstatus.GetName(),
                    pickup_id:                oPickupPlace.GetName(),
                    via:                          DB[6].via[iMaindDBIndex],
                    destination:             DB[6].destination[iMaindDBIndex],
                    sharing_datetime:   DB[6].sharing_datetime[iMaindDBIndex],
                    seats:                      DB[6].seats[iMaindDBIndex],
                    status:                     DB[6].status[iMaindDBIndex]    
                   }
                   this.sharings.splice(iAllSharingsLenght, 0, sharings);
            }
            return this.sharings;
        }
        

    /*  FUNCTIONS */
    
        DBsharings.prototype.AddSharing = function () {
            //Get values from SignUp Form
            var member_id = user.GetId();
            var car_id = car.GetId();
            var SHstatus_id = 1; // 0 or 1 - Default will be added FreeSeats
            var pickup_id = Number(this.GetElement("TxtPickUpSelector").value);
            var sVia = this.GetElement("TxtVia").value;
            var sDestination = this.GetElement("TxtDestination").value;
            var sDate = this.GetElement("TxtDate").value;
            var iSeats = Number(this.GetElement("TxtSeats").value);
            var iStatus = 1;
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
                            seats:                      iSeats,
                            status:                     iStatus
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
                DB[6].status.splice(iDBidslength, 0, iStatus);
                
                var aUserSharings = JSON.parse(localStorage.User_Sharings);
               aUserSharings.push(Sharing);
               localStorage.setItem("User_Sharings", JSON.stringify(aUserSharings));
               localStorage.setItem("taffy_DB", JSON.stringify(DB));
    
//            // Add Member to localStorage.taffy_DB to MainDB as main DB will not be renewed on next reload it will Parsed from localStorage.taffy_DB
//            // Main DB is build only once if it does not exist in localStorage
//            console.log("Sharing is Saved Is Saved");
            console.log(aUserSharings);
//            return true;
        }
        
        DBsharings.prototype.UpdateUserSharings = function (sharing_id , sVia , sDestination , sDate){
                var iSharingsLength = this.sharings.length
                for (i = 0; i < iSharingsLength; i++ ){
                    if(this.sharings[i].id == sharing_id){
                        
                        this.sharings[i].via = sVia;
                        this.sharings[i].destination = sDestination;
                        this.sharings[i].sharing_datetime = sDate;
                        
                        var MainDBSharingIndex = DB[6].id.indexOf(this.sharings[i].id);
                        DB[6].via[MainDBSharingIndex] = sVia;
                        DB[6].destination[MainDBSharingIndex] = sDestination;
                        DB[6].sharing_datetime[MainDBSharingIndex] = sDate;
                        
                        localStorage.setItem("User_Sharings", JSON.stringify(this.sharings));
                        localStorage.setItem("taffy_DB", JSON.stringify(DB));
                    }
                }
        }
        
        DBsharings.prototype.DeleteUserSharing = function(sharing_id) {
            var iSharingsLength = this.sharings.length
            for (i = 0; i < iSharingsLength; i++ ){
                    if(this.sharings[i].id == sharing_id){
                        var SharingIndex = this.sharings.indexOf(this.sharings[i]);
                        this.sharings[SharingIndex].status = 0;
                        
                        var sSharings = JSON.stringify(this.sharings);
                        localStorage.setItem("User_Sharings", sSharings);
                        
                        var MainDBSharingIndex = DB[6].id.indexOf(this.sharings[i].id);
                        DB[6].status[MainDBSharingIndex] = 0;
                        
                        var sMainDB = JSON.stringify(DB);
                        localStorage.setItem("taffy_DB", sMainDB);
                    }
                }
        }
        
        
        
        DBsharings.prototype.SaveSharingsOnLogin = function(){
            localStorage.setItem("User_Sharings", JSON.stringify(this.sharings));
        }
        
        /* REPEATED ACTINOS*/
        
        DBsharings.prototype.GetElement = function (sId){
               var get = document.getElementById(sId);
               return get
        }




        this.DatabaseContructor(m_id, sh_id);

}




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