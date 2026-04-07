const express = require("express");
const db = require("../config/db");

const router = express.Router();

router.get("/attendance/:id", (req, res) => {
  db.query(
    `SELECT COUNT(*) as total,
     SUM(status='present') as present
     FROM attendance WHERE student_id=?`,
    [req.params.id],
    (err, result) => res.json(result[0])
  );
});

module.exports = router;