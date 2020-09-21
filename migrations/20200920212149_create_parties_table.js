exports.up = function (knex, Promise) {
  return knex.schema.createTable("parties", (table) => {
    table.uuid("id").primary();
    table.string("party_name");
    table.string("owner_id");
    table.string("latitude");
    table.string("longitude");
    table.timestamps();
  });
};

exports.down = function (knex, Promise) {
  return knex.schema.dropTable("parties");
};
