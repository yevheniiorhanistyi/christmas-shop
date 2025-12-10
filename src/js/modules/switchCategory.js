import data from '../data/gifts.json';
import { createCard } from '../utils/createCard';

export const switchCategory = (category) => {
  const giftsSection = document.querySelector('.gifts');

  if (!giftsSection) return;

  const cardsContainer = giftsSection.querySelector('.cards');

  let filteredGifts;

  if (category === 'All') {
    filteredGifts = data;
  } else {
    filteredGifts = data.filter((gift) => gift.category === category);
  }

  const fragment = document.createDocumentFragment();

  filteredGifts.forEach((gift, index) => {
    fragment.append(createCard(gift, index));
  });

  cardsContainer.innerHTML = '';
  cardsContainer.append(fragment);
};

export default switchCategory;
