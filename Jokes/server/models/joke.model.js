const mongoose = require("mongoose");

const JokeSchema = new mongoose.Schema({
	setup: {
		type: String,
		required: [true, "What, is silence a joke these days?"],
		minlength: [10, "You know what they say about someone with a short joke?"]
	},
	punchline: {
		type: String,
		required: [true, "Who's there?"],
		minlength: [3, "Interrupting Cow!"]
	}
});

const Joke = mongoose.model("Joke", JokeSchema);

module.exports = Joke;