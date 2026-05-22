// next button
nextBtn.addEventListener("click", () => {

    currentSlide++;

    if(currentSlide >= slides.length){
        currentSlide = 0;
    }

    updateCarousel();

});

// previous button
prevBtn.addEventListener("click", () => {

    currentSlide--;

    if(currentSlide < 0){
        currentSlide = slides.length - 1;
    }

    updateCarousel();

});

// previous button
prevBtn.addEventListener("click", () => {

    currentSlide--;

    if(currentSlide < 0){
        currentSlide = slides.length - 1;
    }

    updateCarousel();

});
