var {body, validationResult} = require('express-validator');

module.exports = function(application){
    application.get('/chat', function(req, res){
        application.app.controllers.chat.chat(application, req, res)
    })

    application.post('/chat', 
        body('apelido', "Apelido é Obrigatorio").notEmpty(),
        function(req, res){
        application.app.controllers.chat.includeChat(application, req, res)
    })
}