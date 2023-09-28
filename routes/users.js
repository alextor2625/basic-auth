var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/userprofile', function(req, res, next) {
  
  res.render('users/user-profile', {user: req.session.user});

});

module.exports = router;
