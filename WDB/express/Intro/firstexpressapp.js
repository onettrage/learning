var express = require("express");
var app = express();

// "/" = "Hi There!"
app.get("/", function(req, res){
    res.send("Hi There!");
});

// /bye = "Sayonara!"
app.get("/bye", function(req, res){
    res.send("さよなら!");
});

// /dog = "Nyannyan"
app.get("/dog", function(req, res){
    console.log("someone made a request");
    res.send("ニャンニャン");
});

// path with variable
app.get("/r/:subpage", function(req, res) {
    res.send("Welcome to this subpage!")
});

// path with multiple variables
app.get("/r/:subpage/comments/:id/:title", function(req, res) {
    res.send("Welcome to the comments!")
});

// checking the parameters in a route request and changing text content on page based on subpage parameter
app.get("/r/:subpage/images/:id", function(req, res){
    var subpage = req.params.subpage;
    res.send("Welcome to images of " + subpage + "!");
});
    
// anything not one of the above will default to this route
app.get("*", function(req, res){
    res.send("You are a star!")
});

app.listen(process.env.PORT, process.env.IP, function(){
    console.log("Server has started");
});

