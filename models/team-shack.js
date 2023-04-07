"use strict";

import logger from "../utils/logger.js";
import JsonStore from "./json-store.js";
import cloudinary from 'cloudinary';
import { createRequire } from "module";

const require = createRequire(import.meta.url);

try {
  const env = require("../.data/.env.json");
  cloudinary.config(env.cloudinary);
}
catch(e) {
  logger.info('You must provide a Cloudinary credentials file - see README.md');
  process.exit(1);
}

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

 async addTeam(newTeam, response) {
  function uploader(){
    return new Promise(function(resolve, reject) {  
      cloudinary.uploader.upload(newTeam.picture.tempFilePath,function(result,err){
        if(err){console.log(err);}
        resolve(result);
      });
    });
  }
  let result = await uploader();
  logger.info('cloudinary result', result);
  newTeam.picture = result.url;

  this.store.addCollection(this.collection, newTeam);
  response();
},


  addPlayer(id, player) {
    const arrayName = "players";
    this.store.addItem(this.collection, id, arrayName, player);
  },
    editPlayer(id, playerId, updatedPlayer) {
    const arrayName = "players";
    this.store.editItem(this.collection, id, playerId, arrayName, updatedPlayer);
  },

    getUserTeams(userid) {
    return this.store.findBy(this.collection, (team => team.userid === userid));
  },


};

export default teams;
