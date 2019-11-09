var express = require("express");
var router = express.Router();

router.get("/", function(req, res) {
    // cat.all(function(data) {
    //   var hbsObject = {
    //     cats: data
    //   };

    // res.render("index", hbsObject);
      res.render("index");
    });

  

module.exports = router;