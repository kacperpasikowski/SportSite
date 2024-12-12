document.addEventListener("DOMContentLoaded", function () {
  const toggleButton = document.querySelector(".navbar .mobile-menu-toggle i");
  const mobileMenu = document.querySelector(".navbar .mobile-menu-items");
  const menuLinks = document.querySelectorAll(".mobile-menu-items .link");


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


  // menuLinks.forEach(link => {
  //   link.addEventListener("click", function () {
  //     setTimeout(() => {
  //       mobileMenu.classList.remove("active");
  //       toggleButton.classList.remove("fa-times");
  //       toggleButton.classList.add("fa-bars");
  //     }, 200); // Opóźnienie w milisekundach (500ms = 0.5s)
  //   });
  // });

  const navbar = document.querySelector(".navbar");
  console.log(navbar); // Sprawdź, czy navbar jest znaleziony

  window.addEventListener("scroll", function () {

    if (window.scrollY > 50) {
      navbar.classList.add("navbar-scrolled");
    } else {
      navbar.classList.remove("navbar-scrolled");
    }
  });

  const slideData = [
    {
      title: "Sport",
      description:
        "Sport to nie tylko wysiłek fizyczny, ale przede wszystkim sposób na odkrywanie siebie, przekraczanie granic i czerpanie radości z ruchu. W naszej ofercie znajdziesz zajęcia z akrobatyki, tańca i jogi – różnorodność, która łączy siłę, wdzięk i harmonię ciała z umysłem. Dołącz do nas i poczuj, jak sport zmienia codzienność w inspirującą przygodę!",
    },
    {
      title: "Rozwój",
      description:
        "Rozwój to ciągłe odkrywanie nowych możliwości – zarówno ciała, jak i umysłu. Na naszych zajęciach pomagamy Ci wzmacniać ciało, rozwijać elastyczność i budować pewność siebie. To przestrzeń, gdzie każdy ruch przybliża Cię do osiągania wymarzonych celów, odnajdywania wewnętrznej harmonii i stawania się lepszą wersją siebie. Dołącz i rozwijaj się z nami!",
    },
    {
      title: "Zabawa",
      description:
        "Kreatywność to serce naszych zajęć! Niezależnie od tego, czy  wirujesz w tańcu, wykonujesz akrobatyczne ewolucje, czy odkrywasz harmonię na macie do jogi – wspieramy Cię w wyrażaniu siebie poprzez ruch. Uczymy, jak łączyć pasję, pomysłowość i technikę, tworząc coś naprawdę wyjątkowego. Wierzymy, że każdy ruch to historia, a każda chwila to okazja, by stworzyć coś nowego. Rozwijaj z nami wyobraźnię i swobodę wyrażania siebie! ✨",
    },
    {
      title: "Kreatywność",
      description:
        "To magiczny świat, w którym dzieci odkrywają swoje talenty, rozwijają wyobraźnię i uczą się współpracy. To coś więcej niż tylko przyjemność – to fundament nauki, relacji i kreatywności. U nas zabawa jest pełna radości, inspiracji i niezapomnianych chwil, które rozwijają nie tylko umysł i serce ale również zdolności motoryczne każdego dziecka! 🎉✨",
    },
  ];

  // Pobierz elementy tekstowe
  const heroTitle = document.getElementById("hero-title");
  const heroDescription = document.getElementById("hero-description");
  const heroText = document.querySelector(".hero-text");

  // Pobierz indykatory
  const indicators = document.querySelectorAll(
    ".carousel-indicators-custom button"
  );

  // Pobierz przyciski nawigacyjne
  const nextButton = document.querySelector(".carousel-control-next-custom");
  const prevButton = document.querySelector(".carousel-control-prev-custom");

  // Inicjalizacja Bootstrap Carousel
  const heroCarousel = document.querySelector("#heroCarousel");
  const carousel = new bootstrap.Carousel(heroCarousel, {
    interval: 5000,
    ride: "carousel",
    pause: false,
    wrap: true,
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
  heroCarousel.addEventListener("slide.bs.carousel", function (event) {
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


  setTimeout(() => {
    mobileMenu.classList.remove("active");
    toggleButton.classList.remove("fa-times");
    toggleButton.classList.add("fa-bars");
  }, 500);
});
