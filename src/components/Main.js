import React from "react";
import {api} from "../utils/Api";
import Card from "./Card";
import {CurrentUserContext} from "../contexts/CurrentUserContext";

function Main(props) {

    const [cards, setCards] = React.useState([])

    React.useEffect(() => {
        api.getInitialCards().then((card) => {
            setCards(card)
        }).catch((err) => console.log(err))
    }, [])

    const currentUser = React.useContext(CurrentUserContext);


    function onCardClick(card) {
        props.onSelectedCard(card)
    }

    function handleCardLike(card) {
        const isLiked = card.likes.some(i => i._id === currentUser._id);
        if(!isLiked) {
            api.updateLikes(card._id,).then((newCard) => {
                const newCards = cards.map((c) => c._id === card._id ? newCard : c);
                setCards(newCards);
            })
        }
        else {
            api.deleteLikes(card._id,).then((newCard) => {
                const newCards = cards.map((c) => c._id === card._id ? newCard : c);
                setCards(newCards);
            })
        }

    }

    function handleCardDelete(card){
            api.deleteCard(card._id).then(()=>{
            const newCards = cards.filter((item) => card._id !== item._id)
                setCards(newCards)
            })
    }

return (
    <main className="content">
        <div> 123{currentUser.name}</div>
        <section className="profile">
            <div className="profile__avatar-container">
                <img src={currentUser.avatar} className="profile__avatar" alt="аватар" onClick={props.onEditAvatar}/>
            </div>
            <div className="profile__info">
                <h1 className="profile__name">{currentUser.name}</h1>
                <button className="profile__edit-button" type="button" onClick={props.onEditProfile}/>
                <p className="profile__extra">{currentUser.about}</p>
            </div>
            <button className="profile__add-card-button" type="button" onClick={props.onAddPlace}/>
        </section>
        <section className="cards-grid">
            {cards.map((card, _id) => {
                return <Card {...card}
                             onCardClick={onCardClick}
                             onCardLike={handleCardLike}
                             onCardDelete={handleCardDelete}
                             key={_id}/>
            })}
        </section>
    </main>
)
}

export default Main;