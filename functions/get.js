const admin = require("firebase-admin");

const pipe = (src, dest) =>
  new Promise((resolve, reject) => {
    dest.on("finish", resolve);
    dest.on("error", reject);
    src.on("error", reject);
    src.pipe(dest);
  });

module.exports = (req, res) => {
  const from = req.get("from");
  const to = req.get("to");
  const snap = req.get("snap");

  let user;
  let file;

  admin
    .auth()
    .verifyIdToken(to)
    .catch(({ message }) =>
      res
        .status(401)
        .send(message)
        .end()
    )
    .then(({ uid }) => {
      user = uid;
      file = admin
        .storage()
        .bucket()
        .file(`${user}/${from}/${snap}.jpg`);

      return pipe(file.createReadStream(), res);
    })
    .catch(({ message }) =>
      res
        .status(404)
        .send(message)
        .end()
    )
    .then(() => {
      res.status(200).end();
      return admin
        .database()
        .ref(`${user}/chats/${from}/${snap}`)
        .remove();
    })
    .then(() => file.delete());
};
