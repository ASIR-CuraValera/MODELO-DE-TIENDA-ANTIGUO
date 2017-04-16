$(document).ready(function (javi){
	
	$(".navbar a").click(function pulsar(){
	
	var elemento = $(this).attr('id');
	var pagina = "html/"+elemento+".html";
	$("main").load(pagina);

	});
	
	javi.preventDefault();
});


