/** 
 * @name Booking-System MembersTable Manipulation
 * @author Dimul Sergejenkov <lamukra@gmail.com>
 * @constructor Database builder with empty fields
 */
// DONE sharingStatuses class
function DBsharingStatuses(status_id){
        
        /* GLOBAL VARIABLES*/
        var id;
        var name;
                
        DBsharingStatuses.prototype.DatabaseContructor = function (status_id){
           var ids = DB[5].id;
           iIdsLength = ids.length;       
           if (typeof status_id == "number"){
                   for (i = 0; i < iIdsLength; i++){
                       if(status_id == i){
                           
                           // SELECTS SPECEFIC ROW BASED ON m_type_id
                           // Returns an array selected based on m_type_id
                           var query = [ DB[5].id[i], DB[5].name[i]];  //select("id", "name")
//                           console.log("with this status: " + query[1]);
                           // FETCH DB FIELD VALUES INTO GLOBAL VARIABLES
                           this.id = query[0]; // this is position of ID column (interger)
                           this.name = query[1]; //this is position of NAME column (string)
                       }
                   }
            }                    
        }        
        /*     SETTERS     */
        
        DBsharingStatuses.prototype.SetName = function(sName){
            this.name = sName;
        }
        
        /*     GETTERS     */
        
        DBsharingStatuses.prototype.GetId = function (){
            return this.id;
        }        
        DBsharingStatuses.prototype.GetName = function () {
            return this.name;
        }
        
        this.DatabaseContructor(status_id);
        
        
}