const db = require('../../data/dbConfig');

module.exports = {
    fetchMediators,
    mediatorRequests,
    approveMediator,
    declineMediator,
}

function fetchMediators() {
    return db('users')
    .where('type', 'mediator');
}



/**
 * ADMIN USE
 */
function mediatorRequests() {
    return db('users')
    .where('type', 'pending_mediator');
}

//for admin use to approve a pending mediator
function approveMediator(id) {
    return db('users')
        .where('id', id)
        .update('type', 'mediator')
}

//for admin use to decline a pending mediator
function declineMediator() {
    return db('users')
        .where('id', id)
        .update('type', 'user')
}
