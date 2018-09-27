var express = require("express"),
    app = express(),
    bodyParser = require("body-parser"),
    mongoose = require("mongoose");

mongoose.connect("mongodb://localhost/yelp_camp", { useNewUrlParser: true});
app.use(bodyParser.urlencoded({extended: true}));
app.set("view engine", "ejs");

// Schema setup
var campgroundSchema = new mongoose.Schema({
    name: String,
    image: String,
    description: String
});

var Campground = mongoose.model("Campground", campgroundSchema);

// Campground.create({
//     name: "Planet Field",
//     image: "https://farm2.staticflickr.com/1281/4684194306_18ebcdb01c.jpg",
//     description: "A field with a view that even Ultron would rethink his ideology for"
// }, function(err, campground){
//     if(err){
//         console.log(err)
//     } else {
//         console.log("Newly Created Campsite:")
//         console.log(campground)
        
//     }
// });


    var campgrounds = [
        {name: "Gammon Peak", image: "https://pixabay.com/get/e83db40e28fd033ed1584d05fb1d4e97e07ee3d21cac104496f7c870a5e5bcbd_340.jpg"},
        {name: "Planet Field", image: "https://farm2.staticflickr.com/1281/4684194306_18ebcdb01c.jpg"},
        {name: "Fountain Toad's Rest", image: "https://pixabay.com/get/ef3cb00b2af01c22d2524518b7444795ea76e5d004b0144292f9c87bafe4b0_340.jpg"}
    ]


app.get("/", function(req, res){
    res.render("landing");
})

app.get("/campgrounds", function(req, res){
    // Get all campgrounds from DB; empty {} allows it to search ALL data entries
    Campground.find({}, function(err, campgrounds){
        if(err){
            console.log(err);
        } else {
            res.render("index", {campgrounds: campgrounds});
        }
    })

});

app.post("/campgrounds", function(req, res){
   var name = req.body.name;
   var image = req.body.image;
   var desc = req.body.description;
   var newCampground = {name: name, image: image, description: desc};

//   Create new campground and save to DB
    Campground.create(newCampground, function(err, newlyCreated){
        if(err){
            console.log(err)
        } else {
               res.redirect("/campgrounds");
        }
    })
});

app.get("/campgrounds/new", function(req, res){
    res.render("new.ejs");

});

// SHOW
app.get("/campgrounds/:id", function(req, res){
    // find the campground with provided ID
    Campground.findById(req.params.id, function(err, foundCampground){
        if(err){
            console.log(err);
        } else {
            res.render("show", {campground: foundCampground});
        }
    })
});

app.listen(process.env.PORT, process.env.IP, function(){
    console.log("YelpCamp Server Connected")
    });