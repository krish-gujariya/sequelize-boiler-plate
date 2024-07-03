
import fs from 'fs';
import path from 'path';
import { Sequelize, ModelCtor } from 'sequelize-typescript';
import process from 'process';
import { DATABASE_URL } from '@config';
import { logger } from 'utils/pino';
const basename = path.basename(__filename);
const env = process.env.NODE_ENV || 'development';
const config = require(__dirname + '/../config/config.json')[env];
let db: Sequelize;

 const initSequelize = () => {
  const _basename = path.basename(module.filename);

  const sequelize = new Sequelize(DATABASE_URL as string, {
    dialect: 'mysql',
    timezone: '+00:00', // UTC timezone. Change to your desired timezone, e.g., '+09:00' for JST, '-05:00' for EST.
    dialectOptions: {
      timezone: '+00:00',
    },

    logging:  logger.info.bind(null, '\n%s'),
  });

  const _models = fs
    .readdirSync(__dirname)
    .filter((file: string) => {
      return (
        file !== _basename &&
        file !== 'interfaces' &&
        file.slice(-5) !== '.d.ts' &&
        (file.slice(-3) === '.js' || file.slice(-3) === '.ts')
      );
    })
    .map((file: string) => {
      const model: ModelCtor = require(path.join(__dirname, file))?.default;
      return model;
    });

  sequelize.addModels(_models);
  return sequelize;
};

db = initSequelize();
export default db;
