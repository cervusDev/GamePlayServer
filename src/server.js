const express = require("express");

const server = express();
const port = 4000;

server.use(express.json());

require("./app/controller/gameCreate")(server);
require("./app/controller/gameRead")(server);
require("./app/controller/gameDelete")(server);

server.listen(port, ()=> console.info('server is running!'));

