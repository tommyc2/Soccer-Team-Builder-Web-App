"use strict";

import { createRequire } from "module";
const require = createRequire(import.meta.url);
const teamCollection = require("./team-shack.json");
import _ from 'lodash';


const teams = {
  teamCollection: teamCollection.teamsCollection,

 
  getAllTeams() {
    return this.teamCollection;
  },

  getTeam(id) {
    return _.find(this.teamCollection, { id: id });
  },
  
  removePlayer(id, playerId) {
    const team = this.getTeam(id);
    _.remove(team.players, { id: playerId });
  },
  
  removeTeam(id) {
    _.remove(this.teamCollection, { id: id });
  },

};

export default teams;