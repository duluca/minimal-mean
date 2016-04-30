"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator.throw(value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments)).next());
    });
};
const mongodb = require('mongodb');
const config = require('./config');
const MongoClient = mongodb.MongoClient;
const bluebird = require('bluebird');
const Collection = mongodb.Collection;
bluebird.promisifyAll(Collection.prototype);
bluebird.promisifyAll(MongoClient);
var dbInstance = {};
function connectAsync() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            dbInstance = yield MongoClient.connectAsync(config.mongoUri);
        }
        catch (e) {
            console.log(e);
            throw e;
        }
    });
}
exports.connectAsync = connectAsync;
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