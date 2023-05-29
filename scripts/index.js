import FormValidator from './FormValidator.js';
import Card from './Card.js';
import { openPopup } from './Card.js';
import { closePopup } from './Card.js';
import { toggleButtonState } from './FormValidator.js';

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

// Card gallery
const cardGallery = document.querySelector('.gallery');

// Close popup
const closeButtons = document.querySelectorAll('.popup__close-icon');

closeButtons.forEach((button) => {
  const popup = button.closest('.popup');
  button.addEventListener('click', () => closePopup(popup));
});

//addInfo popup
function openAddInfoPopup(addInfoPopup) {
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

function handleProfileFormSubmit(evt) {
    evt.preventDefault();

    profileName.textContent = nameInput.value;
    profileOccupation.textContent = jobInput.value;

    closePopup(addInfoPopup);
}

addInfoPopup.addEventListener('submit', handleProfileFormSubmit);

//Add card popup
function openAddCardPopup() {
    openPopup(addCardPopup);
  }

addCardButton.addEventListener('click', openAddCardPopup);

addCardCloseButton.addEventListener('click', () => closePopup(addCardPopup));

function handleAddCardSubmit(evt, validation) {
    evt.preventDefault();

    const name = cardNameInput.value;
    const link = cardLinkInput.value;

    const cardData = {
        text : name,
        imageLink: link
    };

    const card = new Card(cardData, '#card-template');
    const cardElement = card.generateCard();

    cardGallery.prepend(cardElement);
    addCardForm.reset();

    closePopup(addCardPopup);

    const inputList = Array.from(addCardPopup.querySelectorAll('.popup__form-input'));
    const buttonElement = addCardPopup.querySelector('.popup__form-submit');

    toggleButtonState(inputList, buttonElement, validation);
}

addCardPopup.addEventListener('submit', (evt) => {
    handleAddCardSubmit(evt, validationSettings);
});

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
initialCards.forEach((data) => {
  const card = new Card(data, '#card-template');
  const cardElement = card.generateCard();
  cardContainer.appendChild(cardElement);
});

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