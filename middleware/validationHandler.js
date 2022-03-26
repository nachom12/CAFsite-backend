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
      next(boom.unauthorized('not an allowed role'));
    }
  }
}

function userValidation(){
  return (req, res, next) => {
    console.log('COMPARE ', req.params.id, ' LOL ', req.user.id);
    if (req.params.id == req.user.id) {
      next();
    } else {
      next(boom.unauthorized('not the correct user'));
    }
  }
}

module.exports = {
  validationHandler,
  roleValidation,
  userValidation
};