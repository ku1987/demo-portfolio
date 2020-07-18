const joi = require('@hapi/joi');

const schema = joi.object({
  contactId: joi.string().required(),
  name: joi.string().required(),
  mail: joi.string().required(),
  content: joi.string().required(),
});

const isValidContact = (contact) => {
  const result = schema.validate(contact);
  if (result.error) {
    console.log(result.error.details[0].message);
    return false;
  }
  return true;
};

module.exports = {
  isValidContact,
};
