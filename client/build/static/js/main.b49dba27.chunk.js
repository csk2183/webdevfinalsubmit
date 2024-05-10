(this["webpackJsonpstudents-keeper-app-part-1-starting-forked"]=this["webpackJsonpstudents-keeper-app-part-1-starting-forked"]||[]).push([[0],{13:function(e,t,a){e.exports=a(23)},23:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(7),c=a.n(r),o=a(6),m=a(3);var s=function(){return l.a.createElement("nav",{className:"navbar navbar-expand-lg navbar-light bg-light"},l.a.createElement(o.b,{className:"navbar-brand",to:"/"},"Home"),l.a.createElement("button",{className:"navbar-toggler",type:"button","data-toggle":"collapse","data-target":"#navbarNav","aria-controls":"navbarNav","aria-expanded":"false","aria-label":"Toggle navigation"},l.a.createElement("span",{className:"navbar-toggler-icon"})),l.a.createElement("div",{className:"collapse navbar-collapse",id:"navbarNav"},l.a.createElement("ul",{className:"navbar-nav ml-auto"},l.a.createElement("li",{className:"nav-item"},l.a.createElement(o.b,{className:"nav-link",to:"/login"},"Login")),l.a.createElement("li",{className:"nav-item"},l.a.createElement(o.b,{className:"nav-link",to:"/signup"},"Sign Up")))))};var i=function(){return l.a.createElement("div",null,l.a.createElement("header",{className:"jumbotron mt-4"},l.a.createElement("h1",{className:"display-4"},"Welcome to Keeper 2.0"),l.a.createElement("p",{className:"lead"},"The world's best notes app. Probably"),l.a.createElement("hr",{className:"my-4"}),l.a.createElement("p",null,"Join us today and make your note dreams come true."),l.a.createElement(o.b,{to:"/notes",className:"btn btn-primary btn-lg",role:"button"},"Write meow")),l.a.createElement("section",{className:"my-5"},l.a.createElement("h2",null,"About Keeper"),l.a.createElement("p",null,"Take Notes in a secure environment")))};var u=function(){return l.a.createElement("header",null,l.a.createElement("h1",null,"Keeper App"))};var p=function(){const e=(new Date).getFullYear();return l.a.createElement("footer",null,l.a.createElement("p",null,"\xa9 ",e," Keeper App CSK2183"))};var E=function(e){let{id:t,title:a,content:n,onDelete:r}=e;return l.a.createElement("div",{className:"note"},l.a.createElement("h1",null,a),l.a.createElement("p",null,n),l.a.createElement("button",{onClick:()=>{r(t)}},"Delete"))},d=a(24);var v=function(e){let{onAddNote:t}=e;const[a,r]=Object(n.useState)({title:"",content:""}),c=e=>{const{name:t,value:n}=e.target;r({...a,[t]:n})};return l.a.createElement("div",{className:"add-note-form"},l.a.createElement("form",{onSubmit:async e=>{if(e.preventDefault(),""!==a.title.trim()&&""!==a.content.trim())try{const e=(await d.a.post("/notes",a)).data;t(e),r({title:"",content:""})}catch(n){console.error("Error adding note:",n)}}},l.a.createElement("input",{type:"text",name:"title",value:a.title,placeholder:"Title",onChange:c}),l.a.createElement("textarea",{name:"content",value:a.content,placeholder:"Content",onChange:c}),l.a.createElement("button",{type:"submit"},"Add Note")))};var b=function(){const[e,t]=Object(n.useState)([]);Object(n.useEffect)(()=>{a()},[]);const a=async()=>{try{const e=await d.a.get("/notes");t(e.data)}catch(e){console.error("Error fetching notes:",e)}},r=async e=>{try{await d.a.delete("/notes/".concat(e)),t(t=>t.filter(t=>t._id!==e))}catch(a){console.error("Error deleting note:",a)}};return l.a.createElement("div",{className:"App"},l.a.createElement(u,null),l.a.createElement("div",{className:"notes-container"},e.map(e=>l.a.createElement(E,{key:e._id,id:e._id,title:e.title,content:e.content,onDelete:r}))),l.a.createElement(v,{onAddNote:a=>{t([...e,{_id:a._id,title:a.title,content:a.content}])}}),l.a.createElement(p,null))};a(22);var g=function(){return l.a.createElement(o.a,null,l.a.createElement(s,null),l.a.createElement(m.c,null,l.a.createElement(m.a,{path:"/",element:l.a.createElement(i,null)}),l.a.createElement(m.a,{path:"/notes",element:l.a.createElement(b,null)})))};c.a.render(l.a.createElement(g,null),document.getElementById("root"))}},[[13,1,2]]]);
//# sourceMappingURL=main.b49dba27.chunk.js.map