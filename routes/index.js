var express = require('express');
var router = express.Router();
const path = require('path');

/* GET home page. */
router.get('/', function(req, res, next) {

  res.render('index', { title: 'Express' });

});


// POST descargar logo
router.post("/", async function(req, res, next) {

  let screenshot = require("../utils/obtenerScreenshot")

  screenshot()

  res.set("Content-Type", "image/png");

  res.download(path.join(__dirname, '../public/images/logo.png'))

})

module.exports = router;
