const Router = require('koa-router');
const { uuid } = require('uuidv4');
const contactsQuery = require('../db/queries/contacts');
const common = require('./common');

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
      data: {
        contacts,
      },
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
      data: {
        contact,
      },
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
    // TODO contactId validation
    const newContract = {
      contactId,
      name,
      mail,
      content,
    };
    const record = common.generateInsertRecord(newContract);
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
