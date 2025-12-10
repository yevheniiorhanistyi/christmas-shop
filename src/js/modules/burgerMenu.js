export const initBurgerMenu = () => {
  const TABLET_BREAKPOINT = 768;
  const body = document.querySelector('body');
  const burgerBtn = document.querySelector('.burger');
  const nav = document.querySelector('.nav');

  const showMenu = () => {
    body.style.overflow = 'hidden';
    burgerBtn.classList.add('burger--active');
    nav.classList.add('nav--active');
  };

  const hideMenu = () => {
    body.style.overflow = 'auto';
    burgerBtn.classList.remove('burger--active');
    nav.classList.remove('nav--active');
  };

  burgerBtn.addEventListener('click', () => {
    if (burgerBtn.classList.contains('burger--active')) {
      hideMenu();
    } else {
      showMenu();
    }
  });

  nav.addEventListener('click', (e) => {
    if (e.target.classList.contains('nav-list__link')) hideMenu();
  });

  window.addEventListener('resize', () => {
    if (window.innerWidth > TABLET_BREAKPOINT) {
      hideMenu();
    }
  });
};

export default initBurgerMenu;
