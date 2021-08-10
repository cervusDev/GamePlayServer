const express = require("express");
const Games = require("../models/game");

const router = express.Router();

router.delete("/:id", async (req, res) => {
  const id = req.params.id;

  try {
    const game = await Games.findById(id);

    if (!game) 
      return res.status(400).send({ error: "Gamer not found" });
    
    await game.remove();

    return res.send({ message: "Sucessfuly delete" });

  } catch (err) {
    return res.status(500).send({ error: err });
  };

});

module.exports = server => server.use("/delete", router);