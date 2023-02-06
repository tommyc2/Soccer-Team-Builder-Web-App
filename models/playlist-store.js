'use strict';

import { createRequire } from "module";
const require = createRequire(import.meta.url);
const playlistCollection = require("./playlist-store.json");

const playlistStore = {

  // import the playlist collection object
  playlistCollection: playlistCollection.playlistCollection,

  // function to get all of the playlists
  getAllPlaylists() {
    return this.playlistCollection;
  },

};

// export the playlistStore object so it can be used elsewhere
export default playlistStore;
