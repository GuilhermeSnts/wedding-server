exports.up = function (knex, Promise) {
  return knex.schema.createTable("users", (table) => {
    table.uuid("id").primary();
    table.timestamps();
  });
};

exports.down = function (knex, Promise) {
  return knex.schema.dropTable("users");
};
