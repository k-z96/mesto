export default class Popup{
    constructor(popupSelector){
        this._popup = document.querySelector(popupSelector);
        this._handleEscClose = this._handleEscClose.bind(this);
        this._handleOutsideClick = this._handleOutsideClick.bind(this);
    }

    openPopup(){
        this._popup.classList.add('popup_opened');
        document.addEventListener('keydown', this._handleEscClose);
        this._popup.addEventListener('click', this._handleOutsideClick);
    }

    closePopup(){
        this._popup.classList.remove('popup_opened');
        document.removeEventListener('keydown', this._handleEscClose);
        this._popup.removeEventListener('click', this._handleOutsideClick);
    }

    _handleEscClose(event) {
        if (event.key === 'Escape') {
            this.closePopup();
        }
    }
    
    _handleOutsideClick(event) {
        const popup = event.currentTarget;
        if (event.target === popup) {
            this.closePopup(popup);
        }
    }

    setEventListeners(){
        this._popup.addEventListener('mousedown', event => {
            if (event.target.classList.contains('popup_opened') 
            || event.target.classList.contains('popup__close-icon')){
                this.closePopup();
            }
        });
    }
}