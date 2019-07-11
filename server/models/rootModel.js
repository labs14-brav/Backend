const db = require('../../data/dbConfig');

module.exports = {
    getUsers
}

//Test method for accessing data on the FE
function getUsers() {
    return db('users')
};