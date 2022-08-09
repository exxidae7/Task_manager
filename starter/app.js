const express  = require('express')
const app = express()
const task = require('./routes/tasks')
const connectDB = require('./db/connect')
require('dotenv').config()
const notFound = require('./middleware/not-found')
const errorHanlers   = require('./middleware/error-hanler')

app.use(express.static('./public'))
app.use(express.json())




app.use('/api/v1/tasks', task)
app.use(notFound)
app.use(errorHanlers)
const port = 3000
const start  = async () => {
     try {
          await connectDB(process.env.MONGO_URI)
          app.listen(port , console.log(`Server is listening on port ${port}`))
     }
     catch (error) {
          console.log(`Error connecting to server: ${error.message}`)
     }
}

start()