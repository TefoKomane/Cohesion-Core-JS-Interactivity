//tefo komane auto-play feature code for the cohesion core image carousel//
// autoplay
setInterval(() => {

    currentSlide++;

    if(currentSlide >= slides.length){
        currentSlide = 0;
    }

    updateCarousel();

}, 6000);
