(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],[,,,,,,,,,,,function(t,e,n){},,,function(t,e,n){},function(t,e,n){},function(t,e,n){},function(t,e,n){"use strict";n.r(e);var a=n(1),c=n.n(a),r=n(6),i=n.n(r),s=(n(11),n(3)),u=n.n(s),o=n(4),l=n(2),d=n(0);var j=function(t){return Object(d.jsxs)("div",{className:"nav-feat-box",children:[t.isFavourite?Object(d.jsx)("div",{className:"nav-feat-item",children:Object(d.jsx)("button",{className:"nav-feat-btn","data-favourite":!0,children:"\u6536\u85cf"})}):null,Object(d.jsx)("div",{className:"nav-feat-item",children:Object(d.jsx)("button",{className:"nav-feat-btn  nav-feat-btn-delete","data-delete":!0,children:"\u5220\u9664"})})]})};var b=function(t){var e=Object(a.useState)(!t.data._hasFav),n=Object(l.a)(e,2),c=n[0];return n[1],Object(d.jsxs)("div",{className:"nav-list-item",onClick:function(e){e.target.classList.contains("nav-feat-btn")&&(e.target.dataset.favourite?t.onFavourite(t.data):e.target.dataset.delete&&t.onDelete(t.data))},children:[Object(d.jsx)("span",{children:t.data.title}),Object(d.jsx)(j,{isFavourite:c})]})};n(14);var f={id:1,title:"\u6211\u662f\u4e3b\u9898",subtitle:"\u6211\u662f\u4e3b\u9898",time:"2021-01-01",owner:"\u697c\u4e3b\u5927\u4eba",isFavourite:!1,isDelete:!0},v=new Array(10).fill(0).map((function(t,e){var n=JSON.parse(JSON.stringify(f));return n.id+=e,n.title+=e,n}));var p=function(t){var e=Object(a.useState)([]),n=Object(l.a)(e,2),c=n[0],r=n[1];function i(){return(i=Object(o.a)(u.a.mark((function t(e){var n;return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:n=v.map((function(t){return console.log(t),8===t.id&&(t._hasFav=!0),t})),r(n);case 2:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function s(t){return j.apply(this,arguments)}function j(){return(j=Object(o.a)(u.a.mark((function t(e){var n,a;return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return console.log("\u5220\u9664",e),t.abrupt("return");case 5:1===(n=t.sent).code&&n.data&&(a=n.data),t.next=11;break;case 9:t.prev=9,t.t0=t.catch(2);case 11:r(a);case 12:case"end":return t.stop()}}),t,null,[[2,9]])})))).apply(this,arguments)}function f(t){return p.apply(this,arguments)}function p(){return(p=Object(o.a)(u.a.mark((function t(e){return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:console.log("\u6536\u85cf",e);case 1:case"end":return t.stop()}}),t)})))).apply(this,arguments)}return Object(a.useEffect)((function(){!function(t){i.apply(this,arguments)}()}),[]),Object(d.jsx)("div",{className:"nav-list",children:c.map((function(t){return Object(d.jsx)(b,{data:t,onFavourite:f,onDelete:s},t.id)}))})},O=(n(15),"\u6211\u5c31\u662f\u90a3\u4e2a\u68c0\u6d4b\u533a\u57df");function h(t){return t&&t.offsetWidth||0}var x=function(t){var e=Object(a.useState)(O),n=Object(l.a)(e,2),c=n[0],r=n[1],i=Object(a.useState)(""),s=Object(l.a)(i,2),u=s[0],o=s[1],j=Object(a.useState)(""),b=Object(l.a)(j,2),f=b[0],v=b[1];return Object(d.jsxs)("div",{children:[Object(d.jsxs)("div",{children:[Object(d.jsx)("button",{onClick:function(){var t=h(document.getElementById("text"));o(t),r("\u6211\u8981\u52a0\u957f\u6211\u8981\u52a0\u957f\u6211\u8981\u52a0\u957f\u6211\u8981\u52a0\u957f");var e=h(document.getElementById("text"));v(e)},children:"\u68c0\u6d4b"}),Object(d.jsx)("button",{onClick:function(t){r(O),o(""),v("")},children:"\u521d\u59cb\u5316"}),Object(d.jsx)("button",{onClick:function(){var t=h(document.getElementById("text"));o(t),r("\u6211\u8981\u52a0\u957f\u6211\u8981\u52a0\u957f\u6211\u8981\u52a0\u957f\u6211\u8981\u52a0\u957f");var e=h(document.getElementById("text"));v(e),setTimeout((function(){var t=h(document.getElementById("text"));v(t)}))},children:"\u68c0\u6d4b2"})]}),Object(d.jsxs)("div",{children:[Object(d.jsxs)("p",{children:["\u68c0\u6d4b\u533a\u57df\uff1a",Object(d.jsx)("span",{id:"text",children:c})]}),Object(d.jsxs)("p",{children:["\u8d4b\u503c\u524d\u68c0\u6d4b\uff1a",u]}),Object(d.jsxs)("p",{children:["\u8d4b\u503c\u540e\u68c0\u6d4b\uff1a",f]})]})]})};n(16);var m=function(){return Object(d.jsxs)("div",{className:"App",children:[Object(d.jsx)(p,{}),Object(d.jsx)("br",{}),Object(d.jsx)(x,{})]})},g=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,18)).then((function(e){var n=e.getCLS,a=e.getFID,c=e.getFCP,r=e.getLCP,i=e.getTTFB;n(t),a(t),c(t),r(t),i(t)}))};i.a.render(Object(d.jsx)(c.a.StrictMode,{children:Object(d.jsx)(m,{})}),document.getElementById("root")),g()}],[[17,1,2]]]);
//# sourceMappingURL=main.3464b616.chunk.js.map