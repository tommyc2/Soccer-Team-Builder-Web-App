"use strict";

import logger from "../utils/logger.js";
import teams from '../models/team-shack.js';


const start = {
  index(request, response) {
    logger.info("start rendering");

  const teamsTotal = teams.getAllTeams();

  let numTeams = teamsTotal.length;

  let numPlayers = 0;
  
  let avgNumPlayersPerTeam = 0;
    
  for (let item of teamsTotal) {
    numPlayers += item.players.length;
}
    
    let averageNumPlayers = numPlayers / teamsTotal.length;
    
    const viewData = {
    title: 'Welcome to the Team App!',
    totalTeams: numTeams,
    totalPlayers: numPlayers,
    averageNumPlayersPerTeam: averageNumPlayers
};


    response.render("start", viewData);
  },
};

export default start;
