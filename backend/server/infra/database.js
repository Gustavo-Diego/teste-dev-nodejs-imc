const pgp = require('pg-promise')();
const db = pgp({
	user: 'postgres',
	password: 'banco123',
	host: 'localhost',
	port: 5432,
	database: 'IMC'
});

module.exports = db;