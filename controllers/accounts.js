'use strict';

import logger from '../utils/logger.js';
import userStore from '../models/user-store.js';
import { v4 as uuidv4 } from 'uuid';


const accounts = {


  index(request, response) {
    const viewData = {
      title: 'Login or Signup',
    };
    response.render('index', viewData);
  },

  login(request, response) {
    const viewData = {
      title: 'Login to the Service',
    };
    response.render('login', viewData);
  },


  logout(request, response) {
    response.cookie('team', '');
    response.redirect('/');
  },


  signup(request, response) {
    const viewData = {
      title: 'Login to the Service',
    };
    response.render('signup', viewData);
  },

  register(request, response) {
    const user = request.body;
    user.id = uuidv4();
    userStore.addUser(user);
    logger.info('registering' + user.email);
    response.redirect('/');
  },


  authenticate(request, response) {
    const user = userStore.getUserByEmail(request.body.email);
    const userPassword = userStore.getUserByPassword(request.body.password);
    if (user && userPassword) {
      response.cookie('team', user.email);
      logger.info('logging in' + user.email);
      response.redirect('/start');
    } else {
      logger.info('login failed! Wrong password or email')
      response.redirect('/login');
    }
  },

  getCurrentUser (request) {
    const userEmail = request.cookies.team;
    return userStore.getUserByEmail(userEmail);
  }
  
}

export default accounts;
