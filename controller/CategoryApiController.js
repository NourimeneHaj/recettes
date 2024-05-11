const categoryApiservice = require("../services/categoryApiService");
const Category = require("../models/category")
const crypto =require("crypto")
 
//recupere la liste des categories
module.exports.getCategory = (req , res) => {
    //..
};
 
//recupere une categorie par id
module.exports.getCategory = (req , res) => {
    //..
};
 
//cree un user
module.exports.createCategory = (req , res) => {
    //crypte le mdp
    req.body.password = crypto.createHmac("sha512" , process.env.SECRET_KEY)
    .update(req.body.password)
    .digest("base64");
 
    //..
};
 
//update une category
module.exports.updateCategory = (req , res) => {
    //crypte le mdp
req.body.password = crypto.createHmac("sha512" , process.env.SECRET_KEY)
.update(req.body.password)
.digest("base64");
 
    //..
};
 
//supprime une category
module.exports.deleteCategory = (req , res) => {
    //..
};