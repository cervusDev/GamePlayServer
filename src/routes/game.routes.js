const express = require("express");

const router = express.Router();
const controller = require("../app/controller/game.controller");

const gameController = new controller();

router.get("/games", gameController.getGames);

router.post("/register", gameController.createGames)

router.put("/update/:id", gameController.updateGames);

router.get("/games/:id", gameController.getGamesById);

router.delete("/delete/:id", gameController.deleteGames);

module.exports = router;