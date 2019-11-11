var scrape = require("../scripts/scrape");
var headlinesController = require("../controllers/headlines");
var notesController = require("../controller/notes");
var express = require("express");
var router = express.Router();

router.get("/homepage", function(req, res) {
    // cat.all(function(data) {
    //   var hbsObject = {
    //     cats: data
    //   };

    // res.render("index", hbsObject);
      res.render("index");
    });

    router.get("api/fetch", function (req, res) {
      headlinesController.fetch(function(err, docs) {
        if(!docs || docs.insertCount ===0) {
          res.json({
            message: "Unavailable articles at the moment."
          });
        } else {
          res.json ({
            message: "Added " + docs.insertCount + " new articles !"
          });
        }
      });
    });
  
    router.get("/api/headlines", function(req, res) {
      var query = {};
      if (req.query.saved) {
        query = req.query;
      }

      headlinesController.get(query, function(data) {
        res.json(data);
      });
    });

module.exports = router;