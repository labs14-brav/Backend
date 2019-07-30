const db = require('../../data/dbConfig');

module.exports = {
    fetchMediators,
    mediatorRequests,
    approveMediator,
    declineMediator,
    editUser
}

//returns an array of objects from users with type: mediator
function fetchMediators() {
    return db('users')
    .where('type', 'mediator');
}


/**
 * ADMIN USE
 */

 //returns an array of objects from users with type: pending_mediator
function mediatorRequests() {
    return db('users')
    .where('type', 'pending_mediator');
}

//for admin use to approve a pending mediator, returns the updated user object
async function approveMediator(id, update) {
    const approved = await db('users')
             .where('id', id)
             .update(update)
    return db('users')
            .where('id', id).first()
}

//for admin use to decline a pending mediator, returns the updated user object
async function declineMediator(id, update) {
    const declined = await db('users')
            .where('id', id)
            .update(update)
    return db('users')
        .where('id', id).first()
}

async function editUser(id, update) {
    console.log(id,"id")
    return db('users')
      .where('id', id)
      .update(update);
};
