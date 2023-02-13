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
};

// export the teams object so it can be used elsewhere
export default teams;
