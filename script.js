$(document).ready(function() {
	let position = 0;
	const slidesToShow = 5;
	const slidesToScroll = 2;
	const container = $('.slider__container');
	const track = $('.slider__track');
	const item = $('.slider__item');
	const btnPrev = $('.slider__button-prev');
	const btnNext = $('.slider__button-next');
	const itemsCount = item.length;
	const itemWidth = container.width() / slidesToShow;
	const movePosition = slidesToScroll * itemWidth;

	

	item.each(function(index, item) {
		$(item).css({
			minWidth: itemWidth,
		});
	});

	btnPrev.click(function(){
		const itemsLeft = Math.abs(position) / itemWidth;
		position += itemsLeft >= slidesToScroll ? movePosition : itemsLeft * itemWidth;
		setPosition();
		checkBtns();
	})
	btnNext.click(function(){
		const itemsLeft = itemsCount - (Math.abs(position) + slidesToShow * itemWidth) / itemWidth;
		position -= itemsLeft >= slidesToScroll ? movePosition : itemsLeft * itemWidth;
		setPosition();
		checkBtns();
	})

	const setPosition = () => {
		track.css({
			transform: `translateX(${position}px)`
		})
	}

	const checkBtns = () => {
		btnPrev.prop('disabled', position === 0);
		btnNext.prop('disabled', position <= -(itemsCount - slidesToShow) * itemWidth);
	}

	checkBtns();

});

