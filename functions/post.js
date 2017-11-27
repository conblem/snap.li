const admin = require("firebase-admin");
const Busboy = require("busboy");

const upload = (path, busboy) =>
  new Promise((resolve, reject) => {
    const ref = admin
      .storage()
      .bucket()
      .file(path);
    busboy.on("file", (fieldname, src, filename, encoding, mimetype) => {
      const dest = ref.createWriteStream({
        metadata: {
          contentType: mimetype
        }
      });
      src.pipe(dest);
      dest.on("error", reject);
      dest.on("finish", resolve);
    });
  });

module.exports = functions.https.onRequest((req, res) => {
  const busboy = new Busboy({ headers: req.headers });
  const from = req.get("from");
  const to = req.get("to");
  let snap;

  admin
    .auth()
    .verifyIdToken(from)
    .catch(res.status(401).end)
    .then(({ uid }) => {
      snap = admin
        .database()
        .ref(to + "/" + uid)
        .push();
      const file = upload(`${to}/${uid}/${snap.key}.jpg`, busboy);
      busboy.end(req.rawBody);
      return file;
    })
    .catch(({ message }) =>
      res
        .status(500)
        .send(message)
        .end()
    )
    .then(() =>
      // prettier-ignore
      snap.set({
                timestamp: admin.database.ServerValue.TIMESTAMP,
                path: `${to}/${snap.parent.key}/${snap.key}.jpg`
            })
    )
    .catch(({ message }) =>
      res
        .status(500)
        .send(message)
        .end()
    )
    .then(() => res.status(200).end());
});
