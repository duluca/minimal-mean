import { Instance } from '../src/server'
import { connect } from 'document-ts'

const MongoInMemory = require('mongo-in-memory')

describe('Integration', function() {

  var mongoServerInstance
  const port = 28000

  beforeEach(done => {
    jasmine.DEFAULT_TIMEOUT_INTERVAL = 10000
    mongoServerInstance = new MongoInMemory(port)
    mongoServerInstance.start((error, config) => {
      done()
    })
  })

  afterEach(done => {
    mongoServerInstance.stop((error) => {
      done()
    })
  })

  // See DocumentTS for more complete examples of integration tests
  // https://github.com/duluca/DocumentTS/tree/master/tests
  it('should open a connection with a dummy database name', async done => {
    let uri = mongoServerInstance.getMongouri("testDb")
    await connect(uri)
    done()
  })
})
