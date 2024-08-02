'use strict';

const dotEnv = require('dotenv');

dotEnv.config();
module.exports = {
  url: process.env.DATABASE_URL,
  dialect: 'mysql',
  logger: false
};
