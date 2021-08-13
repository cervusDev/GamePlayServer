const Games = require("../models/game");

class GameService {
    async findAll() {
        return await Games.find();
    }

    async findById(id) {
        return await Games.findById(id);
    }

    async create(game) {
        return await new Games(game).save();
    }

    async update(game, id) {
        return await Games.findOneAndUpdate({ _id: id }, game);
    }

    async delete(id) {
        return await Games.findByIdAndDelete(id);
    }
};

module.exports = GameService;