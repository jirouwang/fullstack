(function(t){function e(e){for(var r,u,c=e[0],i=e[1],l=e[2],p=0,f=[];p<c.length;p++)u=c[p],Object.prototype.hasOwnProperty.call(o,u)&&o[u]&&f.push(o[u][0]),o[u]=0;for(r in i)Object.prototype.hasOwnProperty.call(i,r)&&(t[r]=i[r]);s&&s(e);while(f.length)f.shift()();return a.push.apply(a,l||[]),n()}function n(){for(var t,e=0;e<a.length;e++){for(var n=a[e],r=!0,c=1;c<n.length;c++){var i=n[c];0!==o[i]&&(r=!1)}r&&(a.splice(e--,1),t=u(u.s=n[0]))}return t}var r={},o={app:0},a=[];function u(e){if(r[e])return r[e].exports;var n=r[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,u),n.l=!0,n.exports}u.m=t,u.c=r,u.d=function(t,e,n){u.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},u.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},u.t=function(t,e){if(1&e&&(t=u(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(u.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)u.d(n,r,function(e){return t[e]}.bind(null,r));return n},u.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return u.d(e,"a",e),e},u.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},u.p="/";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],i=c.push.bind(c);c.push=e,c=c.slice();for(var l=0;l<c.length;l++)e(c[l]);var s=i;a.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"09f0":function(t,e,n){"use strict";var r=n("3cb5"),o=n.n(r);o.a},"3cb5":function(t,e,n){},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("2b0e"),o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("router-view")],1)},a=[],u=(n("5c0b"),n("2877")),c={},i=Object(u["a"])(c,o,a,!1,null,null,null),l=i.exports,s=(n("944d"),n("8c4f")),p=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"home"},[n("div",{staticClass:"topbar bg-black py-2 px-4"},[t._v(" 456 ")]),n("div",{staticClass:"router"},[n("router-link",{attrs:{to:"/home"}},[t._v("Home")]),n("router-link",{attrs:{to:"/about"}},[t._v("About")])],1)])},f=[],d={name:"Main",components:{}},b=d,v=(n("09f0"),Object(u["a"])(b,p,f,!1,null,"5f540dfd",null)),h=v.exports,m=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[t._v(" 123home路由组件 ")])},_=[],y={name:"",data:function(){return{}},components:{}},O=y,g=Object(u["a"])(O,m,_,!1,null,"674acc0c",null),j=g.exports,w=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},x=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"about"},[n("h1",[t._v("This is an about page about路由组件")])])}],P={},k=Object(u["a"])(P,w,x,!1,null,null,null),$=k.exports;r["a"].use(s["a"]);var E=[{path:"/",name:"main",component:h,children:[{path:"/",name:"home",component:j}]},{path:"/about",name:"About",component:$},{path:"/home",name:"home",component:j}],M=new s["a"]({routes:E}),S=M;r["a"].config.productionTip=!1,new r["a"]({router:S,render:function(t){return t(l)}}).$mount("#app")},"5c0b":function(t,e,n){"use strict";var r=n("9c0c"),o=n.n(r);o.a},"944d":function(t,e,n){},"9c0c":function(t,e,n){}});
//# sourceMappingURL=app.53fe2a89.js.map