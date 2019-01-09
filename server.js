'use strict';

const express = require('express');

// Constants
const PORT = 8080;

// App
const app = express();

app.set('views', './views');
app.set('view engine', 'pug');
app.use(express.static('public'));

app.get('/', (req, res) => {
	res.render('home', { title: 'Hasan Preact Template' });
});

app.get('/favicon.ico', (req, res) => {
	res.setHeader('Content-Type', 'image/png');
	res.sendFile(__dirname + '/public/images/favicon.ico');
});

app.listen(PORT);
console.log(`Running on http://localhost:${PORT}`);
