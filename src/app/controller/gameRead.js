const express = require("express");
const Games = require("../models/game");

const router = express.Router();

router.get('/:id', async (req, res) => {
  try {
    const game = await Games.findById(req.params.id);
    
    if (game == null) {
      return res.send(404).send({ error: "Game not found" });
    };

    return res.send({ game });
 
  } catch (err) {
    return res.status(500).send({ error: err.error });
  };

});

router.get('/', async (req,res) => {
  const filmes = await Games.find();
  res.send({ filmes });
})

module.exports = server => server.use("/games", router);