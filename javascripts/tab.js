$(document).ready(function(){
	$( ".slogan" ).hide().fadeIn( 2400 );

	$(".Phone").click(function(){
	    $(".callWrap").addClass("phoneCall");
	    $( ".phoneCall" ).fadeIn( 500 );
	});

	$(".cancel").click(function(){
	    $( ".phoneCall" ).fadeOut( 100 );
	});
});