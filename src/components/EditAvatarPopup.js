import PopupWithForm from "./PopupWithForm";
import React from "react";
//import {CurrentUserContext} from "../contexts/CurrentUserContext";


function EditAvatarPopup(props){


  //  const currentUser = React.useContext(CurrentUserContext);

    const [avatar, setAvatar] = React.useState('')


  function handleChangeAvatar(e){
    setAvatar(e.target.value)
  }

    function handleSubmit(e) {
        e.preventDefault();
        props.onUpdateAvatar({
            avatar: avatar
        });
    }

    return (
        <PopupWithForm name="profile" title="Редактировать профиль"
                       isOpen={props.isOpen}
                       onClose={props.onClose}
                       onSubmit={handleSubmit}
        >
            <label className="popup__label">
                <input name="link" id="avatar-link" className="popup__input" type="url"
                       placeholder="Cсылка на картинку"
                       required
                       value={avatar}
                       onChange={handleChangeAvatar}

                />
                <span id="avatar-link-error" className="popup__message-error"> </span>
            </label>
        </PopupWithForm>
    )
}
export default EditAvatarPopup;