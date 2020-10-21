const ifError = (err, res) => {
  if (err) {
    res.status(400).json({ error: err.message });
    return;
  }
};

const ifErrorWithEmail = (err, res) => {
  if (err) {
    if (
      err.message === "SQLITE_CONSTRAINT: UNIQUE constraint failed: user.email"
    ) {
      res
        .status(400)
        .json({ error: "Ya hay una cuenta registrada con este email" });
    } else {
      res.status(400).json({ error: err.message });
    }
    return;
  }
};

module.exports = { ifError, ifErrorWithEmail };
