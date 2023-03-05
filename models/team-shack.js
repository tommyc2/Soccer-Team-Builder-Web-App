"use strict";

import { createRequire } from "module";
const require = createRequire(import.meta.url);
const teamCollection = require("./team-shack.json");

const teams = {
  // import the team collection object
  teamsCollection: teamCollection.teamsCollection,

  // the function to get all of the soccer teams
  getAllTeams() {
    return this.teamsCollection;
  },

  getTeam(id) {
    return _.find(this.teamsCollection, { id: id });
  },
  
  removePlayer(id, playerId) {
    const team = this.getTeam(id);
    _.remove(team.songs, { id: playerId });
  },
  
  removePlaylist(id) {
    _.remove(this.playlistCollection, { id: id });
  },

};

// export the playlistStore object so it can be used elsewhere
export default playlistStore;