const db = require('../../data/dbConfig');

module.exports = {
    fetchMediators
}

function fetchMediators() {
    return db('users')
    .where('type', 'mediator');
}