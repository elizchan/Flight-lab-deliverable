const mongoose = require("mongoose")

const Terminal = mongoose.model(
    "Terminal",
    new mongoose.Schema({
        name: String,
        flights: [{type: mongoose.Schema.ObjectId, ref: "Flight"}],
        Capacity: Number
    })
)

module.exports = Terminal