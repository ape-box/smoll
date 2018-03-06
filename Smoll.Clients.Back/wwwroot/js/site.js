(function(){function t(a,d,e,h,p,l){return{tag:a,key:d,attrs:e,children:h,text:p,dom:l,domSize:void 0,state:void 0,events:void 0,instance:void 0,skip:!1}}function Q(a){for(var d in a)if(G.call(a,d))return!1;return!0}function x(a){var d=arguments[1],e=2;if(null==a||"string"!==typeof a&&"function"!==typeof a&&"function"!==typeof a.view)throw Error("The selector must be either a string or a component.");if("string"===typeof a){var h;if(!(h=R[a])){var p="div";for(var l=[],k={};h=V.exec(a);){var q=h[1],
r=h[2];""===q&&""!==r?p=r:"#"===q?k.id=r:"."===q?l.push(r):"["===h[3][0]&&((q=h[6])&&(q=q.replace(/\\(["'])/g,"$1").replace(/\\\\/g,"\\")),"class"===h[4]?l.push(q):k[h[4]]=""===q?q:q||!0)}0<l.length&&(k.className=l.join(" "));h=R[a]={tag:p,attrs:k}}}if(null==d)d={};else if("object"!==typeof d||null!=d.tag||Array.isArray(d))d={},e=1;if(arguments.length===e+1)p=arguments[e],Array.isArray(p)||(p=[p]);else for(p=[];e<arguments.length;)p.push(arguments[e++]);e=t.normalizeChildren(p);if("string"===typeof a){p=
!1;var m,u;l=d.className||d["class"];if(!Q(h.attrs)&&!Q(d)){k={};for(var b in d)G.call(d,b)&&(k[b]=d[b]);d=k}for(b in h.attrs)G.call(h.attrs,b)&&(d[b]=h.attrs[b]);void 0!==l&&(void 0!==d["class"]&&(d["class"]=void 0,d.className=l),null!=h.attrs.className&&(d.className=h.attrs.className+" "+l));for(b in d)if(G.call(d,b)&&"key"!==b){p=!0;break}Array.isArray(e)&&1===e.length&&null!=e[0]&&"#"===e[0].tag?u=e[0].children:m=e;return t(h.tag,d.key,p?d:void 0,m,u)}return t(a,d.key,d,e)}function W(a){var d=
0,e=null,h="function"===typeof requestAnimationFrame?requestAnimationFrame:setTimeout;return function(){var p=Date.now()-d;null===e&&(e=h(function(){e=null;a();d=Date.now()},16-p))}}t.normalize=function(a){return Array.isArray(a)?t("[",void 0,void 0,t.normalizeChildren(a),void 0,void 0):null!=a&&"object"!==typeof a?t("#",void 0,void 0,!1===a?"":a,void 0,void 0):a};t.normalizeChildren=function(a){for(var d=0;d<a.length;d++)a[d]=t.normalize(a[d]);return a};var V=/(?:(^|#|\.)([^#\.\[\]]+))|(\[(.+?)(?:\s*=\s*("|'|)((?:\\["'\]]|.)*?)\5)?\])/g,
R={},G={}.hasOwnProperty;x.trust=function(a){null==a&&(a="");return t("<",void 0,void 0,a,void 0,void 0)};x.fragment=function(a,d){return t("[",a.key,a,t.normalizeChildren(d),void 0,void 0)};var B=function(a){function d(a,b){return function y(d){var A;try{if(!b||null==d||"object"!==typeof d&&"function"!==typeof d||"function"!==typeof(A=d.then))m(function(){b||0!==a.length||console.error("Possible unhandled promise rejection:",d);for(var e=0;e<a.length;e++)a[e](d);p.length=0;l.length=0;r.state=b;r.retry=
function(){y(d)}});else{if(d===h)throw new TypeError("Promise can't be resolved w/ itself");e(A.bind(d))}}catch(Y){q(Y)}}}function e(a){function b(b){return function(a){0<d++||b(a)}}var d=0,r=b(q);try{a(b(k),r)}catch(y){r(y)}}if(!(this instanceof B))throw Error("Promise must be called with `new`");if("function"!==typeof a)throw new TypeError("executor must be a function");var h=this,p=[],l=[],k=d(p,!0),q=d(l,!1),r=h._instance={resolvers:p,rejectors:l},m="function"===typeof setImmediate?setImmediate:
setTimeout;e(a)};B.prototype.then=function(a,d){function e(a,d,e,k){d.push(function(b){if("function"!==typeof a)e(b);else try{p(a(b))}catch(C){l&&l(C)}});"function"===typeof h.retry&&k===h.state&&h.retry()}var h=this._instance,p,l,k=new B(function(a,d){p=a;l=d});e(a,h.resolvers,p,!0);e(d,h.rejectors,l,!1);return k};B.prototype["catch"]=function(a){return this.then(null,a)};B.resolve=function(a){return a instanceof B?a:new B(function(d){d(a)})};B.reject=function(a){return new B(function(d,e){e(a)})};
B.all=function(a){return new B(function(d,e){var h=a.length,p=0,l=[];if(0===a.length)d([]);else for(var k=0;k<a.length;k++)(function(k){function r(a){p++;l[k]=a;p===h&&d(l)}null==a[k]||"object"!==typeof a[k]&&"function"!==typeof a[k]||"function"!==typeof a[k].then?r(a[k]):a[k].then(r,e)})(k)})};B.race=function(a){return new B(function(d,e){for(var h=0;h<a.length;h++)a[h].then(d,e)})};"undefined"!==typeof window?("undefined"===typeof window.Promise&&(window.Promise=B),B=window.Promise):"undefined"!==
typeof global&&("undefined"===typeof global.Promise&&(global.Promise=B),B=global.Promise);var F=function(a){function d(a,h){if(Array.isArray(h))for(var k=0;k<h.length;k++)d(a+"["+k+"]",h[k]);else if("[object Object]"===Object.prototype.toString.call(h))for(k in h)d(a+"["+k+"]",h[k]);else e.push(encodeURIComponent(a)+(null!=h&&""!==h?"="+encodeURIComponent(h):""))}if("[object Object]"!==Object.prototype.toString.call(a))return"";var e=[],h;for(h in a)d(h,a[h]);return e.join("&")},Z=/^file:\/\//i,O=
function(a,d){function e(){function b(){0===--a&&"function"===typeof u&&u()}var a=0;return function X(d){var e=d.then;d.then=function(){a++;var r=e.apply(d,arguments);r.then(b,function(d){b();if(0===a)throw d;});return X(r)};return d}}function h(b,a){if("string"===typeof b){var d=b;b=a||{};null==b.url&&(b.url=d)}return b}function p(b,a){if(null==a)return b;for(var d=b.match(/:[^\/]+/gi)||[],e=0;e<d.length;e++){var r=d[e].slice(1);null!=a[r]&&(b=b.replace(d[e],a[r]))}return b}function l(b,a){var d=
F(a);if(""!==d){var e=0>b.indexOf("?")?"?":"&";b+=e+d}return b}function k(b){try{return""!==b?JSON.parse(b):null}catch(C){throw Error(b);}}function q(b){return b.responseText}function r(b,a){if("function"===typeof b)if(Array.isArray(a))for(var d=0;d<a.length;d++)a[d]=new b(a[d]);else return new b(a);return a}var m=0,u;return{request:function(b,m){var A=e();b=h(b,m);var C=new d(function(d,e){null==b.method&&(b.method="GET");b.method=b.method.toUpperCase();var h="GET"===b.method||"TRACE"===b.method?
!1:"boolean"===typeof b.useBody?b.useBody:!0;"function"!==typeof b.serialize&&(b.serialize="undefined"!==typeof FormData&&b.data instanceof FormData?function(b){return b}:JSON.stringify);"function"!==typeof b.deserialize&&(b.deserialize=k);"function"!==typeof b.extract&&(b.extract=q);b.url=p(b.url,b.data);h?b.data=b.serialize(b.data):b.url=l(b.url,b.data);var m=new a.XMLHttpRequest,A=!1,C=m.abort;m.abort=function(){A=!0;C.call(m)};m.open(b.method,b.url,"boolean"===typeof b.async?b.async:!0,"string"===
typeof b.user?b.user:void 0,"string"===typeof b.password?b.password:void 0);b.serialize!==JSON.stringify||!h||b.headers&&b.headers.hasOwnProperty("Content-Type")||m.setRequestHeader("Content-Type","application/json; charset=utf-8");b.deserialize!==k||b.headers&&b.headers.hasOwnProperty("Accept")||m.setRequestHeader("Accept","application/json, text/*");b.withCredentials&&(m.withCredentials=b.withCredentials);b.timeout&&(m.timeout=b.timeout);for(var u in b.headers)({}).hasOwnProperty.call(b.headers,
u)&&m.setRequestHeader(u,b.headers[u]);"function"===typeof b.config&&(m=b.config(m,b)||m);m.onreadystatechange=function(){if(!A&&4===m.readyState)try{var a=b.extract!==q?b.extract(m,b):b.deserialize(b.extract(m,b));if(b.extract!==q||200<=m.status&&300>m.status||304===m.status||Z.test(b.url))d(r(b.type,a));else{var h=Error(m.responseText);h.code=m.status;h.response=a;e(h)}}catch(H){e(H)}};h&&null!=b.data?m.send(b.data):m.send()});return!0===b.background?C:A(C)},jsonp:function(b,k){var A=e();b=h(b,
k);var q=new d(function(d,e){var h=b.callbackName||"_mithril_"+Math.round(1E16*Math.random())+"_"+m++,k=a.document.createElement("script");a[h]=function(e){k.parentNode.removeChild(k);d(r(b.type,e));delete a[h]};k.onerror=function(){k.parentNode.removeChild(k);e(Error("JSONP request failed"));delete a[h]};null==b.data&&(b.data={});b.url=p(b.url,b.data);b.data[b.callbackKey||"callback"]=h;k.src=l(b.url,b.data);a.document.documentElement.appendChild(k)});return!0===b.background?q:A(q)},setCompletionCallback:function(b){u=
b}}}(window,B),U=function(a){function d(g,c){if(g.state!==c)throw Error("`vnode.state` must not be modified");}function e(g){var c=g.state;try{return this.apply(c,arguments)}finally{d(g,c)}}function h(g,c,f,b,a,d,e){for(;f<b;f++){var n=c[f];null!=n&&p(g,n,a,e,d)}}function p(g,c,f,a,d){var e=c.tag;if("string"===typeof e)switch(c.state={},null!=c.attrs&&K(c.attrs,c,f),e){case "#":return c.dom=D.createTextNode(c.children),b(g,c.dom,d),c.dom;case "<":return l(g,c,d);case "[":var n=D.createDocumentFragment();
null!=c.children&&(e=c.children,h(n,e,0,e.length,f,null,a));c.dom=n.firstChild;c.domSize=n.childNodes.length;b(g,n,d);return n;default:var r=c.tag,m=(e=c.attrs)&&e.is;r=(a=c.attrs&&c.attrs.xmlns||G[c.tag]||a)?m?D.createElementNS(a,r,{is:m}):D.createElementNS(a,r):m?D.createElement(r,{is:m}):D.createElement(r);c.dom=r;if(null!=e)for(n in m=a,e)J(c,n,null,e[n],m);b(g,r,d);null!=c.attrs&&null!=c.attrs.contenteditable?C(c):(null!=c.text&&(""!==c.text?r.textContent=c.text:c.children=[t("#",void 0,void 0,
c.text,void 0,void 0)]),null!=c.children&&(g=c.children,h(r,g,0,g.length,f,null,a),g=c.attrs,"select"===c.tag&&null!=g&&("value"in g&&J(c,"value",null,g.value,void 0),"selectedIndex"in g&&J(c,"selectedIndex",null,g.selectedIndex,void 0))));return r}else return k(c,f),null!=c.instance?(f=p(g,c.instance,f,a,d),c.dom=c.instance.dom,c.domSize=null!=c.dom?c.instance.domSize:0,b(g,f,d),c=f):(c.domSize=0,c=H),c}function l(g,c,f){var a={caption:"table",thead:"table",tbody:"table",tfoot:"table",tr:"tbody",
th:"tr",td:"tr",colgroup:"table",col:"colgroup"}[(c.children.match(/^\s*?<(\w+)/im)||[])[1]]||"div";a=D.createElement(a);a.innerHTML=c.children;c.dom=a.firstChild;c.domSize=a.childNodes.length;c=D.createDocumentFragment();for(var d;d=a.firstChild;)c.appendChild(d);b(g,c,f);return c}function k(g,c){if("function"===typeof g.tag.view){g.state=Object.create(g.tag);var f=g.state.view;if(null!=f.$$reentrantLock$$)return H;f.$$reentrantLock$$=!0}else{g.state=void 0;f=g.tag;if(null!=f.$$reentrantLock$$)return H;
f.$$reentrantLock$$=!0;g.state=null!=g.tag.prototype&&"function"===typeof g.tag.prototype.view?new g.tag(g):g.tag(g)}null!=g.attrs&&K(g.attrs,g,c);K(g.state,g,c);g.instance=t.normalize(e.call(g.state.view,g));if(g.instance===g)throw Error("A view cannot return the vnode it received as argument");f.$$reentrantLock$$=null}function q(g,c,f,a,d,e,k){if(!(c===f&&!a||null==c&&null==f))if(null==c)h(g,f,0,f.length,d,e,k);else if(null==f)A(c,0,c.length,f,a);else{for(var n=0,l=Math.min(c.length,f.length),q=
c.length,C=!1,E=!1;n<l;n++)if(null!=c[n]&&null!=f[n]){null==c[n].key&&null==f[n].key&&(E=!0);break}if(E&&q===f.length)for(n=0;n<q;n++)c[n]===f[n]&&!a||null==c[n]&&null==f[n]||(null==c[n]?p(g,f[n],d,k,u(c,n+1,q,e)):null==f[n]?A(c,n,n+1,f,a):r(g,c[n],f[n],d,u(c,n+1,q,e),a,k));else{a:{if(null!=c.pool&&Math.abs(c.pool.length-f.length)<=Math.abs(c.length-f.length)&&(n=f[0]&&f[0].children&&f[0].children.length||0,Math.abs((c.pool[0]&&c.pool[0].children&&c.pool[0].children.length||0)-n)<=Math.abs((c[0]&&
c[0].children&&c[0].children.length||0)-n))){n=!0;break a}n=!1}n&&(C=!0,c=c.concat(c.pool));var v=n=0;l=c.length-1;for(var t=f.length-1,I,w,z,y;l>=v&&t>=n;)if(w=c[v],z=f[n],y=C&&v>=q,w===z&&!y&&!a||null==w&&null==z)v++,n++;else if(null==w)(E||null==z.key)&&p(g,f[n],d,k,u(c,++n,q,e)),v++;else if(null==z){if(E||null==w.key)A(c,n,n+1,f,a),v++;n++}else if(w.key===z.key)v++,n++,r(g,w,z,d,u(c,v,q,e),y||a,k),y&&w.tag===z.tag&&b(g,m(z),e);else if(w=c[l],y=C&&l>=q,w!==z||y||a)if(null==w)l--;else if(null==
z)n++;else if(w.key===z.key)r(g,w,z,d,u(c,l+1,q,e),y||a,k),(y&&w.tag===z.tag||n<t)&&b(g,m(z),u(c,v,q,e)),l--,n++;else break;else l--,n++;for(;l>=v&&t>=n;){w=c[l];z=f[t];y=C&&l>=q;if(w!==z||y||a)if(null==w)l--;else{if(null!=z)if(w.key===z.key)r(g,w,z,d,u(c,l+1,q,e),y||a,k),y&&w.tag===z.tag&&b(g,m(z),e),null!=w.dom&&(e=w.dom),l--;else{if(!I){I=c;E=l;w={};for(y=0;y<E;y++){var x=I[y];null!=x&&(x=x.key,null!=x&&(w[x]=y))}I=w}null!=z&&(E=I[z.key],null!=E?(w=c[E],y=C&&E>=q,r(g,w,z,d,u(c,l+1,q,e),y||a,k),
b(g,m(z),e),w.skip=!0,null!=w.dom&&(e=w.dom)):e=p(g,z,d,k,e))}t--}else l--,t--;if(t<n)break}h(g,f,n,t+1,d,e,k);A(c,v,Math.min(l+1,q),f,a);if(C)for(g=Math.max(v,q);l>=g;l--)c[l].skip?c[l].skip=!1:B(c[l],f)}}}function r(g,c,f,a,b,d,h){var n=c.tag;if(n===f.tag){f.state=c.state;f.events=c.events;var A;if(A=!d){var u,E;null!=f.attrs&&"function"===typeof f.attrs.onbeforeupdate&&(u=e.call(f.attrs.onbeforeupdate,f,c));"string"!==typeof f.tag&&"function"===typeof f.state.onbeforeupdate&&(E=e.call(f.state.onbeforeupdate,
f,c));void 0===u&&void 0===E||u||E?A=!1:(f.dom=c.dom,f.domSize=c.domSize,f.instance=c.instance,A=!0)}if(!A)if("string"===typeof n)switch(null!=f.attrs&&(d?(f.state={},K(f.attrs,f,a)):M(f.attrs,f,a)),n){case "#":c.children.toString()!==f.children.toString()&&(c.dom.nodeValue=f.children);f.dom=c.dom;break;case "<":c.children!==f.children?(m(c),l(g,f,b)):(f.dom=c.dom,f.domSize=c.domSize);break;case "[":q(g,c.children,f.children,d,a,b,h);c=0;a=f.children;f.dom=null;if(null!=a){for(d=0;d<a.length;d++){var v=
a[d];null!=v&&null!=v.dom&&(null==f.dom&&(f.dom=v.dom),c+=v.domSize||1)}1!==c&&(f.domSize=c)}break;default:g=f.dom=c.dom;h=f.attrs&&f.attrs.xmlns||G[f.tag]||h;"textarea"===f.tag&&(null==f.attrs&&(f.attrs={}),null!=f.text&&(f.attrs.value=f.text,f.text=void 0));b=c.attrs;n=f.attrs;A=h;if(null!=n)for(v in n)J(f,v,b&&b[v],n[v],A);if(null!=b)for(v in b)null!=n&&v in n||("className"===v&&(v="class"),"o"!==v[0]||"n"!==v[1]||S(v)?"key"!==v&&f.dom.removeAttribute(v):T(f,v,void 0));null!=f.attrs&&null!=f.attrs.contenteditable?
C(f):null!=c.text&&null!=f.text&&""!==f.text?c.text.toString()!==f.text.toString()&&(c.dom.firstChild.nodeValue=f.text):(null!=c.text&&(c.children=[t("#",void 0,void 0,c.text,void 0,c.dom.firstChild)]),null!=f.text&&(f.children=[t("#",void 0,void 0,f.text,void 0,void 0)]),q(g,c.children,f.children,d,a,null,h))}else{if(d)k(f,a);else{f.instance=t.normalize(e.call(f.state.view,f));if(f.instance===f)throw Error("A view cannot return the vnode it received as argument");null!=f.attrs&&M(f.attrs,f,a);M(f.state,
f,a)}null!=f.instance?(null==c.instance?p(g,f.instance,a,h,b):r(g,c.instance,f.instance,a,b,d,h),f.dom=f.instance.dom,f.domSize=f.instance.domSize):null!=c.instance?(y(c.instance,null,d),f.dom=void 0,f.domSize=0):(f.dom=c.dom,f.domSize=c.domSize)}}else y(c,null,d),p(g,f,a,h,b)}function m(g){var c=g.domSize;if(null!=c||null==g.dom){var a=D.createDocumentFragment();if(0<c){for(g=g.dom;--c;)a.appendChild(g.nextSibling);a.insertBefore(g,a.firstChild)}return a}return g.dom}function u(g,c,a,b){for(;c<a;c++)if(null!=
g[c]&&null!=g[c].dom)return g[c].dom;return b}function b(g,c,a){a?g.insertBefore(c,a):g.appendChild(c)}function C(g){var c=g.children;if(null!=c&&1===c.length&&"<"===c[0].tag)c=c[0].children,g.dom.innerHTML!==c&&(g.dom.innerHTML=c);else if(null!=g.text||null!=c&&0!==c.length)throw Error("Child node of a contenteditable must be trusted");}function A(g,c,a,b,d){for(;c<a;c++){var f=g[c];null!=f&&(f.skip?f.skip=!1:y(f,b,d))}}function y(g,c,a){function b(){if(++h===f&&(a||(d(g,r),x(g)),g.dom)){var b=g.domSize||
1;if(1<b)for(var e=g.dom;--b;){var n=e.nextSibling,k=n.parentNode;null!=k&&k.removeChild(n)}b=g.dom;e=b.parentNode;null!=e&&e.removeChild(b);B(g,c)}}var f=1,h=0;if(!a){var r=g.state;if(g.attrs&&"function"===typeof g.attrs.onbeforeremove){var k=e.call(g.attrs.onbeforeremove,g);null!=k&&"function"===typeof k.then&&(f++,k.then(b,b))}"string"!==typeof g.tag&&"function"===typeof g.state.onbeforeremove&&(k=e.call(g.state.onbeforeremove,g),null!=k&&"function"===typeof k.then&&(f++,k.then(b,b)))}b()}function B(a,
c){var b;if(b=null!=c&&null==a.domSize)b=a.attrs,b=!(null!=b&&(b.oncreate||b.onupdate||b.onbeforeremove||b.onremove));b&&"string"===typeof a.tag&&(c.pool?c.pool.push(a):c.pool=[a])}function x(a){a.attrs&&"function"===typeof a.attrs.onremove&&e.call(a.attrs.onremove,a);if("string"!==typeof a.tag)"function"===typeof a.state.onremove&&e.call(a.state.onremove,a),null!=a.instance&&x(a.instance);else if(a=a.children,Array.isArray(a))for(var c=0;c<a.length;c++){var b=a[c];null!=b&&x(b)}}function J(a,c,b,
d,e){if("key"!==c&&"is"!==c&&!S(c)){if("o"===c[0]&&"n"===c[1])return T(a,c,d);if("undefined"===typeof d&&"value"===c&&b!==d)a.dom.value="";else if((b!==d||"value"===c||"checked"===c||"selectedIndex"===c||"selected"===c&&a.dom===D.activeElement||"option"===a.tag&&a.dom.parentNode===D.activeElement||"object"===typeof d)&&void 0!==d){var f=a.dom;if("xlink:"===c.slice(0,6))f.setAttributeNS("http://www.w3.org/1999/xlink",c,d);else if("style"===c)if(a=b,null!=a&&null!=d&&"object"===typeof a&&"object"===
typeof d&&d!==a){for(var g in d)d[g]!==a[g]&&(f.style[g]=d[g]);for(g in a)g in d||(f.style[g]="")}else if(a===d&&(f.style.cssText="",a=null),null==d)f.style.cssText="";else if("string"===typeof d)f.style.cssText=d;else for(g in"string"===typeof a&&(f.style.cssText=""),d)f.style[g]=d[g];else if(c in f&&"href"!==c&&"list"!==c&&"form"!==c&&"width"!==c&&"height"!==c&&void 0===e&&!(a.attrs.is||-1<a.tag.indexOf("-"))){if("value"===c){g=""+d;if(("input"===a.tag||"textarea"===a.tag)&&a.dom.value===g&&a.dom===
D.activeElement)return;if("select"===a.tag)if(null===d){if(-1===a.dom.selectedIndex&&a.dom===D.activeElement)return}else if(null!==b&&a.dom.value===g&&a.dom===D.activeElement)return;if("option"===a.tag&&null!=b&&a.dom.value===g)return}"input"===a.tag&&"type"===c?f.setAttribute(c,d):f[c]=d}else"boolean"===typeof d?d?f.setAttribute(c,""):f.removeAttribute(c):f.setAttribute("className"===c?"class":c,d)}}}function S(a){return"oninit"===a||"oncreate"===a||"onupdate"===a||"onremove"===a||"onbeforeremove"===
a||"onbeforeupdate"===a}function N(){}function T(a,c,b){null!=a.events?a.events[c]!==b&&(null==b||"function"!==typeof b&&"object"!==typeof b?(null!=a.events[c]&&a.dom.removeEventListener(c.slice(2),a.events,!1),a.events[c]=void 0):(null==a.events[c]&&a.dom.addEventListener(c.slice(2),a.events,!1),a.events[c]=b)):null==b||"function"!==typeof b&&"object"!==typeof b||(a.events=new N,a.dom.addEventListener(c.slice(2),a.events,!1),a.events[c]=b)}function K(a,c,b){"function"===typeof a.oninit&&e.call(a.oninit,
c);"function"===typeof a.oncreate&&b.push(e.bind(a.oncreate,c))}function M(a,c,b){"function"===typeof a.onupdate&&b.push(e.bind(a.onupdate,c))}var D=a.document,H=D.createDocumentFragment(),G={svg:"http://www.w3.org/2000/svg",math:"http://www.w3.org/1998/Math/MathML"},F;N.prototype=Object.create(null);N.prototype.handleEvent=function(a){var c=this["on"+a.type];"function"===typeof c?c.call(a.target,a):"function"===typeof c.handleEvent&&c.handleEvent(a);"function"===typeof F&&F.call(a.target,a)};return{render:function(a,
c){if(!a)throw Error("Ensure the DOM element being passed to m.route/m.mount/m.render is not undefined.");var b=[],d=D.activeElement,e=a.namespaceURI;null==a.vnodes&&(a.textContent="");Array.isArray(c)||(c=[c]);q(a,a.vnodes,t.normalizeChildren(c),!1,b,null,"http://www.w3.org/1999/xhtml"===e?void 0:e);a.vnodes=c;null!=d&&D.activeElement!==d&&d.focus();for(d=0;d<b.length;d++)b[d]()},setEventCallback:function(a){return F=a}}},L=function(a,d){function e(a){a=l.indexOf(a);-1<a&&l.splice(a,2)}function h(){if(k)throw Error("Nested m.redraw.sync() call");
k=!0;for(var a=1;a<l.length;a+=2)try{l[a]()}catch(m){"undefined"!==typeof console&&console.error(m)}k=!1}var p=U(a);p.setEventCallback(function(a){!1===a.redraw?a.redraw=void 0:q()});var l=[],k=!1,q=(d||W)(h);q.sync=h;return{subscribe:function(a,d){e(a);l.push(a,d)},unsubscribe:e,redraw:q,render:p.render}}(window);O.setCompletionCallback(L.redraw);x.mount=function(a){return function(d,e){if(null===e)a.render(d,[]),a.unsubscribe(d);else{if(null==e.view&&"function"!==typeof e)throw Error("m.mount(element, component) expects a component, not a vnode");
var h=function(){a.render(d,t(e))};a.subscribe(d,h);h()}}}(L);var aa=B,P=function(a){if(""===a||null==a)return{};"?"===a.charAt(0)&&(a=a.slice(1));a=a.split("&");for(var d={},e={},h=0;h<a.length;h++){var p=a[h].split("="),l=decodeURIComponent(p[0]);p=2===p.length?decodeURIComponent(p[1]):"";"true"===p?p=!0:"false"===p&&(p=!1);var k=l.split(/\]\[?|\[/),q=d;-1<l.indexOf("[")&&k.pop();for(var r=0;r<k.length;r++){l=k[r];var m=k[r+1];m=""==m||!isNaN(parseInt(m,10));var u=r===k.length-1;""===l&&(l=k.slice(0,
r).join(),null==e[l]&&(e[l]=0),l=e[l]++);null==q[l]&&(q[l]=u?p:m?[]:{});q=q[l]}}return d},ba=function(a){function d(d){var e=a.location[d].replace(/(?:%[a-f89][a-f0-9])+/gim,decodeURIComponent);"pathname"===d&&"/"!==e[0]&&(e="/"+e);return e}function e(a){return function(){null==k&&(k=l(function(){k=null;a()}))}}function h(a,d,e){var b=a.indexOf("?"),h=a.indexOf("#"),k=-1<b?b:-1<h?h:a.length;if(-1<b){b=P(a.slice(b+1,-1<h?h:a.length));for(var l in b)d[l]=b[l]}if(-1<h)for(l in d=P(a.slice(h+1)),d)e[l]=
d[l];return a.slice(0,k)}var p="function"===typeof a.history.pushState,l="function"===typeof setImmediate?setImmediate:setTimeout,k,q={prefix:"#!",getPath:function(){switch(q.prefix.charAt(0)){case "#":return d("hash").slice(q.prefix.length);case "?":return d("search").slice(q.prefix.length)+d("hash");default:return d("pathname").slice(q.prefix.length)+d("search")+d("hash")}},setPath:function(d,e,k){var b={},l={};d=h(d,b,l);if(null!=e){for(var m in e)b[m]=e[m];d=d.replace(/:([^\/]+)/g,function(a,
d){delete b[d];return e[d]})}(m=F(b))&&(d+="?"+m);(l=F(l))&&(d+="#"+l);p?(l=k?k.state:null,m=k?k.title:null,a.onpopstate(),k&&k.replace?a.history.replaceState(l,m,q.prefix+d):a.history.pushState(l,m,q.prefix+d)):a.location.href=q.prefix+d},defineRoutes:function(d,k,l){function b(){var b=q.getPath(),e={},m=h(b,e,e),p=a.history.state;if(null!=p)for(var r in p)e[r]=p[r];for(var t in d)if(p=new RegExp("^"+t.replace(/:[^\/]+?\.{3}/g,"(.*?)").replace(/:[^\/]+/g,"([^\\/]+)")+"/?$"),p.test(m)){m.replace(p,
function(){for(var a=t.match(/:[^\/]+/g)||[],h=[].slice.call(arguments,1,-2),l=0;l<a.length;l++)e[a[l].replace(/:|\./g,"")]=decodeURIComponent(h[l]);k(d[t],e,b,t)});return}l(b,e)}p?a.onpopstate=e(b):"#"===q.prefix.charAt(0)&&(a.onhashchange=b);b()}};return q};x.route=function(a,d){var e=ba(a),h=function(a){return a},p,l,k,q,r,m=function(a,m,A){function b(){null!=p&&d.render(a,p(t(l,k.key,k)))}if(null==a)throw Error("Ensure the DOM element that was passed to `m.route` is not undefined");var u=function(){b();
u=d.redraw};d.subscribe(a,b);var x=function(a){if(a!==m)e.setPath(m,null,{replace:!0});else throw Error("Could not resolve default route "+m);};e.defineRoutes(A,function(a,b,d){var e=r=function(a,m){e===r&&(l=null==m||"function"!==typeof m.view&&"function"!==typeof m?"div":m,k=b,q=d,r=null,p=(a.render||h).bind(a),u())};a.view||"function"===typeof a?e({},a):a.onmatch?aa.resolve(a.onmatch(b,d)).then(function(b){e(a,b)},x):e(a,"div")},x)};m.set=function(a,d,h){null!=r&&(h=h||{},h.replace=!0);r=null;
e.setPath(a,d,h)};m.get=function(){return q};m.prefix=function(a){e.prefix=a};var u=function(a,d){d.dom.setAttribute("href",e.prefix+d.attrs.href);d.dom.onclick=function(b){b.ctrlKey||b.metaKey||b.shiftKey||2===b.which||(b.preventDefault(),b.redraw=!1,b=this.getAttribute("href"),0===b.indexOf(e.prefix)&&(b=b.slice(e.prefix.length)),m.set(b,void 0,a))}};m.link=function(a){return null==a.tag?u.bind(u,a):u({},a)};m.param=function(a){return"undefined"!==typeof k&&"undefined"!==typeof a?k[a]:k};return m}(window,
L);x.withAttr=function(a,d,e){return function(h){d.call(e||this,a in h.currentTarget?h.currentTarget[a]:h.currentTarget.getAttribute(a))}};var ca=U(window);x.render=ca.render;x.redraw=L.redraw;x.request=O.request;x.jsonp=O.jsonp;x.parseQueryString=P;x.buildQueryString=F;x.version="1.1.3";x.vnode=t;"undefined"!==typeof module?module.exports=x:window.m=x})();

; (function (w) {

    var app = {
        api: {
            baseUrl: "http://localhost:62218/api/v1"
        },
        helpers: {
            forms: {
                renderInput: function (name, type, label, value) {
                    var childs = [];
                    if (label !== null) {
                        childs.push(m("label", { "for": name }, label));
                    }
                    switch (type) {
                        case "text":
                            childs.push(m("input", { "type": type, "name": name, "placeholder": label, "value": value }));
                            return m("div", { "class": "pure-control-group" }, childs);
                        case "submit":
                        case "button":
                            childs.push(m("button", { "type": type, "name": name, "class": "pure-button pure-button-primary" }, value));
                            return m("div", { "class": "pure-controls" }, childs);
                        default:
                            return undefined;
                    }
                }
            },
            resources: {
                restGetAllFn: function (resourceUrl, callback) {
                    if (typeof (resourceUrl) !== "string") {
                        throw "resourceUrl must be a string";
                    }
                    if (typeof (callback) !== "function") {
                        throw "callback must be a function";
                    }

                    return m.request({
                        method: "GET",
                        url: resourceUrl,
                        config: function (xhr) { xhr.withCredentials = false; }
                    })
                    .then(callback);;
                },
                restGetDetailFn: function (resourceUrl, callback) {
                    if (typeof (resourceUrl) !== "string") {
                        throw "resourceUrl must be a string";
                    }
                    if (typeof (callback) !== "function") {
                        throw "callback must be a function";
                    }

                    return m.request({
                        method: "GET",
                        url: app.api.baseUrl + resourceUrl,
                        config: function (xhr) { xhr.withCredentials = false; }
                    })
                    .then(callback);
                }
            },
            views: {
                listViewFn: function (title, rowsNodes) {
                    return m("div", { "id": "article", "class": "listView" }, [
                        m("h1", { "class": "title" }, title),
                        m("div", { "class": "header" }, "header"),
                        m("div", { "class": "rows" }, rowsNodes),
                        m("div", { "class": "footer" }, "footer")
                    ]);
                }
            }
        }
    };

    w.smoll = app;
})(window);

;(function(w) {
    var app = w.smoll;
    if (app === undefined) {
        throw "initialization order error, smoll is not defined";
    }

    var router = {
        routes: [],
        addRoute: function (path, label, ctor) {
            if (typeof (path) !== "string") {
                throw "path must be a string";
            }
            if (typeof (label) !== "string" && label !== null) {
                throw "label must be a string or null";
            }
            if (typeof(ctor) !== "function") {
                throw "ctor must be a function";
            }

            this.routes.push({ path: path, label: label, ctor: ctor });
        },
        buildHRef: function (path) {
            if (typeof (path) !== "string") {
                throw "path must be a string";
            }

            return "/#!" + path;
        },
        buildNavigation: function () {
            return this.routes.reduce(function (instance, route) {
                if (typeof(route.label) === "string") {
                    instance.push({ href: route.path, label: route.label});
                }

                return instance;
            }, []);
        },
        buildRoutes: function () {
            return this.routes.reduce(function (instance, route) {
                instance[route.path] = route.ctor;

                return instance;
            }, {});
        },
        defaultRoute: function() {
            return this.routes[0].path;
        },
        helpers: {
            isActive: function (path) {
                var matches = 0, cr = m.route.get();
                if (cr) {
                    var actual = cr.split("/");
                    var expected = path.split("/");
                    for (var i = 0; i < expected.length; i++) {
                        if (actual[i].length > 0 && expected[i] === actual[i]) {
                            matches += 1;
                        }
                    }
                }

                return matches;
            }
        }
    };

    app.router = router;
    w.smoll = app;

})(window);


; (function (w) {

    var app = w.smoll;
    if (app === undefined) {
        throw "initialization order error, smoll is not defined";
    }

    var router = app.router;
    if (router === undefined) {
        throw "initialization order error, router is not defined";
    }

    var resource = {
        baseUrl: "/articles"
    };

    function listView() {
        function listRowView(row) {
            var onclick = function () {
                alert("Selected Article with id: " + row.id);
            };
            return m("div", { "class": "row" }, [
                m("span", {}, m("input", { "type": "checkbox", onclick: onclick })),
                m("span", {}, m("a", { "href": router.buildHRef(resource.baseUrl + "/" + row.id) }, row.title))
            ]);
        };

        var resourcesList = [];
        return {
            oninit: function () {
                return app.helpers.resources.restGetAllFn(app.api.baseUrl + resource.baseUrl, function (data) { resourcesList = data; });
            },
            view: function () {
                return app.helpers.views.listViewFn("Articles", resourcesList.map(listRowView));
            }
        };
    };
    router.addRoute(resource.baseUrl, "articles", listView);

    function detailView(args) {
        var resourceId = args.attrs.id;
        var resourceDetails = {};
        return {
            oninit: function () {
                return app.helpers.resources.restGetDetailFn(app.api.baseUrl + resource.baseUrl + "/" + resourceId, function (data) { resourceDetails = data; });
            },
            view: function () {
                return m("div", { "id": "article", "class": "detailView" }, [
                    m("h1", { "class": "title" }, "Article: '" + resourceDetails.title + "'"),
                    m("form", { "action": "javascript:void(0);", "class": "pure-form pure-form-aligned" },
                        m("fieldset", [
                            m("legend", "Edit details"),

                            app.helpers.forms.renderInput("title", "text", "Title", resourceDetails.title),
                            app.helpers.forms.renderInput("subtitle", "text", "Subtitle", resourceDetails.subtitle),
                            app.helpers.forms.renderInput("slug", "text", "Slug", resourceDetails.slug),
                            app.helpers.forms.renderInput("description", "text", "Description", resourceDetails.description),
                            app.helpers.forms.renderInput("abstract", "text", "Abstract", resourceDetails.abstract),
                            app.helpers.forms.renderInput("content", "text", "Content", resourceDetails.content),

                            app.helpers.forms.renderInput("status", "text", "Status", resourceDetails.status),
                            app.helpers.forms.renderInput("publishDate", "text", "Publish date", resourceDetails.publishDate),
                            app.helpers.forms.renderInput("expireDate", "text", "Expire date", resourceDetails.expireDate),

                            app.helpers.forms.renderInput("createdBy", "text", "Created by", resourceDetails.createdBy),
                            app.helpers.forms.renderInput("createdDate", "text", "Created date", resourceDetails.createdDate),
                            app.helpers.forms.renderInput("modifiedBy", "text", "Modified by", resourceDetails.modifiedBy),
                            app.helpers.forms.renderInput("modifiedDate", "text", "Modified date", resourceDetails.modifiedDate),

                            app.helpers.forms.renderInput("update", "button", null, "update")
                        ]))
                ]);
            }
        };
    };
    router.addRoute(resource.baseUrl + "/:id", null, detailView);

})(window);


; (function (w) {
    var app = w.smoll;
    if (app === undefined) {
        throw "initialization order error, smoll is not defined";
    }

    var router = app.router;
    if (router === undefined) {
        throw "initialization order error, router is not defined";
    }

    var resource = {
        baseUrl: "/polls"
    };

    function listView() {
        function listRowView(row) {
            var onclick = function () {
                alert("Selected Poll with id: "+row.id);
            };
            return m("div", { "class": "row" }, [
                m("span", {}, m("input", { "type": "checkbox", onclick: onclick })),
                m("span", {}, m("a", { "href": router.buildHRef(resource.baseUrl + "/" + row.id) }, row.title))
            ]);
        };

        var resourcesList = [];
        return {
            oninit: function () {
                m.request({
                    method: "GET",
                    url: app.api.baseUrl + resource.baseUrl,
                    config: function (xhr) { xhr.withCredentials = false; }
                })
                    .then(function (data) {
                        resourcesList = data;
                    });
            },
            view: function () {
                return m("div", { "id": "poll", "class": "listView" }, [
                    m("h1", { "class": "title" }, "Polls"),
                    m("div", { "class": "header" }, "header"),
                    m("div", { "class": "rows" }, resourcesList.map(listRowView)),
                    m("div", { "class": "footer" }, "footer")
                ]);
            }
        };
    };
    router.addRoute(resource.baseUrl, "polls", listView);

    function detailView(args) {
        var resourceId = args.attrs.id;
        var resourceDetails = {};
        return {
            oninit: function () {
                m.request({
                    method: "GET",
                    url: app.api.baseUrl + resource.baseUrl + resourceId,
                    config: function (xhr) { xhr.withCredentials = false; }
                })
                    .then(function (data) {
                        resourceDetails = data;
                    });
            },
            view: function () {
                return m("div", { "id": "poll", "class": "detailView" }, [
                    m("h1", { "class": "title" }, "Poll: '" + resourceDetails.title + "'"),
                    m("form", { "action": "javascript:void(0);", "class": "pure-form pure-form-aligned" },
                        m("fieldset", [
                            m("legend", "Edit details"),

                            app.helpers.forms.renderInput("title", "text", "Title", resourceDetails.title),
                            app.helpers.forms.renderInput("description", "text", "Description", resourceDetails.description),
                            app.helpers.forms.renderInput("imageUrl", "text", "ImageUrl", resourceDetails.imageUrl),
                            //app.helpers.forms.renderInput("options", "text", "Options", resourceDetails.options),

                            app.helpers.forms.renderInput("publishDate", "text", "Publish date", resourceDetails.publishDate),
                            app.helpers.forms.renderInput("expireDate", "text", "Expire date", resourceDetails.expireDate),
                            app.helpers.forms.renderInput("status", "text", "Status", resourceDetails.status),

                            app.helpers.forms.renderInput("createdBy", "text", "Created by", resourceDetails.createdBy),
                            app.helpers.forms.renderInput("createdDate", "text", "Created date", resourceDetails.createdDate),
                            app.helpers.forms.renderInput("modifiedBy", "text", "Modified by", resourceDetails.modifiedBy),
                            app.helpers.forms.renderInput("modifiedDate", "text", "Modified date", resourceDetails.modifiedDate),

                            app.helpers.forms.renderInput("update", "button", null, "update")
                        ]))
                ]);
            }
        };
    };
    router.addRoute(resource.baseUrl + "/:id", null, detailView);

})(window);


; (function (w) {

    var app = w.smoll;
    if (app === undefined) {
        throw "initialization order error, smoll is not defined";
    }

    var router = app.router;
    if (router === undefined) {
        throw "initialization order error, router is not defined";
    }

    var resource = {
        baseUrl: "/proposals"
    };

    function listView() {
        function listRowView(row) {
            var onclick = function () {
                alert("Selected Proposal with id: " + row.id);
            };
            return m("div", { "class": "row" }, [
                m("span", {}, m("input", { "type": "checkbox", onclick: onclick })),
                m("span", {}, m("a", { "href": router.buildHRef(resource.baseUrl+"/" + row.id) }, row.title))
            ]);
        };

        var resourcesList = [];
        return {
            oninit: function () {
                m.request({
                    method: "GET",
                    url: app.api.baseUrl + resource.baseUrl,
                    config: function (xhr) { xhr.withCredentials = false; }
                })
                    .then(function (data) {
                        resourcesList = data;
                    });
            },
            view: function () {
                return m("div", { "id": "proposal", "class": "listView" }, [
                    m("h1", { "class": "title" }, "Proposals"),
                    m("div", { "class": "header" }, "header"),
                    m("div", { "class": "rows" }, resourcesList.map(listRowView)),
                    m("div", { "class": "footer" }, "footer")
                ]);
            }
        };
    };
    router.addRoute(resource.baseUrl, "proposals", listView);

    function detailView(args) {
        var resourceId = args.attrs.id;
        var resourceDetails = {};
        return {
            oninit: function () {
                m.request({
                    method: "GET",
                    url: app.api.baseUrl + resource.baseUrl +"/" + resourceId,
                    config: function (xhr) { xhr.withCredentials = false; }
                })
                    .then(function (data) {
                        resourceDetails = data;
                    });
            },
            view: function () {
                return m("div", { "id": "proposal", "class": "detailView" }, [
                    m("h1", { "class": "title" }, "Proposal: '" + resourceDetails.title + "'"),
                    m("form", { "action": "javascript:void(0);", "class": "pure-form pure-form-aligned" },
                        m("fieldset", [
                            m("legend", "Edit details"),

                            app.helpers.forms.renderInput("title", "text", "Title", resourceDetails.title),
                            app.helpers.forms.renderInput("subtitle", "text", "Subtitle", resourceDetails.subtitle),
                            app.helpers.forms.renderInput("slug", "text", "Slug", resourceDetails.slug),
                            app.helpers.forms.renderInput("description", "text", "Description", resourceDetails.description),
                            app.helpers.forms.renderInput("abstract", "text", "Abstract", resourceDetails.abstract),
                            app.helpers.forms.renderInput("content", "text", "Content", resourceDetails.content),

                            app.helpers.forms.renderInput("status", "text", "Status", resourceDetails.status),
                            app.helpers.forms.renderInput("publishDate", "text", "Publish date", resourceDetails.publishDate),
                            app.helpers.forms.renderInput("expireDate", "text", "Expire date", resourceDetails.expireDate),

                            app.helpers.forms.renderInput("createdBy", "text", "Created by", resourceDetails.createdBy),
                            app.helpers.forms.renderInput("createdDate", "text", "Created date", resourceDetails.createdDate),
                            app.helpers.forms.renderInput("modifiedBy", "text", "Modified by", resourceDetails.modifiedBy),
                            app.helpers.forms.renderInput("modifiedDate", "text", "Modified date", resourceDetails.modifiedDate),

                            app.helpers.forms.renderInput("update", "button", null, "update")
                        ]))
                ]);
            }
        };
    };
    router.addRoute(resource.baseUrl +"/:id", null, detailView);
})(window);


; (function (w) {
    var app = w.smoll;
    if (app === undefined) {
        throw "initialization order error, smoll is not defined";
    }

    var router = app.router;
    if (router === undefined) {
        throw "initialization order error, router is not defined";
    }

    var resource = {
        baseUrl: "/queues"
    };

    function listView() {
        function listRowView(row) {
            var onclick = function () {
                alert("Selected Queue with id: "+row.id);
            };
            return m("div", { "class": "row" }, [
                m("span", {}, m("input", { "type": "checkbox", onclick: onclick })),
                m("span", {}, m("a", { "href": router.buildHRef(resource.baseUrl + "/" + row.id) }, row.title))
            ]);
        };

        var resourcesList = [];
        return {
            oninit: function () {
                m.request({
                    method: "GET",
                    url: app.api.baseUrl + resource.baseUrl,
                    config: function (xhr) { xhr.withCredentials = false; }
                })
                    .then(function (data) {
                        resourcesList = data;
                    });
            },
            view: function () {
                return m("div", { "id": "queue", "class": "listView" }, [
                    m("h1", { "class": "title" }, "Queues"),
                    m("div", { "class": "header" }, "header"),
                    m("div", { "class": "rows" }, resourcesList.map(listRowView)),
                    m("div", { "class": "footer" }, "footer")
                ]);
            }
        };
    };
    router.addRoute(resource.baseUrl, "queues", listView);

    function detailView(args) {
        var resourceId = args.attrs.id;
        var resourceDetails = {};
        return {
            oninit: function () {
                m.request({
                    method: "GET",
                    url: app.api.baseUrl + resource.baseUrl + resourceId,
                    config: function (xhr) { xhr.withCredentials = false; }
                })
                    .then(function (data) {
                        resourceDetails = data;
                    });
            },
            view: function () {
                return m("div", { "id": "queue", "class": "detailView" }, [
                    m("h1", { "class": "title" }, "Queue: '" + resourceDetails.title + "'"),
                    m("form", { "action": "javascript:void(0);", "class": "pure-form pure-form-aligned" },
                        m("fieldset", [
                            m("legend", "Edit details"),

                            app.helpers.forms.renderInput("title", "text", "Title", resourceDetails.title),
                            app.helpers.forms.renderInput("description", "text", "Description", resourceDetails.description),
                            //app.helpers.forms.renderInput("options", "text", "Options", resourceDetails.options),

                            app.helpers.forms.renderInput("publishDate", "text", "Publish date", resourceDetails.publishDate),
                            app.helpers.forms.renderInput("expireDate", "text", "Expire date", resourceDetails.expireDate),
                            app.helpers.forms.renderInput("status", "text", "Status", resourceDetails.status),

                            app.helpers.forms.renderInput("createdBy", "text", "Created by", resourceDetails.createdBy),
                            app.helpers.forms.renderInput("createdDate", "text", "Created date", resourceDetails.createdDate),
                            app.helpers.forms.renderInput("modifiedBy", "text", "Modified by", resourceDetails.modifiedBy),
                            app.helpers.forms.renderInput("modifiedDate", "text", "Modified date", resourceDetails.modifiedDate),

                            app.helpers.forms.renderInput("update", "button", null, "update")
                        ]))
                ]);
            }
        };
    };
    router.addRoute(resource.baseUrl + "/:id", null, detailView);

})(window);


; (function (w) {
    var app = w.smoll;
    if (app === undefined) {
        throw "initialization order error, smoll is not defined";
    }

    var router = app.router;
    if (router === undefined) {
        throw "initialization order error, router is not defined";
    }

    var resource = {
        baseUrl: "/suggestions"
    };

    function listView() {
        function listRowView(row) {
            var onclick = function () {
                alert("Selected Suggestion with id: "+row.id);
            };
            return m("div", { "class": "row" }, [
                m("span", {}, m("input", { "type": "checkbox", onclick: onclick })),
                m("span", {}, m("a", { "href": router.buildHRef(resource.baseUrl + "/" + row.id) }, row.title))
            ]);
        };

        var resourcesList = [];
        return {
            oninit: function () {
                m.request({
                    method: "GET",
                    url: app.api.baseUrl + resource.baseUrl,
                    config: function (xhr) { xhr.withCredentials = false; }
                })
                    .then(function (data) {
                        resourcesList = data;
                    });
            },
            view: function () {
                return m("div", { "id": "suggestion", "class": "listView" }, [
                    m("h1", { "class": "title" }, "Suggestions"),
                    m("div", { "class": "header" }, "header"),
                    m("div", { "class": "rows" }, resourcesList.map(listRowView)),
                    m("div", { "class": "footer" }, "footer")
                ]);
            }
        };
    };
    router.addRoute(resource.baseUrl, "suggestions", listView);

    function detailView(args) {
        var resourceId = args.attrs.id;
        var resourceDetails = {};
        return {
            oninit: function () {
                m.request({
                    method: "GET",
                    url: app.api.baseUrl + resource.baseUrl + resourceId,
                    config: function (xhr) { xhr.withCredentials = false; }
                })
                    .then(function (data) {
                        resourceDetails = data;
                    });
            },
            view: function () {
                return m("div", { "id": "suggestion", "class": "detailView" }, [
                    m("h1", { "class": "title" }, "Suggestion: '" + resourceDetails.title + "'"),
                    m("form", { "action": "javascript:void(0);", "class": "pure-form pure-form-aligned" },
                        m("fieldset", [
                            m("legend", "Edit details"),

                            app.helpers.forms.renderInput("title", "text", "Title", resourceDetails.title),
                            app.helpers.forms.renderInput("description", "text", "Description", resourceDetails.description),
                            //app.helpers.forms.renderInput("options", "text", "Options", resourceDetails.options),

                            app.helpers.forms.renderInput("publishDate", "text", "Publish date", resourceDetails.publishDate),
                            app.helpers.forms.renderInput("expireDate", "text", "Expire date", resourceDetails.expireDate),
                            app.helpers.forms.renderInput("status", "text", "Status", resourceDetails.status),

                            app.helpers.forms.renderInput("createdBy", "text", "Created by", resourceDetails.createdBy),
                            app.helpers.forms.renderInput("createdDate", "text", "Created date", resourceDetails.createdDate),
                            app.helpers.forms.renderInput("modifiedBy", "text", "Modified by", resourceDetails.modifiedBy),
                            app.helpers.forms.renderInput("modifiedDate", "text", "Modified date", resourceDetails.modifiedDate),

                            app.helpers.forms.renderInput("update", "button", null, "update")
                        ]))
                ]);
            }
        };
    };
    router.addRoute(resource.baseUrl + "/:id", null, detailView);

})(window);


; (function (w, m) {

    var app = w.smoll;
    if (typeof(app) !== "object" || app === null) {
        throw "initialization order error, smoll is not defined";
    }

    var router = app.router;
    if (typeof(router) !== "object" || router === null) {
        throw "initialization order error, router is not defined";
    }

    var navigationItemView = function (item) {
        return m("a",
            {
                href: router.buildHRef(item.href),
                "class": "pure-menu-item resource" + (router.helpers.isActive(item.href) >= 1 ? " active" : "")
            },
            item.label);
        };

    var navitationItems = router.buildNavigation();
    var layout = {
        view: function () {
            return m("div", { "class": "pure-g"},
                m("div", { "id": "app", "class": "pure-u-1" }, [
                    m("nav", { "id": "navigation", "class": "pure-menu pure-menu-horizontal" },
                        navitationItems.map(navigationItemView)),
                    m("div", { id: "main" }, "placeholder")]));
        }
    };

    m.mount(document.body, layout);
    m.route(document.getElementById("main"), router.defaultRoute(), router.buildRoutes());

})(window, m);