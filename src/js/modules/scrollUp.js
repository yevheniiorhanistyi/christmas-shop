export const initScrollUp = () => {
  const scrollUp = document.querySelector('.scroll-up');

  scrollUp.addEventListener('click', () => {
    window.scroll({
      top: 0,
      left: 0,
      behavior: 'smooth',
    });
  });

  window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
      scrollUp.classList.remove('hide');
      scrollUp.classList.add('show');
    } else if (scrollUp.classList.contains('show')) {
      scrollUp.classList.remove('show');
      scrollUp.classList.add('hide');

      scrollUp.addEventListener('animationend', () => {
        scrollUp.classList.remove('hide');
      });
    }
  });
};

export default initScrollUp;
