const mongoose = require("mongoose");

//create publications schema
const MoviesSchema = mongoose.Schema({
    imageurl: String,
    title: String,
    actor: String
});

const MovieModel = mongoose.model("movies", MoviesSchema);

module.exports = MovieModel;