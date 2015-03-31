$(document).ready(function(){
	$( ".slogan" ).hide().fadeIn( 2400 );

	$(document).on('click', '.icon', function(){
		var $element = $('.description'),
			$this = $(this),
			$iconHere = $('.icon.here');
			section = $this.data('section');
		
		$iconHere.removeClass('here');
		$this.addClass("here");
		
		$element.removeClass('content');
		$('.description.' + section).addClass('content');
	});

	$(".Phone").click(function(){
	    $(".callWrap").addClass("phoneCall");
	    $( ".phoneCall" ).fadeIn( 500 );
	});

	$(".cancel").click(function(){
	    $( ".phoneCall" ).fadeOut( 100 );
	});
});