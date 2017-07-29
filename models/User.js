"use strict";

const db = require('../db');
const mongoose = require('mongoose');

let Schema = mongoose.Schema;

let userSchema = new Schema({
  mobileNumber: String,
  androidId: String,
  iosId: String,
  createdAt: { type: Date, default: Date.now }
});

let User = mongoose.model('User', userSchema, 'users');

module.exports = db.model('User');