const onepieceinform = require('../models/models');
const getAllInformation = async (req, res) => {
    const { rank, season, episode, name, start, sort, select } = req.query;
    let userquery = {};

    if (rank) {
        userquery.rank = rank;
    }
    if (season) {
        userquery.season = season;
    }
    if (episode) {
        userquery.episode = episode;
    } if (name) {
        userquery.name = { $regex: name, $options: "i" };
    }
    if (start) {
        userquery.start = start;
    }

    let apidata = onepieceinform.find(userquery);

    if (sort) {
        let sortdata = sort.split(",").join(" ");
        apidata = apidata.sort(sortdata);
    }
    if (select) {
        let selectdata = select.split(",").join(" ");
        apidata = apidata.select(selectdata);
    }

    let page = Number(req.query.page) || 1;
    let limit = Number(req.query.limit) || 20;
    let skip = (page - 1) * limit;

    apidata = apidata.skip(skip).limit(limit);
    const reqdata = await apidata;
    res.status(202).json({ reqdata, Total_Data_In_This_Page: reqdata.length })

}
const getonlyepisode = async (req, res) => {
    try {
        const { select, sort } = req.query;
        const projection = select?.split(",") || 'episode name';

        const sortObject = sort || 'episode';
        const episodes = await onepieceinform.find({}, projection)
            .sort(sortObject)
            .exec();

        res.status(200).json(episodes);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'An error occurred' });
    }
}

const getAllInformationtesting = async (req, res) => {
    const reqdata = await onepieceinform.find({});
    res.status(200).json({ reqdata })
}

module.exports = { getAllInformation, getAllInformationtesting, getonlyepisode }