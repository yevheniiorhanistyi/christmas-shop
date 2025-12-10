import data from '../data/gifts.json';

export const findGiftById = (cardId) => {
  return data.find((gift) => gift.id === cardId);
};

export default findGiftById;
