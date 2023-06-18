import './index.css';

import FormValidator from '../components/FormValidator.js';
import Card from '../components/Card.js';
import Section from '../components/Section.js';
import PopupWithImage from '../components/PopupWithImage.js';
import PopupWithForm from '../components/PopupWithForm.js';
import UserInfo from '../components/UserInfo.js';

import {addInfoPopup,
    popupAddInfoButton,
    addInfoForm,
    profileNameSelector,
    profileOccupationSelector,
    addCardPopup,
    addCardButton,
    addCardForm,
    zoomPopup,
    templateSelector,
    initialCards,
    cardContainer,
    popupNameInput,
    popupJobInput
} from '../utils/constants.js';

const popupProfileNameElement = document.querySelector(popupNameInput);
const popupProfileOccupationElement = document.querySelector(popupJobInput);


// Validate
const validationSettings = {
    formSelector: '.popup__form',
    inputSelector: '.popup__form-input',
    submitButtonSelector: '.popup__form-submit',
    inactiveButtonClass: 'popup__form-submit_disabled',
    inputErrorClass: 'popup__form-input_wrong',
    errorClass: 'popup__form-input-error-message_active',
  };

//Add initial cards when page loads
const popupImage = new PopupWithImage(zoomPopup);
popupImage.setEventListeners();

function renderCard(formData){
    const cardElement = createCard(formData);
    section.addItem(cardElement); 
}

function createCard(formData){
    const card = new Card({
        cardData: formData, 
        templateSelector: templateSelector, 
        handleOpenPopup: (cardName, imageLink) =>{
            popupImage.open(cardName, imageLink);
        }     
    });
    const cardElement = card.generateCard();
    return cardElement;
}

const section = new Section({
    items: initialCards,
    renderer: renderCard, 
    selector: cardContainer
});
section.renderItems();

//change profile info
const userInfo = new UserInfo({profileNameSelector, profileOccupationSelector});

//Add Profile Info Popup
const infoPopup = new PopupWithForm(addInfoPopup, (formData) =>{
    userInfo.setUserInfo({
        userName: formData.userName, 
        userOccupation: formData.userOccupation
    });
   
    infoPopup.close();
});
infoPopup.setEventListeners();

const addInfoValidator = new FormValidator(validationSettings, addInfoForm);
addInfoValidator.enableValidation();

popupAddInfoButton.addEventListener('click', () => {
    addInfoValidator.resetValidation();
    const userData = userInfo.getUserInfo();
    popupProfileNameElement.value = userData.userName;
    popupProfileOccupationElement.value = userData.userOccupation;
    infoPopup.open();
})

//create new Card Popup
const cardPopup = new PopupWithForm(addCardPopup, (formData)=>{
    const cardElement = createCard({
        cardName: formData.cardName, 
        imageLink: formData.imageLink
    });
    section.addNewItem(cardElement);
    cardPopup.close();
});
cardPopup.setEventListeners();

const addCardValidator = new FormValidator(validationSettings, addCardForm);
addCardValidator.enableValidation();

addCardButton.addEventListener('click', () => {
    addCardValidator.resetValidation();
    cardPopup.open();
})
