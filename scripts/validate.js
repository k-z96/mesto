const validationSettings = {
    formSelector: '.popup__form',
    inputSelector: '.popup__form-input',
    submitButtonSelector: '.popup__form-submit',
    inactiveButtonClass: 'popup__form-submit_disabled',
    inputErrorClass: 'popup__form-input_wrong',
    errorClass: 'popup__form-input-error-message_active'
};

const showInputError = (formElement, inputElement, errorMessage, validation) => {
    const errorElement = formElement.querySelector(`.${inputElement.id}-error-message`);
    inputElement.classList.add(validation.inputErrorClass);
    errorElement.textContent = errorMessage;
    errorElement.classList.add(validation.errorClass);
};

const hideInputError = (formElement, inputElement, validation) => {
    const errorElement = formElement.querySelector(`.${inputElement.id}-error-message`);
    inputElement.classList.remove(validation.inputErrorClass);
    errorElement.classList.remove(validation.errorClass);
    errorElement.textContent = '';
};

const isValid = (formElement, inputElement, validation) => {
    if (!inputElement.validity.valid) {
        showInputError(formElement, inputElement, inputElement.validationMessage, validation);
    } else {
        hideInputError(formElement, inputElement, validation);
    }
};

const hasInvalidInput = (inputList) => {
    return inputList.some((inputElement) => {
        return !inputElement.validity.valid;
    });
};

const toggleButtonState = (inputList, buttonElement, validation) => {
    if (hasInvalidInput(inputList)) {
        buttonElement.classList.add(validation.inactiveButtonClass);
        buttonElement.disabled = true;
    } else {
        buttonElement.classList.remove(validation.inactiveButtonClass);
        buttonElement.disabled = false;
    }
    buttonElement.disabled = hasInvalidInput(inputList);
};

const setEventListeners = (formElement, validation) => {
    const inputList = Array.from(formElement.querySelectorAll(validation.inputSelector));
    const buttonElement = formElement.querySelector(validation.submitButtonSelector);

    inputList.forEach((inputElement) => {
        inputElement.addEventListener('input', function () {
            isValid(formElement, inputElement, validation);
            toggleButtonState(inputList, buttonElement, validation);
        });
    });

    toggleButtonState(inputList, buttonElement, validation);
};

const enableValidation = (validation) => {
    const formList = Array.from(document.querySelectorAll(validation.formSelector));

    formList.forEach((formElement) => {
        formElement.addEventListener('submit', (event) => {
            event.preventDefault();
        });

        setEventListeners(formElement, validation);
    });
};

enableValidation(validationSettings);

