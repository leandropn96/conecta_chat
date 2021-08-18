// Importando as configurações do servidor
var app = require('./config/server')

//Definição da porta do app
var server = app.listen(8002, function () {
    console.log("Servidor rodando na porta 8001")
})

var io = require('socket.io')(server)

//Setando io como uma variavel de ambiente
app.set('io', io)

//criar conexão com websocket.io
io.on('connection', function (socket) {
    console.log("conexão aberta")
    socket.on('disconnect', function () {
        console.log("o usuario desconectou")
    })
    socket.on('enviarMensagem', function (data) {
        console.log("teste")
        socket.emit('addUsuario', { usuario: data.apelido, msg: data.msg })
        socket.broadcast.emit('addUsuario', { usuario: data.apelido, msg: data.msg })
    })
})