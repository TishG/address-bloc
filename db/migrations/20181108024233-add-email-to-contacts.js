'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.addColumn('Contacts','email',{
      type: Sequelize.STRING,
      allowNull: true
    }
  )
  .then(() => {
         console.log("Column added successfully!");
       })
    .catch((err) => {
    console.log(err);
  });
},

  down: (queryInterface, Sequelize) => {
    return queryInterface.removeColumn('Contacts','email')
    .then(() => {
         console.log("Column removed successfully!");
       })
    .catch((err) => {
    console.log(err);
  });
  }
}
