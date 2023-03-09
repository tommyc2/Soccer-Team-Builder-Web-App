"use strict";

import logger from "../utils/logger.js";
import JsonStore from "./json-store.js";

const teams = {
  store: new JsonStore("./models/team-shack.json", { teamsCollection: [] }),
  collection: "teamsCollection",

  getAllTeams() {
    return this.store.findAll(this.collection);
  },

  getTeam(id) {
    return this.store.findOneBy(
      this.collection,
      (collection) => collection.id === id
    );
  },

  removePlayer(id, playerId) {
    const arrayName = "players";
    this.store.removeItem(this.collection, id, arrayName, playerId);
  },

  removeTeam(id) {
    const team = this.getTeam(id);
    this.store.removeCollection(this.collection, team);
  },

  removeAllTeams() {
    this.store.removeAll(this.collection);
  },

  addTeam(team) {
    this.store.addCollection(this.collection, team);
  },

  addPlayer(id, player) {
    const arrayName = "players";
    this.store.addItem(this.collection, id, arrayName, player);
  },
};

export default teams;
