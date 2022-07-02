var express = require('express');
var router = express.Router();
const Recipe = require("../model");

// make base recipes
const friedEgg = new Recipe({
  imgURL: "https://images.unsplash.com/photo-1521513919009-be90ad555598?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1099",
  title: "Sunny Side Up",
  ingredients: "egg, oil, salt, pepper",
  instructions: "Fry egg in oil for 2 min. Season with salt and pepper."
});

const toast = new Recipe({
  imgURL: "https://images.unsplash.com/photo-1584776296944-ab6fb57b0bdd?ixlib=rb-1.2.1&raw_url=true&q=80&fm=jpg&crop=entropy&cs=tinysrgb&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1158",
  title: "Buttery Toast",
  ingredients: "brioche slice, butter",
  instructions: "Put brioche slice in toaster for 2 min. Spread butter and enjoy while hot."
});

const ramen = new Recipe({
  imgURL: "https://images.unsplash.com/photo-1600326145359-3a44909d1a39?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80",
  title: "Savoury Ramen",
  ingredients: "ramen pack, egg, scallions",
  instructions: "Boil and season ramen according to the pack. Top with fried egg and scallions."
});

const friedRice = new Recipe ({
  imgURL: "https://images.unsplash.com/photo-1612531753325-8efb87255568?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80",
  title: "Fried Rice",
  ingredients: "egg, day-old rice, scallions, mixed veggies, soy sauce, salt, pepper, sesame oil",
  instructions: "Fry an egg and mix all the ingredients in a flaming hot pan. When combined, enjoy with a splash of sesame oil."
});

// save recipes to db
// friedEgg.save();
// toast.save();
// ramen.save();
// friedRice.save();


/* GET recipes listing. */
router.get('/',  function(req, res, next) {
  let recipesFromDb = [];
   Recipe.find(async function(err, foundRecipes){
    if(!err){
      console.log(foundRecipes);
      for (let recipe of foundRecipes) {
        recipesFromDb.push(recipe);
      }

      await res.send(recipesFromDb);
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
      res.send('Recipe added successfully');
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
      res.send('Successfully deleted recipe');
    } else {
      res.send(err)
    }
  })
});

module.exports = router;
