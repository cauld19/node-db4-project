
exports.seed = function(knex, Promise) {
  return knex('steps').insert([   
    { step_name: "Put bacon on bread", step_order: 1, recipes_id: 1 },
    { step_name: "Put Tomatoe on bread", step_order: 2, recipes_id: 1 },
    { step_name: "Put Lettuce on bread", step_order: 3, recipes_id: 1 },
    { step_name: "Put Wine in Cup", step_order: 1, recipes_id: 2 }
  ]);
};

