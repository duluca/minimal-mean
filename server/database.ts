import mongodb = require('mongodb')
import config = require('./config')

const MongoClient = mongodb.MongoClient

import bluebird = require('bluebird')
const Collection = mongodb.Collection

bluebird.promisifyAll(Collection.prototype)
bluebird.promisifyAll(MongoClient)

var dbInstance = {}

export async function connectAsync() {
  try {
    dbInstance = await MongoClient.connectAsync(config.mongoUri)
  } catch (e) {
    console.log(e)
    throw e
  }
}

export function connect() {
  var database = this
  return new Promise(function(resolve, reject) {
    MongoClient.connect(config.mongoUri, function(err, db) {
      if(err) {
        reject(err)
      }
      database.dbInstance = db
      resolve(db)
    })
  })
}

export function getInstance() {
  if(!dbInstance) {
    throw "Database not yet instantiated"
  }

  return dbInstance
}