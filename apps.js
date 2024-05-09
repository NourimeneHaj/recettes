const mongoose = require("mongoose");
const category = require('./models/category');
const comment = require('./models/comment');
const ingredient = require('./models/ingredient');
const membre = require('./models/membre');
const ingredientRecipe = require('./models/ingredientRecipe');
const recipe = require('./models/recipe');

// connection à la base de données
mongoose.connect('mongodb+srv://ndeyedia259:BN1cDJn7OQrCatCO@cluster0.ysmxfvy.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0',
{ 
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then(() => console.log('Connexion réussie'))
.catch(() => console.log('Connexion échouée'))