const express = require("express");
const cors = require("cors");
const app = require("./routes/game.routes");


const server = express();
const port = 5000;

const corsOptions = {
    origin: "http://localhost:3000",
    optionsSucessStatus: 200
}

server.use(express.json());
server.use(cors(corsOptions));
server.use(app);

server.listen(port, ()=> console.info('server is running!'));

