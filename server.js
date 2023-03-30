
"use strict";


import express from "express";
import exphbs from "express-handlebars";
import logger from "./utils/logger.js";
import bodyParser from "body-parser";
import cookieParser from "cookie-parser";

const app = express();


app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: false, }));
app.use(cookieParser());


const handlebars = exphbs.create({ extname: ".hbs" });
app.engine(".hbs", handlebars.engine);
app.set("view engine", ".hbs");


import routes from "./routes.js";
app.use("/", routes);


const listener = app.listen(process.env.PORT || 4000, function () {
  logger.info("Your app is listening on port " + listener.address().port);
});
