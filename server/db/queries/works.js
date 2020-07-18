const knex = require('../knex');
const TABLES = require('../tables');

const getAllWorks = async () => {
  const works = await knex(TABLES.WORKS);
  if (works.length === 0) {
    return null;
  }
  return works;
};

const getSingleWork = async (filter) => {
  const works = await knex(TABLES.WORKS)
    .where(filter);
  if (works.length === 0) {
    return null;
  }
  return works[0];
};

const addWork = async (data) => {
  await knex(TABLES.WORKS)
    .insert(data);
  return data;
};

module.exports = {
  getAllWorks,
  getSingleWork,
  addWork,
};
