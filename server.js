const express = require("express");
const server = express();
const port = 3000;

server.use(express.json)
server.use(express.urlencoded({extended:true}))

server.listen(port, () => {
    console.log(`Listening on port ${port}`) // Callback
})

server.post("/", (req, res) => {
    res.send(req.body)
})