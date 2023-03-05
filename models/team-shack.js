"use strict";

import { createRequire } from "module";
const require = createRequire(import.meta.url);
const teamCollection = require("./team-shack.json");

const teams = {
  teamsCollection: teamCollection.teamsCollection,

 
  getAllTeams() {
    return this.teamsCollection;
  },

  getTeam(id) {
    return _.find(this.teamsCollection, { id: id });
  },
  
  removePlayer(id, playerId) {
    const team = this.getTeam(id);
    _.remove(team.players, { id: playerId });
  },
  
  removeTeam(id) {
    _.remove(this.teamsCollection, { id: id });
  },

};

export default teams;