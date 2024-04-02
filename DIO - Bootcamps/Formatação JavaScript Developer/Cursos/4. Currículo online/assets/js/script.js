const slider = document.querySelector('.conquistas');

function moveSlide() {
    slider.appendChild(slider.firstElementChild);
}

setInterval(moveSlide, 2200);
