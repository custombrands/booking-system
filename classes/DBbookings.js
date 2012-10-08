function DBbookings (m_id){
    
        var id;
        var book_member_id;
        var sharing_id;
        var made_date;
        
        var bookings;
    
    
    DBbookings.prototype.DatabaseContructor = function (m_id){
            
            this.bookings = [];
            var iBookingsLength = this.bookings.length;
            var MemberIds = DB[7].book_member_id;
            var MemberiIdsLength = MemberIds.length;
            if (typeof m_id == "number"){
                   for (i = 0; i < MemberiIdsLength; i++ ){
                       if(m_id == MemberIds[i]){
//                            var MainDBindex = MemberIds.indexOf(m_id);
                            var oUser = new DBmembers(DB[7].book_member_id[i]);
                            var oSharing = new DBsharings("", DB[7].sharing_id[i]);
                            var booking = {
                                id:                          DB[7].id[i],
                                book_member_id:   oUser.GetName(),
                                sharing_member_id: oSharing.GetMember().GetName(),
                                sharing_member_car: oSharing.GetCar().GetBrand(),
                                car_number_plate: oSharing.GetCar().GetReg_Number(),
                                sharing_id:             oSharing.GetId(),
                                made_date:            DB[7].made_date[i],
                                booking_date:        oSharing.GetDateTime()
                            }
                            this.bookings.splice(iBookingsLength, 0, booking);
////                           console.log("Loedin user has id: " + DB[7].id[i]);
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
        
        DBbookings.prototype.AddBooking = function (user_id, sh_id){
            var MainDBids = DB[7].id;
            var iMainDBidsLength = MainDBids.length;
            var oSharings  = new DBsharings("", sh_id);
            var oUser = new DBmembers(user_id)
            var id = iMainDBidsLength;
            var book_member_id = oUser.GetId();
            var sharing_member_id = oSharings.GetMember().GetId();
            var sharing_member_car = oSharings.GetCar().GetBrand();
            var car_number_plate = oSharings.GetCar().GetReg_Number();
            var sharing_id = oSharings.GetId();

                        
            var CurrentDate = new Date();
            var Day = CurrentDate.getDate();
            var Month = CurrentDate.getMonth()+1;
            var FullYear = CurrentDate.getFullYear();
            if(Day<10){
                Day='0'+Day;
            }
            var today = Day+'/'+Month+'/'+FullYear;
            var made_date = today;
            var booking_date = oSharings.GetDateTime();

            
            var Booking = {
                id:                 id,
                book_member_id:     book_member_id,
                sharing_member_id:  sharing_member_id,
                sharing_member_car: sharing_member_car,
                car_number_plate:   car_number_plate,
                sharing_id:         sharing_id,
                made_date:          made_date,
                booking_date:       booking_date
            }
            
            var aUserBookings = JSON.parse(localStorage.User_Bookings);
            aUserBookings.push(Booking);
            
            DB[7].id.splice(iMainDBidsLength, 0, iMainDBidsLength);
            DB[7].book_member_id.splice(iMainDBidsLength, 0, book_member_id);
            DB[7].sharing_id.splice(iMainDBidsLength, 0, sharing_id);
            DB[7].made_date.splice(iMainDBidsLength, 0, made_date);
            
            this.DatabaseContructor(user_id)
            localStorage.setItem("User_Bookings", JSON.stringify(this.bookings));
            localStorage.setItem("taffy_DB", JSON.stringify(DB));
            console.log(aUserBookings);
            console.log(DB[7]);
            console.log(JSON.parse(localStorage.taffy_DB)[7]);
        }
        
        
        DBbookings.prototype.GetAllBookings = function () {
            
        }
        
        DBbookings.prototype.SaveBookingsOnLogin = function(){
            localStorage.setItem("User_Bookings", JSON.stringify(this.bookings));
        }
        
        this.DatabaseContructor(m_id);
}