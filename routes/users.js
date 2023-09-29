var express = require('express');
var router = express.Router();

const { isLoggedIn} = require('../middleware/route-guard')

/* GET users listing. */
router.get('/userprofile', isLoggedIn, (req, res, next) => {

  res.render('users/user-profile', {user: req.session.user});

});

module.exports = router;
