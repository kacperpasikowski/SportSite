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

  const navbar = document.querySelector(".navbar");
  console.log(navbar); // Sprawdź, czy navbar jest znaleziony

  window.addEventListener("scroll", function () {
    console.log("Scroll event fired"); // Sprawdź, czy zdarzenie scroll działa
    console.log(window.scrollY); // Powinno wypisywać aktualną wartość scrolla
    if (window.scrollY > 50) {
      // Gdy przewiniemy o więcej niż 50px
      navbar.classList.add("navbar-scrolled");
      console.log("Navbar scrolled class added"); // Informacja, że klasa została dodana
    } else {
      navbar.classList.remove("navbar-scrolled");
      console.log("Navbar scrolled class removed"); // Informacja, że klasa została usunięta
    }
  });

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

  const nextButton = document.querySelector(".carousel-button.next");
  const prevButton = document.querySelector(".carousel-button.prev");

  let currentSlide = 0;

  function showSlide(index) {
    slides.forEach((slide, idx) => {
      slide.classList.toggle("active", idx === index);
    });

    indicators.forEach((indicator, idx) => {
      indicator.classList.toggle("active", idx === index);
    });

    // Aktualizacja tekstu z animacją
    heroText.classList.remove("slide-in-right");
    void heroText.offsetWidth; // Reflow dla resetowania animacji
    heroTitle.textContent = slideData[index].title;
    heroDescription.textContent = slideData[index].description;
    heroText.classList.add("slide-in-right");
  }

  nextButton.addEventListener("click", () => {
    currentSlide = (currentSlide + 1) % slides.length;
    showSlide(currentSlide);
  });

  prevButton.addEventListener("click", () => {
    currentSlide = (currentSlide - 1 + slides.length) % slides.length;
    showSlide(currentSlide);
  });

  indicators.forEach((indicator, idx) => {
    indicator.addEventListener("click", () => {
      currentSlide = idx;
      showSlide(currentSlide);
    });
  });

  // Inicjalizacja
  showSlide(currentSlide);

  // OFERTA CARDS

  document.querySelectorAll(".learn-more").forEach(function (button) {
    button.addEventListener("click", function () {
      const card = this.closest(".card");
      card.classList.toggle("show-overlay");
    });
  });

  document.querySelectorAll(".close-overlay").forEach(function (button) {
    button.addEventListener("click", function (event) {
      event.stopPropagation();
      const card = this.closest(".card");
      card.classList.remove("show-overlay");
    });
  });

  //placeholder karuzela google
});
