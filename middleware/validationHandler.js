const boom = require('@hapi/boom');

function validationHandler(schema, property) {
  return (req, res, next) => {
    const data = req[property];
    const { error } = schema.validate(data, { abortEarly: false });
    if (error) {
      next(boom.badRequest(error));
    }
    next();
  }
};

function roleValidation(roles) {
  return (req, res, next) => {
    if (roles.includes(req.user.role)) {
      next();
    } else {
      next(boom.badRequest('not an allowed role'));
    }
  }
}

module.exports = {
  validationHandler,
  roleValidation
};