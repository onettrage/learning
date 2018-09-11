var movies = [
	{
		title: "Predator",
		rating: 3,
		hasWatched: false
	},
	{
		title: "Terminator 2",
		rating: 4.5,
		hasWatched: true
	},
	{
		title: "Jumanji: Welcome To The Jungle",
		rating: 3,
		hasWatched: true
	},
	{
		title: "Grave of the Fireflies",
		rating: 5,
		hasWatched: false
	}
	]


movies.forEach(function(movie){
    var result = "You have ";
if (movie.hasWatched){
result += "watched ";} else 
{ result += "not watched ";
}
result += "\"" + movie.title + "\" - ";
result += movie.rating + " stars";
                           
    console.log(result)
})