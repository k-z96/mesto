export const cardContainer = document.querySelector('.gallery');

//addInfo popup
export const addInfoPopup = '.popup_form-edit';
export const popupAddInfoButton = document.querySelector('.profile__edit-button');
export const popupCloseInfoButton = document.querySelector('.popup__close-icon_profile');
export const addInfoForm = document.querySelector('.popup__form_profile');
export const popupNameInput = ('#name');
export const popupJobInput = ('#occupation');
export const profileNameSelector = '.profile__name';
export const profileOccupationSelector = '.profile__occupation';
export const profileAvatarImageSelector = '.profile__avatar';

//addCard popup
export const addCardPopup = '.popup_card-add';
export const addCardButton = document.querySelector('.profile__add-button');
export const addCardCloseButton = document.querySelector('.popup__close-icon_card');
export const addCardForm = document.querySelector('.popup__form_add-card');
export const cardNameInput = document.querySelector('#cardName');
export const cardLinkInput = document.querySelector('#cardLink');
export const cardImage = document.querySelector('.card__image');
export const cardTitle = document.querySelector('.card__title');

//Zoom popup
export const zoomPopup = '.popup_zoom';
export const zoomImage = document.querySelector('.popup__zoom-image');
export const zoomCaption = document.querySelector('.popup__zoom-caption');

// Card gallery
export const cardGallery = document.querySelector('.gallery');

// Close popup
export const closeButtons = document.querySelectorAll('.popup__close-icon');

//Initial cards
export const initialCards = [
    {
        cardName: 'Озеро Баскунчак',
        imageLink: 'https://images.unsplash.com/photo-1606589547223-7fd442990d73?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1335&q=80'
    },
    {
        cardName: 'Карелия',
        imageLink: 'https://images.unsplash.com/photo-1573156667488-5c0cec674762?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1335&q=80'
    },
    {
        cardName: 'Даргавс',
        imageLink: 'https://images.unsplash.com/photo-1597581729358-7429e1b731bb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1335&q=80'
    },
    {
        cardName: 'Териберка',
        imageLink: 'https://images.unsplash.com/photo-1610554120720-6439d218c436?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1335&q=80'
    },
    {
        cardName: 'Светлогорск',
        imageLink: 'https://images.unsplash.com/photo-1630735980996-bee02c321d19?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1287&q=80'
    },
    {
        cardName: 'Камчатский край',
        imageLink: 'https://images.unsplash.com/photo-1654192541419-eea56035d65d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE3fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=900&q=60'
    }
];

//Container
export const templateSelector = '#card-template';