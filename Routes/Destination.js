import express from "express";
import Dest from "../Models/Destination.js";
const { Destination, DestinationSchema } = Dest;
import User from "../Models/User.js";
import fetch from "node-fetch";
import verifyToken from "./verifyToken.js";


const router = express.Router();

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

export default router;
