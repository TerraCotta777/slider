$(document).ready(function() {
	let position = 0;
	let itemMargin = 25 * 2;
	const slidesToShow = 4;
	const slidesToScroll = 3;
	const container = $('.slider__container');
	const track = $('.slider__track');
	const item = $('.slider__item');
	const btnPrev = $('.slider__button-prev');
	const btnNext = $('.slider__button-next');
	const itemsCount = item.length;
	const itemWidth = (container.width() - (slidesToShow * itemMargin)) / slidesToShow;
	const itemWithMargin = itemWidth + itemMargin;
	const movePosition = slidesToScroll * itemWithMargin;

	item.each(function(index, item) {
		$(item).css({
			minWidth: itemWidth,
		});
	});

	btnPrev.click(function(){
		const itemsLeft = Math.abs(position) / itemWithMargin;
		position += itemsLeft >= slidesToScroll ? movePosition : itemsLeft * itemWithMargin;
		setPosition();
		checkBtns();
	})
	btnNext.click(function(){
		const itemsLeft = itemsCount - (Math.abs(position) + slidesToShow * itemWithMargin) / itemWithMargin;
		position -= itemsLeft >= slidesToScroll ? movePosition : itemsLeft * itemWithMargin;
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

