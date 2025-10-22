const { validationResult } = require("express-validator");
module.exports = (validator) => {
  return async (req, res, next) => {
    await Promise.all(validator.map((validate) => validate.run(req)));
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({
        error: errors.array(),
      });
    }
    next();
  };
};
