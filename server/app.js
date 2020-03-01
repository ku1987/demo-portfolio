const Koa = require('koa');
const bodyParser = require('koa-bodyparser');
// const serve = require('koa-static');
const json = require('koa-json');
// const path = require('path');
const cors = require('@koa/cors');

const indexRouter = require('./routes/index');

const config = require('./config');

const { port } = config;
const app = new Koa();

// app.use(bodyParser);
app.use(json());
app.use(cors());
app.use(bodyParser());
app.use(indexRouter.routes());

app.listen(port, () => {
  console.log(`Server running on port ${port}...`);
});
