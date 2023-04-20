"use strict";
import logger from "../utils/logger.js";
import developersStoreObject from "../models/developer-store.js";
import accounts from './accounts.js';


const about = {
   index(request, response) {
    const loggedInUser = accounts.getCurrentUser(request);
    logger.info('about rendering');
    if (loggedInUser) {
      const viewData = {
        title: 'About the Playlist App',
        developers: developersStoreObject.getAllDevelopers(),
        fullname: loggedInUser.firstName + ' ' + loggedInUser.lastName,
        picture: loggedInUser.picture,
        date: new Date()
      };
      response.render('about', viewData);
    }
    else response.redirect('/');    
  },

};

export default about;
