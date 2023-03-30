"use strict";

import logger from "../utils/logger.js";
import teams from '../models/team-shack.js';
import accounts from './accounts.js';



const start = {
  index(request, response) {
    
  const loggedInUser = accounts.getCurrentUser(request);
  logger.info('start rendering');
    
  if (loggedInUser){

  const teamsTotal = teams.getAllTeams();

  let numTeams = teamsTotal.length;

  let numPlayers = 0;
  
  let avgNumPlayersPerTeam = 0;
    
  for (let item of teamsTotal) {
    numPlayers += item.players.length;
  }
    
    const viewData = {
    title: 'Welcome to the Team App!',
    totalTeams: numTeams,
    totalPlayers: numPlayers,
    averageNumPlayersPerTeam: avgNumPlayersPerTeam,
};
  

    response.render("start", viewData);
  }
    else response.redirect('/');
  },
  
};

export default start;
