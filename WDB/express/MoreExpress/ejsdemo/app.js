var express = require("express");
var app = express();

app.get("/", function(req, res){
    res.render("home.ejs");
});

app.get("/omg/:thing", function(req, res){
    var thing = req.params.thing;
        res.render("omg.ejs", {thingVar: thing}
       );
});

// updated app.js with posts
app.get("/posts", function(req, res) {
    var posts = [
        {title: "Dude, where's my car", author: "Jamal"},
        {title: "Has anyone seen my baby", author: "Betty"},
        {title: "It puts the lotion on the skin", author: "Max"}
        ];
        
        res.render("posts.ejs", {posts: posts})
})

app.listen(process.env.PORT, process.env.IP, function(){
    console.log("Connected")
});