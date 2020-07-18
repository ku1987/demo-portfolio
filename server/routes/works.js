const Router = require('koa-router');
const { uuid } = require('uuidv4');
const common = require('./common');
const worksQuery = require('../db/queries/works');
const { isValidWork } = require('../validation/works');

const router = new Router();

router.get('/works', async (ctx) => {
  try {
    const works = await worksQuery.getAllWorks();
    if (!works) {
      common.handleError(ctx, 404, 'Works not found.');
      return;
    }
    ctx.body = {
      status: 'success',
      works,
    };
  } catch (error) {
    console.error(error.message);
    common.handleInternalError(ctx);
  }
});

router.get('/works/:id', async (ctx) => {
  const { id } = ctx.params;
  try {
    const work = await worksQuery.getSingleWork({ id });
    if (!work) {
      common.handleError(ctx, 404, 'Work of this ID not found.');
      return;
    }
    ctx.body = {
      status: 'success',
      work,
    };
  } catch (error) {
    console.error(error.message);
    common.handleInternalError(ctx);
  }
});

router.post('/works', async (ctx) => {
  const workId = uuid();
  const {
    title, description, img, url, body,
  } = ctx.request.body;
  try {
    const newWork = {
      workId,
      title,
      description,
      img,
      url,
      body,
    };
    if (!isValidWork(newWork)) {
      common.handleError(ctx, 403, 'Invalid work.');
      return;
    }
    const work = await worksQuery.getSingleWork({ title });
    if (work) {
      common.handleError(ctx, 400, 'This title of work already exists.');
      return;
    }
    const record = common.generateInsertRecord(newWork);
    const data = await worksQuery.addWork(record);
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
