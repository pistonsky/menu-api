const mongoose = require('mongoose');
const { Schema } = require('mongoose');

const menuSchema = new Schema({
  title: String,
  category: String,
  price: Number,
  image: String,
  thumbnail_image: String
});

mongoose.model('menu', menuSchema);

const Menu = mongoose.model('menu');
