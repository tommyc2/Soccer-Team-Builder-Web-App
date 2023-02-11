"use strict";

import { createRequire } from "module";
const require = createRequire(import.meta.url);
const teamsCollection = require("./playlist-store.json");

const teamShack = {
  // import the playlist collection object
  teamsCollection: teamsCollection.teamsCollection,

  // function to get all of the playlists
  getAllTeams() {
    return this.teamsCollection;
  },
};

// export the playlistStore object so it can be used elsewhere
export default teamShack;
