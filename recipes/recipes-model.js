const db = require('../data/db-config.js');

module.exports = {
    find,
    getShoppingList,
    findById,
    getInstructions,
    getAllInstructions,
};

function find() {
    return db('recipes')
}

function findById(id) {
    return db('recipes')
      .where({ id })
      .first();
};


// getShoppingList(recipe_id)`: should return a list of all ingredients and quantities for a given recipe

function getShoppingList(recipe_id) {
    return db("recipes_ingredients as ri")
      .join( "ingredients as i", "ri.ingredient_id", "i.id")
      .join("recipes as r", "ri.recipe_id", "r.id")
      .select("r.recipe_name", "i.ingredient_name", "i.ingredient_amount_cups", "i.ingredient_amount_oz", "i.ingredient_amount_grams")
      .where({ recipe_id });
  }


// `getInstructions(recipe_id)`: should return a list of step by step instructions for preparing a recipe


function getInstructions(recipe_id) {
    return db("recipes as r")
        .join("steps as s", "r.id", "s.recipes_id" )
        .select("r.recipe_name", "s.step_name", "s.step_order")
        .where('r.id', recipe_id )
}



function getAllInstructions() {
    return db('steps')
}

