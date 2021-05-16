const mongoose = require('mongoose');

const AuthorSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "No point in adding an author, without adding an author..."],
        minlength: [3, "Authors have names."]
    }
})

module.exports.Author = mongoose.model("Author", AuthorSchema);