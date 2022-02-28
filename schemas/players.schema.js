const Joi = require('joi');

const firstName = Joi.string();
const lastName = Joi.string();
const age = Joi.number().integer().min(0);
const placeOfBirth = Joi.string();
const position = Joi.string();
const playingSince = Joi.number().integer().min(2010);
const number = Joi.number().integer().min(1);
const image = Joi.string();

const createPlayerSchema = Joi.object({
  firstName: firstName.required(),
  lastName: lastName.required(),
  age: age,
  placeOfBirth: placeOfBirth,
  position: position,
  playingSince: playingSince,
  number: number,
  image: image
});

const updatePlayerSchema = Joi.object({
  firstName: firstName,
  lastName: lastName,
  age: age,
  placeOfBirth: placeOfBirth,
  position: position,
  playingSince: playingSince,
  number: number,
  image: image
});

module.exports = { createPlayerSchema, updatePlayerSchema }
