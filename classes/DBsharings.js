/** 
 * @name Booking-System MembersTable Manipulation
 * @author Dimul Sergejenkov <lamukra@gmail.com>
 * @constructor Database builder with empty fields
 */
// DONE Sharings class, MAIN FUNCTIONALITY (Getters, Setters);
function DBsharings(sh_id){
        
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
                
        DBsharings.prototype.DatabaseContructor = function (sh_id){
           var ids = DB[6].id;
           iIdsLength = ids.length;    
           if (typeof sh_id == "number"){
                   for (i = 0; i < iIdsLength; i++){
                       if(sh_id == i){
                           console.log("HERE IS PREBUILD SHARING");
                           
                           // SELECTS SPECEFIC ROW BASED ON m_type_id
                           // Returns an array selected based on m_type_id
                           var query = [ DB[6].id[i], DB[6].member_id[i], DB[6].car_id[i], DB[6].SHstatus_id[i], DB[6].pickup_id[i], DB[6].via[i], DB[6].destination[i], DB[6].sharing_datetime[i], DB[6].seats[i]];  //select("id", "name")
                           console.dir(query);
                           // FETCH DB FIELD VALUES INTO GLOBAL VARIABLES
                           this.id = query[0]; // this is position of ID column (interger)
                           this.member_id = new DBmembers(query[1]); //this is position of NAME column (string)
                           this.car_id = new DBcars(query[2]); //this is position of NAME column (string)
                           this.SHstatus_id = new DBsharingStatuses(query[3]); //this is position of NAME column (string)
                           this.pickup_id = new DBpickup_places(query[4]); //this is position of NAME column (string)
                           this.via = query[5]; //this is position of NAME column (string)
                           this.destination = query[6]; //this is position of NAME column (string)
                           this.sharing_datetime = query[7]; //this is position of NAME column (string)
                           this.seats = query[8]; //this is position of NAME column (string)
                       }
                   }
            }
                    
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
        this.DatabaseContructor(sh_id);
}