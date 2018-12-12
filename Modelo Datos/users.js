var express = require('express');
var router = express.Router();
var usu = require('../models/Usuarios')

/* GET users listing. */
router.get('/', function(req, res, next) {
  //res.json({users: [{name: 'Timmy'}]});
  usu.getUsuario((error, data) => {
    res.status(200).json(data);
  })
});

module.exports = router;
