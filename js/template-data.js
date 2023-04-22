import { genObject } from './mock-data.js';


const canvas = document.querySelector('#map-canvas');
const template = document.querySelector('#card').content;
const tempCard = template.querySelector('.popup');
const cloneTempCard = tempCard.cloneNode(true);

// Генерация одного объекта с моковыми данными для карточки ниже.
const oneObjectOffer = genObject();

cloneTempCard.querySelector('.popup__title').textContent = `${oneObjectOffer.offer.title}`;
cloneTempCard.querySelector('.popup__text--address').textContent = `${oneObjectOffer.offer.address}`;
cloneTempCard.querySelector('.popup__text--price').textContent = `${oneObjectOffer.price} ₽/ночь`;
cloneTempCard.querySelector('.popup__type').textContent = `${oneObjectOffer.type}`;
cloneTempCard.querySelector('.popup__text--capacity').textContent = `${oneObjectOffer.rooms} комнаты для ${oneObjectOffer.guests} гостей`;
cloneTempCard.querySelector('.popup__text--time').textContent = `Заезд после ${oneObjectOffer.checkin}, выезд до ${oneObjectOffer.checkout}`;
cloneTempCard.querySelector('.popup__avatar').src = `${oneObjectOffer.author.avatar}`;

// Генерация фич
const featuresList = cloneTempCard.querySelector('.popup__features');
const featuresItems = featuresList.querySelectorAll('.popup__feature');
const featuresСlasses = oneObjectOffer.features.map((item) => `popup__feature--${item}`);
featuresItems.forEach((featuresItem) => {
  const modifierItem = featuresItem.classList[1];
  if (!featuresСlasses.includes(modifierItem)) {
    featuresItem.remove();
  }
});

// Генерация фото
const offerPhotos = cloneTempCard.querySelector('.popup__photos');
const offerPhotosItem = offerPhotos.querySelector('img');

oneObjectOffer.photos.forEach((item) => {
  const clonePhotos = offerPhotosItem.cloneNode(true);
  clonePhotos.src = `${item}`;
  offerPhotos.append(clonePhotos);
});

offerPhotosItem.remove();

canvas.append(cloneTempCard);
export { template };
