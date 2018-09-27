var express = require("express");
var app = express();
var bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({extended: true}));
app.set("view engine", "ejs");

    var campgrounds = [
        {name: "Gammon Peak", image: "https://pixabay.com/get/e83db40e28fd033ed1584d05fb1d4e97e07ee3d21cac104496f7c870a5e5bcbd_340.jpg"},
        {name: "Planet Field", image: "https://farm2.staticflickr.com/1281/4684194306_18ebcdb01c.jpg"},
        {name: "Fountain Toad's Rest", image: "https://pixabay.com/get/ef3cb00b2af01c22d2524518b7444795ea76e5d004b0144292f9c87bafe4b0_340.jpg"}
    ]


app.get("/", function(req, res){
    res.render("landing");
})

app.get("/campgrounds", function(req, res){
    res.render("campgrounds", {campgrounds: campgrounds});
});

app.post("/campgrounds", function(req, res){
   var name = req.body.name;
   var image = req.body.image;
   var newCampground = {name: name, image: image};
   
   campgrounds.push(newCampground);
   
   res.redirect("/campgrounds");
});

app.get("/campgrounds/new", function(req, res){
    res.render("new.ejs");
    
})

app.listen(process.env.PORT, process.env.IP, function(){
    console.log("YelpCamp Server Connected")
    });