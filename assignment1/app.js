var allRecipes =
  '{"Sunny Side Up":["egg, oil, salt, pepper", "Fry egg in oil for 2 min. Season with salt and pepper.","https://images.unsplash.com/photo-1521513919009-be90ad555598?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1099"],"Toast":["bread slice, butter","Put bread slice in toaster for 2 min. Spread butter and enjoy.","https://images.unsplash.com/photo-1584776296944-ab6fb57b0bdd?ixlib=rb-1.2.1&raw_url=true&q=80&fm=jpg&crop=entropy&cs=tinysrgb&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1158"]}';

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
  let newRecipe = document.getElementById("recipeCards");
  let newDiv = document.createElement("div");
  newDiv.setAttribute("class", "individualDiv");

  let newLi = document.createElement("li");

  let newTitleDiv = document.createElement("div");
  let newTitleP = document.createElement("p");
  let newUrlDiv = document.createElement("div");
  let newUrl = document.createElement("img");
  newUrl.setAttribute("src", values[2]);
  newUrl.setAttribute("class", "photos");
  let newIngredientDiv = document.createElement("div");
  let newIngredientP = document.createElement("p");
  let newMethodDiv = document.createElement("div");
  let newMethodP = document.createElement("p");

  newRecipe.append(newDiv);
  newDiv.append(newLi);

  // creating one card with title, ingredient and method as separate div + p elements
  newLi.append(newTitleDiv);
  // newLi.append(newUrl);
  newTitleDiv.append(newTitleP);
  newTitleP.innerHTML = "Recipe: " + keys;

  newLi.append(newUrlDiv);
  newUrlDiv.append(newUrl);

  newLi.append(newIngredientDiv);
  newIngredientDiv.append(newIngredientP);
  newIngredientP.innerHTML = "Ingredients: " + values[0];

  newLi.append(newMethodDiv);
  newMethodDiv.append(newMethodP);
  newMethodP.innerHTML = "Method: " + values[1];
}

function submitRecipe() {
  event.preventDefault();
  // save in obj, with title as key string, and ingredient + method as array values
  let recipeTitle = document.getElementById("recipeTitle").value;
  let recipeUrl = document.getElementById("url").value;
  let recipeIngredient = document.getElementById("recipeIngredients").value;
  let recipeMethod = document.getElementById("recipeMethod").value;
  if ((recipeTitle === "") || (recipeUrl === "") || (recipeIngredient==="")||(recipeMethod==="")) {
    alert("Please fill out the required entries.");
  } else {
    let recipeObject = {};
    recipeObject[recipeTitle] = [recipeIngredient, recipeMethod, recipeUrl];

    // convert this whole object to string
    // pass into showRecipes function -> parse -> extract -> create card
    showRecipes(JSON.stringify(recipeObject));
  }
}

// delete all recipes when deleteAll is clicked
function deleteAll() {
  event.preventDefault();
  let cards = document.getElementById("recipeCards");
  cards.innerHTML = "";
}
