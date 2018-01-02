!function(){"use strict";function e(n){return"undefined"==typeof this||Object.getPrototypeOf(this)!==e.prototype?new e(n):(u=this,u.version="3.3.6",u.tools=new f,u.isSupported()?(u.tools.extend(u.defaults,n||{}),u.defaults.container=t(u.defaults),u.store={elements:{},containers:[]},u.sequences={},u.history=[],u.uid=0,u.initialized=!1):"undefined"!=typeof console&&null!==console&&console.log("ScrollReveal is not supported in this browser."),u)}function t(e){if(e&&e.container){if("string"==typeof e.container)return window.document.documentElement.querySelector(e.container);if(u.tools.isNode(e.container))return e.container;console.log('ScrollReveal: invalid container "'+e.container+'" provided.'),console.log("ScrollReveal: falling back to default container.")}return u.defaults.container}function n(){return++u.uid}function i(e,t){var n=e.config;return"-webkit-transition: "+e.styles.computed.transition+"-webkit-transform "+n.duration/1e3+"s "+n.easing+" "+t/1e3+"s, opacity "+n.duration/1e3+"s "+n.easing+" "+t/1e3+"s; transition: "+e.styles.computed.transition+"transform "+n.duration/1e3+"s "+n.easing+" "+t/1e3+"s, opacity "+n.duration/1e3+"s "+n.easing+" "+t/1e3+"s; "}function o(e){var t,n=e.config,i=e.styles.transform;t="top"===n.origin||"left"===n.origin?/^-/.test(n.distance)?n.distance.substr(1):"-"+n.distance:n.distance,parseInt(n.distance)&&(i.initial+=" translate"+n.axis+"("+t+")",i.target+=" translate"+n.axis+"(0)"),n.scale&&(i.initial+=" scale("+n.scale+")",i.target+=" scale(1)"),n.rotate.x&&(i.initial+=" rotateX("+n.rotate.x+"deg)",i.target+=" rotateX(0)"),n.rotate.y&&(i.initial+=" rotateY("+n.rotate.y+"deg)",i.target+=" rotateY(0)"),n.rotate.z&&(i.initial+=" rotateZ("+n.rotate.z+"deg)",i.target+=" rotateZ(0)"),i.initial+="; opacity: "+n.opacity+";",i.target+="; opacity: "+e.styles.computed.opacity+";"}function r(){if(u.isSupported()){a();for(var e=0;e<u.store.containers.length;e++)u.store.containers[e].addEventListener("scroll",s),u.store.containers[e].addEventListener("resize",s);u.initialized||(window.addEventListener("scroll",s),window.addEventListener("resize",s),u.initialized=!0)}return u}function s(){y(a)}function a(){var e,t;!function(){var e,t,n;u.tools.forOwn(u.sequences,function(i){n=u.sequences[i],e=!1;for(var o=0;o<n.elemIds.length;o++)t=n.elemIds[o],d(u.store.elements[t])&&!e&&(e=!0);n.active=e})}(),u.tools.forOwn(u.store.elements,function(n){t=u.store.elements[n],e=function(e){var t=e.config.useDelay;return"always"===t||"onload"===t&&!u.initialized||"once"===t&&!e.seen}(t),function(e){if(e.sequence){var t=u.sequences[e.sequence.id];return t.active&&!t.blocked&&!e.revealing&&!e.disabled}return d(e)&&!e.revealing&&!e.disabled}(t)?(t.config.beforeReveal(t.domEl),e?t.domEl.setAttribute("style",t.styles.inline+t.styles.transform.target+t.styles.transition.delayed):t.domEl.setAttribute("style",t.styles.inline+t.styles.transform.target+t.styles.transition.instant),l("reveal",t,e),t.revealing=!0,t.seen=!0,t.sequence&&function(e,t){var n=0,i=0,o=u.sequences[e.sequence.id];o.blocked=!0,t&&"onload"===e.config.useDelay&&(i=e.config.delay);e.sequence.timer&&(n=Math.abs(e.sequence.timer.started-new Date),window.clearTimeout(e.sequence.timer));e.sequence.timer={started:new Date},e.sequence.timer.clock=window.setTimeout(function(){o.blocked=!1,e.sequence.timer=null,s()},Math.abs(o.interval)+i-n)}(t,e)):function(e){if(e.sequence){var t=u.sequences[e.sequence.id];return!t.active&&e.config.reset&&e.revealing&&!e.disabled}return!d(e)&&e.config.reset&&e.revealing&&!e.disabled}(t)&&(t.config.beforeReset(t.domEl),t.domEl.setAttribute("style",t.styles.inline+t.styles.transform.initial+t.styles.transition.instant),l("reset",t),t.revealing=!1)})}function l(e,t,n){var i=0,o=0,r="after";switch(e){case"reveal":o=t.config.duration,n&&(o+=t.config.delay),r+="Reveal";break;case"reset":o=t.config.duration,r+="Reset"}t.timer&&(i=Math.abs(t.timer.started-new Date),window.clearTimeout(t.timer.clock)),t.timer={started:new Date},t.timer.clock=window.setTimeout(function(){t.config[r](t.domEl),t.timer=null},o-i)}function c(e){var t=0,n=0,i=e.offsetHeight,o=e.offsetWidth;do{isNaN(e.offsetTop)||(t+=e.offsetTop),isNaN(e.offsetLeft)||(n+=e.offsetLeft),e=e.offsetParent}while(e);return{top:t,left:n,height:i,width:o}}function d(e){var t=c(e.domEl),n=function(e){return{width:e.clientWidth,height:e.clientHeight}}(e.config.container),i=function(e){if(e&&e!==window.document.documentElement){var t=c(e);return{x:e.scrollLeft+t.left,y:e.scrollTop+t.top}}return{x:window.pageXOffset,y:window.pageYOffset}}(e.config.container),o=e.config.viewFactor,r=t.height,s=t.width,a=t.top,l=t.left,d=a+r,f=l+s;return function(){var t=a+r*o,c=l+s*o,u=d-r*o,y=f-s*o,m=i.y+e.config.viewOffset.top,p=i.x+e.config.viewOffset.left,g=i.y-e.config.viewOffset.bottom+n.height,w=i.x-e.config.viewOffset.right+n.width;return t<g&&u>m&&c<w&&y>p}()||"fixed"===window.getComputedStyle(e.domEl).position}function f(){}var u,y;e.prototype.defaults={origin:"bottom",distance:"20px",duration:500,delay:0,rotate:{x:0,y:0,z:0},opacity:0,scale:.9,easing:"cubic-bezier(0.6, 0.2, 0.1, 1)",container:window.document.documentElement,mobile:!0,reset:!1,useDelay:"always",viewFactor:.2,viewOffset:{top:0,right:0,bottom:0,left:0},beforeReveal:function(e){},beforeReset:function(e){},afterReveal:function(e){},afterReset:function(e){}},e.prototype.isSupported=function(){var e=document.documentElement.style;return"WebkitTransition"in e&&"WebkitTransform"in e||"transition"in e&&"transform"in e},e.prototype.reveal=function(e,s,a,l){var c,d,f,y,m,p;if(void 0!==s&&"number"==typeof s?(a=s,s={}):void 0!==s&&null!==s||(s={}),c=t(s),!(d=function(e,t){return"string"==typeof e?Array.prototype.slice.call(t.querySelectorAll(e)):u.tools.isNode(e)?[e]:u.tools.isNodeList(e)?Array.prototype.slice.call(e):[]}(e,c)).length)return console.log('ScrollReveal: reveal on "'+e+'" failed, no elements found.'),u;a&&"number"==typeof a&&(p=n(),m=u.sequences[p]={id:p,interval:a,elemIds:[],active:!1});for(var g=0;g<d.length;g++)(y=d[g].getAttribute("data-sr-id"))?f=u.store.elements[y]:(f={id:n(),domEl:d[g],seen:!1,revealing:!1}).domEl.setAttribute("data-sr-id",f.id),m&&(f.sequence={id:m.id,index:m.elemIds.length},m.elemIds.push(f.id)),function(e,t,n){t.container&&(t.container=n),e.config?e.config=u.tools.extendClone(e.config,t):e.config=u.tools.extendClone(u.defaults,t),"top"===e.config.origin||"bottom"===e.config.origin?e.config.axis="Y":e.config.axis="X"}(f,s,c),function(e){var t=window.getComputedStyle(e.domEl);e.styles||(e.styles={transition:{},transform:{},computed:{}},e.styles.inline=e.domEl.getAttribute("style")||"",e.styles.inline+="; visibility: visible; ",e.styles.computed.opacity=t.opacity,t.transition&&"all 0s ease 0s"!==t.transition?e.styles.computed.transition=t.transition+", ":e.styles.computed.transition=""),e.styles.transition.instant=i(e,0),e.styles.transition.delayed=i(e,e.config.delay),e.styles.transform.initial=" -webkit-transform:",e.styles.transform.target=" -webkit-transform:",o(e),e.styles.transform.initial+="transform:",e.styles.transform.target+="transform:",o(e)}(f),function(e){var t=e.config.container;t&&-1===u.store.containers.indexOf(t)&&u.store.containers.push(e.config.container),u.store.elements[e.id]=e}(f),u.tools.isMobile()&&!f.config.mobile||!u.isSupported()?(f.domEl.setAttribute("style",f.styles.inline),f.disabled=!0):f.revealing||f.domEl.setAttribute("style",f.styles.inline+f.styles.transform.initial);return!l&&u.isSupported()&&(!function(e,t,n){var i={target:e,config:t,interval:n};u.history.push(i)}(e,s,a),u.initTimeout&&window.clearTimeout(u.initTimeout),u.initTimeout=window.setTimeout(r,0)),u},e.prototype.sync=function(){if(u.history.length&&u.isSupported()){for(var e=0;e<u.history.length;e++){var t=u.history[e];u.reveal(t.target,t.config,t.interval,!0)}r()}else console.log("ScrollReveal: sync failed, no reveals found.");return u},f.prototype.isObject=function(e){return null!==e&&"object"==typeof e&&e.constructor===Object},f.prototype.isNode=function(e){return"object"==typeof window.Node?e instanceof window.Node:e&&"object"==typeof e&&"number"==typeof e.nodeType&&"string"==typeof e.nodeName},f.prototype.isNodeList=function(e){var t=Object.prototype.toString.call(e);return"object"==typeof window.NodeList?e instanceof window.NodeList:e&&"object"==typeof e&&/^\[object (HTMLCollection|NodeList|Object)\]$/.test(t)&&"number"==typeof e.length&&(0===e.length||this.isNode(e[0]))},f.prototype.forOwn=function(e,t){if(!this.isObject(e))throw new TypeError('Expected "object", but received "'+typeof e+'".');for(var n in e)e.hasOwnProperty(n)&&t(n)},f.prototype.extend=function(e,t){return this.forOwn(t,(function(n){this.isObject(t[n])?(e[n]&&this.isObject(e[n])||(e[n]={}),this.extend(e[n],t[n])):e[n]=t[n]}).bind(this)),e},f.prototype.extendClone=function(e,t){return this.extend(this.extend({},e),t)},f.prototype.isMobile=function(){return/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)},y=window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||function(e){window.setTimeout(e,1e3/60)},"function"==typeof define&&"object"==typeof define.amd&&define.amd?define(function(){return e}):"undefined"!=typeof module&&module.exports?module.exports=e:window.ScrollReveal=e}();