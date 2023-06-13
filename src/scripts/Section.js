import Card from "./Card";

export default class Section {
    constructor({items, renderer}, selector){
        this._items = items;
        this._renderer = renderer;
        this._container = selector;
    }
    renderItems(){
     this._items.forEach((item) => 
        this._renderer(item)
     )};

    addItem(itemHtml){
        this._container.prepend(itemHtml);
     }
    }

// function renderCard(cardData){
//     const cardElement = createCard(cardData);
//     section.addItem(cardElement); 
// }

// function createCard(cardData){
//     const card = new Card(cardData, '#card-template', handleOpenPopup);
//     const cardElement = card.generateCard();
//     return cardElement;
// }

// const section = new Section({
//     items: initialCards,
//         renderer: renderCard
//     }, '#cards'
// );
// section.renderItems();