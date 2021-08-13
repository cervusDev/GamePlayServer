const service = require("../services/games.service");
const Games = require("../models/game");

const GameService = new service();

class GameController {
    async getGames(req,res) {
        const game = await GameService.findAll();
        res.send( game )
    }

    async getGamesById(req, res) {

      const id = req.params.id;

      try {
          const game = await GameService.findById(id);
          
          if (game == null) {
            return res.status(404).send({ error: "Game not found" });
          };
      
          return res.send( game );
        
        } catch (err) {
          return res.status(500).send({ error: err.error });
        };
    }

    async createGames(req, res) {
        const game = req.body;

        try {
      
          if (!game.name || !game.match || !game.host || !game.date || !game.image) {
            return res.status(400).send({ message: "Empty body requisition" })
          }
      
          const createdAt = await GameService.create(game)
      
          return res.send(createdAt);
      
        } catch  {
      
          return res.status(400).send({ error: "Registration failed" }) ;
        };
    }

    async updateGames(req, res) {
        const id = req.params.id;
        const game = await GameService.findById(id);
      
        try {
          if (!game) {
            return res.send({ error: 'Invalid id' });
          };
          
          const newGame = req.body;
          
          GameService.update(newGame, id);
          const gameUpdated = await GameService.findById(id);

          res.send( gameUpdated );
      
        } catch {
          return res.status(500).send({ error: 'Empty body requisition' })
        };
    }

    async deleteGames(req, res) {
      const id = req.params.id;

      try {
        const game = await Games.findById(id);
    
        if (!game) 
          return res.status(400).send({ error: "Game not found" });
        
        await GameService.delete(id)
    
        return res.send({ message: "Sucessfuly delete" });
    
      } catch (err) {
        return res.status(500).send({ error: err });
      };
    }
}

module.exports = GameController;