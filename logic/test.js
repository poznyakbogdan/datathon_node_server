"use strict";

process.env.NODE_CONFIG_DIR = "../config";
const User = require('../models/User');

User.find({}, (err, users) => {
  console.log(err, users);
});
