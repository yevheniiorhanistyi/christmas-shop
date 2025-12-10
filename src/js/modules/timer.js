import { updateElementContent } from '../utils/updateElementContent';

export const initTimer = (deadlineDate) => {
  const timerElement = document.querySelector('.timer');

  if (!timerElement) return;

  const daysElement = timerElement.querySelector('#days');
  const hoursElement = timerElement.querySelector('#hours');
  const minutesElement = timerElement.querySelector('#minutes');
  const secondsElement = timerElement.querySelector('#seconds');

  const deadline = new Date(deadlineDate);

  let timer = null;
  const updateTimer = () => {
    const diff = deadline - new Date();
    if (diff <= 0) {
      clearInterval(timer);
      return;
    }

    const totalSeconds = Math.floor(diff / 1000);
    const days = Math.floor(totalSeconds / 86400);
    const hours = Math.floor(totalSeconds / 3600) % 24;
    const minutes = Math.floor(totalSeconds / 60) % 60;
    const seconds = totalSeconds % 60;

    updateElementContent(daysElement, days);
    updateElementContent(hoursElement, hours);
    updateElementContent(minutesElement, minutes);
    updateElementContent(secondsElement, seconds);
  };

  updateTimer();

  timer = setInterval(updateTimer, 1000);
};

export default initTimer;
