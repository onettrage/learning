var express = require("express");
var app = express();

app.get("/", function(req, res){
    res.render("home.ejs");
});

app.get("/omg/:thing", function(req, res){
    var thing = req.params.thing;
        res.render("omg.ejs", {thingVar: thing}
       );
})

app.listen(process.env.PORT, process.env.IP, function(){
    console.log("Connected")
});