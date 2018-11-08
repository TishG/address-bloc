'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.addColumn('Contacts','email',{
      type: Sequelize.STRING,
      allowNull: true
    }
  )
  .then((column) => {
         console.log("Column added successfully!");
       })
  .catch((err) => {
    console.log(err);
  });
},

  down: (queryInterface, Sequelize) => {
    return queryInterface.removeColumn('Contacts','email')
  .then((column) => {
         console.log("Column removed successfully!");
       })
  .catch((err) => {
    console.log(err);
  });
  }
}
