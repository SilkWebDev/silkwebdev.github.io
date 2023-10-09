const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        observer.unobserve(entry.target);
        entry.target.classList.toggle('animate');
        entry.target.classList.toggle('invisible');
      }
    });
  },
  {
    threshold: 0.33,
  }
);

const testimonialCards = document.querySelectorAll('div.card');

testimonialCards.forEach((card) => {
  observer.observe(card);
});

const floatingButtonObserver = new IntersectionObserver((entries) => {
  const isIntersecting = entries[0].isIntersecting;
  const floatingButton = document.querySelector('.floating-button');
  floatingButton.classList.toggle('invisible', isIntersecting);
});

const hero = document.querySelector('.hero');
const floatingButton = document.querySelector('.floating-button');

floatingButtonObserver.observe(hero);
