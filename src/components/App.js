import React from "react";
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import ImagePopup from "./ImagePopup";
import PopupWithForm from "./PopupWithForm";

function App() {

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

    function closeAllPopups(){
        setEditProfilePopupOpen(false)
        setAddPlacePopupOpen(false)
        setEditAvatarPopupOpen(false)
    }

    return (
        <div className="App">
            <div className="body">
                <div className="page">
                    <Header/>
                    <Main
                        onAddPlace={handleAddPlaceClick}
                        onEditAvatar={handleEditAvatarClick}
                        onEditProfile={handleEditProfileClick}
                    />
                    <Footer/>
                </div>
                <section>
                    <PopupWithForm name="profile" title="Редактировать профиль"
                                   isOpen={isEditProfilePopupOpen}
                                   onClose={closeAllPopups}
                    />
                    <PopupWithForm name="card" title="Новое место"
                                   isOpen={isAddPlacePopupOpen}
                                   onClose={closeAllPopups}
                    />
                    <PopupWithForm name="avatar" title="Новый аватар"
                                   isOpen={isEditAvatarPopupOpen}
                                   onClose={closeAllPopups}
                    />
                    <ImagePopup/>
                    <div className="popup" id="small_popup">
                        <div className="popup__container-small">
                            <button className="popup__btn-close" type="button"/>
                            <h2 className="popup__title-small">Вы уверены?</h2>
                            <button className="popup__save-small">Да</button>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    )
}

export default App;


