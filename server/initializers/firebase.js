let admin = require('firebase-admin');
let firebaseconfig= require ('../config/firebaseServiceAccount');

admin.initializeApp(firebaseconfig);

module.exports=admin