var ng2App=ng2App||{};ng2App.common=function(e){function t(o){if(n[o])return n[o].exports;var r=n[o]={i:o,l:!1,exports:{}};return e[o].call(r.exports,r,r.exports,t),r.l=!0,r.exports}var n={};return t.m=e,t.c=n,t.i=function(e){return e},t.d=function(e,n,o){t.o(e,n)||Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:o})},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="",t(t.s=30)}([function(e,t){e.exports=ng.core},function(e,t){e.exports=ng.router},,function(e,t,n){"use strict";t.COMMON_COMPONENTS=[]},function(e,t,n){"use strict";t.COMMON_PIPES=[]},,,function(e,t){e.exports=ng.http},,function(e,t,n){"use strict";function o(e){for(var n in e)t.hasOwnProperty(n)||(t[n]=e[n])}n(22);var r=n(13);t.AppCommonModule=r.AppCommonModule,o(n(14)),o(n(4)),o(n(3))},,,,function(e,t,n){"use strict";var o=this&&this.__decorate||function(e,t,n,o){var r,u=arguments.length,c=u<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,n):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)c=Reflect.decorate(e,t,n,o);else for(var i=e.length-1;i>=0;i--)(r=e[i])&&(c=(u<3?r(c):u>3?r(t,n,c):r(t,n))||c);return u>3&&c&&Object.defineProperty(t,n,c),c},r=this&&this.__metadata||function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)},u=n(0),c=n(27),i=n(7),a=n(28),s=n(1),f=n(3),l=n(4),p=function(){function e(){}return e}();p=o([u.NgModule({imports:[i.HttpModule],exports:[c.CommonModule,i.HttpModule,i.JsonpModule,a.FormsModule,s.RouterModule],declarations:f.COMMON_COMPONENTS.concat(l.COMMON_PIPES),providers:[]}),r("design:paramtypes",[])],p),t.AppCommonModule=p},function(e,t,n){"use strict";var o=n(15);t.ModuleLoaderService=o.ModuleLoaderService,t.COMMON_SERVICES=[o.ModuleLoaderService]},function(e,t,n){"use strict";var o=this&&this.__decorate||function(e,t,n,o){var r,u=arguments.length,c=u<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,n):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)c=Reflect.decorate(e,t,n,o);else for(var i=e.length-1;i>=0;i--)(r=e[i])&&(c=(u<3?r(c):u>3?r(t,n,c):r(t,n))||c);return u>3&&c&&Object.defineProperty(t,n,c),c},r=this&&this.__metadata||function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)},u=n(0),c=n(7);n(26);var i=new Map,a=null,s=function(){function e(e){this.http=e,a=this}return e.load=function(e){return a.load(e)},e.defineModule=function(e,t,n){var o=Promise.resolve();if(i.set(e,t||[]),t&&t.length>0){var r=t.map(function(e){return a.load(e,!0)});o=Promise.all(r)}return o.then(function(){var e=n();return e})},e.prototype.load=function(e,t){var n=this;return void 0===t&&(t=!1),new Promise(function(t,o){var r="modules/"+e+"/app.js";n._loadCss(e),n.http.get(r).toPromise().then(function(t){var o=t.text();return n._DomEval(o),window.ng2App[e]}).then(function(e){var n=e.AppModule;t(n)}).catch(function(e){return o(e)})})},e.prototype.useModuleStyles=function(e){var t=[].slice.apply(document.querySelectorAll(".newkit-module-style")),n=this._getModuleAndDeps(e);t.forEach(function(e){for(var t=!0,o=n.length-1;o>=0;o--)if(e.className.indexOf(n[o])>=0){t=!1,n.splice(o,1);break}e.disabled=t})},e.prototype._getModuleAndDeps=function(e){var t=this;if("system"===e)return[];if(!i.has(e))return console.error("module "+e+" not found."),[];var n=[e],o=i.get(e);return o.forEach(function(e){n.push.apply(n,t._getModuleAndDeps(e))}),n},e.prototype._loadCss=function(e){var t="/dist/modules/"+e+"/app.css",n=document.createElement("link");n.setAttribute("rel","stylesheet"),n.setAttribute("href",t),n.setAttribute("class","newkit-module-style "+e),document.querySelector("head").appendChild(n)},e.prototype._DomEval=function(e,t){t=t||document;var n=t.createElement("script");n.text=e,t.head.appendChild(n).parentNode.removeChild(n)},e}();s=o([u.Injectable(),r("design:paramtypes",[c.Http])],s),t.ModuleLoaderService=s},,,,,,,function(e,t){},,,,function(e,t){e.exports=Rx},function(e,t){e.exports=ng.common},function(e,t){e.exports=ng.forms},,function(e,t,n){"use strict";function o(e){for(var n in e)t.hasOwnProperty(n)||(t[n]=e[n])}o(n(9))}]);