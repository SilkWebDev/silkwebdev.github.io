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
