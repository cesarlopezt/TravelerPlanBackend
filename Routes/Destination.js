import express from "express";
import  { Destination, DestinationSchema } from "../Models/Destination.js";
import UserModel from "../Models/User.js";

import verifyToken from "../Middlewares/verifyToken.js";

const router = express.Router();

router.get("/", verifyToken, async (req, res) => {
    // res.send("Destination main API point");
    // res.send(req.user);
    let i = await UserModel.findById(req.user._id);
    res.send(i)
});

// router.get("/search/:query", (req, res) => {
//     fetch(
//         `https://nominatim.openstreetmap.org/search.php?q=${req.params.query}&polygon_geojson=1&format=json`
//     )
//         .then((response) => {
//             return response.json();
//         })
//         .then((DestArrayJSON) => {
//             res.send(DestArrayJSON);
//         })
//         .catch((err) => console.log(err));
// });

export default router;
