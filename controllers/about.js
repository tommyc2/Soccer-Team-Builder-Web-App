"use strict";
import logger from "../utils/logger.js";
import developersStoreObject from "../models/developer-store.js";
import accounts from './accounts.js';


const about = {
   index(request, response) {
    const loggedInUser = accounts.getCurrentUser(request);
    const date = new Date();
    logger.info('about rendering');
    if (loggedInUser) {
      const viewData = {
        title: 'About the Playlist App',
        developers: developersStoreObject.getAllDevelopers(),
        fullname: loggedInUser.firstName + ' ' + loggedInUser.lastName,
        picture: loggedInUser.picture,
        
        /* https://stackoverflow.com/questions/6002254/get-the-current-year-in-javascript */
        date: date.getFullYear()
      };
      response.render('about', viewData);
    }
    else response.redirect('/');    
  },

};

export default about;
