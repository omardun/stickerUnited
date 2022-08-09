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

// Routes
app.use(express.static(path.join(__dirname,'public')));


// Homepage
app.get('/', (req, res) => {
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
            component: '/partials/loginPage',
            footer: '/partials/footer',
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
            component: '/partials/contactUsPage',
            footer: '/partials/footer',
        }
    });
});



server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});