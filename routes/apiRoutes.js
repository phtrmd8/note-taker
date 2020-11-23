const router = require("express").Router();
const noteData = require("./noteData");
// "../db/noteData"

// GET "/api/notes" route for returning all saved notes
router.get("/notes", (req, res) => {
  noteData
    .getNotes()
    .then((notes) => res.json(notes))
    .catch((err) => res.status(500).json(err));
});

// POST "/api/notes" route for saving a new note
router.post("/notes", (req, res) => {
  noteData
    .addNote(req.body)
    .then((note) => res.json(note))
    .catch((err) => res.status(500).json(err));
});

// DELETE "/api/notes" route for deleting a note w/ id = req.params.id
router.delete("/notes/:id", (req, res) => {
  noteData
    .removeNote(req.params.id)
    .then(() => res.json({ ok: true }))
    .catch((err) => res.status(500).json(err));
});

module.exports = router;