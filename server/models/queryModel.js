const mongoose = require('mongoose')

const Schema = mongoose.Schema

const querySchema = new Schema({
    title: {type: String, required: true},
    body: {type: String, required: true},
    category: {type: String, required: false},   
}, {timestamps: true})

module.exports = mongoose.model('Query', querySchema)