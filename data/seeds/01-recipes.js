exports.seed = function(knex, Promise) {
  return knex('recipes').insert([   
    { recipe_name: 'BLT', created_at: new Date().toLocaleString(), updated_at: new Date().toLocaleString()},
    { recipe_name: 'Glass of Wine', created_at: new Date().toLocaleString(), updated_at: new Date().toLocaleString()}
  ]);
};
