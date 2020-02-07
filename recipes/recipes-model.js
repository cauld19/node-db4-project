const db = require('../data/db-config.js');

module.exports = {
    find,
    // add,
    // findById,
    // findSteps,
    // remove,
    // update,
    // addStep
};

function find() {
    return db('recipes')
}