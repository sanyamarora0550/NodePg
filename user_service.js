const dao = require('./user_dao'),
    bcrypt = require('bcrypt');

async function insertUser(reqBody, callback) {
    let isDuplicate = await dao.getUserByUsername(reqBody.user_name);
    isDuplicate = isDuplicate.rows ? isDuplicate.rows : [];
    if (isDuplicate.length > 0) {
        callback({ success: false, msg: "username already exists!!" });
        return;
    }
    let hash = await bcrypt.hash(reqBody.password, 10);
    reqBody.password = hash;
    await dao.insertUser(reqBody);
    callback({ success: true, msg: "User Created!!" });
}

async function getAllUsers(reqBody, callback) {
    let res = await dao.getAllUsers();
    res = res.rows ? res.rows : [];
    callback({ success: true, data: res });
}

async function getUserById(reqBody, callback) {
    console.log(reqBody);
    let res = await dao.getUserById(reqBody.user_id);
    res = res.rows ? res.rows : [];
    callback({ success: true, data: res });
}

async function updatePassword(reqBody, callback) {
    let hash = await bcrypt.hash(reqBody.password, 10);
    reqBody.password = hash;
    await dao.updatePassword(reqBody);
    callback({ success: true, msg: "Updated!!" });
}

module.exports = {
    insertUser,
    getAllUsers,
    getUserById,
    updatePassword
}