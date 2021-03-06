require('dotenv').config();

const config = {
  port: process.env.PORT,
  dbUrl: process.env.DATABASE_URL,
  secret: process.env.secret,
  isProduction: process.env.NODE_ENV === 'production'
}

module.exports = { config };