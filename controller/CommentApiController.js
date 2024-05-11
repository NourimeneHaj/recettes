const commentApiservice = require("../services/commenntApiService");
const Comment = require("../models/user")
const crypto =require("crypto")
 
//recupere la liste des categories
module.exports.getComment = (req , res) => {
    //..
};
 
//recupere une categorie par id
module.exports.getComment = (req , res) => {
    //..
};
 
//cree un user
module.exports.createComment = (req , res) => {
    //crypte le mdp
    req.body.password = crypto.createHmac("sha512" , process.env.SECRET_KEY)
    .update(req.body.password)
    .digest("base64");
 
    //..
};
 
//update une Comment
module.exports.updateComment = (req , res) => {
    //crypte le mdp
req.body.password = crypto.createHmac("sha512" , process.env.SECRET_KEY)
.update(req.body.password)
.digest("base64");
 
    //..
};
 
//supprime une Comment
module.exports.deleteComment = (req , res) => {
    //..
};
 
 