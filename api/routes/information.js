const express = require('express');
const { getAllInformation, getAllInformationtesting, getonlyepisode } = require('../controllers/Information')

const router = express.Router();


router.route("/").get(getAllInformation);
router.route("/testing").get(getAllInformationtesting);
router.route("/episodes").get(getonlyepisode);


module.exports = router;