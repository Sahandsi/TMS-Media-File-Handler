const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
const fileRoutes = express.Router();
const PORT = 4000;
const controller = require("./userController");
const session = require("express-session");

let File = require('./fileHandler.model');


app.use(bodyParser.json());

app.use(
    cors({
      origin: [
        "http://localhost:3000"
      ],
      methods: ["GET", "HEAD", "POST", "DELETE", "PUT", "PATCH", "OPTIONS"],
      credentials: true //allow setting of cookies
    })
  );

app.use(
    session({
      secret: "supersecretstring12345!",
      saveUninitialized: true,
      resave: true,
      cookie: { maxAge: 60000 * 30 }
    })
  );

mongoose.connect('mongodb://127.0.0.1:27017/tms', { useNewUrlParser: true });
const connection = mongoose.connection;

connection.once('open', function() {
    console.log("MongoDB database connection established successfully");
})

fileRoutes.route('/').get(function(req, res) {
    File.find(function(err, files) {
        if (err) {
            console.log(err);
        } else {
            res.json(files);
        }
    });
});

fileRoutes.route('/:id').get(function(req, res) {
    let id = req.params.id;
    File.findById(id, function(err, file) {
        res.json(file);
    });
});

fileRoutes.route('/add').post(function(req, res) {
    let file = new File(req.body);
    file.save()
        .then(file => {
            res.status(200).json({'file': 'file added successfully'});
        })
        .catch(err => {
            res.status(400).send('adding new file failed');
        });
});

fileRoutes.route('/update/:id').post(function(req, res) {
    File.findById(req.params.id, function(err, file) {
        if (!file)
            res.status(404).send('data is not found');
        else
            file.file_description = req.body.file_description;
            file.file_employeeResponsible = req.body.file_employeeResponsible;
            file.file_editActive = req.body.file_editActive;
            file.file_completed = req.body.file_completed;

            file.save().then(file => {
                res.json('File updated');
            })
            .catch(err => {
                res.status(400).send("Update not possible");
            });
    });
});

controller(app);

app.use('/files', fileRoutes);

app.listen(PORT, function() {
    console.log("Server is running on Port: " + PORT);
});