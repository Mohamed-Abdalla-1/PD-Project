let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
    showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("mySlides-1");
    if (n > slides.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = slides.length }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    slides[slideIndex - 1].style.display = "block";
}

let slideIndex_1 = 1;
showSlides_1(slideIndex_1);

// Next/previous controls
function plusSlides_1(n) {
    showSlides_1(slideIndex_1 += n);
}

// Thumbnail image controls
function currentSlide(n) {
    showSlides_1(slideIndex_1 = n);
}

function showSlides_1(n) {
    let i;
    let slides = document.getElementsByClassName("mySlides-2");
    if (n > slides.length) { slideIndex_1 = 1 }
    if (n < 1) { slideIndex_1 = slides.length }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    slides[slideIndex_1 - 1].style.display = "block";
}
