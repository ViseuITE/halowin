!function(e,t){var n="Navigation";"function"==typeof define&&define.amd?define([],t(n)):"object"==typeof exports?module.exports=t(n):e[n]=t(n)}(this,function(e){"use strict";var t={breakpoint:992,submenuTrigger:"hover",overlay:!0,overlayColor:"rgba(0, 0, 0, 0.7)",autoSubmenuIndicator:!0,submenuIndicatorTrigger:!1,hideSubWhenClickOut:!0,scrollMomentum:!0,scrollSpy:!1,scrollSpySpeed:1e3,scrollSpyOffset:0,landscapeClass:"navigation-landscape",onInit:function(){},onLandscape:function(){},onShowOffCanvas:function(){},onHideOffCanvas:function(){}},n=function(e,n){var i,a={};for(i in t)Object.prototype.hasOwnProperty.call(t,i)&&(a[i]=t[i]);for(i in n)Object.prototype.hasOwnProperty.call(n,i)&&(a[i]=n[i]);return a},i={on:function e(t,n,i){return this.namespaces||(this.namespaces={}),this.namespaces[t]=n,this.addEventListener(t.split(".")[0],n,i||!1),this},off:function e(t,n){if(void 0!==this.namespaces&&this.namespaces[t])return this.removeEventListener(t.split(".")[0],this.namespaces[t],n),delete this.namespaces[t],this},check:function e(t){if(void 0!==this.namespaces)return!!this.namespaces[t]}};window.on=document.on=Element.prototype.on=i.on,window.off=document.off=Element.prototype.off=i.off,window.check=document.check=Element.prototype.check=i.check;var a=function(e,t){for(;null!==e&&"html"!==e.tagName.toLowerCase();){if(e.classList.length>0&&e.classList.contains(t))return!0;e=e.parentNode}return!1},s=function(){return window.innerWidth||document.documentElement.clientWidth||document.body.clientWidth};return function e(i,o){var r,l,c="click.link",u=Number.MAX_VALUE,f=1;if(null===i)return!1;(r=i).init=function(e){r.options=n(t,e),r.navigationBody=r.getElementsByClassName("navigation-body")[0],r.menuItems=r.querySelectorAll(".navigation-item, .navigation-dropdown-item"),r.menuLinks=r.querySelectorAll(".navigation-link, .navigation-dropdown-link");for(var i=r.querySelectorAll(".navigation-dropdown, .navigation-megamenu"),s=0;s<i.length;s++)i[s].className+=" navigation-submenu",i[s].parentNode.className+=" has-submenu";if(r.options.autoSubmenuIndicator){for(var s=0;s<r.menuItems.length;s++)if(r.menuItems[s].classList.contains("has-submenu")){var o=document.createElement("span");o.classList.add("submenu-indicator"),r.menuItems[s].children[1].classList.contains("navigation-dropdown-left")&&o.classList.add("submenu-indicator-left"),r.menuItems[s].children[0].appendChild(o)}}l=!matchMedia("(hover: none)").matches,g(),window.on("resize",g),r.options.overlay&&(r.overlayPanel=document.createElement("div"),r.overlayPanel.classList.add("overlay-panel"),r.overlayPanel.style.background=r.options.overlayColor,r.appendChild(r.overlayPanel),r.overlayPanel.addEventListener("click",r.toggleOffcanvas)),r.getElementsByClassName("navigation-button-toggler")[0].on("click",function(e){e.stopPropagation(),e.preventDefault(),r.toggleOffcanvas()}),r.getElementsByClassName("navigation-body-close-button")[0].on("click",r.toggleOffcanvas),r.options.hideSubWhenClickOut&&(document.on("touchstart.body",function(e){!1===a(e.target,"navigation")&&r.hideSubmenus("BODY")}),document.on("click.body",function(e){!1===a(e.target,"navigation")&&r.hideSubmenus("BODY")}));var c=r.querySelectorAll(".navigation-tabs");if(c.length>0)for(var s=0;s<c.length;s++)$(c[s]);r.options.scrollMomentum&&r.navigationBody.classList.add("scroll-momentum"),r.options.onInit.call()};var g=function(){y(),s()<r.options.breakpoint&&u>r.options.breakpoint&&(r.classList.remove(r.options.landscapeClass),r.hideSubmenus("BODY"),h(),r.options.submenuIndicatorTrigger||v(c),d()),s()>r.options.breakpoint&&f<r.options.breakpoint&&(r.classList.contains(r.options.landscapeClass)||(r.className+=" "+r.options.landscapeClass),r.hideSubmenus("BODY"),h(),"click"===r.options.submenuTrigger||navigator.userAgent.match(/Mobi/i)||navigator.maxTouchPoints>1&&l?v(c):p(),r.options.onLandscape.call()),u=s(),f=s()};function m(e,t){setTimeout(function(){e.classList.remove("is-visible")},100*t)}r.toggleOffcanvas=function(){r.classList.contains(r.options.landscapeClass)||(r.navigationBody.classList.contains("is-visible")||r.classList.contains(r.options.landscapeClass)?(r.navigationBody.className+=" is-invisible",r.navigationBody.check("transitionend")||r.navigationBody.on("transitionend",function(){r.navigationBody.classList.remove("is-visible"),r.navigationBody.classList.remove("is-invisible"),r.navigationBody.off("transitionend")}),r.overlayPanel.className+=" is-invisible",r.overlayPanel.check("transitionend")||r.overlayPanel.on("transitionend",function(){r.overlayPanel.classList.remove("is-visible"),r.overlayPanel.classList.remove("is-invisible"),r.overlayPanel.off("transitionend")}),r.options.onHideOffCanvas.call()):(r.navigationBody.className+=" is-visible",r.overlayPanel.classList.add("is-visible"),r.options.onShowOffCanvas.call()))},r.showSubmenu=function(e){e.nextElementSibling.classList.contains("is-visible")||(e.nextElementSibling.className+=" is-visible"),b(e)},r.hideSubmenus=function(e){var t;t="BODY"===e?r.querySelectorAll(".navigation-submenu.is-visible"):e.parentNode.querySelectorAll(".navigation-submenu.is-visible");for(var n=t.length-1;n>=0;n--)r.classList.contains(r.options.landscapeClass)?m(t[n],t.length-n):t[n].classList.remove("is-visible"),t[n].parentNode.classList.remove("is-active"),t[n].previousElementSibling.getElementsByClassName("submenu-indicator").length>0&&t[n].previousElementSibling.lastElementChild.classList.remove("is-active")};var v=function(e){for(var t=0;t<r.menuLinks.length;t++)r.menuLinks[t].on(e,function(e){if(e.target.parentNode.classList.contains("has-submenu")){if(e.preventDefault(),e.stopPropagation(),!e.target.parentNode.classList.contains("is-active"))return e.target.parentNode.classList.contains("navigation-item")&&r.hideSubmenus("BODY"),e.target.parentNode.className+=" is-active",e.target.getElementsByClassName("submenu-indicator").length>0&&(e.target.lastElementChild.className+=" is-active"),r.hideSubmenus(e.target.parentNode),r.showSubmenu(e.target),!1;if(e.target.parentNode.classList.remove("is-active"),e.target.getElementsByClassName("submenu-indicator").length>0&&e.target.lastElementChild.classList.remove("is-active"),r.hideSubmenus(e.target),"_blank"===e.target.getAttribute("target")||"blank"===e.target.getAttribute("target"))window.open(e.target.getAttribute("href"));else{if("#"===e.target.getAttribute("href")||""===e.target.getAttribute("href")||"javascript:void(0)"===e.target.getAttribute("href"))return!1;window.location.href=e.target.getAttribute("href")}}})},d=function(){r.navigationBody.on("click.indicator",function(e){e.target.classList.length>0&&e.target.classList.contains("submenu-indicator")&&(e.preventDefault(),e.stopPropagation(),e.target.classList.contains("is-active")?(e.target.classList.remove("is-active"),e.target.parentNode.parentNode.classList.remove("is-active"),r.hideSubmenus(e.target.parentNode)):(e.target.parentNode.parentNode.classList.contains("navigation-item")&&r.hideSubmenus("BODY"),e.target.className+=" is-active",e.target.parentNode.parentNode.classList.add("is-active"),r.showSubmenu(e.target.parentNode)))})},p=function(){function e(e){var t=e.getBoundingClientRect();return{x:t.left,y:t.top}}for(var t=0;t<r.menuItems.length;t++)r.menuItems[t].classList.contains("has-submenu")&&(r.menuItems[t].on("mouseenter.item",function(e){e.preventDefault(),e.stopPropagation(),e.target.classList.contains("has-submenu")&&(r.showSubmenu(e.target.firstElementChild),e.target.className+=" is-active")}),r.menuItems[t].on("mouseleave.item",function(t){if(t.preventDefault(),t.stopPropagation(),t.target.classList.contains("has-submenu")){var n=e(t.target.lastElementChild);(t.clientX<n.x||t.clientX>n.x+t.target.lastElementChild.offsetWidth||t.clientY<n.y||t.clientY>n.y+t.target.lastElementChild.offsetHeight)&&(r.hideSubmenus(t.target.firstElementChild),t.target.classList.remove("is-active"))}}))},h=function(){r.navigationBody.off("click.indicator");for(var e=0;e<r.menuItems.length;e++)r.menuItems[e].off("mouseenter.item"),r.menuItems[e].off("mouseleave.item");for(var e=0;e<r.menuLinks.length;e++)r.menuLinks[e].off("click.link")},b=function(e){if(s()>r.options.breakpoint){var t=r.navigationBody.offsetWidth;e.classList.contains("navigation-link")&&(e.offsetLeft+e.nextElementSibling.offsetWidth>t?e.nextElementSibling.style.right=0:e.nextElementSibling.style.right="auto")}},y=function(){for(var e=r.navigationBody.querySelectorAll(".navigation-item > .navigation-submenu"),t=r.navigationBody.offsetWidth,n=0;n<e.length;n++)e[n].previousElementSibling.offsetLeft+e[n].offsetWidth>t?e[n].style.right=0:e[n].style.right="auto"},$=function(e){for(var t=e.getElementsByClassName("navigation-tabs-nav-item"),n=e.getElementsByClassName("navigation-tabs-pane"),i=0;i<t.length;i++)t[i].on("click.tabs",function(e){e.preventDefault(),e.stopImmediatePropagation();for(var i=0;i<t.length;i++)t[i].classList.remove("is-active");e.target.parentNode.classList.add("is-active");for(var i=0;i<n.length;i++)n[i].classList.remove("is-active");n[a(e.target.parentNode)].classList.add("is-active")});function a(e){for(var t=e.parentNode.childNodes,n=0,i=0;i<t.length;i++){if(t[i]==e)return n;1==t[i].nodeType&&n++}return -1}},L=function(){var e=r.querySelectorAll(".navigation-link[href*='#']"),t=function(e){for(var t=[],n=0;n<e.length;n++){var i=e[n].getAttribute("href");if(i.length>1&&"#"===i.substring(0,1)){var a=document.getElementById(i.substr(1)),s=Math.floor(a.offsetTop),o=s+Math.floor(a.offsetHeight);t.push({element:i,hash:i,top:s,bottom:o})}}return t},n=function(e,t){for(var n=0;n<e.length;n++){var i=e[n];if(i.getAttribute("href")===t)return i}},i=function(e){for(var t=0;t<e.length;t++)e[t].parentNode.classList.remove("is-active")},a=function(e,t,n,i){var a={linear:function e(t){return t},easeInQuad:function e(t){return t*t},easeOutQuad:function e(t){return t*(2-t)},easeInOutQuad:function e(t){return t<.5?2*t*t:-1+(4-2*t)*t},easeInCubic:function e(t){return t*t*t},easeOutCubic:function e(t){return--t*t*t+1},easeInOutCubic:function e(t){return t<.5?4*t*t*t:(t-1)*(2*t-2)*(2*t-2)+1},easeInQuart:function e(t){return t*t*t*t},easeOutQuart:function e(t){return 1- --t*t*t*t},easeInOutQuart:function e(t){return t<.5?8*t*t*t*t:1-8*--t*t*t*t},easeInQuint:function e(t){return t*t*t*t*t},easeOutQuint:function e(t){return 1+--t*t*t*t*t},easeInOutQuint:function e(t){return t<.5?16*t*t*t*t*t:1+16*--t*t*t*t*t}},s=window.pageYOffset,o="now"in window.performance?performance.now():new Date().getTime(),l=Math.max(document.body.scrollHeight,document.body.offsetHeight,document.documentElement.clientHeight,document.documentElement.scrollHeight,document.documentElement.offsetHeight),c=window.innerHeight||document.documentElement.clientHeight||document.getElementsByTagName("body")[0].clientHeight,u="number"==typeof e?e:e.offsetTop+r.options.scrollSpyOffset,f=Math.round(l-u<c?l-c:u);if("requestAnimationFrame"in window==!1){window.scroll(0,f),i&&i();return}!function e(){var r="now"in window.performance?performance.now():new Date().getTime(),l=a[n](Math.min(1,(r-o)/t));if(f<0&&(f=0),window.scroll(0,Math.ceil(l*(f-s)+s)),window.pageYOffset===f){i&&i();return}requestAnimationFrame(e)}()};!function(){for(var s=0;s<e.length;s++)e[s].on("click.scrollSpy",function(e){if(!e.target.classList.contains("submenu-indicator")&&e.target.getAttribute("href").length>1&&"#"===e.target.getAttribute("href").substring(0,1)){var t=e.target.getAttribute("href");document.getElementById(t.replace("#","")),t.length>0&&a(document.querySelector(t),r.options.scrollSpySpeed,"easeInOutCubic")}});var o=t(e);window.on("resize.scrollSpy",function(){o=[],o=t(e)}),window.on("scroll.scrollSpy",function(){for(var t,a,s,l={top:(t=this.pageYOffset,a=Math.abs(r.options.scrollSpyOffset),parseInt(t,10)+parseInt(a,10)),left:this.pageXOffset},c=0;c<o.length;c++){var u=o[c];if(l.top>=u.top&&l.top<u.bottom&&(s=n(e,u.hash))){i(e),s.parentNode.classList.add("is-active");break}}})}()};return r.init(o),r.options.scrollSpy&&(window.onload=function(){L()}),r}});