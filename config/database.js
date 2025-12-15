// config/database.js
module.exports = ({ env }) => {
  // Для разработки используем SQLite
  if (env('NODE_ENV') === 'development') {
    return {
      connection: {
        client: 'sqlite',
        connection: {
          filename: env('DATABASE_FILENAME', '.tmp/data.db'),
        },
        useNullAsDefault: true,
      },
    };
  }

  // Для продакшена используем PostgreSQL (Railway)
  return {
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
      pool: { min: 0 },
    },
  };
};