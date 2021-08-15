// Inportando o modulo do framework express */
var express = require('express')

// Inportando o modulo consign */
var consign = require('consign')

// Inportando o modulo body-parser 
var bodyParser = require('body-parser')

// Iniciando o objeto express
var app = express()

//Setar as variavesi 'views engine' e 'views' do express
app.set('views engine','ejs');
app.set('views', './app/views')

//Configuração do middleware express.static
app.use(express.static('./app/public'))

//Configurando o middlewarw body-parser
app.use(bodyParser.urlencoded({extended: true}))

//Efetua o autoload das rotas, views e dos controllers no objeto app
consign()
    .include('app/routers')
    .then('app/models')
    .then('app/controllers')
    .into(app);

//Exportando o objeto app
module.exports = app