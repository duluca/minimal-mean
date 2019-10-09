import * as bodyParser from 'body-parser'
import * as cors from 'cors'
import * as express from 'express'
import * as logger from 'morgan'
import * as swaggerUi from 'swagger-ui-express'

import { specs } from './docs-config'

const app = express()

app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(logger('dev'))

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(specs))

app.route('/').get(function(req: express.Request, res: express.Response) {
  res.send(`
    <style>
    code {
      border: 1px solid #000033;
      background-color: #EEE;
      padding: 10px;
      font: 300 12px tahoma;
      display:block;
    }
    </style>
    Server is up and running!<br>
    <br>
    <em>Interactive</em> API Documentation can be found at <a href="/api-docs">/api-docs</a>.<br>
    <br>
    If you used <b>docker-compose up</b>, Angular App should be at <a href="http://localhost:8080">http://localhost:8080</a>.<br>
    <br>
    To create users either use <a href="/api-docs">/api-docs</a> or <a href="https://www.getpostman.com/">Postman</a> (or similar) and POST the following data:<br>
    <code>
    POST http://localhost:3000/user<br>
    Headers: Content-Type application/json<br>
    Body: raw<br>
    {<br>
      "email": "vader@bronies.com",<br>
      "firstName": "Darth",<br>
      "lastName": "Vader",<br>
      "role": "Night Manager"<br>
    }<br>
    </code>
    <br>
    More information can be found on GitHub at <a href="https://github.com/duluca/minimal-mean">https://github.com/duluca/minimal-mean</a>.<br>
    <br>
    <b>Powered by</b> <a href="https://www.npmjs.com/package/document-ts">DocumentTS</a>.<br>`)
})

export default app
