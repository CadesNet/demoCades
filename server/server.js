var express = require('express');
var app = express();
var Sequelize = require('sequelize');
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


// return sequelize.sync().then(function(){
//   return ;
// })


app.use(express.static(__dirname + '../../app'));

app.get('/students', function (req, res) {
  res.send('Aqui deberian aparecer los estudiantes');
});

app.get('/users/signup', function(req, res){
   res.send('Cualquier cosa');
});

app.post('/user/new', function(req, res){
    res.send('POST request to homepage');

    // console.log('llego a user new');
    // var user = req.params.user;

    // User.findOrCreate(user)
    // .spread(function(user, created) {
    // console.log(user.get({
    //   plain: true
    // })));
    // console.log(created)


});

app.get('/api/users', function(req, res){
    console.log('api de users');
    res.json({data: 'api de users'});
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
