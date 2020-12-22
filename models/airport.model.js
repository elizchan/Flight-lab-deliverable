const mongoose = require('mongoose')

const Airport = mongoose.model (
    "Airport",
    new mongoose.Schema({
        country: String,
        terminals: [],
        opened: Date,
    })
)

module.exports = Airport