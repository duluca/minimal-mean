import * as config from './config'
import * as server from './server'
import * as database from './database'

async function start() {
  await database.connectAsync()
  console.log('Connected to database asyncly...')

  server.Instance.listen(config.port, () => {
    console.log(`Server listening on port ${config.port}...`)
  })
}

start()