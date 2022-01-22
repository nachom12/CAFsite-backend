require('dotenv').config();

const config = {
  port: process.env.PORT,
  dbUrl: process.env.DB_URL
}

module.exports = { config };