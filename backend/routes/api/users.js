const express = require('express')

const { setTokenCookie, requireAuth } = require('../../utils/auth');
const { User } = require('../../db/models');

const router = express.Router();

// Sign up
router.post(
  '/',
  async (req, res) => {
    const { email, first_name, last_name, password, username } = req.body;
    const user = await User.signup({ email, first_name, last_name, username, password });

    await setTokenCookie(res, user);

    return res.json({
      user: user
    });
  }
);

module.exports = router;

// fetch('/api/users', {
//   method: 'POST',
//   headers: {
//     "Content-Type": "application/json",
//     "XSRF-TOKEN": `<value of XSRF-TOKEN cookie>`
//   },
//   body: JSON.stringify({
//     email: 'spidey@spider.man',
//     first_name: 'peter',
//     last_name: 'parker',
//     username: 'Spidey',
//     password: 'password'
//   })
// }).then(res => res.json()).then(data => console.log(data));