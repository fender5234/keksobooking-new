import { getRandomPositiveNumber, getRandomPositiveFloatNumber, getRandomArrayPart } from './utils.js';


// Вспомогательные переменные
const avatarId = getRandomPositiveNumber(1, 10);
const offerTitle = ['Крохотный домик', 'Уютная квартира', 'Трехэтажный дом'];
const locationLat = getRandomPositiveFloatNumber(35.65000, 35.70000);
const locationLng = getRandomPositiveFloatNumber(139.70000, 139.80000);
const typeOfHome = ['palace', 'flat', 'house', 'bungalow', 'hotel'];
const typeOfHomeObj =
{
  palace: 'Дворец',
  flat: 'Квартира',
  house: 'Дом',
  bungalow: 'Бунгало',
  hotel: 'Отель'
};
const features = ['wifi', 'dishwasher', 'parking', 'washer', 'elevator'];
const photos = [
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/duonguyen-8LrGtIxxa4w.jpg',
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/brandon-hoogenboom-SNxQGWxZQi0.jpg',
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/claire-rendall-b6kAwr1i0Iw.jpg',
];
const checkTime = ['12:00', '13:00', '14:00'];

// Функция генерации объекта
const genObject = function () {
  return {
    author: {
      avatar: `img/avatars/user${avatarId < 10 ? '0' : ''}${avatarId}.png`,
    },
    offer: {
      title: offerTitle[getRandomPositiveNumber(0, offerTitle.length - 1)],
      address: `${locationLat}, ${locationLng}`,
    },
    price: getRandomPositiveNumber(200, 10000),
    type: typeOfHomeObj[typeOfHome[getRandomPositiveNumber(0, typeOfHome.length - 1)]],
    rooms: getRandomPositiveNumber(1, 20),
    guests: getRandomPositiveNumber(1, 10),
    checkin: checkTime[getRandomPositiveNumber(0, checkTime.length - 1)],
    checkout: checkTime[getRandomPositiveNumber(0, checkTime.length - 1)],
    features: getRandomArrayPart(features),
    description: 'Аренда жилья',
    photos: getRandomArrayPart(photos),
    location: {
      lat: locationLat,
      lng: locationLng,
    },
  };
};

const getArray = (score) => Array.from({ length: score }, genObject);
export { getArray,genObject};
