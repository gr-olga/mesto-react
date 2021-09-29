import React from "react";
import {api} from "../utils/Api";

function Main(props){

  const [userName,setUserName] = React.useState()
  const [userDescription,setUserDescription] = React.useState()
  const [userAvatar,setUserAvatar] = React.useState()

    React.useEffect(() =>{
        api.getInitialProfile().then(({name, about, avatar}) => {
            setUserName(name)
            setUserDescription(about)
            setUserAvatar(avatar)
        })
    })

    return(
        <main className="content">
            <section className="profile">
                <div className="profile__avatar-container">
                    <img src={userAvatar} className="profile__avatar" alt="аватар" onClick={props.onEditAvatar}/>
                </div>
                <div className="profile__info">
                    <h1 className="profile__name">{userName}</h1>
                    <button className="profile__edit-button" type="button"onClick={props.onEditProfile}/>
                    <p className="profile__extra">{userDescription}</p>
                </div>
                <button className="profile__add-card-button" type="button" onClick={props.onAddPlace}/>
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
    )
}
export default Main;