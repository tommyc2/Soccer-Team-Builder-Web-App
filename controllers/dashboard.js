"use strict";

import logger from "../utils/logger.js";
import teams from "../models/team-shack.js";
import { v4 as uuidv4 } from "uuid";

const dashboard = {
  index(request, response) {
    logger.info("dashboard rendering");

    const viewData = {
      title: "Soccer Teams",
      teams: teams.getAllTeams(),
    };

    logger.info("about to render", viewData.teams);
    response.render("dashboard", viewData);
  },

  deleteTeam(request, response) {
    const teamId = request.params.id;
    logger.debug(`Deleting Team ${teamId}`);
    teams.removeTeam(teamId);
    response.redirect("/dashboard");
  },
  addTeam(request, response) {
    const newTeam = {
      id: uuidv4(),
      teamName: request.body.teamName,
      players: [],
    };
    teams.addTeam(newTeam);
    response.redirect("/dashboard");
  },
};

export default dashboard;
