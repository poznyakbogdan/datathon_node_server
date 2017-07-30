"use strict";

let FCM = require('fcm-node');
let serverKey = 'AAAAe9Jsseo:APA91bEjzlxuhKYDycWhyeM6wJzERNx8d-zzTq9NeHpJ4uM8dprNqTK3CCqxROhX3sCHJ5q89R-OZZ6jtgZyUQtGrU1p8cJ6r0GwT823y49YH9ykHQQ4gE6Wc7TLydyTnLvFdFWPhEcs'; //put your server key here 
let fcm = new FCM(serverKey);

var admin = require("firebase-admin");

var serviceAccount = require("../p_key.json");

admin.initializeApp({
credential: admin.credential.cert(serviceAccount),
databaseURL: "https://messaging-93e36.firebaseio.com"
});

var payload = {
  data: {
    score: "850",
    time: "2:45"
  }
};

let registrationToken = 'e9xvfpAMJ-A:APA91bHcfSsnqpVh3jrROgaT20y8EzJ7St89VaLWIJC8jH15W8SHy7mGpJklq0VtthlvfV_iE1QT1b9PDD4B_901QJMJudUTITUAAsBBA3FF3d86c83WYor4GmuwKPvIKOkw7e5vhP-V';
// Send a message to the device corresponding to the provided
// registration token.
admin.messaging().sendToDevice(registrationToken, payload)
  .then(function(response) {
    // See the MessagingDevicesResponse reference documentation for
    // the contents of response.
    console.log("Successfully sent message:", response.results);
  })
  .catch(function(error) {
    console.log("Error sending message:", error);
  });


// let message = { //this may vary according to the message type (single recipient, multicast, topic, et cetera) 
//     to: 'e9xvfpAMJ-A:APA91bHcfSsnqpVh3jrROgaT20y8EzJ7St8 9VaLWIJC8jH15W8SHy7mGpJklq0VtthlvfV_iE1QT1b9PDD4B_901QJMJudUTITUAAsBBA 3FF3d86c83WYor4GmuwKPvIKOkw7e5vhP-V', 
//     collapse_key: 'datathon2017',
    
//     notification: {
//         title: 'Test notification', 
//         body: 'Body of your test push notification' 
//     },
    
//     data: {  //you can send only notification or only data(or include both) 
//         a: 'hello',
//         b: 'world'
//     }
// };

// fcm.send(message, function(err, response){
//     if (err) {
//         console.log(err);
//     } else {
//         console.log("Successfully sent with response: ", response);
//     }
//   });

module.exports = fcm;