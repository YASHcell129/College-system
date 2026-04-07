const express = require("express");
const router = express.Router();
const db = require("../config/db");

// GET notifications
router.get("/:id", (req, res) => {
  const studentId = req.params.id;

  db.query(
    "SELECT * FROM notifications WHERE student_id = ? ORDER BY id DESC",
    [studentId],
    (err, result) => {
      if (err) return res.status(500).send(err);
      res.json(result);
    }
  );
});

module.exports = router;