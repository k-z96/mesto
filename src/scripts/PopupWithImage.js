import Popup from "./Popup.js";

export default class PopupWithImage extends Popup {
    constructor(popupSelector){
        super(popupSelector);
        this._zoomImage = this._popup.querySelector('.popup__zoom-image');
        this._zoomCaption = this._popup.querySelector('.popup__zoom-caption');
    }

    open(name, link){
        this._zoomCaption.textContent = name;
        this._zoomImage.src = link;
        this._zoomImage.alt = `${name}`;

        super.openPopup();
    }
}