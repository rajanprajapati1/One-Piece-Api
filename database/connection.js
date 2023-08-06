const mongoose = require('mongoose');

const ConnectMongoDb = (uri) => {
    console.log("connect to MongoDatabase");
    return mongoose.connect(uri);
}
module.exports = ConnectMongoDb;

