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
        const values = {};
        this._popupInput.forEach(input => {
            values[input.name] = input.value
            });
        return values;
    }

    setEventListeners(){
        super.setEventListeners();
        this._popupForm.addEventListener('submit', (event) =>{
            event.preventDefault();

            this._handleFormSubmit(this._getInputValues);
        });
    }

    // setInputValues(data){
    //     this._popupInput.forEach((input) => {
    //         input.value = data[input.name];
    //     });
    // }

    open(){
        super.openPopup();
    }

    close(){
        super.closePopup();
        this._popupForm.reset()
    }
}