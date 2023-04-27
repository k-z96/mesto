const showInputError = (formElement, inputElement, errorMessage) => {
    const errorElement = formElement.querySelector(`.${inputElement.id}-error-message`);
    inputElement.classList.add('popup__form-input_wrong');
    errorElement.textContent = errorMessage;
    errorElement.classList.add('popup__form-input-error-message_active');
};

const hideInputError = (formElement, inputElement) => {
    const errorElement = formElement.querySelector(`.${inputElement.id}-error-message`);
    inputElement.classList.remove('popup__form-input_wrong');
    errorElement.classList.remove('popup__form-input-error-message_active');
    errorElement.textContent = '';
};

const isValid = (formElement, inputElement) => {
    if (!inputElement.validity.valid) {
        showInputError(formElement, inputElement, inputElement.validationMessage);
    } else {
        hideInputError(formElement, inputElement);
    }
};

const hasInvalidInput = (inputList) => {
    return inputList.some((inputElement) => {
        return !inputElement.validity.valid;
    });
}

const toggleButtonState = (inputList, buttonElement) => {
    if (hasInvalidInput(inputList)) {
        buttonElement.classList.add('popup__form-submit_disabled');
    } else {
        buttonElement.classList.remove('popup__form-submit_disabled');
    }
}

const setEventListeners = (formElement) => {
    const inputList =
        Array.from(formElement.querySelectorAll('.popup__form-input'));

    const buttonElement = formElement.querySelector('.popup__form-submit');

    inputList.forEach((inputElement) => {
        inputElement.addEventListener('input', function () {
            isValid(formElement, inputElement);

            toggleButtonState(inputList, buttonElement);
        });
    });

    toggleButtonState(inputList, buttonElement);
};

const enableValidation = () => {
    const formList = Array.from(document.querySelectorAll('.popup__form'));

    formList.forEach((formElement) => {
        formElement.addEventListener('submit', (event) => {
            event.preventDefault();
        });

        //const fieldsetList = Array.from(formElement.querySelectorAll('.'))

        setEventListeners(formElement);
    });
}
enableValidation();

