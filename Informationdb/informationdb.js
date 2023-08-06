require('dotenv').config();
const Informationmodel = require("../api/models/models");
const ConnectMongoDB = require('../database/connection');
const informationjson = require('../onepiece.json');


const start = async () => {
    try {
        await ConnectMongoDB(process.env.Mongo);
        await Informationmodel.create(informationjson);
        console.log("sucessfully added")
    } catch (error) {
        console.log("error", error);
    }
}

start();