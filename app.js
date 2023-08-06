const express = require('express');
const app = express();
require('dotenv').config();
const Port = process.env.PORT || 4000;
const ConnectMongoDB = require('./database/connection')
const information_routes = require('./api/routes/information')

app.use('/onepiece.com/', information_routes);


app.get("/", (req, res) => {
    res.status(200).send("hiii one piece FANS");
})

const start = async () => {
    try {
        await ConnectMongoDB(process.env.Mongo);
        app.listen(Port, () => {
            console.log(`Running on Port No ${Port}`)
        })
    } catch (error) {
        console.log(error)
    }
}
start();