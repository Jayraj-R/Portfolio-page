(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{51:function(e,a,t){},58:function(e,a,t){e.exports=t.p+"static/media/phc.92ecfcd6.jpg"},59:function(e,a,t){e.exports=t.p+"static/media/weather.eb30ce00.jpg"},60:function(e,a,t){e.exports=t.p+"static/media/ttt.b551fea6.png"},70:function(e,a,t){e.exports=t(83)},75:function(e,a,t){},81:function(e,a,t){},83:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),l=t(9),i=t.n(l),c=(t(75),t(51),t(39)),o=t(22),s=t(64),m=t(117),d=t(109),g=t(116),u=t(113),E=t(114),p=t(115),f=t(112),h=t(119),b=t(111),v=t(107),y=t(118),x=t(56),N=t.n(x),k=Object(v.a)({paper:{backgroundColor:"#605F5D",textAlign:"center"},list:{display:"flex",flexDirection:"column",width:"100%",marginTop:40},links:{textDecoration:"none",color:"#FEF9EE"},underline:{position:"relative",top:"-0.8em",color:"#FEF9EE"}}),w=function(){var e,a=k(),t=Object(n.useState)({right:!1}),r=Object(o.a)(t,2),l=r[0],i=r[1],s=function(e,a){return function(t){("keydown"!==t.type||"Tab"!==t.key&&"Shift"!==t.key)&&i(Object(c.a)({},e,a))}};return n.createElement(n.Fragment,null,n.createElement(f.a,{edge:"start","aria-label":"menu",onClick:s("right",!0)},n.createElement(N.a,null)),n.createElement(y.a,{classes:{paper:a.paper},anchor:"right",open:l.right,onOpen:s("right",!0),onClose:s("right",!1)},(e="right",n.createElement("div",{role:"presentation",onClick:s(e,!1),onKeyDown:s(e,!1)},n.createElement(d.a,{container:!0,className:a.list},n.createElement("a",{href:"#about",className:a.links},n.createElement(b.a,{color:"secondary"},n.createElement("span",{style:{letterSpacing:5,marginBottom:20}},"About",n.createElement("hr",{className:a.underline})))),n.createElement("a",{href:"#work",className:a.links},n.createElement(b.a,{color:"secondary"},n.createElement("span",{style:{letterSpacing:5,marginBottom:20}},"Work",n.createElement("hr",{className:a.underline})))),n.createElement("a",{href:"#contact",className:a.links},n.createElement(b.a,{color:"secondary"},n.createElement("span",{style:{letterSpacing:5,marginBottom:20}},"Contact",n.createElement("hr",{className:a.underline})))))))))},F=Object(v.a)({navbar:{borderBottom:"5px solid #00C9A9"},navbarDisplayFlex:{display:"flex",justifyContent:"space-between"},navbarButton:{padding:"1em",lineHeight:"2em"},button:{"&:hover":{"& hr":{transform:"scale(1)",transformOrigin:"left"}}},underline:{position:"relative",top:-10,marginBottom:-10,color:"#FEF9EE",transform:"scaleX(0)",transformOrigin:"right",transition:"transform 250ms ease-in"},links:{textDecoration:"none",color:"#FEF9EE"}}),j=function(){var e=F();return n.createElement(u.a,{position:"fixed"},n.createElement(E.a,{className:e.navbar},n.createElement(p.a,{maxWidth:"xl",className:e.navbarDisplayFlex},n.createElement("a",{href:"#start",className:e.links},n.createElement(f.a,{edge:"start",color:"inherit","aria-label":"home"},"JR")),n.createElement(h.a,{smDown:!0},n.createElement(d.a,{className:e.navbarButton,justify:"flex-end"},n.createElement("a",{href:"#about",className:e.links},n.createElement(b.a,{className:e.button,color:"secondary"},n.createElement("span",{style:{letterSpacing:5}},"About",n.createElement("hr",{className:e.underline})))),n.createElement("a",{href:"#work",className:e.links},n.createElement(b.a,{className:e.button,color:"secondary"},n.createElement("span",{style:{letterSpacing:5}},"Work",n.createElement("hr",{className:e.underline})))),n.createElement("a",{href:"#contact",className:e.links},n.createElement(b.a,{className:e.button,color:"secondary"},n.createElement("span",{style:{letterSpacing:5}},"Contact",n.createElement("hr",{className:e.underline})))))),n.createElement(h.a,{mdUp:!0},n.createElement(w,null)))))},T=(t(81),function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{id:"stars"}),r.a.createElement("div",{id:"stars2"}),r.a.createElement("div",{id:"stars3"}))}),S=function(){var e=Object(n.useState)({style:{top:"0px",left:"0px"}}),a=Object(o.a)(e,2),t=a[0],l=a[1],i=0,c=0,s=0,m=0,d=function(e){return e+.8},g=function(e){return e-.8},u=-window.innerWidth/8;return Object(n.useEffect)(function(){l(document.getElementById("container")),t.style.top="-250px",t.style.left=u+"px",window.addEventListener("mousemove",function(e){var a=e.clientX,n=e.clientY,r=a<i,l=n>c,o=n<c;a>i&&(s=d(s)),r&&(s=g(s)),l&&(m=d(m)),o&&(m=g(m)),t.style.left=u+s+"px",t.style.top=-250+m+"px",i=a,c=n})}),r.a.createElement("div",{id:"main"},r.a.createElement("div",{id:"container",style:{position:"absolute",height:"100vh"}},r.a.createElement(T,null)))},O=t(12),C=t(7),I=Object(v.a)({fewWords:{backgroundColor:"#FEF9EE",position:"relative",zIndex:1,height:"auto",transitionTimingFunction:"ease-in-out",padding:"1.2em"}}),D=function(){var e=I();return r.a.createElement("div",null,r.a.createElement(C.a,null,r.a.createElement(C.b,{indicators:!1,reverse:!0,duration:50,offset:-80},r.a.createElement(O.a,{staggerFrom:{transform:"scale(0)",opacity:0},staggerTo:{transform:"scale(1)",opacity:1},stagger:1},r.a.createElement(g.a,{className:e.fewWords,variant:"h6"},"A versatile Front-end Developer enthusiast with intermediate experience of designing, developing, and managing complex and flat websites and their internal framework. Specializes in ReactJs and responsive design.")))))},B=Object(v.a)({graph:{display:"flex",alignItems:"center",justifyContent:"left",padding:"0em 0em"},outerBar:{position:"relative",width:"100%",height:"auto",margin:"-0.8em 0em 0em 0.5em"},innerBar:{position:"absolute",background:"#605F5D",width:"50%",left:"0px",height:"1em",textAlign:"right",padding:"0.3em 1em",color:"#FEF9EE",borderRadius:"0px 20px 20px 0px"},titles:{margin:"0.5em 0.5em 0.5em 0.5em"}}),A=function(e){var a=B();return r.a.createElement("div",null,r.a.createElement("section",{className:a.graph},r.a.createElement(d.a,{className:a.titles,items:!0,xs:2,container:!0,justify:"center",alignItems:"center"},r.a.createElement(C.a,null,r.a.createElement(C.b,{indicators:!1,reverse:!0,duration:50,offset:-80},r.a.createElement(O.a,{staggerFrom:{opacity:0},staggerTo:{opacity:1},stagger:1},r.a.createElement(g.a,{variant:"subtitle2"},e.name))))),r.a.createElement(d.a,{item:!0,xs:8,justify:"center",alignItems:"center"},r.a.createElement(C.a,null,r.a.createElement(C.b,{indicators:!1,reverse:!0,duration:50,offset:-80},r.a.createElement(O.a,{staggerFrom:{transform:"scaleX(0)",transformOrigin:"left"},staggerTo:{transform:"scaleX(1)",transformOrigin:"left"},stagger:1},r.a.createElement(g.a,{variant:"subtitle2",className:a.outerBar},r.a.createElement("span",{className:a.innerBar,style:{width:e.progress}},e.progress))))))))},W=Object(v.a)({quotes:{position:"absolute",fontSize:"2em","&:nth-child(1)":{transform:"translate(-150%,-50%)"}},speaker:{position:"relative",top:"1em",right:"-5em"}}),z=function(){var e=W();return r.a.createElement("div",null,r.a.createElement(C.a,null,r.a.createElement(C.b,{indicators:!1,reverse:!0,duration:50,offset:-300},r.a.createElement(O.a,{staggerFrom:{transform:"scale(0)",opacity:0},staggerTo:{transform:"scale(1)",opacity:1},stagger:1},r.a.createElement(g.a,{variant:"h3"},r.a.createElement("q",null,r.a.createElement("cite",null,"Nice")))))),r.a.createElement(C.a,null,r.a.createElement(C.b,{indicators:!1,reverse:!0,duration:50,offset:-300},r.a.createElement(O.a,{staggerFrom:{transform:"scale(0)",opacity:0},staggerTo:{transform:"scale(1)",opacity:1},stagger:1},r.a.createElement(g.a,{variant:"subtitle1"},r.a.createElement("section",{className:e.speaker},r.a.createElement("i",null,"-My Mom")))))))},J=Object(v.a)({about:{position:"relative",zIndex:"3",backgroundColor:"#FEF9EE"},underline:{position:"relative",top:-40,marginBottom:-10,backgroundColor:"red",border:"none",height:"2px"},aboutContent:{padding:"5em 0 2em 0"},fewWords:{backgroundColor:"#FEF9EE",position:"relative",zIndex:1,height:"auto",transitionTimingFunction:"ease-in-out"},quote:{margin:"6em 0em"},skills:{padding:"1.2em"}}),L=function(){var e=J();return r.a.createElement(d.a,{xs:12,className:e.about},r.a.createElement(d.a,{container:!0,xs:12,justify:"center",align:"center"},r.a.createElement(C.a,null,r.a.createElement(C.b,{indicators:!1,reverse:!0,duration:250,offset:-150},r.a.createElement(O.a,{staggerFrom:{visibility:"hidden",opacity:0},staggerTo:{visibility:"visible",opacity:1},stagger:1},r.a.createElement(g.a,{variant:"h2",style:{letterSpacing:5}},"About"),r.a.createElement(C.a,null,r.a.createElement(C.b,{indicators:!1,reverse:!0,duration:80,offset:-140},r.a.createElement(O.a,{staggerFrom:{transform:"scale(0)"},staggerTo:{transform:"scale(1)"},stagger:1},r.a.createElement(g.a,{className:e.aboutTitle,variant:"h2",style:{letterSpacing:5}},r.a.createElement("hr",{className:e.underline}))))))))),r.a.createElement(d.a,{className:e.aboutContent,container:!0,xs:12,alignSelf:"center",justify:"space-around",alignItems:"center"},r.a.createElement(d.a,{className:e.fewWords,xs:12,sm:5},r.a.createElement(D,null)),r.a.createElement(d.a,{className:e.skills,xs:12,sm:5},[{id:"1",name:"ReactJs",progress:"75%"},{id:"1",name:"HTML-CSS-JS",progress:"80%"},{id:"1",name:"UI/UX Design",progress:"50%"},{id:"4",name:"MongoDB",progress:"60%"}].map(function(e){return r.a.createElement(A,{name:e.name,progress:e.progress})}))),r.a.createElement(d.a,{container:!0,xs:12,justify:"center",alignItems:"center"},r.a.createElement("section",{className:e.quote},r.a.createElement(z,null))))},M=t(57),R=t.n(M),q=Object(v.a)({image:{height:"100%",width:"100%",position:"relative"},gradient:{position:"relative",height:"100%",backgroundImage:"linear-gradient(to bottom, rgba(0,0,0,0), rgba(0, 0,0,0.9))",top:"-101%",padding:"4em 1em","&:hover":{backgroundImage:"linear-gradient(to bottom, rgba(0,0,0,0.3), rgba(0, 0,0,1))"},"@media only screen and (max-width: 600px)":{backgroundImage:"linear-gradient(to bottom, rgba(0,0,0,0.3), rgba(0, 0,0,1))"}},card:{width:"25em",height:"15em",margin:"20px",borderRadius:"20px",overflow:"hidden","@media only screen and (max-width: 600px)":{width:"20em",height:"18em"}},button:{position:"absolute",top:"60%",left:"50%",transform:"translateY(-100%) translateX(-50%)","&:hover":{background:"#605F5D"},"@media only screen and (max-width: 600px)":{width:"15em",margin:"1em"}},links:{textDecoration:"none",color:"#FEF9EE"}}),X=function(e){var a=q(),t=Object(n.useState)(!1),l=Object(o.a)(t,2),i=l[0],c=l[1],s=function(){c(!i)};return Object(n.useEffect)(function(){console.log(window.screen.availWidth),window.screen.availWidth<1536&&c(!0)},[]),r.a.createElement(C.a,null,r.a.createElement(C.b,{indicators:!1,reverse:!0,duration:100,offset:-80},r.a.createElement(O.a,{staggerFrom:{transform:"scale(0)"},staggerTo:{transform:"scale(1)"},stagger:1},r.a.createElement("div",{className:a.card},r.a.createElement("img",{className:a.image,src:e.src,alt:e.title}),r.a.createElement("div",{className:"".concat(a.gradient," ").concat(a.text),onMouseEnter:s,onMouseLeave:s},r.a.createElement(g.a,{variant:"h4",color:"secondary",className:a.title},e.title),r.a.createElement(g.a,{variant:"subtitle1",color:"secondary"},e.caption),i&&r.a.createElement("a",{className:a.links,href:e.link,target:"_blank",rel:"noopener noreferrer"},r.a.createElement(b.a,{variant:"outlined",color:"secondary",className:a.button},"View project",r.a.createElement(R.a,null))))))))},H=t(58),P=t.n(H),U=t(59),Y=t.n(U),_=t(60),K=t.n(_),Q=Object(v.a)({work:{position:"relative",zIndex:"3",backgroundColor:"#FEF9EE"},underline:{position:"relative",top:-40,marginBottom:-10,backgroundColor:"red",border:"none",height:"2px"},flex:{display:"flex"}}),V=function(){var e=Q(),a=[{id:1,title:"PHC Admin System(Covid-19)",caption:"Time slot distributer for checkups.",src:P.a,link:"https://github.com/Jayraj-R/PHC-Administration-Covid-19"},{id:2,title:"Weather App",caption:"A react based application to fetch and display weather information of the required city.",src:Y.a,link:"https://jayraj-r.github.io/weather-app/"},{id:3,title:"Tic Tac Toe",caption:"A single player classic Tic-Tac-Toe game simulation. Make a triplet to win.",src:K.a,link:"https://jayraj-r.github.io/TicTacToe/"}];return r.a.createElement("div",{className:e.work},r.a.createElement(d.a,{container:!0,xs:12,justify:"center",align:"center"},r.a.createElement(C.a,null,r.a.createElement(C.b,{indicators:!1,reverse:!0,duration:250,offset:-150},r.a.createElement(O.a,{staggerFrom:{visibility:"hidden",opacity:0},staggerTo:{visibility:"visible",opacity:1},stagger:1},r.a.createElement(g.a,{variant:"h2",style:{letterSpacing:5}},"Work"),r.a.createElement(C.a,null,r.a.createElement(C.b,{indicators:!1,reverse:!0,duration:80,offset:-140},r.a.createElement(O.a,{staggerFrom:{transform:"scale(0)"},staggerTo:{transform:"scale(1)"},stagger:1},r.a.createElement(g.a,{className:e.aboutTitle,variant:"h2",style:{letterSpacing:5}},r.a.createElement("hr",{className:e.underline}))))))))),r.a.createElement(d.a,{container:!0,xs:12,justify:"center",align:"center"},a.map(function(e){return r.a.createElement(X,{title:e.title,caption:e.caption,src:e.src,link:e.link})})))},Z=t(61),G=t.n(Z),$=t(62),ee=t.n($),ae=t(63),te=t.n(ae),ne=Object(v.a)({contact:{position:"relative",zIndex:"3"},footer:{height:"7em",background:"#605F5D",borderTop:"5px solid #00C9A9",padding:"3em",margin:0},icons:{display:"flex",justifyContent:"space-around",marginTop:"1em"},links:{"&:hover":{transform:"scale(1.2)"}}}),re=function(){var e=ne();return r.a.createElement("div",{className:e.contact},r.a.createElement(d.a,{className:e.footer,xs:12,justify:"center",align:"center"},r.a.createElement(d.a,{justify:"center",alignItems:"center",xs:12},r.a.createElement(g.a,{variant:"h4",color:"secondary"},"Send me a HI on...")),r.a.createElement(d.a,{justify:"center",alignItems:"center",xs:6,sm:2,className:e.icons},r.a.createElement("a",{href:"https://www.linkedin.com/in/jayraj-rathod-325452193/",rel:"noopener noreferrer",target:"_blank",className:e.links},r.a.createElement(G.a,{fontSize:"large",color:"secondary"})),r.a.createElement("a",{href:"https://github.com/Jayraj-R",target:"_blank",rel:"noopener noreferrer",className:e.links},r.a.createElement(ee.a,{fontSize:"large",color:"secondary"})),r.a.createElement(te.a,{fontSize:"large",color:"secondary"}))))},le=function(){var e=Object(s.a)({palette:{primary:{main:"#605F5D"},secondary:{main:"#FEF9EE"},error:{main:"#ffffff"}}}),a=350,t=Object(n.useState)(a),l=Object(o.a)(t,2),i=l[0],u=l[1],E=!1;return Object(n.useEffect)(function(){window.addEventListener("scroll",function(){var e=window.scrollY;E||window.requestAnimationFrame(function(){var t;(t=e)>=0&&t<350&&(a=350-parseFloat(t/3),u(a)),E=!1}),E=!0})}),r.a.createElement(m.a,{theme:e},r.a.createElement(d.a,{container:!0,xs:12,className:"root"},r.a.createElement(j,null),r.a.createElement("div",{xs:12,container:!0,className:"mobile-curve"},r.a.createElement("a",{name:"start"})),r.a.createElement(d.a,{container:!0,className:"layout",xs:12},r.a.createElement(d.a,{item:!0,xs:12},r.a.createElement("div",{className:"svg-container"},r.a.createElement("svg",Object(c.a)({className:"bg-svg",viewBox:"0 -30 800 600"},"className","svg"),r.a.createElement("path",{id:"curve",fill:"#605F5D",d:"M 800 300 Q 400 ".concat(i," 0 300 L 0 0 L 800 0 L 800 300 Z")}))))),r.a.createElement(d.a,{xs:12,container:!0,className:"star-background"},r.a.createElement(S,null)),r.a.createElement(d.a,{className:"introText",container:!0,xs:12,direction:"row",justify:"center",alignItems:"center"},r.a.createElement(d.a,{item:!0,xs:10,sm:6},r.a.createElement(g.a,{variant:"h1",color:"error"},"Jayraj Rathod"),r.a.createElement(g.a,{variant:"h4",color:"error"},"Frontend Developer"))),r.a.createElement(d.a,{container:!0,xs:12,className:"topSpace"}),r.a.createElement(d.a,{container:!0,xs:12,className:"anchor"},r.a.createElement("a",{name:"about"})),r.a.createElement(d.a,{xs:12},r.a.createElement(L,{className:"about"})),r.a.createElement(d.a,{container:!0,xs:12,className:"anchor"},r.a.createElement("a",{name:"work"})),r.a.createElement(d.a,{xs:12},r.a.createElement(V,{className:"work"})),r.a.createElement(d.a,{container:!0,xs:12,className:"anchor"},r.a.createElement("a",{name:"contact"})),r.a.createElement(d.a,{xs:12},r.a.createElement(re,{className:"contact"}))))};var ie=function(){return r.a.createElement("div",{className:"App"},r.a.createElement(le,null))},ce=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,120)).then(function(a){var t=a.getCLS,n=a.getFID,r=a.getFCP,l=a.getLCP,i=a.getTTFB;t(e),n(e),r(e),l(e),i(e)})};i.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(ie,null)),document.getElementById("root")),ce()}},[[70,1,2]]]);
//# sourceMappingURL=main.eab6bdbc.chunk.js.map