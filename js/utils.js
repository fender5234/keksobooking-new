// Функция возращает случайное целое число
const getRandomPositiveNumber= (min, max) => {
  if (min < 0 || max < 0) {
    return getRandomPositiveNumber(Math.abs(min), Math.abs(max));
  }

  if (max < min) {
    return getRandomPositiveNumber(max, min);
  }

  if (max === min) {
    return min;
  }

  return Math.floor(Math.random() * (max - min + 1)) + min;
};


// Функция возращает случайное число с заданым количеством знаков после запятой.
const getRandomPositiveFloatNumber = (min, max) => {
  if (min < 0 || max < 0) {
    return getRandomPositiveFloatNumber(Math.abs(min), Math.abs(max));
  }

  if (max < min) {
    return getRandomPositiveFloatNumber(max, min);
  }

  if (max === min) {
    return min;
  }

  const result = Math.random() * (max - min) + min;
  return +result.toFixed(5);
};


// Функция для получения случайных элементов массива
const getRandomArrayPart = (arr) => {
  const lastIndex = arr.length - 1;
  const a = getRandomPositiveNumber(0, lastIndex);
  const b = getRandomPositiveNumber(0, lastIndex);
  const lower = Math.min(a, b);
  const upper = Math.max(a, b);
  return arr.slice(lower, upper);
};

export {getRandomPositiveNumber,getRandomPositiveFloatNumber,getRandomArrayPart};
