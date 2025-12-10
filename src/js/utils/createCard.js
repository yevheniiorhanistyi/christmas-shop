export const createCard = (gift, index) => {
  const uniqueCategoryName = gift.category.split(' ').pop().toLowerCase();
  const categoryClass = `card--${uniqueCategoryName}`;

  const card = document.createElement('div');
  card.classList.add('card', `${categoryClass}`);
  card.setAttribute('data-card-id', gift.id);

  const img = document.createElement('img');
  img.classList.add('card__img');
  img.setAttribute('src', `./gift-for-${uniqueCategoryName}.png`);
  img.setAttribute('alt', gift.name);
  img.setAttribute('aria-label', `Image of ${gift.name}`);

  card.append(img);

  const content = document.createElement('div');
  content.classList.add('card-content');

  const supTitle = document.createElement('h4');
  supTitle.classList.add('card__suptitle');
  supTitle.textContent = gift.category;

  const title = document.createElement('h3');
  title.classList.add('card__title');
  title.textContent = gift.name;

  content.append(supTitle, title);
  card.append(content);

  setTimeout(() => {
    card.classList.add('show');
  }, index * 100);

  return card;
};

export default createCard;
