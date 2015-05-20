var express = require('express');
var app = express();
var Sequelize = require('sequelize');
var sequelize = new Sequelize('demoCades', 'root', '');


app.use(express.static(__dirname + '../../app'));





app.get('/students', function (req, res) {
  res.send('Aqui deberian aparecer los estudiantes');
});

app.get('/users/signup', function(req, res){
   res.send('Cualquier cosa');


});


app.get('/api/students', function (req, res) {
  res.json({estudiantes: {nombre: 'rene', apellido:'Polo'}});
});

app.get('/api/users', function (req, res) {
   var usuarios = [];
   User.findAll()
  .then(function(respuesta){
  	usuarios = respuesta;
  })

  res.json({data: respuesta});
});


var server = app.listen(3000, function () {

  var host = server.address().address;
  var port = server.address().port;

  console.log('Example app listening at http://%s:%s', host, port);

});
