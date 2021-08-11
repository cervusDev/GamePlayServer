const express = require("express");
const Games = require('../models/game');

const router = express.Router();

router.put("/:id", async (req, res) => {
  const id = req.params.id;

  const {
    name, match, host,
    date, image
  } = req.body;

  try {
    const game = await Games.findOneAndUpdate(id)
    
    if (!game) {
      return res.status(404).send({ error: 'Game not found' });

    }
    
    if (name || match || host || date || image) {
      game.name = name;
      game.match = match;
      game.host = host;
      game.date = date;
      game.image = image;

    };

    await game.save();
    return res.send({ game });

  } catch {
    return res.status(500).send({ error: 'Empty body requisition' })
  };

});

module.exports = server => server.use('/update', router);

