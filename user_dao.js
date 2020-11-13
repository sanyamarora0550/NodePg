const { db } = require('./db/db');

let insertUser = (data) => {
    let query = 'INSERT into public.user (user_name,gender,age ) VALUES ($1,$2,$3) ';
    return db.query(query, [data.user_name, data.gender, data.age]);
}

let getAllUsers = () => {
    let query = 'SELECT * FROM public.user WHERE is_active = true '
    return db.query(query, []);
}

let getUserById = (user_id) => {
    let query = 'SELECT * FROM public.user WHERE user_id = $1 AND is_active = true'
    return db.query(query, [user_id]);
}

module.exports = {
    insertUser,
    getAllUsers,
    getUserById
}