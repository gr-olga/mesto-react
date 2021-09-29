import React from "react";
function PopupWithForm(props) {


    return (
        // <div className="popup" id={`${props.name}-popup`}>
        <div className={`popup popup_type_${props.name} ${props.isOpen ? 'popup_is-open' : ''}`} >
            <div className="popup__container">
                <button className="popup__btn-close" type="button" onClick={props.onClose}/>
                <h2 className="popup__title">{props.title}</h2>
                <form className="popup__form" name={`${props.name}Form`} noValidate>
                    <label className="popup__label">
                        <input name="profileName" className="popup__input" type="text"
                               placeholder="Имя"
                               minLength="2" maxLength="40" required/>
                        <span className="popup__message-error"/>
                    </label>
                    <label className="popup__label">
                        <input name="extra"  className="popup__input" type="text" placeholder="О себе"
                               minLength="2"
                               maxLength="200" required/>
                        <span className="popup__message-error "/>
                    </label>
                    <button type="submit" className="popup__save" onClick={props.onClose}>Сохранить</button>
                </form>
            </div>
        </div>
    )

}
export default PopupWithForm