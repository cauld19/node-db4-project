const express = require('express');

const Recipes = require('./recipes-model.js');

const router = express.Router();

router.get('/', (req, res) => {
    Recipes.find()
    .then(recipes => {
      res.json(recipes);
    })
    .catch(err => {
      res.status(500).json({ message: 'Failed to get recipes' });
    });
  });


  router.get('/:id/ingredients', (req, res) => {
    const { id } = req.params;
    console.log(id)
  
    Recipes.getShoppingList(id)
    .then(ingredients => {
      if (ingredients.length) {
        res.json(ingredients);
      } else {
        res.status(404).json({ message: 'Could not find ingredients for given recipe' })
      }
    })
    .catch(err => {
      res.status(500).json({ message: 'Failed to get ingredients' });
    });
  });

  
router.get('/:id', (req, res) => {
  const { id } = req.params;

  Recipes.findById(id)
  .then(recipe => {
    if (recipe) {
      res.json(recipe);
    } else {
      res.status(404).json({ message: 'Could not find recipe with given id.' })
    }
  })
  .catch(err => {
    res.status(500).json({ message: 'Failed to get recipes' });
  });
});











module.exports = router;