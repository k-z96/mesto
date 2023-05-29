export function toggleButtonState(inputList, buttonElement, validation) {
    if (hasInvalidInput(inputList)) {
      buttonElement.classList.add(validation.inactiveButtonClass);
      buttonElement.disabled = true;
    } else {
      buttonElement.classList.remove(validation.inactiveButtonClass);
      buttonElement.disabled = false;
    }
    buttonElement.disabled = hasInvalidInput(inputList);
  }

  function hasInvalidInput(inputList) {
    return inputList.some(inputElement => !inputElement.validity.valid);
  }

export default class FormValidator {
    constructor(settings, formElement) {
      this._settings = settings;
      this._formElement = formElement;
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
      const inputList = Array.from(this._formElement.querySelectorAll(this._settings.inputSelector));
      const buttonElement = this._formElement.querySelector(this._settings.submitButtonSelector);
  
      inputList.forEach(inputElement => {
        inputElement.addEventListener('input', () => {
          this._isValid(inputElement);
          toggleButtonState(inputList, buttonElement, validationSettings);
        });
      });
  
      toggleButtonState(inputList, buttonElement, validationSettings);
    }
  
    enableValidation() {
      this._formElement.addEventListener('submit', event => {
        event.preventDefault();
      });
  
      this._setEventListeners();
    }
  }

  const validationSettings = {
    formSelector: '.popup__form',
    inputSelector: '.popup__form-input',
    submitButtonSelector: '.popup__form-submit',
    inactiveButtonClass: 'popup__form-submit_disabled',
    inputErrorClass: 'popup__form-input_wrong',
    errorClass: 'popup__form-input-error-message_active',
  };
  
  const addInfoForm = document.querySelector('.popup__form_profile');
  const addCardForm = document.querySelector('.popup__form_add-card');
  
  const addInfoValidator = new FormValidator(validationSettings, addInfoForm);
  const addCardValidator = new FormValidator(validationSettings, addCardForm);
  
  addInfoValidator.enableValidation();
  addCardValidator.enableValidation();