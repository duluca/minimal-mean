"use strict";
exports.isProd = process.env.NODE_ENV === 'production';
exports.port = process.env.PORT || 3000;
exports.mongoUri = process.env.MONGO_URI || 'mongodb://localhost:27017/minimal-mean';
//# sourceMappingURL=config.js.map