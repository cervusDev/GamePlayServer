const mongoose = require('mongoose');

const url = "mongodb+srv://gucervus:NSYd1ThxT4WrdSTU@gameplay.xbukn.mongodb.net/test";
const params = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: false
}

mongoose.connect(url, params);

mongoose.Promise = global.Promise;

module.exports = mongoose;

