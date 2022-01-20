const Joi = require('joi');

const firstName = Joi.string();
const lastName = Joi.string();
const age = Joi.number().integer().min(0);
const placeOfBirth = Joi.string();
const position = Joi.string();

const createPlayerSchema = Joi.object({
  firstName: firstName.required(),
  lastName: lastName.required(),
  age: age,
  placeOfBirth: placeOfBirth,
  position: position
});

const updatePlayerSchema = Joi.object({
  firstName: firstName,
  lastName: lastName,
  age: age,
  placeOfBirth: placeOfBirth,
  position: position
});

module.exports = { createPlayerSchema, updatePlayerSchema }
