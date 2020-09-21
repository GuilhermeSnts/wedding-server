exports.up = function (knex, Promise) {
    return knex.schema.createTable("guest_groups", (table) => {
      table.uuid("id").primary();
      table.string("group_name");
      table.string("party_id");
      table.timestamps();
    });
  };
  
  exports.down = function (knex, Promise) {
    return knex.schema.dropTable("guest_groups");
  };
  