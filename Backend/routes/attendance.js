const express = require("express");
const router = express.Router();
const db = require("../config/db");

router.get("/:id", (req, res) => {
  const id = req.params.id;

  db.query(
    "SELECT * FROM attendance WHERE student_id = ?",
    [id],
    (err, result) => {
      if (err) return res.send(err);
      res.json(result);
    }
  );
});

module.exports = router;