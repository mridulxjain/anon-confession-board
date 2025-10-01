const express = require("express");
const { getConfessions, postConfession, deleteConfession } = require("../controllers/confessionController");

const router = express.Router();

router.get("/", getConfessions);
router.post("/", postConfession);
router.delete("/:id", deleteConfession);

module.exports = router;