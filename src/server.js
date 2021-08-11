const express = require("express");

const server = express();
const port = 5000;

server.use(express.json());

require("./app/controller/gameCreate")(server);
require("./app/controller/gameRead")(server);
require("./app/controller/gameDelete")(server);
require("./app/controller/gameUpdate")(server);
require("./app/controller/readAll")(server);

server.listen(port, ()=> console.info('server is running!'));

