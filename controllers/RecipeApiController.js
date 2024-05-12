const recipeApiservice = require("../services/recipeApiService");
const Recipe = require("../models/recipe")
const crypto =require("crypto")
 
//recupere la liste des users
module.exports.getRecipes = (req , res) => {
    //..
};
 
//recupere un Recipe par id
module.exports.getRecipe = (req , res) => {
    //..
};
 
//cree un Recipe
module.exports.createRecipe = (req , res) => {
    //crypte le mdp
    req.body.password = crypto.createHmac("sha512" , process.env.SECRET_KEY)
    .update(req.body.password)
    .digest("base64");
 
    //..
};
 
//update un Recipe
module.exports.updateRecipe = (req , res) => {
    //crypte le mdp
req.body.password = crypto.createHmac("sha512" , process.env.SECRET_KEY)
.update(req.body.password)
.digest("base64");
 
    //..
};
 
//supprime un Recipe
module.exports.deleteRecipe = (req , res) => {
    //..
};
 
 