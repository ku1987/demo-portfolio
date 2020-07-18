const joi = require('@hapi/joi');

const schema = joi.object({
  workId: joi.string().required(),
  title: joi.string().required(),
  description: joi.string().required(),
  img: joi.string(),
  url: joi.string(),
  body: joi.string().required(),
});

const isValidWork = (work) => {
  const result = schema.validate(work);
  if (result.error) {
    console.log(result.error.details[0].message);
    return false;
  }
  return true;
};

module.exports = {
  isValidWork,
};
