import{S as t,i as e,s as n,N as i,O as o,a1 as s,a9 as r,c as a,j as c,o as u,W as d,at as l,aa as h,p as m,r as p,u as f,Z as T,_ as O,$ as E,a7 as I,ar as g,a0 as _,M as S,V as A}from"./client.930fc604.js";import{M as y}from"./MenuSurface.ae4c3a7f.js";
/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */var C,b,M={ANCHOR:"mdc-menu-surface--anchor",ANIMATING_CLOSED:"mdc-menu-surface--animating-closed",ANIMATING_OPEN:"mdc-menu-surface--animating-open",FIXED:"mdc-menu-surface--fixed",IS_OPEN_BELOW:"mdc-menu-surface--is-open-below",OPEN:"mdc-menu-surface--open",ROOT:"mdc-menu-surface"},x={CLOSED_EVENT:"MDCMenuSurface:closed",CLOSING_EVENT:"MDCMenuSurface:closing",OPENED_EVENT:"MDCMenuSurface:opened",FOCUSABLE_ELEMENTS:["button:not(:disabled)",'[href]:not([aria-disabled="true"])',"input:not(:disabled)","select:not(:disabled)","textarea:not(:disabled)",'[tabindex]:not([tabindex="-1"]):not([aria-disabled="true"])'].join(", ")},R={TRANSITION_OPEN_DURATION:120,TRANSITION_CLOSE_DURATION:75,MARGIN_TO_EDGE:32,ANCHOR_TO_MENU_SURFACE_WIDTH_RATIO:.67};!function(t){t[t.BOTTOM=1]="BOTTOM",t[t.CENTER=2]="CENTER",t[t.RIGHT=4]="RIGHT",t[t.FLIP_RTL=8]="FLIP_RTL"}(C||(C={})),function(t){t[t.TOP_LEFT=0]="TOP_LEFT",t[t.TOP_RIGHT=4]="TOP_RIGHT",t[t.BOTTOM_LEFT=1]="BOTTOM_LEFT",t[t.BOTTOM_RIGHT=5]="BOTTOM_RIGHT",t[t.TOP_START=8]="TOP_START",t[t.TOP_END=12]="TOP_END",t[t.BOTTOM_START=9]="BOTTOM_START",t[t.BOTTOM_END=13]="BOTTOM_END"}(b||(b={}));
/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
var v=function(t,e){return(v=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n])})(t,e)};function N(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Class extends value "+String(e)+" is not a constructor or null");function n(){this.constructor=t}v(t,e),t.prototype=null===e?Object.create(e):(n.prototype=e.prototype,new n)}var P=function(){return(P=Object.assign||function(t){for(var e,n=1,i=arguments.length;n<i;n++)for(var o in e=arguments[n])Object.prototype.hasOwnProperty.call(e,o)&&(t[o]=e[o]);return t}).apply(this,arguments)};
/**
 * @license
 * Copyright 2016 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
var D=function(){function t(t){void 0===t&&(t={}),this.adapter=t}return Object.defineProperty(t,"cssClasses",{get:function(){return{}},enumerable:!1,configurable:!0}),Object.defineProperty(t,"strings",{get:function(){return{}},enumerable:!1,configurable:!0}),Object.defineProperty(t,"numbers",{get:function(){return{}},enumerable:!1,configurable:!0}),Object.defineProperty(t,"defaultAdapter",{get:function(){return{}},enumerable:!1,configurable:!0}),t.prototype.init=function(){},t.prototype.destroy=function(){},t}();
/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */function L(t,e){return(t.matches||t.webkitMatchesSelector||t.msMatchesSelector).call(t,e)}var F,w,B=Object.freeze({__proto__:null,closest:function(t,e){if(t.closest)return t.closest(e);for(var n=t;n;){if(L(n,e))return n;n=n.parentElement}return null},matches:L,estimateScrollWidth:function(t){var e=t;if(null!==e.offsetParent)return e.scrollWidth;var n=e.cloneNode(!0);n.style.setProperty("position","absolute"),n.style.setProperty("transform","translate(-9999px, -9999px)"),document.documentElement.appendChild(n);var i=n.scrollWidth;return document.documentElement.removeChild(n),i}}),H="mdc-list-item--activated",$="mdc-list-item",G="mdc-list-item--disabled",j="mdc-list-item--selected",z="mdc-list-item__text",U="mdc-list-item__primary-text",k="mdc-list";
/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */(F={})[""+H]="mdc-list-item--activated",F[""+$]="mdc-list-item",F[""+G]="mdc-list-item--disabled",F[""+j]="mdc-list-item--selected",F[""+U]="mdc-list-item__primary-text",F[""+k]="mdc-list";var W=((w={})[""+H]="mdc-deprecated-list-item--activated",w[""+$]="mdc-deprecated-list-item",w[""+G]="mdc-deprecated-list-item--disabled",w[""+j]="mdc-deprecated-list-item--selected",w[""+z]="mdc-deprecated-list-item__text",w[""+U]="mdc-deprecated-list-item__primary-text",w[""+k]="mdc-deprecated-list",w);W[$],W[$],W[$],W[$],W[$],W[$];
/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
var V,q=function(t){function e(n){var i=t.call(this,P(P({},e.defaultAdapter),n))||this;return i.isSurfaceOpen=!1,i.isQuickOpen=!1,i.isHoistedElement=!1,i.isFixedPosition=!1,i.isHorizontallyCenteredOnViewport=!1,i.maxHeight=0,i.openAnimationEndTimerId=0,i.closeAnimationEndTimerId=0,i.animationRequestId=0,i.anchorCorner=b.TOP_START,i.originCorner=b.TOP_START,i.anchorMargin={top:0,right:0,bottom:0,left:0},i.position={x:0,y:0},i}return N(e,t),Object.defineProperty(e,"cssClasses",{get:function(){return M},enumerable:!1,configurable:!0}),Object.defineProperty(e,"strings",{get:function(){return x},enumerable:!1,configurable:!0}),Object.defineProperty(e,"numbers",{get:function(){return R},enumerable:!1,configurable:!0}),Object.defineProperty(e,"Corner",{get:function(){return b},enumerable:!1,configurable:!0}),Object.defineProperty(e,"defaultAdapter",{get:function(){return{addClass:function(){},removeClass:function(){},hasClass:function(){return!1},hasAnchor:function(){return!1},isElementInContainer:function(){return!1},isFocused:function(){return!1},isRtl:function(){return!1},getInnerDimensions:function(){return{height:0,width:0}},getAnchorDimensions:function(){return null},getWindowDimensions:function(){return{height:0,width:0}},getBodyDimensions:function(){return{height:0,width:0}},getWindowScroll:function(){return{x:0,y:0}},setPosition:function(){},setMaxHeight:function(){},setTransformOrigin:function(){},saveFocus:function(){},restoreFocus:function(){},notifyClose:function(){},notifyOpen:function(){},notifyClosing:function(){}}},enumerable:!1,configurable:!0}),e.prototype.init=function(){var t=e.cssClasses,n=t.ROOT,i=t.OPEN;if(!this.adapter.hasClass(n))throw new Error(n+" class required in root element.");this.adapter.hasClass(i)&&(this.isSurfaceOpen=!0)},e.prototype.destroy=function(){clearTimeout(this.openAnimationEndTimerId),clearTimeout(this.closeAnimationEndTimerId),cancelAnimationFrame(this.animationRequestId)},e.prototype.setAnchorCorner=function(t){this.anchorCorner=t},e.prototype.flipCornerHorizontally=function(){this.originCorner=this.originCorner^C.RIGHT},e.prototype.setAnchorMargin=function(t){this.anchorMargin.top=t.top||0,this.anchorMargin.right=t.right||0,this.anchorMargin.bottom=t.bottom||0,this.anchorMargin.left=t.left||0},e.prototype.setIsHoisted=function(t){this.isHoistedElement=t},e.prototype.setFixedPosition=function(t){this.isFixedPosition=t},e.prototype.setAbsolutePosition=function(t,e){this.position.x=this.isFinite(t)?t:0,this.position.y=this.isFinite(e)?e:0},e.prototype.setIsHorizontallyCenteredOnViewport=function(t){this.isHorizontallyCenteredOnViewport=t},e.prototype.setQuickOpen=function(t){this.isQuickOpen=t},e.prototype.setMaxHeight=function(t){this.maxHeight=t},e.prototype.isOpen=function(){return this.isSurfaceOpen},e.prototype.open=function(){var t=this;this.isSurfaceOpen||(this.adapter.saveFocus(),this.isQuickOpen?(this.isSurfaceOpen=!0,this.adapter.addClass(e.cssClasses.OPEN),this.dimensions=this.adapter.getInnerDimensions(),this.autoposition(),this.adapter.notifyOpen()):(this.adapter.addClass(e.cssClasses.ANIMATING_OPEN),this.animationRequestId=requestAnimationFrame((function(){t.adapter.addClass(e.cssClasses.OPEN),t.dimensions=t.adapter.getInnerDimensions(),t.autoposition(),t.openAnimationEndTimerId=setTimeout((function(){t.openAnimationEndTimerId=0,t.adapter.removeClass(e.cssClasses.ANIMATING_OPEN),t.adapter.notifyOpen()}),R.TRANSITION_OPEN_DURATION)})),this.isSurfaceOpen=!0))},e.prototype.close=function(t){var n=this;if(void 0===t&&(t=!1),this.isSurfaceOpen){if(this.adapter.notifyClosing(),this.isQuickOpen)return this.isSurfaceOpen=!1,t||this.maybeRestoreFocus(),this.adapter.removeClass(e.cssClasses.OPEN),this.adapter.removeClass(e.cssClasses.IS_OPEN_BELOW),void this.adapter.notifyClose();this.adapter.addClass(e.cssClasses.ANIMATING_CLOSED),requestAnimationFrame((function(){n.adapter.removeClass(e.cssClasses.OPEN),n.adapter.removeClass(e.cssClasses.IS_OPEN_BELOW),n.closeAnimationEndTimerId=setTimeout((function(){n.closeAnimationEndTimerId=0,n.adapter.removeClass(e.cssClasses.ANIMATING_CLOSED),n.adapter.notifyClose()}),R.TRANSITION_CLOSE_DURATION)})),this.isSurfaceOpen=!1,t||this.maybeRestoreFocus()}},e.prototype.handleBodyClick=function(t){var e=t.target;this.adapter.isElementInContainer(e)||this.close()},e.prototype.handleKeydown=function(t){var e=t.keyCode;("Escape"===t.key||27===e)&&this.close()},e.prototype.autoposition=function(){var t;this.measurements=this.getAutoLayoutmeasurements();var n=this.getoriginCorner(),i=this.getMenuSurfaceMaxHeight(n),o=this.hasBit(n,C.BOTTOM)?"bottom":"top",s=this.hasBit(n,C.RIGHT)?"right":"left",r=this.getHorizontalOriginOffset(n),a=this.getVerticalOriginOffset(n),c=this.measurements,u=c.anchorSize,d=c.surfaceSize,l=((t={})[s]=r,t[o]=a,t);u.width/d.width>R.ANCHOR_TO_MENU_SURFACE_WIDTH_RATIO&&(s="center"),(this.isHoistedElement||this.isFixedPosition)&&this.adjustPositionForHoistedElement(l),this.adapter.setTransformOrigin(s+" "+o),this.adapter.setPosition(l),this.adapter.setMaxHeight(i?i+"px":""),this.hasBit(n,C.BOTTOM)||this.adapter.addClass(e.cssClasses.IS_OPEN_BELOW)},e.prototype.getAutoLayoutmeasurements=function(){var t=this.adapter.getAnchorDimensions(),e=this.adapter.getBodyDimensions(),n=this.adapter.getWindowDimensions(),i=this.adapter.getWindowScroll();return t||(t={top:this.position.y,right:this.position.x,bottom:this.position.y,left:this.position.x,width:0,height:0}),{anchorSize:t,bodySize:e,surfaceSize:this.dimensions,viewportDistance:{top:t.top,right:n.width-t.right,bottom:n.height-t.bottom,left:t.left},viewportSize:n,windowScroll:i}},e.prototype.getoriginCorner=function(){var t,n,i=this.originCorner,o=this.measurements,s=o.viewportDistance,r=o.anchorSize,a=o.surfaceSize,c=e.numbers.MARGIN_TO_EDGE;this.hasBit(this.anchorCorner,C.BOTTOM)?(t=s.top-c+this.anchorMargin.bottom,n=s.bottom-c-this.anchorMargin.bottom):(t=s.top-c+this.anchorMargin.top,n=s.bottom-c+r.height-this.anchorMargin.top),!(n-a.height>0)&&t>n&&(i=this.setBit(i,C.BOTTOM));var u,d,l=this.adapter.isRtl(),h=this.hasBit(this.anchorCorner,C.FLIP_RTL),m=this.hasBit(this.anchorCorner,C.RIGHT)||this.hasBit(i,C.RIGHT),p=!1;(p=l&&h?!m:m)?(u=s.left+r.width+this.anchorMargin.right,d=s.right-this.anchorMargin.right):(u=s.left+this.anchorMargin.left,d=s.right+r.width-this.anchorMargin.left);var f=u-a.width>0,T=d-a.width>0,O=this.hasBit(i,C.FLIP_RTL)&&this.hasBit(i,C.RIGHT);return T&&O&&l||!f&&O?i=this.unsetBit(i,C.RIGHT):(f&&p&&l||f&&!p&&m||!T&&u>=d)&&(i=this.setBit(i,C.RIGHT)),i},e.prototype.getMenuSurfaceMaxHeight=function(t){if(this.maxHeight>0)return this.maxHeight;var n=this.measurements.viewportDistance,i=0,o=this.hasBit(t,C.BOTTOM),s=this.hasBit(this.anchorCorner,C.BOTTOM),r=e.numbers.MARGIN_TO_EDGE;return o?(i=n.top+this.anchorMargin.top-r,s||(i+=this.measurements.anchorSize.height)):(i=n.bottom-this.anchorMargin.bottom+this.measurements.anchorSize.height-r,s&&(i-=this.measurements.anchorSize.height)),i},e.prototype.getHorizontalOriginOffset=function(t){var e=this.measurements.anchorSize,n=this.hasBit(t,C.RIGHT),i=this.hasBit(this.anchorCorner,C.RIGHT);if(n){var o=i?e.width-this.anchorMargin.left:this.anchorMargin.right;return this.isHoistedElement||this.isFixedPosition?o-(this.measurements.viewportSize.width-this.measurements.bodySize.width):o}return i?e.width-this.anchorMargin.right:this.anchorMargin.left},e.prototype.getVerticalOriginOffset=function(t){var e=this.measurements.anchorSize,n=this.hasBit(t,C.BOTTOM),i=this.hasBit(this.anchorCorner,C.BOTTOM);return n?i?e.height-this.anchorMargin.top:-this.anchorMargin.bottom:i?e.height+this.anchorMargin.bottom:this.anchorMargin.top},e.prototype.adjustPositionForHoistedElement=function(t){var e,n,i=this.measurements,o=i.windowScroll,s=i.viewportDistance,r=i.surfaceSize,a=i.viewportSize,c=Object.keys(t);try{for(var u=function(t){var e="function"==typeof Symbol&&Symbol.iterator,n=e&&t[e],i=0;if(n)return n.call(t);if(t&&"number"==typeof t.length)return{next:function(){return t&&i>=t.length&&(t=void 0),{value:t&&t[i++],done:!t}}};throw new TypeError(e?"Object is not iterable.":"Symbol.iterator is not defined.")}(c),d=u.next();!d.done;d=u.next()){var l=d.value,h=t[l]||0;!this.isHorizontallyCenteredOnViewport||"left"!==l&&"right"!==l?(h+=s[l],this.isFixedPosition||("top"===l?h+=o.y:"bottom"===l?h-=o.y:"left"===l?h+=o.x:h-=o.x),t[l]=h):t[l]=(a.width-r.width)/2}}catch(t){e={error:t}}finally{try{d&&!d.done&&(n=u.return)&&n.call(u)}finally{if(e)throw e.error}}},e.prototype.maybeRestoreFocus=function(){var t=this.adapter.isFocused(),e=document.activeElement&&this.adapter.isElementInContainer(document.activeElement);(t||e)&&this.adapter.restoreFocus()},e.prototype.hasBit=function(t,e){return Boolean(t&e)},e.prototype.setBit=function(t,e){return t|e},e.prototype.unsetBit=function(t,e){return t^e},e.prototype.isFinite=function(t){return"number"==typeof t&&isFinite(t)},e}(D),K={MENU_SELECTED_LIST_ITEM:"mdc-menu-item--selected",MENU_SELECTION_GROUP:"mdc-menu__selection-group",ROOT:"mdc-menu"},Q={ARIA_CHECKED_ATTR:"aria-checked",ARIA_DISABLED_ATTR:"aria-disabled",CHECKBOX_SELECTOR:'input[type="checkbox"]',LIST_SELECTOR:".mdc-list,.mdc-deprecated-list",SELECTED_EVENT:"MDCMenu:selected"},X={FOCUS_ROOT_INDEX:-1};
/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */!function(t){t[t.NONE=0]="NONE",t[t.LIST_ROOT=1]="LIST_ROOT",t[t.FIRST_ITEM=2]="FIRST_ITEM",t[t.LAST_ITEM=3]="LAST_ITEM"}(V||(V={}));
/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
var Z=function(t){function e(n){var i=t.call(this,P(P({},e.defaultAdapter),n))||this;return i.closeAnimationEndTimerId_=0,i.defaultFocusState_=V.LIST_ROOT,i}return N(e,t),Object.defineProperty(e,"cssClasses",{get:function(){return K},enumerable:!1,configurable:!0}),Object.defineProperty(e,"strings",{get:function(){return Q},enumerable:!1,configurable:!0}),Object.defineProperty(e,"numbers",{get:function(){return X},enumerable:!1,configurable:!0}),Object.defineProperty(e,"defaultAdapter",{get:function(){return{addClassToElementAtIndex:function(){},removeClassFromElementAtIndex:function(){},addAttributeToElementAtIndex:function(){},removeAttributeFromElementAtIndex:function(){},elementContainsClass:function(){return!1},closeSurface:function(){},getElementIndex:function(){return-1},notifySelected:function(){},getMenuItemCount:function(){return 0},focusItemAtIndex:function(){},focusListRoot:function(){},getSelectedSiblingOfItemAtIndex:function(){return-1},isSelectableItemAtIndex:function(){return!1}}},enumerable:!1,configurable:!0}),e.prototype.destroy=function(){this.closeAnimationEndTimerId_&&clearTimeout(this.closeAnimationEndTimerId_),this.adapter.closeSurface()},e.prototype.handleKeydown=function(t){var e=t.key,n=t.keyCode;("Tab"===e||9===n)&&this.adapter.closeSurface(!0)},e.prototype.handleItemAction=function(t){var e=this,n=this.adapter.getElementIndex(t);n<0||(this.adapter.notifySelected({index:n}),this.adapter.closeSurface(),this.closeAnimationEndTimerId_=setTimeout((function(){var n=e.adapter.getElementIndex(t);n>=0&&e.adapter.isSelectableItemAtIndex(n)&&e.setSelectedIndex(n)}),q.numbers.TRANSITION_CLOSE_DURATION))},e.prototype.handleMenuSurfaceOpened=function(){switch(this.defaultFocusState_){case V.FIRST_ITEM:this.adapter.focusItemAtIndex(0);break;case V.LAST_ITEM:this.adapter.focusItemAtIndex(this.adapter.getMenuItemCount()-1);break;case V.NONE:break;default:this.adapter.focusListRoot()}},e.prototype.setDefaultFocusState=function(t){this.defaultFocusState_=t},e.prototype.setSelectedIndex=function(t){if(this.validatedIndex_(t),!this.adapter.isSelectableItemAtIndex(t))throw new Error("MDCMenuFoundation: No selection group at specified index.");var e=this.adapter.getSelectedSiblingOfItemAtIndex(t);e>=0&&(this.adapter.removeAttributeFromElementAtIndex(e,Q.ARIA_CHECKED_ATTR),this.adapter.removeClassFromElementAtIndex(e,K.MENU_SELECTED_LIST_ITEM)),this.adapter.addClassToElementAtIndex(t,K.MENU_SELECTED_LIST_ITEM),this.adapter.addAttributeToElementAtIndex(t,Q.ARIA_CHECKED_ATTR,"true")},e.prototype.setEnabled=function(t,e){this.validatedIndex_(t),e?(this.adapter.removeClassFromElementAtIndex(t,G),this.adapter.addAttributeToElementAtIndex(t,Q.ARIA_DISABLED_ATTR,"false")):(this.adapter.addClassToElementAtIndex(t,G),this.adapter.addAttributeToElementAtIndex(t,Q.ARIA_DISABLED_ATTR,"true"))},e.prototype.validatedIndex_=function(t){var e=this.adapter.getMenuItemCount();if(!(t>=0&&t<e))throw new Error("MDCMenuFoundation: No list item at specified index.")},e}(D);function J(t){let e;const n=t[14].default,i=S(n,t,t[20],null);return{c(){i&&i.c()},l(t){i&&i.l(t)},m(t,n){i&&i.m(t,n),e=!0},p(t,e){i&&i.p&&1048576&e&&A(i,n,t,t[20],e,null,null)},i(t){e||(m(i,t),e=!0)},o(t){p(i,t),e=!1},d(t){i&&i.d(t)}}}function Y(t){let e,n,T;const O=[{use:[t[6],...t[1]]},{class:i({[t[2]]:!0,"mdc-menu":!0})},t[9]];function E(e){t[16](e)}let I={$$slots:{default:[J]},$$scope:{ctx:t}};for(let t=0;t<O.length;t+=1)I=o(I,O[t]);return void 0!==t[0]&&(I.open=t[0]),e=new y({props:I}),t[15](e),s.push((()=>r(e,"open",E))),e.$on("SMUI:menu-surface:mount",t[7]),e.$on("SMUI:list:mount",t[8]),e.$on("MDCMenuSurface:opened",t[17]),e.$on("keydown",t[18]),e.$on("MDCList:action",t[19]),{c(){a(e.$$.fragment)},l(t){c(e.$$.fragment,t)},m(t,n){u(e,t,n),T=!0},p(t,[o]){const s=582&o?d(O,[66&o&&{use:[t[6],...t[1]]},4&o&&{class:i({[t[2]]:!0,"mdc-menu":!0})},512&o&&l(t[9])]):{};1048576&o&&(s.$$scope={dirty:o,ctx:t}),!n&&1&o&&(n=!0,s.open=t[0],h((()=>n=!1))),e.$set(s)},i(t){T||(m(e.$$.fragment,t),T=!0)},o(t){p(e.$$.fragment,t),T=!1},d(n){t[15](null),f(e,n)}}}function tt(t,e,n){const i=["use","class","open","isOpen","setOpen","setDefaultFocusState","getElement"];let r=T(e,i),{$$slots:a={},$$scope:c}=e;const{closest:u}=B,d=O(E());let l,h,m,p,{use:f=[]}=e,{class:S=""}=e,{open:A=!1}=e;I((()=>(n(4,h=new Z({addClassToElementAtIndex:(t,e)=>{p.addClassForElementIndex(t,e)},removeClassFromElementAtIndex:(t,e)=>{p.removeClassForElementIndex(t,e)},addAttributeToElementAtIndex:(t,e,n)=>{p.setAttributeForElementIndex(t,e,n)},removeAttributeFromElementAtIndex:(t,e)=>{p.removeAttributeForElementIndex(t,e)},elementContainsClass:(t,e)=>t.classList.contains(e),closeSurface:t=>m.closeProgrammatic(t),getElementIndex:t=>p.getOrderedList().map((t=>t.element)).indexOf(t),notifySelected:t=>g(l,"MDCMenu:selected",{index:t.index,item:p.getOrderedList()[t.index].element}),getMenuItemCount:()=>p.items.length,focusItemAtIndex:t=>p.focusItemAtIndex(t),focusListRoot:()=>p.element.focus(),isSelectableItemAtIndex:t=>!!u(p.getOrderedList()[t].element,`.${K.MENU_SELECTION_GROUP}`),getSelectedSiblingOfItemAtIndex:t=>{const e=p.getOrderedList(),n=u(e[t].element,`.${K.MENU_SELECTION_GROUP}`).querySelector(`.${K.MENU_SELECTED_LIST_ITEM}`);return n?e.map((t=>t.element)).indexOf(n):-1}})),g(l,"SMUI:menu:mount",h),h.init(),()=>{h.destroy()})));return t.$$set=t=>{e=o(o({},e),_(t)),n(9,r=T(e,i)),"use"in t&&n(1,f=t.use),"class"in t&&n(2,S=t.class),"open"in t&&n(0,A=t.open),"$$scope"in t&&n(20,c=t.$$scope)},[A,f,S,l,h,p,d,function(t){m||(m=t.detail)},function(t){p||n(5,p=t.detail)},r,function(){return A},function(t){n(0,A=t)},function(t){h.setDefaultFocusState(t)},function(){return l.getElement()},a,function(t){s[t?"unshift":"push"]((()=>{l=t,n(3,l)}))},function(t){A=t,n(0,A)},()=>h&&h.handleMenuSurfaceOpened(),t=>h&&h.handleKeydown(t),t=>h&&h.handleItemAction(p.getOrderedList()[t.detail.index].element),c]}class et extends t{constructor(t){super(),e(this,t,tt,Y,n,{use:1,class:2,open:0,isOpen:10,setOpen:11,setDefaultFocusState:12,getElement:13})}get isOpen(){return this.$$.ctx[10]}get setOpen(){return this.$$.ctx[11]}get setDefaultFocusState(){return this.$$.ctx[12]}get getElement(){return this.$$.ctx[13]}}export{et as M};
