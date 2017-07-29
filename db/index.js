"use strict";

const mongoose = require('mongoose');
const config = require('config');

let db = mongoose.createConnection(config.get('db.url'));
mongoose.Promise = global.Promise;

module.exports = db;
