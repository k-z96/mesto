export default class UserInfo {
    constructor({profileNameSelector, profileOccupationSelector}){
        this._profileName = document.querySelector(profileNameSelector);
        this._profileOccupation = document.querySelector(profileOccupationSelector);
    }

    getUserInfo(){
        return{
            userName: this._profileName.textContent,
            userOccupation: this._profileOccupation.textConent
        }
    }

    setUserInfo({userName, userOccupation}) {
        this._profileName.textContent = userName;
        this._profileOccupation.textContent = userOccupation;
    }
}