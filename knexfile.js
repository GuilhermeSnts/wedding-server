// Update with your config settings.

module.exports = {
  development: {
    client: "pg",
    connection: {
      host: "localhost",
      port: 5432,
      database: "wedding_development",
      user: "postgres",
      password: "postgres",
    },
    pool: {
      min: 2,
      max: 10,
    },
    migrations: {
      tableName: "knex_migrations",
    },
  },

  staging: {
    client: "pg",
    connection: {
      host: "localhost",
      database: "wedding_staging",
      user: process.env.DB_STAGING_USER,
      password: process.env.DB_STAGING_PASSWORD,
    },
    pool: {
      min: 2,
      max: 10,
    },
    migrations: {
      tableName: "knex_migrations",
    },
  },

  production: {
    client: "pg",
    connection: {
      host: process.env.DB_PRODUCTION_HOST,
      port: 5438,
      database: "wedding",
      user: process.env.DB_PRODUCTION_USER,
      password: process.env.DB_PRODUCTION_PASSWORD,
    },
    pool: {
      min: 2,
      max: 10,
    },
    migrations: {
      tableName: "knex_migrations",
    },
  },
};
