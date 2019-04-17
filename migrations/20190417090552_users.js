
exports.up = function (knex, Promise) {
  return knex.schema, createTable('users', function (table) {
    table.increments();
    table.strings('username').notNullable().unique();
    table.strings('email').notNullable().unique();
    table.strings('timezone').notNullable();
    table.strings('password_digest').notNullable();
    table.timestamps();
  });
};

exports.down = function (knex, Promise) {
  return knex.schema.dropTable('users');
};
