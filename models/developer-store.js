"use strict";

import { createRequire } from "module";
const require = createRequire(import.meta.url);
const developersStore = require("./developers-store.json");

const developersStore = {
  // import the developers collection object
  developers: developersStore.developers,

  // function to get all of the developers
  getAllDevelopers() {
    return this.developers;
  },
};

// export the developersStore object so it can be used elsewhere
export default developersStore;
