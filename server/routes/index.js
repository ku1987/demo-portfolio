const Router = require('koa-router');

const router = new Router();

router.get('/', async (ctx) => {
  ctx.body = { msg: 'accessed to Home' };
});
router.get('/a', async (ctx) => {
  ctx.body = 'accessed to /a ';
});
router.get('/b', async (ctx) => {
  ctx.body = 'accessed to /b ';
});
router.get('/b/:id', async (ctx) => {
  ctx.response.status = 200;
  ctx.body = `accessed to id: ${ctx.params.id} `;
});

module.exports = router;
