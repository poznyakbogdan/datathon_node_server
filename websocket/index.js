"use strict";

const _ = require('lodash');
const User = require('../models/User');
const checkUsers = require('../logic/checkUsers');
const myEmitter = require('../logic/events');
const cronJob = require('../logic/cronJobs');

module.exports = server => {
	
	let io = require('socket.io').listen(server);

	io.on('connection', client => {
		console.log('client connected');

    cronJob(()=>{
      myEmitter.emit('checkUsersEvent');
    });

		myEmitter.on('checkUsersEvent', () => {
			checkUsers(res => {
				client.broadcast.send(res);
			})
		});

		client.on('disconnect', client => {
			console.log('client disconnected');
		});

		client.on('message',  message => {
				console.log('message');
				console.log(message);
		});

	});

}
