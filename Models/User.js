const mongoose = require("mongoose");
const { Destination, DestinationSchema } = require("./Destination");

const UserSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true
    },
    email: {
      type: String,
      required: true
    },
    password: {
      type: String,
      required: true
    },
    placesToVisit: [DestinationSchema],
    placesVisited: [DestinationSchema]
  },
  { timestamps: true }
);

module.exports = mongoose.model("User", UserSchema);
