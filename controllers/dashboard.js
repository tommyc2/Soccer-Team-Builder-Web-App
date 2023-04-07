"use strict";

import logger from "../utils/logger.js";
import teams from "../models/team-shack.js";
import { v4 as uuidv4 } from "uuid";
import accounts from './accounts.js';


const dashboard = {
     index(request, response) {
    logger.info('dashboard rendering');
    const loggedInUser = accounts.getCurrentUser(request);
    if (loggedInUser) {
    const viewData = {
      title: 'Soccer Teams Dashboard',
      teams: teams.getUserTeams(loggedInUser.id),
      fullname: loggedInUser.firstName + ' ' + loggedInUser.lastName,
    };
    logger.info('about to render' + viewData.teams);
    response.render('dashboard', viewData);
    }
    else response.redirect('/');
  },

  deleteTeam(request, response) {
    const teamId = request.params.id;
    logger.debug(`Deleting Team ${teamId}`);
    teams.removeTeam(teamId);
    response.redirect("/dashboard");
  },
  addTeam(request, response) {
    const loggedInUser = accounts.getCurrentUser(request);
    const newTeam = {
      id: uuidv4(),
      teamName: request.body.teamName,
      players: [],
      picture: request.files.picture
    };
    logger.debug("Creating a new team: " + newTeam);
    teams.addTeam(newTeam, function() {
      response.redirect("/dashboard");
    });
  },

};

export default dashboard;
