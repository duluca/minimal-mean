import * as bodyParser from 'body-parser'
import * as cors from 'cors'
import * as express from 'express'
import * as logger from 'morgan'

const app = express()

app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(logger('dev'))

app.use('/docs', express.static('docs'))

app.route('/').get(function(req: express.Request, res: express.Response) {
  res.send(
    'Server is up and running. Web app is hosted <a href="http://localhost:8080">here</a>.'
  )
})

export default app
