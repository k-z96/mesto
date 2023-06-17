export default class Card {
    constructor({cardData, templateSelector, handleOpenPopup}) {
      this._text = cardData.cardName;
      this._imageLink = cardData.imageLink;
      this._templateSelector = templateSelector;

      this._element = this._getTemplate();
      this._imageElement = this._element.querySelector('.card__image');
      this._cardTitle = this._element.querySelector('.card__title');
      this._likeButton = this._element.querySelector('.card__like-button');
      this._deleteButton = this._element.querySelector('.card__delete-button');

      
      this._handleOpenPopup= handleOpenPopup;
      this._setEventListeners();
    }
  
    _getTemplate() {
      const template = document.querySelector(this._templateSelector);
      const cardElement = template.content.cloneNode(true).querySelector('.card');
      return cardElement;
    }
  
    generateCard() {      
      this._imageElement.src = this._imageLink;
      this._imageElement.alt = this._text;
      this._cardTitle.textContent = this._text;

      this._setEventListeners();
      return this._element;
    }

    _setEventListeners() {
      this._likeButton.addEventListener('click', this._handleLikeClick.bind(this));
      this._deleteButton.addEventListener('click', this._handleDeleteClick.bind(this));
      this._imageElement.addEventListener('click', () =>{ 
      this._handleOpenPopup(this._text, this._imageLink) 
      });  
    }

    _handleLikeClick() {
      this._likeButton.classList.toggle('card__like_active');
    }
  
  _handleDeleteClick() {
      this._element.remove();
      this._element = null;
    }

  }

