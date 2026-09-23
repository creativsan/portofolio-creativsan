/* =====================================
   FILTER PORTFOLIO
===================================== */

const tabs = document.querySelectorAll(".tab");
const cards = document.querySelectorAll(".card");

tabs.forEach(tab => {

  tab.addEventListener("click", () => {

    tabs.forEach(item => {
      item.classList.remove("active");
    });

    tab.classList.add("active");

    const filter = tab.dataset.filter;

    cards.forEach(card => {

      if (
        filter === "all" ||
        card.dataset.type === filter
      ) {

        card.style.display = "";

      } else {

        card.style.display = "none";

      }

    });

  });

});


/* =====================================
   YOUTUBE
===================================== */

function playYoutube(element, videoId) {

  element.innerHTML = `
    <iframe
      src="https://www.youtube.com/embed/${videoId}?autoplay=1&playsinline=1"
      title="YouTube Video"
      allow="autoplay; encrypted-media; picture-in-picture"
      allowfullscreen>
    </iframe>
  `;

}


/* =====================================
   DATA CAROUSEL
===================================== */

const portfolios = [

  /* =========================
     DESIGN 1
  ========================= */

  [
    "assets/design1.jpg",
    "assets/design2.jpg",
    "assets/design3.jpg"
  ],


  /* =========================
     DESIGN 2
  ========================= */

  [
    "assets/design4.jpg",
    "assets/design5.jpg",
    "assets/design6.jpg"
  ],


  /* =========================
     DESIGN 3
  ========================= */

  [
    "assets/design7.jpg",
    "assets/design8.jpg",
    "assets/design9.jpg"
  ]

];


let currentPortfolio = 0;

let currentSlide = 0;


/* =====================================
   OPEN CAROUSEL
===================================== */

function openCarousel(index) {

  currentPortfolio = index;

  currentSlide = 0;

  updateCarousel();

  document
    .getElementById("carousel")
    .classList.add("open");

  document.body.style.overflow = "hidden";

}


/* =====================================
   CLOSE CAROUSEL
===================================== */

function closeCarousel() {

  document
    .getElementById("carousel")
    .classList.remove("open");

  document.body.style.overflow = "";

}


/* =====================================
   UPDATE IMAGE
===================================== */

function updateCarousel() {

  const images = portfolios[currentPortfolio];

  const image =
    document.getElementById("carouselImage");

  const counter =
    document.getElementById("carouselCounter");


  image.src = images[currentSlide];

  counter.textContent =
    `${currentSlide + 1} / ${images.length}`;

}


/* =====================================
   NEXT
===================================== */

function nextSlide() {

  const images = portfolios[currentPortfolio];

  currentSlide++;

  if (currentSlide >= images.length) {

    currentSlide = 0;

  }

  updateCarousel();

}


/* =====================================
   PREVIOUS
===================================== */

function previousSlide() {

  const images = portfolios[currentPortfolio];

  currentSlide--;

  if (currentSlide < 0) {

    currentSlide = images.length - 1;

  }

  updateCarousel();

}


/* =====================================
   KEYBOARD
===================================== */

document.addEventListener("keydown", event => {

  const carousel =
    document.getElementById("carousel");

  if (!carousel.classList.contains("open")) {
    return;
  }


  if (event.key === "Escape") {

    closeCarousel();

  }


  if (event.key === "ArrowRight") {

    nextSlide();

  }


  if (event.key === "ArrowLeft") {

    previousSlide();

  }

});


/* =====================================
   CLICK AREA LUAR CAROUSEL
===================================== */

document
  .getElementById("carousel")
  .addEventListener("click", event => {

    if (
      event.target.id === "carousel"
    ) {

      closeCarousel();

    }

  });
