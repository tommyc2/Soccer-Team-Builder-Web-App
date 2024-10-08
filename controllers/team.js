"use strict";

import logger from "../utils/logger.js";
import teams from "../models/team-shack.js";
import { v4 as uuidv4 } from "uuid";
import accounts from './accounts.js';


const team = {
  index(request, response) {
    const teamId = request.params.id;
    logger.debug("Team id = " + teamId);
    const viewData = {
      title: "Team",
      team: teams.getTeam(teamId),
    };
    response.render("team", viewData);
    logger.debug(viewData.team);
  },
  deletePlayer(request, response) {
    const teamId = request.params.id;
    const playerId = request.params.playerId;
    logger.debug(`Deleting player ${playerId} from Team ${teamId}`);
    teams.removePlayer(teamId, playerId);
    response.redirect("/team/" + teamId);
  },
  addPlayer(request, response) {
    const teamId = request.params.id;
    const team = teams.getTeam(teamId);
    const newPlayer = {
      id: uuidv4(),
      playerName: request.body.playerName,
      position: request.body.position,
      age: request.body.age,
      marketValue: request.body.marketValue,
    };
    teams.addPlayer(teamId, newPlayer);
    response.redirect("/team/" + teamId);
  },
    updatePlayer(request, response) {
    const teamId = request.params.id;
    const playerId = request.params.playerId;
    logger.debug("updating player " + playerId);
    const updatedPlayer = {
      id: playerId,
      playerName: request.body.playerName,
      position: request.body.position,
      age: request.body.age,
      marketValue: request.body.marketValue,
    };
    teams.editPlayer(teamId, playerId, updatedPlayer);
    response.redirect('/team/' + teamId);
  }

};

export default team;
