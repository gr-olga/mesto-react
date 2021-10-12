import React from "react";
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import ImagePopup from "./ImagePopup";
import PopupWithForm from "./PopupWithForm";
import {api} from "../utils/Api";
import {CurrentUserContext} from "../contexts/CurrentUserContext";
import EditProfilePopup from "./EditProfilePopup";
import EditAvatarPopup from "./EditAvatarPopup";

function App() {

    const [user, setUser] = React.useState({})

    React.useEffect(() => {
        api.getInitialProfile().then((info) => {
            setUser(info);
        }).catch((err) => console.log(err))
    }, [])


    const [selectedCard, setSelectedCard] = React.useState(undefined)

    function handleCardClick(card) {
        setSelectedCard(card)
    }

    const [isEditProfilePopupOpen, setEditProfilePopupOpen] = React.useState(false)
    const [isAddPlacePopupOpen, setAddPlacePopupOpen] = React.useState(false)
    const [isEditAvatarPopupOpen, setEditAvatarPopupOpen] = React.useState(false)

    function handleAddPlaceClick() {
        setAddPlacePopupOpen(true)
    }

    function handleEditAvatarClick() {
        setEditAvatarPopupOpen(true)
    }

    function handleEditProfileClick() {
        setEditProfilePopupOpen(true)
    }

    function closeAllPopups() {
        setEditProfilePopupOpen(false)
        setAddPlacePopupOpen(false)
        setEditAvatarPopupOpen(false)
        setSelectedCard(undefined)
    }

    function handleUpdateUser(obj) {
        api.updateUserProfile(obj).then((info) => {
            setUser(info)
        }).then(() => closeAllPopups())
    }

    function handleUpdateAvatar(obj) {
        api.updateProfileAvatar(obj.avatar).then((info) => {
            setUser(info)
        }).then(() => closeAllPopups())
    }

    return (
        <div className="App">
            <div className="body">
                <div className="page">
                    <Header/>
                    <CurrentUserContext.Provider value={user}>
                        <Main
                            onAddPlace={handleAddPlaceClick}
                            onEditAvatar={handleEditAvatarClick}
                            onEditProfile={handleEditProfileClick}
                            onSelectedCard={handleCardClick}
                        />
                    </CurrentUserContext.Provider>
                    <Footer/>
                </div>
                <section>
                    <CurrentUserContext.Provider value={user}>
                        <EditProfilePopup
                            isOpen={isEditProfilePopupOpen}
                            onClose={closeAllPopups}
                            onUpdateUser={handleUpdateUser}
                        />
                        <PopupWithForm name="card" title="Новое место"
                                       isOpen={isAddPlacePopupOpen}
                                       onClose={closeAllPopups}
                        >
                            <label className="popup__label">
                                <input name="cardTitle" id="card-title" className="popup__input" type="text"
                                       placeholder="Название"
                                       minLength="2" maxLength="30" required/>
                                <span id="card-title-error" className="popup__message-error">  </span>
                            </label>
                            <label className="popup__label">
                                <input name="link" id="link" className="popup__input" type="url"
                                       placeholder="Cсылка на картинку"
                                       required/>
                                <span id="link-error" className="popup__message-error"> </span>
                            </label>
                        </PopupWithForm>
                        <EditAvatarPopup
                                         isOpen={isEditAvatarPopupOpen}
                                         onClose={closeAllPopups}
                                         onUpdateAvatar={handleUpdateAvatar}
                        >
                        </EditAvatarPopup>
                    </CurrentUserContext.Provider>
                    <ImagePopup
                        card={selectedCard}
                        onClose={closeAllPopups}
                    />
                </section>
            </div>
        </div>
    )
}

export default App;


