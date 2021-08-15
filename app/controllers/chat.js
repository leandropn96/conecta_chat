module.exports.chat = function(application, req, res){
    res.render('chat')
}

module.exports.includeChat = function(application, req, res){
    res.send('<p>Oṕa vamos já chegar aqui</p>')
}