(this.webpackJsonpporfolio=this.webpackJsonpporfolio||[]).push([[0],{29:function(e,n,t){"use strict";t.r(n);var a,i,r,c=t(1),s=t.n(c),o=t(12),l=t.n(o),d=t(19),b=t(2),p=t(3),j=p.b.nav(a||(a=Object(b.a)(['\n    background-color: var(--primary);\n    position: sticky;\n    top: 0;\n    height: 7vh;\n    z-index: 100;\n    display: flex;\n    justify-content: space-between;\n    margin-left: 4rem;\n    align-items: center;\n\n    .logo a{\n        background-image: -webkit-linear-gradient(-45deg, var(--secondary) 55%, var(--complementary) 45%);\n        color: transparent;\n        -webkit-background-clip: text;\n        background-clip: text;\n        font-size: 1.7rem;\n        font-weight: bold;\n        text-align: center;\n    }\n\n    .logo a:hover{\n        background-image: -webkit-linear-gradient(45deg, var(--complementary) 55%, var(--secondary) 45%);\n    }\n\n    .destop-ul{\n        width: 50%;\n        display: flex;\n        justify-content: space-evenly;\n        align-items: center;\n    }\n\n    li{\n        position: relative;\n    }\n\n    li a::after{\n        content: "";\n        position: absolute;\n        bottom: -5px;\n        left: 0;\n        width: 100%;\n        height: 3px;\n        background-image: -webkit-linear-gradient(45deg, var(--complementary) 50%, var(--secondary) 50%);\n        transform: scaleX(0);\n        transition: transform 0.3s ease-in-out;\n    }\n\n    li a:hover::after{\n        transform: scaleX(1);\n    }\n\n    @media screen and (max-width: 1024px) {\n        justify-content: space-around;\n        margin-left: 0;\n    }\n\n    @media screen and (max-width: 900px) {\n\n        .logo a{\n            margin-left: 0;\n        }\n        \n        .destop-ul{\n            display: none;\n        }\n    }\n']))),h=p.b.div(i||(i=Object(b.a)(["\n    display: none;\n\n    img{\n        width: 40px;\n\n        :hover{\n            transform: scale(1.1);\n        }\n    }\n\n    @media screen and (max-width: 900px) {\n        display: block;\n    }\n"]))),x=t(30),m=t.p+"static/media/hamburger_menu.bdda5c4c.svg",g=Object(p.b)(x.a.ul)(r||(r=Object(b.a)(["\n    position: fixed;\n    right: 0;\n    top: 0;\n    bottom: 0;\n    display: block;\n    background-color: #0f0f0f;\n    opacity: 0.95;\n    padding: 20px;\n    width: 50%;\n    display: flex;\n    flex-direction: column;\n    justify-content: space-around;\n    align-items: center;\n\n    .close-modal{\n        font-size: 2rem;\n\n        :hover{\n            color: var(--secondary);\n        }\n    }\n\n    li{\n        width: fit-content;\n        margin: auto;\n    }\n\n    @media screen and (max-width: 425px) {\n        width: 70%;\n    }\n"]))),u=t(16),f=t(0),v={hover:{scale:1.1,transition:{type:"spring",stiffness:120}}};var O=function(e){var n=e.setModalOpen,t=Object(u.a)({threshold:0}),a=t.ref,i=t.inView,r=t.entry;function s(e){r.target.contains(e.target)||n(!1)}return Object(c.useEffect)((function(){return i&&document.addEventListener("click",s),function(){document.removeEventListener("click",s)}}),[r]),Object(f.jsxs)(g,{ref:a,children:[Object(f.jsx)("div",{className:"close-modal",onClick:function(e){n(!1)},children:"X"}),Object(f.jsx)(x.a.li,{variants:v,whileHover:"hover",children:Object(f.jsx)("a",{href:"#home",children:"Home"})}),Object(f.jsx)(x.a.li,{variants:v,whileHover:"hover",children:Object(f.jsx)("a",{href:"#about",children:"About Me"})}),Object(f.jsx)(x.a.li,{variants:v,whileHover:"hover",children:Object(f.jsx)("a",{href:"#skills",children:"Skills"})}),Object(f.jsx)(x.a.li,{variants:v,whileHover:"hover",children:Object(f.jsx)("a",{href:"#projects",children:"Projects"})}),Object(f.jsx)(x.a.li,{variants:v,whileHover:"hover",children:Object(f.jsx)("a",{href:"#contacts",children:"Contacts"})})]})},w={hover:{scale:1.1,transition:{type:"spring",stiffness:120}}};var y,k=function(){var e=Object(c.useState)(!1),n=Object(d.a)(e,2),t=n[0],a=n[1];return Object(f.jsxs)(j,{children:[Object(f.jsx)("div",{className:"logo",children:Object(f.jsx)("a",{href:"#home",children:"Sangcheol Kim"})}),Object(f.jsxs)("ul",{className:"destop-ul",children:[Object(f.jsx)(x.a.li,{variants:w,whileHover:"hover",children:Object(f.jsx)("a",{href:"#home",children:"Home"})}),Object(f.jsx)(x.a.li,{variants:w,whileHover:"hover",children:Object(f.jsx)("a",{href:"#about",children:"About Me"})}),Object(f.jsx)(x.a.li,{variants:w,whileHover:"hover",children:Object(f.jsx)("a",{href:"#skills",children:"Skills"})}),Object(f.jsx)(x.a.li,{variants:w,whileHover:"hover",children:Object(f.jsx)("a",{href:"#projects",children:"Projects"})}),Object(f.jsx)(x.a.li,{variants:w,whileHover:"hover",children:Object(f.jsx)("a",{href:"#contacts",children:"Contacts"})})]}),Object(f.jsxs)(h,{children:[Object(f.jsx)("img",{src:m,alt:"hamburger menu",onClick:function(){a(!0)}}),t&&Object(f.jsx)(O,{setModalOpen:a})]})]})},S=t(17),N=t.n(S),C=p.b.div(y||(y=Object(b.a)(["\n    min-height: 93vh;\n    position: relative;\n    font-size: 4rem;\n\n    .intro{\n        position: absolute;\n        left: 50%;\n        top: 50%;\n        transform: translate(-50%, -50%);\n        width: 100%;\n        text-align: center;\n        color: var(--complementary);\n    }\n\n    .type-writer{\n        color: var(--secondary);\n    }\n\n    button{\n        letter-spacing: 1px;\n        font-size: 1.3rem;\n    }\n\n    .about-me-btn{\n        background-color: var(--secondary);\n        color: white;\n    }\n\n    button:hover{\n        background-color: white;\n        color: var(--secondary);\n    }\n\n    .resume-btn{\n        background-color: var(--complementary);\n    }\n\n    @media screen and (max-width: 768px){\n        font-size: 2.5rem;\n    }\n\n    @media screen and (max-width: 320px){\n        font-size: 2.3rem;\n    }\n"]))),z=t.p+"static/media/Sangcheol_Kim_Resume.97b85706.pdf";var H,A,M=function(){return Object(f.jsx)(C,{id:"home",children:Object(f.jsxs)("div",{className:"intro",children:["Hello, World! I am a ",Object(f.jsx)("div",{className:"type-writer",children:Object(f.jsx)(N.a,{onInit:function(e){e.typeString("front-end developer.").pauseFor(2e3).deleteAll(150).typeString("self-taught programmer.").pauseFor(2e3).deleteAll(150).start()},options:{autoStart:!0,loop:!0}})}),Object(f.jsx)("a",{href:"#about",children:Object(f.jsx)("button",{className:"about-me-btn",children:"About Me"})}),Object(f.jsx)("a",{href:z,target:"_blank",rel:"noreferrer",children:Object(f.jsx)("button",{className:"resume-btn",children:"Resume"})})]})})},R=p.b.div(H||(H=Object(b.a)(["\n    display: flex;\n    align-items: center;\n\n    .about-me{\n        width: 50%;\n    }\n\n    .circular-text{\n        position: relative;\n        width: 50%;\n        display: flex;\n        justify-content: center;\n        align-items: center;\n\n        p{\n            position: absolute;\n            font-size: 100px;\n            left: 0;\n            right: 0;\n            top: 0;\n            bottom: 0;\n            display: flex;\n            justify-content: center;\n            align-items: center;\n            color: var(--secondary);\n            text-shadow: 2px 2px var(--complementary);\n        }\n    }\n\n    @media screen and (max-width: 768px) {\n        display: block;\n        \n        .about-me{\n            width: 100%;\n        }\n\n        .circular-text{\n            margin: 20px auto;\n        }\n    }\n\n    @media screen and (max-width: 411px) {\n        .circular-text{\n            img{\n                width: 200px;\n            }\n\n            p{\n                font-size: 70px;\n            }\n        }\n    }\n"]))),_=p.b.div(A||(A=Object(b.a)(["\n    display: flex;\n    align-items: center;\n\n    h1{\n        margin: 20px 0;\n        color: var(--secondary);\n    }\n\n    .hr-line{\n        flex: 1;\n        margin: 0 20px;\n        height: 3px;\n        background-color: var(--complementary);\n    }\n"]))),E=t.p+"static/media/circularText.ed35e27a.svg",P=t(6),W=t.n(P);var F,I,L,J,T,K=function(){var e=Object(c.useRef)(null),n={reverse:!0,"full-page-listening":!0,max:30};return Object(c.useEffect)((function(){W.a.init(e.current,n)}),[]),Object(f.jsxs)(R,{className:"div-width",id:"about",children:[Object(f.jsxs)("div",{className:"about-me",children:[Object(f.jsxs)(_,{"data-aos":"fade-up",children:[Object(f.jsx)("h1",{children:"About Me"}),Object(f.jsx)("div",{className:"hr-line"})]}),Object(f.jsx)("p",{"data-aos":"fade-up",children:"I am a highly motivated web developer who is always willing to learn. I started learning about web developement out of curiosity, but now, I found my love for coding and web designing. My goal is to give web users the best experience they can get on a website! "})]}),Object(f.jsxs)("div",{className:"circular-text","data-aos":"fade-up",children:[Object(f.jsx)(x.a.img,{src:E,alt:"Circular Text",animate:{rotate:360},transition:{repeat:1/0,duration:15,type:"tween",repeatDelay:0,ease:"linear"}}),Object(f.jsx)("p",{ref:e,children:"SK"})]})]})},G=p.b.div(F||(F=Object(b.a)(["\n\n"]))),X=Object(p.b)(_)(I||(I=Object(b.a)(["\n    width: 50%;\n    justify-content: flex-start;\n\n    @media screen and (max-width: 768px){\n        width: 100%;\n    }\n"]))),D=p.b.div(L||(L=Object(b.a)(["\n    margin: 5px 0;\n\n    h2{\n        margin: 20px 0;\n    }\n"]))),V=p.b.div(J||(J=Object(b.a)(["\n    display: grid;\n    grid-template-columns: repeat(auto-fill, 200px);\n    gap: 1rem;\n    align-items: center;\n\n    @media screen and (max-width: 600px) {\n        grid-template-columns: repeat(auto-fill, 160px);\n        gap: 10px;\n    }\n\n    @media screen and (max-width: 370px) {\n        grid-template-columns: repeat(auto-fill, 120px);\n    }\n"]))),B=t.p+"static/media/pinterest-clone.6a559fee.png",U=t.p+"static/media/weather.4d4fe458.png",Y=t.p+"static/media/shopping-cart.454c8360.png",q=p.b.div(T||(T=Object(b.a)(["\n    display: flex;\n    flex-direction: ",";\n    justify-content: space-around;\n    align-items: center;\n    margin: 20px 0;\n    overflow: hidden;\n\n    .project-description{\n        margin: 50px;\n\n        h2{\n            margin: 20px 0;\n        }\n\n        p{\n            margin: 10px 0;\n        }\n\n        .tags{\n            display: flex;\n            flex-wrap: wrap;\n            gap: 10px;\n        }\n\n        .tag{\n            background-color: rgb(31, 250, 210, 0.9);\n            border-radius: 50px;\n            padding: 5px 10px;\n            color: black;\n            font-size: 0.8rem;\n        }\n\n        .btn-container{\n            margin-top: 1rem;\n        }\n\n        button{\n            background-color: var(--secondary);\n            color: white;\n            font-size: 1rem;\n        }\n    }\n\n    .img-wrapper{\n        width: 40%;\n        border-radius: 20px;\n\n        img{\n            width: 100%;\n            border-radius: inherit;\n            object-fit: cover;\n        }\n    }\n\n    @media screen and (max-width: 1280px) {\n        .project-description{\n            margin: 25px;\n        }\n\n        .img-wrapper{\n            width: 70%;\n        }\n    }\n\n    @media screen and (max-width: 768px) {\n        flex-direction: column;\n\n        .project-description{\n            margin: 10px;\n        }\n\n        .img-wrapper{\n            width: 100%;\n        }\n    }\n"])),(function(e){return e.reverse?"row-reverse":"row"}));var Q=function(e){var n=e.title,t=e.description,a=e.builtWith,i=e.code,r=e.demo,s=e.img,o=e.reverse,l=Object(c.useRef)(null),d={reverse:!0,scale:1.05};return Object(c.useEffect)((function(){W.a.init(l.current,d)}),[]),Object(f.jsxs)(q,{reverse:o,children:[Object(f.jsxs)("div",{className:"project-description","data-aos":o?"fade-left":"fade-right","data-aos-delay":"300",children:[Object(f.jsx)("h2",{children:n}),Object(f.jsx)("p",{children:t}),Object(f.jsx)("div",{className:"tags",children:a.map((function(e){return Object(f.jsx)("p",{className:"tag",children:e},e)}))}),Object(f.jsxs)("div",{className:"btn-container",children:[Object(f.jsx)("a",{href:i,target:"_blank",rel:"noreferrer",children:Object(f.jsx)("button",{children:"Code"})}),Object(f.jsx)("a",{href:r,target:"_blank",rel:"noreferrer",children:Object(f.jsx)("button",{children:"Demo"})})]})]}),Object(f.jsx)("div",{className:"img-wrapper",ref:l,children:Object(f.jsx)("img",{src:s,alt:n,"data-aos":o?"fade-right":"fade-left","data-aos-delay":"300"})})]})};var Z,$=function(){return Object(f.jsxs)(G,{className:"div-width",id:"projects",children:[Object(f.jsxs)(X,{"data-aos":"fade-up",children:[Object(f.jsx)("h1",{children:"Featured Projects"}),Object(f.jsx)("div",{className:"hr-line"})]}),Object(f.jsx)(Q,{title:"Pinterest Clone",description:"Creating a clone of a popular image-sharing website, Pinterest.",builtWith:["React","Styled Components","UnSplash API"],code:"https://github.com/skcode0/pinterest-clone",demo:"https://skcode0.github.io/pinterest-clone/",img:B}),Object(f.jsx)(Q,{title:"Weather App",description:"A weather app that gets current weather information of a location.",builtWith:["Webpack","JavaScript","CSS","OpenWeatherMap API"],code:"https://github.com/skcode0/weather_app",demo:"https://skcode0.github.io/weather_app/",img:U,reverse:!0}),Object(f.jsx)(Q,{title:"Shopping Cart",description:"An online game shop where you can buy games from different platforms.",builtWith:["React","CSS"],code:"https://github.com/skcode0/shopping_cart",demo:"https://skcode0.github.io/shopping_cart/",img:Y})]})},ee=t.p+"static/media/github.1c59f32a.svg",ne=t.p+"static/media/linkedin.b98d8b91.svg",te=t.p+"static/media/email.5e697e11.svg",ae=p.b.div(Z||(Z=Object(b.a)(["\n\n    .contact-icons{\n        display: flex;\n        justify-content: space-around;\n\n        a{\n            text-align: center;\n\n            img{\n                margin: 0 10px;\n            }\n\n            \n            :hover{\n                transform: scale(1.1);\n            }\n        }\n    }\n"])));var ie,re=function(){return Object(f.jsxs)(ae,{className:"div-width",id:"contacts",children:[Object(f.jsxs)(X,{"data-aos":"fade-up","data-aos-anchor-placement":"top-bottom",children:[Object(f.jsx)("h1",{children:"Contacts"}),Object(f.jsx)("div",{className:"hr-line"})]}),Object(f.jsxs)("div",{className:"contact-icons","data-aos":"fade-up","data-aos-anchor-placement":"top-bottom",children:[Object(f.jsxs)("a",{href:"https://github.com/skcode0",target:"_blank",rel:"noreferrer",children:[Object(f.jsx)("img",{src:ee,alt:"Github icon"}),Object(f.jsx)("p",{children:"Github"})]}),Object(f.jsxs)("a",{href:"https://www.linkedin.com/in/sangcheol-kim-365a29128/",target:"_blank",rel:"noreferrer",children:[Object(f.jsx)("img",{src:ne,alt:"LinkedIn icon"}),Object(f.jsx)("p",{children:"LinkedIn"})]}),Object(f.jsxs)("a",{href:"mailto: sangcheolkim@utexas.edu",target:"_blank",rel:"noreferrer",children:[Object(f.jsx)("img",{src:te,alt:"email icon"}),Object(f.jsx)("p",{children:"Email"})]})]})]})},ce=t.p+"static/media/html5.f7f68e17.svg",se=t.p+"static/media/css3.2bbcd21a.svg",oe=t.p+"static/media/javascript.3c3a321d.svg",le=t.p+"static/media/bootstrap.b77917c5.svg",de=t.p+"static/media/sass.553d6824.svg",be=t.p+"static/media/react.fef22e20.svg",pe=t.p+"static/media/redux.dfe9de46.svg",je=t.p+"static/media/jest.f9e966b5.svg",he=t.p+"static/media/jasmine.398d119b.svg",xe=t.p+"static/media/styled-components.86c44a53.svg",me=t.p+"static/media/framer.a7757728.svg",ge=t.p+"static/media/git.b35d3e6e.svg",ue=t.p+"static/media/vscode.77d76b92.svg",fe=t.p+"static/media/webpack.9f83bbb7.svg",ve=t.p+"static/media/npm.d22ee35c.svg",Oe=t.p+"static/media/figma.dca879ee.svg",we=t.p+"static/media/korean.67448a5c.svg",ye=t.p+"static/media/organization.6ae2e593.svg",ke=t.p+"static/media/teaching.efdc02e2.svg",Se=t.p+"static/media/planning.23a4af78.svg",Ne=t.p+"static/media/learning.9115fbbe.svg",Ce=t.p+"static/media/responsive.85d96d33.svg",ze=t.p+"static/media/collaboration.6228f714.svg",He=p.b.div(ie||(ie=Object(b.a)(["\n    padding: 10px;\n    text-align: center;\n    border-radius: 20px;\n    margin: 0 10px;\n\n    .js-tilt-glare{\n        border-radius: inherit;\n    }\n\n    :hover{\n        box-shadow: 3px 3px 3px 3px black;\n        transform: scale(1.1);\n\n        img{\n            -webkit-filter: drop-shadow(7px 7px 3px black);\n                    filter: drop-shadow(5px 5px 5px black);\n        }\n\n        p{\n            text-shadow: 4px 4px 5px black;\n        }\n    }\n\n    @media screen and (max-width: 370px) {\n        p{\n            font-size: 0.7rem;\n        }\n    }\n"])));var Ae=function(e){var n=e.src,t=e.alt,a=e.text,i=Object(c.useRef)(null),r={glare:!0,"max-glare":.5,reverse:!0};return Object(c.useEffect)((function(){W.a.init(i.current,r)}),[]),Object(f.jsxs)(He,{ref:i,children:[Object(f.jsx)("img",{src:n,alt:t}),Object(f.jsx)("p",{children:a})]})};var Me,Re,_e=function(){return Object(f.jsxs)("div",{className:"div-width",id:"skills",children:[Object(f.jsxs)(X,{"data-aos":"fade-up",children:[Object(f.jsx)("h1",{children:"Skills"}),Object(f.jsx)("div",{className:"hr-line"})]}),Object(f.jsxs)(D,{"data-aos":"fade-up",children:[Object(f.jsx)("h2",{children:"Languages/ Frameworks/ Libraries"}),Object(f.jsxs)(V,{children:[Object(f.jsx)(Ae,{src:ce,alt:"html5 icon",text:"HTML"}),Object(f.jsx)(Ae,{src:se,alt:"css3 icon",text:"CSS"}),Object(f.jsx)(Ae,{src:oe,alt:"js icon",text:"JavaScript"}),Object(f.jsx)(Ae,{src:le,alt:"bootstrap icon",text:"Bootstrap"}),Object(f.jsx)(Ae,{src:de,alt:"SASS icon",text:"SASS"}),Object(f.jsx)(Ae,{src:be,alt:"React icon",text:"React"}),Object(f.jsx)(Ae,{src:pe,alt:"Redux icon",text:"Redux"}),Object(f.jsx)(Ae,{src:je,alt:"Jest icon",text:"Jest"}),Object(f.jsx)(Ae,{src:he,alt:"Jasmine icon",text:"Jasmine"}),Object(f.jsx)(Ae,{src:xe,alt:"Styled Components icon",text:"Styled Component"}),Object(f.jsx)(Ae,{src:me,alt:"Framer Motion icon",text:"Framer Motion"})]})]}),Object(f.jsxs)(D,{"data-aos":"fade-up",children:[Object(f.jsx)("h2",{children:"Technologies"}),Object(f.jsxs)(V,{children:[Object(f.jsx)(Ae,{src:ge,alt:"git icon",text:"Git"}),Object(f.jsx)(Ae,{src:ee,alt:"gihub icon",text:"Github"}),Object(f.jsx)(Ae,{src:ue,alt:"VS Code icon",text:"VS Code"}),Object(f.jsx)(Ae,{src:fe,alt:"Webpack icon",text:"Webpack"}),Object(f.jsx)(Ae,{src:ve,alt:"NPM icon",text:"NPM"}),Object(f.jsx)(Ae,{src:Oe,alt:"Figma icon",text:"Figma"})]})]}),Object(f.jsxs)(D,{"data-aos":"fade-up",children:[Object(f.jsx)("h2",{children:"Miscellaneous/ Soft Skills"}),Object(f.jsxs)(V,{children:[Object(f.jsx)(Ae,{src:we,alt:"Korean icon",text:"Korean"}),Object(f.jsx)(Ae,{src:ke,alt:"Teaching icon",text:"Teaching"}),Object(f.jsx)(Ae,{src:ye,alt:"Organization icon",text:"Organization"}),Object(f.jsx)(Ae,{src:Se,alt:"Planning icon",text:"Planning"}),Object(f.jsx)(Ae,{src:Ne,alt:"Learning icon",text:"Striving to learn"}),Object(f.jsx)(Ae,{src:Ce,alt:"Responsive icon",text:"Responsive"}),Object(f.jsx)(Ae,{src:ze,alt:"Collaboration icon",text:"Collaboration"})]})]})]})},Ee=Object(p.a)(Me||(Me=Object(b.a)(["\n    *, *::before, *::after{\n        margin: 0;\n        padding: 0;\n        box-sizing: border-box;\n        font-family: 'Krona One', sans-serif;\n        cursor: none;\n    }\n\n    :root{\n        --primary: #0F1014;\n        --secondary: #ff1842;\n        --secondary-alt: #f83a5c;\n        --complementary: #3AF8D6;\n    }\n\n    ::-webkit-scrollbar {\n        width: 10px;\n    }\n\n    /* Track */\n    ::-webkit-scrollbar-track {\n        background: #1b1b1b;\n    }\n\n    /* Handle */\n    ::-webkit-scrollbar-thumb {\n        background: var(--secondary-alt);\n        border-radius: 50px;\n    }\n\n    /* Handle on hover */\n    ::-webkit-scrollbar-thumb:hover {\n        background: #e7284b;\n    }\n\n    html{\n        scroll-behavior: smooth;\n    }\n\n    body{\n        background-color: var(--primary);\n        color: white;\n        overflow-x: hidden;\n    }\n\n    button{\n        padding: 10px 20px;\n        margin: 10px;\n        border-radius: 50px;\n        outline: 0;\n        border: 0;\n\n        :hover{\n            transform: scale(1.1);\n        }\n    }\n\n    ul{\n        list-style: none;\n    }\n\n    a{\n        text-decoration: none;\n        color: white;\n    }\n\n    .div-width{\n        width: 90%;\n        margin: 20px auto;\n        padding-top: 5rem;\n    }\n\n    @media screen and (max-width: 600px) {\n    }\n"]))),Pe=t(18),We=t.n(Pe),Fe=(t(28),p.b.div(Re||(Re=Object(b.a)(["\n    width: 25px;\n    height: 25px;\n    background-color: var(--secondary);\n    border-radius: 50px;\n    pointer-events: none;\n    z-index: 9999999999999999;\n    position: absolute;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    mix-blend-mode: exclusion;\n"]))));var Ie=function(){var e=Object(c.useRef)(null);return Object(c.useEffect)((function(){document.addEventListener("mousemove",(function(n){var t=n.pageX-e.current.clientWidth/2,a=n.pageY-e.current.clientHeight/2;e.current.style.transform="translate(".concat(t,"px, ").concat(a,"px)")}))}),[]),Object(f.jsx)(Fe,{ref:e})};var Le=function(){return Object(c.useEffect)((function(){We.a.init({duration:700})}),[]),Object(f.jsxs)("div",{className:"App",children:[Object(f.jsx)(Ie,{}),Object(f.jsx)(Ee,{}),Object(f.jsx)(k,{}),Object(f.jsx)(M,{}),Object(f.jsx)(K,{}),Object(f.jsx)(_e,{}),Object(f.jsx)($,{}),Object(f.jsx)(re,{})]})};l.a.render(Object(f.jsx)(s.a.StrictMode,{children:Object(f.jsx)(Le,{})}),document.getElementById("root"))}},[[29,1,2]]]);
//# sourceMappingURL=main.5784c121.chunk.js.map