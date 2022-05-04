(this["webpackJsonpmesto-react"]=this["webpackJsonpmesto-react"]||[]).push([[0],{15:function(e,t,n){},17:function(e,t,n){"use strict";n.r(t);var a=n(1),c=n.n(a),r=n(7),s=n.n(r),i=(n(15),n(10)),o=n(2),l=n.p+"static/media/logo.ab669136.svg",u=n(0);var d=function(){return Object(u.jsx)("header",{className:"header",children:Object(u.jsx)("img",{src:l,className:"header__logo",alt:"\u041b\u043e\u0433\u043e\u0442\u0438\u043f"})})},p=n(6),h=c.a.createContext(),j=n.p+"static/media/bin.411087f0.svg";var b=function(e){var t=c.a.useContext(h),n=e.link,a=e.name;return Object(u.jsxs)("div",{className:"card",children:[Object(u.jsx)("button",{type:"button",className:function(){var n=e.owner._id===t._id;return"card__remove ".concat(n?"card__remove_active":"")}(),onClick:function(){e.onCardDelete(e)},children:Object(u.jsx)("img",{src:j,alt:"bin"})}),Object(u.jsx)("img",{className:"card__image",alt:e.name,src:n,onClick:function(){e.onCardClick(e)}}),Object(u.jsxs)("div",{className:"card__info",children:[Object(u.jsx)("h2",{className:"card__title",children:a}),Object(u.jsxs)("div",{className:"card__like-box",children:[Object(u.jsx)("button",{className:function(){var n=e.likes.some((function(e){return e._id===t._id}));return"card__like ".concat(n?"card__like-active":"")}(),onClick:function(){e.onCardLike(e)},type:"button"}),Object(u.jsx)("p",{className:"card__like-num",children:e.likes.length})]})]})]})};var f=function(e){var t=c.a.useContext(h);function n(t){e.onSelectedCard(t)}return Object(u.jsxs)("main",{className:"content",children:[Object(u.jsxs)("section",{className:"profile",children:[Object(u.jsx)("div",{className:"profile__avatar-container",children:Object(u.jsx)("img",{src:t.avatar,className:"profile__avatar",alt:"\u0430\u0432\u0430\u0442\u0430\u0440",onClick:e.onEditAvatar})}),Object(u.jsxs)("div",{className:"profile__info",children:[Object(u.jsx)("h1",{className:"profile__name",children:t.name}),Object(u.jsx)("button",{className:"profile__edit-button",type:"button",onClick:e.onEditProfile}),Object(u.jsx)("p",{className:"profile__extra",children:t.about})]}),Object(u.jsx)("button",{className:"profile__add-card-button",type:"button",onClick:e.onAddPlace})]}),Object(u.jsx)("section",{className:"cards-grid",children:e.cards.map((function(t,c){return Object(a.createElement)(b,Object(p.a)(Object(p.a)({},t),{},{onCardClick:n,onCardLike:e.onCardLike,onCardDelete:e.onCardDelete,key:t._id}))}))})]})};var m=function(){return Object(u.jsx)("footer",{className:"footer",children:Object(u.jsx)("p",{className:"footer__copyright",children:"\xa9 2021 Mesto Russia"})})};var _=function(e){var t,n,a;return Object(u.jsx)("div",{className:"popup popup_card ".concat(e.card?"popup_is-open":""),children:Object(u.jsxs)("div",{className:"popup__card-container",children:[Object(u.jsx)("button",{className:"popup__btn-close popup__card-btn-close",type:"button",onClick:e.onClose}),Object(u.jsx)("img",{className:"popup__img",alt:null===(t=e.card)||void 0===t?void 0:t.name,src:null===(n=e.card)||void 0===n?void 0:n.link}),Object(u.jsx)("h2",{className:"popup__image-title",children:null===(a=e.card)||void 0===a?void 0:a.name})]})})},O=n(8),v=n(9),x=function(e){return e.ok?e.json():Promise.reject("Error: ".concat(e.status))},g=new(function(){function e(t){Object(O.a)(this,e),this.headers=t.headers,this.baseUrl=t.baseUrl}return Object(v.a)(e,[{key:"getInitialCards",value:function(){return fetch("".concat(this.baseUrl,"/cards"),{headers:this.headers}).then(x)}},{key:"deleteCard",value:function(e){return fetch("".concat(this.baseUrl,"/cards/").concat(e),{method:"DELETE",headers:this.headers})}},{key:"getInitialProfile",value:function(){return fetch("".concat(this.baseUrl,"/users/me"),{headers:this.headers}).then(x)}},{key:"updateUserProfile",value:function(e){return fetch("".concat(this.baseUrl,"/users/me"),{method:"PATCH",headers:this.headers,body:JSON.stringify(e)}).then(x)}},{key:"updateProfileAvatar",value:function(e){return fetch("".concat(this.baseUrl,"/users/me/avatar"),{method:"PATCH",headers:this.headers,body:JSON.stringify({avatar:e})}).then(x)}},{key:"addCard",value:function(e){return fetch("".concat(this.baseUrl,"/cards"),{method:"POST",headers:this.headers,body:JSON.stringify(e)}).then(x)}},{key:"updateLikes",value:function(e){return fetch("".concat(this.baseUrl,"/cards/likes/").concat(e),{method:"PUT",headers:this.headers,body:JSON.stringify({likes:""})}).then(x)}},{key:"deleteLikes",value:function(e){return fetch("".concat(this.baseUrl,"/cards/likes/").concat(e),{method:"DELETE",headers:this.headers}).then(x)}}]),e}())({baseUrl:"https://mesto.nomoreparties.co/v1/cohort-27",headers:{authorization:"0f33f4c7-0e3e-4427-807e-866f8ecb2bfc","Content-Type":"application/json"}});var C=function(e){return Object(u.jsx)("div",{className:"popup popup_type_".concat(e.name," ").concat(e.isOpen?"popup_is-open":""),children:Object(u.jsxs)("div",{className:"popup__container popup__".concat(e.name),children:[Object(u.jsx)("button",{className:"popup__btn-close",type:"button",onClick:function(){e.onClose(e)}}),Object(u.jsx)("h2",{className:"popup__title",children:e.title}),Object(u.jsxs)("form",{className:"popup__form",name:"".concat(e.name,"Form"),onSubmit:e.onSubmit,children:[e.children,Object(u.jsx)("button",{type:"submit",className:"popup__save",children:"\u0421\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c"})]})]})})};var N=function(e){var t=c.a.useContext(h),n=c.a.useState(""),a=Object(o.a)(n,2),r=a[0],s=a[1],i=c.a.useState(""),l=Object(o.a)(i,2),d=l[0],p=l[1];return c.a.useEffect((function(){s(t.name),p(t.about)}),[t]),Object(u.jsxs)(C,{name:"profile",title:"\u0420\u0435\u0434\u0430\u043a\u0442\u0438\u0440\u043e\u0432\u0430\u0442\u044c \u043f\u0440\u043e\u0444\u0438\u043b\u044c",isOpen:e.isOpen,onClose:e.onClose,onSubmit:function(t){t.preventDefault(),e.onUpdateUser({name:r,about:d})},children:[Object(u.jsxs)("label",{className:"popup__label",children:[Object(u.jsx)("input",{name:"profileName",id:"profile-name",className:"popup__input",type:"text",placeholder:"\u0418\u043c\u044f",minLength:"2",maxLength:"40",required:!0,value:r||"",onChange:function(e){s(e.target.value)}}),Object(u.jsx)("span",{id:"profile-name-error",className:"popup__message-error",children:" "})]}),Object(u.jsxs)("label",{className:"popup__label",children:[Object(u.jsx)("input",{name:"extra",id:"extra",className:"popup__input",type:"text",placeholder:"\u041e \u0441\u0435\u0431\u0435",minLength:"2",maxLength:"200",required:!0,value:d||"",onChange:function(e){p(e.target.value)}}),Object(u.jsx)("span",{id:"extra-error",className:"popup__message-error ",children:" "})]})]})};var k=function(e){var t=c.a.useState(""),n=Object(o.a)(t,2),a=n[0],r=n[1];return Object(u.jsx)(C,{name:"avatar",title:"\u041d\u043e\u0432\u044b\u0439 \u0430\u0432\u0430\u0442\u0430\u0440",isOpen:e.isOpen,onClose:e.onClose,onSubmit:function(t){t.preventDefault(),e.onUpdateAvatar({avatar:a})},children:Object(u.jsxs)("label",{className:"popup__label",children:[Object(u.jsx)("input",{name:"link",id:"avatar-link",className:"popup__input",type:"url",placeholder:"C\u0441\u044b\u043b\u043a\u0430 \u043d\u0430 \u043a\u0430\u0440\u0442\u0438\u043d\u043a\u0443",required:!0,value:a,onChange:function(e){r(e.target.value)}}),Object(u.jsx)("span",{id:"avatar-link-error",className:"popup__message-error",children:" "})]})})};var y=function(e){var t=c.a.useState(""),n=Object(o.a)(t,2),a=n[0],r=n[1],s=c.a.useState(""),i=Object(o.a)(s,2),l=i[0],d=i[1];return c.a.useEffect((function(){d(""),r("")}),[e]),Object(u.jsxs)(C,{name:"card",title:"\u041d\u043e\u0432\u043e\u0435 \u043c\u0435\u0441\u0442\u043e",isOpen:e.isOpen,onClose:e.onClose,onSubmit:function(t){t.preventDefault(),e.onAddPlace({name:l,link:a})},children:[Object(u.jsxs)("label",{className:"popup__label",children:[Object(u.jsx)("input",{name:"cardTitle",id:"card-title",className:"popup__input",type:"text",placeholder:"\u041d\u0430\u0437\u0432\u0430\u043d\u0438\u0435",minLength:"2",maxLength:"30",required:!0,value:l,onChange:function(e){d(e.target.value)}}),Object(u.jsx)("span",{id:"card-title-error",className:"popup__message-error",children:"  "})]}),Object(u.jsxs)("label",{className:"popup__label",children:[Object(u.jsx)("input",{name:"link",id:"link",className:"popup__input",type:"url",placeholder:"C\u0441\u044b\u043b\u043a\u0430 \u043d\u0430 \u043a\u0430\u0440\u0442\u0438\u043d\u043a\u0443",required:!0,value:a,onChange:function(e){r(e.target.value)}}),Object(u.jsx)("span",{id:"link-error",className:"popup__message-error",children:" "})]})]})};var S=function(){var e=c.a.useState({}),t=Object(o.a)(e,2),n=t[0],a=t[1],r=c.a.useState(!1),s=Object(o.a)(r,2),l=s[0],p=s[1],j=c.a.useState(!1),b=Object(o.a)(j,2),O=b[0],v=b[1],x=c.a.useState(!1),C=Object(o.a)(x,2),S=C[0],P=C[1],U=c.a.useState(void 0),L=Object(o.a)(U,2),E=L[0],A=L[1];function D(){p(!1),v(!1),P(!1),A(void 0)}c.a.useEffect((function(){g.getInitialProfile().then((function(e){a(e)})).catch((function(e){return console.log(e)}))}),[]);var T=c.a.useContext(h),I=c.a.useState([]),J=Object(o.a)(I,2),q=J[0],F=J[1];return c.a.useEffect((function(){g.getInitialCards().then((function(e){F(e)})).catch((function(e){return console.log(e)}))}),[]),Object(u.jsx)("div",{className:"App",children:Object(u.jsxs)("div",{className:"body",children:[Object(u.jsxs)("div",{className:"page",children:[Object(u.jsx)(d,{}),Object(u.jsx)(h.Provider,{value:n,children:Object(u.jsx)(f,{onAddPlace:function(){v(!0)},onEditAvatar:function(){P(!0)},onEditProfile:function(){p(!0)},onSelectedCard:function(e){A(e)},cards:q,onCardLike:function(e){e.likes.some((function(e){return e._id===T._id}))?g.deleteLikes(e._id).then((function(t){var n=q.map((function(n){return n._id===e._id?t:n}));F(n)})).catch((function(e){return console.log(e)})):g.updateLikes(e._id).then((function(t){var n=q.map((function(n){return n._id===e._id?t:n}));F(n)})).catch((function(e){return console.log(e)}))},onCardDelete:function(e){g.deleteCard(e._id).then((function(){var t=q.filter((function(t){return e._id!==t._id}));F(t)})).catch((function(e){return console.log(e)}))}})}),Object(u.jsx)(m,{})]}),Object(u.jsxs)("section",{children:[Object(u.jsxs)(h.Provider,{value:n,children:[Object(u.jsx)(N,{isOpen:l,onClose:D,onUpdateUser:function(e){g.updateUserProfile(e).then((function(e){a(e)})).then((function(){return D()}))}}),Object(u.jsx)(y,{isOpen:O,onClose:D,onAddPlace:function(e){g.addCard(e).then((function(e){F([e].concat(Object(i.a)(q)))})).then((function(){return D()})).catch((function(e){return console.log(e)}))}}),Object(u.jsx)(k,{isOpen:S,onClose:D,onUpdateAvatar:function(e){g.updateProfileAvatar(e.avatar).then((function(e){a(e)})).then((function(){return D()})).catch((function(e){return console.log(e)}))}})]}),Object(u.jsx)(_,{card:E,onClose:D})]})]})})},P=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,18)).then((function(t){var n=t.getCLS,a=t.getFID,c=t.getFCP,r=t.getLCP,s=t.getTTFB;n(e),a(e),c(e),r(e),s(e)}))};s.a.render(Object(u.jsx)(c.a.StrictMode,{children:Object(u.jsx)(S,{})}),document.getElementById("root")),P()}},[[17,1,2]]]);
//# sourceMappingURL=main.8be41e05.chunk.js.map