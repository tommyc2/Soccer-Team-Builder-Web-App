"use strict";

import express from "express";
const router = express.Router();

import start from "./controllers/start.js";
import dashboard from "./controllers/dashboard.js";
import about from "./controllers/about.js";
import team from "./controllers/team.js";
import accounts from "./controllers/accounts.js";

router.get("/start", start.index);
router.get("/dashboard", dashboard.index);
router.get("/about", about.index);
router.get("/team/:id", team.index);
router.get("/team/:id/deleteplayer/:playerId", team.deletePlayer);
router.get("/dashboard/deleteteam/:id", dashboard.deleteTeam);
router.post("/team/:id/addplayer", team.addPlayer);
router.post("/dashboard/addteam", dashboard.addTeam);
router.post('/team/:id/updateplayer/:playerId', team.updatePlayer);
router.get('/', accounts.index);
router.get('/login', accounts.login);
router.get('/signup', accounts.signup);
router.get('/logout', accounts.logout);
router.post('/register', accounts.register);
router.post('/authenticate', accounts.authenticate);



export default router;
