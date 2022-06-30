const mongoose = require('mongoose');

mongoose.connect(
    "mongodb+srv://m001-student:m001-mongodb-basics@sandbox.xqqaa.mongodb.net/?retryWrites=true&w=majority",
    {useNewUrlParser:true}
);

// create schema
const recipeSchema = new mongoose.Schema({
    imgURL: String,
    title: String,
    ingredients: String,
    instructions: String
});

// create model
const Recipe = mongoose.model('Recipe', recipeSchema);

module.exports = Recipe;