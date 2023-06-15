import FormValidator from './FormValidator.js';
import Card from './Card.js';
import Section from './Section.js';
import Popup from './Popup.js';
import PopupWithImage from './PopupWithImage.js';
//import Popup from './Popup.js';
import {addInfoPopup,
    popupAddInfoButton,
    popupCloseInfoButton,
    addInfoForm,
    nameInput,
    jobInput,
    profileName,
    profileOccupation,
    addCardPopup,
    addCardButton,
    addCardForm,
    cardNameInput,
    cardLinkInput,
    zoomPopup,
    zoomImage,
    zoomCaption,
    cardGallery,
    templateSelector,
    closeButtons,
    initialCards,
    cardContainer,
    addCardCloseButton
} from '../utils/constants.js';

function renderCard(cardData){
    const cardElement = createCard(cardData);
    section.addNewItem(cardElement); 
}

function createCard(cardData){
    const card = new Card({
        cardData: cardData, 
        templateSelector: templateSelector, 
        handleOpenPopup: (name, link) =>{
            const popupImage = new PopupWithImage(zoomPopup);
            popupImage.open(name, link)
        }     
    });
    const cardElement = card.generateCard();
    return cardElement;
}

const section = new Section({
    items: initialCards,
        renderer: renderCard
    , selector: cardContainer
});
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

//   //zoomPopup
//   function handleOpenPopup(name, link) {
//     openPopup(zoomPopup);
//     zoomImage.src = this._imageLink;
//     zoomImage.alt = this._text;
//     zoomCaption.textContent = this._text;
//   }   

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

addCardForm.addEventListener('submit', handleAddCardSubmit);

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


//   //zoomPopup
//   function handleOpenPopup(name, link) {
//     openPopup(zoomPopup);
//     zoomImage.src = this._imageLink;
//     zoomImage.alt = this._text;
//     zoomCaption.textContent = this._text;
//   }   
