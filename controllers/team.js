'use strict';

// import all required modules
import logger from '../utils/logger.js';
import teams from '../models/team-shack.js';


const team = {
  index(request, response) {
    const teamId = request.params.id;
    logger.debug('Team id = ' + teamId);
    const viewData = {
      title: 'Team',
      team: teams.getAllTeams(teamId),
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
};

export default team;