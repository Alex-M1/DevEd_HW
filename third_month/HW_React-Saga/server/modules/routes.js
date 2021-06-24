const { Router } = require('express');
const PersonController = require('./PersonController');

const route = Router();
const person = new PersonController();
route.get('/', person.getPerson);
route.post('/', person.postPerson);
route.put('/', person.putPerson);
route.delete('/', person.deletPerson);

module.exports = route;
