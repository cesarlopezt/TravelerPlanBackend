import mongoose from "mongoose";
const { Schema, model } = mongoose;

export const DestinationSchema = Schema({
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    coords: {
        type: String,
        required: true,
    },
    visited: {
        type: Boolean,
        required: true,
        default: false
    },    
//   keywords: String,
//   coords: [Schema.Types.Mixed]
},
{ timestamps: true }
);

export const Destination = model("Destination", DestinationSchema)

// export {
//   Destination as default,
//   DestinationSchema
// };
