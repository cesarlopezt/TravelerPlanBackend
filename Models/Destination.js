import mongoose from "mongoose";
const { Schema, model } = mongoose;

const DestinationSchema = Schema({
  name: {
    type: String,
    required: true
  },
  keywords: String,
  description: {
    type: String,
    required: true
  },
  coords: [Schema.Types.Mixed]
});

export default {
  Destination: mongoose.model("Destination", DestinationSchema),
  DestinationSchema
};
