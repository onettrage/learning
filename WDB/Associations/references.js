var mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/blog_demo_2", { useNewUrlParser: true });

var Post = require("./models/post");
var User = require("./models/user")


Post.create({
    title: "How to cook the best burger pt. 4",
    content: "Hungry for burgers now :("
}, function(err, post){
    User.findOne({email: "Bob@burgers.com"}, function(err, foundUser){
        if(err){
            console.log(err);
        } else {
            foundUser.posts.push(post);
            foundUser.save(function(err, data){
                if(err){
                    console.log(err)
                } else {
                    console.log(data);
                }
            })
        }
    })
});

// User.create({
//     email: "Bob@burgers.com",
//     name: "Bob Belcher"
// })

// User.findOne({email: "Bob@burgers.com"}).populate("posts").exec(function(err, user){
//     if(err){
//         console.log(err)
//     } else {
//         console.log(user);
//     }
// })
