exports.up = function (knex, Promise) {
  return knex.schema.createTable("user_parties", (table) => {
    table.string("user_id");
    table.string("party_id");
  });
};

exports.down = function (knex, Promise) {
  return knex.schema.dropTable("user_parties");
};
