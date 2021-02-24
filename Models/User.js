import mongoose from "mongoose";
const { Schema, model } = mongoose;
import {Destination, DestinationSchema } from "../Models/Destination.js";

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
    places: [DestinationSchema]
  },
  { timestamps: true }
);

export default model("User", UserSchema);
