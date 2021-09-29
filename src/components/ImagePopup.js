function ImagePopup(props){

    return(
        <div className="popup popup_card" id="show_card">
        <div className="popup__card-container">
            <button className="popup__btn-close popup__card-btn-close" type="button" onClick={props.onClose}/>
            <img className="popup__img" alt="фото" src={props.card}/>
            <h2 className="popup__image-title"/>
        </div>
    </div>
    )
}
export default ImagePopup;