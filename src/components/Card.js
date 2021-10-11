import React from "react";
import {CurrentUserContext} from "../contexts/CurrentUserContext";
import bin from "../images/bin.svg";
import {compareArraysAsSet} from "@testing-library/jest-dom/dist/utils";

function Card(props) {
    const currentUser = React.useContext(CurrentUserContext);
    const [like, setLike] = React.useState(false)

    function handleClick() {
        props.onCardClick(props);
    }
    function handleLikeClick(){
        props.onCardLike(props)
    }

    function getOwnerCardClass() {
        const isOwn = props.owner._id === currentUser._id;
        return `card__remove ${isOwn ? 'card__remove_active' : ''}`
    }

    function getLikeCardClass() {
         const isLik = props.likes.some(i => i._id === currentUser._id);
        return `card__like ${isLik ? 'card__like-active' : ''}`
    }


    const {link, name} = props
    return (
        <div className="card">
            <button type="button" className={getOwnerCardClass()}>
                <img src={bin} alt="bin"/>
            </button>
            <img className="card__image" alt="фото" src={link} onClick={handleClick}/>
            <div className="card__info">
                <h2 className="card__title">{name}</h2>
                <div className="card__like-box">
                    <button className={getLikeCardClass()} onClick={handleLikeClick} type="button"/>
                    <p className="card__like-num">{props.likes.length}</p>
                </div>
            </div>
        </div>
    )
}

export default Card;