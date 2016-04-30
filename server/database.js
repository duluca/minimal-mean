"use strict";
const mongodb = require('mongodb');
const config = require('./config');
const MongoClient = mongodb.MongoClient;
var dbInstance = {};
function connect() {
    var database = this;
    return new Promise(function (resolve, reject) {
        MongoClient.connect(config.mongoUri, function (err, db) {
            if (err) {
                reject(err);
            }
            database.dbInstance = db;
            resolve(db);
        });
    });
}
exports.connect = connect;
function getInstance() {
    if (!dbInstance) {
        throw "Database not yet instantiated";
    }
    return dbInstance;
}
exports.getInstance = getInstance;
//# sourceMappingURL=database.js.map