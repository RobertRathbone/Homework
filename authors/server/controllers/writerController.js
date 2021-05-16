const { response } = require('express');
const { Author } = require('../models/authorModel');

module.exports.index = (request, response) => {
response.json({
    message: "Hello you"
})
}

module.exports.createAuthor = (request, response) => {
    // const {name} = request.body;
    console.log("executed method create author")
    Author.create(request.body)
        .then(author=>response.json(author))
        .catch(err=>response.status(400).json(err))
}

module.exports.findAuthors = (request, response) => {
    Author.find({})
        .then(authors => response.json(authors))
        .catch(err => response.status(400).json(err));
}

module.exports.findAuthor = (request, response) => {
    Author.findOne({_id: request.params.id})
    .then(foundAuthor => response.json(foundAuthor))
    .catch(err => response.status(400).json(err));
}

module.exports.updateAuthor = (request, response) => {
    Author.findOneAndUpdate({_id: request.params.id}, request.body, {new: true, runValidators:true})
        .then(updatedAuthor => response.json(updatedAuthor))
        .catch(err => response.status(404).json(err));
}

module.exports.deleteAuthor = (request, response) => {
    Author.findOneAndDelete({_id: request.params.id})
        .then(deleteConfirmation => response.json(deleteConfirmation))
        .catch(err => response.status(400).json("No delete-o", err));
}