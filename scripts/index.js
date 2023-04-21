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

//Open/close Popup
function popupOpen(popup) {
    popup.classList.add('popup_opened');
}

function popupClose(popup) {
    popup.classList.remove('popup_opened');
}

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

    function addCardElement(cardElement){
        cardGallery.prepend(cardElement);
    }

    addCardElement(createCardElement(cardData));

    popupClose(addCardPopup);
}

addCardPopup.addEventListener('submit', handleAddCardSubmit);

//Cards
const initialCards = [
    {
        name: 'Озеро Баскунчак',
        link: 'https://images.unsplash.com/photo-1606589547223-7fd442990d73?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1335&q=80'
    },
    {
        name: 'Карелия',
        link: 'https://images.unsplash.com/photo-1573156667488-5c0cec674762?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1335&q=80'
    },
    {
        name: 'Даргавс',
        link: 'https://images.unsplash.com/photo-1597581729358-7429e1b731bb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1335&q=80'
    },
    {
        name: 'Териберка',
        link: 'https://images.unsplash.com/photo-1610554120720-6439d218c436?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1335&q=80'
    },
    {
        name: 'Светлогорск',
        link: 'https://images.unsplash.com/photo-1630735980996-bee02c321d19?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1287&q=80'
    },
    {
        name: 'Камчатский край',
        link: 'https://images.unsplash.com/photo-1654192541419-eea56035d65d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE3fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=900&q=60'
    }
];

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

    const zoomPopup = document.querySelector('.popup_zoom');
    const zoomClose = document.querySelector('.popup__close-icon_zoom');

    const closeZoom = () => {
        zoomPopup.classList.remove('popup_opened');
    }
    const openZoom = () => {
        zoomPopup.classList.toggle('popup_opened');

        let zoomImage = document.querySelector('.popup__zoom-image');
        let zoomCaption = document.querySelector('.popup__zoom-caption');

        zoomImage.src = cardData.link;
        zoomImage.alt = cardData.name;
        zoomCaption.textContent = cardData.name;
    }

    cardImage.addEventListener('click', openZoom);
    zoomClose.addEventListener('click', closeZoom);

    return cardElement;
}

function renderCardElement(cardElement) {
    cardGallery.append(cardElement);
}

initialCards.forEach((card) => {
    const element = createCardElement(card);
    renderCardElement(element);
});



