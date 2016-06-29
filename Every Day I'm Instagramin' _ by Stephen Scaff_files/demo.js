/**
 * Jquery Easing 
 * Copyright (c) ...
 * Dual licensed under MIT and GPL.
 *
 */
jQuery.easing.jswing=jQuery.easing.swing;jQuery.extend(jQuery.easing,{def:"easeOutQuad",swing:function(j,i,b,c,d){return jQuery.easing[jQuery.easing.def](j,i,b,c,d)},easeInQuad:function(j,i,b,c,d){return c*(i/=d)*i+b},easeOutQuad:function(j,i,b,c,d){return -c*(i/=d)*(i-2)+b},easeInOutQuad:function(j,i,b,c,d){if((i/=d/2)<1){return c/2*i*i+b}return -c/2*((--i)*(i-2)-1)+b},easeInCubic:function(j,i,b,c,d){return c*(i/=d)*i*i+b},easeOutCubic:function(j,i,b,c,d){return c*((i=i/d-1)*i*i+1)+b},easeInOutCubic:function(j,i,b,c,d){if((i/=d/2)<1){return c/2*i*i*i+b}return c/2*((i-=2)*i*i+2)+b},easeInQuart:function(j,i,b,c,d){return c*(i/=d)*i*i*i+b},easeOutQuart:function(j,i,b,c,d){return -c*((i=i/d-1)*i*i*i-1)+b},easeInOutQuart:function(j,i,b,c,d){if((i/=d/2)<1){return c/2*i*i*i*i+b}return -c/2*((i-=2)*i*i*i-2)+b},easeInQuint:function(j,i,b,c,d){return c*(i/=d)*i*i*i*i+b},easeOutQuint:function(j,i,b,c,d){return c*((i=i/d-1)*i*i*i*i+1)+b},easeInOutQuint:function(j,i,b,c,d){if((i/=d/2)<1){return c/2*i*i*i*i*i+b}return c/2*((i-=2)*i*i*i*i+2)+b},easeInSine:function(j,i,b,c,d){return -c*Math.cos(i/d*(Math.PI/2))+c+b},easeOutSine:function(j,i,b,c,d){return c*Math.sin(i/d*(Math.PI/2))+b},easeInOutSine:function(j,i,b,c,d){return -c/2*(Math.cos(Math.PI*i/d)-1)+b},easeInExpo:function(j,i,b,c,d){return(i==0)?b:c*Math.pow(2,10*(i/d-1))+b},easeOutExpo:function(j,i,b,c,d){return(i==d)?b+c:c*(-Math.pow(2,-10*i/d)+1)+b},easeInOutExpo:function(j,i,b,c,d){if(i==0){return b}if(i==d){return b+c}if((i/=d/2)<1){return c/2*Math.pow(2,10*(i-1))+b}return c/2*(-Math.pow(2,-10*--i)+2)+b},easeInCirc:function(j,i,b,c,d){return -c*(Math.sqrt(1-(i/=d)*i)-1)+b},easeOutCirc:function(j,i,b,c,d){return c*Math.sqrt(1-(i=i/d-1)*i)+b},easeInOutCirc:function(j,i,b,c,d){if((i/=d/2)<1){return -c/2*(Math.sqrt(1-i*i)-1)+b}return c/2*(Math.sqrt(1-(i-=2)*i)+1)+b},easeInElastic:function(o,m,p,a,b){var d=1.70158;var c=0;var n=a;if(m==0){return p}if((m/=b)==1){return p+a}if(!c){c=b*0.3}if(n<Math.abs(a)){n=a;var d=c/4}else{var d=c/(2*Math.PI)*Math.asin(a/n)}return -(n*Math.pow(2,10*(m-=1))*Math.sin((m*b-d)*(2*Math.PI)/c))+p},easeOutElastic:function(o,m,p,a,b){var d=1.70158;var c=0;var n=a;if(m==0){return p}if((m/=b)==1){return p+a}if(!c){c=b*0.3}if(n<Math.abs(a)){n=a;var d=c/4}else{var d=c/(2*Math.PI)*Math.asin(a/n)}return n*Math.pow(2,-10*m)*Math.sin((m*b-d)*(2*Math.PI)/c)+a+p},easeInOutElastic:function(o,m,p,a,b){var d=1.70158;var c=0;var n=a;if(m==0){return p}if((m/=b/2)==2){return p+a}if(!c){c=b*(0.3*1.5)}if(n<Math.abs(a)){n=a;var d=c/4}else{var d=c/(2*Math.PI)*Math.asin(a/n)}if(m<1){return -0.5*(n*Math.pow(2,10*(m-=1))*Math.sin((m*b-d)*(2*Math.PI)/c))+p}return n*Math.pow(2,-10*(m-=1))*Math.sin((m*b-d)*(2*Math.PI)/c)*0.5+a+p},easeInBack:function(l,k,b,c,d,j){if(j==undefined){j=1.70158}return c*(k/=d)*k*((j+1)*k-j)+b},easeOutBack:function(l,k,b,c,d,j){if(j==undefined){j=0.70158}return c*((k=k/d-1)*k*((j+1)*k+j)+1)+b},easeInOutBack:function(l,k,b,c,d,j){if(j==undefined){j=1.70158}if((k/=d/2)<1){return c/2*(k*k*(((j*=(1.525))+1)*k-j))+b}return c/2*((k-=2)*k*(((j*=(1.525))+1)*k+j)+2)+b},easeInBounce:function(j,i,b,c,d){return c-jQuery.easing.easeOutBounce(j,d-i,0,c,d)+b},easeOutBounce:function(j,i,b,c,d){if((i/=d)<(1/2.75)){return c*(7.5625*i*i)+b}else{if(i<(2/2.75)){return c*(7.5625*(i-=(1.5/2.75))*i+0.75)+b}else{if(i<(2.5/2.75)){return c*(7.5625*(i-=(2.25/2.75))*i+0.9375)+b}else{return c*(7.5625*(i-=(2.625/2.75))*i+0.984375)+b}}}},easeInOutBounce:function(j,i,b,c,d){if(i<d/2){return jQuery.easing.easeInBounce(j,i*2,0,c,d)*0.5+b}return jQuery.easing.easeOutBounce(j,i*2-d,0,c,d)*0.5+c*0.5+b}});
/*----------------------------------------------   
--Web font loader
-----------------------------------------------  */
WebFontConfig={

    google:{families: ['Noto+Serif:400', 'Montserrat:400,700:latin', 'Abril+Fatface', 'Rokkit']}
  }; 
  
  (function(){
    var wf = document.createElement("script");
    wf.src = ("https:" == document.location.protocol ? "https":"http") + 
             "://ajax.googleapis.com/ajax/libs/webfont/1/webfont.js";
    wf.type="text/javascript";
    wf.async="true";
    var t = document.getElementsByTagName("script")[0];
    t.parentNode.insertBefore(wf, t)
})();


