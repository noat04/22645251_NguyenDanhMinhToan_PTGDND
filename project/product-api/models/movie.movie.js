const mongoose = require('mongoose');

const MovieSchema = new mongoose.Schema({
    adult: {
        type: Boolean,
        default: false
    },
    backdrop_path: {
        type: String
    },
    genre_ids: {
        type: [Number]
    },
    movie_id: {
        type: Number,
        required: true,
        unique: true
    },
    original_language: {
        type: String
    },
    original_title: {
        type: String
    },
    overview: {
        type: String
    },
    popularity: {
        type: Number
    },
    poster_path: {
        type: String
    },
    release_date: {
        type: Date
    },
    title: {
        type: String
    },
    video: {
        type: Boolean,
        default: false
    },
    vote_average: {
        type: Number
    },
    vote_count: {
        type: Number
    }
}, {
    timestamps: true
});

const Movie = mongoose.model('Movie', MovieSchema);
module.exports = Movie;
