export const updateElementContent = (el, value) => {
  const element = el;
  if (element.textContent !== String(value)) {
    element.textContent = value;
  }
};

export default updateElementContent;
