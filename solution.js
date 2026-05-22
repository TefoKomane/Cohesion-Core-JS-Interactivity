//Nonkululeko Maphanga transition feature code for the COHESION CORE IMAGE Carousel Task//
// update carousel
function updateCarousel(){

    // remove old classes
    slides.forEach((slide) => {
        slide.classList.remove(
            "active",
            "left",
            "right"
        );
    });

    // remove active dots
    dots.forEach((dot) => {
        dot.classList.remove("active-dot");
    });

    // active slide
    slides[currentSlide].classList.add("active");

    // left slide
    let leftSlide = currentSlide - 1;

    if(leftSlide < 0){
        leftSlide = slides.length - 1;
    }

    slides[leftSlide].classList.add("left");

    // right slide
    let rightSlide = currentSlide + 1;

    if(rightSlide >= slides.length){
        rightSlide = 0;
    }

    slides[rightSlide].classList.add("right");
