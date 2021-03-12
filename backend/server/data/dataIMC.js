const database = require('../infra/database');

exports.getIMCs = function () {
	return database.query('select * from IMC');
};

exports.createIMC = function(dados){
    return database.query('INSERT INTO IMC(NOME,CPF,ALTURA,PESO,IMC,DESCRICAO) VALUES ($1, $2, $3, $4, $5, $6)', [dados.nome,dados.cpf, dados.altura, dados.peso, dados.imc, dados.desc]);
};

exports.searchIMC = function(cpf){
    return database.query('SELECT * FROM IMC WHERE cpf = $1', [cpf]);
};