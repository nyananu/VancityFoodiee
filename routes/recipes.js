var express = require('express');
var router = express.Router();
const Recipe = require("../models/model");


/* GET recipes listing. */
router.get('/',  function(req, res, next) {
  let recipesFromDb = [];
   Recipe.find(async function(err, foundRecipes){
    if(!err){
      for (let recipe of foundRecipes) {
        recipesFromDb.push(recipe);
      }
      await res.send(recipesFromDb);
    } else {
      res.send(err);
    }
  })
});

/* GET downloaded recipe */
router.get('/download',function(req,res){
  let recipesFromDb = [];
  Recipe.find(async function(err, foundRecipes){
    if(!err){
      for (let recipe of foundRecipes) {
        recipesFromDb.push(recipe);
      }
      await res.send(recipesFromDb);
    } else {
      res.send(err);
    }
  })
});

/* POST new recipe */
router.post('/postRecipe', function(req,res,next) {
  const newRecipe = new Recipe({
    imgURL: req.body.imgURL,
    title: req.body.title,
    ingredients: req.body.ingredients,
    instructions: req.body.instructions
  });

  newRecipe.save(function(err) {
    if(!err) {
      res.send('Recipe added successfully');
    } else {
      res.send(err);
    }
  });
});

/* DELETE a recipe */
router.delete('/deleteRecipe', function(req,res) {
  Recipe.deleteOne(
      {title: req.body.title},
      function(err) {
    if(!err) {
      res.send('Successfully deleted recipe');
    } else {
      res.send(err)
    }
  })
});

module.exports = router;
