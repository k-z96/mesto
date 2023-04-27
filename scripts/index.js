const forms = document.querySelectorAll('.popup__form');
const formsArray = Array.from(forms);

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
const cardNameInput = addCardPopup.querySelector('#cardName');
const cardLinkInput = addCardPopup.querySelector('#cardLink');

//ceate cards
const cardTemplate = document.querySelector('#card-template');
const cardGallery = document.querySelector('.gallery');

//zoom popup
const zoomPopup = document.querySelector('.popup_zoom');
const zoomClose = document.querySelector('.popup__close-icon_zoom');
const zoomImage = document.querySelector('.popup__zoom-image');
const zoomCaption = document.querySelector('.popup__zoom-caption');

//Open/close Popup
function popupOpen(popup) {
    popup.classList.add('popup_opened');
    document.addEventListener('keydown', handleEscClose);
    popup.addEventListener('click', handleOutsideClick);
}

function popupClose(popup) {
    popup.classList.remove('popup_opened');
    document.removeEventListener('keydown', handleEscClose);
    popup.removeEventListener('click', handleOutsideClick);
}

function handleEscClose(event) {
    if (event.key === 'Escape') {
        const openedPopup = document.querySelector('.popup_opened');
        popupClose(openedPopup);
    }
}

function handleOutsideClick(event) {
    const popup = event.currentTarget;
    const popupForm = popup.querySelector('.popup__form');
    if (event.target === popup && event.target !== popupForm) {
        popupClose(popup);
    }
}

const closeZoom = () => {
    popupClose(zoomPopup);
}

zoomClose.addEventListener('click', closeZoom)

//addInfo popup
function openAddInfoPopup(addInfoPopup) {
    nameInput.value = profileName.textContent;
    jobInput.value = profileOccupation.textContent;
    popupOpen(addInfoPopup);
}

popupAddInfoButton.addEventListener('click', function () {
    openAddInfoPopup(addInfoPopup);
});

popupCloseInfoButton.addEventListener('click', function () {
    popupClose(addInfoPopup);
});

function handleProfileFormSubmit(evt) {
    evt.preventDefault();

    profileName.textContent = nameInput.value;
    profileOccupation.textContent = jobInput.value;

    popupClose(addInfoPopup);
}

addInfoPopup.addEventListener('submit', handleProfileFormSubmit);

//Add card popup
function openAddCardPopup(addCardPopup) {
    popupOpen(addCardPopup);
}

addCardButton.addEventListener('click', function () {
    popupOpen(addCardPopup);
});

addCardCloseButton.addEventListener('click', function () {
    popupClose(addCardPopup);
});

function handleAddCardSubmit(evt) {
    evt.preventDefault();

    const name = cardNameInput.value;
    const link = cardLinkInput.value;

    const cardData = {
        name,
        link
    }

    const cardElement = createCardElement(cardData);

    cardGallery.prepend(cardElement);

    popupClose(addCardPopup);

    addCardForm.reset();

    const inputList = Array.from(addCardPopup.querySelectorAll('.popup__form-input'));
    const buttonElement = addCardPopup.querySelector('.popup__form-submit');

    toggleButtonState(inputList, buttonElement);
}

addCardPopup.addEventListener('submit', handleAddCardSubmit);

//Create Cards
function createCardElement(cardData) {
    const cardElement = cardTemplate.content
        .querySelector('.card')
        .cloneNode(true);

    const cardTitle = cardElement.querySelector('.card__title');
    const cardImage = cardElement.querySelector('.card__image');

    cardTitle.textContent = cardData.name;
    cardImage.src = cardData.link;
    cardImage.alt = cardData.name;

    const cardLikeButton = cardElement.querySelector('.card__like-button');
    const cardDeleteButton = cardElement.querySelector('.card__delete-button');

    const handleLike = () => {
        cardLikeButton.classList.toggle('card__like_active');
    }
    const handleDelete = () => {
        cardElement.remove();
    }

    cardLikeButton.addEventListener('click', handleLike);
    cardDeleteButton.addEventListener('click', handleDelete);

    const openZoom = () => {
        openAddCardPopup(zoomPopup);

        zoomImage.src = cardData.link;
        zoomImage.alt = cardData.name;
        zoomCaption.textContent = cardData.name;
    }

    cardImage.addEventListener('click', openZoom);

    return cardElement;
}

function renderCardElement(cardElement) {
    cardGallery.append(cardElement);
}

initialCards.forEach((card) => {
    const element = createCardElement(card);
    renderCardElement(element);
});