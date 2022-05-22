var allRecipes =
  '{"Sunny Side Up":["egg, oil, salt, pepper", "Fry egg in oil for 2 min. Season with salt and pepper."],"Toast":["bread slice, butter","Put bread slice in toaster for 2 min. Spread butter and enjoy."]}'

showRecipes(allRecipes);
// show all recipes
function showRecipes(recipes) {
  let megaObj = parseJson(recipes);
  extractRecipes(megaObj);
}

function parseJson(str) {
  return JSON.parse(str);
}

function extractRecipes(jsonObject) {
  // iterate over the jsonObject, create card for each recipe
  for (eachRecipe in jsonObject) {
    let keys = eachRecipe;
    let values = jsonObject[eachRecipe];
    createCard(keys, values);
  }
}

function createCard(keys, values) {
  // ** remember to give class/id attr for css
  let newRecipe = document.getElementById("recipeCards");
  let newDiv = document.createElement("div");
  let newLi = document.createElement("li");
  let newTitleDiv = document.createElement("div");
  let newTitleP = document.createElement("p");
  let newIngredientDiv = document.createElement("div");
  let newIngredientP = document.createElement("p");
  let newMethodDiv = document.createElement("div");
  let newMethodP = document.createElement("p");

  newRecipe.append(newDiv);
  newDiv.append(newLi);

  // creating one card with title, ingredient and method as separate div + p elements
  newLi.append(newTitleDiv);
  newTitleDiv.append(newTitleP);
  newTitleP.innerHTML = keys;

  newLi.append(newIngredientDiv);
  newIngredientDiv.append(newIngredientP);
  newIngredientP.innerHTML = values[0];

  newLi.append(newMethodDiv);
  newMethodDiv.append(newMethodP);
  newMethodP.innerHTML = values[1];
}

// show alert when clear button is clicked

// delete all recipes when deleteAll is clicked
