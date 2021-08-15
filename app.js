// Importando as configurações do servidor
var app = require('./config/server')

//Definição da porta do app
app.listen(8001, function(){
    console.log("Servidor rodando na porta 8001")
})