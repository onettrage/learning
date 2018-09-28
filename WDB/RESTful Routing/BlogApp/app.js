var express = require("express"),
    app = express(),
    bodyParser = require("body-parser"),
    mongoose = require("mongoose"),
    methodOverride = require("method-override"),
    expressSanitizer = require("express-sanitizer")
    
// App config
mongoose.connect("mongodb://localhost/restful_blog_app", { useNewUrlParser: true });
app.set("view engine", "ejs");
app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended: true}));
app.use(expressSanitizer());
app.use(methodOverride("_method"));

// Mongoose model config
var blogSchema = new mongoose.Schema({
    title: String,
    image: String,
    body: String,
    created: {type: Date, default: Date.now}
});

var Blog = mongoose.model("Blog", blogSchema);

// RESTful routes
app.get("/", function(req, res){
    res.redirect("/blogs")
});

// INDEX Route
app.get("/blogs", function(req, res){
    Blog.find({}, function(err, blogs){
        if(err){
            console.log("error")
        } else {
            res.render("index", {blogs: blogs});
        }
    })
});

// NEW Route
app.get("/blogs/new", function(req, res){
    res.render("new");
})

// CREATE Route
app.post("/blogs", function(req, res){
    // create blog
    console(req.body)
    req.body.blog.body = req.sanitize(req.body.blog.body);
    console.log("=======")
    Blog.create(req.body.blog, function(err, newBlog){
        if(err){
            res.render("new");
        } else {
                // redirect to index
                res.redirect("/blogs");
        }
    })
});

// SHOW Route
app.get("/blogs/:id", function(req, res){
    Blog.findById(req.params.id, function(err, foundBlog){
        if(err){
            res.redirect("/blogs")
        } else {
            res.render("show", {blog: foundBlog});
        }
    })
});

// EDIT Route
app.get("/blogs/:id/edit", function(req, res){
    Blog.findById(req.params.id, function(err, foundBlog){
        if(err){
            res.redirect("/blogs");
        } else {
            res.render("edit", {blog: foundBlog})
        }
    })
});

// UPDATE Route
app.put("/blogs/:id", function(req, res){
    req.body.blog.body = req.sanitize(req.body.blog.body);
    Blog.findOneAndUpdate({"_id": req.params.id}, req.body.blog, function(err, updatedBlog){
        if(err){
            res.redirect("/blogs");
        } else {
            res.redirect("/blogs/" + req.params.id);
        }
    })
});

// DELETE Route
app.delete("/blogs/:id", function(req, res){
    // destroy post
    Blog.findByIdAndRemove(req.params.id, function(err){
        if(err){
            res.redirect("/blogs");
        } else {
            res.redirect("/blogs");
        }
    });
})

app.listen(process.env.PORT, process.env.IP, function(){
    console.log("Connected")
});