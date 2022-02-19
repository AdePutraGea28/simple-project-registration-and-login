const router = require('express').Router();
const user = require('../model/User');
const verify = require('./verifyToken');

router.get('/', verify, (req, res) => {
  res.send(req.user);
  //   user.findById({ _id: req.user });
});

module.exports = router;
