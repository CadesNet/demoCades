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


module.exports = User;
