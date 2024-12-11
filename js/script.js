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
      title: "Sport",
      description: "Rozwijaj swoją sprawność fizyczną i umiejętności akrobatyczne pod okiem profesjonalistów. Osiągnij swoje cele z nami!"
    },
    {
      title: "Rozwój",
      description: "Odkrywaj swoje możliwości, przekraczaj granice i ucz się nowych rzeczy. Razem z nami osiągniesz to, co niemożliwe!"
    },
    {
      title: "Zabawa",
      description: "Zanurz się w świecie pełnym pasji i energii. Nauka w połączeniu z zabawą daje najlepsze efekty!"

    },
    {
      title: "Kreatywność",
      description: "Pobudź swoją wyobraźnię, twórz i wyrażaj siebie w nowych, zaskakujących formach ruchu."

    }
  ];

  // Pobierz elementy tekstowe
  const heroTitle = document.getElementById('hero-title');
  const heroDescription = document.getElementById('hero-description');
  const heroText = document.querySelector('.hero-text');

  // Pobierz indykatory
  const indicators = document.querySelectorAll('.carousel-indicators-custom button');

  // Pobierz przyciski nawigacyjne
  const nextButton = document.querySelector(".carousel-control-next-custom");
  const prevButton = document.querySelector(".carousel-control-prev-custom");

  // Inicjalizacja Bootstrap Carousel
  const heroCarousel = document.querySelector('#heroCarousel');
  const carousel = new bootstrap.Carousel(heroCarousel, {
    interval: 5000,
    ride: 'carousel',
    pause: false,
    wrap: true
  });


  
  // Inicjalizacja tekstu dla pierwszego slajdu
  updateText(0);

  // Funkcja do aktualizacji tekstu z animacją
  function updateText(index) {
    // Usuń animacje, jeśli są aktywne
    heroText.classList.remove("fade-in", "fade-out");
  
    // Rozpocznij fade-out i natychmiast zmień tekst
    heroText.classList.add("fade-out");
  
    setTimeout(() => {
      // Zaktualizuj treść po krótkim czasie
      heroTitle.textContent = slideData[index].title;
      heroDescription.textContent = slideData[index].description;
  
      // Rozpocznij fade-in
      heroText.classList.remove("fade-out");
      heroText.classList.add("fade-in");
    }, 300); // Skrócony czas fade-out (dopasuj do CSS)
  }

  // Nasłuchiwanie na zmianę slajdu
  heroCarousel.addEventListener('slide.bs.carousel', function (event) {
    const nextSlide = event.to;
  
    // Zaktualizuj indykatory
    indicators.forEach((indicator, idx) => {
      indicator.classList.toggle("active", idx === nextSlide);
    });
  
    // Zaktualizuj tekst
    updateText(nextSlide);
  });

  // Obsługa kliknięć na indykatory
  indicators.forEach((indicator, idx) => {
    indicator.addEventListener("click", () => {
      carousel.to(idx);
      // Bootstrap automatycznie emituje 'slid.bs.carousel' po zakończeniu przejścia
    });
  });

  // Obsługa kliknięć na przyciski nawigacyjne
  nextButton.addEventListener("click", () => {
    carousel.next();
  });

  prevButton.addEventListener("click", () => {
    carousel.prev();
  });

  

});