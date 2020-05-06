$(document).ready(function(){
	$('.slider').bxSlider({
	auto: false,
	 minSlides: 4,
	 maxSlides: 4,
	 adaptiveHeight: true,
	 slideMargin: 30,
	 controls: false,
	 slideWidth: 270,
	 speed: 500
	});
	
	$('.add-to-cart').hide();
	
	$(".list-items")
    .mouseover(function() {
			$(this).find('.add-to-cart').show();
			$(this).find('.reiting-price').hide();
		})
    .mouseout(function(){           
      $(this).find('.add-to-cart').hide();         
			$(this).find('.reiting-price').show();
  });
});