/*----------------------------------------------   
--Reload trigger
-----------------------------------------------  */
/*----------------------------------------
Contact Panel Slide
------------------------------------------*/
$(".js-panelslide").click(function () {
$("#js-slide-contact").addClass("absolute");
$('body,html').animate({
				scrollTop: 0
			}, 500);
			return false;
}); 

$(".js-back").click(function () {
$("#js-slide-contact").removeClass("absolute");
}); 


	scroll = {
		paneOffset : 0,
		learn : {
			call : false,
			current : '',
			init : function(el){
				if (this.current != el) {
					this.reset();
				}
				this.current = el;		
			},
		},

		slidepanel : {
			call : false,
			init : function(){
				el = $('#js-slide-contact');
				l = (!this.call ? 0 : 100);
				this.call = (l == 0 ? true : false);
				el.animate({left:l+'%'}, 950, 'easeInOutCubic');			
			}
		},
}

$(function() { 
// Contact Panel Slide Back
	$('.js-panelslide, .js-back').click(function(){
		scroll.slidepanel.init();
		return false;
	});
});


/*----------------------------------------------   
--Lightbox
		scrollTops : {
			call : false,
			init : function(){
				toTop = $('body,html');
				
				toTop.animate({scrollTop: 0}, 500), function(){		
				
								});
}
		},
-----------------------------------------------  */


/**
 * @name		Shuffle Letters
 * @author		Martin Angelov
 * @version 	1.0
 * @url			http://tutorialzine.com/2011/09/shuffle-letters-effect-jquery/
 * @license		MIT License
 */

