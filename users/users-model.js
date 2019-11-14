const db = require('../database/dbConfig.js');

module.exports = {
    add, 
    find,
    findBy,
    findById,
}

async function add(user) {
console.log("inside add", user);
const [id] = await db('users').insert(user)
console.log(id);
return findById(id)
}

function find() {
 return db('users') 
 .select('id', 'username', 'password')  
}

function findBy(filter) {
return db('users') 
.where(filter) 
}

function findById() {
return db('users')
.where({ id })
.first(); 
}