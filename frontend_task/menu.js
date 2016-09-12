$(function(){
	$('.item').click(function(){
		var oldNum = $('.active').data('tab');
		$('.item').removeClass('active');
		$(this).addClass('active');
		var num = $(this).data('tab');

		$('.itemtext').fadeOut(500,function(){
			if(oldNum === $(this).data('tabnum')){
				$('[data-tabnum="' + num + '"]').fadeIn(150);
			};
		});
	});
});