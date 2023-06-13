import FormValidator from './FormValidator.js';
import Card from './Card.js';
import Section from './Section.js';

//addInfo popup
const addInfoPopup = document.querySelector('.popup_form-edit');
const popupAddInfoButton = document.querySelector('.profile__edit-button');
const popupCloseInfoButton = addInfoPopup.querySelector('.popup__close-icon_profile');
const addInfoForm = addInfoPopup.querySelector('.popup__form_profile');
const nameInput = addInfoForm.querySelector('#name');
const jobInput = addInfoForm.querySelector('#occupation');
const profileName = document.querySelector('.profile__name');
const profileOccupation = document.querySelector('.profile__occupation');

//addCard popup
const addCardPopup = document.querySelector('.popup_card-add');
const addCardButton = document.querySelector('.profile__add-button');
const addCardCloseButton = addCardPopup.querySelector('.popup__close-icon_card');
const addCardForm = addCardPopup.querySelector('.popup__form_add-card');
const cardNameInput = addCardForm.querySelector('#cardName');
const cardLinkInput = addCardForm.querySelector('#cardLink');

//Zoom popup
const zoomPopup = document.querySelector('.popup_zoom');
const zoomImage = document.querySelector('.popup__zoom-image');
const zoomCaption = document.querySelector('.popup__zoom-caption')

// Card gallery
const cardGallery = document.querySelector('.gallery');
const templateSelector = document.querySelector('#card-template');

// Close popup
const closeButtons = document.querySelectorAll('.popup__close-icon');

function renderCard(cardData){
    const cardElement = createCard(cardData);
    section.addItem(cardElement); 
}

function createCard(cardData){
    const card = new Card(cardData, templateSelector, handleOpenPopup);
    const cardElement = card.generateCard();
    return cardElement;
}

const section = new Section({
    items: initialCards,
        renderer: renderCard
    }, '#cards'
);
section.renderItems();

closeButtons.forEach((button) => {
  const popup = button.closest('.popup');
  button.addEventListener('click', () => closePopup(popup));
});

function handleEscClose(event) {
    if (event.key === 'Escape') {
        const openedPopup = document.querySelector('.popup_opened');
        closePopup(openedPopup);
    }
}

function handleOutsideClick(event) {
    const popup = event.currentTarget;
    if (event.target === popup) {
        closePopup(popup);
    }
}

function openPopup(popup) {
    popup.classList.add('popup_opened');
    document.addEventListener('keydown', handleEscClose);
    popup.addEventListener('click', handleOutsideClick);
}

function closePopup(popup) {
    popup.classList.remove('popup_opened');
    document.removeEventListener('keydown', handleEscClose);
    popup.removeEventListener('click', handleOutsideClick);
}

//addInfo popup
function openAddInfoPopup(addInfoPopup) {
    addInfoValidator.resetValidation();
    nameInput.value = profileName.textContent;
    jobInput.value = profileOccupation.textContent;
    openPopup(addInfoPopup);
}

popupAddInfoButton.addEventListener('click', function () {
    openAddInfoPopup(addInfoPopup);
});

popupCloseInfoButton.addEventListener('click', function () {
    closePopup(addInfoPopup);
});

//Add card popup
function openAddCardPopup() {
    addCardValidator.resetValidation();
    openPopup(addCardPopup);
  }

addCardButton.addEventListener('click', openAddCardPopup);

addCardCloseButton.addEventListener('click', () => closePopup(addCardPopup));

function handleProfileFormSubmit(evt) {
    evt.preventDefault();

    profileName.textContent = nameInput.value;
    profileOccupation.textContent = jobInput.value;

    closePopup(addInfoPopup);
}

addInfoForm.addEventListener('submit', handleProfileFormSubmit);

function handleAddCardSubmit(evt) {
    evt.preventDefault();

    const name = cardNameInput.value;
    const link = cardLinkInput.value;

    const cardData = {
        text : name,
        imageLink: link
    };

    const cardElement = createCard(cardData);
    cardGallery.prepend(cardElement)

    addCardForm.reset();
    closePopup(addCardPopup);
}

// function createCard(cardData){
//     const card = new Card(cardData, '#card-template', handleOpenPopup);
//     const cardElement = card.generateCard();
//     return cardElement;
// }

addCardForm.addEventListener('submit', handleAddCardSubmit);

const initialCards = [
    {
        text: 'Озеро Баскунчак',
        imageLink: 'https://images.unsplash.com/photo-1606589547223-7fd442990d73?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1335&q=80'
    },
    {
        text: 'Карелия',
        imageLink: 'https://images.unsplash.com/photo-1573156667488-5c0cec674762?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1335&q=80'
    },
    {
        text: 'Даргавс',
        imageLink: 'https://images.unsplash.com/photo-1597581729358-7429e1b731bb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1335&q=80'
    },
    {
        text: 'Териберка',
        imageLink: 'https://images.unsplash.com/photo-1610554120720-6439d218c436?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1335&q=80'
    },
    {
        text: 'Светлогорск',
        imageLink: 'https://images.unsplash.com/photo-1630735980996-bee02c321d19?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1287&q=80'
    },
    {
        text: 'Камчатский край',
        imageLink: 'https://images.unsplash.com/photo-1654192541419-eea56035d65d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE3fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=900&q=60'
    }
];

const cardContainer = document.querySelector('.gallery'); 

// Create and append cards
// initialCards.forEach((data) => {
//   const cardElement = createCard(data);
//   cardContainer.append(cardElement);
// });

// Validate
const validationSettings = {
    formSelector: '.popup__form',
    inputSelector: '.popup__form-input',
    submitButtonSelector: '.popup__form-submit',
    inactiveButtonClass: 'popup__form-submit_disabled',
    inputErrorClass: 'popup__form-input_wrong',
    errorClass: 'popup__form-input-error-message_active',
  };
  
const addInfoValidator = new FormValidator(validationSettings, addInfoForm);
const addCardValidator = new FormValidator(validationSettings, addCardForm);
  
addInfoValidator.enableValidation();
addCardValidator.enableValidation();


  //zoomPopup
  function handleOpenPopup(name, link) {
    openPopup(zoomPopup);
    zoomImage.src = this._imageLink;
    zoomImage.alt = this._text;
    zoomCaption.textContent = this._text;
  }   