import { close, connect } from 'document-ts'

import { MongoMemoryServer } from 'mongodb-memory-server'

let mongoServerInstance: MongoMemoryServer
jasmine.DEFAULT_TIMEOUT_INTERVAL = 10000

describe('Integration', function() {
  beforeEach(async () => {
    mongoServerInstance = new MongoMemoryServer({ instance: { dbName: 'testDb' } })
    const uri = await mongoServerInstance.getConnectionString()
    await connect(uri)
  })

  afterEach(async () => {
    await close()
    await mongoServerInstance.stop()
  })

  // See DocumentTS for more complete examples of integration tests
  // https://github.com/duluca/DocumentTS/tree/master/tests
  it('should open a connection with a dummy database name', async () => {
    const runningInstance = await mongoServerInstance.runningInstance

    expect(runningInstance).toBeTruthy()
  })
})
