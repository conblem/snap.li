const functions = require("firebase-functions");
const admin = require("firebase-admin");

const post = require("./post");
const get = require("./get");

admin.initializeApp(functions.config().firebase);

exports.post = functions.https.onRequest(post);
exports.get = functions.https.onRequest(get);
