(this["webpackJsonplizard-spock-game"]=this["webpackJsonplizard-spock-game"]||[]).push([[0],{31:function(n,e,t){},42:function(n,e,t){"use strict";t.r(e);var i,a,c,r,s,d,o,l,x,p,h,b,j,m,f,g,O,u,w,v,y,k,S,C,z,B,I,E,L,P,T,M,U,Y,D,F=t(0),A=t.n(F),R=t(21),H=t.n(R),J=(t(31),t(2)),K=t(3),N=t(10),W=t.p+"static/media/logo-bonus.9bf8aeb8.svg",G=t(1),V=function(n){return Object(G.jsxs)(q,{children:[" ",Object(G.jsx)("img",{src:W,alt:""}),Object(G.jsxs)(Q,{children:[Object(G.jsx)("p",{children:"SCORE"}),Object(G.jsx)("strong",{children:n.points})]})]})},q=K.a.div(i||(i=Object(J.a)(["\n  margin-top: 20px;\n  border: 2px solid hsl(217, 16%, 45%);\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  width: 600px;\n  height: 100px;\n  border-radius: 20px;\n  padding: 20px;\n\n  @media (max-width: 700px) {\n    width: 100%;\n  }\n  @media (max-width: 550px) {\n    width: 90%;\n    margin-left: 10px;\n    margin-right: 10px;\n  }\n"]))),Q=K.a.div(a||(a=Object(J.a)(['\n  padding: 20px 0px 20px 0px;\n  border-radius: 15px;\n  width: 130px;\n  background: white;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  p {\n    font-family: "Barlow Semi Condensed", sans-serif;\n    color: hsl(229, 64%, 46%);\n    font-weight: 700;\n    margin: 0;\n    letter-spacing: 0.2em;\n  }\n  strong {\n    font-size: 3em;\n    color: hsl(229, 25%, 31%);\n    font-weight: 700;\n  }\n']))),X=t.p+"static/media/icon-scissors.3b1a5d7e.svg",Z=t.p+"static/media/icon-paper.8b57a6b1.svg",$=t.p+"static/media/icon-rock.476e90a9.svg",_=t.p+"static/media/icon-lizard.0f83914c.svg",nn=t.p+"static/media/icon-spock.f4d7eee8.svg",en=t(4),tn=t(9),an=function(n){n.confetBool(null);var e=function(n){localStorage.clear(),localStorage.setItem("playerSelected","".concat(n.target.id)),localStorage.setItem("compSelected","".concat(Math.floor(5*Math.random()+1)))};return Object(G.jsxs)(en.a,{children:[" ",Object(G.jsx)(cn,{children:Object(G.jsxs)(rn,{children:[Object(G.jsxs)(fn,{children:[" ",Object(G.jsxs)(tn.b,{to:"/gameresult",children:[" ",Object(G.jsx)(un,{children:Object(G.jsx)(sn,{id:1,onClick:e,children:Object(G.jsx)(pn,{id:1,src:X,alt:"scissors"})})})]})]}),Object(G.jsxs)(gn,{children:[" ",Object(G.jsx)(tn.b,{to:"/gameresult",children:Object(G.jsxs)(un,{children:[" ",Object(G.jsx)(xn,{id:5,onClick:e,children:Object(G.jsx)(mn,{id:5,src:nn,alt:"spock"})})]})}),Object(G.jsx)(tn.b,{to:"/gameresult",children:Object(G.jsx)(un,{children:Object(G.jsxs)(dn,{id:2,onClick:e,children:[" ",Object(G.jsx)(hn,{id:2,src:Z,alt:"paper"})]})})})]}),Object(G.jsxs)(On,{children:[" ",Object(G.jsx)(tn.b,{to:"/gameresult",children:Object(G.jsx)(un,{children:Object(G.jsx)(ln,{id:4,onClick:e,children:Object(G.jsx)(jn,{id:4,src:_,alt:"lizard"})})})}),Object(G.jsx)(tn.b,{to:"/gameresult",children:Object(G.jsx)(un,{children:Object(G.jsxs)(on,{id:3,onClick:e,children:[" ",Object(G.jsx)(bn,{id:3,src:$,alt:"rock"})]})})})]})]})})]})},cn=K.a.div(c||(c=Object(J.a)(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  margin-top: 25px;\n  width: 450px;\n  @media (max-width: 700px) {\n    width: 90%;\n  }\n  @media (max-width: 590px) {\n    width: 100%;\n  }\n  @media (max-width: 800px) {\n    margin-top: 10px;\n    transform: scale(0.8);\n  }\n  @media (max-width: 450px) {\n    transform: scale(0.8);\n    width: 450px;\n  }\n"]))),rn=K.a.div(r||(r=Object(J.a)(["\n  height: 400px;\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  z-index: 50;\n"]))),sn=K.a.div(s||(s=Object(J.a)(["\n  bottom: 70%;\n  left: 30%;\n  border: 20px solid orange;\n  :hover {\n    border-color: #df9a1d;\n    box-shadow: 0px 0px 20px orange;\n  }\n"]))),dn=K.a.div(d||(d=Object(J.a)(["\n  top: 20%;\n  left: 80%;\n  border: 20px solid #6a6af6;\n  :hover {\n    box-shadow: 0px 0px 20px #4a4aa7;\n  }\n"]))),on=K.a.div(o||(o=Object(J.a)(["\n  top: 80%;\n  right: -10%;\n  border: 20px solid #eb2e1a;\n  :hover {\n    box-shadow: 0px 0px 20px #ff4700;\n  }\n"]))),ln=K.a.div(l||(l=Object(J.a)(["\n  top: 80%;\n  left: -10%;\n\n  border: 20px solid #cc1fcc;\n  :hover {\n    box-shadow: 0px 0px 20px #ff00b1;\n  }\n"]))),xn=K.a.div(x||(x=Object(J.a)(["\n  top: 20%;\n  right: 80%;\n  border: 20px solid #32b1e5;\n\n  :hover {\n    box-shadow: 0px 0px 20px #02b4ab;\n  }\n"]))),pn=K.a.img(p||(p=Object(J.a)([""]))),hn=K.a.img(h||(h=Object(J.a)([""]))),bn=K.a.img(b||(b=Object(J.a)([""]))),jn=K.a.img(j||(j=Object(J.a)([""]))),mn=K.a.img(m||(m=Object(J.a)([""]))),fn=K.a.div(f||(f=Object(J.a)(["\n  width: 100%;\n  display: flex;\n  justify-content: center;\n"]))),gn=K.a.div(g||(g=Object(J.a)(["\n  width: 100%;\n\n  display: flex;\n  justify-content: space-between;\n"]))),On=K.a.div(O||(O=Object(J.a)(["\n  margin-top: 20px;\n  display: flex;\n  justify-content: space-between;\n  width: 80%;\n"]))),un=K.a.div(u||(u=Object(J.a)(["\n  div {\n    height: 100px;\n    width: 100px;\n    border-radius: 50%;\n    background: white;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n  }\n  div:hover {\n    transform: scale(1.2);\n\n    transition-timing-function: ease-in;\n\n    transition: 0.2s;\n  }\n"]))),wn=function(n){var e=parseInt(localStorage.getItem("playerSelected")),t=parseInt(localStorage.getItem("compSelected")),i=[{key:0,id:0,name:"",image:""},{key:1,id:1,name:"scissors",image:X,style:{border:"40px solid #df9a1d",boxShadow:"0px 0px 20px #df9a1d"}},{key:2,id:2,name:"paper",image:Z,style:{border:"40px solid #6a6af6",boxShadow:" 0px 0px 20px #4a4aa7"}},{key:3,id:3,name:"rock",image:$,style:{border:"40px solid #eb2e1a",boxShadow:"0px 0px 20px #ff4700"}},{key:4,id:4,name:"lizard",image:_,style:{border:"40px solid #cc1fcc",boxShadow:"0px 0px 20px #ff00b1"}},{key:5,id:5,name:"spock",image:nn,style:{border:"40px solid #32b1e5",boxShadow:" 0px 0px 20px #02b4ab"}}],a=function(){return e===t?"tied":5===t&&(4===e||2===e)||((e+1)%5===t||e===(t+2)%5)},c=Object(F.useState)(n.backup),r=Object(N.a)(c,2),s=r[0],d=r[1];Object(F.useState)((function(){!0===a()&&d((function(n){return n+1}))}),(function(){return Math.floor(5*Math.random()+1)})),n.score(s),n.confetBool(a());return Object(G.jsx)(en.a,{children:Object(G.jsx)(vn,{children:Object(G.jsxs)(yn,{children:[Object(G.jsxs)(Bn,{children:[Object(G.jsx)("p",{children:"YOU PICKED"}),i.map((function(n){if(n.id===e)return Object(G.jsxs)(kn,{style:n.style,children:[" ",Object(G.jsx)("img",{src:n.image,alt:""})," "]})}))]}),Object(G.jsx)(Cn,{children:Object(G.jsxs)(En,{children:["tied"===a()?"TIED":!0===a()?"YOU WIN":"YOU LOST",Object(G.jsx)(tn.b,{to:"/",children:Object(G.jsx)(zn,{onClick:function(){return n.confetBool(null)},children:"PLAY AGAIN"})})]})}),Object(G.jsxs)(In,{children:[Object(G.jsx)("p",{children:" BOT PICKED"}),Object(G.jsx)(Sn,{style:i[t].style,children:Object(G.jsx)("img",{src:i[t].image,alt:""})})]})]})})})},vn=K.a.div(w||(w=Object(J.a)(["\n  margin-top: 70px;\n  height: 100%;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  @media (max-width: 900px) {\n    transform: scale(0.8);\n  }\n  @media (max-width: 700px) {\n    height: 100%;\n    margin-top: 20px;\n  }\n  @media (max-width: 450px) {\n    overflow: hidden;\n\n    width: 100vw;\n  }\n"]))),yn=K.a.div(v||(v=Object(J.a)(["\n  display: flex;\n  justify-content: space-around;\n\n  height: 100%;\n  overflow: visible;\n"]))),kn=K.a.div(y||(y=Object(J.a)(["\n  @media (max-width: 450px) {\n    transform: scale(0.45);\n  }\n"]))),Sn=K.a.div(k||(k=Object(J.a)(["\n  @media (max-width: 450px) {\n    transform: scale(0.45);\n  }\n"]))),Cn=K.a.div(S||(S=Object(J.a)(['\n  align-self: center;\n  width: 300px;\n  text-align: center;\n  display: flex;\n  flex-direction: coumn;\n  justify-content: center;\n\n  margin: 0px 20px 0px 20px;\n\n  color: white;\n\n  font-family: "Barlow Semi Condensed", sans-serif;\n  font-weight: 800;\n  font-size: 4rem;\n  @media (max-width: 450px) {\n    position: fixed;\n    z-index: 10;\n    margin-top: 160px;\n  }\n']))),zn=K.a.button(C||(C=Object(J.a)(['\n  text-align: center;\n  width: 70%;\n  margin: 0;\n  cursor: pointer;\n\n  height: 50px;\n  border-radius: 10px;\n  border: none;\n  background: white;\n  font-family: "Barlow Semi Condensed", sans-serif;\n  font-size: 1.2rem;\n  font-weight: 600;\n  letter-spacing: 0.2em;\n  color: hsl(229, 25%, 31%);\n']))),Bn=K.a.div(z||(z=Object(J.a)(['\n  margin-right: 20px;\n  display: flex;\n  flex-direction: column;\n\n  div {\n    height: 160px;\n    width: 160px;\n\n    border-radius: 50%;\n    background: white;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n\n    img {\n      height: 80px;\n      width: 80px;\n    }\n  }\n  p {\n    font-family: "Barlow Semi Condensed", sans-serif;\n    color: white;\n    letter-spacing: 2px;\n    font-size: 1.5rem;\n    font-weight: 700;\n    margin: 0px 10px 0px 10;\n    align-self: center;\n  }\n  @media (max-width: 450px) {\n    margin-right: 0;\n    p {\n      margin: 0;\n      font-size: 1.2rem;\n    }\n  }\n']))),In=K.a.div(B||(B=Object(J.a)(['\n  overflow: visible;\n  display: flex;\n  flex-direction: column;\n  margin-left: 20px;\n  div {\n    height: 160px;\n    width: 160px;\n\n    border-radius: 50%;\n    background: white;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    img {\n      height: 80px;\n      width: 80px;\n    }\n  }\n  p {\n    font-family: "Barlow Semi Condensed", sans-serif;\n    color: white;\n    letter-spacing: 2px;\n    font-size: 1.5rem;\n    font-weight: 700;\n\n    align-self: center;\n  }\n  @media (max-width: 450px) {\n    margin-left: 0;\n    overflow: visible;\n    p {\n      margin: 0;\n      font-size: 1.2rem;\n\n      margin-left: 6px;\n    }\n  }\n']))),En=K.a.div(I||(I=Object(J.a)(["\n  margin: 10px;\n"]))),Ln=t.p+"static/media/image-rules-bonus.513320fb.svg",Pn=t.p+"static/media/icon-close.bde602ec.svg",Tn=function(){return Object(G.jsx)(Mn,{children:Object(G.jsx)("iframe",{width:"100%",height:"300px",margin:"0px 5px 0 5px",src:"https://www.youtube.com/embed/iSHPVCBsnLw",title:"YouTube video player",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:!0})})},Mn=K.a.div(E||(E=Object(J.a)([""]))),Un=function(n){return Object(G.jsxs)("div",{style:{width:"100%",display:"flex",alignItems:"center",justifyContent:"center"},children:[Object(G.jsx)(An,{onClick:n.onClose}),Object(G.jsxs)(Yn,{children:[Object(G.jsxs)(Dn,{children:[Object(G.jsx)("p",{children:"RULES"})," ",Object(G.jsx)("img",{src:Pn,onClick:n.onClose,alt:""})," "]}),Object(G.jsx)(Tn,{}),Object(G.jsx)(Fn,{src:Ln})]})]})},Yn=K.a.div(L||(L=Object(J.a)(["\n  background: #fbf8f8fa;\n  border-radius: 15px;\n  position: fixed;\n  top: 0;\n  margin-top: 20px;\n  width: 500px;\n  z-index: 100;\n  display: flex;\n  flex-direction: column;\n\n  @media (max-width: 550px) {\n    transform: scale(0.9);\n  }\n\n  @media (max-width: 450px) {\n    transform: scale(1);\n    width: 100%;\n    height: 100vh;\n  }\n"]))),Dn=K.a.div(P||(P=Object(J.a)(['\n  font-family: "Barlow Semi Condensed", sans-serif;\n\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 15px;\n  color: hsl(229, 25%, 31%);\n  img {\n    height: 20px;\n    width: 20px;\n  }\n  p {\n    font-size: 2rem;\n    font-weight: 700;\n    margin: 0;\n    margin-left: 10px;\n  }\n  span {\n    font-size: 1.1rem;\n    font-weight: 700;\n  }\n']))),Fn=K.a.img(T||(T=Object(J.a)(["\n  height: 250px;\n  width: 250px;\n  align-self: center;\n  margin: 10px;\n  @media (max-width: 450px) {\n    transform: scale(0.7);\n    margin: 0;\n  }\n"]))),An=K.a.div(M||(M=Object(J.a)(["\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100vh;\n  z-index: 10;\n  background: rgba(0, 0, 0, 0.75);\n"]))),Rn=t(25),Hn=t.n(Rn),Jn=function(){function n(){var n=window;return{width:n.innerWidth,height:n.innerHeight}}var e=function(){var e=Object(F.useState)(n()),t=Object(N.a)(e,2),i=t[0],a=t[1];return Object(F.useEffect)((function(){function e(){a(n())}return window.addEventListener("resize",e),function(){return window.removeEventListener("resize",e)}}),[]),i}(),t=e.width,i=e.height;return Object(G.jsx)(Hn.a,{width:t,height:i,style:{margin:"0",height:"100vh",width:"100%"}})},Kn=t.p+"static/media/mixkit-win.9b5b1a62.wav",Nn=t.p+"static/media/mixkit-lose.183e2b8a.wav",Wn=t(19),Gn=function(){var n=Object(F.useState)(0),e=Object(N.a)(n,2),t=e[0],i=e[1],a=Object(F.useState)(null),c=Object(N.a)(a,2),r=c[0],s=c[1],d=Object(Wn.a)(Kn),o=Object(N.a)(d,1)[0],l=Object(Wn.a)(Nn),x=Object(N.a)(l,1)[0],p=Object(F.useState)(!1),h=Object(N.a)(p,2),b=h[0],j=h[1],m=function(n){return j(!0===n),!0===n?o():!1===n?x():void 0};return Object(G.jsx)(tn.a,{children:Object(G.jsxs)(Vn,{children:[b&&Object(G.jsx)(Jn,{}),Object(G.jsx)(V,{points:t}),r&&Object(G.jsx)(Un,{onClose:function(){s(null)}}),Object(G.jsxs)(en.c,{children:[Object(G.jsxs)(en.a,{path:"/gameresult",children:[Object(G.jsx)(wn,{score:function(n){i(n)},backup:t,confetBool:m})," "]}),Object(G.jsxs)(en.a,{path:"/",children:[Object(G.jsx)(an,{confetBool:m}),Object(G.jsx)(qn,{onClick:function(){s(!0)},children:"RULES"})]})]})]})})},Vn=K.a.div(U||(U=Object(J.a)(["\n  margin: 0;\n\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  width: 100%;\n  @media (max-width: 700px) {\n    width: 80%;\n  }\n  @media (max-width: 550px) {\n    width: 100%;\n  }\n  @media (max-width: 450px) {\n    width: 95%;\n    margin: 0;\n  }\n"]))),qn=K.a.button(Y||(Y=Object(J.a)(['\n  width: 140px;\n  height: 50px;\n  align-self: flex-end;\n  margin-right: 20px;\n  margin-top: 10px;\n\n  bottom: 20px;\n\n  background: transparent;\n  border: 2px solid white;\n  color: white;\n  font-family: "Barlow Semi Condensed", sans-serif;\n  font-size: 1.3rem;\n  border-radius: 15px;\n  padding: 0px 10px 0px 10px;\n\n  :hover {\n    box-shadow: 0px 0px 5px #f8ebeb;\n  }\n  @media (max-width: 800px) {\n    transform: scale(0.8);\n    margin-top: 25px;\n    align-self: center;\n    margin-right: 0;\n    margin-bottom: 10px;\n  }\n'])));var Qn=function(){return Object(G.jsx)(Xn,{children:Object(G.jsx)(Gn,{})})},Xn=K.a.div(D||(D=Object(J.a)(["\n  margin: 0;\n  background: radial-gradient(\n    circle at top,\n    hsl(214, 47%, 23%),\n    hsl(237, 49%, 15%)\n  );\n  height: 100vh;\n\n  width: 100%;\n  display: flex;\n  justify-content: center;\n"]))),Zn=function(n){n&&n instanceof Function&&t.e(4).then(t.bind(null,44)).then((function(e){var t=e.getCLS,i=e.getFID,a=e.getFCP,c=e.getLCP,r=e.getTTFB;t(n),i(n),a(n),c(n),r(n)}))};H.a.render(Object(G.jsx)(A.a.StrictMode,{children:Object(G.jsx)(Qn,{})}),document.getElementById("root")),Zn()}},[[42,1,2]]]);
//# sourceMappingURL=main.a4f63ca2.chunk.js.map