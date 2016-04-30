import mongodb = require('mongodb')
import config = require('./config')

const MongoClient = mongodb.MongoClient

var dbInstance = {}

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