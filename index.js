const express = require('express');
const app = express();

app.get('/', (req, res) => {
	res.send([
		{
			id: 0,
			title: 'Fried Rice with Chicken',
			category: 'Rice',
			price: 15000,
			image:
				'https://pistonsky.github.io/ReactNativeReduxCasts/albums/data/images/01.jpg',
			thumbnail_image:
				'https://pistonsky.github.io/ReactNativeReduxCasts/albums/data/images/01.jpg'
		},
		{
			id: 1,
			title: 'Fried Rice with Prawn',
			category: 'Rice',
			price: 20000,
			image:
				'https://pistonsky.github.io/ReactNativeReduxCasts/albums/data/images/02.jpg',
			thumbnail_image:
				'https://pistonsky.github.io/ReactNativeReduxCasts/albums/data/images/02.jpg'
		},
		{
			id: 2,
			title: 'Vegetable Coconut Tom Yum',
			category: 'Soup',
			price: 20000,
			image:
				'https://pistonsky.github.io/ReactNativeReduxCasts/albums/data/images/03.jpg',
			thumbnail_image:
				'https://pistonsky.github.io/ReactNativeReduxCasts/albums/data/images/03.jpg'
		},
		{
			id: 3,
			title: 'Thai Clear Soup',
			category: 'Soup',
			price: 20000,
			image:
				'https://pistonsky.github.io/ReactNativeReduxCasts/albums/data/images/04.jpg',
			thumbnail_image:
				'https://pistonsky.github.io/ReactNativeReduxCasts/albums/data/images/04.jpg'
		}
	]);
});

const PORT = process.env.PORT || 5000;
app.listen(PORT);
