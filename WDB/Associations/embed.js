var mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/blog_demo", { useNewUrlParser: true });


// Post - title, content
var postSchema = new mongoose.Schema({
    title: String,
    content: String
});

var Post = mongoose.model("Post", postSchema);

// User - email, name
var userSchema = new mongoose.Schema({
    email: String,
    name: String,
    posts: [postSchema]
});

var User = mongoose.model("User", userSchema);




// var newUser = new User({
//     email: "chewbacca@grrrrrrrr.co.uk",
//     name: "Chew Bacca"
// });

// newUser.posts.push({
//     title: "GRRRRRRRRRRRRrwrwrwrwrwr",
//     content: "ureurbrrubrurbrrururbrRubrububrubbguogjgpo"
// });

// newUser.save(function(err, user){
//     if(err){
//         console.log(err);
//     } else {
//         console.log(user);
//     }
// })

// var newPost = new Post({
//     title: "Reflections on Apples",
//     content: "Granny Smith approves"
// });

// newPost.save(function(err, post){
//     if(err){
//         console.log(err);
//     } else {
//         console.log(post);
//     }
// })

User.findOne({name: "Chew Bacca"}, function(err, user){
    if(err){
        // console.log(err)
    } else {
        user.posts.push({
            title: "Hulk Smash",
            content: "Er, wrong character"
        });
        user.save(function(err, user){
            if(err){
                console.log(err);
            } else {
                console.log(user);
            }
        })
    }
})