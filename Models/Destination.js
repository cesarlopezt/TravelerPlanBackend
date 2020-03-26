const mongoose = require('mongoose');

const DestinationSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    }
})

module.exports = mongoose.model('Destination', DestinationSchema);