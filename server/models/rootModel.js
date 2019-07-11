const db = require('../../data/dbConfig');

module.exports = {
    getUsers
}


function getUsers() {
    return db('users')
};