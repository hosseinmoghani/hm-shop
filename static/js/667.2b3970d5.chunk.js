/*! For license information please see 667.2b3970d5.chunk.js.LICENSE.txt */
"use strict";(self.webpackChunkmy_app=self.webpackChunkmy_app||[]).push([[667],{286:function(e,t){t.Z=function(){window.scrollTo({top:0,behavior:"smooth"})}},3667:function(e,t,r){r.r(t),r.d(t,{default:function(){return y}});var n=r(2791),i=r(885),o=r(1600),s=r(1830),l=r.n(s),a=r(6871),c=r(286),d=r(184);var u=function(e){var t=(0,a.s0)(),r=(0,o.Z)(["cart"]),n=(0,i.Z)(r,3),s=n[0],u=n[1],f=n[2];return(0,d.jsx)(d.Fragment,{children:s.cart&&s.cart.length>-1?(0,d.jsxs)("div",{className:"flex justify-between w-full mt-4 rounded",children:[(0,d.jsx)("button",{className:"bg-red-500 hover:bg-red-600 transition-all duration-200 text-white py-2 px-4 rounded w-[49%]",onClick:function(){u("cart",[],{path:"/",expires:new Date}),f("cart"),l().fire({position:"center",icon:"error",title:"Cart removed",showConfirmButton:!1,timer:1500})},children:"Delete All"}),(0,d.jsx)("button",{onClick:function(){(0,c.Z)(),t("/checkout")},className:"bg-green-500 hover:bg-green-600 transition-all duration-200 text-white py-2 px-4 rounded w-[49%]",children:"CheckOut"})]}):null})},f=r(2357);var x=function(e){var t=(0,n.useContext)(f.Z),r=t.state,s=(t.action,(0,o.Z)(["cart"])),l=(0,i.Z)(s,2),a=l[0],c=(l[1],0),u=0;return a.cart&&a.cart.forEach((function(e,t){var n=r.product.find((function(t){return e.id==t.id}));c+=n.price*e.count,u+=e.count})),(0,d.jsx)(d.Fragment,{children:a.cart?(0,d.jsx)("div",{className:"mt-2 lg:mt-4",children:(0,d.jsx)("div",{className:"w-full text-center bg-gradient-to-r from-gray-700 via-gray-600 to-gray-700 mt-2 rounded py-2 px-4 text-white",children:(0,d.jsxs)("table",{className:"w-full",children:[(0,d.jsx)("thead",{children:(0,d.jsxs)("tr",{className:"border-b-[1px] border-b-white",children:[(0,d.jsx)("th",{className:"py-2 px-4 w-1/2",children:"Total Items"}),(0,d.jsx)("th",{className:"py-2 px-4 w-1/2",children:"Total Price"})]})}),(0,d.jsx)("tbody",{children:(0,d.jsxs)("tr",{children:[(0,d.jsx)("td",{className:"py-2 px-4 w-1/2 text-xl",children:u}),(0,d.jsxs)("td",{className:"py-2 px-4 w-1/2 text-xl",children:[Math.round(c),"$"]})]})})]})})}):null})},m=r(2982),h=r(3504);var p=function(e){return(0,d.jsxs)("div",{className:"w-full mb-3 border-[1px] border-gray-200 shadow-sm rounded h-[500px] lg:h-[112px] md:h-[367.86px]  relative overflow-hidden anim-right ".concat(e.status?"hidden":"block"),children:[(0,d.jsx)("h6",{className:"bg-gray-200 p-2 rounded-full absolute top-4 right-4 text-white w-14 h-9 lg:hidden"}),(0,d.jsx)("div",{className:"absolute bottom-5 left-1 right-1 mx-auto p-2 h-16 rounded bg-gray-200 w-[90%] text-white text-center"})]})};var g=function(e){var t=(0,n.useState)(!1),r=(0,i.Z)(t,2),o=r[0],s=r[1];return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(p,{status:o}),(0,d.jsxs)("div",{className:"border-0 lg:border-[1px] border-gray-200 shadow-sm rounded w-full flex mb-4 lg:mb-2 flex-col lg:flex-row relative ".concat(o?"block":"hidden"),children:[(0,d.jsx)("div",{className:"text-white flex items-center text-lg px-8 absolute left-7 top-2 -translate-x-[50%]  lg:relative lg:top-0 lg:left-0 lg:-translate-x-0",children:(0,d.jsx)("div",{className:"bg-gray-700/80 backdrop-blur text-white w-10 h-10 flex justify-center items-center rounded-full",children:e.counter})}),(0,d.jsx)("div",{className:"text-white flex items-center text-lg px-0 absolute right-2 top-2 md:bottom-[-306px] md:left-[-27px] md:hidden",children:(0,d.jsxs)("h6",{className:"bg-gray-700/80 backdrop-blur p-2 rounded-full w-fit text-white",children:["$",e.data.price]})}),(0,d.jsxs)("div",{className:"flex flex-col md:flex-row justify-center w-full",children:[(0,d.jsx)("div",{className:"w-full md:w-1/2 lg:w-[175px] h-[500px] md:h-full ",children:(0,d.jsx)(h.rU,{onClick:c.Z,to:"/product/".concat(e.item.id),className:"w-full flex justify-center p-0 lg:px-10 lg:py-2 h-full lg:h-28 ",children:(0,d.jsx)("img",{src:"./img/".concat(e.data.img),onLoad:function(){s(!0)},alt:"",className:"h-full object-cover object-top w-full rounded md:rounded-r-none lg:rounded-sm"})})}),(0,d.jsxs)("div",{className:"w-full flex flex-col lg:flex-row justify-center items-center p-2 md:p-0 absolute md:relative bottom-0 left-0 bg-gray-700/80 md:bg-gray-600 lg:bg-white backdrop-blur rounded-tr-none rounded-b md:rounded-b-none md:rounded-r",children:[(0,d.jsx)("div",{className:"w-full lg:w-1/5 h-full md:h-1/4 lg:h-full flex justify-center items-center",children:(0,d.jsx)(h.rU,{onClick:c.Z,to:"/product/".concat(e.item.id),className:"text-white lg:text-black text-lg md:text-xl lg:text-lg overflow-hidden text-ellipsis whitespace-nowrap m-4 lg:m-0 w-[400px] text-center",children:e.data.title})}),(0,d.jsxs)("div",{className:"w-full lg:w-3/5 h-full md:h-1/4 lg:h-full flex flex-row md:flex-row justify-center items-center",children:[(0,d.jsxs)("div",{className:"w-3/6 flex flex-row justify-around items-center mb-2 md:mb-0",children:[(0,d.jsx)("div",{className:"w-1/2 flex flex-col justify-center items-center",children:(0,d.jsx)("div",{className:"w-[40px] h-[40px] rounded-full bg-[".concat(e.item.color,"] m-2")})}),(0,d.jsx)("div",{className:"w-1/2 flex flex-row justify-center items-center",children:(0,d.jsx)("span",{className:"text-2xl text-white lg:text-black",children:e.item.size.toUpperCase()})})]}),(0,d.jsx)("div",{className:"w-3/6 flex flex-col justify-center items-center mb-2 md:mb-0",children:(0,d.jsxs)("div",{className:"flex justify-center items-center",children:[(0,d.jsx)("span",{className:"flex rounded-full border-2 border-gray-300 p-2 text-2xl hover:border-gray-400 transition-all duration-200  w-[40px] h-[40px] justify-center items-center",onClick:function(){e.count(e.item.id,e.item.color,e.item.size,e.item.count-1,e.data.count)},children:(0,d.jsx)("span",{className:"material-icons text-white lg:text-black",children:"remove"})}),(0,d.jsx)("label",{className:"text-2xl mx-4 w-6 text-center text-white lg:text-black",children:e.item.count}),(0,d.jsx)("span",{className:"flex rounded-full border-2 border-gray-300 p-2 text-2xl  hover:border-gray-400 transition-all duration-200 w-[40px] h-[40px] justify-center items-center",onClick:function(){e.count(e.item.id,e.item.color,e.item.size,e.item.count+1,e.data.count)},children:(0,d.jsx)("span",{className:"material-icons text-white lg:text-black",children:"add"})})]})})]}),(0,d.jsx)("div",{className:"w-full lg:w-1/5 h-full md:h-1/4 lg:h-full flex flex-col justify-center items-center",children:(0,d.jsx)("button",{className:"bg-red-500 hover:bg-red-600 text-white py-2 px-4 rounded transition-all duration-200 w-full md:w-2/3 lg:w-fit",onClick:function(t){e.removeItem(e.item.id,e.item.color,e.item.size)},children:"Delete"})})]})]})]})]})};var w=function(e){var t=(0,n.useContext)(f.Z),r=t.state,s=(t.action,(0,o.Z)(["cart"])),a=(0,i.Z)(s,3),c=a[0],u=a[1],x=a[2],h=(0,n.useState)(c.cart),p=(0,i.Z)(h,2),w=p[0],v=p[1];(0,n.useEffect)((function(){v(c.cart)}),[c.cart]);var b=0,y=function(e,t,r,n,i){u("cart",(0,m.Z)(c.cart.map((function(o){return o.id==e&&o.color==t&&o.size==r&&n<=i&&n>0?(o.count=n,o):o}))),{path:"/"})},j=function(e,t,r){u("cart",(0,m.Z)(c.cart.filter((function(n){return n.color!=t||n.id!=e||n.size!=r}))),{path:"/"}),1==c.cart.length&&(u("cart",[],{path:"/",expires:new Date}),x("cart")),l().fire({position:"center",icon:"error",title:"Product removed from cart",showConfirmButton:!1,timer:1500})},N=null;return c.cart&&(N=w.map((function(e,t){var n=r.product.filter((function(t){return t.id==e.id}))[0];return b++,(0,d.jsx)("div",{children:(0,d.jsx)(g,{item:e,data:n,counter:b,removeItem:j,count:y})},t)}))),(0,d.jsx)(d.Fragment,{children:c.cart?(0,d.jsx)("div",{className:"w-full min-h-[350px]",children:N}):(0,d.jsx)("div",{className:"w-full h-full flex justify-center items-center min-h-[470px] lg:min-h-[520px]",children:(0,d.jsx)("h1",{className:"text-center block w-full text-gray-500 text-2xl py-8 h-full",children:"Cart is empty!"})})})};var v=function(e){return(0,d.jsxs)("div",{className:"w-full px-2 xl:px-0 my-3",children:[(0,d.jsx)(w,{}),(0,d.jsx)(x,{}),(0,d.jsx)(u,{})]})};var b=function(e){return(0,d.jsx)("div",{className:"px-2 xl:px-0 ",children:(0,d.jsx)("div",{className:"w-full h-fit py-8 px-4 flex justify-center items-center rounded mt-4 mb-1 bg-gray-700 text-white text-2xl",children:"Cart"})})};var y=function(e){return(0,n.useEffect)((function(){document.title="HM Shop | Cart"}),[]),(0,d.jsxs)("div",{className:"container mx-auto px-2 xl:px-0 flex flex-col",children:[(0,d.jsx)(b,{}),(0,d.jsx)(v,{})]})}},9702:function(e,t){t.Q=function(e,t){if("string"!==typeof e)throw new TypeError("argument str must be a string");for(var n={},i=t||{},s=e.split(";"),l=i.decode||r,a=0;a<s.length;a++){var c=s[a],d=c.indexOf("=");if(!(d<0)){var u=c.substring(0,d).trim();if(void 0==n[u]){var f=c.substring(d+1,c.length).trim();'"'===f[0]&&(f=f.slice(1,-1)),n[u]=o(f,l)}}}return n},t.q=function(e,t,r){var o=r||{},s=o.encode||n;if("function"!==typeof s)throw new TypeError("option encode is invalid");if(!i.test(e))throw new TypeError("argument name is invalid");var l=s(t);if(l&&!i.test(l))throw new TypeError("argument val is invalid");var a=e+"="+l;if(null!=o.maxAge){var c=o.maxAge-0;if(isNaN(c)||!isFinite(c))throw new TypeError("option maxAge is invalid");a+="; Max-Age="+Math.floor(c)}if(o.domain){if(!i.test(o.domain))throw new TypeError("option domain is invalid");a+="; Domain="+o.domain}if(o.path){if(!i.test(o.path))throw new TypeError("option path is invalid");a+="; Path="+o.path}if(o.expires){if("function"!==typeof o.expires.toUTCString)throw new TypeError("option expires is invalid");a+="; Expires="+o.expires.toUTCString()}o.httpOnly&&(a+="; HttpOnly");o.secure&&(a+="; Secure");if(o.sameSite){switch("string"===typeof o.sameSite?o.sameSite.toLowerCase():o.sameSite){case!0:a+="; SameSite=Strict";break;case"lax":a+="; SameSite=Lax";break;case"strict":a+="; SameSite=Strict";break;case"none":a+="; SameSite=None";break;default:throw new TypeError("option sameSite is invalid")}}return a};var r=decodeURIComponent,n=encodeURIComponent,i=/^[\u0009\u0020-\u007e\u0080-\u00ff]+$/;function o(e,t){try{return t(e)}catch(r){return e}}},1600:function(e,t,r){r.d(t,{Z:function(){return d}});var n=r(2791),i=r(9702);function o(e,t){void 0===t&&(t={});var r=function(e){if(e&&"j"===e[0]&&":"===e[1])return e.substr(2);return e}(e);if(function(e,t){return"undefined"===typeof t&&(t=!e||"{"!==e[0]&&"["!==e[0]&&'"'!==e[0]),!t}(r,t.doNotParse))try{return JSON.parse(r)}catch(n){}return e}var s=function(){return s=Object.assign||function(e){for(var t,r=1,n=arguments.length;r<n;r++)for(var i in t=arguments[r])Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i]);return e},s.apply(this,arguments)},l=function(){function e(e,t){var r=this;this.changeListeners=[],this.HAS_DOCUMENT_COOKIE=!1,this.cookies=function(e,t){return"string"===typeof e?i.Q(e,t):"object"===typeof e&&null!==e?e:{}}(e,t),new Promise((function(){r.HAS_DOCUMENT_COOKIE="object"===typeof document&&"string"===typeof document.cookie})).catch((function(){}))}return e.prototype._updateBrowserValues=function(e){this.HAS_DOCUMENT_COOKIE&&(this.cookies=i.Q(document.cookie,e))},e.prototype._emitChange=function(e){for(var t=0;t<this.changeListeners.length;++t)this.changeListeners[t](e)},e.prototype.get=function(e,t,r){return void 0===t&&(t={}),this._updateBrowserValues(r),o(this.cookies[e],t)},e.prototype.getAll=function(e,t){void 0===e&&(e={}),this._updateBrowserValues(t);var r={};for(var n in this.cookies)r[n]=o(this.cookies[n],e);return r},e.prototype.set=function(e,t,r){var n;"object"===typeof t&&(t=JSON.stringify(t)),this.cookies=s(s({},this.cookies),((n={})[e]=t,n)),this.HAS_DOCUMENT_COOKIE&&(document.cookie=i.q(e,t,r)),this._emitChange({name:e,value:t,options:r})},e.prototype.remove=function(e,t){var r=t=s(s({},t),{expires:new Date(1970,1,1,0,0,1),maxAge:0});this.cookies=s({},this.cookies),delete this.cookies[e],this.HAS_DOCUMENT_COOKIE&&(document.cookie=i.q(e,"",r)),this._emitChange({name:e,value:void 0,options:t})},e.prototype.addChangeListener=function(e){this.changeListeners.push(e)},e.prototype.removeChangeListener=function(e){var t=this.changeListeners.indexOf(e);t>=0&&this.changeListeners.splice(t,1)},e}(),a=n.createContext(new l),c=(a.Provider,a.Consumer,a);function d(e){var t=(0,n.useContext)(c);if(!t)throw new Error("Missing <CookiesProvider>");var r=t.getAll(),i=(0,n.useState)(r),o=i[0],s=i[1],l=(0,n.useRef)(o);return"undefined"!==typeof window&&"undefined"!==typeof window.document&&"undefined"!==typeof window.document.createElement&&(0,n.useLayoutEffect)((function(){function r(){var r=t.getAll();(function(e,t,r){if(!e)return!0;for(var n=0,i=e;n<i.length;n++){var o=i[n];if(t[o]!==r[o])return!0}return!1})(e||null,r,l.current)&&s(r),l.current=r}return t.addChangeListener(r),function(){t.removeChangeListener(r)}}),[t]),[o,(0,n.useMemo)((function(){return t.set.bind(t)}),[t]),(0,n.useMemo)((function(){return t.remove.bind(t)}),[t])]}}}]);
//# sourceMappingURL=667.2b3970d5.chunk.js.map