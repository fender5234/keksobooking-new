const addClassActivedForm = function (element, arraySelectors, elemClass) {
  element.classList.remove(`${elemClass}--disabled`);
  arraySelectors.forEach((arrayElem) => {
    arrayElem.disabled = false;
  });
};

export { addClassActivedForm };
