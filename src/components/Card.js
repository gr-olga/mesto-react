import React from "react";

function Card(props){
    const {link, name} =props
    return(
            <div className="card">
                <button type="button" className="card__remove">
                    <img src="" alt="bin"/>
                </button>
                <img className="card__image" alt="фото" src={link}/>
                <div className="card__info">
                    <h2 className="card__title">{name}</h2>
                    <div className="card__like-box">
                        <button className="card__like" type="button"/>
                        <p className="card__like-num"/>
                    </div>
                </div>
            </div>
    )

}
export default Card;