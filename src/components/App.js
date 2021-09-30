import React from "react";
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import ImagePopup from "./ImagePopup";
import PopupWithForm from "./PopupWithForm";

function App() {
    const [selectedCard, setSelectedCard] = React.useState(undefined)

    function handleCardClick(card){
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

    function closeAllPopups(){
        setEditProfilePopupOpen(false)
        setAddPlacePopupOpen(false)
        setEditAvatarPopupOpen(false)
        setSelectedCard(false)
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
                        onSelectedCard={handleCardClick}
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


