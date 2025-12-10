import { findGiftById } from '../utils/findGiftById';

export const initModal = () => {
  const getScrollbarWidth = () => {
    const outer = document.createElement('div');

    outer.style.position = 'absolute';
    outer.style.top = '-9999px';
    outer.style.width = '50px';
    outer.style.height = '50px';
    outer.style.overflow = 'scroll';
    outer.style.visibility = 'hidden';

    document.body.appendChild(outer);
    const scrollbarWidth = outer.offsetWidth - outer.clientWidth;
    document.body.removeChild(outer);

    return scrollbarWidth;
  };
  const hideScroll = () => {
    const scrollWidth = `${getScrollbarWidth()}px`;

    document.body.style.paddingRight = scrollWidth;
    document.body.style.overflow = 'hidden';
  };
  const showScroll = () => {
    document.body.style.paddingRight = '';
    document.body.style.overflow = 'visible';
  };
  const generateModal = (gift) => {
    const suptitleColors = {
      'For Harmony': '#FF43F7',
      'For Work': '#4361FF',
      'For Health': '#06A44F',
    };
    const backdrop = document.querySelector('.backdrop');
    const modal = document.querySelector('.modal');

    const uniqueCategoryName = gift.category.split(' ').pop().toLowerCase();

    const img = document.createElement('img');
    img.classList.add('modal__img');
    img.setAttribute('src', `./gift-for-${uniqueCategoryName}.png`);
    img.setAttribute('alt', gift.name);
    img.setAttribute('aria-label', `Image of ${gift.name}`);

    const btnClose = document.createElement('button');
    btnClose.classList.add('modal-close');
    btnClose.setAttribute('type', 'button');

    const modalContent = document.createElement('div');
    modalContent.classList.add('modal-content');

    const modalTop = document.createElement('div');
    modalTop.classList.add('modal-top');

    const modalTopSuptitle = document.createElement('h4');
    modalTopSuptitle.classList.add('modal-top__suptitle');
    modalTopSuptitle.textContent = gift.category;
    modalTopSuptitle.style.color = suptitleColors[gift.category];

    const modalTopTitle = document.createElement('h3');
    modalTopTitle.classList.add('modal-top__title');
    modalTopTitle.textContent = gift.name;

    const modalTopText = document.createElement('p');
    modalTopText.classList.add('modal-top__text');
    modalTopText.textContent = gift.description;

    modalTop.append(modalTopSuptitle, modalTopTitle, modalTopText);

    const modalBottom = document.createElement('div');
    modalBottom.classList.add('modal-bottom');

    const modalBottomTitle = document.createElement('h4');
    modalBottomTitle.classList.add('modal-bottom__title');
    modalBottomTitle.textContent = 'Adds superpowers to:';

    const superpowers = document.createElement('ul');
    superpowers.classList.add('superpowers');

    const superpowersArray = Object.entries(gift.superpowers);

    superpowersArray.forEach((superpower) => {
      const name = superpower[0];
      const value = superpower[1];
      const snowflakeCount = 5;
      const transparentCount = parseInt(value, 10) / 100;

      const superpowersItem = document.createElement('li');
      superpowersItem.classList.add('superpowers-item');

      const superpowersItemName = document.createElement('p');
      superpowersItemName.classList.add('superpowers-item__name');
      superpowersItemName.textContent = name;

      const superpowersWrapper = document.createElement('div');
      superpowersWrapper.classList.add('superpowers-wrapper');

      superpowersItem.append(superpowersItemName, superpowersWrapper);

      const superpowersItemValue = document.createElement('p');
      superpowersItemValue.classList.add('superpowers-item__value');
      superpowersItemValue.textContent = value;

      const snowflakes = document.createElement('div');
      snowflakes.classList.add('snowflakes');

      for (let i = 0; i < snowflakeCount; i += 1) {
        const snowflake = document.createElement('img');
        snowflake.classList.add('snowflakes__img');
        snowflake.setAttribute('src', './snowflake.png');
        snowflake.setAttribute('alt', 'Snowflake');
        snowflake.setAttribute('aria-label', 'Snowflake');

        if (i >= transparentCount) snowflake.classList.add('transparent');

        snowflakes.append(snowflake);
      }

      superpowersWrapper.append(superpowersItemValue, snowflakes);
      superpowers.append(superpowersItem);
    });

    modalBottom.append(modalBottomTitle, superpowers);
    modalContent.append(modalTop, modalBottom);
    modal.append(img, btnClose, modalContent);

    modal.classList.add('modal--visible');
    backdrop.classList.add('backdrop--visible');
    hideScroll();

    const handleClose = () => {
      modal.classList.remove('modal--visible');
      backdrop.classList.remove('backdrop--visible');
      setTimeout(() => {
        showScroll();
        modal.innerHTML = '';
      }, 300);
    };

    btnClose.addEventListener('click', handleClose);
    backdrop.addEventListener('click', (e) => {
      if (e.target === backdrop) {
        handleClose();
      }
    });
  };

  const cards = document.querySelector('.cards');

  cards.addEventListener('click', (e) => {
    const currentCard = e.target.closest('.card');

    if (currentCard && currentCard.classList.contains('card')) {
      const { cardId } = currentCard.dataset;
      generateModal(findGiftById(cardId));
    }
  });
};

export default initModal;
