const mongoose = require("mongoose");

const JokeSchema = new mongoose.Schema({
    // _id: {
    // 	type: Number
    // },
    setup: {
        type: String,
        required: [true, "Content is required"],
        minlength: [10, "Content must be at least 10 characters"]
    },
    punchline: {
        type: String,
        required : [true, "Content is required"],
        minlength : [3, "Content must be at least 3 characters"]
    }
}, { timestamps: true });

const Joke = mongoose.model("Joke", JokeSchema);

module.exports = Joke;