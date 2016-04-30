"use strict";
const http = require('http');
const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
const logger = require('morgan');
var app = express();
// Configuration
// TODO: configure Angular Universal - https://github.com/angular/universal
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(logger('dev'));
app.use('/', express.static(path.join(__dirname, '../public')));
exports.Instance = http.createServer(app);
//# sourceMappingURL=server.js.map