const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

const express = require('express');
const app = express();
const path = require('path');

const es6Renderer = require('express-es6-template-engine');
app.engine('html', es6Renderer);
app.set('views', 'templates');
app.set('view engine', 'html');

const server = http.createServer(app);
const db = require('./db');

// Routes
app.use(express.static(path.join(__dirname,'public')));






server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});