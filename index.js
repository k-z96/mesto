//Declare
let popupElement = document.querySelector('.popup');

let popupAddButton = document.querySelector('.profile__edit-button');

let popupCloseButton = document.querySelector('.popup__close-icon');
let formSubmitButton = document.querySelector('.popup__form-submit');


let formElement = document.querySelector('.popup__form');

let nameInput = document.querySelector('#name');  
let jobInput = document.querySelector('#occupation'); 

let profileName = document.querySelector('.profile__name');
let profileOccupation = document.querySelector('.profile__occupation');


popupElement.classList.remove('popup_opened');

//Open popup
popupAddButton.addEventListener('click', function(){
    openPopup(popupElement);
});

function openPopup(popupElement){
    popupElement.classList.add('popup_opened');
}

//Close popup
function closePopup(popupElement){
    popupElement.classList.remove('popup_opened');
}

popupCloseButton.addEventListener('click', function(){
    closePopup(popupElement);
});


//Submit
function handleFormSubmit (evt) {
    evt.preventDefault(); 


    profileName.textContent = nameInput.value;
    profileOccupation.textContent = jobInput.value; 

    // Выберите элементы, куда должны быть вставлены значения полей

    // Вставьте новые значения с помощью textContent
}

// Прикрепляем обработчик к форме:
// он будет следить за событием “submit” - «отправка»
formSubmitButton.addEventListener('submit', handleFormSubmit);