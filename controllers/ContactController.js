const Contact = require("../db/models").Contact;

module.exports = class ContactController {

  constructor(){
    this.contacts = [];
    this.addContactQuestions = [
  {
    type: "input",
    name: "name",
    message: "Contact's name - ",
    //The answer will be stored in the argument val and we are checking to make sure it isn't the empty string which would signal that no answer was typed in
    validate(val){
      return val !== "";
    }
  },
  {
    type: "input",
    name: "phone",
    message: "Contact's phone number - ",
    validate(val){
      return val !== "";
    }
  },
  {
    type: "input",
    name: "email",
    message: "Contact's email - ",
    validate(val){
      return val !== "";
    }
  }
];
  }

  addContact(name, phone, email) {
    return Contact.create({name, phone, email})
}

  getContacts(){
  return Contact.findAll()
}

}
