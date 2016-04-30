import * as config from './config'
import * as server from './server'
import * as database from './database'

database.connect()
  .then(function() {
    console.log('Connected to database...')

    server.Instance.listen(config.port, () => {
      console.log(`Server listening on port ${config.port}...`)
    })
  })