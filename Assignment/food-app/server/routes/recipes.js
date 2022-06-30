var express = require('express');
var router = express.Router();
const { v4: uuid } = require('uuid');
const Recipe = require("../model");


/* GET recipes listing. */
router.get('/', function(req, res, next) {
  Recipe.find(function(err, foundRecipes){
    if(!err){
      res.send(foundRecipes);
    } else {
      res.send(err);
    }
  })
});

/* GET downloaded recipe */
router.get('/download',function(req,res){
  return res.json(recipes);
});

/* POST new recipe */
router.post('/', function(req,res,next) {
  let recipe = req.body;
  recipe.id = uuid();
  recipes.push(recipe);
  return res.send(recipe);
});

/* DELETE a recipe */
router.delete('/', function(req,res) {
  let recipeTitle  = req.body.title;
  recipes = recipes.filter(recipe => recipe.title !== recipeTitle);
  return res.send(recipes);
});

module.exports = router;
