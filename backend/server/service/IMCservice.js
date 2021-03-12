const dataIMC = require('../data/dataIMC');

exports.getIMCs = function() {
	return dataIMC.getIMCs();
};

exports.createIMC = async function(dados) {
    return await dataIMC.createIMC(dados);
}

exports.searchIMC = function(cpf) {
    return dataIMC.searchIMC(cpf);
}