const inquirer = require('inquirer');
const ContactController = require("./ContactController");

module.exports = class MenuController {
  constructor(){
    this.mainMenuQuestions = [
      {
       type: "list",
        name: "mainMenuChoice",
        message: "Please choose from an option below: ",
        choices: [
          "Add new contact",
          "View all contacts",
          "Request date and time",
          "Exit"
        ]
      }
    ];
    this.book = new ContactController();
  }

  main() {
    console.log(`Welcome to AddressBloc!`);
      inquirer.prompt(this.mainMenuQuestions).then((response) => {
        switch(response.mainMenuChoice){
          case "Add new contact":
            this.addContact();
            break;
          case "View all contacts":
            this.getContacts();
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
    inquirer.prompt(this.book.addContactQuestions).then((answers) => {
      this.book.addContact(answers.name, answers.phone, answers.email).then((contact) => {
        console.log("Contact added successfully!");
        this.main();
      }).catch((err) => {
        console.log(err);
        this.main();
      });
    });
  }

  getDate() {
    var d = new Date();
    console.log(`
     Date: ${d.toDateString()}
     Time: ${d.toLocaleTimeString('en-US')}
     `);
    this.main();
  }

  getContacts() {
  this.clear();
  this.book.getContacts().then((contacts) => {
    for (let contact of contacts) {
      console.log(`
      name: ${contact.name}
      phone number: ${contact.phone}
      email: ${contact.email}
      ---------------`
      );
    }
    this.main();
  }).catch((err) => {
    console.log(err);
    this.main();
  });
}

  getContactCount(){
   return this.contacts.length;
}

  remindMe() {
    return "Learning is a life-long pursuit."
  }

  exit() {
    console.log('Thanks for using AddressBloc!');
    process.exit();
  }


}
