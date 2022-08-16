
const bcrypt = require('bcrypt');
const { User, Sticker } = require('../models');


module.exports = {

    async getAll(req, res) {
        try {
            const users = await User.findAll({ include: Sticker });

            res.json(users);
        } catch {
        }
    },

    async getOne(req, res) {
        try {
            const oneUser = await User.findByPk(req.params.id, { include: Sticker });

            if (oneUser === null) {
                res.status(404).json({
                    message: 'User not found',
                });
            }

            res.json(oneUser);
        } catch (error) {
            res.json(error);
        }
    },

    async logIn(req, res) {
        const { email, password } = req.body;

        try {
            const user = await User.findOne({
                where: { email },
            });

            bcrypt.compare(password, user.password, (err, match) => {
                if (match) {
                    req.session.user = user;
                    res.json({ message: 'success' });
                } else {
                }
            });
        } catch {
            res.json({ message: 'failure' });
        }
    },
    async register(req, res) {
        try {
          await User.create(req.body);
          res.json({ message: 'success' });
        } catch {
          res.json({ message: 'failure' });
        }
      },
    
      async update(req, res) {
        const { id } = req.params;
    
        try {
          const updatedUser = await User.update(req.body, {
            where: {
              id,
            },
          });
    
          res.json(updatedUser);
        } catch {
        }
      },
};