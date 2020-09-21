exports.up = function (knex, Promise) {
    return knex.schema.createTable("guests", (table) => {
      table.uuid("id").primary();
      table.string("guest_name");
      table.string("party_id");
      table.string("group_id");
      table.timestamps();
    });
  };
  
  exports.down = function (knex, Promise) {
    return knex.schema.dropTable("guests");
  };
  