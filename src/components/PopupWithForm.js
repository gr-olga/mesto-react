function PopupWithForm(props) {

    return (
        <div className="popup" id={`${props.name}-popup`}>
            <div className="popup__container">
                <button className="popup__btn-close" type="button"/>
                <h2 className="popup__title">{props.title}</h2>
                <form className="popup__form" name={`${props.name}Info`} noValidate>
                    <label className="popup__label">
                        <input name="profileName" id={`${props.name}-name`} className="popup__input" type="text"
                               placeholder="Имя"
                               minLength="2" maxLength="40" required/>
                        <span id={`${props.name}-name-error`} className="popup__message-error"/>
                    </label>
                    <label className="popup__label">
                        <input name="extra" id="extra" className="popup__input" type="text" placeholder="О себе"
                               minLength="2"
                               maxLength="200" required/>
                        <span id="extra-error" className="popup__message-error "/>
                    </label>
                    <button type="submit" id={`popup__save-${props.name}`} className="popup__save">Сохранить</button>
                </form>
            </div>
        </div>
    )

}