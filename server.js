
"use strict";

import express from "express";
import exphbs from "express-handlebars";
import logger from "./utils/logger.js";
import bodyParser from "body-parser";
import cookieParser from "cookie-parser";
import fileUpload from "express-fileupload";


const app = express();


app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: false, }));
app.use(cookieParser());
app.use(fileUpload({useTempFiles: true}));

// use handlebars as view engine
const handlebars = exphbs.create({ extname: ".hbs" ,
                                  
       helpers: {
         
      uppercase: (inputString) => {
        return inputString.toUpperCase();
      },
         
      calcTotal: (playersArray) => {
        let totalMarketValueNum = 0;
        playersArray.forEach(player => totalMarketValueNum += parseFloat(player.marketValue)); 
        return totalMarketValueNum;
       },
         
// Formatter helper function to reduce mess of date format
      formatDate: (date) =>  {
        let dateCreated = new Date(date);
        let options = {weekday: "long", year: "numeric", month: "long", day: "2-digit"};       
        return `${dateCreated.toLocaleDateString("en-IE",options)}`;
      },
      
      timeServedSoFar: (date) => {
       let currentYear = new Date(date).getFullYear();
      return currentYear-date + " years ";
       },
         
      capitalStartingLetters: (fullName) => {
      let nameArray = fullName.split(" ");
      
      // Separating first + last name into two different indexes in array
      let firstName = nameArray[0];
      let surname = nameArray[1];
      
      // Converting Starting Letters in each array index to a capital letter

     //  Reference Material:  https://www.tutorialspoint.com/javascript/string_charat.htm#:~:text=charAt()%20is%20a%20method,length%20–%201.
    // References Material: https://flexiple.com/javascript/javascript-capitalize-first-letter/#
        
      let firstNameFirstLetter = firstName.charAt[0];
      let surnameFirstLetter = surname.charAt[0];
      }
    }

});
app.engine(".hbs", handlebars.engine);
app.set("view engine", ".hbs");



import routes from "./routes.js";
app.use("/", routes);


const listener = app.listen(process.env.PORT || 4000, function () {
  logger.info("Your app is listening on port " + listener.address().port);
});
