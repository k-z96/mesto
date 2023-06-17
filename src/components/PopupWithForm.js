import Popup from "./Popup.js";

export default class PopupWithForm extends Popup {
    constructor(popupSelector, handleFormSubmit){
        super(popupSelector);
        this._popupForm = this._popup.querySelector('.popup__form');
        this._popupInput = this._popup.querySelectorAll('.popup__form-input');
        this._popupFormSubmit = this._popup.querySelector('.popup__form-submit');
        this._handleFormSubmit = handleFormSubmit.bind(this);
    }

    _getInputValues(){
        this._values = {};
        this._popupInput.forEach(input => {
            this._values[input.name] = input.value
            });
        return this._values;
    }

    setEventListeners(){
        super.setEventListeners();
        this._popupForm.addEventListener('submit', (event) =>{
            event.preventDefault();

            this._handleFormSubmit(this._getInputValues());
        });
    }

    close(){
        super.close();
        this._popupForm.reset();
    }
}