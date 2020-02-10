const Koa = require('koa');
const Router = require('koa-router');
const serve = require('koa-static');

const router = new Router();

router.get('/', async (ctx, next) => {
  ctx.body = 'accessed to Home';
  console.log(ctx.response.type);
  
});
router.get('/a', async (ctx, next) => {
  ctx.body = 'accessed to /a ';
});
router.get('/b', async (ctx, next) => {
  ctx.body = 'accessed to /b ';
});
router.get('/b/:id', async (ctx, next) => {
  ctx.response.status = 200;
  ctx.body = `accessed to /b/${ctx.params.id} `;
});
const app = new Koa();
app
  .use(router.routes())
  .use(router.allowedMethods())
  .use(serve('./public'));

app.listen(3000);
