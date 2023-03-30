"use strict";

import logger from "../utils/logger.js";
import teams from '../models/team-shack.js';


const start = {
  index(request, response) {
    logger.info("start rendering");
    
    // app statistics calculations

  const teams = teams.getAllTeams();

  let numTeams = teams.length;

  let numPlayers = 0;
  
  for (let i of teams) {
    numPlayers += i.players.length;
}
    const viewData = {
    title: 'Welcome to the Team App!',
    totalTeams: numTeams,
    totalPlayers: numPlayers,
};


    response.render("start", viewData);
  },
};

export default start;
