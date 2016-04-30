"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator.throw(value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments)).next());
    });
};
const config = require('./config');
const server = require('./server');
const database = require('./database');
function start() {
    return __awaiter(this, void 0, void 0, function* () {
        yield database.connectAsync();
        console.log('Connected to database asyncly...');
        server.Instance.listen(config.port, () => {
            console.log(`Server listening on port ${config.port}...`);
        });
    });
}
start();
//# sourceMappingURL=index.js.map