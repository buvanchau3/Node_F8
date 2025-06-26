const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const course =  new Schema({
    name: { type : String, required: true, maxLength: 255 },
    description: { type : String, required: true, maxLength: 600 },
    image: { type : String, required: true, maxLength: 255 },
    createdAt: { type : Date, default: Date.now },
    updatedAt: { type : Date, default: Date.now },
});

module.exports = mongoose.model('Course', course);
