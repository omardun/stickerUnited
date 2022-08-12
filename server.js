const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;
const db = require('./models')  

const express = require('express');
const app = express();
const path = require('path');


const es6Renderer = require('express-es6-template-engine');
app.engine('html', es6Renderer);
app.set('views', 'templates');
app.set('view engine', 'html');

const server = http.createServer(app);

// Routes
app.use(express.static(path.join(__dirname,'public')));


// Homepage
app.get('/', async (req, res) => {
    const stickers = await db.Stickers.findAll()
    res.render('template', {
        locals: {
            title: "Sticker United",
            stickers
        },
        partials: {
            head: '/partials/head',
            header: '/partials/header',
            component: '/partials/home',

        }
    });
});

// Stickers Page
app.get('/stickers', async (req, res) => {
    const stickers = await db.Stickers.findAll()
    res.render('template', {
        locals: {
            title: "Sticker United",
            stickers 
        },
        partials: {
            head: '/partials/head',
            header: '/partials/header',
            component: '/partials/stickers',
        }
    });
});

// Single Sticker Page
app.get('/stickers/:', (req, res) => {
    res.render('template', {
        locals: {
            title: "Sticker United"
        },
        partials: {
            head: '/partials/head',
            header: '/partials/header',
            component: '/partials/singleSticker',
        }
    });
});



// Login Page
app.get('/login', (req, res) => {
    res.render('template', {
        locals: {
            title: "Sticker United"
        },
        partials: {
            head: '/partials/head',
            header: '/partials/header',
            component: '/partials/login',
        }
    });
});

// Contact Us Page
app.get('/contactUs', (req, res) => {
    res.render('template', {
        locals: {
            title: "Sticker United"
        },
        partials: {
            head: '/partials/head',
            header: '/partials/header',
            component: '/partials/contactUs',
        }
    });
});


server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});