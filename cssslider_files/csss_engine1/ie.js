// -----------------------------------------------------------------------------------
// http://cssSlider.com/
// cssSlider is a free software that helps you easily generate delicious 
// slideshows with gorgeous transition effects, in a few clicks without writing a single line of code.
// Generated by cssSlider 2.0
//
//***********************************************
// Obfuscated by Javascript Obfuscator
// http://javascript-source.com
//***********************************************
!function(){function e(e,t){if(!e)return[];for(var a=[],n=new RegExp("(^| )"+t+"( |\\d|$)"),i=e.getElementsByTagName("*"),s=0,o=i.length;o>s;s++)n.test(i[s].className)&&a.push(i[s]);return a}function t(t,a,n){var i=e(t,a);for(var s in i)!i[s]||n&&0==s||(i[s].parentNode?i[s].parentNode.removeChild(i[s]):i[s]);return t}function a(e,t){if(e){if("[object Array]"===Object.prototype.toString.call(e))for(var n in e)e[n]&&a(e[n],t);else for(var n in t)e.style[n]=t[n];return e}}function n(e,t,a){if(e)if("[object Array]"===Object.prototype.toString.call(e))for(var i in e)e[i]&&n(e[i],t,a);else e.addEventListener?e.addEventListener(t,a,!1):e.attachEvent?e.attachEvent("on"+t,a):e[t]=a}function i(e,t,n){a(n?e:t,{display:"none",opacity:0}),a(n?t:e,{display:"block",opacity:1})}function s(){function s(){t(p.slider,"cs_anchor",!1),a(p.slider,{overflow:"hidden"}),a([p.playPause,p.autoPlayState?p.btnPause:p.btnPlay,p.arrowPrev,p.arrowNext,p.arrowPrev.getElementsByTagName("label")[0],p.arrowNext.getElementsByTagName("label")[0]],{display:"block",opacity:1}),a(p.slides.concat(p.description),{display:"none",zIndex:0,opacity:0,filter:"alpha(opacity=0)"});var n=[];for(var s in p.description){var o=e(p.description[s],"cs_title")[0],r=e(p.description[s],"cs_descr")[0];o&&(n.push(o),n.push(e(o,"cs_wrapper")[0])),r&&(n.push(r),n.push(e(r,"cs_wrapper")[0]))}a(n,{"-ms-transform":"none",transform:"none",opacity:1,visibility:"visible",filter:"alpha(opacity=100)"}),a(p.slides,{left:"0px",top:"0px"}),a([p.slides[u],p.description[u]],{display:"block",zIndex:3,opacity:1,filter:"alpha(opacity=100)"}),a([p.playPause,p.arrowPrev,p.arrowNext],{"-ms-transform":"none",transform:"none"}),i(p.btnPlay,p.btnPause,p.autoPlayState),p.autoPlayState&&c()}function r(){n(p.arrowPrev,"click",function(){l(0>y-1?p.slides.length-1:y-1)}),n(p.arrowNext,"click",function(){l(y+1>=p.slides.length?0:y+1)}),n(p.bullets,"click",function(e){var t=e.srcElement||e.target;/cs_thumb/g.test(t.parentNode.className)&&(t=t.parentNode),/cs_thumb|cs_point/g.test(t.className)&&(t=t.parentNode);var a=t.className.replace(/num/,"");l(parseInt(a))}),n(p.playPause,"click",function(){p.autoPlayState=!p.autoPlayState,p.autoPlayState&&c(),i(p.btnPlay,p.btnPause,p.autoPlayState)})}function l(e){if(!d&&e!=y){d=1,u=y,y=e,a(p.slides.concat(p.description),{display:"none",opacity:0,zIndex:0,filter:"alpha(opacity=0)","-ms-transform":"none",transform:"none"}),a(p.slides[u],{display:"block",zIndex:1,opacity:1,filter:"alpha(opacity=100)"}),a(p.slides[y],{zIndex:2}),a(p.description[y],{display:"block",zIndex:3,opacity:1,filter:"alpha(opacity=100)"});var t=0;!function n(){t>1&&(t=1),a(p.slides[y],{display:"block",opacity:t,filter:"alpha(opacity="+100*t+")"}),1==t?(a(p.slides[u],{display:"none",zIndex:0,opacity:0,filter:"alpha(opacity=0)"}),d=0):setTimeout(n,15),t+=.05}()}}function c(){setTimeout(function(){p.autoPlayState&&(l(y+1>=p.slides.length?0:y+1),c())},o)}var p=this,d=0,u=0,y=0;p.init=function(a){p.slider=a,p.autoPlayState=!((" "+p.slider.className+" ").indexOf(" no-autoplay ")>-1),p.slides=e(p.slider.getElementsByTagName("ul")[0],"num"),p.playPause=e(p.slider,"cs_play_pause")[0],p.btnPlay=e(p.playPause,"cs_play")[0],p.btnPause=e(p.playPause,"cs_pause"),p.arrowPrev=t(e(p.slider,"cs_arrowprev")[0],"num",!0),p.arrowNext=t(e(p.slider,"cs_arrownext")[0],"num",!0),p.bullets=e(p.slider,"cs_bullets")[0],p.description=e(e(p.slider,"cs_description")[0],"num"),s(),r()}}var o=3400;n(window,"load",function(){for(var t=e(document.body,"csslider"),a=0,n=t.length;n>a;a++){var i=new s;i.init(t[a])}})}();