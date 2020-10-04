const mongoose = require('mongoose');
const validation = require('mongoose-validator');

var titreValidation = [
    validation({
      validator: 'isLength',
      arguments: [3, 30],
      message: 'Le titre doit être compris entre 3 et 30 caractères'
    }),
    validation({
      validator: 'isAlphanumeric',
      passIfEmpty: true,
      message: 'caractères alpha numéric uniquement'
    })
  ];


const sauceSchema = new mongoose.Schema({
    userId: {type: String, required: false},
    name: {type: String, required: true/*, validate: titreValidation*/},
    manufacturer: {type: String, required: true},
    description: {type: String, required: true},
    heat: {type: Number, required: true},
    imageUrl: {type: String, required: true},
    mainPepper: {type: String, required: true},
    likes: {type: Number},
    dislikes: {type: Number},
    usersLiked: {type: [String]},
    usersDisliked: {type: [String]}

});

module.exports = mongoose.model('Sauce', sauceSchema);