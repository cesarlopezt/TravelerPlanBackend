const router = require("express").Router();
const { Destination, DestinationSchema } = require("../Models/Destination");
const User = require("../Models/User");
const fetch = require("node-fetch");
const verifyToken = require("./verifyToken");

router.get("/", verifyToken, (req, res) => {
    // res.send("Destination main API point");
    res.send(req.user);
    User.findById(req.user._id);
});

router.get("/search/:query", (req, res) => {
    fetch(
        `https://nominatim.openstreetmap.org/search.php?q=${req.params.query}&polygon_geojson=1&format=json`
    )
        .then((response) => {
            return response.json();
        })
        .then((DestArrayJSON) => {
            res.send(DestArrayJSON);
        })
        .catch((err) => console.log(err));
});

module.exports = router;
