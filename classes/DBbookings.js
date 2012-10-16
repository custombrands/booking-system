function DBbookings (m_id, book_id){
    
        var id;
        var book_member_id;
        var sharing_id;
        var made_date;
        var status;
        
        var bookings;
    
    
    DBbookings.prototype.DatabaseContructor = function (m_id, book_id){
            
            
            var BookingIds = DB[7].id;
            var MainDBindex;
            var iBookingIdsLength = BookingIds.length;
            if(typeof book_id == "number"){
                for(i in BookingIds){
                    if (book_id == BookingIds[i]){
                        MainDBindex = BookingIds.indexOf(BookingIds[i])
                        this.id = BookingIds[MainDBindex];
                        this.book_member_id = new DBmembers(DB[7].book_member_id[MainDBindex]);
                        this.sharing_id = new DBsharings("", DB[7].sharing_id[MainDBindex]);
                        this.made_date = DB[7].made_date[MainDBindex];
                    }
                }
            } else if(localStorage.User){
                MainDBindex = BookingIds.indexOf(BookingIds[i])
                this.id = BookingIds[MainDBindex];
                this.book_member_id = new DBmembers(DB[7].book_member_id[MainDBindex]);
                this.sharing_id = new DBsharings("", DB[7].sharing_id[MainDBindex]);
                this.made_date = DB[7].made_date[MainDBindex];
            }
            
        this.bookings = [];
        var iBookingsLength = this.bookings.length;
        if (typeof m_id == "number"){
                var MemberIds = DB[7].book_member_id;
                var MemberiIdsLength = MemberIds.length;
                   for (i = 0; i < MemberiIdsLength; i++ ){
                       if(m_id == MemberIds[i]){
                            var booking = {
                                id:                 DB[7].id[i],
                                book_member_id:     DB[7].book_member_id[i],
                                sharing_id:         DB[7].sharing_id[i],
                                made_date:          DB[7].made_date[i]
                            }
                            this.bookings.splice(iBookingsLength, 0, booking);
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
        DBbookings.prototype.SetBookingMember_id = function(member_id){
            this.book_member_id = member_id;
        }
        DBbookings.prototype.SetSharing_id = function(sharing_id){
            this.sharing_id = sharing_id;
        }
        DBbookings.prototype.SetMade_date = function(made_date){
            this.sharing_datetime = made_date;
        }
 
        
        /*     GETTERS     */
        
        DBbookings.prototype.GetId = function(){
            return this.id;
        }
        DBbookings.prototype.GetBookMember = function(){
            return this.book_member_id;
        }
        DBbookings.prototype.GetSharing = function(){
            return this.sharing_id;
        }
        DBbookings.prototype.GetMade_Date = function(){
            return this.made_date;
        }
        DBbookings.prototype.GetStatus = function(){
            return this.status;
        }
        DBbookings.prototype.GetBookings = function () {
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
        }
        
        
        DBbookings.prototype.GetAllBookings = function () {
            var BookingsIds = DB[7].id;
            var AllBookings = [];
            var AllBookingsLength = AllBookings.length;
            for (var i in BookingsIds){
                    var booking = {
                        id:                 DB[7].id[i],
                        book_member_id:     DB[7].book_member_id[i],
                        sharing_id:         DB[7].sharing_id[i],
                        made_date:          DB[7].made_date[i]
                    }
                AllBookings.splice(AllBookingsLength, 0, booking);
            }
            return AllBookings;
        }
        
        DBbookings.prototype.SaveBookingsOnLogin = function(){
            localStorage.setItem("User_Bookings", JSON.stringify(this.bookings));
        }
        
        this.DatabaseContructor(m_id, book_id);
}