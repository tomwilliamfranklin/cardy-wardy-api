var express = require('express');
const { getUsers } = require("../repositories/userRepository");
var router = express.Router();

/* GET users listing. */
router.get('/', async function(req, res, next) {
  
    res.send(await getUsers());
});

module.exports = router;
