const mongoose = require('mongoose');

const url = "mongodb://localhost:27017/gameplay";
const params = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: false
}

mongoose.connect(url, params);

mongoose.Promise = global.Promise;

module.exports = mongoose;

