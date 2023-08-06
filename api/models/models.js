const mongoose = require('mongoose');


const InformationSchema = new mongoose.Schema({
    "Unnamed: 0": {
        type: Number
    },
    "rank": {
        type: String
    },
    "trend": {
        type: String
    },
    "season": {
        type: Number
    },
    "episode": {
        type: Number
    },
    "name": {
        type: String
    },
    "start": {
        type: Number
    },
    "total_votes": {
        type: String
    },
    "average_rating": {
        type: Number
    }
});

module.exports = new mongoose.model('Information', InformationSchema);

