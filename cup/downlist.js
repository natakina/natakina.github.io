// Выпадающий список в навигационном меню

// Первый способ (вместо data-item можно использовать метод find)
// $('.subitem').click(function(){
// 	var itemName = $(this).data('item');	
// 	$('.subitem:not([data-item="'+itemName+'"])').removeClass('downlist');
// 	$(this).toggleClass('downlist');
// })


// Второй способ (наверное самый лучший)
$('.subitem').click(function(){
	var els = $('.subitem');
	var that = this;
	els.each(function(){
		if(this!==that){
			$(this).removeClass('downlist');
		}
	});
	$(this).toggleClass('downlist');
})


// Третий способ
// $('.subitem').click(function(){
// 	var els = $('.subitem');
// 	for (var i = 0; i < els.length; i++){
// 		if(els[i] !== this){
// 			$(els[i]).removeClass('downlist');
// 		}
// 	}
// 	$(this).toggleClass('downlist');
// })