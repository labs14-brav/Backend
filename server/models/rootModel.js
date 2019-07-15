const db = require('../../data/dbConfig');

module.exports = {
    getUsers,
    getUserByName,
    getUserById,
    addUser
}

//Test method for accessing data on the FE
function getUsers(offset=0) {
    return db('users')
    .limit(10)
    .offset(offset)
};

function getUserByName(nickname) {
    return db('users').where('nickname',nickname).first()
};

function getUserById(id) {
    return db('users').where('id',id).first()
};

async function addUser(user) {
    if(process.env.NODE_ENV=="production"){
        const [ids] = await db('users').insert({
            email: user.email,
            nickname: user.nickname,
        },['id'])
        return ids.id
    }else{
        const [id] = await db('users').insert({
            email: user.email,
            nickname: user.nickname,
        })
        return id
    }

};