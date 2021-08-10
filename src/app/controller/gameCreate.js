const express = require("express");
const Games = require("../models/game");

const router = express.Router();

router.post('/register', async (req,res) => {
  const { name } = req.body;

  try {

    if (await Games.findOne({ name })) {
      res.status(400).send({ error: "Game alredy exists" })
    }

    const game = await Games.create(req.body);

    return res.send({ game });

  } catch  {

    return res.status(400).send({ error: "Registration failed" }) ;
  };

});

module.exports = server => server.use('/games', router);