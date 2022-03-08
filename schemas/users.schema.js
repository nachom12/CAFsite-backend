const Joi = require('joi');

const userName = Joi.string();
const password = Joi.string();
const role = Joi.string().valid('admin', 'user');

const createUserSchema = Joi.object({
  userName: userName.required(),
  password: password.required(),
  role: role.required()
});

const updateUserSchema = Joi.object({
  userName,
  password,
  role
});

module.exports = { createUserSchema, updateUserSchema };