const sliderArea = document.querySelector('.track');
const sliderHexagon = document.querySelector('.track__img');
const cardWrap = document.querySelector('.cards__wrap');
const cardArr = document.querySelectorAll('.card');
const stepSize = cardArr[0].clientWidth;
const arrow = document.querySelector('.track__pointer');
let startTouch = null;
let currentPos = 0;
const degValue = 60;

sliderArea.addEventListener('touchstart', (evt) => {
    if(evt.touches.length === 1) {
        startTouch = evt.touches.item(0).clientX;
    } else {
        startTouch = null;
    }
});

sliderArea.addEventListener('touchend', (evt) => {
    let swipeLength = 50;
    if (startTouch) {
        let endTouch = evt.changedTouches.item(0).clientX;

        if (endTouch < startTouch - swipeLength && currentPos < cardArr.length - 1) {
            // Свайп влево
            currentPos++;
            cardWrap.style.transform = 'translateX(' + (-stepSize * currentPos) + 'px)';
            sliderHexagon.style.transform = 'rotate(' + (degValue * currentPos) + 'deg)';
            if (currentPos > 0 && currentPos < cardArr.length - 1) {
                arrow.classList.remove("track__pointer--move_right");
                arrow.classList.remove("track__pointer--move_both");
                void arrow.offsetWidth;
                arrow.classList.add("track__pointer--move_both");
            }
            if (currentPos === cardArr.length - 1) {
                arrow.classList.remove("track__pointer--move_both");
                arrow.classList.remove("track__pointer--move_left");
                void arrow.offsetWidth;
                arrow.classList.add("track__pointer--move_left");
            }
        }
        if (endTouch > startTouch + swipeLength && currentPos > 0) {
            // Свайп вправо
            currentPos--;
            cardWrap.style.transform = 'translateX(' + (-stepSize * currentPos) + 'px)';
            sliderHexagon.style.transform = 'rotate(' + (degValue * currentPos) + 'deg)';
            if (currentPos > 0 && currentPos < cardArr.length - 1) {
                arrow.classList.remove("track__pointer--move_left");
                arrow.classList.remove("track__pointer--move_both");
                void arrow.offsetWidth;
                arrow.classList.add("track__pointer--move_both");
            }
            if (currentPos === 0) {
                arrow.classList.remove("track__pointer--move_both");
                arrow.classList.remove("track__pointer--move_right");
                void arrow.offsetWidth;
                arrow.classList.add("track__pointer--move_right");
            }
        }
    }
});
