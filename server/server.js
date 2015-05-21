var express = require('express');
var app = express();
var Sequelize = require('sequelize');
var bodyParser = require('body-parser');
var sequelize = new Sequelize('demoCades', 'root', '');




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


app.use(express.static(__dirname + '../../app'));
app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({ extended: true })); // support encoded bodies


app.get('/students', function (req, res) {
  res.send('Aqui deberian aparecer los estudiantes');
});

app.get('/users/signup', function(req, res){
   res.send('Cualquier cosa');
});

app.post('/user/new', function(req, res){
    res.send('POST request to homepage');
    var theName  = req.body.nombre;
    var theLast = req.body.apellido;
    var theMail = req.body.email;


    console.log('llego a user new con: ', req.body);

   User.sync({force: true}).then(function () {
     // Table created
     return User.create({
       first_name: theName,
       last_name: theLast,
       email: theMail
     });
   });
  


});

app.get('/api/users', function(req, res){
    console.log('api de users');
    User.findAll().then(function(users) {
      res.json({data: users});
    })
})

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
