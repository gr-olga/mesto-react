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

    function handleAddPlaceClick(){
        setEditAvatarPopupOpen(true)
    }
    function handleEditAvatarClick(){
        setAddPlacePopupOpen(true)
    }
    function handleEditProfileClick(){
        setEditProfilePopupOpen(true)
    }


    return (
        <div className="App">
            <div className="body">
            <div className="page">
               <Header/>
              <Main/>
              <Footer/>
            </div>
            <section>
                <PopupWithForm/>
                {/*<div className="popup" id="profile_popup">*/}
                {/*    <div className="popup__container">*/}
                {/*        <button className="popup__btn-close" type="button"/>*/}
                {/*        <h2 className="popup__title">Редактировать профиль</h2>*/}
                {/*        <form className="popup__form" name="profileForm" noValidate>*/}
                {/*            <label className="popup__label">*/}
                {/*                <input name="profileName" id="profile-name" className="popup__input" type="text"*/}
                {/*                       placeholder="Имя"*/}
                {/*                       minLength="2" maxLength="40" required/>*/}
                {/*                <span id="profile-name-error" className="popup__message-error"/>*/}
                {/*            </label>*/}
                {/*            <label className="popup__label">*/}
                {/*                <input name="extra" id="extra" className="popup__input" type="text" placeholder="О себе"*/}
                {/*                       minLength="2"*/}
                {/*                       maxLength="200" required/>*/}
                {/*                <span id="extra-error" className="popup__message-error "/>*/}
                {/*            </label>*/}
                {/*            <button type="submit" id="popup__save-profile" className="popup__save">Сохранить</button>*/}
                {/*        </form>*/}
                {/*    </div>*/}
                {/*</div>*/}
                {/*<div className="popup" id="card_popup">*/}
                {/*    <div className="popup__container">*/}
                {/*        <button className="popup__btn-close" type="button"/>*/}
                {/*        <h2 className="popup__title">Новое место</h2>*/}
                {/*        <form className="popup__form" name="cardForm" noValidate>*/}
                {/*            <label className="popup__label">*/}
                {/*                <input name="cardTitle" id="card-name" className="popup__input" type="text"*/}
                {/*                       placeholder="Название"*/}
                {/*                       minLength="2" maxLength="30" required/>*/}
                {/*                <span id="card-title-error" className="popup__message-error"/>*/}
                {/*            </label>*/}
                {/*            <label className="popup__label">*/}
                {/*                <input name="link" id="link" className="popup__input" type="url"*/}
                {/*                       placeholder="Cсылка на картинку"*/}
                {/*                       required/>*/}
                {/*                <span id="link-error" className="popup__message-error"/>*/}
                {/*            </label>*/}
                {/*            <button type="submit" id="popup__save-card"*/}
                {/*                    className="popup__save popup__save_invalid">Сохранить*/}
                {/*            </button>*/}
                {/*        </form>*/}
                {/*    </div>*/}
                {/*</div>*/}
              <ImagePopup/>
                <div className="popup" id="small_popup">
                    <div className="popup__container-small">
                        <button className="popup__btn-close" type="button"/>
                        <h2 className="popup__title-small">Вы уверены?</h2>
                        <button className="popup__save-small">Да</button>
                    </div>
                </div>
                {/*<div className="popup" id="avatar_popup">*/}
                {/*    <div className="popup__container-medium">*/}
                {/*        <button className="popup__btn-close" type="button"/>*/}
                {/*        <h2 className="popup__title-medium">Новый аватар</h2>*/}
                {/*        <form className="popup__form" name="avatarForm">*/}
                {/*            <label className="popup__label">*/}
                {/*                <input name="link" id="avatar-link" className="popup__input" type="url"*/}
                {/*                       placeholder="Cсылка на картинку"*/}
                {/*                       required/>*/}
                {/*                <span id="avatar-link-error" className="popup__message-error"/>*/}
                {/*            </label>*/}
                {/*            <button type="submit" id="popup__save-avatar"*/}
                {/*                    className="popup__save popup__save_invalid">Сохранить*/}
                {/*            </button>*/}
                {/*        </form>*/}
                {/*    </div>*/}
                {/*</div>*/}
            </section>
        </div>
        </div>
    )
}

export default App;


