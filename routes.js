"use strict";

import express from "express";
const router = express.Router();

import start from "./controllers/start.js";
import dashboard from "./controllers/dashboard.js";
import about from "./controllers/about.js";
import team from "./controllers/team.js";

router.get("/", start.index);
router.get("/dashboard", dashboard.index);
router.get("/about", about.index);
router.get("/team/:id", team.index);
router.get("/team/:id/deleteplayer/:playerId", team.deletePlayer);
router.get("/dashboard/deleteteam/:id", dashboard.deleteTeam);
router.post("/team/:id/addplayer", team.addPlayer);
router.post("/dashboard/addteam", dashboard.addTeam);
router.post('/team/:id/updateplayer/:playerId', team.updatePlayer);


export default router;
