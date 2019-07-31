const db = require('../../data/dbConfig');

module.exports = {
    getUserByEmail,
    getUserById,
    addUser,
}

function getUserByEmail(email) {
    return db('users').where('email',email).first()
};

function getUserById(id) {
    return db('users').where('id',id).first()
};

async function addUser(user) {
    if (process.env.NODE_ENV == 'production' || process.env.NODE_ENV === 'staging') {
        const [ids] = await db('users').insert({
            email: user.email,
            uid: user.uid,
        },['id'])
        return ids.id
    } else {
        const [id] = await db('users').insert({
            email: user.email,
            uid: user.uid,
        })
        return id
    }
};
