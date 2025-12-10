export const initSlider = () => {
  const sliderContainer = document.querySelector('.slider-container');
  const sliderList = document.querySelector('.slider-list');
  const btnNext = document.querySelector('.slider-buttons__next');
  const btnPrev = document.querySelector('.slider-buttons__prev');

  if (!sliderContainer) return;

  let steps = 3;
  let position = 0;
  const updateSlider = (direction) => {
    const containerWidth = sliderContainer.offsetWidth;
    const totalSliderWidth = sliderList.offsetWidth;

    const step = Math.ceil((totalSliderWidth - containerWidth) / steps);
    position += direction === 'right' ? -step : step;

    sliderList.style.transform = `translateX(${position}px)`;

    btnPrev.disabled = position === 0;
    btnNext.disabled =
      Math.abs(position) >= Math.ceil(totalSliderWidth - containerWidth);
  };

  const updateStepsAndPosition = () => {
    const windowWidth = document.documentElement.clientWidth;

    if (windowWidth <= 768) {
      steps = 6;
    } else {
      steps = 3;
    }

    position = 0;
    sliderList.style.transform = `translateX(${position}px)`;
    btnPrev.disabled = true;
    btnNext.disabled = false;
  };

  updateStepsAndPosition();
  const moveRight = () => updateSlider('right');
  const moveLeft = () => updateSlider('left');

  btnPrev.addEventListener('click', moveLeft);
  btnNext.addEventListener('click', moveRight);

  sliderList.addEventListener('transitionstart', () => {
    btnPrev.removeEventListener('click', moveLeft);
    btnNext.removeEventListener('click', moveRight);
  });

  sliderList.addEventListener('transitionend', () => {
    btnPrev.addEventListener('click', moveLeft);
    btnNext.addEventListener('click', moveRight);
  });

  window.addEventListener('resize', updateStepsAndPosition);
};

export default initSlider;
