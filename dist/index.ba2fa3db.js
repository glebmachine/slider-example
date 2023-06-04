var n=function(t,r){return(n=Object.setPrototypeOf||({__proto__:[]})instanceof Array&&function(n,t){n.__proto__=t}||function(n,t){for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(n[r]=t[r])})(t,r)};function t(t,r){if("function"!=typeof r&&null!==r)throw TypeError("Class extends value "+String(r)+" is not a constructor or null");function e(){this.constructor=t}n(t,r),t.prototype=null===r?Object.create(r):(e.prototype=r.prototype,new e)}function r(n,t){var r,e,o,i,u={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return i={next:c(0),throw:c(1),return:c(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function c(c){return function(a){return function(c){if(r)throw TypeError("Generator is already executing.");for(;i&&(i=0,c[0]&&(u=0)),u;)try{if(r=1,e&&(o=2&c[0]?e.return:c[0]?e.throw||((o=e.return)&&o.call(e),0):e.next)&&!(o=o.call(e,c[1])).done)return o;switch(e=0,o&&(c=[2&c[0],o.value]),c[0]){case 0:case 1:o=c;break;case 4:return u.label++,{value:c[1],done:!1};case 5:u.label++,e=c[1],c=[0];continue;case 7:c=u.ops.pop(),u.trys.pop();continue;default:if(!(o=(o=u.trys).length>0&&o[o.length-1])&&(6===c[0]||2===c[0])){u=0;continue}if(3===c[0]&&(!o||c[1]>o[0]&&c[1]<o[3])){u.label=c[1];break}if(6===c[0]&&u.label<o[1]){u.label=o[1],o=c;break}if(o&&u.label<o[2]){u.label=o[2],u.ops.push(c);break}o[2]&&u.ops.pop(),u.trys.pop();continue}c=t.call(n,u)}catch(n){c=[6,n],e=0}finally{r=o=0}if(5&c[0])throw c[1];return{value:c[0]?c[1]:void 0,done:!0}}([c,a])}}}function e(n){var t="function"==typeof Symbol&&Symbol.iterator,r=t&&n[t],e=0;if(r)return r.call(n);if(n&&"number"==typeof n.length)return{next:function(){return n&&e>=n.length&&(n=void 0),{value:n&&n[e++],done:!n}}};throw TypeError(t?"Object is not iterable.":"Symbol.iterator is not defined.")}function o(n,t){var r="function"==typeof Symbol&&n[Symbol.iterator];if(!r)return n;var e,o,i=r.call(n),u=[];try{for(;(void 0===t||t-- >0)&&!(e=i.next()).done;)u.push(e.value)}catch(n){o={error:n}}finally{try{e&&!e.done&&(r=i.return)&&r.call(i)}finally{if(o)throw o.error}}return u}function i(n,t,r){if(r||2==arguments.length)for(var e,o=0,i=t.length;o<i;o++)!e&&o in t||(e||(e=Array.prototype.slice.call(t,0,o)),e[o]=t[o]);return n.concat(e||Array.prototype.slice.call(t))}function u(n){return this instanceof u?(this.v=n,this):new u(n)}var c=function(n){return n&&"number"==typeof n.length&&"function"!=typeof n};function a(n){return"function"==typeof n}function s(n){return a(null==n?void 0:n.then)}var l=function(n){var t=n(function(n){Error.call(n),n.stack=Error().stack});return t.prototype=Object.create(Error.prototype),t.prototype.constructor=t,t}(function(n){return function(t){n(this),this.message=t?t.length+" errors occurred during unsubscription:\n"+t.map(function(n,t){return t+1+") "+n.toString()}).join("\n  "):"",this.name="UnsubscriptionError",this.errors=t}});function f(n,t){if(n){var r=n.indexOf(t);0<=r&&n.splice(r,1)}}var p=function(){var n;function t(n){this.initialTeardown=n,this.closed=!1,this._parentage=null,this._finalizers=null}return t.prototype.unsubscribe=function(){if(!this.closed){this.closed=!0;var n,t,r,u,c,s=this._parentage;if(s){if(this._parentage=null,Array.isArray(s))try{for(var f=e(s),p=f.next();!p.done;p=f.next())p.value.remove(this)}catch(t){n={error:t}}finally{try{p&&!p.done&&(t=f.return)&&t.call(f)}finally{if(n)throw n.error}}else s.remove(this)}var h=this.initialTeardown;if(a(h))try{h()}catch(n){c=n instanceof l?n.errors:[n]}var v=this._finalizers;if(v){this._finalizers=null;try{for(var y=e(v),b=y.next();!b.done;b=y.next()){var m=b.value;try{d(m)}catch(n){c=null!=c?c:[],n instanceof l?c=i(i([],o(c)),o(n.errors)):c.push(n)}}}catch(n){r={error:n}}finally{try{b&&!b.done&&(u=y.return)&&u.call(y)}finally{if(r)throw r.error}}}if(c)throw new l(c)}},t.prototype.add=function(n){var r;if(n&&n!==this){if(this.closed)d(n);else{if(n instanceof t){if(n.closed||n._hasParent(this))return;n._addParent(this)}(this._finalizers=null!==(r=this._finalizers)&&void 0!==r?r:[]).push(n)}}},t.prototype._hasParent=function(n){var t=this._parentage;return t===n||Array.isArray(t)&&t.includes(n)},t.prototype._addParent=function(n){var t=this._parentage;this._parentage=Array.isArray(t)?(t.push(n),t):t?[t,n]:n},t.prototype._removeParent=function(n){var t=this._parentage;t===n?this._parentage=null:Array.isArray(t)&&f(t,n)},t.prototype.remove=function(n){var r=this._finalizers;r&&f(r,n),n instanceof t&&n._removeParent(this)},t.EMPTY=((n=new t).closed=!0,n),t}();function h(n){return n instanceof p||n&&"closed"in n&&a(n.remove)&&a(n.add)&&a(n.unsubscribe)}function d(n){a(n)?n():n.unsubscribe()}p.EMPTY;var v={onUnhandledError:null,onStoppedNotification:null,Promise:void 0,useDeprecatedSynchronousErrorHandling:!1,useDeprecatedNextContext:!1},y={setTimeout:function(n,t){for(var r=[],e=2;e<arguments.length;e++)r[e-2]=arguments[e];var u=y.delegate;return(null==u?void 0:u.setTimeout)?u.setTimeout.apply(u,i([n,t],o(r))):setTimeout.apply(void 0,i([n,t],o(r)))},clearTimeout:function(n){var t=y.delegate;return((null==t?void 0:t.clearTimeout)||clearTimeout)(n)},delegate:void 0};function b(n){y.setTimeout(function(){var t=v.onUnhandledError;if(t)t(n);else throw n})}function m(){}var w=x("C",void 0,void 0);function x(n,t,r){return{kind:n,value:t,error:r}}var g=null,_=function(n){function r(t){var r=n.call(this)||this;return r.isStopped=!1,t?(r.destination=t,h(t)&&t.add(r)):r.destination=O,r}return t(r,n),r.create=function(n,t,r){return new P(n,t,r)},r.prototype.next=function(n){this.isStopped?I(x("N",n,void 0),this):this._next(n)},r.prototype.error=function(n){this.isStopped?I(x("E",void 0,n),this):(this.isStopped=!0,this._error(n))},r.prototype.complete=function(){this.isStopped?I(w,this):(this.isStopped=!0,this._complete())},r.prototype.unsubscribe=function(){this.closed||(this.isStopped=!0,n.prototype.unsubscribe.call(this),this.destination=null)},r.prototype._next=function(n){this.destination.next(n)},r.prototype._error=function(n){try{this.destination.error(n)}finally{this.unsubscribe()}},r.prototype._complete=function(){try{this.destination.complete()}finally{this.unsubscribe()}},r}(p),S=Function.prototype.bind;function E(n,t){return S.call(n,t)}var T=function(){function n(n){this.partialObserver=n}return n.prototype.next=function(n){var t=this.partialObserver;if(t.next)try{t.next(n)}catch(n){A(n)}},n.prototype.error=function(n){var t=this.partialObserver;if(t.error)try{t.error(n)}catch(n){A(n)}else A(n)},n.prototype.complete=function(){var n=this.partialObserver;if(n.complete)try{n.complete()}catch(n){A(n)}},n}(),P=function(n){function r(t,r,e){var o,i,u=n.call(this)||this;return a(t)||!t?o={next:null!=t?t:void 0,error:null!=r?r:void 0,complete:null!=e?e:void 0}:u&&v.useDeprecatedNextContext?((i=Object.create(t)).unsubscribe=function(){return u.unsubscribe()},o={next:t.next&&E(t.next,i),error:t.error&&E(t.error,i),complete:t.complete&&E(t.complete,i)}):o=t,u.destination=new T(o),u}return t(r,n),r}(_);function A(n){v.useDeprecatedSynchronousErrorHandling?v.useDeprecatedSynchronousErrorHandling&&g&&(g.errorThrown=!0,g.error=n):b(n)}function I(n,t){var r=v.onStoppedNotification;r&&y.setTimeout(function(){return r(n,t)})}var O={closed:!0,next:m,error:function(n){throw n},complete:m},L="function"==typeof Symbol&&Symbol.observable||"@@observable";function j(n){return n}var k=function(){function n(n){n&&(this._subscribe=n)}return n.prototype.lift=function(t){var r=new n;return r.source=this,r.operator=t,r},n.prototype.subscribe=function(n,t,r){var e,o=this,i=(e=n)&&e instanceof _||e&&a(e.next)&&a(e.error)&&a(e.complete)&&h(e)?n:new P(n,t,r);return function(n){if(v.useDeprecatedSynchronousErrorHandling){var t=!g;if(t&&(g={errorThrown:!1,error:null}),n(),t){var r=g,e=r.errorThrown,o=r.error;if(g=null,e)throw o}}else n()}(function(){var n=o.operator,t=o.source;i.add(n?n.call(i,t):t?o._subscribe(i):o._trySubscribe(i))}),i},n.prototype._trySubscribe=function(n){try{return this._subscribe(n)}catch(t){n.error(t)}},n.prototype.forEach=function(n,t){var r=this;return new(t=z(t))(function(t,e){var o=new P({next:function(t){try{n(t)}catch(n){e(n),o.unsubscribe()}},error:e,complete:t});r.subscribe(o)})},n.prototype._subscribe=function(n){var t;return null===(t=this.source)||void 0===t?void 0:t.subscribe(n)},n.prototype[L]=function(){return this},n.prototype.pipe=function(){for(var n=[],t=0;t<arguments.length;t++)n[t]=arguments[t];return(0===n.length?j:1===n.length?n[0]:function(t){return n.reduce(function(n,t){return t(n)},t)})(this)},n.prototype.toPromise=function(n){var t=this;return new(n=z(n))(function(n,r){var e;t.subscribe(function(n){return e=n},function(n){return r(n)},function(){return n(e)})})},n.create=function(t){return new n(t)},n}();function z(n){var t;return null!==(t=null!=n?n:v.Promise)&&void 0!==t?t:Promise}function U(n){return Symbol.asyncIterator&&a(null==n?void 0:n[Symbol.asyncIterator])}function D(n){return TypeError("You provided "+(null!==n&&"object"==typeof n?"an invalid object":"'"+n+"'")+" where a stream was expected. You can provide an Observable, Promise, ReadableStream, Array, AsyncIterable, or Iterable.")}var M="function"==typeof Symbol&&Symbol.iterator?Symbol.iterator:"@@iterator";function N(n){return a(null==n?void 0:n[M])}function C(n){return function(n,t,r){if(!Symbol.asyncIterator)throw TypeError("Symbol.asyncIterator is not defined.");var e,o=r.apply(n,t||[]),i=[];return e={},c("next"),c("throw"),c("return"),e[Symbol.asyncIterator]=function(){return this},e;function c(n){o[n]&&(e[n]=function(t){return new Promise(function(r,e){i.push([n,t,r,e])>1||a(n,t)})})}function a(n,t){try{var r;(r=o[n](t)).value instanceof u?Promise.resolve(r.value.v).then(s,l):f(i[0][2],r)}catch(n){f(i[0][3],n)}}function s(n){a("next",n)}function l(n){a("throw",n)}function f(n,t){n(t),i.shift(),i.length&&a(i[0][0],i[0][1])}}(this,arguments,function(){var t,e,o;return r(this,function(r){switch(r.label){case 0:t=n.getReader(),r.label=1;case 1:r.trys.push([1,,9,10]),r.label=2;case 2:return[4,u(t.read())];case 3:if(o=(e=r.sent()).value,!e.done)return[3,5];return[4,u(void 0)];case 4:return[2,r.sent()];case 5:return[4,u(o)];case 6:return[4,r.sent()];case 7:return r.sent(),[3,2];case 8:return[3,10];case 9:return t.releaseLock(),[7];case 10:return[2]}})})}function H(n){return a(null==n?void 0:n.getReader)}function Y(n){if(n instanceof k)return n;if(null!=n){if(a(n[L]))return new k(function(t){var r=n[L]();if(a(r.subscribe))return r.subscribe(t);throw TypeError("Provided object does not correctly implement Symbol.observable")});if(c(n))return new k(function(t){for(var r=0;r<n.length&&!t.closed;r++)t.next(n[r]);t.complete()});if(s(n))return new k(function(t){n.then(function(n){t.closed||(t.next(n),t.complete())},function(n){return t.error(n)}).then(null,b)});if(U(n))return F(n);if(N(n))return new k(function(t){var r,o;try{for(var i=e(n),u=i.next();!u.done;u=i.next()){var c=u.value;if(t.next(c),t.closed)return}}catch(n){r={error:n}}finally{try{u&&!u.done&&(o=i.return)&&o.call(i)}finally{if(r)throw r.error}}t.complete()});if(H(n))return F(C(n))}throw D(n)}function F(n){return new k(function(t){(function(n,t){var o,i,u,c,a,s,l,f;return a=this,s=void 0,l=void 0,f=function(){var a;return r(this,function(r){switch(r.label){case 0:r.trys.push([0,5,6,11]),o=function(n){if(!Symbol.asyncIterator)throw TypeError("Symbol.asyncIterator is not defined.");var t,r=n[Symbol.asyncIterator];return r?r.call(n):(n=e(n),t={},o("next"),o("throw"),o("return"),t[Symbol.asyncIterator]=function(){return this},t);function o(r){t[r]=n[r]&&function(t){return new Promise(function(e,o){!function(n,t,r,e){Promise.resolve(e).then(function(t){n({value:t,done:r})},t)}(e,o,(t=n[r](t)).done,t.value)})}}}(n),r.label=1;case 1:return[4,o.next()];case 2:if((i=r.sent()).done)return[3,4];if(a=i.value,t.next(a),t.closed)return[2];r.label=3;case 3:return[3,1];case 4:return[3,11];case 5:return u={error:r.sent()},[3,11];case 6:if(r.trys.push([6,,9,10]),!(i&&!i.done&&(c=o.return)))return[3,8];return[4,c.call(o)];case 7:r.sent(),r.label=8;case 8:return[3,10];case 9:if(u)throw u.error;return[7];case 10:return[7];case 11:return t.complete(),[2]}})},new(l||(l=Promise))(function(n,t){function r(n){try{o(f.next(n))}catch(n){t(n)}}function e(n){try{o(f.throw(n))}catch(n){t(n)}}function o(t){var o;t.done?n(t.value):((o=t.value)instanceof l?o:new l(function(n){n(o)})).then(r,e)}o((f=f.apply(a,s||[])).next())})})(n,t).catch(function(n){return t.error(n)})})}function R(n){return function(t){if(a(null==t?void 0:t.lift))return t.lift(function(t){try{return n(t,this)}catch(n){this.error(n)}});throw TypeError("Unable to lift unknown Observable type")}}function B(n,t,r,e,o){return new G(n,t,r,e,o)}var G=function(n){function r(t,r,e,o,i,u){var c=n.call(this,t)||this;return c.onFinalize=i,c.shouldUnsubscribe=u,c._next=r?function(n){try{r(n)}catch(n){t.error(n)}}:n.prototype._next,c._error=o?function(n){try{o(n)}catch(n){t.error(n)}finally{this.unsubscribe()}}:n.prototype._error,c._complete=e?function(){try{e()}catch(n){t.error(n)}finally{this.unsubscribe()}}:n.prototype._complete,c}return t(r,n),r.prototype.unsubscribe=function(){var t;if(!this.shouldUnsubscribe||this.shouldUnsubscribe()){var r=this.closed;n.prototype.unsubscribe.call(this),r||null===(t=this.onFinalize)||void 0===t||t.call(this)}},r}(_);function W(n,t){return R(function(r,e){var o=0;r.subscribe(B(e,function(r){e.next(n.call(t,r,o++))}))})}function X(n,t,r,e,o){void 0===e&&(e=0),void 0===o&&(o=!1);var i=t.schedule(function(){r(),o?n.add(this.schedule(null,e)):this.unsubscribe()},e);if(n.add(i),!o)return i}function $(n,t,r){return(void 0===r&&(r=1/0),a(t))?$(function(r,e){return W(function(n,o){return t(r,n,e,o)})(Y(n(r,e)))},r):("number"==typeof t&&(r=t),R(function(t,e){var o,i,u,c,a,s,l,f,p,h,d,v;return o=r,s=[],l=0,f=0,p=!1,h=function(){!p||s.length||l||e.complete()},d=function(n){return l<o?v(n):s.push(n)},v=function(t){u&&e.next(t),l++;var r=!1;Y(n(t,f++)).subscribe(B(e,function(n){null==i||i(n),u?d(n):e.next(n)},function(){r=!0},void 0,function(){if(r)try{for(l--;s.length&&l<o;)!function(){var n=s.shift();c?X(e,c,function(){return v(n)}):v(n)}();h()}catch(n){e.error(n)}}))},t.subscribe(B(e,d,function(){p=!0,h()})),function(){null==a||a()}}))}var q=Array.isArray,J=["addListener","removeListener"],K=["addEventListener","removeEventListener"],Q=["on","off"];function V(n,t,r,e){if(a(r)&&(e=r,r=void 0),e)return V(n,t,r).pipe((u=e,W(function(n){return q(n)?u.apply(void 0,i([],o(n))):u(n)})));var u,s=o(a(n.addEventListener)&&a(n.removeEventListener)?K.map(function(e){return function(o){return n[e](t,o,r)}}):a(n.addListener)&&a(n.removeListener)?J.map(Z(n,t)):a(n.on)&&a(n.off)?Q.map(Z(n,t)):[],2),l=s[0],f=s[1];if(!l&&c(n))return $(function(n){return V(n,t,r)})(Y(n));if(!l)throw TypeError("Invalid event target");return new k(function(n){var t=function(){for(var t=[],r=0;r<arguments.length;r++)t[r]=arguments[r];return n.next(1<t.length?t:t[0])};return l(t),function(){return f(t)}})}function Z(n,t){return function(r){return function(e){return n[r](t,e)}}}function nn(n){return n[n.length-1]}function nt(n){var t;return(t=nn(n))&&a(t.schedule)?n.pop():void 0}function nr(n,t){return void 0===t&&(t=0),R(function(r,e){r.subscribe(B(e,function(r){return X(e,n,function(){return e.next(r)},t)},function(){return X(e,n,function(){return e.complete()},t)},function(r){return X(e,n,function(){return e.error(r)},t)}))})}function ne(n,t){return void 0===t&&(t=0),R(function(r,e){e.add(n.schedule(function(){return r.subscribe(e)},t))})}function no(n,t){if(!n)throw Error("Iterable cannot be null");return new k(function(r){X(r,t,function(){var e=n[Symbol.asyncIterator]();X(r,t,function(){e.next().then(function(n){n.done?r.complete():r.next(n.value)})},0,!0)})})}function ni(){for(var n,t,r=[],e=0;e<arguments.length;e++)r[e]=arguments[e];return(void 0===(n=1)&&(n=1/0),$(j,n))((t=nt(r))?function(n,t){if(null!=n){if(a(n[L]))return Y(n).pipe(ne(t),nr(t));if(c(n))return new k(function(r){var e=0;return t.schedule(function(){e===n.length?r.complete():(r.next(n[e++]),r.closed||this.schedule())})});if(s(n))return Y(n).pipe(ne(t),nr(t));if(U(n))return no(n,t);if(N(n))return new k(function(r){var e;return X(r,t,function(){e=n[M](),X(r,t,function(){var n,t,o;try{t=(n=e.next()).value,o=n.done}catch(n){r.error(n);return}o?r.complete():r.next(t)},0,!0)}),function(){return a(null==e?void 0:e.return)&&e.return()}});if(H(n))return no(C(n),t)}throw D(n)}(r,t):Y(r))}const nu=document.getElementById("app"),nc=document.createElement("div");nc.classList.add("slider");const na=document.createElement("div");na.classList.add("pin"),nc.append(na),nu.append(nc),function(){let n=document.createElement("div");n.classList.add("notches"),nc.append(n);for(let t=20;t<=200;t+=20){let t=document.createElement("div");t.classList.add("notch"),n.append(t)}}(),function(){var n,t;let r=V(window,"resize").pipe(function(){for(var n=[],t=0;t<arguments.length;t++)n[t]=arguments[t];var r=nt(n);return R(function(t,e){(r?ni(n,t,r):ni(n,t)).subscribe(e)})}(1)),e=r.pipe(W(()=>nc.offsetLeft)),u=r.pipe(W(()=>nc.clientWidth),W(n=>n-2)),c=V(nc,"mousedown"),s=V(window,"mousemove"),l=V(window,"mouseup"),f=c.pipe((n=()=>s.pipe(R(function(n,t){Y(l).subscribe(B(t,function(){return t.complete()},m)),t.closed||n.subscribe(t)})),R(function(r,e){var o=null,i=0,u=!1,c=function(){return u&&!o&&e.complete()};r.subscribe(B(e,function(r){null==o||o.unsubscribe();var u=0,a=i++;Y(n(r,a)).subscribe(o=B(e,function(n){return e.next(t?t(r,n,a,u++):n)},function(){o=null,c()}))},function(){u=!0,c()}))})));f.pipe(function(){for(var n=[],t=0;t<arguments.length;t++)n[t]=arguments[t];var r=a(nn(n))?n.pop():void 0;return R(function(t,e){for(var u=n.length,c=Array(u),a=n.map(function(){return!1}),s=!1,l=function(t){Y(n[t]).subscribe(B(e,function(n){c[t]=n,!s&&!a[t]&&(a[t]=!0,(s=a.every(j))&&(a=null))},m))},f=0;f<u;f++)l(f);t.subscribe(B(e,function(n){if(s){var t=i([n],o(c));e.next(r?r.apply(void 0,i([],o(t))):t)}}))})}(e,u),W(([n,t,r])=>{let e=n.clientX-t,o=r/9,i=Math.round(e/o)*o;return i=Math.max(0,i),i=Math.min(r,i)})).subscribe(n=>{console.log(n),na.style.transform=`translate(${n}px)`})}();
//# sourceMappingURL=index.ba2fa3db.js.map