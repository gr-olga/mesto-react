import React from "react";
import {api} from "../utils/Api";
import Card from "./Card";

function Main(props) {

    const [cards, setCards] = React.useState([])

    React.useEffect(() => {
        api.getInitialCards().then((card) => {
            setCards(card)
        })
    })

    const [userName, setUserName] = React.useState()
    const [userDescription, setUserDescription] = React.useState()
    const [userAvatar, setUserAvatar] = React.useState()

    React.useEffect(() => {
        api.getInitialProfile().then(({name, about, avatar}) => {
            setUserName(name)
            setUserDescription(about)
            setUserAvatar(avatar)
        })
    })

    function onCardClick(card) {
        props.onSelectedCard(card)
    }

    return (
        <main className="content">
            <section className="profile">
                <div className="profile__avatar-container">
                    <img src={userAvatar} className="profile__avatar" alt="аватар" onClick={props.onEditAvatar}/>
                </div>
                <div className="profile__info">
                    <h1 className="profile__name">{userName}</h1>
                    <button className="profile__edit-button" type="button" onClick={props.onEditProfile}/>
                    <p className="profile__extra">{userDescription}</p>
                </div>
                <button className="profile__add-card-button" type="button" onClick={props.onAddPlace}/>
            </section>
            <section className="cards-grid">
                {cards.map((card, i) => {
                    return <Card {...card} onCardClick={onCardClick} key={i} />
                })}
            </section>
        </main>
    )
}

export default Main;