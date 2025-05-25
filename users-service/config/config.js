module.exports = {
  development: {
    username: process.env.DB_USER || 'duda',
    password: process.env.DB_PASSWORD || 'marylemos10',
    database: process.env.DB_NAME || 'users_service_db',
    host: process.env.DB_HOST || '127.0.0.1',
    port: process.env.DB_PORT || 5432,
    dialect: 'postgres'
  },

  test: {
    username: process.env.DB_USER || 'duda',
    password: process.env.DB_PASSWORD || 'marylemos10',
    database: process.env.DB_NAME || 'users_service_db',
    host: process.env.DB_HOST || '127.0.0.1',
    port: process.env.DB_PORT || 5432,
    dialect: 'postgres'
  },

  production: {
    username: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    host: process.env.DB_HOST,
    port: process.env.DB_PORT || 5432,
    dialect: 'postgres'
  }
};
