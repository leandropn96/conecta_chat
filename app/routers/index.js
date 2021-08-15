module.exports = function(application){
 application.get('/', function(req, resp){
    resp.render('index')
 })
}