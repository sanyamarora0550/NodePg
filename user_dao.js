const { db } = require('./db/db');

let insertUser = (data) => {
    let query = 'INSERT into public.user (user_name,gender,age ) VALUES ($1,$2,$3) ';
    return db.query(query, [data.user_name, data.gender, data.age]);
}

let getAllUsers = () => {
    let query = 'SELECT * FROM public.user '
    return db.query(query, []);
}

module.exports = {
    insertUser,
    getAllUsers
}