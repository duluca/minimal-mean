import * as config from './config'
import * as server from './server'
import * as document from 'document-ts'

async function start() {
  await document.connect(config.mongoUri)
  console.log('Connected to database asyncly...')

  server.Instance.listen(config.port, () => {
    console.log(`Server listening on port ${config.port}...`)
  })
}

start()