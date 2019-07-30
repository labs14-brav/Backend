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
async function approveMediator(id, update) {
    const approved = await db('users')
             .where('id', id)
             .update(update)
    return db('users')
            .where('id', id).first()
}

//for admin use to decline a pending mediator
async function declineMediator(id, update) {
    const declined = await db('users')
            .where('id', id)
            .update(update)
    return db('users')
        .where('id', id).first()
}
