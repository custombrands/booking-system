/* CREATE DATABASE WITH NAME "DB" */
var DB = new TAFFY();


/***************************************************/
/*  
 *  TABLES ARRAY INDEXES IN DATABASE "DB"
 *  |           NAME           |    ARRAY INDEX  |
 *      MembersTable               [0]
 *      CarsTable                       [1]
 *      PickupPlaceTable          [2]
 *      RequestTable                [3]
 *      RequestStatusTable     [4]
 *      SharingsTable               [5]
 *      SharingStatusTable      [6]
 *      BookingsTable               [7]   
 *      ConfirmationsTable       [8]
*/

/* SET TEMPLATE FOR EACH TABLE */

        //var settings = this.DB.settings({"template": {
        //        
        //        MembersTable_Template:{"id":[], "name":[], "lastname":[], "email":[], "phone":[], "password":[]},
        //        
        //        CarsTable_Template:{"id":[], "member_id":[], "reg_number":[], "brand":[], "model":[], "color":[], "seats":[]},
        //        
        //        PickupPlaceTable_Template:{"id":[], "name":[], "street":[], "latitude":[], "longtitude":[]},
        //                                                                        
        //        RequestsTable_Template:{"id":[], "member_id":[], "pickup_id":[], "reqStatus_id":[], "destination":[], "request_date":[], "request_for_date":[], "req_seats":[] },
        //        
        //        RequestStatusTable_Template:{"id":[], "name":[]},
        //        
        //        SharingsTable_Template:{ "id":[], "member_id":[],"car_id":[], "SHstatus_id":[], "pickup_id":[], "via":[], "destination":[], "sharing_datetime":[], "seats":[] },
        //        
        //        SharingStatusTable_Template:{"id":[], "name":[]},
        //
        //        
        //        BookingsTable_Template:{"member_id":[], "sharing_id":[], "made_date":[]},
        //        
        //        ConfirmationsTable_Template:{"member_id":[], "request_id":[], "made_date":[]}
        //
        //
        //        }});
    
/*  POPULATE A DATABASE WITH DATA   */

//Insert  into database
var InsertTables = function (){
    
            var MembersTable_Insert =
            this.DB.insert(
        {
           "id":[0 , 1 , 2 , 3 , 4, 5],
           "name":["Dimul" , "Eleno" , "Santi" , "Alina" , "Kelly" , "David"],
           "lastname":["Sergen" , "Hadist" , "Donoso" , " Jensen" , "Brown" , "Osborn"],
           "email":["a@gmail.com" , "b@gmdb.com" , "s@sand.com" , "d@orlm.com" , "f@semp.com" , "r@tomb.com"],
           "phone":["+4553257007" , "+4560047898" , "+4512345554" , "+4522336677" , "+4545678988" , "+4522314769"],
           "password":["0000" , "1111" , "3333" , "4444" , "5555" , "8888"]
        });
        var CarsTable_Insert = 
            this.DB.insert(
        {
            "id":[1,2,3],
            "member_id":[this.DB().get()[0].id[2],
                                  this.DB().get()[0].id[1],
                                  this.DB().get()[0].id[0]],
            "reg_number":["DW45879", "ER14568", "OP90083"],
            "brand":["Lexus" , "Toyota" , "Honda"],
            "model":["LX470" , "Avensis" , "Odyssey"],
            "color":["black" , "silver" , "red"],
            "seats":[3,2,4]

        });
        var PickupPlaceTable_Insert = 
            this.DB.insert({
            "id":[1,2,3],
            "name":["Værløse Station" , "Maløv Station", "Naerum Station"],
            "street":["Kollekollevej", "Søndergårds Allé", "Langebjerg"],
            "latitude":["55.781536" , "55.74726027560506" , "55.813644142170304"],
            "longtitude":["12.373728" , "12.317706942558289" , "12.527579069137573"]

        });
        var RequestsTable_Insert =
            this.DB.insert({
                "id":[], 
                "member_id":[], 
                "pickup_id":[], 
                "destination":[], 
                "request_date":[], 
                "request_for_date":[], 
                "req_seats":[]
        });

        var RequestStatusTable_Insert = 
            this.DB.insert(
        {
            "id":[1 , 2],
            "name":["Confirmed" , "Not Confirmed"]    
        });

        var SharingTable_Insert = 
            this.DB.insert(
        {
                "id":[],
                "member_id":[],
                "car_id":[],
                "SHstatus_id":[],
                "pickup_id":[],
                "via":[],
                "destination":[],
                "sharing_datetime":[],
                "seats":[]
        });

        var SharingStatusTable_Insert = 
            this.DB.insert(
        {
                "id":[1 , 2],
                "name":["Fully Booked", "Free Seats"]
        });

        var BookingsTable_Insert = 
            this.DB.insert(
        {
                "member_id":[], 
                "sharing_id":[], 
                "made_date":[]
        });

        var ConfirmationsTable_Insert = 
            this.DB.insert(
        {
                "member_id":[],
                "request_id":[],
                "made_date":[]
        });
}


//var SelectID = this.DB().get()[0].name;
//console.dir(SelectID);
console.dir(localStorage);
console.dir(this.DB().get());





