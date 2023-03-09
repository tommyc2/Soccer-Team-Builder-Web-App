'use strict';

// import all required modules
import logger from '../utils/logger.js';
import teams from '../models/team-shack.js';
import { v4 as uuidv4 } from 'uuid';



const team = {
  index(request, response) {
    const teamId = request.params.id;
    logger.debug('Team id = ' + teamId);
    const viewData = {
      title: 'Team',
      team: teams.getTeam(teamId),
    };
    response.render('team', viewData);
    logger.debug(viewData.team);
  },
  deletePlayer(request, response) {
    const teamId = request.params.id;
    const playerId = request.params.playerid;
    logger.debug(`Deleting player ${playerId} from Playlist ${teamId}`);
    teams.removePlayer(teamId, playerId);
    response.redirect('/team/' + teamId);
  },
    addPlayer(request, response) {
    const teamId = request.params.id;
    const team = teams.getTeam(teamId);
    const newPlayer = {
      title: request.body.title,
      id: uuidv4()
    };
    teams.addPlayer(teamId, newPlayer);
    response.redirect('/team/' + teamId);
  },

};

export default team;