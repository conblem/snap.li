const functions = require("firebase-functions");
const admin = require("firebase-admin");

admin.initializeApp(functions.config().firebase);

exports.post = functions.https.onRequest((req, res) => {
  const from = req.get("from");
  const to = req.get("to");
  let snap;

  admin
    .auth()
    .verifyIdToken(from)
    .catch(error => res.status(401).end())
    .then(({ uid }) => {
      snap = admin
        .database()
        .ref(to + "/" + uid)
        .push();
      return admin
        .storage()
        .ref(to + "/" + uid + "/" + snap.key + ".jpg")
        .putString(req.body, "data_url");
    })
    .catch(({ message }) => res.status(500).send(message))
    .then(({ ref }) =>
      ref.set({
        timestamp: admin.database.ServerValue.TIMESTAMP,
        path: ref.fullPath
      })
    )
    .catch(({ message }) => res.status(500).send(message));
});
