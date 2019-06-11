import * as http from 'http'

import app from './app'
import userRouter from './controllers/userController'

// Configure all routers here
app.use('/user', userRouter)

export var Instance = http.createServer(app)
