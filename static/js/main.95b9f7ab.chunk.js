(this["webpackJsonptic-tac-toe"]=this["webpackJsonptic-tac-toe"]||[]).push([[0],[,,,,function(e,t,a){e.exports=a(11)},,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),r=a(3),o=a.n(r),l=(a(9),a(10),a(1)),i=function(e){return c.a.createElement("button",{className:"square",onClick:e.onClick},e.value)},s=function(){var e=Object(n.useState)(!0),t=Object(l.a)(e,2),a=t[0],r=t[1],o=Object(n.useState)(Array(9).fill(null)),s=Object(l.a)(o,2),u=s[0],m=s[1],d=function(e){for(var t=[[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]],a=0;a<t.length;a++){var n=Object(l.a)(t[a],3),c=n[0],r=n[1],o=n[2];if(e[c]&&e[c]===e[r]&&e[c]===e[o])return e[c]}return null},v=d(u),f=v?"Winner: ".concat(v):"Next Player: ".concat(a?"X":"O"),E=function(e){return c.a.createElement(i,{value:u[e],onClick:function(){return function(e){var t=u.slice();d(u)||u[e]||(t[e]=a?"X":"O",m(t),r(!a))}(e)}})};return c.a.createElement("div",null,c.a.createElement("div",{className:"status"},f),c.a.createElement("div",{className:"board-row"},E(0),E(1),E(2)),c.a.createElement("div",{className:"board-row"},E(3),E(4),E(5)),c.a.createElement("div",{className:"board-row"},E(6),E(7),E(8)))},u=function(){return c.a.createElement("div",{className:"game"},c.a.createElement("div",{className:"game-board"},c.a.createElement(s,null)),c.a.createElement("div",{className:"game-info"},c.a.createElement("div",null),c.a.createElement("div",null)))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(u,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[4,1,2]]]);
//# sourceMappingURL=main.95b9f7ab.chunk.js.map