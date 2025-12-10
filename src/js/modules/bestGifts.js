import data from '../data/gifts.json';
import { createCard } from '../utils/createCard';

export const initBestGifts = () => {
  const bestGiftsSection = document.querySelector('.best-gifts');

  if (!bestGiftsSection) return;

  const cardsContainer = bestGiftsSection.querySelector('.cards');

  const uniqueIndexes = new Set();

  while (uniqueIndexes.size < 4) {
    const randomIndex = Math.floor(Math.random() * data.length);
    uniqueIndexes.add(randomIndex);
  }

  const randomGifts = [...uniqueIndexes].map((index) => data[index]);

  randomGifts.forEach((gift, index) => {
    cardsContainer.append(createCard(gift, index));
  });
};

export default initBestGifts;
