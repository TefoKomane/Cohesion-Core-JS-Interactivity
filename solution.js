// remove active dots
dots.forEach((dot) => {
        dot.classList.remove("active-dot");
});

// active dot
dots[currentSlide].classList.add("active-dot");
}



// dots click
dots.forEach((dot, index) => {

dot.addEventListener("click", () => {
        currentSlide = index;
    updateCarousel();
});