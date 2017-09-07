import * as express from 'express'
import * as bodyParser from 'body-parser'
import * as logger from 'morgan'
import * as cors from 'cors'

var app = express()

app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(logger('dev'))

app.use('/docs', express.static('docs'))

app.route('/').get(function(req: express.Request, res: express.Response) {
  res.send('Server is up and running. Web app is hosted <a href="http://localhost:4200">here</a>.')
})

export default app