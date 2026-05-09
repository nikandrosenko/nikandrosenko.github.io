document.addEventListener("DOMContentLoaded", () => {
  const confettiButton = document.getElementById("confettiButton");
  const dressCodeLink = document.getElementById("dressCodeLink");
  const revealElements = document.querySelectorAll("header, main > section, footer");

  [confettiButton, dressCodeLink].forEach((pressableElement) => {
    pressableElement.addEventListener("touchend", function () {
      // Небольшая задержка, чтобы анимация нажатия успела проиграться
      setTimeout(() => {
        this.blur();
      }, 100);
    });
  });

  revealElements.forEach((element) => element.classList.add("scroll-reveal"));
  requestAnimationFrame(() => {
    document.querySelector("header")?.classList.add("is-visible");
  });

  if ("IntersectionObserver" in window) {
    const revealObserver = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.25 },
    );

    revealElements.forEach((element) => {
      if (!element.matches("header")) {
        revealObserver.observe(element);
      }
    });
  } else {
    revealElements.forEach((element) => element.classList.add("is-visible"));
  }

  confettiButton.addEventListener("click", function () {
    // Do the actual work (e.g. submit form, save data) here first
    // ...

    // Then, trigger the celebration!
    const celebration = () => {
      const duration = 2 * 1000;
      const animationEnd = Date.now() + duration;
      const defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 0 };

      function randomInRange(min, max) {
        return Math.random() * (max - min) + min;
      }

      const interval = setInterval(function () {
        const timeLeft = animationEnd - Date.now();

        if (timeLeft <= 0) {
          return clearInterval(interval);
        }

        const particleCount = 50 * (timeLeft / duration);
        // since particles fall down, start a bit higher than random
        confetti(
          Object.assign({}, defaults, {
            particleCount,
            origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 },
          }),
        );
        confetti(
          Object.assign({}, defaults, {
            particleCount,
            origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 },
          }),
        );
      }, 250);
    };

    celebration();

    this.blur();
  });


});
