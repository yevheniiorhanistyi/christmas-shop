import { switchCategory } from './switchCategory';

const switchTab = (currentCategory) => {
  const activeClass = 'tabs-list__item--active';
  const tabs = document.querySelectorAll('.tabs-list__item');

  tabs.forEach((tab) => {
    if (tab.classList.contains(activeClass)) {
      tab.classList.remove(activeClass);
    }
  });

  currentCategory.classList.add(activeClass);
};
const handleClick = (e) => {
  const category = e.target;
  const activeClass = 'tabs-list__item--active';

  if (category && category.classList.contains(activeClass)) return;

  if (category && category.nodeName === 'LI') {
    switchCategory(category.dataset.category);
    switchTab(category);
  }
};

export const initTabs = () => {
  const CATEGORIES = ['All', 'For Harmony', 'For Work', 'For Health'];

  const tabsContainer = document.querySelector('.tabs-list');

  if (!tabsContainer) return;

  const fragment = document.createDocumentFragment();

  CATEGORIES.forEach((category) => {
    const tab = document.createElement('li');
    tab.setAttribute('data-category', category);
    tab.classList.add('tabs-list__item');
    tab.textContent = category;

    if (category === 'All') {
      tab.classList.add('tabs-list__item--active');
    }

    fragment.append(tab);
  });

  tabsContainer.innerHTML = '';
  tabsContainer.append(fragment);

  switchCategory('All');
  tabsContainer.addEventListener('click', handleClick);
};

export default initTabs;
