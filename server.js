
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
