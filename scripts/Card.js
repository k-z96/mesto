//Zoom popup
const zoomPopup = document.querySelector('.popup_zoom');
const zoomImage = document.querySelector('.popup__zoom-image');
const zoomCaption = document.querySelector('.popup__zoom-caption')

function handleEscClose(event) {
    if (event.key === 'Escape') {
        const openedPopup = document.querySelector('.popup_opened');
        closePopup(openedPopup);
    }
}

function handleOutsideClick(event) {
    const popup = event.currentTarget;
    const popupForm = popup.querySelector('.popup__form');
    if (event.target === popup && event.target !== popupForm) {
        closePopup(popup);
    }
}

export function openPopup(popup) {
    popup.classList.add('popup_opened');
    document.addEventListener('keydown', handleEscClose);
    popup.addEventListener('click', handleOutsideClick);
}

export function closePopup(popup) {
    popup.classList.remove('popup_opened');
    document.removeEventListener('keydown', handleEscClose);
    popup.removeEventListener('click', handleOutsideClick);
}

export default class Card {
    constructor(data, templateSelector) {
      this._text = data.text;
      this._imageLink = data.imageLink;
      this._templateSelector = templateSelector;
      this._element = this._getTemplate();
      this._imageElement = this._element.querySelector('.card__image');
      this._cardTitle = this._element.querySelector('.card__title');
      this._likeButton = this._element.querySelector('.card__like-button');
      this._deleteButton = this._element.querySelector('.card__delete-button');
      this._setEventListeners();
    }
  
    _getTemplate() {
      const template = document.querySelector(this._templateSelector);
      const cardElement = template.content.cloneNode(true).querySelector('.card');
      return cardElement;
    }

    _handleLikeClick() {
        this._likeButton.classList.toggle('card__like_active');
      }
    
      _handleDeleteClick() {
        this._element.remove();
      }

      _handleImageClick() {
        openPopup(zoomPopup);
        zoomImage.src = this._imageLink;
        zoomImage.alt = this._text;
        zoomCaption.textContent = this._text;
      }
  
    _setEventListeners() {
      this._imageElement.addEventListener('click', this._handleImageClick.bind(this));
      this._likeButton.addEventListener('click', this._handleLikeClick.bind(this));
      this._deleteButton.addEventListener('click', this._handleDeleteClick.bind(this));
    }
  
    generateCard() {
      this._imageElement.src = this._imageLink;
      this._cardTitle.textContent = this._text;
      return this._element;
    }
  }