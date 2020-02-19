
exports.seed = function(knex, Promise) {
  return knex('chef').insert([   
    { chef_name: "Herm", recipes_id: 1 },
    { chef_name: "Gary", recipes_id: 2 }
  ]);
};
