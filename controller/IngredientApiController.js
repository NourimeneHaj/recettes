const ingredientApiservice = require("../services/ingredientApiService");
const Ingredient = require("../models/ingredient")
const crypto =require("crypto")
 
//recupere la liste des Ingredients
module.exports.getIngredients = (req , res) => {
    //..
};
 
//recupere un Ingredient par id
module.exports.getIngredient = (req , res) => {
    //..
};
 
//cree un Ingredients
module.exports.createIngredient = (req , res) => {
    //crypte le mdp
    req.body.password = crypto.createHmac("sha512" , process.env.SECRET_KEY)
    .update(req.body.password)
    .digest("base64");
 
    //..
};
 
//update un Ingredients
module.exports.updateIngredient = (req , res) => {
    //crypte le mdp
req.body.password = crypto.createHmac("sha512" , process.env.SECRET_KEY)
.update(req.body.password)
.digest("base64");
 
    //..
};
 
//supprime un Ingredient
module.exports.deleteIngredient = (req , res) => {
    //..
};
 
 