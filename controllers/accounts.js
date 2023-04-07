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
    logger.info('registering' + user.email);
    response.cookie('team', user.email);
    response.cookie('team', user.picture);
    userStore.addUser(user, function() {
      response.redirect('/start');
    });
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
    const picture = request.cookies.team
    return userStore.getUserByEmail(userEmail);
    return userStore.getUserByEmail(picture);
  }
  
}

export default accounts;
