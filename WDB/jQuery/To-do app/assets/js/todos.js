$("ul").on("click", "li", function(){
	($(this).toggleClass("completed"))
});

// click on X to delete To-Do
$("ul").on("click", "span", function(event){
	$(this).parent().fadeOut(500, function() {
		$(this).remove();
	});
	event.stopPropagation();
});

$("input[type='text']").keypress(function(event){
	if(event.which === 13){
		var toDoText = $(this).val();
		$(this).val("");
		$("ul").append("<li><span><i class='fa fa-trash'></i></span> "+toDoText+"</li>")
	}
});

$("#header").on("click", function(){
	$("input[type='text'").fadeToggle();
})