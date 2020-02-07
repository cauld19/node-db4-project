exports.seed = function(knex, Promise) {
  return knex('ingredients').insert([   
    {
      ingredient_name: "Bacon",
      ingredient_amount_grams: 20,
    },
    {
      ingredient_name: "Lettuce",
      ingredient_amount_cups: 2,
    },
    {
      ingredient_name: "Tomatoe",
      ingredient_amount_oz: 5,
    },
    {
      ingredient_name: "Wine",
      ingredient_amount_cups: 2,
    }
  ]);
};

