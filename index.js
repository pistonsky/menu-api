const express = require('express');
const mongoose = require('mongoose');
const keys = require('./config/keys');
require('./models/Menu');

mongoose.connect(keys.mongoURI);

const Menu = mongoose.model('menu');

const app = express();

app.get('/', async (req, res) => {
	const menu = await Menu.find();
	res.send(menu);
});

const PORT = process.env.PORT || 5000;
app.listen(PORT);
