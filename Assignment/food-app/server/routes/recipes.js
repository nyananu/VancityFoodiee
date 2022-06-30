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

// /* GET downloaded recipe */
// router.get('/download',function(req,res){
//   return res.json(recipes);
// });

/* POST new recipe */
router.post('/', function(req,res,next) {
  const newRecipe = new Recipe({
    imgURL: req.body.imgURL,
    title: req.body.title,
    ingredients: req.body.ingredients,
    instructions: req.body.instructions
  });

  newRecipe.save(function(err) {
    if(!err) {
      res.send('Successfully added a new recipe')
    } else {
      res.send(err);
    }
  });
});

/* DELETE a recipe */
router.delete('/', function(req,res) {
  Recipe.deleteOne(
      {title: req.body.title},
      function(err) {
    if(!err) {
      res.send('Successfully deleted the recipe')
    } else {
      res.send(err)
    }
  })
});

module.exports = router;
