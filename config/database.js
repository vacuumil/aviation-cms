// config/database.js
const path = require('path');

module.exports = ({ env }) => ({
  connection: {
    client: 'postgresql',
    connection: {
      connectionString: env('DATABASE_URL'),
      host: env('DATABASE_HOST', 'localhost'),
      port: env.int('DATABASE_PORT', 5432),
      database: env('DATABASE_NAME', 'strapi'),
      user: env('DATABASE_USERNAME', 'strapi'),
      password: env('DATABASE_PASSWORD', 'strapi'),
      ssl: env.bool('DATABASE_SSL', false) && {
        rejectUnauthorized: env.bool('DATABASE_SSL_SELF', false),
      },
    },
    pool: {
      min: 0,
      max: 10,
      acquireTimeoutMillis: 60000,
      idleTimeoutMillis: 30000
    },
    debug: false,
  },
});