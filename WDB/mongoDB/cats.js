var mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/cat_app", {useNewUrlParser: true});

// this creates the schematic for future entries, not required, but very helpful, especially when data validation/verification is essential
var catSchema = new mongoose.Schema({
    name: String,
    age: Number,
    temperament: String
});

var Cat = mongoose.model("Cat", catSchema);

// adding a new cat to the DB
// var george = new Cat({
//     name: "Boris",
//     age: 4,
//     temperament: "Playful"
// });

Cat.create({
   name: "Snow White",
   age: 15,
   temperament: "Manipulative"
}, function(err, cat){
    if(err){
        console.log(err)
    } else {
        console.log(cat);
    }
});
// george.save(function(err, cat){
//     if(err){
//         console.log("Couldn't save")
//     } else {
//         console.log("Cat saved as:")
//         console.log(cat);
//     }
// });

// retrieve all cats from the DB and console.log each one

Cat.find({}, function(err, cats){
    if(err){
        console.log("Gah, an error");
        console.log(err);
    } else {
        console.log("All the cats waiting in the line for the bathroom:");
        console.log(cats);
    }
});