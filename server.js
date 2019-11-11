// Set Handlebars.

const express = require('express')
const app = express()
var mongoose = require("mongoose");
const port = 3000
var exphbs = require("express-handlebars");

// Parse application body as JSON
app.use(express.urlencoded({ extended: true }));
app.use(express.json());


app.use(express.static("public"));

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// Import routes and give the server access to them.
var routes = require("./routes/routes.js");

app.use(routes);

var db = process.env.MONGODB_URI || "mongodb://localhost:27017/cnn";

mongoose.connect(db, {useNewUrlParser: true}, function(error) {
    if (error) {
        console.log(error)
    } else {
        console.log("mongoose connection is successful");
    }
});

app.listen(port, () => console.log(`Example app listening on port ${port}`))