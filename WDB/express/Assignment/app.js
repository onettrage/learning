var express = require("express");
var app = express();

app.get("/", function(req, res){
    res.send("Hi there, welcome to my assignment!")
});

app.get("/speak/:animal", function(req, res) {
     var sounds = {
        pig: "Oink",
        cow: "Moo",
        dog: "Woof",
        horse: "Neigh",
        cat: "Where's my food"
    }
    var animal = req.params.animal.toLowerCase();
    var sound = sounds[animal]; 
    
    res.send("The " + animal + " goes '" + sound + "'");
});

app.get("/repeat/:message/:times", function(req, res){
    var message = req.params.message;
    var times = Number(req.params.times);
    var result = "";
    
    for(i = 0; i < times; i++){
        result += message + " ";    
    }
    res.send(result);
})

app.get("*", function(req, res){
    res.send("Sorry, page not found... What are you doing with your life?")
});

app.listen(process.env.PORT, process.env.IP, function(){
    console.log("Connected");
});

// Couldn't figure out the loop for the third objective, and hadn't clocked onto the fact I can make the 2nd objective a conditional!
// app.get("/speak/pig", function(req, res){
//     res.send("The pig goes 'Oink'")
// });

// app.get("/speak/cow", function(req, res){
//     res.send("The cow goes 'Moo'")
// });

// app.get("/speak/dog", function(req, res){
//     res.send("The dog goes 'Woof'")
// });

// app.get("/repeat/:subpage/:num", function(req, res){
//     var num = (Number(req.params.num));
//     var subpage = String(req.params.subpage) + " ";
    
//     function repeats(subpage, num){
//         console.log(repeats())
//     }
    // function hello(repeats){
        
    // }
    // for (i = 0; i < repeats; i++){
    //     res.send(hello());
    // }
// });