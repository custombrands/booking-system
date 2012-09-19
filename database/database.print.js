/***************************************************/
/***************************************************/
/*Print out tables in database  into JS console*/
/***************************************************/
/***************************************************/


// Print Members table
console.log("      /*************  MEMBERS TABLE  *****************/");
console.log(" ________________________________________________________________");
console.log("| id |   name  |   lastname  |    email    |   phone  | password |");
console.log(" ‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾");
var iLengthMemberIDs = this.DB().select("id")[0].length;
for (i = 0;i < iLengthMemberIDs; i++){
    console.log("| "+this.DB().select("id")[0][i]+
                       " | "+this.DB().select("name")[0][i]+
                       " | "+this.DB().select("lastname")[0][i]+
                       " | "+this.DB().select("email")[0][i]+
                       " | "+this.DB().select("phone")[0][i]+
                       " | "+this.DB().select("password")[0][i]+" |");
}

//Print Cars Table
console.log("");
console.log("");
console.log("      /*************  CARS TABLE  *****************/");
console.log(" ________________________________________________________________");
console.log("| id | m_id| reg_number |    brand   |    model    |     color  -->  | seats |");
console.log(" ‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾");
var iLengthCarIDs = this.DB().select("id")[1].length;
for (i = 0;i < iLengthCarIDs; i++){
    console.log(" | "+this.DB().select("id")[1][i]+
                       "  | "+this.DB().select("member_id")[1][i]+
                       "  |   "+this.DB().select("reg_number")[1][i]+
                       "  |   "+this.DB().select("brand")[1][i]+
                       "   |  "+ this.DB().select("model")[1][i],
                       "    |     "+this.DB().select("color")[1][i]+
                       "    -->     | "+this.DB().select("seats")[1][i]+" |");
}

//Print Pickup Locations Table
console.log("");
console.log("");
console.log("      /*************  PICKUP PLACES TABLE *****************/");
console.log(" ____________________________________________________________________________");
console.log("| id |       name        |       street    |    latitude    |     longtitude  |");
console.log(" ‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾");
var iLengthPickipIDs = this.DB().select("id")[2].length;
for (i = 0;i < iLengthPickipIDs; i++){
    console.log(" | "+this.DB().select("id")[2][i]+
                       "  | "+this.DB().select("name")[2][i]+
                       "  |   "+this.DB().select("street")[2][i]+
                       "  |   "+this.DB().select("latitude")[2][i]+
                       "   |  "+ this.DB().select("longtitude")[2][i]+ " |");
}


//Print Status Table
console.log("");
console.log("");
console.log("      /*************  STATUS TABLE *****************/");
console.log(" ______________________");
console.log("| id |       name      |");
console.log(" ‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾");
var iLengthStatusIDs = this.DB().select("id")[3].length;
for (i = 0;i < iLengthStatusIDs; i++){
    console.log(" | "+this.DB().select("id")[3][i]+
                       "  | "+this.DB().select("name")[3][i]+ " |");
}