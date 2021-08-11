const express = require("express");
const Games = require("../models/game");

const router = express.Router();

router.get('/', async (req,res) => {
  const filmes = await Games.find();
  res.send({ filmes });
})

module.exports = server => server.use('/games', router);
