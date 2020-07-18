exports.up = (knex) => knex.schema.createTable('works', (table) => {
  table.increments();
  table.string('workId').notNullable().unique();
  table.string('title').notNullable().unique();
  table.string('description').notNullable();
  table.string('img');
  table.string('url');
  table.text('body');
  table.integer('createdAt').notNullable();
  table.integer('deletedAt').notNullable();
});

exports.down = (knex) => knex.schema.dropTable('works');
