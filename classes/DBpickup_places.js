/** 
 * @name Booking-System MembersTable Manipulation
 * @author Dimul Sergejenkov <lamukra@gmail.com>
 * @constructor Database builder with empty fields
 */
// DONE: Pickup Places class
function DBpickup_places(p_id){
        
        /* GLOBAL VARIABLES*/
        var id;
        var name;
        var street;
        var latitude;
        var longtitude;
                
        DBpickup_places.prototype.DatabaseContructor = function (p_id){
           var ids = DB[2].id;
           iIdsLength = ids.length;
           var query;
           if (typeof p_id == "number"){
                   for (i = 0; i < iIdsLength; i++){
                       if(p_id == i){
                           
                           // SELECTS SPECEFIC ROW BASED ON m_type_id
                           // Returns an array selected based on m_type_id
                           query = [ DB[2].id[i], DB[2].name[i], DB[2].street[i], DB[2].latitude[i], DB[2].longtitude[i]];  //select("id", "name")
//                           console.log(query);
                           // FETCH DB FIELD VALUES INTO GLOBAL VARIABLES
                           this.id = query[0]; // this is position of ID column (interger)
                           this.name = query[1]; //this is position of NAME column (string)
                           this.street = query[2]; //this is position of NAME column (string)
                           this.latitude = query[3]; //this is position of NAME column (string)
                           this.longtitude = query[4]; //this is position of NAME column (string)
                       }
                   }
            }
                    
        }        
        /*     SETTERS     */
        
        DBpickup_places.prototype.SetName = function(sName){
            this.name = sName;
        }
        DBpickup_places.prototype.SetStreet = function(sStreet){
            this.street = sStreet;
        }
        DBpickup_places.prototype.SetLatitude = function(iLatitude){
            this.latitude = iLatitude;
        }
        DBpickup_places.prototype.SetLongtitude = function(iLongtitude){
            this.longtitude = iLongtitude;
        }
        
        /*     GETTERS     */
        
        DBpickup_places.prototype.GetId = function (){
            return this.id;
        }        
        DBpickup_places.prototype.GetName = function () {
            return this.name;
        }
        DBpickup_places.prototype.GetStreet = function () {
            return this.street;
        }
        DBpickup_places.prototype.GetLatitude = function () {
            return this.latitude;
        }
        DBpickup_places.prototype.GetLongtitude = function () {
            return this.longtitude;
        }
        
        
        this.DatabaseContructor(p_id);
        
        
}