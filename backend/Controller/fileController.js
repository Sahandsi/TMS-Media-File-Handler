const express = require('express');
var { check, validationResult } = require("express-validator/check");
const bodyParser = require('body-parser');

const fileRoutes = express.Router();
const File = require("../models/fileHandler");

module.exports = function(app) {




    const fileValidation = [
        check("file_description")
            .not()
            .isEmpty()
            .withMessage("Description required"),
        check("file_size")
            .not()
            .isEmpty()
            .withMessage("File size required"),
        check("file_extension")

            .isMimeType()
            .withMessage("invalid extension")
            .not()
            .isEmpty()
            .withMessage("Allowed File extension required"),
        check("file_tag")
            .not()
            .isEmpty()
            .withMessage("File size required"),


    ];



    app.use(bodyParser.json());

    fileRoutes.route('/').get(function (req, res) {
        File.find(function (err, files) {
            if (err) {
                console.log(err);
            } else {
                res.json(files);
            }
        });
    });

    fileRoutes.route('/:id').get(function (req, res) {
        let id = req.params.id;
        File.findById(id, function (err, file) {
            res.json(file);
        });
    });


    fileRoutes.route('/add').post(fileValidation, function (req, res) {

        var errors = validationResult(req);

        if (!errors.isEmpty()) {
            return res.send({ errors: errors.mapped() });
        }else{

            console.log("its empty!");


            let file = new File(req.body);
            file.save()
                .then(file => {
                    res.status(200).json({'file': 'file added successfully'});
                })
                .catch(err => res.send(err));
        }

    });


    fileRoutes.route('/update/:id').post(function (req, res) {
        File.findById(req.params.id, function (err, file) {
            if (!file)
                res.status(404).send('data is not found');
            else
                file.file_description = req.body.file_description;
                file.file_size = req.body.file_size;
                file.file_duration = req.body.file_duration;
                file.file_artist = req.body.file_artist;
                file.file_bitrate = req.body.file_bitrate;
                file.file_codec = req.body.file_codec;
                file.file_audioChannels = req.body.file_audioChannels;
                file.file_dimensions = req.body.file_dimensions;
                file.file_tag = req.body.file_tag;
                file.file_colorProfile = req.body.file_colorProfile;
                file.file_extension = req.body.file_extension;
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


    app.use('/files', fileRoutes);

};