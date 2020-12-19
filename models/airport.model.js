const mongoose = require('mongoose')

const Airport = mongoose.model (
    "Airport",
    new mongoose.Schema({
        country: String,
        terminals: [{type: mongoose.Schema.Types.ObjectId, ref: "Terminal"}],
        opened: Date,
    })
)

module.exports = Airport