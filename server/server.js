
import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import { pool } from './db.js'

dotenv.config()

const app = express()
const PORT = process.env.PORT || 5000

app.use(cors({ origin: 'http://localhost:5173' }))
app.use(express.json())

app.get('/api/health', async (_req, res) => {
  try {
    const result = await pool.query(
      'SELECT current_database() AS database, NOW() AS server_time'
    )

    res.json({
      status: 'success',
      message: 'JobSuite backend connected to PostgreSQL!',
      ...result.rows[0],
    })
  } catch (error) {
    console.error('Database connection failed:', error.message)
    res.status(500).json({
      status: 'error',
      message: 'Database connection failed. Check your configuration.',
    })
  }
})

app.listen(PORT, () => {
  console.log(`JobSuite backend running at http://localhost:${PORT}`)
})
