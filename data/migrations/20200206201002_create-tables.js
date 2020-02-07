
exports.up = function(knex) {
  return (
      knex.schema
        .createTable('recipes', tbl => {
            tbl.increments();
            tbl.string('recipe_name', 255).notNullable();
            tbl.timestamps();
        })
        .createTable('ingredients', tbl => {
            tbl.increments();
            tbl.string('ingredient_name', 255).notNullable();
            tbl.integer('ingredient_amount_grams');
            tbl.integer('ingredient_amount_oz');
            tbl.integer('ingredient_amount_cups');
        })
        .createTable('steps', tbl => {
            tbl.increments();
            tbl.string('step_name', 255).notNullable();
            tbl.integer('step_order').notNullable();
            tbl.integer('recipes_id')
                .notNullable()
                .unsigned()
                .references('recipes.id')
                .onUpdate('CASCADE')
                .onDelete('CASCADE');
        })
        .createTable('chef', tbl => {
            tbl.increments();
            tbl.string('chef_name', 255).notNullable().unique();
            tbl.integer('recipes_id')
                .notNullable()
                .unsigned()
                .references('recipes.id')
                .onUpdate('CASCADE')
                .onDelete('CASCADE');
        })
        .createTable('recipes_ingredients', tbl => {
            tbl.integer('recipe_id')
                .unsigned()
                .notNullable()
                .references('recipes.id')
                .onUpdate('CASCADE')
                .onDelete('CASCADE');
            tbl.integer('ingredient_id')
                .unsigned()
                .notNullable()
                .references('ingredients.id')
                .onUpdate('CASCADE')
                .onDelete('CASCADE');
            tbl.primary(['recipe_id', 'ingredient_id']);
        })
    );
};

exports.down = function(knex) {
    return (
        knex.schema
            .dropTableIfExists('recipes_ingredients')
            .dropTableIfExists('chef')
            .dropTableIfExists('steps')
            .dropTableIfExists('ingredients')
            .dropTableIfExists('recipes')
    );
};
