const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema({
	title: {
		type: String,
	},
	description: {
		type: String,
	},
    price: {
        type: Number,
    }
});

const Product = mongoose.model("Product", ProductSchema);

module.exports = Product;