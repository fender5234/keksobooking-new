const addClassDisabledForm = function (element, arraySelectors,elemClass) {
  element.classList.add(`${elemClass}--disabled`);
  arraySelectors.forEach((arrayElem) => {
    arrayElem.disabled = true;
  });
};

export { addClassDisabledForm};
