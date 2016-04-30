import * as http from 'http'
import * as url from 'url'
import * as path from 'path'
import * as express from 'express'
import * as bodyParser from 'body-parser'
import * as logger from 'morgan'

var app = express()

// Configuration
// TODO: configure Angular Universal - https://github.com/angular/universal
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(logger('dev'))
app.use('/', express.static(path.join(__dirname, '../public')))

export var Instance = http.createServer(app)
