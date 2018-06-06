$(function(){
	var carouselList = $('#carousel ul');
	var carouselI = $('#carousel ol li');
	var index = 0;
	$('#buttonL').click(function() {changeSlideL()});
	$('#buttonR').click(function() {changeSlideR()});
	var indicator_1 = $('#index-1').click(function() {move(1)});
	var indicator_2 = $('#index-2').click(function() {move(2)});
	var indicator_3 = $('#index-3').click(function() {move(3)});
	var indicator_4 = $('#index-4').click(function() {move(4)});
	var indicator_5 = $('#index-5').click(function() {move(5)});
	
	function changeSlideL() {
		carouselList.animate({'marginLeft':-400}, 500, moveFirstSlideL);
	}
	function changeSlideR() {
		carouselList.animate({'marginLeft':400}, 500, moveFirstSlideR);
	}
	function moveFirstSlideL() {
		var firstItem = carouselList.find('li:first');
		var lastItem = carouselList.find('li:last');
		lastItem.after(firstItem);
		carouselList.css({marginLeft:0});
		index--;
		changeToFull();
	}
	function moveFirstSlideR() {
		var firstItem = carouselList.find('li:first');
		var lastItem = carouselList.find('li:last');
		firstItem.before(lastItem);
		carouselList.css({marginLeft:0});
		index++;
		changeToFull();
	}
	function changeToFull() {
		changeToEmpty(index-1);
		changeToEmpty(index+1);
		if (index<0) {
			index=index+5;
		}
		index=index%5;
		carouselI.eq(index).html('<li><i class="fas fa-circle"></i></li>');
	}
	function changeToEmpty(index) {
		if (index<0) {
			index=index+5;
		}
		index=index%5;
		carouselI.eq(index).html('<li><i class="far fa-circle"></i></li>');
	}
	function move(max) {
		for(var i=0;i<max;i++) {
			changeSlideR();
		}
		console.log(indicator_1);
		console.log(indicator_5);
	}
});