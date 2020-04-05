const mongoose = require("mongoose");

const DestinationSchema = mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  keywords: String,
  description: {
    type: String,
    required: true
  },
  coords: [mongoose.Schema.Types.Mixed]
});

module.exports = {
  Destination: mongoose.model("Destination", DestinationSchema),
  DestinationSchema
};
