const router = require("express").Router();
const { Destination, DestinationSchema } = require("../Models/Destination");
const User = require("../Models/User");
const fetch = require("node-fetch");

router.get("/", async (req, res) => {
  const user = new User({
    name: "Cesar",
    email: "cesar@gmail.com",
    password: "12345"
  });
  try {
    userSaved = await user.save();
    res.send(userSaved);
  } catch (err) {
    res.status(400).send(err);
  }
});

module.exports = router;
