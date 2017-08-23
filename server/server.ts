import * as http from 'http'
import * as url from 'url'
import * as path from 'path'
import * as express from 'express'
import * as bodyParser from 'body-parser'
import * as logger from 'morgan'
import * as cors from 'cors'

var app = express()

// Configuration
// TODO: configure Angular Universal - https://github.com/angular/universal
app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(logger('dev'))

app.route('/').get(function(req: express.Request, res: express.Response) {
  res.send('server works!')
})

export var Instance = http.createServer(app)
