const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
const fileRoutes = express.Router();
const PORT = 4000;
const controller = require("./Controller/userController");
const fileController = require("./Controller/fileController");
const session = require("express-session");

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

controller(app);
fileController(app);


app.use('/files', fileRoutes);

app.listen(PORT, function() {
    console.log("Server is running on Port: " + PORT);
});