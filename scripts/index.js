//Declare
let popupElement = document.querySelector('.popup');

let popupAddButton = document.querySelector('.profile__edit-button');

let popupCloseButton = document.querySelector('.popup__close-icon');


let formElement = document.querySelector('.popup__form');

let nameInput = document.querySelector('#name');  
let jobInput = document.querySelector('#occupation'); 

let profileName = document.querySelector('.profile__name');
let profileOccupation = document.querySelector('.profile__occupation');


//Open popup
function openPopup(popupElement){
    popupElement.classList.add('popup_opened');
    nameInput.value = profileName.textContent;
    jobInput.value = profileOccupation.textContent;
}

//Close popup
function closePopup(popupElement){
    popupElement.classList.remove('popup_opened');
}

//Submit
function handleFormSubmit (evt) {
    evt.preventDefault(); 

    profileName.textContent = nameInput.value;
    profileOccupation.textContent = jobInput.value; 
    
    closePopup(popupElement);
}



popupAddButton.addEventListener('click', function(){
    openPopup(popupElement);
});

popupCloseButton.addEventListener('click', function(){
    closePopup(popupElement);
});

formElement.addEventListener('submit', handleFormSubmit);

