function DBbookings (m_id){
    
        var id;
        var member_id;
        var sharing_id;
        var made_date;
        
        var bookings;
    
    
    DBbookings.prototype.DatabaseContructor = function (m_id){
            
            this.bookings = [];
            var iBookingsLength = this.bookings.length;
            var MemberIds = DB[7].member_id;
            var MemberiIdsLength = MemberIds.length;
            if (typeof m_id == "number"){
                   for (i = 0; i < MemberiIdsLength; i++ ){
                       if(m_id == MemberIds[i]){
                           var bookings = {
                            id:                          DB[7].id[i],
                            member_id:             DB[7].member_id[i],
                            sharing_id:             DB[7].sharing_id[i],
                            made_date:            DB[7].made_date[i]
                           }
                           this.bookings.splice(iBookingsLength, 0, bookings);
//                           console.log("Loedin user has id: " + DB[7].id[i]);
                       } 
                   }
            } else if (localStorage.User_Bookings){
                var aUserBookings = JSON.parse(localStorage.User_Bookings);
                var iBookingslength = aUserBookings.length;
                for (var i in aUserBookings){
                    this.bookings.splice(iBookingslength, 0, aUserBookings[i]);
                }
            }
            
        
    }  
        
        /* Setters */
        DBbookings.prototype.SetMember_id = function(member_id){
            this.member_id = member_id;
        }
        DBbookings.prototype.SetSharing_id = function(sharing_id){
            this.sharing_id = sharing_id;
        }
        DBbookings.prototype.SetMade_date = function(made_date){
            this.sharing_datetime = made_date;
        }
 
        DBbookings.prototype.SetStatus = function(iStatus){
            this.made_date = iStatus;
        }
        
        /*     GETTERS     */
        
        DBbookings.prototype.GetMember_id = function(){
            return this.member_id;
        }
        DBbookings.prototype.GetSharing_id = function(){
            return this.sharing_id;
        }
        DBbookings.prototype.GetMade_date = function(){
            return this.sharing_datetime;
        }
 
        DBbookings.prototype.GetStatus = function(){
            return this.made_date;
        }
        DBbookings.prototype.GetBookings = function(){
            return this.bookings;
        }
        
        DBbookings.prototype,AddBooking = function (){
            
        }
        
        DBbookings.prototype.SaveBookingsOnLogin = function(){
            localStorage.setItem("User_Bookings", JSON.stringify(this.bookings));
        }
        
        this.DatabaseContructor(m_id);
}