let nextBtn = document.getElementById("nextBtn");
let prevBtm = document.getElementById("prevBtn");
let carouselContainer = document.querySelector(".carousel");

let slides = document.getElementsByClassName("slide").length;
let currentIndex = 0;

function showCorrectSlide(index) {
  // let offset = -index * 100;
  // carouselContainer.style.transform = `translateX(${offset}%)`;
  currentIndex = (index + slides) % slides;
  console.log(currentIndex);

  carouselContainer.style.transform = `translateX(${-currentIndex * 100}%)`;
}

function nextSlide(direction) {
  // currentIndex = (currentIndex + 1) % slides.length;
  // showCorrectSlide(currentIndex);
  let index = currentIndex + direction;
  showCorrectSlide(index);
}
function prevSlide(direction) {
  let index = currentIndex - direction;

  showCorrectSlide(index);
}
nextBtn.addEventListener("click", function () {
  nextSlide(1);
});

prevBtm.addEventListener("click", function () {
  prevSlide(-1);
});
