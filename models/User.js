const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator'); //plugin pour ne pas avoir plusieurs users avec la meme adresse mail

const userSchema = new mongoose.Schema({
    email: {type: String, required: true, unique: true},
    password: {type: String, required: true}
});
userSchema.plugin(uniqueValidator);

module.exports = mongoose.model('User', userSchema);