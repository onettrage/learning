var express = require("express");
var app = express();

// enables the loading of stylesheets from the "public" folder
app.use(express.static("public"));
// allows the rendering of ejs files without specifying .ejs each time
app.set("view engine", "ejs");

app.get("/", function(req, res){
    res.render("home");
});

app.get("/omg/:thing", function(req, res){
    var thing = req.params.thing;
        res.render("omg", {thingVar: thing}
       );
});

app.get("/posts", function(req, res) {
    var posts = [
        {title: "Dude, where's my car", author: "Jamal"},
        {title: "Has anyone seen my baby", author: "Betty"},
        {title: "It puts the lotion on the skin", author: "Max"}
        ];
        
        res.render("posts", {posts: posts})
})

app.listen(process.env.PORT, process.env.IP, function(){
    console.log("Connected")
});