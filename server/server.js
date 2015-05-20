var express = require('express');
var app = express();
var Sequelize = require('sequelize');
var sequelize = new Sequelize('demoCades', 'root', '');


app.use(express.static(__dirname + '../../app'));



var User = sequelize.define('User', {
  id: Sequelize.INTEGER,
  first_name: Sequelize.STRING,
  last_name: Sequelize.STRING,
  email: Sequelize.STRING,
  createdAt:{
  	type: Sequelize.DATE,
  	field:'created'
  },
  updatedAt:{
  	type: Sequelize.DATE,
  	field:'modified'
  }
});


return sequelize.sync().then(function(){
	return;
})




app.get('/students', function (req, res) {
  res.send('Aqui deberian aparecer los estudiantes');
});

app.get('/users/signup', function(req, res){
   res.send('Cualquier cosa');

     return User.create({
       first_name: 'janedoe',
       last_name: 'Vargas'
     });
   }).then(function(jane) {
     console.log(jane.get({
       plain: true
     }))

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
