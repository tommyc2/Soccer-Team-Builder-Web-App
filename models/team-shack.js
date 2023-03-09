'use strict';

import logger from '../utils/logger.js';
import JsonStore from './json-store.js';

const teams = {

  store: new JsonStore('./models/team-shack.json', { teamsCollection: [] }),
  collection: 'playlistCollection',

  getAllPlaylists() {
    return this.store.findAll(this.collection);
  },

  getPlaylist(id) {
    return this.store.findOneBy(this.collection, (collection => collection.id === id));
  },

  removeSong(id, songId) {
    const arrayName = "songs";
    this.store.removeItem(this.collection, id, arrayName, songId);
  },

  removePlaylist(id) {
    const playlist = this.getPlaylist(id);
    this.store.removeCollection(this.collection, playlist);
  },

  removeAllPlaylists() {
    this.store.removeAll(this.collection);
  },

  addPlaylist(playlist) {
    this.store.addCollection(this.collection, playlist);
  },

  addSong(id, song) {
    const arrayName = "songs";
    this.store.addItem(this.collection, id, arrayName, song);
  },

};

export default playlistStore;
