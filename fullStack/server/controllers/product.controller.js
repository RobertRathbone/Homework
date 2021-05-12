const Product  = require("../models/product.model");

module.exports.findAllProducts = (req, res) => {
    Product.find()
    .then(product=> res.json( product))
    console.log(product)
    .catch(err => res.json({ message: "Something went wrong", error: err }));
};

module.exports.findOneSingleProduct = (req, res) => {
    Product.findOne({_id: req.params.id })
    .then(oneSingleProduct => res.json({ product: oneSingleProduct }))
    .catch(err => res.json({ message: "Something went wrong", error: err }));
};

module.exports.createNewProduct = (req, res) => {
    const { title, description, price } = req.body;
    Product.create({
        title,
        description,
        price
    })
    .then(product=> res.json( product))
    .catch(err => res.json({ message: "Something went wrong", error: err }));
};

module.exports.updateExistingProduct = (req, res) => {
    Product.findAndUpdate({ _id: req.params.id }, req.body, {new: true })
    .then(updatedProduct => res.json({ product: updatedProduct }))
    .catch(err => res.json({ message: "Something went wrong", error: err }));
};

module.exports.deleteExistingProduct = (req, res) => {
    Product.deleteOne({ _id: req.params.id })
    .then(result => res.json({ result: result }))
    .catch(err => res.json({ message: "Something went wrong", error: err }));
};