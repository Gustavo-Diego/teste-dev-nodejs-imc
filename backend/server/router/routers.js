const express = require('express');
const router = express.Router();
const IMCservice = require('../service/IMCservice');

router.get('/imcs', async function (req, res) {
	const imcs = await IMCservice.getIMCs();
	res.json(imcs);
});

router.post('/fazerIMC', async function (req, res) {
    const dados = req.body;
    
    const imc = dados.peso / (dados.altura * dados.altura)

    var desc = ''

    if( imc < 18.5){
        desc = 'Abaixo do peso'
    } else if( imc > 18.5 && imc < 24.9 ){
        desc = 'Peso normal'
    } else if( imc > 25 && imc < 29.9 ){
        desc = 'Sobrepeso'
    } else if( imc > 30 && imc < 34.9 ){
        desc = 'Obesidade grau 1'
    } else if( imc > 35 && imc < 39.9 ){
        desc = 'Obesidade grau 2'
    } else if( imc > 40 ){
        desc = 'Obesidade grau 3'
    } 

    dados.imc = imc
    dados.desc = desc

    await IMCservice.createIMC(dados);
    res.json(dados)
});

router.post('/buscarPorCPF', async function (req, res) {
    const dados = req.body;
    const imcProCPF = await IMCservice.searchIMC(dados.cpf);
    res.json(imcProCPF)
});

module.exports = router;