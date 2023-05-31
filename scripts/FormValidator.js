export default class FormValidator {
    constructor(settings, formElement) {
      this._settings = settings;
      this._formElement = formElement;
      this._buttonElement = this._formElement.querySelector(this._settings.submitButtonSelector);
      this._inputList = Array.from(this._formElement.querySelectorAll(this._settings.inputSelector));
    }
  
    _showInputError(inputElement, errorMessage) {
      const errorElement = this._formElement.querySelector(`.${inputElement.id}-error-message`);
      inputElement.classList.add(this._settings.inputErrorClass);
      errorElement.textContent = errorMessage;
      errorElement.classList.add(this._settings.errorClass);
    }
  
    _hideInputError(inputElement) {
      const errorElement = this._formElement.querySelector(`.${inputElement.id}-error-message`);
      inputElement.classList.remove(this._settings.inputErrorClass);
      errorElement.classList.remove(this._settings.errorClass);
      errorElement.textContent = '';
    }
  
    _isValid(inputElement) {
      if (!inputElement.validity.valid) {
        this._showInputError(inputElement, inputElement.validationMessage);
      } else {
        this._hideInputError(inputElement);
      }
    }
  
    _setEventListeners() {
      this._inputList.forEach(inputElement => {
        inputElement.addEventListener('input', () => {
          this._isValid(inputElement);
          this._toggleButtonState();
        });
      });
  
      this._toggleButtonState();
    }

    _toggleButtonState() {
        if (this._hasInvalidInput()) {
          this._buttonElement.classList.add(this._settings.inactiveButtonClass);
          this._buttonElement.disabled = true;
        } else {
          this._buttonElement.classList.remove(this._settings.inactiveButtonClass);
          this._buttonElement.disabled = false;
        }
      }
    
      _hasInvalidInput() {
        return this._inputList.some(inputElement => !inputElement.validity.valid);
      }

      enableValidation() {
        this._formElement.addEventListener('submit', event => {
          event.preventDefault();
        });
    
        this._setEventListeners();
      }

      resetValidation() {
        this._toggleButtonState();
        this._inputList.forEach((inputElement) => {
            this._hideInputError(inputElement)
        });
      }
  }
