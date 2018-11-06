const inquirer = require('inquirer');

module.exports = class MenuController {
  constructor(){
    this.mainMenuQuestions = [
      {
       type: "list",
        name: "mainMenuChoice",
        message: "Please choose from an option below: ",
        choices: [
          "Add new contact",
          "Request date and time",
          "Exit"
        ]
      }
    ];
    this.contacts = [];
  }

  main() {
    console.log(`Welcome to AddressBloc!`);
      inquirer.prompt(this.mainMenuQuestions).then((response) => {
        switch(response.mainMenuChoice){
          case "Add new contact":
            this.addContact();
            break;
          case "Request date and time":
            this.getDate();
            break;
          case "Exit":
            this.exit();
          default:
            console.log("Invalid input");
            this.main();
        }
      })
      .catch((err) => {
        console.log(err);
    });
  }

  clear() {
    console.log("\x1Bc");
  }

  addContact() {
    this.clear();
    console.log('Add contacts called');
    this.main();
  }

  getDate() {
    var d = new Date();
    console.log(`
     Date: ${d.toDateString()}
     Time: ${d.toLocaleTimeString('en-US')}
     `);
    this.main();
  }

  exit() {
    console.log('Thanks for using AddressBloc!');
    process.exit();
  }


}
