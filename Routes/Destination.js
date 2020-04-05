const router = require("express").Router();
const { Destination, DestinationSchema } = require("../Models/Destination");
const User = require("../Models/User");
const fetch = require("node-fetch");

router.get("/", async (req, res) => {
  res.send("Destination main API point");
});

router.get("/search/:query", (req, res) => {
  fetch(
    `https://nominatim.openstreetmap.org/search.php?q=${req.params.query}&polygon_geojson=1&format=json`
  )
    .then(response => {
      return response.json();
    })
    .then(DestArrayJSON => {
      res.send(DestArrayJSON);
    })
    .catch(err => console.log(err));
});

module.exports = router;
