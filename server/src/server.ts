import * as http from 'http'

// Order of instantiation is important
import app from './app'
require('./controllers')

export var Instance = http.createServer(app)