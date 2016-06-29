function FastClick(t,e){"use strict";function n(t,e){return function(){return t.apply(e,arguments)}}var i;if(e=e||{},this.trackingClick=!1,this.trackingClickStart=0,this.targetElement=null,this.touchStartX=0,this.touchStartY=0,this.lastTouchIdentifier=0,this.touchBoundary=e.touchBoundary||10,this.layer=t,this.tapDelay=e.tapDelay||200,!FastClick.notNeeded(t)){for(var o=["onMouse","onClick","onTouchStart","onTouchMove","onTouchEnd","onTouchCancel"],r=this,s=0,a=o.length;a>s;s++)r[o[s]]=n(r[o[s]],r);deviceIsAndroid&&(t.addEventListener("mouseover",this.onMouse,!0),t.addEventListener("mousedown",this.onMouse,!0),t.addEventListener("mouseup",this.onMouse,!0)),t.addEventListener("click",this.onClick,!0),t.addEventListener("touchstart",this.onTouchStart,!1),t.addEventListener("touchmove",this.onTouchMove,!1),t.addEventListener("touchend",this.onTouchEnd,!1),t.addEventListener("touchcancel",this.onTouchCancel,!1),Event.prototype.stopImmediatePropagation||(t.removeEventListener=function(e,n,i){var o=Node.prototype.removeEventListener;"click"===e?o.call(t,e,n.hijacked||n,i):o.call(t,e,n,i)},t.addEventListener=function(e,n,i){var o=Node.prototype.addEventListener;"click"===e?o.call(t,e,n.hijacked||(n.hijacked=function(t){t.propagationStopped||n(t)}),i):o.call(t,e,n,i)}),"function"==typeof t.onclick&&(i=t.onclick,t.addEventListener("click",function(t){i(t)},!1),t.onclick=null)}}define("domReady",[],function(){"use strict";function t(e){return e(n),t}var e="undefined"!=typeof window&&window.document,n=e?document:null;return t.version="2.0.1-dummy",t.load=function(e,n,i,o){o.isBuild?i(null):t(i)},t}),define("has",["domReady!"],function(t){function e(){return this._mq=n(),this}function n(){var e=t.getElementById("__mqtest")||i();return e&&window.getComputedStyle&&"absolute"===window.getComputedStyle(e).position?!0:!1}function i(){var e,n="@media all { #__mqtest { position: absolute; } }",i=t.head||t.getElementsByTagName("head")[0],o=t.createElement("style"),r=t.createElement("div");return o.type="text/css",o.styleSheet?o.styleSheet.cssText=n:o.appendChild(t.createTextNode(n)),i.appendChild(o),r.setAttribute("id","__mqtest"),t.body.appendChild(r),e=t.getElementById("__mqtest")}return e.prototype.touch=function(){return"ontouchstart"in window||navigator.maxTouchPoints||navigator.msMaxTouchPoints},e.prototype.mm=function(){return"undefined"!=typeof window.matchMedia||"undefined"!=typeof window.msMatchMedia},e.prototype.dfp=function(){return"undefined"!=typeof Drupal.settings.galleryAdv.config.dfp},e.prototype.mq=function(){return this._mq},new e}),define("provision",["module"],function(t,e){var n={version:"0.1.0"};return n.load=function(t,e,n,i){if(i.isBuild){var o=this.shouldBuild(t,i);o?e([t],function(t){n(t)}):n()}else{var r=this.test(t,i);r?e([t],function(t){n(t)}):n()}},n.test=function(t,n){var i=!1;if(n.provision!==e&&n.provision[t]!==e&&n.provision[t].test!==e){var o=n.provision[t].test;i="function"==typeof o?o.apply(this):!!o}return i},n.shouldBuild=function(t,n){return n.provision!==e&&n.provision[t]!==e&&n.provision[t].build!==e?n.provision[t].build:!0},n}),define("support",[],function(){"use strict";var t={propertyDescriptors:function(){var t,e;if("function"!=typeof Object.defineProperty||"function"!=typeof Object.defineProperties)return!1;try{return e={},Object.defineProperty(e,"foo",{value:"bar"}),"bar"===e.foo}catch(n){return t=n,!1}}()};return t}),define("utils",["jquery","support"],function(t,e){function n(){return this}return n.prototype.getKeyByValue=function(t,e){for(var n in t)if(t.hasOwnProperty(n)&&t[n]===e)return n},n.prototype.isEmpty=function(t,e){for(e in t)return!1;return!0},n.prototype.each=function(t,e){var n,i=0,o=t.length;for(i;o>i&&(n=e(t[i],i),n!==!1);i++);},n.prototype.isArray=function(t){return"[object Array]"===Object.prototype.toString.apply(t)},n.prototype.isFunction=function(t){return"function"==typeof t},n.prototype.prepareEvents=function(){for(var e=t.event.props,n=e.length,i=[];n--;){var o=e[n];"layerX"!==o&&"layerY"!==o&&i.push(o)}t.event.props=i},n.prototype.readonly=function(){var t,n=[].slice;return e.propertyDescriptors?(t={writable:!1,enumerable:!0,configurable:!1},function(){var e,i,o,r,s;for(e=arguments[0],o=2<=arguments.length?n.call(arguments,1):[],r=0,s=o.length;s>r;r++)i=o[r],t.value=e[i],Object.defineProperty(e,i,t);return!0}):function(){return!1}},Object.keys||(Object.keys=function(t){var e,n=[];for(e in t)t.hasOwnProperty(e)&&n.push(e);return n}),Object.create||(Object.create=function(){function t(){}return function(e){if(1!=arguments.length)throw new Error("Object.create implementation only accepts one parameter.");return t.prototype=e,new t}}()),Array.prototype.indexOf||(Array.prototype.indexOf=function(t){if(null===this)throw new TypeError;var e=Object(this),n=e.length>>>0;if(0===n)return-1;var i=0;if(arguments.length>0&&(i=Number(arguments[1]),i!=i?i=0:0!==i&&i!=1/0&&i!=-(1/0)&&(i=(i>0||-1)*Math.floor(Math.abs(i)))),i>=n)return-1;for(var o=i>=0?i:Math.max(n-Math.abs(i),0);n>o;o++)if(o in e&&e[o]===t)return o;return-1}),function(){for(var t=0,e=["ms","moz","webkit","o"],n=0;n<e.length&&!window.requestAnimationFrame;++n)window.requestAnimationFrame=window[e[n]+"RequestAnimationFrame"],window.cancelAnimationFrame=window[e[n]+"CancelAnimationFrame"]||window[e[n]+"CancelRequestAnimationFrame"];window.requestAnimationFrame||(window.requestAnimationFrame=function(e,n){var i=(new Date).getTime(),o=Math.max(0,16-(i-t)),r=window.setTimeout(function(){e(i+o)},o);return t=i+o,r}),window.cancelAnimationFrame||(window.cancelAnimationFrame=function(t){clearTimeout(t)})}(),Function.prototype.bind||(Function.prototype.bind=function(t){if("function"!=typeof this)throw new TypeError("Function.prototype.bind - what is trying to be bound is not callable");var e=Array.prototype.slice.call(arguments,1),n=this,i=function(){},o=function(){return n.apply(this instanceof i?this:t||window,e.concat(Array.prototype.slice.call(arguments)))};return i.prototype=this.prototype,o.prototype=new i,o}),new n});var deviceIsAndroid=navigator.userAgent.indexOf("Android")>0,deviceIsIOS=/iP(ad|hone|od)/.test(navigator.userAgent),deviceIsIOS4=deviceIsIOS&&/OS 4_\d(_\d)?/.test(navigator.userAgent),deviceIsIOSWithBadTarget=deviceIsIOS&&/OS ([6-9]|\d{2})_\d/.test(navigator.userAgent);FastClick.prototype.needsClick=function(t){"use strict";switch(t.nodeName.toLowerCase()){case"button":case"select":case"textarea":if(t.disabled)return!0;break;case"input":if(deviceIsIOS&&"file"===t.type||t.disabled)return!0;break;case"label":case"video":return!0}return/\bneedsclick\b/.test(t.className)},FastClick.prototype.needsFocus=function(t){"use strict";switch(t.nodeName.toLowerCase()){case"textarea":return!0;case"select":return!deviceIsAndroid;case"input":switch(t.type){case"button":case"checkbox":case"file":case"image":case"radio":case"submit":return!1}return!t.disabled&&!t.readOnly;default:return/\bneedsfocus\b/.test(t.className)}},FastClick.prototype.sendClick=function(t,e){"use strict";var n,i;document.activeElement&&document.activeElement!==t&&document.activeElement.blur(),i=e.changedTouches[0],n=document.createEvent("MouseEvents"),n.initMouseEvent(this.determineEventType(t),!0,!0,window,1,i.screenX,i.screenY,i.clientX,i.clientY,!1,!1,!1,!1,0,null),n.forwardedTouchEvent=!0,t.dispatchEvent(n)},FastClick.prototype.determineEventType=function(t){"use strict";return deviceIsAndroid&&"select"===t.tagName.toLowerCase()?"mousedown":"click"},FastClick.prototype.focus=function(t){"use strict";var e;deviceIsIOS&&t.setSelectionRange&&0!==t.type.indexOf("date")&&"time"!==t.type?(e=t.value.length,t.setSelectionRange(e,e)):t.focus()},FastClick.prototype.updateScrollParent=function(t){"use strict";var e,n;if(e=t.fastClickScrollParent,!e||!e.contains(t)){n=t;do{if(n.scrollHeight>n.offsetHeight){e=n,t.fastClickScrollParent=n;break}n=n.parentElement}while(n)}e&&(e.fastClickLastScrollTop=e.scrollTop)},FastClick.prototype.getTargetElementFromEventTarget=function(t){"use strict";return t.nodeType===Node.TEXT_NODE?t.parentNode:t},FastClick.prototype.onTouchStart=function(t){"use strict";var e,n,i;if(t.targetTouches.length>1)return!0;if(e=this.getTargetElementFromEventTarget(t.target),n=t.targetTouches[0],deviceIsIOS){if(i=window.getSelection(),i.rangeCount&&!i.isCollapsed)return!0;if(!deviceIsIOS4){if(n.identifier===this.lastTouchIdentifier)return t.preventDefault(),!1;this.lastTouchIdentifier=n.identifier,this.updateScrollParent(e)}}return this.trackingClick=!0,this.trackingClickStart=t.timeStamp,this.targetElement=e,this.touchStartX=n.pageX,this.touchStartY=n.pageY,t.timeStamp-this.lastClickTime<this.tapDelay&&t.preventDefault(),!0},FastClick.prototype.touchHasMoved=function(t){"use strict";var e=t.changedTouches[0],n=this.touchBoundary;return Math.abs(e.pageX-this.touchStartX)>n||Math.abs(e.pageY-this.touchStartY)>n?!0:!1},FastClick.prototype.onTouchMove=function(t){"use strict";return this.trackingClick?((this.targetElement!==this.getTargetElementFromEventTarget(t.target)||this.touchHasMoved(t))&&(this.trackingClick=!1,this.targetElement=null),!0):!0},FastClick.prototype.findControl=function(t){"use strict";return void 0!==t.control?t.control:t.htmlFor?document.getElementById(t.htmlFor):t.querySelector("button, input:not([type=hidden]), keygen, meter, output, progress, select, textarea")},FastClick.prototype.onTouchEnd=function(t){"use strict";var e,n,i,o,r,s=this.targetElement;if(!this.trackingClick)return!0;if(t.timeStamp-this.lastClickTime<this.tapDelay)return this.cancelNextClick=!0,!0;if(this.cancelNextClick=!1,this.lastClickTime=t.timeStamp,n=this.trackingClickStart,this.trackingClick=!1,this.trackingClickStart=0,deviceIsIOSWithBadTarget&&(r=t.changedTouches[0],s=document.elementFromPoint(r.pageX-window.pageXOffset,r.pageY-window.pageYOffset)||s,s.fastClickScrollParent=this.targetElement.fastClickScrollParent),i=s.tagName.toLowerCase(),"label"===i){if(e=this.findControl(s)){if(this.focus(s),deviceIsAndroid)return!1;s=e}}else if(this.needsFocus(s))return t.timeStamp-n>100||deviceIsIOS&&window.top!==window&&"input"===i?(this.targetElement=null,!1):(this.focus(s),this.sendClick(s,t),deviceIsIOS&&"select"===i||(this.targetElement=null,t.preventDefault()),!1);return deviceIsIOS&&!deviceIsIOS4&&(o=s.fastClickScrollParent,o&&o.fastClickLastScrollTop!==o.scrollTop)?!0:(this.needsClick(s)||(t.preventDefault(),this.sendClick(s,t)),!1)},FastClick.prototype.onTouchCancel=function(){"use strict";this.trackingClick=!1,this.targetElement=null},FastClick.prototype.onMouse=function(t){"use strict";return this.targetElement?t.forwardedTouchEvent?!0:t.cancelable&&(!this.needsClick(this.targetElement)||this.cancelNextClick)?(t.stopImmediatePropagation?t.stopImmediatePropagation():t.propagationStopped=!0,t.stopPropagation(),t.preventDefault(),!1):!0:!0},FastClick.prototype.onClick=function(t){"use strict";var e;return this.trackingClick?(this.targetElement=null,this.trackingClick=!1,!0):"submit"===t.target.type&&0===t.detail?!0:(e=this.onMouse(t),e||(this.targetElement=null),e)},FastClick.prototype.destroy=function(){"use strict";var t=this.layer;deviceIsAndroid&&(t.removeEventListener("mouseover",this.onMouse,!0),t.removeEventListener("mousedown",this.onMouse,!0),t.removeEventListener("mouseup",this.onMouse,!0)),t.removeEventListener("click",this.onClick,!0),t.removeEventListener("touchstart",this.onTouchStart,!1),t.removeEventListener("touchmove",this.onTouchMove,!1),t.removeEventListener("touchend",this.onTouchEnd,!1),t.removeEventListener("touchcancel",this.onTouchCancel,!1)},FastClick.notNeeded=function(t){"use strict";var e,n;if("undefined"==typeof window.ontouchstart)return!0;if(n=+(/Chrome\/([0-9]+)/.exec(navigator.userAgent)||[,0])[1]){if(!deviceIsAndroid)return!0;if(e=document.querySelector("meta[name=viewport]")){if(-1!==e.content.indexOf("user-scalable=no"))return!0;if(n>31&&window.innerWidth<=window.screen.width)return!0}}return"none"===t.style.msTouchAction?!0:!1},FastClick.attach=function(t,e){"use strict";return new FastClick(t,e)},"undefined"!=typeof define&&define.amd?define("fastclick",[],function(){"use strict";return FastClick}):"undefined"!=typeof module&&module.exports?(module.exports=FastClick.attach,module.exports.FastClick=FastClick):window.FastClick=FastClick,define("setup",["domReady!","drupal","utils","has","provision!fastclick"],function(t,e,n,i,o){"use strict";var r={},s=requirejs.s.contexts._.config.setup||{};return n.isEmpty(s)?(r={mq:i.mq(),mm:i.mm(),touch:i.touch(),fastclick:!1,savvior:!1,snap:!1},o&&(o.attach(t.body),r.fastclick=!0)):r=s,r}),function(t,e,n){var i=e.matchMedia;"undefined"!=typeof module&&module.exports?module.exports=n(i):"function"==typeof define&&define.amd?define("enquire",[],function(){return e[t]=n(i)}):e[t]=n(i)}("enquire",this,function(t){"use strict";function e(t,e){var n,i=0,o=t.length;for(i;o>i&&(n=e(t[i],i),n!==!1);i++);}function n(t){return"[object Array]"===Object.prototype.toString.apply(t)}function i(t){return"function"==typeof t}function o(t){this.options=t,!t.deferSetup&&this.setup()}function r(e,n){this.query=e,this.isUnconditional=n,this.handlers=[],this.mql=t(e);var i=this;this.listener=function(t){i.mql=t,i.assess()},this.mql.addListener(this.listener)}function s(){if(!t)throw new Error("matchMedia not present, legacy browsers require a polyfill");this.queries={},this.browserIsIncapable=!t("only all").matches}return o.prototype={setup:function(){this.options.setup&&this.options.setup(),this.initialised=!0},on:function(){!this.initialised&&this.setup(),this.options.match&&this.options.match()},off:function(){this.options.unmatch&&this.options.unmatch()},destroy:function(){this.options.destroy?this.options.destroy():this.off()},equals:function(t){return this.options===t||this.options.match===t}},r.prototype={addHandler:function(t){var e=new o(t);this.handlers.push(e),this.matches()&&e.on()},removeHandler:function(t){var n=this.handlers;e(n,function(e,i){return e.equals(t)?(e.destroy(),!n.splice(i,1)):void 0})},matches:function(){return this.mql.matches||this.isUnconditional},clear:function(){e(this.handlers,function(t){t.destroy()}),this.mql.removeListener(this.listener),this.handlers.length=0},assess:function(){var t=this.matches()?"on":"off";e(this.handlers,function(e){e[t]()})}},s.prototype={register:function(t,o,s){var a=this.queries,c=s&&this.browserIsIncapable;return a[t]||(a[t]=new r(t,c)),i(o)&&(o={match:o}),n(o)||(o=[o]),e(o,function(e){a[t].addHandler(e)}),this},unregister:function(t,e){var n=this.queries[t];return n&&(e?n.removeHandler(e):(n.clear(),delete this.queries[t])),this}},new s}),define("dfp/gptrefresh",["googletag","jquery","drupal","setup","utils","provision!enquire","domReady!"],function(t,e,n,i,o,r,s,a){"use strict";var c=n.settings.dennisJs,u={slots:{},slotNamesLoaded:[],queue:[],queuedNames:[],dispatcher:"self",initialLoad:!0};return u.register=function(){var t=this;if(i.mq)for(var e in c.breakpoints)"undefined"!=typeof t.slotNames[e]&&r.register(c.breakpoints[e],{deferSetup:!0,setup:function(e){return function(){t.getSlots(e)}}(e),match:function(e){return function(){t.refresh(e)}}(e)});else{var n=c.useFixedIe8?"wide":"mobile";t.getSlots(n),t.refresh(n)}},u.getSlots=function(e){var n=this;if(n.slotNames[e]!==a)for(var i=0,o=n.slotNames[e].length;o>i;i++){var r=n.slotNames[e][i];t.slots[r]===a&&delete n.slotNames[e][i]}},u.refresh=function(e){var n=this;if(n.slotNames[e]!==a){this.currentViewport=e;for(var i=0,o=n.slotNames[e].length;o>i;i++){var r=n.slotNames[e][i];t.slots[r]!==a&&-1===n.slotNamesLoaded.indexOf(r)&&(n.queue.push(t.slots[r]),n.queuedNames.push(r),n.slotNamesLoaded.push(r))}}"self"===n.dispatcher&&n.dispatch()},u.dispatch=function(){if(!o.isEmpty(this.queue)){for(var e=this,n=[],i=e.queuedNames.length;i-- >0;)-1===n.indexOf(e.queuedNames[i])?n.push(e.queuedNames[i]):e.queue.splice(i,1);u.initialLoad?u.initialLoad=!1:t.cmd.push(function(){t.pubads().refresh(e.queue)}),e.queue=[],e.queuedNames=[]}},u.init=function(){var n=this;n.slotNames=c.gptrefresh.slots,i.savvior&&i.mq?(i.savvior&&(n.dispatcher="savvior",n.register()),e(window).bind("savvior:match",function(i){var r=e(i.originalEvent.detail.element),s=o.getKeyByValue(c.breakpoints,i.originalEvent.detail.query);s!==a&&r.length>0&&i.originalEvent.detail.from!==i.originalEvent.detail.to&&r.find(".dfp-tag-wrapper > .dfp-tag-wrapper").each(function(i,o){var r=e(o).attr("id").replace("dfp-ad-","");n.slotNames[s].indexOf(r)>-1&&(c.narrowStacked.adRefresh?(n.queue.push(t.slots[r]),n.queuedNames.push(r)):e(o).hide())}),"savvior"===n.dispatcher&&n.dispatch()})):n.register()},u}),define("theme/fbe",["domReady!","jquery","drupal","provision!enquire"],function(t,e,n,i){"use strict";var o=n.settings.dennisJs,r={config:{clickable:"#footer .block-boxes .block-title, #footer .block-menu .block-title"}};return r.add=function(){this.config.clickable.bind("click",function(){e(this).toggleClass("open").siblings(".content").toggleClass("invisible")}),this.config.clickable.siblings(".content").addClass("invisible")},r.remove=function(){this.config.clickable.unbind("click",this.add()),this.config.clickable.removeClass("open").siblings(".content").removeClass("invisible")},r.init=function(){i.register(o.breakpoints.mobile,this.enquireCallback)},r.destroy=function(){this.remove(),i.unregister(o.breakpoints.mobile,this.enquireCallback)},r.enquireCallback={deferSetup:!0,setup:function(){for(var t in r.config)r.config[t]=e(r.config[t])},match:function(){r.add()},unmatch:function(){r.remove()}},{init:function(){return!(!i||!r.init())},destroy:function(){return!(!i||!r.destroy())}}}),define("theme/dropdowntouch",["domReady!","jquery","drupal","provision!enquire","utils"],function(t,e,n,i,o){"use strict";var r=n.settings.dennisJs,s={initDone:!1,config:{mainMenu:"#site-menus .block-toggled-menu",parentMenuItem:"#block-system-main-menu li.expanded > em",parentMenuContainer:"#block-system-main-menu li.expanded"}};return r.useSnap&&(s.config.parentMenuItem="#snap-drawers ".concat(s.config.parentMenuItem)),s.submenuTouch=function(){this.config.parentMenuContainer.bind("click",function(t){var n=e(this);t.stopPropagation(),n.toggleClass("hover"),n.hasClass("hover")&&t.preventDefault()})},s.submenuToggle=function(){this.config.parentMenuItem.bind("click",function(t){t.stopPropagation();var n=e(this).siblings("ul.menu");e(this).parent("li").toggleClass("open"),n.toggleClass("open"),n.hasClass("open")&&t.preventDefault()})},s.enquireDropDownMobile={match:function(){s.submenuToggle()},unmatch:function(){s.config.parentMenuContainer.unbind("click",s.submenuToggle)}},s.enquireDropDownNarrowAndUp={deferSetup:!0,setup:function(){s.initDone||s.config.mainMenu.find("li.expanded > ul.menu").append('<li class="close"><button type="submit"><span>Close</span></button></li>').find("li.last").removeClass("last").next().addClass("last"),s.initDone=!0},match:function(){s.submenuTouch()},unmatch:function(){s.config.parentMenuContainer.unbind("click",s.submenuTouch),e("ul.menu > li.expanded").removeClass("hover")}},s.init=function(){for(var t in this.config)this.config[t]=e(this.config[t]);i.register(r.breakpoints.mobile,s.enquireDropDownMobile),o.each(["narrow","desktop","wide"],function(t){i.register(r.breakpoints[t],s.enquireDropDownNarrowAndUp)})},s.destroy=function(){i.unregister(r.breakpoints.mobile,s.enquireDropDownMobile),o.each(["narrow","desktop","wide"],function(t){i.unregister(r.breakpoints[t],s.enquireDropDownNarrowAndUp)})},{init:function(){return!(!i||!s.init())},destroy:function(){return!(!i||!s.destroy())},config:function(){return s.config}}}),define("theme/review_tabs",["domReady!","jquery"],function(t,e){return{init:function(){e("#review-tabs").live("click",".group-label",function(t){e(this).children().removeClass("active"),e(t.target).closest(".tabs").addClass("active")})}}}),define("theme/responsive_menu",[],function(){function t(t,e){t.classList?t.classList.add(e):t.className+=" "+e}function e(t,e){if(t.classList)t.classList.remove(e);else for(var n=t.className.split(" "),i=n.length-1;i>=0;i--){var o=n[i];o===e&&(n.splice(i,1),t.className=n.join(" "))}}function n(n,i){-1===n.className.indexOf(i)?t(n,i):e(n,i)}function i(t){var i;return i="click"===t.type?t.target:t.changedTouches[0].target,d?void(i===u?n(u,"active"):i.parentNode.classList.contains("leaf")||e(u,"active")):void e(u,"active")}function o(){for(var t=0,e=l.length;e--;){var n=l[e];t+=n.offsetWidth}return t}function r(){m=c.offsetWidth||m,p<window.innerWidth-h-(m>0?m+140:0)?(e(a,"multiline"),e(u,"active"),d=!1):(t(a,"multiline"),d=!0)}var s,a,c,u,l,d,f=window.document,p=0,h=0,m=0;return{init:function(){s=f.querySelector("#block-system-main-menu"),null!==s&&(a=f.querySelector("#header"),c=f.querySelector("#block-menu-menu-header-social"),h+=f.querySelector(".site-logo").offsetWidth,h+=f.querySelector("#block-search-form").offsetWidth,window.addEventListener?(u=s.querySelector(".menu"),l=u.querySelectorAll(".leaf > a"),p=o(),r(),window.addEventListener("resize",r),f.addEventListener(null===f.ontouchstart?"touchend":"click",i)):(u=s.children[1].children[0],t(u,"active")))}}}),function(){var t,e;t=this.jQuery||window.jQuery,e=t(window),t.fn.stick_in_parent=function(n){var i,o,r,s,a,c,u,l,d,f,p;for(null==n&&(n={}),p=n.sticky_class,a=n.inner_scrolling,f=n.recalc_every,d=n.parent,l=n.offset_top,u=n.spacer,o=n.bottoming,null==l&&(l=0),null==d&&(d=void 0),null==a&&(a=!0),null==p&&(p="is_stuck"),i=t(document),null==o&&(o=!0),r=function(n,r,s,c,h,m,v,g){var y,k,b,w,C,q,E,S,T,I,N,F;if(!n.data("sticky_kit")){if(n.data("sticky_kit",!0),C=i.height(),E=n.parent(),null!=d&&(E=E.closest(d)),!E.length)throw"failed to find stick parent";if(y=b=!1,(N=null!=u?u&&n.closest(u):t("<div />"))&&N.css("position",n.css("position")),S=function(){var t,e,o;return!g&&(C=i.height(),t=parseInt(E.css("border-top-width"),10),e=parseInt(E.css("padding-top"),10),r=parseInt(E.css("padding-bottom"),10),s=E.offset().top+t+e,c=E.height(),b&&(y=b=!1,null==u&&(n.insertAfter(N),N.detach()),n.css({position:"",top:"",width:"",bottom:""}).removeClass(p),o=!0),h=n.offset().top-(parseInt(n.css("margin-top"),10)||0)-l,m=n.outerHeight(!0),v=n.css("float"),N&&N.css({width:n.outerWidth(!0),height:m,display:n.css("display"),"vertical-align":n.css("vertical-align"),"float":v}),o)?F():void 0},S(),m!==c)return w=void 0,q=l,I=f,F=function(){var t,d,k,T;return!g&&(k=!1,null!=I&&(--I,0>=I&&(I=f,S(),k=!0)),k||i.height()===C||S(),k=e.scrollTop(),null!=w&&(d=k-w),w=k,b?(o&&(T=k+m+q>c+s,y&&!T&&(y=!1,n.css({position:"fixed",bottom:"",top:q}).trigger("sticky_kit:unbottom"))),h>k&&(b=!1,q=l,null==u&&("left"!==v&&"right"!==v||n.insertAfter(N),N.detach()),t={position:"",width:"",top:""},n.css(t).removeClass(p).trigger("sticky_kit:unstick")),a&&(t=e.height(),m+l>t&&!y&&(q-=d,q=Math.max(t-m,q),q=Math.min(l,q),b&&n.css({top:q+"px"})))):k>h&&(b=!0,t={position:"fixed",top:q},t.width="border-box"===n.css("box-sizing")?n.outerWidth()+"px":n.width()+"px",n.css(t).addClass(p),null==u&&(n.after(N),"left"!==v&&"right"!==v||N.append(n)),n.trigger("sticky_kit:stick")),b&&o&&(null==T&&(T=k+m+q>c+s),!y&&T))?(y=!0,"static"===E.css("position")&&E.css({position:"relative"}),n.css({position:"absolute",bottom:r,top:"auto"}).trigger("sticky_kit:bottom")):void 0},T=function(){return S(),F()},k=function(){return g=!0,e.off("touchmove",F),e.off("scroll",F),e.off("resize",T),t(document.body).off("sticky_kit:recalc",T),n.off("sticky_kit:detach",k),n.removeData("sticky_kit"),n.css({position:"",bottom:"",top:"",width:""}),E.position("position",""),b?(null==u&&("left"!==v&&"right"!==v||n.insertAfter(N),N.remove()),n.removeClass(p)):void 0},e.on("touchmove",F),e.on("scroll",F),e.on("resize",T),t(document.body).on("sticky_kit:recalc",T),n.on("sticky_kit:detach",k),setTimeout(F,0)}},s=0,c=this.length;c>s;s++)n=this[s],r(t(n));return this}}.call(this),define("sticky-kit",function(){}),define("theme/rrssb_sticky",["domReady!","utils","provision!enquire","drupal","jquery","sticky-kit"],function(t,e,n,i,o){"use strict";function r(){if(!d){var t={parent:".node-full > .content > .group_content_body",spacer:!1,offset_top:80};o(u).stick_in_parent(t),d=!0}}function s(){d&&(d=!1)}function a(){d&&o(document.body).trigger("sticky_kit:recalc")}function c(){if(!l.narrowandup)throw new Error('Missing "narrowandup" breakpoint');var t={match:function(){r()},unmatch:function(){s()}},i={match:function(){a()}};n.register(l.narrowandup,t),e.each(["narrow","desktop","wide"],function(t){n.register(l[t],i)})}var u=".node-full .sharerich-wrapper.sharerich-1",l=i.settings.dennisJs.breakpoints,d=!1;return{init:function(){return!!n&&!!o.fn.stick_in_parent&&c()}}}),define("theme/go2disqus",["domReady!","drupal"],function(t,e){"use strict";function n(e,n,i){if(s&&s.remove(),i!==!1){var o=JSON.parse(JSON.stringify(a));for(var c in i)i.hasOwnProperty(c)&&(o[c]=i[c]);var u=o.classes;s=t.createElement(o.tag),s.className="string"==typeof u?u:u.join(" ");var l=o.attributes;for(var d in l)s.setAttribute(d,l[d]);s.innerHTML=o.content,s.addEventListener("click",function(t){t.target===s&&s.querySelector("a").click()})}r[n](t.querySelector(e));var f=t.createElement("script");f.async=!0,f.type="text/javascript",f.src="//alphr.disqus.com/count.js",(t.getElementsByTagName("HEAD")[0]||t.getElementsByTagName("BODY")[0]).appendChild(f)}function i(){s.remove()}var o=function(){var t=e.settings,n=void 0!==t.disqus?t.disqus:!1,i=n&&void 0!==n.identifier?n.identifier:!1;return i?'<a href="#disqus_thread" data-disqus-identifier="'+i+'" class="icon"></a>':'<a href="#disqus_thread" class="icon"></a>'},r={before:function(t){t.parentNode.insertBefore(s,t)},after:function(t){var e=t.nextSibling;e?this.before(e):this.append(t.parentNode)},prepend:function(t){var e=t.firstChild;e?this.before(e):this.append(t)},append:function(t){t.appendChild(s)}},s=null,a={tag:"li",classes:"icon go2disqus",attributes:{title:"Click here to comment"},content:o()};return{init:function(e,i,o){var r=null!==t.querySelector(e);return!(!r||!n(e,i,o))},destroy:i}}),define("theme/theme",["theme/fbe","provision!theme/dropdowntouch","theme/review_tabs","theme/responsive_menu","theme/rrssb_sticky","theme/go2disqus"],function(t,e,n,i,o,r){"use strict";var s={};return s.init=function(){t.init(),e&&e.init(),n.init(),i.init(),o.init(),r.init(".sharerich-buttons.rrssb-1","append")},{init:function(){return s.init()}}}),define("main",["has","provision!dfp/gptrefresh","theme/theme"],function(t,e,n){"use strict";var i={};return i.init=function(){e&&e.init(),n.init()},i});