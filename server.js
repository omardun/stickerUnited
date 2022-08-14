const http = require("http");
const hostname = "127.0.0.1";
const port = 3000;
const db = require("./models");
const express = require("express");
const app = express();
const path = require("path");
const es6Renderer = require("express-es6-template-engine");
const server = http.createServer(app);
const session = require('express-session');

app.engine("html", es6Renderer);
app.set("views", "templates");
app.set("view engine", "html");

// Routes
app.use(express.static(path.join(__dirname, "public")));

// Homepage
app.get("/", async (req, res) => {
  const stickers = await db.Sticker.findAll();
  res.render("template", {
    locals: {
      stickers,
    },
    partials: {
      component: "/partials/home",
    },
  });
});

// All Stickers Page
app.get("/stickers", async (req, res) => {
  const stickers = await db.Sticker.findAll();
  res.render("template", {
    locals: {
      stickers,
    },
    partials: {
      component: "/partials/stickers",
    },
  });
});

// Memes Stickers Page
app.get("/memes", async (req, res) => {
  const stickers = await db.Sticker.findAll();
  res.render("template", {
    locals: {
      stickers,
    },
    partials: {
      component: "/partials/memes",
    },
  });
});

// Cartoons Stickers Page
app.get("/cartoons", async (req, res) => {
  const stickers = await db.Sticker.findAll();
  res.render("template", {
    locals: {
      stickers,
    },
    partials: {
      component: "/partials/cartoons",
    },
  });
});

// Random Stickers Page
app.get("/random", async (req, res) => {
  const stickers = await db.Sticker.findAll();
  res.render("template", {
    locals: {
      stickers,
    },
    partials: {
      component: "/partials/random",
    },
  });
});

// Sports Stickers Page
app.get("/sports", async (req, res) => {
  const stickers = await db.Sticker.findAll();
  res.render("template", {
    locals: {
      stickers,
    },
    partials: {
      component: "/partials/sports",
    },
  });
});

// Artists Stickers Page
app.get("/artists", async (req, res) => {
  const stickers = await db.Sticker.findAll();
  res.render("template", {
    locals: {
      stickers,
    },
    partials: {
      component: "/partials/artists",
    },
  });
});

// Athletes Stickers Page
app.get("/athletes", async (req, res) => {
  const stickers = await db.Sticker.findAll();
  res.render("template", {
    locals: {
      stickers,
    },
    partials: {
      component: "/partials/athletes",
    },
  });
});

// All Stickers Page
app.get("/stickers", async (req, res) => {
  const stickers = await db.Sticker.findAll();
  res.render("template", {
    locals: {
      stickers,
    },
    partials: {
      component: "/partials/stickers",
    },
  });
});

// User Page
app.get("/user", async (req, res) => {
  const stickers = await db.Sticker.findAll();
  res.render("template", {
    locals: {
      stickers,
    },
    partials: {
      component: "/partials/user",
    },
  });
});

// Register Page
app.get("/register", (req, res) => {
  res.render("template", {
    locals: {
    },
    partials: {
      component: "/partials/register",
    },
  });
});

//Register Post
app.post("/register", (req, res) => {
  const newEmail = req.body.newEmail.toLowerCase();
  const newPassword = req.body.newPassword;
  const newPasswordCheck = req.body.newPasswordCheck;

  models.User.findAll({
    where: { newEmail: newEmail },
  }).then((users) => {
    const newUser = users.find((user) => {
      return user.newEmail == newEmail;
    });
    if (newUser) {
      res.render("register", { message: 0 });
    } else {
      if (newPassword == newPasswordCheck) {
        bcrypt.genSalt(10, function (err, salt) {
          bcrypt.hash(password, salt, function (err, hash) {
            let user = models.User.build({
              newEmail: newEmail,
              newPassword: hash,
            });
            user.save().then(() => {
              res.redirect("login");
            });
          });
        });
      } else {
        res.render("register", { message: 1 });
      }
    }
  });
});

// Login Page
app.get("/login", (req, res) => {
  res.render("template", {
    locals: {
    },
    partials: {
      component: "/partials/login",
    },
  });
});

//Login Post
app.post("/login", (req, res) => {
  const email = req.body.email.toLowerCase();
  const password = req.body.password;

  models.User.findAll({
    where: { email: email },
  }).then((users) => {
    const currentUser = users.find((user) => {
      return user.email == email;
    });
    if (currentUser) {
      bcrypt.compare(password, currentUser.password, function (err, result) {
        if (result) {
          req.session.name = req.body.email;
          req.session.username = currentUser.dataValues.id;
          res.redirect("/");
        } else {
          res.render("home", { message: 0 });
        }
      });
    } else {
      res.render("login", { message: 1 });
    }
  });
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
