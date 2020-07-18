/**
 *
 * @param {Context} ctx Context.
 * @param {number} errorCode Error code.
 * @param {string} message Error message.
 */
const handleError = (ctx, errorCode, message) => {
  ctx.log.error(`Server error: ${message} url: ${ctx.request.url}`, ctx.request.body, ctx.req.headers);
  ctx.body = {
    status: 'failure',
    data: {
      code: errorCode,
      message,
    },
  };
};

const handleInternalError = (ctx) => handleError(ctx, 500, 'Internal server error.');

/**
 * @param {object} record Object to be registered to the database.
 * @returns {object} Object added created date (UNIX timestamp).
 */
const generateInsertRecord = (record) => {
  const createdAt = Math.floor(Date.now() / 1000);
  const deletedAt = 0;
  return { ...record, createdAt, deletedAt };
};

module.exports = {
  handleError,
  handleInternalError,
  generateInsertRecord,
};
