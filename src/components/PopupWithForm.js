import React from "react";
function PopupWithForm(props) {

    return (
        <div className={`popup popup_type_${props.name} ${props.isOpen ? 'popup_is-open' : ''}`} >
            <div className="popup__container">
                <button className="popup__btn-close" type="button" onClick={props.onClose}/>
                <h2 className="popup__title">{props.title}</h2>
                <form className="popup__form" name={`${props.name}Form`}>
                    {props.children}
                    <button type="submit" className="popup__save" onClick={props.onClose} >Сохранить</button>
                </form>
            </div>
        </div>
    )

}
export default PopupWithForm