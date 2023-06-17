import FormValidator from './FormValidator.js';
import Card from './Card.js';
import Section from './Section.js';
import PopupWithImage from './PopupWithImage.js';
import PopupWithForm from './PopupWithForm.js';
import UserInfo from './UserInfo.js';

import {addInfoPopup,
    popupAddInfoButton,
    popupCloseInfoButton,
    addInfoForm,
    nameInput,
    jobInput,
    profileNameSelector,
    profileOccupationSelector,
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
    profileAvatarImageSelector,
    addCardCloseButton
} from '../utils/constants.js';

const popupProfileNameElement = document.querySelector(profileNameSelector);
const popupProfileOccupationElement = document.querySelector(profileOccupationSelector);


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
function renderCard(formData){
    const cardElement = createCard(formData);
    section.addItem(cardElement); 
}

function createCard(formData){
    const card = new Card({
        cardData: formData, 
        templateSelector: templateSelector, 
        handleOpenPopup: (cardName, imageLink) =>{
            const popupImage = new PopupWithImage(zoomPopup);
            popupImage.open(cardName, imageLink);
            popupImage.setEventListeners();
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


// closeButtons.forEach((button) => {
//   const popup = button.closest('.popup');
//   button.addEventListener('click', () => closePopup(popup));
// });

// function handleEscClose(event) {
//     if (event.key === 'Escape') {
//         const openedPopup = document.querySelector('.popup_opened');
//         closePopup(openedPopucarp);
//     }
// }

// function handleOutsideClick(event) {
//     const popup = event.currentTarget;
//     if (event.target === popup) {
//         closePopup(popup);
//     }
// }

//   //zoomPopup
//   function handleOpenPopup(name, link) {
//     openPopup(zoomPopup);
//     zoomImage.src = this._imageLink;
//     zoomImage.alt = this._text;
//     zoomCaption.textContent = this._text;
//   }   

// function openPopup(popup) {
//     popup.classList.add('popup_opened');
//     document.addEventListener('keydown', handleEscClose);
//     popup.addEventListener('click', handleOutsideClick);
// }

// function closePopup(popup) {
//     popup.classList.remove('popup_opened');
//     document.removeEventListener('keydown', handleEscClose);
//     popup.removeEventListener('click', handleOutsideClick);
// }

//addInfo popup
// function openAddInfoPopup(addInfoPopup) {
//     addInfoValidator.resetValidation();
//     nameInput.value = profileName.textContent;
//     jobInput.value = profileOccupation.textContent;
//     openPopup(addInfoPopup);
// }

// popupAddInfoButton.addEventListener('click', function () {
//     openAddInfoPopup(addInfoPopup);
// });

// popupCloseInfoButton.addEventListener('click', function () {
//     closePopup(addInfoPopup);
// });

//Add card popup
// function openAddCardPopup() {
//     addCardValidator.resetValidation();
//     openPopup(addCardPopup);
//   }

// addCardButton.addEventListener('click', openAddCardPopup);

// addCardCloseButton.addEventListener('click', () => closePopup(addCardPopup));

// function handleProfileFormSubmit(evt) {
//     evt.preventDefault();

//     profileName.textContent = nameInput.value;
//     profileOccupation.textContent = jobInput.value;

//     closePopup(addInfoPopup);
// }

//addInfoForm.addEventListener('submit', handleProfileFormSubmit);

// function handleAddCardSubmit(evt) {
//     evt.preventDefault();

//     const name = cardNameInput.value;
//     const link = cardLinkInput.value;

//     const cardData = {
//         text : name,
//         imageLink: link
//     };

//     const cardElement = createCard(cardData);
//     cardGallery.prepend(cardElement)

//     addCardForm.reset();
//     closePopup(addCardPopup);
// }

// addCardForm.addEventListener('submit', handleAddCardSubmit);
  


//   //zoomPopup
//   function handleOpenPopup(name, link) {
//     openPopup(zoomPopup);
//     zoomImage.src = this._imageLink;
//     zoomImage.alt = this._text;
//     zoomCaption.textContent = this._text;
//   }   
