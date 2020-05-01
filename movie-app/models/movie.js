const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const movieSchema = new Schema({
    title: { type: String, required: true },
    date: { type: Date, default: Date.now },
    authors: { type: [String], required: true },
    rating: { type: String, required: true },
    description: { type: String, required: true },
    poster: { type: String, required: true },
    apiId: { type: String, required: true, unique: true }
})

const Movie = mongoose.model("Movie", movieSchema);

module.exports = Movie;