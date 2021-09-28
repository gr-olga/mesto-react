
function App() {
    return (
        <div className="App">
            <div className="page">
                <header className="header">
                    <img src="" className="header__logo" alt="Логотип"/>
                </header>
                <main className="content">
                    <section className="profile">
                        <div className="profile__avatar-container">
                            <img src="#" className="profile__avatar" alt="аватар"/>
                        </div>
                        <div className="profile__info">
                            <h1 className="profile__name"/>
                            <button className="profile__edit-button" type="button"/>
                            <p className="profile__extra"/>
                        </div>
                        <button className="profile__add-card-button" type="button"/>
                    </section>
                    <section className="cards-grid">
                        <template id="card">
                            <div className="card">
                                <button type="button" className="card__remove">
                                    <img src="" alt="bin"/>
                                </button>
                                <img className="card__image" alt="фото"/>
                                <div className="card__info">
                                    <h2 className="card__title"/>
                                    <div className="card__like-box">
                                        <button className="card__like" type="button"/>
                                        <p className="card__like-num">1</p>
                                    </div>
                                </div>
                            </div>
                        </template>
                    </section>
                </main>
                <footer className="footer">
                    <p className="footer__copyright">© 2020 Mesto Russia</p>
                </footer>
            </div>
            <section>
                <div className="popup" id="edit_profile_popup">
                    <div className="popup__container">
                        <button className="popup__btn-close" type="button"/>
                        <h2 className="popup__title">Редактировать профиль</h2>
                        <form className="popup__form" name="profileInfo" noValidate>
                            <label className="popup__label">
                                <input name="profileName" id="profile-name" className="popup__input" type="text"
                                       placeholder="Имя"
                                       minLength="2" maxLength="40" required/>
                                <span id="profile-name-error" className="popup__message-error"/>
                            </label>
                            <label className="popup__label">
                                <input name="extra" id="extra" className="popup__input" type="text" placeholder="О себе"
                                       minLength="2"
                                       maxLength="200" required/>
                                <span id="extra-error" className="popup__message-error "/>
                            </label>
                            <button type="submit" id="popup__save-profile" className="popup__save">Сохранить</button>
                        </form>
                    </div>
                </div>
                <div className="popup" id="add_card_popup">
                    <div className="popup__container">
                        <button className="popup__btn-close" type="button"/>
                        <h2 className="popup__title">Новое место</h2>
                        <form className="popup__form" name="newPlace" noValidate>
                            <label className="popup__label">
                                <input name="cardTitle" id="card-title" className="popup__input" type="text"
                                       placeholder="Название"
                                       minLength="2" maxLength="30" required/>
                                <span id="card-title-error" className="popup__message-error"/>
                            </label>
                            <label className="popup__label">
                                <input name="link" id="link" className="popup__input" type="url"
                                       placeholder="Cсылка на картинку"
                                       required/>
                                <span id="link-error" className="popup__message-error"/>
                            </label>
                            <button type="submit" id="popup__save-place"
                                    className="popup__save popup__save_invalid">Сохранить
                            </button>
                        </form>
                    </div>
                </div>
                <div className="popup popup_card" id="show_card">
                    <div className="popup__card-container">
                        <button className="popup__btn-close popup__card-btn-close" type="button"/>
                        <img className="popup__img" alt="фото" src="#"/>
                        <h2 className="popup__image-title"/>
                    </div>
                </div>
                <div className="popup" id="small_popup">
                    <div className="popup__container-small">
                        <button className="popup__btn-close" type="button"/>
                        <h2 className="popup__title-small">Вы уверены?</h2>
                        <button className="popup__save-small">Да</button>
                    </div>
                </div>
                <div className="popup" id="avatar_form">
                    <div className="popup__container-medium">
                        <button className="popup__btn-close" type="button"/>
                        <h2 className="popup__title-medium">Новый аватар</h2>
                        <form className="popup__form" name="avatarForm">
                            <label className="popup__label">
                                <input name="link" id="avatar-link" className="popup__input" type="url"
                                       placeholder="Cсылка на картинку"
                                       required/>
                                <span id="avatar-link-error" className="popup__message-error"/>
                            </label>
                            <button type="submit" id="popup__save-avatar"
                                    className="popup__save popup__save_invalid">Сохранить
                            </button>
                        </form>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default App;


