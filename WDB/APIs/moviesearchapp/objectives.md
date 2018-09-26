Using OMDb API to create a form that allows the user to search for a term, which then returns a list of films and the year they were released.

Things taken away from this codealong, were to not forget to provide a back-button, and the use of JSON.parse!

Noticed that there was a potential flaw in the application, whereby a term with no results created a page error; after looking it up, discovered that teaching assistant Ian had provided a solution:

app.get("/results", function(req, res){
    var query = req.query.search;
    var url = "https://omdbapi.com/?s=" + query + "&apikey=thewdb";
    request(url, function(error, response, body){
        var data = JSON.parse(body)
        if(error || data.Response === 'False') {
            res.send(error || data.Error);
        } else {
            res.render("results", {data: data});
        }
    });
});