(this["webpackJsonpreact-starter-kit"]=this["webpackJsonpreact-starter-kit"]||[]).push([[0],{17:function(e,t,c){},24:function(e,t,c){"use strict";c.r(t);var a=c(0),s=c(9),n=c.n(s),r=c(12),i=c(7),o=(c(17),c.p+"static/media/Rick_and_Morty_logo.de13d484.png"),l=function(){return fetch("https://raw.githubusercontent.com/Adalab/rick-y-morty/master/data/rick-y-morty.json").then((function(e){return e.json()})).then((function(e){return console.log(e),e.results.map((function(e){return{photo:e.image,name:e.name,species:e.species,id:e.id}}))}))},j=l,m=c(1);var d=function(){var e=Object(a.useState)([]),t=Object(i.a)(e,2),c=t[0],s=t[1],n=Object(a.useState)(""),r=Object(i.a)(n,2),l=r[0],d=r[1];return Object(a.useEffect)((function(){j().then((function(e){console.log(e),s(e)}))}),[]),Object(m.jsxs)("div",{className:"page",children:[Object(m.jsx)("header",{className:"header",children:Object(m.jsx)("img",{className:"header_logo",src:o,alt:"Rick and Morty logo"})}),Object(m.jsxs)("main",{className:"main",children:[Object(m.jsx)("form",{action:"",children:Object(m.jsx)("input",{onKeyUp:function(e){e.preventDefault(),d(e.target.value)},className:"text_input",type:"text"})}),Object(m.jsx)("section",{children:Object(m.jsx)("ul",{className:"characters_list",children:c.filter((function(e){return e.name.toLocaleLowerCase().includes(l.toLocaleLowerCase())})).map((function(e){return Object(m.jsxs)("li",{id:e.id,className:"character_card",children:[Object(m.jsx)("img",{className:"character_img",src:e.photo,alt:e.name}),Object(m.jsxs)("div",{className:"character_info",children:[Object(m.jsx)("p",{className:"info_item",children:e.name}),Object(m.jsx)("p",{className:"info_item",children:e.species})]})]},e.id)}))})})]}),Object(m.jsx)("footer",{className:"footer",children:Object(m.jsx)("small",{className:"footer_small",children:" \xa9 Andrea Aguado 2021"})})]})};n.a.render(Object(m.jsx)(r.a,{children:Object(m.jsx)(d,{})}),document.getElementById("root"))}},[[24,1,2]]]);
//# sourceMappingURL=main.7011b86a.chunk.js.map