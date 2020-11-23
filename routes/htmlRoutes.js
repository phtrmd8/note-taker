const path = require("path");
const router = require("express").Router();

// GET route "/notes" for returning notes.html file
router.get("/notes", (req, res) => {
  res.sendFile(path.join(__dirname, "../public/notes.html"));
});

// All other routes return w/ index.html file
router.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "../public/index.html"));
});

module.exports = router;