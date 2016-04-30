"use strict";
const config = require('./config');
const server = require('./server');
const database = require('./database');
database.connect()
    .then(function () {
    console.log('Connected to database...');
    server.Instance.listen(config.port, () => {
        console.log(`Server listening on port ${config.port}...`);
    });
});
//# sourceMappingURL=index.js.map