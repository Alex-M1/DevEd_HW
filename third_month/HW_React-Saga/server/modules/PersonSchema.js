const { Schema, model } = require('mongoose');

const schema = new Schema({
  name: {
    type: String,
    required: true,
  },
  age: {
    type: String,
    default: '-',
  },
  phone: {
    type: String,
    default: '-',
  },
  email: {
    type: String,
    default: '-',
  },
  company: {
    type: String,
    default: '-',
  },
}, { collection: 'persons' });

const PersonSchema = model('Pesons', schema);

module.exports = PersonSchema;
