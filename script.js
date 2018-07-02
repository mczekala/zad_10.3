$(function(){
	var carouselImages = $('#carousel ul');
	var carouselIndicators = $('#carousel ol li');

	$('#buttonL').click(function() {changeSlideL()});
	$('#buttonR').click(function() {changeSlideR()});
	$('.index').click(function() {
		var id = '#'+$(this).attr('id');
		var index = $('.index').index($(id));
		move(index+1);
	});
	
	function changeSlideR() {
		carouselImages.animate({'marginLeft':-400}, 500, moveFirstSlideR);
	}
	function moveFirstSlideR() {
		var firstItem = carouselImages.find('li:first');
		var lastItem = carouselImages.find('li:last');
		lastItem.after(firstItem);
		carouselImages.css({marginLeft:0});
		changeToFull();
	}
	function changeSlideL() {
		carouselImages.animate({'marginLeft':400}, 500, moveFirstSlideL);
	}
	function moveFirstSlideL() {
		var firstItem = carouselImages.find('li:first');
		var lastItem = carouselImages.find('li:last');
		firstItem.before(lastItem);
		carouselImages.css({marginLeft:0});
		changeToFull();
	}
	function changeToFull() {
		var index=$('#carousel ul li:first').attr('id');
		changeToEmpty();
		if (index<0) {
			index=index+5;
		}
		index=index%5;
		carouselIndicators.eq(index).html('<li><i class="fas fa-circle"></i></li>');
	}
	function changeToEmpty(index) {
		var index=parseInt($('#carousel ul li:first').attr('id'))-1;
		if (index<0) {
			index=index+5;
		}
		index=index%5;
		carouselIndicators.eq(index).html('<li><i class="far fa-circle"></i></li>');
		index+=2;
		if (index<0) {
			index=index+5;
		}
		index=index%5;
		carouselIndicators.eq(index).html('<li><i class="far fa-circle"></i></li>');
	}
	function move(max) {
		var actual=checkActual();
		var distance = max-actual;
		if (distance<0) {
			distance=distance+5;
		}
		distance = distance%5;
		for(var i=0;i<distance;i++) {
			changeSlideR();
		}
	}
	function checkActual() {
		var actual = parseInt($('#carousel ul li:first').attr('id'));
			if (actual<0) {
				actual=actual+5;
		}
		return (actual%5)+1;
	}
});
