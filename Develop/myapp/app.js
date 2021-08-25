const fs = require('fs');
const path = require('path');

module.exports = app => {

    fs.readFile("db/db.json","utf8", (err, data) => {

        if (err) throw err;

        var notes = JSON.parse(data);

        app.get("/api/notes", function(req, res) {
            res.json(notes);
        });

        app.post("/api/notes", function(req, res) {
            let addNote = req.body;
            notes.push(addNote);
            updateDb();
            return console.log("Add note: "+ addNote.title);
        });

        app.get("/api/notes/:id", function(req,res) {
            res.json(notes[req.params.id]);
        });
   
