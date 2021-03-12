# teste-dev-nodejs-imc

../teste-dev-nodejs-imc/backend/server/server.js para subir o servidor, na pasta server/infra está os dados de conexão com o banco: 
const db = pgp({
	user: 'postgres',
	password: 'banco123',
	host: 'localhost',
	port: 5432,
	database: 'IMC'
});

No banco de dados eu criei uma tabela com PK outo incremente

node ou nodemon server para rodar o backend, porta 4040

../teste-dev-nodejs-imc/imc para subir a aplicação angular, com o servidor funcionando só testar. 

ng serve para rodar o frontend, porta 4200
