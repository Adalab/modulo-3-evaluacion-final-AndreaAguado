(this["webpackJsonpreact-starter-kit"]=this["webpackJsonpreact-starter-kit"]||[]).push([[0],{22:function(e,t,c){},23:function(e,t,c){},25:function(e,t,c){},26:function(e,t,c){},32:function(e,t,c){},33:function(e,t,c){},34:function(e,t,c){},35:function(e,t,c){},36:function(e,t,c){},37:function(e,t,c){},38:function(e,t,c){"use strict";c.r(t);var a=c(1),s=c(15),n=c.n(s),r=c(7),i=c(10),l=(c(22),function(){return fetch("https://raw.githubusercontent.com/Adalab/rick-y-morty/master/data/rick-y-morty.json").then((function(e){return e.json()})).then((function(e){return console.log(e),e.results.map((function(e){return{photo:e.image,name:e.name,species:e.species,id:e.id,status:e.status,origin:e.origin.name,episodes:e.episode}}))}))}),o=c(2),j=(c(23),c(0)),h=function(e){return Object(j.jsxs)("form",{className:"form",onSubmit:function(e){return e.preventDefault()},children:[Object(j.jsx)("input",{onKeyUp:function(t){e.handleSearch(t.target.value)},className:"text_input",type:"text",placeholder:"Write something here..."}),Object(j.jsxs)("span",{className:"selector_container",children:[Object(j.jsx)("label",{className:"selector_label",htmlFor:"species",children:"Species:"}),Object(j.jsxs)("select",{onChange:function(t){e.handleSpecies(t.target.value)},className:"species_filter",name:"species",id:"species",children:[Object(j.jsx)("option",{value:"All",children:"Show all"}),Object(j.jsx)("option",{value:"Human",children:"Human"}),Object(j.jsx)("option",{value:"Alien",children:"Alien"})]}),Object(j.jsx)("label",{className:"selector_label",htmlFor:"status",children:"Status:"}),Object(j.jsxs)("select",{onChange:function(t){e.handleStatus(t.target.value)},className:"status_filter",name:"status",id:"status",children:[Object(j.jsx)("option",{value:"All",children:"Show all"}),Object(j.jsx)("option",{value:"Alive",children:"Alive"}),Object(j.jsx)("option",{value:"Dead",children:"Dead"}),Object(j.jsx)("option",{value:"unknown",children:"Unknown"})]})]})]})},d=(c(25),c(26),function(e){return Object(j.jsxs)(r.b,{to:"/character/".concat(e.character.id),style:{textDecoration:"none"},children:[Object(j.jsx)("img",{className:"character_img",src:e.character.photo,alt:e.character.name}),Object(j.jsxs)("div",{className:"card_bottom",children:[Object(j.jsxs)("div",{className:"character_info",children:[Object(j.jsx)("p",{className:"info_item",children:e.character.name}),Object(j.jsx)("p",{className:"info_item",children:e.character.species})]}),Object(j.jsx)("i",{className:"status_icon ".concat("Alive"===e.character.status?"fas fa-heartbeat":"Dead"===e.character.status?"fas fa-skull-crossbones":"fas fa-question"),title:"status: ".concat(e.character.status)})]})]})}),u=function(e){var t=e.filteredData.map((function(e){return Object(j.jsx)("li",{id:e.id,className:"character_card",children:Object(j.jsx)(d,{character:e})},e.id)}));return Object(j.jsx)(j.Fragment,{children:t.length<1?Object(j.jsxs)("p",{className:"warning_message",children:['No existen personajes que coincidan con : "',e.search,'" ']}):Object(j.jsx)("ul",{className:"characters_list",children:t})})};c(32),c(33);var b=function(e){return Object(j.jsx)("div",{className:"modal",children:Object(j.jsx)("div",{className:"modal__dialog",children:Object(j.jsxs)("div",{className:"modal__content",children:[Object(j.jsxs)("header",{className:"modal__header",children:[Object(j.jsx)("h2",{className:"modal__title",children:e.title}),Object(j.jsx)(r.b,{to:"/",children:Object(j.jsx)("span",{className:"modal__close icon fas fa-times"})})]}),Object(j.jsx)("section",{children:e.children})]})})})},m=c.p+"static/media/rick_no_found.80dc1a7d.png",O=function(e){return void 0===e.character?Object(j.jsx)(b,{title:"Personaje no encontrado",children:Object(j.jsx)("img",{className:"no_found_img",src:m,alt:"Rick Sanchez PNG transparente"})}):Object(j.jsx)(b,{title:e.character.name,children:Object(j.jsxs)("article",{className:"character_detail",children:[Object(j.jsx)("img",{className:"character_detail_img",src:e.character.photo,alt:e.character.name}),Object(j.jsxs)("div",{className:"character_info",children:[Object(j.jsxs)("p",{className:"character_info_item",children:["Status: ",e.character.status," "]}),Object(j.jsxs)("p",{className:"character_info_item",children:["Species: ",e.character.species," "]}),Object(j.jsxs)("p",{className:"character_info_item",children:["Origin: ",e.character.origin," "]}),Object(j.jsxs)("p",{className:"character_info_item",children:["Episodes: ",e.character.episodes.length," "]})]})]})})},f=c.p+"static/media/Rick_and_Morty_logo.de13d484.png",x=(c(34),function(){return Object(j.jsx)("header",{className:"header",children:Object(j.jsx)("a",{href:"/",className:"header_link",children:Object(j.jsx)("img",{className:"header_logo",title:"Rick and Morty logo",src:f,alt:"Rick and Morty logo"})})})}),p=(c(35),function(){return Object(j.jsxs)("footer",{className:"footer",children:[Object(j.jsx)("small",{className:"footer_small",children:" \xa9 Andrea Aguado 2021"}),Object(j.jsx)("a",{href:"https://github.com/AndreaAguado",title:"github.com/AndreaAguado",target:"_blank",rel:"noreferrer",children:Object(j.jsx)("i",{className:"fab fa-github github_icon"})})]})}),_=(c(36),function(e){return Object(j.jsx)("main",{className:"main",children:e.children})}),g=(c(37),c.p+"static/media/404-error-not-found.a0396b78.png"),N=function(){return Object(j.jsxs)("section",{className:"nofound_section",children:[Object(j.jsx)(r.b,{to:"/",children:Object(j.jsx)("p",{className:"infomessage",children:"Volver al Inicio"})}),Object(j.jsx)("img",{className:"img",src:g,alt:"Error 404 page not found"})]})};var v=function(){var e=Object(a.useState)([]),t=Object(i.a)(e,2),c=t[0],s=t[1],n=Object(a.useState)(""),r=Object(i.a)(n,2),d=r[0],b=r[1],m=Object(a.useState)("All"),f=Object(i.a)(m,2),g=f[0],v=f[1],S=Object(a.useState)("All"),A=Object(i.a)(S,2),k=A[0],w=A[1];Object(a.useEffect)((function(){l().then((function(e){console.log(e),s(e)}))}),[]),c.sort((function(e,t){var c=e.name.toLocaleLowerCase(),a=t.name.toLocaleLowerCase();return c<a?-1:c>a?1:0})),console.log(g);var y=c.filter((function(e){return e.name.toLocaleLowerCase().includes(d.toLocaleLowerCase())})).filter((function(e){return"All"===g||e.species===g})).filter((function(e){return"All"===k||e.status===k}));console.log(y);var D=function(e){b(e)},L=Object(o.f)("/character/:id"),C=null!==L?L.params.id:"",E=c.find((function(e){return e.id===parseInt(C)}));return Object(j.jsx)("div",{className:"page",children:Object(j.jsxs)(o.c,{children:[Object(j.jsxs)(o.a,{exact:!0,path:"/",children:[Object(j.jsx)(x,{}),Object(j.jsxs)(_,{children:[Object(j.jsx)(h,{search:d,handleSearch:D,handleSpecies:function(e){v(e)},handleStatus:function(e){w(e)}}),Object(j.jsx)("section",{className:"characters_list_section",children:Object(j.jsx)(u,{search:d,filteredData:y})})]}),Object(j.jsx)(p,{})]}),Object(j.jsxs)(o.a,{path:"/character/:id",children:[Object(j.jsx)(x,{}),Object(j.jsxs)(_,{children:[Object(j.jsx)(h,{search:d,handleSearch:D}),Object(j.jsx)("section",{className:"characters_list_section",children:Object(j.jsx)(u,{search:d,filteredData:y})})]}),Object(j.jsx)(p,{}),Object(j.jsx)(O,{character:E})]}),Object(j.jsxs)(o.a,{children:[Object(j.jsx)(x,{}),Object(j.jsx)(_,{children:Object(j.jsx)(N,{})}),Object(j.jsx)(p,{})]})]})})};n.a.render(Object(j.jsx)(r.a,{children:Object(j.jsx)(v,{})}),document.getElementById("root"))}},[[38,1,2]]]);
//# sourceMappingURL=main.a81b8f8e.chunk.js.map