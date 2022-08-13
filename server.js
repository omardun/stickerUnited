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
    const stickers = await db.Sticker.findAll()
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

// All Stickers Page
app.get('/stickers', async (req, res) => {
    const stickers = await db.Sticker.findAll()
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

// Memes Stickers Page
app.get('/memes', async (req, res) => {
    const stickers = await db.Sticker.findAll()
    res.render('template', {
        locals: {
            title: "Sticker United",
            stickers 
        },
        partials: {
            head: '/partials/head',
            header: '/partials/header',
            component: '/partials/memes',
        }
    });
});

// Cartoons Stickers Page
app.get('/cartoons', async (req, res) => {
    const stickers = await db.Sticker.findAll()
    res.render('template', {
        locals: {
            title: "Sticker United",
            stickers 
        },
        partials: {
            head: '/partials/head',
            header: '/partials/header',
            component: '/partials/cartoons',
        }
    });
});

// Random Stickers Page
app.get('/random', async (req, res) => {
    const stickers = await db.Sticker.findAll()
    res.render('template', {
        locals: {
            title: "Sticker United",
            stickers 
        },
        partials: {
            head: '/partials/head',
            header: '/partials/header',
            component: '/partials/random',
        }
    });
});

// Sports Stickers Page
app.get('/sports', async (req, res) => {
    const stickers = await db.Sticker.findAll()
    res.render('template', {
        locals: {
            title: "Sticker United",
            stickers 
        },
        partials: {
            head: '/partials/head',
            header: '/partials/header',
            component: '/partials/sports',
        }
    });
});

// Artists Stickers Page
app.get('/artists', async (req, res) => {
    const stickers = await db.Sticker.findAll()
    res.render('template', {
        locals: {
            title: "Sticker United",
            stickers 
        },
        partials: {
            head: '/partials/head',
            header: '/partials/header',
            component: '/partials/artists',
        }
    });
});

// Athletes Stickers Page
app.get('/athletes', async (req, res) => {
    const stickers = await db.Sticker.findAll()
    res.render('template', {
        locals: {
            title: "Sticker United",
            stickers 
        },
        partials: {
            head: '/partials/head',
            header: '/partials/header',
            component: '/partials/athletes',
        }
    });
});

// All Stickers Page
app.get('/stickers', async (req, res) => {
    const stickers = await db.Sticker.findAll()
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

// Favorites Page
app.get('/favorites', async (req, res) => {
    const stickers = await db.Stickers.findAll()
    res.render('template', {
        locals: {
            title: "Sticker United",
            stickers 
        },
        partials: {
            head: '/partials/head',
            header: '/partials/header',
            component: '/partials/favorites',
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
app.get('/contact', (req, res) => {
    res.render('template', {
        locals: {
            title: "Sticker United"
        },
        partials: {
            head: '/partials/head',
            header: '/partials/header',
            component: '/partials/contact',
        }
    });
});


server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});