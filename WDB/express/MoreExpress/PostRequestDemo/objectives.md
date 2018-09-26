#Using a form to send a post request

<form action="/addThing" method="POST">
    <input type="text" name="newthing" placeholder="thingtoadd">
    <button>Add New Thing</button>
</form>



#Use body-parser package to get form data

!!!Don't forget to add "app.use(bodyParser.urlencoded({extended: true}));" and set body-parser() as variable "bodyParser"!!!

app.post("/addThing", function(req, res){
    var newthing = req.body.namespecifiedininput;
    arrayname.push(newThing);
    res.redirect("/pagethatnewThingshowsup")
}

"res.redirect" will redirect to the specified page at the end of the function.