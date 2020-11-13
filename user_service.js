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

async function deleteUser(reqBody, callback) {
    await dao.deleteUser(reqBody.user_id);
    callback({ success: true, msg: "Deleted!!" });
}

async function login(reqBody, callback) {
    let user = await dao.getUserByUsername(reqBody.user_name);
    user = user.rows ? user.rows : [];
    if (user.length > 0) {
        let userObj = user[0];
        console.log(userObj);
        if (!userObj.is_active) {
            callback({ success: false, msg: "User not active!!!" });
            return;
        }
        let isPasswordMatched = await bcrypt.compare(reqBody.password, userObj.password);
        if (!isPasswordMatched) {
            callback({ success: false, msg: "Invalid username or password!!" });
            return;
        }
        callback({ success: true, msg: "LoggedIn!!!" });
        return;
    }
    callback({ success: false, msg: "Invalid username or password!!" });
}

module.exports = {
    insertUser,
    getAllUsers,
    getUserById,
    updatePassword,
    deleteUser,
    login
}