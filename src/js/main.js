import 'the-new-css-reset/css/reset.css';
import '@fontsource/montserrat';
import '@fontsource/montserrat/600.css';
import '@fontsource/allura';
import '../styles/style.scss';
import {
  initBurgerMenu,
  initSlider,
  initBestGifts,
  initTimer,
  initTabs,
  initScrollUp,
  initModal,
} from './modules/index';

window.addEventListener('DOMContentLoaded', () => {
  initBurgerMenu();
  initSlider();
  initBestGifts();
  initTimer('2025-01-01T00:00:00Z');
  initTabs();
  initScrollUp();
  initModal();
});
