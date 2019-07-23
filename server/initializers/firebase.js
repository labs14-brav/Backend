let admin = require('firebase-admin');
let firebaseconfig= require ('../config/firebaseServiceAccount');

admin.initializeApp({credential:admin.credential.cert(firebaseconfig)});

module.exports=admin