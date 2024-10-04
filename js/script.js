document.addEventListener("DOMContentLoaded", function () {
  const toggleButton = document.querySelector(".navbar .mobile-menu-toggle i");

  const mobileMenu = document.querySelector(".navbar .mobile-menu-items");

  toggleButton.addEventListener("click", function () {
    mobileMenu.classList.toggle("active");

    if (mobileMenu.classList.contains("active")) {
      toggleButton.classList.remove("fa-bars");
      toggleButton.classList.add("fa-times");
    } else {
      toggleButton.classList.remove("fa-times");
      toggleButton.classList.add("fa-bars");
    }
  });

  const slides = document.querySelectorAll(".carousel-slide");
  const indicators = document.querySelectorAll(".indicator");
  const heroText = document.querySelector(".hero-text");
  const heroTitle = document.getElementById("hero-title");
  const heroDescription = document.getElementById("hero-description");

  const slideData = [
    {
      title: "Tytuł Slajdu 1",
      description:
        "Opis slajdu 1. Tutaj możesz umieścić dowolny tekst, który chcesz przekazać odwiedzającym.",
    },
    {
      title: "Tytuł Slajdu 2",
      description:
        "Opis slajdu 2. Tutaj możesz umieścić inny tekst dla drugiego slajdu.",
    },
    {
      title: "Tytuł Slajdu 3",
      description: "Opis slajdu 3. To jest tekst dla trzeciego slajdu.",
    },
  ];

  let currentSlide = 0;

  const nextButton = document.querySelector(".carousel-button.next");
  const prevButton = document.querySelector(".carousel-button.prev");

  function showSlide(index) {
    // Animacja fade-out tekstu
    heroText.style.opacity = 0;

    // Po zakończeniu animacji fade-out, aktualizuj tekst i wykonaj fade-in
    setTimeout(() => {
      // Aktualizacja tekstu
      heroTitle.textContent = slideData[index].title;
      heroDescription.textContent = slideData[index].description;

      // Animacja fade-in tekstu
      heroText.style.opacity = 1;
    }, 500); // Czas trwania animacji musi być zgodny z transition w CSS

    // Aktualizacja slajdów obrazów
    slides.forEach((slide) => slide.classList.remove("active"));
    indicators.forEach((indicator) => indicator.classList.remove("active"));

    slides[index].classList.add("active");
    indicators[index].classList.add("active");
  }

  nextButton.addEventListener("click", () => {
    currentSlide = (currentSlide + 1) % slides.length;
    showSlide(currentSlide);
    resetInterval();
  });

  prevButton.addEventListener("click", () => {
    currentSlide = (currentSlide - 1 + slides.length) % slides.length;
    showSlide(currentSlide);
    resetInterval();
  });

  // Klikanie wskaźników slajdów
  indicators.forEach((indicator) => {
    indicator.addEventListener("click", (e) => {
      currentSlide = parseInt(e.target.getAttribute("data-slide"));
      showSlide(currentSlide);
      resetInterval();
    });
  });

  // Automatyczne przełączanie slajdów co 5 sekund
  // let slideInterval = setInterval(() => {
  //   currentSlide = (currentSlide + 1) % slides.length;
  //   showSlide(currentSlide);
  // }, 5000);

  // function resetInterval() {
  //   clearInterval(slideInterval);
  //   slideInterval = setInterval(() => {
  //     currentSlide = (currentSlide + 1) % slides.length;
  //     showSlide(currentSlide);
  //   }, 5000);
  // }

  // Inicjalizacja pierwszego slajdu
  showSlide(currentSlide);




  // OFERTA CARDS 

  document.querySelectorAll('.learn-more').forEach(function(button) {
    button.addEventListener('click', function() {
      const card = this.closest('.card');
      card.classList.toggle('show-overlay');
    });
  });

  document.querySelectorAll('.close-overlay').forEach(function(button) {
    button.addEventListener('click', function(event) {
      event.stopPropagation();
      const card = this.closest('.card');
      card.classList.remove('show-overlay');
    });
  });
});
