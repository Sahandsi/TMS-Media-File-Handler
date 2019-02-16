const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let Files = new Schema({
    file_description: {
        type: String
    },
    file_employeeResponsible: {
        type: String
    },
    file_editActive: {
        type: String
    },
    file_completed: {
        type: Boolean
    }
});

module.exports = mongoose.model('Files', Files);