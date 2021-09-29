function Main(props){
    return(
        <main className="content">
            <section className="profile">
                <div className="profile__avatar-container">
                    <img src="#" className="profile__avatar" alt="аватар" onClick={props.onEditAvatar}/>
                </div>
                <div className="profile__info">
                    <h1 className="profile__name">Jack-If-Kusto</h1>
                    <button className="profile__edit-button" type="button"onClick={props.onEditProfile}/>
                    <p className="profile__extra"/>
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