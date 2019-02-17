const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let Files = new Schema({
    file_description: {
        type: String
    },
    file_size: {
        type: String
    },
    file_duration: {
        type: String
    },
    file_artist: {
        type: String
    },
    file_bitrate: {
        type: String
    },
    file_codec: {
        type: String
    },
    file_audioChannels: {
        type: String
    },
    file_dimensions: {
        type: String
    },
    file_colorProfile: {
        type: String
    },
    file_extension: {
        type: String
    },
    file_employeeResponsible: {
        type: String
    },
    file_tag: {
        type: String
    },
    file_editActive: {
        type: String
    },
    file_completed: {
        type: Boolean
    },
    createdAt: {
        type: Date,
        required: true,
        default: Date.now
    },
    updatedAt: {
        type: Date,
        required: true,
        default: Date.now
    }
});

module.exports = mongoose.model('Files', Files);