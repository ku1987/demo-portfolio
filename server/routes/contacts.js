const Router = require('koa-router');
const { uuid } = require('uuidv4');
const contactsQuery = require('../db/queries/contacts');
const common = require('./common');
const { isValidContact } = require('../validation/contact');

const router = new Router();

router.get('/contacts', async (ctx) => {
  try {
    const contacts = await contactsQuery.getAllContacts();
    if (!contacts) {
      common.handleError(ctx, 404, 'Contacts not found.');
      return;
    }
    ctx.body = {
      status: 'success',
      contacts,
    };
  } catch (error) {
    console.error(error.message);
    common.handleInternalError(ctx);
  }
});

router.get('/contacts/:contactId', async (ctx) => {
  const { contactId } = ctx.params;
  try {
    const contact = await contactsQuery.getSingleContact({ contactId });
    if (!contact) {
      common.handleError(ctx, 404, 'Contact of this ID not found.');
      return;
    }
    ctx.body = {
      status: 'success',
      contact,
    };
  } catch (error) {
    console.error(error.message);
    common.handleInternalError(ctx);
  }
});

router.post('/contacts', async (ctx) => {
  const contactId = uuid();
  const { name, mail, content } = ctx.request.body;
  try {
    const newContact = {
      contactId,
      name,
      mail,
      content,
    };
    if (!isValidContact(newContact)) {
      common.handleError(ctx, 403, 'Invalid contact.');
      return;
    }
    const record = common.generateInsertRecord(newContact);
    const data = await contactsQuery.addContact(record);
    ctx.body = {
      status: 'success',
      data,
    };
  } catch (error) {
    console.error(error.message);
    common.handleInternalError(ctx);
  }
});

module.exports = router;
