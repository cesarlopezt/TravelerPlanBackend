import mongoose from "mongoose";
const { Schema, model } = mongoose;
import Dest from "../Models/Destination.js";
const { Destination, DestinationSchema } = Dest;

const UserSchema = Schema(
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

export default model("User", UserSchema);
