!function e(t,r,n){function i(o,a){if(!r[o]){if(!t[o]){var c="function"==typeof require&&require;if(!a&&c)return c(o,!0);if(s)return s(o,!0);var u=new Error("Cannot find module '"+o+"'");throw u.code="MODULE_NOT_FOUND",u}var l=r[o]={exports:{}};t[o][0].call(l.exports,function(e){var r=t[o][1][e];return i(r?r:e)},l,l.exports,e,t,r,n)}return r[o].exports}for(var s="function"==typeof require&&require,o=0;o<n.length;o++)i(n[o]);return i}({1:[function(e,t,r){e("picturefill")},{picturefill:2}],2:[function(e,t,r){window.matchMedia||(window.matchMedia=function(){"use strict";var e=window.styleMedia||window.media;if(!e){var t=document.createElement("style"),r=document.getElementsByTagName("script")[0],n=null;t.type="text/css",t.id="matchmediajs-test",r.parentNode.insertBefore(t,r),n="getComputedStyle"in window&&window.getComputedStyle(t,null)||t.currentStyle,e={matchMedium:function(e){var r="@media "+e+"{ #matchmediajs-test { width: 1px; } }";return t.styleSheet?t.styleSheet.cssText=r:t.textContent=r,"1px"===n.width}}}return function(t){return{matches:e.matchMedium(t||"all"),media:t||"all"}}}()),function(e,r,n){"use strict";function i(r){"object"==typeof t&&"object"==typeof t.exports?t.exports=r:"function"==typeof define&&define.amd&&define("picturefill",function(){return r}),"object"==typeof e&&(e.picturefill=r)}function s(e){var t,r,n,i,s,o=e||{};t=o.elements||a.getAllElements();for(var u=0,l=t.length;l>u;u++)if(r=t[u],n=r.parentNode,i=void 0,s=void 0,"IMG"===r.nodeName.toUpperCase()&&(r[a.ns]||(r[a.ns]={}),o.reevaluate||!r[a.ns].evaluated)){if(n&&"PICTURE"===n.nodeName.toUpperCase()){if(a.removeVideoShim(n),i=a.getMatch(r,n),i===!1)continue}else i=void 0;(n&&"PICTURE"===n.nodeName.toUpperCase()||!a.sizesSupported&&r.srcset&&c.test(r.srcset))&&a.dodgeSrcset(r),i?(s=a.processSourceSet(i),a.applyBestCandidate(s,r)):(s=a.processSourceSet(r),(void 0===r.srcset||r[a.ns].srcset)&&a.applyBestCandidate(s,r)),r[a.ns].evaluated=!0}}function o(){function t(){clearTimeout(n),n=setTimeout(o,60)}a.initTypeDetects(),s();var n,i=setInterval(function(){return s(),/^loaded|^i|^c/.test(r.readyState)?void clearInterval(i):void 0},250),o=function(){s({reevaluate:!0})};e.addEventListener?e.addEventListener("resize",t,!1):e.attachEvent&&e.attachEvent("onresize",t)}if(e.HTMLPictureElement)return void i(function(){});r.createElement("picture");var a=e.picturefill||{},c=/\s+\+?\d+(e\d+)?w/;a.ns="picturefill",function(){a.srcsetSupported="srcset"in n,a.sizesSupported="sizes"in n,a.curSrcSupported="currentSrc"in n}(),a.trim=function(e){return e.trim?e.trim():e.replace(/^\s+|\s+$/g,"")},a.makeUrl=function(){var e=r.createElement("a");return function(t){return e.href=t,e.href}}(),a.restrictsMixedContent=function(){return"https:"===e.location.protocol},a.matchesMedia=function(t){return e.matchMedia&&e.matchMedia(t).matches},a.getDpr=function(){return e.devicePixelRatio||1},a.getWidthFromLength=function(e){var t;if(!e||e.indexOf("%")>-1!=!1||!(parseFloat(e)>0||e.indexOf("calc(")>-1))return!1;e=e.replace("vw","%"),a.lengthEl||(a.lengthEl=r.createElement("div"),a.lengthEl.style.cssText="border:0;display:block;font-size:1em;left:0;margin:0;padding:0;position:absolute;visibility:hidden",a.lengthEl.className="helper-from-picturefill-js"),a.lengthEl.style.width="0px";try{a.lengthEl.style.width=e}catch(n){}return r.body.appendChild(a.lengthEl),t=a.lengthEl.offsetWidth,0>=t&&(t=!1),r.body.removeChild(a.lengthEl),t},a.detectTypeSupport=function(t,r){var n=new e.Image;return n.onerror=function(){a.types[t]=!1,s()},n.onload=function(){a.types[t]=1===n.width,s()},n.src=r,"pending"},a.types=a.types||{},a.initTypeDetects=function(){a.types["image/jpeg"]=!0,a.types["image/gif"]=!0,a.types["image/png"]=!0,a.types["image/svg+xml"]=r.implementation.hasFeature("http://www.w3.org/TR/SVG11/feature#Image","1.1"),a.types["image/webp"]=a.detectTypeSupport("image/webp","data:image/webp;base64,UklGRh4AAABXRUJQVlA4TBEAAAAvAAAAAAfQ//73v/+BiOh/AAA=")},a.verifyTypeSupport=function(e){var t=e.getAttribute("type");if(null===t||""===t)return!0;var r=a.types[t];return"string"==typeof r&&"pending"!==r?(a.types[t]=a.detectTypeSupport(t,r),"pending"):"function"==typeof r?(r(),"pending"):r},a.parseSize=function(e){var t=/(\([^)]+\))?\s*(.+)/g.exec(e);return{media:t&&t[1],length:t&&t[2]}},a.findWidthFromSourceSize=function(t){for(var n,i=a.trim(t).split(/\s*,\s*/),s=0,o=i.length;o>s;s++){var c=i[s],u=a.parseSize(c),l=u.length,d=u.media;if(l&&(!d||a.matchesMedia(d))&&(n=a.getWidthFromLength(l)))break}return n||Math.max(e.innerWidth||0,r.documentElement.clientWidth)},a.parseSrcset=function(e){for(var t=[];""!==e;){e=e.replace(/^\s+/g,"");var r,n=e.search(/\s/g),i=null;if(-1!==n){r=e.slice(0,n);var s=r.slice(-1);if((","===s||""===r)&&(r=r.replace(/,+$/,""),i=""),e=e.slice(n+1),null===i){var o=e.indexOf(",");-1!==o?(i=e.slice(0,o),e=e.slice(o+1)):(i=e,e="")}}else r=e,e="";(r||i)&&t.push({url:r,descriptor:i})}return t},a.parseDescriptor=function(e,t){var r,n=t||"100vw",i=e&&e.replace(/(^\s+|\s+$)/g,""),s=a.findWidthFromSourceSize(n);if(i)for(var o=i.split(" "),c=o.length-1;c>=0;c--){var u=o[c],l=u&&u.slice(u.length-1);if("h"!==l&&"w"!==l||a.sizesSupported){if("x"===l){var d=u&&parseFloat(u,10);r=d&&!isNaN(d)?d:1}}else r=parseFloat(parseInt(u,10)/s)}return r||1},a.getCandidatesFromSourceSet=function(e,t){for(var r=a.parseSrcset(e),n=[],i=0,s=r.length;s>i;i++){var o=r[i];n.push({url:o.url,resolution:a.parseDescriptor(o.descriptor,t)})}return n},a.dodgeSrcset=function(e){e.srcset&&(e[a.ns].srcset=e.srcset,e.srcset="",e.setAttribute("data-pfsrcset",e[a.ns].srcset))},a.processSourceSet=function(e){var t=e.getAttribute("srcset"),r=e.getAttribute("sizes"),n=[];return"IMG"===e.nodeName.toUpperCase()&&e[a.ns]&&e[a.ns].srcset&&(t=e[a.ns].srcset),t&&(n=a.getCandidatesFromSourceSet(t,r)),n},a.backfaceVisibilityFix=function(e){var t=e.style||{},r="webkitBackfaceVisibility"in t,n=t.zoom;r&&(t.zoom=".999",r=e.offsetWidth,t.zoom=n)},a.setIntrinsicSize=function(){var t={},n=function(e,t,r){t&&e.setAttribute("width",parseInt(t/r,10))};return function(i,s){var o;i[a.ns]&&!e.pfStopIntrinsicSize&&(void 0===i[a.ns].dims&&(i[a.ns].dims=i.getAttribute("width")||i.getAttribute("height")),i[a.ns].dims||(s.url in t?n(i,t[s.url],s.resolution):(o=r.createElement("img"),o.onload=function(){if(t[s.url]=o.width,!t[s.url])try{r.body.appendChild(o),t[s.url]=o.width||o.offsetWidth,r.body.removeChild(o)}catch(e){}i.src===s.url&&n(i,t[s.url],s.resolution),i=null,o.onload=null,o=null},o.src=s.url)))}}(),a.applyBestCandidate=function(e,t){var r,n,i;e.sort(a.ascendingSort),n=e.length,i=e[n-1];for(var s=0;n>s;s++)if(r=e[s],r.resolution>=a.getDpr()){i=r;break}i&&(i.url=a.makeUrl(i.url),t.src!==i.url&&(a.restrictsMixedContent()&&"http:"===i.url.substr(0,"http:".length).toLowerCase()?void 0!==window.console&&console.warn("Blocked mixed content image "+i.url):(t.src=i.url,a.curSrcSupported||(t.currentSrc=t.src),a.backfaceVisibilityFix(t))),a.setIntrinsicSize(t,i))},a.ascendingSort=function(e,t){return e.resolution-t.resolution},a.removeVideoShim=function(e){var t=e.getElementsByTagName("video");if(t.length){for(var r=t[0],n=r.getElementsByTagName("source");n.length;)e.insertBefore(n[0],r);r.parentNode.removeChild(r)}},a.getAllElements=function(){for(var e=[],t=r.getElementsByTagName("img"),n=0,i=t.length;i>n;n++){var s=t[n];("PICTURE"===s.parentNode.nodeName.toUpperCase()||null!==s.getAttribute("srcset")||s[a.ns]&&null!==s[a.ns].srcset)&&e.push(s)}return e},a.getMatch=function(e,t){for(var r,n=t.childNodes,i=0,s=n.length;s>i;i++){var o=n[i];if(1===o.nodeType){if(o===e)return r;if("SOURCE"===o.nodeName.toUpperCase()){null!==o.getAttribute("src")&&void 0!==typeof console&&console.warn("The `src` attribute is invalid on `picture` `source` element; instead, use `srcset`.");var c=o.getAttribute("media");if(o.getAttribute("srcset")&&(!c||a.matchesMedia(c))){var u=a.verifyTypeSupport(o);if(u===!0){r=o;break}if("pending"===u)return!1}}}}return r},o(),s._=a,i(s)}(window,window.document,new window.Image)},{}]},{},[1]);