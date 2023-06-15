export default class Section {
    constructor({items, renderer, selector}) {
        this._renderedItems = items;
        this._renderer = renderer;

        this._container = selector;
    }

    renderItems(){
        this._renderedItems.forEach(item => 
            this._renderer(item));
    }

    addNewItem(item) {
        this._container.prepend(item);
    }

    addItem(item){
        this._container.append(item);
    }
}