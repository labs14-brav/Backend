const db = require('../../data/dbConfig');

module.exports = {
    fetchMediators,
    mediator_requests,
}

function fetchMediators() {
    return db('users')
    .where('type', 'mediator');
}

function mediator_requests() {
    return db('users')
    .where('type', 'pending_mediator');
}

function approve_mediator() {
}

function decline_mediator() {
    
}
