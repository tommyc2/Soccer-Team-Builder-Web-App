"use strict";

import { createRequire } from "module";
const require = createRequire(import.meta.url);
const developersStore = require("./developers-store.json");

const developersStoreObject = {
  developers: developersStore.developers,

  getAllDevelopers() {
    return this.developers;
  },
};

export default developersStoreObject;
