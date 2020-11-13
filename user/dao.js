const { db } = require('../db_config/db');

let insertUser = (data) => {
    let query = 'INSERT into public.user (user_name,gender,age,password ) VALUES ($1,$2,$3,$4) ';
    return db.query(query, [data.user_name, data.gender, data.age, data.password]);
}

let getAllUsers = () => {
    let query = 'SELECT * FROM public.user WHERE is_active = true '
    return db.query(query, []);
}

let getUserById = (user_id) => {
    let query = 'SELECT * FROM public.user WHERE user_id = $1 AND is_active = true'
    return db.query(query, [user_id]);
}

let updatePassword = (data) => {
    let query = 'UPDATE public.user SET password = $2 WHERE user_id = $1';
    return db.query(query, [data.user_id, data.password]);
}

let getUserByUsername = (user_name) => {
    let query = 'SELECT * FROM public.user where user_name = $1 AND is_active = true';
    return db.query(query, [user_name]);
}

let deleteUser = (user_id) => {
    let query = 'UPDATE public.user SET is_active = false WHERE user_id = $1';
    return db.query(query, [user_id]);
}

module.exports = {
    insertUser,
    getAllUsers,
    getUserById,
    updatePassword,
    getUserByUsername,
    deleteUser
}