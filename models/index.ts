'use strict';

import path from 'path';
import { Sequelize, DataTypes } from 'sequelize';
import process from 'process';
const env = process.env.NODE_ENV || 'development';
const config = require(__dirname + '/../config/config.json')[env];
import { Users } from './user';
const  sequelize = new Sequelize(config.database, config.username, config.password, config);
export  const db = {Users, sequelize, Sequelize};
