import * as http from 'http'

import app from './app'
import userRouter from './routes/userRouter'

// Configure all routers here
app.use('/user', userRouter)

export var Instance = http.createServer(app)
