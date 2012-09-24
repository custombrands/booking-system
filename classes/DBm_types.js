/** 
 * @name Booking-System MembersTable Manipulation
 * @author Dimul Sergejenkov <lamukra@gmail.com>
 * @constructor Database builder with empty fields
 */

function DBm_types(m_id){
        
        /* GLOBAL VARIABLES*/
        var id;
        var name;
                
        DBm_types.prototype.DatabaseContructor = function (m_id){
           var ids = DB[9].id;
           iIdsLength = ids.length;       
           if (typeof m_id == "number"){
                   for (i = 0; i < iIdsLength; i++){
                       if(m_id == i){
                           
                           // SELECTS SPECEFIC ROW BASED ON m_type_id
                           // Returns an array selected based on m_type_id
                           var query = [ DB[9].id[i], DB[9].name[i]];  //select("id", "name")
//                           console.log(query);
                           // FETCH DB FIELD VALUES INTO GLOBAL VARIABLES
                           this.id = query[0]; // this is position of ID column (interger)
                           this.name = query[1]; //this is position of NAME column (string)
                           return true
                       }
                   }
            }
            return false;
                    
        }        
        /*     SETTERS     */
        
        DBm_types.prototype.SetName = function(sName){
            this.name = sName;
        }
        
        /*     GETTERS     */
        
        DBm_types.prototype.GetId = function (){
            return this.id;
        }        
        DBm_types.prototype.GetName = function () {
            return this.name;
        }
        
        this.DatabaseContructor(m_id);
        
        
}