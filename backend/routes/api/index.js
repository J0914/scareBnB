const { restoreUser } = require('../../utils/auth.js');
// const { User } = require('../../db/models');
const router = require('express').Router();
// leave this in front
router.use(restoreUser);

//testing >>>>>>>>
// router.get(
//   '/restore-user',
//   (req, res) => {
//     return res.json(req.user);
//   }
// );

// router.get(
//   '/require-auth',
//   requireAuth,
//   (req, res) => {
//     return res.json(req.user);
//   }
// );

// router.get('/set-token-cookie', async (_req, res) => {
//   const user = await User.findOne({
//       where: {
//         username: 'Demo-lition'
//       }
//     });
//   setTokenCookie(res, user);
//   return res.json({ user: user });
// });
// testing end >>>>>>>>>




module.exports = router;