const mongoose = require("mongoose");
const express = require('express');
const category = require('./models/category');
const comment = require('./models/comment');
const ingredient = require('./models/ingredient');
const membre = require('./models/membre');
const ingredientRecipe = require('./models/ingredientRecipe');
const recipe = require('./models/recipe');
const membreRoutes = require('./routes/membreRoutes');
const categoryRoutes = require('./routes/categoryRoutes');
const commentRoutes = require('./routes/commentRoutes');
const recipeRoutes = require('./routes/recipeRoutes');
const ingredientRoutes = require('./routes/ingredientRoutes');


const app = express();
const PORT = process.env.PORT || 3000;

mongoose.connect('mongodb+srv://nouri:mongoDB0@recettes.3uirjfb.mongodb.net/?retryWrites=true&w=majority&appName=Recettes',
{ 
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then(() => {
    console.log('Connexion réussie');
    app.listen(PORT, () => {
        console.log(`Server is running on port ${PORT}`);
    });
})
.catch((err) => {
    console.error('Connexion échouée:', err);
    process.exit(1); // Sortie du processus avec un code d'échec
});

app.use(express.json());
app.use('/members', membreRoutes);
app.use('/categories', categoryRoutes);
app.use('/comments', commentRoutes);
app.use('/recipes', recipeRoutes);
app.use('/ingredients', ingredientRoutes);