const { CONTACTS } = require('../tables');

exports.up = (knex) => knex.schema.alterTable(CONTACTS, (table) => {
  table.integer('deletedAt').notNullable().defaultTo(0);
});

exports.down = (knex) => knex.schema.alterTable(CONTACTS, (table) => {
  table.dropColumn('deletedAt');
});
