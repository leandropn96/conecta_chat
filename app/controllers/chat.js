var {body, validationResult} = require('express-validator')
module.exports.chat = function(application, req, res){
    res.render('chat')
}

module.exports.includeChat = function(application, req, res){
    var errors = validationResult(req).isEmpty()
    if(!errors){
        res.render('index', {validacao: validationResult(req).errors});
        return
    }
    return
    
    res.render('chat')
}