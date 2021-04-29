const express = require('express')
const app = express()
const cors = require('cors');
const serverPort = 6969

app.use(cors())
app.use(express.urlencoded({extended: true}))
app.use(express.json())

require("./router")(app)


var server = app.listen(serverPort, () => {
    console.log("Server is running!");
    console.log("Running on port:" + server.address().port);
})