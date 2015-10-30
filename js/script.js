$('input,textarea').focus(function(){
  $(this).data('placeholder',$(this).attr('placeholder'))
  $(this).attr('placeholder','');
});
$('input,textarea').blur(function(){
  $(this).attr('placeholder',$(this).data('placeholder'));
});


$('.slct').click(function(){
	var dropBlock = $(this).parent().find('.drop');

	if( dropBlock.is(':hidden') ) {
		dropBlock.slideDown(200);

		$(this).addClass('active');
		$('.drop').find('li').click(function(){
			var selectResult = $(this).html();
			$(this).parent().parent().find('input').val(selectResult);
			$(this).parent().parent().find('.slct').removeClass('active').html(selectResult);

			dropBlock.slideUp(200);
		});
	
	} else {
		$(this).removeClass('active');
		dropBlock.slideUp(200);
	}

	return false;
});

$(document).mouseup(function (e) {
    var container = $(".drop");
    if (container.has(e.target).length === 0){
        container.slideUp(200);
        $('.slct').removeClass('active');
    }
});

$(document).ready(function() {
	$('.sidebar-btn').click(function() {
		$('.sidebar').addClass('active')
	});

	$(document).mouseup(function (e) {
	    var sidebar = $(".sidebar");
	    if (sidebar.has(e.target).length === 0){
	        sidebar.removeClass('active');
	    }
	});
	$(document).keyup(function(d) {
	    if (d.keyCode == 27) {
	        $('.sidebar').removeClass('active');
	    }
	});

});