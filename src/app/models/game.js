const mongoose = require("../database/data");
const increment = require("mongoose-auto-increment");

increment.initialize(mongoose);

const GamesSchema = new mongoose.Schema({
  _id: {
    type: mongoose.Schema.Types.ObjectId
  },
  name: {
    type: String,
    required: true,
    unique: true
  },
  match: {
    type: String,
    required: true
  },
  host: {
    type: String,
    required: true,
  },
  date: {
    type: String,
    required: true
  },
  image: {
    type: String,
    required: true
  }

});

GamesSchema.plugin(increment.plugin, {
  model: 'Games', field: '_id',
  startAt: 1,
  incrementBy: 1
});

const Games = mongoose.model('Games', GamesSchema, 'Games');

module.exports = Games;

