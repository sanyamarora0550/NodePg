const dao = require('./user_dao');

async function insertUser(reqBody, callback) {
    await dao.insertUser(reqBody);
    callback({});
}

async function getAllUsers(reqBody, callback) {
    let res = await dao.getAllUsers();
    res = res.rows ? res.rows : [];
    callback(res);
}

async function getUserById(reqBody, callback) {
    console.log(reqBody);
    let res = await dao.getUserById(reqBody.user_id);
    res = res.rows ? res.rows : [];
    callback(res);
}

module.exports = {
    insertUser,
    getAllUsers,
    getUserById
}