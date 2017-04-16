$(document).ready(function(){


var contador = 1;
contador = 1;
	$('#boton').click(function(){
		if (contador == 1) {
			$('.navbar').animate({
					left:'0%',
					
			},800);
			contador = 0;

		} else if (contador = 1){
			$('.navbar').animate({
			        left:'-100%',
				
		});
		  
			
		}
		
		
	});
		  

	$("#cerrar").click(function() {
		if(contador = 1){
			$(".navbar").animate({
				left:"-100%",
			});
		}
			

	});
		


});










