var allRecipes = '{"Sunny Side Up"["egg, oil, salt, pepper", "Fry egg in oil for 2 min. Season with salt and pepper."],"Toast":["bread slice, butter","Put bread slice in toaster for 2 min. Spread butter and enjoy."]}';

console.log('hello', allRecipes);
// first show the recipes already present
// convert stringified json to json object
// values 
const recipeCards = JSON.parse(allRecipes);

console.log('this', recipeCards);

for(recipe in recipeCards){
console.log('finallly',recipeCards[recipe]);
};

// then add recipes from the form

// show alert when clear button is clicked

// delete all recipes when deleteAll is clicked

