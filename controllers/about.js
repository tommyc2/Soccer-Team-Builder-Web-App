"use strict";
import logger from "../utils/logger.js";
import developersStoreObject from "../models/developer-store.js";
import accounts from './accounts.js';
import teams from "../models/team-shack.js";
import { v4 as uuidv4 } from "uuid";


const about = {
   index(request, response) {
    const loggedInUser = accounts.getCurrentUser(request);
     
       /* https://stackoverflow.com/questions/6002254/get-the-current-year-in-javascript */
    logger.info('about rendering');
    if (loggedInUser) {
      const viewData = {
        title: 'About the Playlist App',
        developers: developersStoreObject.getAllDevelopers(),
        fullname: loggedInUser.firstName + ' ' + loggedInUser.lastName,
        picture: loggedInUser.picture,
      };
      response.render('about', viewData);
    }
    else response.redirect('/');    
  },

};

export default about;
