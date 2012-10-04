function DBbookings (m_id){
    
        var id;
        var book_member_id;
        var sharing_member_id
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
                            var oUser = new DBmembers(DB[7].member_id[i]);
                            var oSharing = new DBsharings("", DB[7].sharing_id[i]);
                           var bookings = {
                            id:                          DB[7].id[i],
                            book_member_id:   oUser.GetName(),
                            sharing_member_id: oSharing.GetMember().GetName(),
                            sharing_member_car: oSharing.GetCar().GetBrand(),
                            car_number_plate: oSharing.GetCar().GetReg_Number(),
                            sharing_id:             oSharing.GetId(),
                            made_date:            DB[7].made_date[i],
                            booking_date:        oSharing.GetDateTime()
                           }
                           this.bookings.splice(iBookingsLength, 0, bookings);
//                           console.log("Loedin user has id: " + DB[7].id[i]);
                       } 
                   }
                   console.log(this.bookings);
            } else if (localStorage.User_Bookings){
                var aUserBookings = JSON.parse(localStorage.User_Bookings);
                var iBookingslength = aUserBookings.length;
                for (var i in aUserBookings){
                    this.bookings.splice(iBookingslength, 0, aUserBookings[i]);
                }
            }
            
        
    }  
        
        /* Setters */
        DBbookings.prototype.SetBookingMember_id = function(member_id){
            this.book_member_id = member_id;
        }
        DBbookings.prototype.SetSharingMember_id = function(member_id){
            this.sharing_member_id = member_id;
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
        
        DBbookings.prototype.GetBookingMember_id = function(member_id){
            return this.book_member_id;
        }
        DBbookings.prototype.GetSharingMember_id = function(member_id){
            return this.sharing_member_id;
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
        
        DBbookings.prototype.GetAllBookings = function () {
            
        }
        
        DBbookings.prototype.SaveBookingsOnLogin = function(){
            localStorage.setItem("User_Bookings", JSON.stringify(this.bookings));
        }
        
        this.DatabaseContructor(m_id);
}