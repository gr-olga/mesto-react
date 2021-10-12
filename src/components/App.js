import React from "react";
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import ImagePopup from "./ImagePopup";
import PopupWithForm from "./PopupWithForm";
import {api} from "../utils/Api";
import {CurrentUserContext} from "../contexts/CurrentUserContext";
import EditProfilePopup from "./EditProfilePopup";
import EditAvatarPopup from "./EditAvatarPopup";
import AddPlacePopup from "./AddPlacePopup";

function App() {

    const [user, setUser] = React.useState({})

    React.useEffect(() => {
        api.getInitialProfile().then((info) => {
            setUser(info);
        }).catch((err) => console.log(err))
    }, [])


    const [selectedCard, setSelectedCard] = React.useState(undefined)

    function handleCardClick(card) {
        setSelectedCard(card)
    }

    const [isEditProfilePopupOpen, setEditProfilePopupOpen] = React.useState(false)
    const [isAddPlacePopupOpen, setAddPlacePopupOpen] = React.useState(false)
    const [isEditAvatarPopupOpen, setEditAvatarPopupOpen] = React.useState(false)

    function handleAddPlaceClick() {
        setAddPlacePopupOpen(true)
    }

    function handleEditAvatarClick() {
        setEditAvatarPopupOpen(true)
    }

    function handleEditProfileClick() {
        setEditProfilePopupOpen(true)
    }

    function closeAllPopups() {
        setEditProfilePopupOpen(false)
        setAddPlacePopupOpen(false)
        setEditAvatarPopupOpen(false)
        setSelectedCard(undefined)
    }

    function handleUpdateUser(obj) {
        api.updateUserProfile(obj).then((info) => {
            setUser(info)
        }).then(() => closeAllPopups())
    }

    function handleUpdateAvatar(obj) {
        api.updateProfileAvatar(obj.avatar).then((info) => {
            setUser(info)
        }).then(() => closeAllPopups())
    }


    const currentUser = React.useContext(CurrentUserContext);
    const [cards, setCards] = React.useState([])

    React.useEffect(() => {
        api.getInitialCards().then((card) => {
            setCards(card)
        }).catch((err) => console.log(err))
    }, [])


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

    function handleAddPlaceSubmit(obj){
        api.addCard(obj).then((newCard)=>{
            setCards([newCard, ...cards]);
        }).then(() => closeAllPopups())
    }

    return (
        <div className="App">
            <div className="body">
                <div className="page">
                    <Header/>
                    <CurrentUserContext.Provider value={user}>
                        <Main
                            onAddPlace={handleAddPlaceClick}
                            onEditAvatar={handleEditAvatarClick}
                            onEditProfile={handleEditProfileClick}
                            onSelectedCard={handleCardClick}
                            cards={cards}
                            onCardLike={handleCardLike}
                            onCardDelete={handleCardDelete}
                        />
                    </CurrentUserContext.Provider>
                    <Footer/>
                </div>
                <section>
                    <CurrentUserContext.Provider value={user}>
                        <EditProfilePopup
                            isOpen={isEditProfilePopupOpen}
                            onClose={closeAllPopups}
                            onUpdateUser={handleUpdateUser}
                          //  onUpdateUse={}

                        />
                        <AddPlacePopup
                                       isOpen={isAddPlacePopupOpen}
                                       onClose={closeAllPopups}
                                       onAddPlace={handleAddPlaceSubmit}
                                       //onAddPlace={handleAddPlaceSubmit}
                        >

                        </AddPlacePopup>
                        <EditAvatarPopup
                                         isOpen={isEditAvatarPopupOpen}
                                         onClose={closeAllPopups}
                                         onUpdateAvatar={handleUpdateAvatar}
                                      //   onSubmit={handleAddPlaceSubmit}
                        >
                        </EditAvatarPopup>
                    </CurrentUserContext.Provider>
                    <ImagePopup
                        card={selectedCard}
                        onClose={closeAllPopups}
                    />
                </section>
            </div>
        </div>
    )
}

export default App;