;(function(e){function t(e){var t="";if(e=="lowerLetter"){t="stephen"}else if(e=="upperLetter"){t="STEPHEN"}else if(e=="symbol"){t="010110"}var n=t.split("");return n[Math.floor(Math.random()*n.length)]}e.fn.shuffleLetters=function(n){var r=e.extend({step:13,fps:25,text:"",callback:function(){}},n);return this.each(function(){var n=e(this),i="";if(n.data("animated")){return true}n.data("animated",true);if(r.text){i=r.text.split("")}else{i=n.text().split("")}var s=[],o=[];for(var u=0;u<i.length;u++){var a=i[u];if(a==" "){s[u]="space";continue}else if(/[a-z]/.test(a)){s[u]="lowerLetter"}else if(/[A-Z]/.test(a)){s[u]="upperLetter"}else{s[u]="symbol"}o.push(u)}n.html("");(function f(e){var u,a=o.length,l=i.slice(0);if(e>a){n.data("animated",false);r.callback(n);return}for(u=Math.max(e,0);u<a;u++){if(u<e+r.step){l[o[u]]=t(s[o[u]])}else{l[o[u]]=""}}n.text(l.join(""));setTimeout(function(){f(e+1)},1e3/r.fps)})(-r.step)})}})(jQuery);


//Now the Meats
$(function(){
var text1 = $("h1#logo"); 
text1.shuffleLetters();

var text2 = $("header h2"); 
text2.shuffleLetters();

setTimeout(function(){
text1.shuffleLetters({
	"text": "Everyday I'm Instagrammin"
});
},3800);

setTimeout(function(){
text2.shuffleLetters({
	"text": "A Jquery Instagram Plugin by Stephen Scaff"
});
},3800);

setTimeout(function(){
$(".fademe").removeClass("hide")
$(".fade me").addClass("fade-up")
},5000);
});

