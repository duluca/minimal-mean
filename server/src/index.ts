import * as document from 'document-ts'
import * as config from './config'
import * as server from './server'

async function start() {
  console.log('Starting server: ')
  console.log(`isProd: ${config.isProd}`)
  console.log(`port: ${config.port}`)
  console.log(`mongoUri: ${config.mongoUri}`)

  try {
    await document.connect(config.mongoUri, config.isProd)
    console.log('Connected to database!')
  } catch(ex) {
    console.log(`Couldn't connect to a database: ${ex}`)
  }

  server.Instance.listen(config.port, () => {
    console.log(`Server listening on port ${config.port}...`)
  })
}

start()