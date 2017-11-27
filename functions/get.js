const admin = require("firebase-admin");

const pipe = (src, dest) =>
  new Promise((resolve, reject) => {
    src.pipe(dest);
    dest.on("finish", resolve);
    dest.on("error", reject);
    src.on("error", reject);
  });

module.exports = (req, res) => {
  const from = req.get("from");
  const to = req.get("to");
  const snap = req.get("snap");

  let path;

  admin
    .auth()
    .verifyIdToken(from)
    .catch(res.status(401).end)
    .then(({ uid }) => {
      path = `${uid}/${from}/${snap}`;
      const src = admin
        .storage()
        .bucket()
        .file(`${path}.jpg`)
        .createReadStream();

      return pipe(src, res);
    })
    .catch(({ message }) =>
      res
        .status(404)
        .send(message)
        .end()
    )
    .then(() => {
      res.status(200).end();
      return admin.database().ref(path).remove;
    });
};
