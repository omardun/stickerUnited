const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;
const {db} = require('./models')  

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
app.get('/', (req, res) => {
    let pictures = db.findAll({
        include: [{
            models: db
        }]
        
    })
    res.json(pictures)
    res.render('template', {
        locals: {
            title: "Sticker United"
        },
        partials: {
            head: '/partials/head',
            header: '/partials/header',
            component: '/partials/home',
            footer: '/partials/footer',

        }
    });
});

// Products Page
app.get('/collections', (req, res) => {
    res.render('template', {
        locals: {
            title: "Sticker United"
        },
        partials: {
            head: '/partials/head',
            header: '/partials/header',
            component: '/partials/productsPage',
            footer: '/partials/footer',
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
            footer: '/partials/footer',
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
            footer: '/partials/footer',
        }
    });
});

// Newletter Page
app.get('/newsletter', (req, res) => {
    res.render('template', {
        locals: {
            title: "Sticker United"
        },
        partials: {
            head: '/partials/head',
            header: '/partials/header',
            component: '/partials/newsletter',
            footer: '/partials/footer',
        }
    });
});



server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});