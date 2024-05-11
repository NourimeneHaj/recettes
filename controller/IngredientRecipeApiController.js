const ingredientRecipeApiservice = require("../services/ingredientRecipeApiService");
const IngredientRecipe = require("../models/ingredientRecipe")
const crypto =require("crypto")
 
//recupere la liste des IngredientRecipes
module.exports.getIngredientRecipes = (req , res) => {
    //..
};
 
//recupere un IngredientRecipes par id
module.exports.getIngredientRecipe = (req , res) => {
    //..
};
 
//cree un IngredientRecipe
module.exports.createIngredientRecipe = (req , res) => {
    //crypte le mdp
    req.body.password = crypto.createHmac("sha512" , process.env.SECRET_KEY)
    .update(req.body.password)
    .digest("base64");
 
    //..
};
 
//update un IngredientRecipe
module.exports.updateIngredientRecipe = (req , res) => {
    //crypte le mdp
req.body.password = crypto.createHmac("sha512" , process.env.SECRET_KEY)
.update(req.body.password)
.digest("base64");
 
    //..
};
 
//supprime un IngredientRecipe
module.exports.deleteIngredientRecipe = (req , res) => {
    //..
};
 
 