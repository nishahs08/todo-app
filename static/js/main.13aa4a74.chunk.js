(this["webpackJsonptodo-app"]=this["webpackJsonptodo-app"]||[]).push([[0],{119:function(e,t,c){},120:function(e,t,c){},121:function(e,t,c){},122:function(e,t,c){},124:function(e,t,c){"use strict";c.r(t);var n=c(0),i=c.n(n),s=c(9),a=c.n(s),o=(c(63),c(18)),d=c(19),r=c(16),l=c(52),j=c.n(l),u=(c(64),c.p+"static/media/calender.d0164a4e.svg"),b=(c(65),c(56)),O=c(55),x=c(3);var h=function(e){var t=e.addTodo,c=e.categories,i=(e.setCategories,Object(n.useState)("")),s=Object(d.a)(i,2),a=(s[0],s[1]),l=Object(n.useState)({description:"",date:new Date,category:[],id:Date.now()}),h=Object(d.a)(l,2),v=h[0],m=h[1];return Object(x.jsx)(x.Fragment,{children:Object(x.jsxs)("div",{className:"addtodo-container",children:[Object(x.jsxs)("div",{className:"addtodo-input-container",children:[Object(x.jsx)("label",{children:"Description"}),Object(x.jsx)("textarea",{className:"textArea",rows:5,value:v.description,onChange:function(e){return m(Object(r.a)(Object(r.a)({},v),{},{description:e.target.value,status:"undone"}))},children:v.description})]}),Object(x.jsxs)("div",{className:"addtodo-input-container",children:[Object(x.jsx)("label",{children:"Date"}),Object(x.jsxs)("div",{style:{display:"flex"},children:[Object(x.jsx)(j.a,{className:"addtodo-input-date",selected:v.date,onChange:function(e){return m(Object(r.a)(Object(r.a)({},v),{},{date:e}))}}),Object(x.jsx)("div",{children:Object(x.jsx)("img",{src:u})})]})]}),Object(x.jsxs)("div",{className:"addtodo-input-container",children:[Object(x.jsx)("label",{children:"Categories"}),Object(x.jsx)("div",{children:Object(x.jsx)(O.a,{isMulti:!0,closeMenuOnSelect:!1,components:Object(b.a)(),options:c,value:c.label,onChange:function(e){var t=e.map((function(e,t){return e.value}));m(Object(r.a)(Object(r.a)({},v),{},{category:Object(o.a)(t)}))},onInputChange:function(e,t){a(e)}})})]}),Object(x.jsx)("div",{className:"addtodo-input-container addtodo-input-btn",children:Object(x.jsx)("button",{onClick:function(){t(v)},className:"save-todo",children:"SAVE"})})]})})},v=c(33),m=(c(119),c.p+"static/media/pen.631e80b1.svg"),g=c.p+"static/media/del.f207f1ee.svg";var f=function(e){var t=e.description,c=e.status,n=e.category,i=e.setStatus,s=e.id,a=e.editTodo,o=e.deleteTodo;return e.edit,console.log(n,n),Object(x.jsx)("div",{className:"todo-container",children:Object(x.jsxs)("div",{className:"todo-description",children:[Object(x.jsx)("input",{type:"checkbox",id:"todo"+s,checked:"done"==c,onChange:function(e){!0===e.target.checked&&i("done",s),!1===e.target.checked&&i("undone",s)}}),Object(x.jsxs)("div",{htmlFor:"todo"+s,className:"todo-content",style:{backgroundColor:"".concat("done"==c?"#9DB68C":"#fff"," ")},children:[Object(x.jsxs)("div",{style:{display:"flex",maxWidth:"100%"},children:[Object(x.jsx)("div",{style:{flex:2},children:Object(x.jsxs)("p",{children:["  ",t," "]})}),Object(x.jsxs)("div",{className:"todo-update",children:[Object(x.jsx)("div",{style:{width:"20px",height:"20px",display:"flex",padding:"3px"},onclick:function(){return o(s)},children:Object(x.jsx)("img",{src:m})}),Object(x.jsx)("div",{style:{width:"25px",height:"25px",display:"flex",padding:"3px"},onClick:function(){return a(s)},children:Object(x.jsx)("img",{src:g})})]})]}),Object(x.jsx)("div",{className:"todo-categories",children:n.map((function(e){return Object(x.jsx)("div",{className:"todo-category",children:Object(x.jsx)("span",{children:e})})}))})]})]})})};c(120);var p=function(e){var t=e.todos,c=e.setTodos,n=e.editTodo,i=e.deleteTodo,s=t.reduce((function(e,t){return Object(r.a)(Object(r.a)({},e),{},Object(v.a)({},t.date,function(e,t){var c=[].concat(Object(o.a)(e),[t]);return c.sort((function(e,t){return"done"===e.status&&"undone"===t.status?1:e.status===t.status?0:-1})),c}(e[t.date]||[],t)))}),{}),a=Object.keys(s).sort((function(e,t){return new Date(t).getTime()-new Date(e).getTime()}));function d(e){var t=new Date(e);return t.getDate()+"-"+(t.getMonth()+1)+"-"+t.getFullYear()}return console.log(s),Object(x.jsx)("div",{style:{width:"98%"},children:a.map((function(e,a){return Object(x.jsxs)(x.Fragment,{children:[Object(x.jsx)("div",{className:"listTodo-dateContainer",children:Object(x.jsx)("div",{className:"listTodo-date",children:Object(x.jsx)("span",{children:d(e)})})}),s[e].map((function(e){return Object(x.jsx)(f,{description:e.description,category:e.category,status:e.status,setStatus:function(n){return function(e,n){var i=t.map((function(t){return t.id===n&&(t.status=e),t}));c(Object(o.a)(i))}(n,e.id)},id:e.id,editTodo:n,deleteTodo:i})}))]})}))})},N=c.p+"static/media/add.4181a836.svg",T=c.p+"static/media/list.d521087b.svg",C=c.p+"static/media/filter.e3cc16c3.svg";c(121);var y=function(e){e.selectedMenu;var t=e.setSelectedMenu;return Object(x.jsxs)(x.Fragment,{children:[Object(x.jsxs)("div",{className:"nav-container",children:[Object(x.jsxs)("div",{className:"nav-button",onClick:function(){return t("addTodo")},children:[Object(x.jsx)("div",{className:"nav-logo",children:Object(x.jsx)("img",{src:N,alt:"img"})}),Object(x.jsx)("div",{children:Object(x.jsx)("p",{children:"ADD TODO"})})]}),Object(x.jsxs)("div",{className:"nav-button",children:[Object(x.jsx)("div",{className:"nav-logo",onClick:function(){return t("list")},children:Object(x.jsx)("img",{src:T,alt:"img"})}),Object(x.jsx)("div",{children:Object(x.jsx)("p",{children:"LIST TODO"})})]}),Object(x.jsxs)("div",{className:"nav-button",children:[Object(x.jsx)("div",{className:"nav-logo",onClick:function(){return t("filter")},children:Object(x.jsx)("img",{src:C,alt:"img"})}),Object(x.jsx)("div",{children:Object(x.jsx)("p",{children:"FILTER TODOS"})})]})]}),Object(x.jsxs)("div",{className:"mob-container",children:[Object(x.jsx)("div",{className:"mob-option",onClick:function(){return t("addTodo")},children:Object(x.jsx)("img",{src:N,alt:"img"})}),Object(x.jsx)("div",{className:"mob-option",onClick:function(){return t("list")},children:Object(x.jsx)("img",{src:T,alt:"img"})}),Object(x.jsx)("div",{className:"mob-option",onClick:function(){return t("filter")},children:Object(x.jsx)("img",{src:C,alt:"img"})})]})]})};c(122);var S=function(){var e=Object(n.useState)([]),t=Object(d.a)(e,2),c=t[0],i=t[1],s=Object(n.useState)([{label:"Home",value:"Home"},{label:"Office",value:"Office"},{label:"School",value:"School"}]),a=Object(d.a)(s,2),r=a[0],l=a[1],j=Object(n.useState)("list"),u=Object(d.a)(j,2),b=u[0],O=u[1],v=Object(n.useState)(),m=Object(d.a)(v,2),g=(m[0],m[1]);return Object(x.jsx)(x.Fragment,{children:Object(x.jsxs)("div",{className:"wrapper",children:[Object(x.jsx)(y,{selectedMenu:b,setSelectedMenu:O}),"addTodo"===b&&Object(x.jsx)(h,{addTodo:function(e){return i([].concat(Object(o.a)(c),[e]))},categories:r,setCategories:l}),"list"===b&&Object(x.jsx)(p,{todos:c,setTodos:i,deleteTodo:function(e){return function(e){console.log("DELETED");var t=c.filter((function(t){return t.id!==e}));i(Object(o.a)(t))}(e)},editTodo:function(e){return function(e){e&&g(!0)}()}})]})})},k=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,133)).then((function(t){var c=t.getCLS,n=t.getFID,i=t.getFCP,s=t.getLCP,a=t.getTTFB;c(e),n(e),i(e),s(e),a(e)}))};a.a.render(Object(x.jsx)(i.a.StrictMode,{children:Object(x.jsx)(S,{})}),document.getElementById("root")),k()},63:function(e,t,c){},65:function(e,t,c){}},[[124,1,2]]]);
//# sourceMappingURL=main.13aa4a74.chunk.js.map