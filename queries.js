require('dotenv').config();
const Pool = require('pg').Pool

const pool = new Pool({
  user: process.env.DB_USER,
  host: process.env.DB_HOST,
  database: process.env.DB_DATABASE,
  password: process.env.DB_PASSWORD,
  port: process.env.DB_PORT,
})

const addVisit = (ip, userAgent, acceptedLanguage, referer, timestamp) => {
  
  pool.query('INSERT INTO visits (ip, user_agent, accepted_language, referer, timestamp_visit) VALUES ($1, $2, $3, $4, $5)', 
    [ip, userAgent, acceptedLanguage, referer, timestamp], 
    (error, result) => {
      if (error) {
        throw error
      }
    })
}

module.exports = {
  addVisit
}