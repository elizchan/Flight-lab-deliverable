const mongoose = require("mongoose")

const Terminal = mongoose.model(
    "Terminal",
    new mongoose.Schema({
        name: String,
        flights: [],
        Capacity: Number
    })
)

module.exports = Terminal