/*----------------------------------------------   
--Prism Syntax Highlighter
-----------------------------------------------  */
(function(){var e=/\blang(?:uage)?-(?!\*)(\w+)\b/i,t=self.Prism={util:{type:function(e){return Object.prototype.toString.call(e).match(/\[object (\w+)\]/)[1]},clone:function(e){var n=t.util.type(e);switch(n){case"Object":var r={};for(var i in e)e.hasOwnProperty(i)&&(r[i]=t.util.clone(e[i]));return r;case"Array":return e.slice()}return e}},languages:{extend:function(e,n){var r=t.util.clone(t.languages[e]);for(var i in n)r[i]=n[i];return r},insertBefore:function(e,n,r,i){i=i||t.languages;var s=i[e],o={};for(var u in s)if(s.hasOwnProperty(u)){if(u==n)for(var a in r)r.hasOwnProperty(a)&&(o[a]=r[a]);o[u]=s[u]}return i[e]=o},DFS:function(e,n){for(var r in e){n.call(e,r,e[r]);t.util.type(e)==="Object"&&t.languages.DFS(e[r],n)}}},highlightAll:function(e,n){var r=document.querySelectorAll('code[class*="language-"], [class*="language-"] code, code[class*="lang-"], [class*="lang-"] code');for(var i=0,s;s=r[i++];)t.highlightElement(s,e===!0,n)},highlightElement:function(r,i,s){var o,u,a=r;while(a&&!e.test(a.className))a=a.parentNode;if(a){o=(a.className.match(e)||[,""])[1];u=t.languages[o]}if(!u)return;r.className=r.className.replace(e,"").replace(/\s+/g," ")+" language-"+o;a=r.parentNode;/pre/i.test(a.nodeName)&&(a.className=a.className.replace(e,"").replace(/\s+/g," ")+" language-"+o);var f=r.textContent;if(!f)return;f=f.replace(/&/g,"&").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/\u00a0/g," ");var l={element:r,language:o,grammar:u,code:f};t.hooks.run("before-highlight",l);if(i&&self.Worker){var c=new Worker(t.filename);c.onmessage=function(e){l.highlightedCode=n.stringify(JSON.parse(e.data),o);l.element.innerHTML=l.highlightedCode;s&&s.call(l.element);t.hooks.run("after-highlight",l)};c.postMessage(JSON.stringify({language:l.language,code:l.code}))}else{l.highlightedCode=t.highlight(l.code,l.grammar,l.language);l.element.innerHTML=l.highlightedCode;s&&s.call(r);t.hooks.run("after-highlight",l)}},highlight:function(e,r,i){return n.stringify(t.tokenize(e,r),i)},tokenize:function(e,n,r){var i=t.Token,s=[e],o=n.rest;if(o){for(var u in o)n[u]=o[u];delete n.rest}e:for(var u in n){if(!n.hasOwnProperty(u)||!n[u])continue;var a=n[u],f=a.inside,l=!!a.lookbehind||0;a=a.pattern||a;for(var c=0;c<s.length;c++){var h=s[c];if(s.length>e.length)break e;if(h instanceof i)continue;a.lastIndex=0;var p=a.exec(h);if(p){l&&(l=p[1].length);var d=p.index-1+l,p=p[0].slice(l),v=p.length,m=d+v,g=h.slice(0,d+1),y=h.slice(m+1),b=[c,1];g&&b.push(g);var w=new i(u,f?t.tokenize(p,f):p);b.push(w);y&&b.push(y);Array.prototype.splice.apply(s,b)}}}return s},hooks:{all:{},add:function(e,n){var r=t.hooks.all;r[e]=r[e]||[];r[e].push(n)},run:function(e,n){var r=t.hooks.all[e];if(!r||!r.length)return;for(var i=0,s;s=r[i++];)s(n)}}},n=t.Token=function(e,t){this.type=e;this.content=t};n.stringify=function(e,r,i){if(typeof e=="string")return e;if(Object.prototype.toString.call(e)=="[object Array]")return e.map(function(t){return n.stringify(t,r,e)}).join("");var s={type:e.type,content:n.stringify(e.content,r,i),tag:"span",classes:["token",e.type],attributes:{},language:r,parent:i};s.type=="comment"&&(s.attributes.spellcheck="true");t.hooks.run("wrap",s);var o="";for(var u in s.attributes)o+=u+'="'+(s.attributes[u]||"")+'"';return"<"+s.tag+' class="'+s.classes.join(" ")+'" '+o+">"+s.content+"</"+s.tag+">"};if(!self.document){self.addEventListener("message",function(e){var n=JSON.parse(e.data),r=n.language,i=n.code;self.postMessage(JSON.stringify(t.tokenize(i,t.languages[r])));self.close()},!1);return}var r=document.getElementsByTagName("script");r=r[r.length-1];if(r){t.filename=r.src;document.addEventListener&&!r.hasAttribute("data-manual")&&document.addEventListener("DOMContentLoaded",t.highlightAll)}})();Prism.languages.markup={comment:/&lt;!--[\w\W]*?--(&gt;|&gt;)/g,prolog:/&lt;\?.+?\?&gt;/,doctype:/&lt;!DOCTYPE.+?&gt;/,cdata:/&lt;!\[CDATA\[[\w\W]*?]]&gt;/i,tag:{pattern:/&lt;\/?[\w:-]+\s*(?:\s+[\w:-]+(?:=(?:("|')(\\?[\w\W])*?\1|\w+))?\s*)*\/?&gt;/gi,inside:{tag:{pattern:/^&lt;\/?[\w:-]+/i,inside:{punctuation:/^&lt;\/?/,namespace:/^[\w-]+?:/}},"attr-value":{pattern:/=(?:('|")[\w\W]*?(\1)|[^\s>]+)/gi,inside:{punctuation:/=|&gt;|"/g}},punctuation:/\/?&gt;/g,"attr-name":{pattern:/[\w:-]+/g,inside:{namespace:/^[\w-]+?:/}}}},entity:/&#?[\da-z]{1,8};/gi};Prism.hooks.add("wrap",function(e){e.type==="entity"&&(e.attributes.title=e.content.replace(/&/,"&"))});Prism.languages.css={comment:/\/\*[\w\W]*?\*\//g,atrule:/@[\w-]+?(\s+[^;{]+)?(?=\s*{|\s*;)/gi,url:/url\((["']?).*?\1\)/gi,selector:/[^\{\}\s][^\{\}]*(?=\s*\{)/g,property:/(\b|\B)[a-z-]+(?=\s*:)/ig,string:/("|')(\\?.)*?\1/g,important:/\B!important\b/gi,ignore:/&(lt|gt|amp);/gi,punctuation:/[\{\};:]/g};Prism.languages.markup&&Prism.languages.insertBefore("markup","tag",{style:{pattern:/(&lt;|<)style[\w\W]*?(>|&gt;)[\w\W]*?(&lt;|<)\/style(>|&gt;)/ig,inside:{tag:{pattern:/(&lt;|<)style[\w\W]*?(>|&gt;)|(&lt;|<)\/style(>|&gt;)/ig,inside:Prism.languages.markup.tag.inside},rest:Prism.languages.css}}});Prism.languages.clike={comment:{pattern:/(^|[^\\])(\/\*[\w\W]*?\*\/|(^|[^:])\/\/.*?(\r?\n|$))/g,lookbehind:!0},string:/("|')(\\?.)*?\1/g,"class-name":{pattern:/((?:class|interface|extends|implements|trait|instanceof|new)\s+)[a-z0-9_\.\\]+/ig,lookbehind:!0,inside:{punctuation:/(\.|\\)/}},keyword:/\b(if|else|while|do|for|return|in|instanceof|function|new|try|catch|finally|null|break|continue)\b/g,"boolean":/\b(true|false)\b/g,"function":{pattern:/[a-z0-9_]+\(/ig,inside:{punctuation:/\(/}},number:/\b-?(0x[\dA-Fa-f]+|\d*\.?\d+([Ee]-?\d+)?)\b/g,operator:/[-+]{1,2}|!|=?&lt;|=?&gt;|={1,2}|(&){1,2}|\|?\||\?|\*|\/|\~|\^|\%/g,ignore:/&(lt|gt|amp);/gi,punctuation:/[{}[\];(),.:]/g};Prism.languages.javascript=Prism.languages.extend("clike",{keyword:/\b(var|let|if|else|while|do|for|return|in|instanceof|function|new|with|typeof|try|catch|finally|null|break|continue)\b/g,number:/\b-?(0x[\dA-Fa-f]+|\d*\.?\d+([Ee]-?\d+)?|NaN|-?Infinity)\b/g});Prism.languages.insertBefore("javascript","keyword",{regex:{pattern:/(^|[^/])\/(?!\/)(\[.+?]|\\.|[^/\r\n])+\/[gim]{0,3}(?=\s*($|[\r\n,.;})]))/g,lookbehind:!0}});Prism.languages.markup&&Prism.languages.insertBefore("markup","tag",{script:{pattern:/(&lt;|<)script[\w\W]*?(>|&gt;)[\w\W]*?(&lt;|<)\/script(>|&gt;)/ig,inside:{tag:{pattern:/(&lt;|<)script[\w\W]*?(>|&gt;)|(&lt;|<)\/script(>|&gt;)/ig,inside:Prism.languages.markup.tag.inside},rest:Prism.languages.javascript}}});(function(){if(!window.Prism||!document.querySelector)return;var e={js:"javascript",html:"markup",svg:"markup"};Array.prototype.slice.call(document.querySelectorAll("pre[data-src]")).forEach(function(t){var n=t.getAttribute("data-src"),r=(n.match(/\.(\w+)$/)||[,""])[1],i=e[r]||r,s=document.createElement("code");s.className="language-"+i;t.textContent="";s.textContent="Loadingâ€¦";t.appendChild(s);var o=new XMLHttpRequest;o.open("GET",n,!0);o.onreadystatechange=function(){console.log(o.readyState,o.status,n);if(o.readyState==4)if(o.status<400&&o.responseText){s.textContent=o.responseText;Prism.highlightElement(s)}else o.status>=400?s.textContent="âœ– Error "+o.status+" while fetching file: "+o.statusText:s.textContent="âœ– Error: File does not exist or is empty"};o.send(null)})})();(function(){if(!window.Prism)return;Prism.languages.scss=Prism.languages.extend("css",{comment:{pattern:/(^|[^\\])(\/\*[\w\W]*?\*\/|\/\/.*?(\r?\n|$))/g,lookbehind:!0},atrule:/@[\w-]+(?=\s+(\(|\{|;))/gi,url:/([-a-z]+-)*url(?=\()/gi,selector:/([^@;\{\}\(\)]?([^@;\{\}\(\)]|&|\#\{\$[-_\w]+\})+)(?=\s*\{(\}|\s|[^\}]+(:|\{)[^\}]+))/gm});Prism.languages.insertBefore("scss","atrule",{keyword:/@(if|else if|else|for|each|while|import|extend|debug|warn|mixin|include|function|return)|(?=@for\s+\$[-_\w]+\s)+from/i});Prism.languages.insertBefore("scss","property",{variable:/((\$[-_\w]+)|(#\{\$[-_\w]+\}))/i});Prism.languages.insertBefore("scss","ignore",{placeholder:/%[-_\w]+/i,statement:/\B!(default|optional)\b/gi,"boolean":/\b(true|false)\b/g,"null":/\b(null)\b/g,operator:/\s+([-+]{1,2}|={1,2}|!=|\|?\||\?|\*|\/|\%)\s+/g})})()



