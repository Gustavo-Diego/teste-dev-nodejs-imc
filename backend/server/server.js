const express = require('express');
const cors = require('cors')
const bodyParser = require('body-parser')

const app = express();

app.use(cors())

app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())

app.use('/', require('./router/routers'));

app.listen(4040, ()=>{
    console.log(`o servidor está rodando na por http://localhost:4040`)
});