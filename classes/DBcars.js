/** 
 * @name Booking-System MembersTable Manipulation
 * @author Dimul Sergejenkov <lamukra@gmail.com>
 * @constructor Database builder with empty fields
 */
//DONE cars class
function DBcars(m_id){
        
        /* GLOBAL VARIABLES*/
        var id;
        var member_id;
        var reg_number;
        var brand;
        var model;
        var color;
        var seats;
                
        DBcars.prototype.DatabaseContructor = function (m_id){
           var CarIds = DB[1].id;
           var CarIdsLength = CarIds.length; 
           var MemberIds = DB[1].member_id;
           if (typeof m_id == "number"){
                   for (i = 0; i < CarIdsLength; i++){
                       if(m_id == MemberIds[i]){
                           
                           // SELECTS SPECEFIC ROW BASED ON m_type_id
                           // Returns an array selected based on m_type_id
                           var query = [ DB[1].id[i], DB[1].member_id[i], DB[1].reg_number[i], DB[1].brand[i], DB[1].model[i], DB[1].color[i], DB[1].seats[i]];  //select("id", "name")
//                           console.log(query);
                           // FETCH DB FIELD VALUES INTO GLOBAL VARIABLES
                           this.id = query[0]; // this is position of ID column (interger)
                           this.member_id = new DBmembers(query[1]); //this is position of NAME column (string)
                           this.reg_number = query[2]; //this is position of NAME column (string)
                           this.brand = query[3]; //this is position of NAME column (string)
                           this.model = query[4]; //this is position of NAME column (string)
                           this.color = query[5]; //this is position of NAME column (string)
                           this.seats = query[6]; //this is position of NAME column (string)
                       }
                   }
            } else if(localStorage.User_Car) {
                var aCar = JSON.parse(localStorage.User_Car);
                
                this.id = aCar[0];
                this.member_id = new DBmembers(aCar[1]);
                this.reg_number = aCar[2];
                this.brand = aCar[3];
                this.model = aCar[4];
                this.color = aCar[5];
                this.seats = aCar[6];
            }
                    
        }        
        /*     SETTERS     */
        
        DBcars.prototype.SetRegNumber = function(sNumber){
            this.reg_number = sNumber;
        }
        DBcars.prototype.SetBrand = function(sBrand){
            this.brand = sBrand;
        }
        DBcars.prototype.SetModel = function(sModel){
            this.model = sModel;
        }
        DBcars.prototype.SetColorl = function(sColor){
            this.color = sColor;
        }
        DBcars.prototype.SetSeats = function(iSeats){
            this.seats = iSeats;
        }
        
        /*     GETTERS     */
        
        DBcars.prototype.GetId = function (){
            return this.id;
        }        
        DBcars.prototype.GetOwner = function () {
            return this.member_id;
        }
        DBcars.prototype.GetReg_Number = function () {
            return this.reg_number;
        }
        DBcars.prototype.GetBrand = function () {
            return this.brand;
        }
        DBcars.prototype.GetModel = function () {
            return this.model;
        }
        DBcars.prototype.GetColor = function () {
            return this.color;
        }
        DBcars.prototype.GetSeats = function(){
            return this.seats;
        }
        
        DBcars.prototype.SaveCarOnLogin = function(){
            
            var aCar = [this.id , this.member_id.GetId() , this.reg_number , this.brand , this.model , this.color , this.seats];
            localStorage.setItem("User_Car", JSON.stringify(aCar));
        }
        
        
        this.DatabaseContructor(m_id);
        
}