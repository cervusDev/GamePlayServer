const express = require("express");
const Games = require("../models/game");

const router = express.Router();

router.get('/', async (req,res) => {
  const games = await Games.find();
  res.send({ games });
})

module.exports = server => server.use('/games', router);
