$("ul").on("click","li",function(){
	if ($(this).css("color") === "rgb(128, 128, 128)")
	{
		$(this).toggleClass("completed");
	}
	else{

		$(this).toggleClass("completed");
		

	}
	
})

$("ul").on("click","span",function(event){
	$(this).parent().fadeOut(500,function(){
		$(this).remove();
	});
	event.stopPropagation();
});

$("input[type='text'").keypress(function(event){
	if(event.which === 13){
		var todoText = $(this).val();
		$(this).val("");
		$("ul").append("<li><span><i class='fas fa-trash-alt'></i> </span>" + todoText + "</li>");
	}
})
$(".fa-plus").click(function(){
	$("input[type='text'").fadeToggle()
})