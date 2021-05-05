import t from"@babel/runtime/helpers/esm/classCallCheck";import e from"@babel/runtime/helpers/esm/createClass";import n from"@babel/runtime/helpers/esm/assertThisInitialized";import i from"@babel/runtime/helpers/esm/inherits";import r from"@babel/runtime/helpers/esm/possibleConstructorReturn";import o from"@babel/runtime/helpers/esm/getPrototypeOf";import s from"@babel/runtime/helpers/esm/slicedToArray";import a from"@babel/runtime/helpers/esm/defineProperty";import c from"@babel/runtime/helpers/esm/toConsumableArray";import{i as u,s as d,S as l,V as f,W as h,a7 as m,af as p,g as T,n as O,v as I,a0 as E,az as g,ag as y,x as b,y as _,z as A,a3 as S,a4 as C,a5 as M,ad as v,ax as x,a6 as R,U as N,$ as P}from"./client.96e14a9c.js";import{M as D}from"./MenuSurface.a629f768.js";import"@babel/runtime/helpers/esm/typeof";
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
 */var L,F,w={ANCHOR:"mdc-menu-surface--anchor",ANIMATING_CLOSED:"mdc-menu-surface--animating-closed",ANIMATING_OPEN:"mdc-menu-surface--animating-open",FIXED:"mdc-menu-surface--fixed",IS_OPEN_BELOW:"mdc-menu-surface--is-open-below",OPEN:"mdc-menu-surface--open",ROOT:"mdc-menu-surface"},B={CLOSED_EVENT:"MDCMenuSurface:closed",CLOSING_EVENT:"MDCMenuSurface:closing",OPENED_EVENT:"MDCMenuSurface:opened",FOCUSABLE_ELEMENTS:["button:not(:disabled)",'[href]:not([aria-disabled="true"])',"input:not(:disabled)","select:not(:disabled)","textarea:not(:disabled)",'[tabindex]:not([tabindex="-1"]):not([aria-disabled="true"])'].join(", ")},H={TRANSITION_OPEN_DURATION:120,TRANSITION_CLOSE_DURATION:75,MARGIN_TO_EDGE:32,ANCHOR_TO_MENU_SURFACE_WIDTH_RATIO:.67};!function(t){t[t.BOTTOM=1]="BOTTOM",t[t.CENTER=2]="CENTER",t[t.RIGHT=4]="RIGHT",t[t.FLIP_RTL=8]="FLIP_RTL"}(L||(L={})),function(t){t[t.TOP_LEFT=0]="TOP_LEFT",t[t.TOP_RIGHT=4]="TOP_RIGHT",t[t.BOTTOM_LEFT=1]="BOTTOM_LEFT",t[t.BOTTOM_RIGHT=5]="BOTTOM_RIGHT",t[t.TOP_START=8]="TOP_START",t[t.TOP_END=12]="TOP_END",t[t.BOTTOM_START=9]="BOTTOM_START",t[t.BOTTOM_END=13]="BOTTOM_END"}(F||(F={}));
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
var $=function(t,e){return($=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n])})(t,e)};function G(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Class extends value "+String(e)+" is not a constructor or null");function n(){this.constructor=t}$(t,e),t.prototype=null===e?Object.create(e):(n.prototype=e.prototype,new n)}var z=function(){return(z=Object.assign||function(t){for(var e,n=1,i=arguments.length;n<i;n++)for(var r in e=arguments[n])Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r]);return t}).apply(this,arguments)};
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
var j,U,k=function(){function t(t){void 0===t&&(t={}),this.adapter=t}return Object.defineProperty(t,"cssClasses",{get:function(){return{}},enumerable:!1,configurable:!0}),Object.defineProperty(t,"strings",{get:function(){return{}},enumerable:!1,configurable:!0}),Object.defineProperty(t,"numbers",{get:function(){return{}},enumerable:!1,configurable:!0}),Object.defineProperty(t,"defaultAdapter",{get:function(){return{}},enumerable:!1,configurable:!0}),t.prototype.init=function(){},t.prototype.destroy=function(){},t}();
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
 */function V(t,e){if(t.closest)return t.closest(e);for(var n=t;n;){if(W(n,e))return n;n=n.parentElement}return null}function W(t,e){return(t.matches||t.webkitMatchesSelector||t.msMatchesSelector).call(t,e)}
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
 */var q="mdc-list-item--activated",K="mdc-list-item",Q="mdc-list-item--disabled",X="mdc-list-item--selected",J="mdc-list-item__text",Y="mdc-list-item__primary-text",Z="mdc-list";(j={})[""+q]="mdc-list-item--activated",j[""+K]="mdc-list-item",j[""+Q]="mdc-list-item--disabled",j[""+X]="mdc-list-item--selected",j[""+Y]="mdc-list-item__primary-text",j[""+Z]="mdc-list";var tt=((U={})[""+q]="mdc-deprecated-list-item--activated",U[""+K]="mdc-deprecated-list-item",U[""+Q]="mdc-deprecated-list-item--disabled",U[""+X]="mdc-deprecated-list-item--selected",U[""+J]="mdc-deprecated-list-item__text",U[""+Y]="mdc-deprecated-list-item__primary-text",U[""+Z]="mdc-deprecated-list",U);tt[K],tt[K],tt[K],tt[K],tt[K],tt[K];
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
var et,nt=function(t){function e(n){var i=t.call(this,z(z({},e.defaultAdapter),n))||this;return i.isSurfaceOpen=!1,i.isQuickOpen=!1,i.isHoistedElement=!1,i.isFixedPosition=!1,i.isHorizontallyCenteredOnViewport=!1,i.maxHeight=0,i.openAnimationEndTimerId=0,i.closeAnimationEndTimerId=0,i.animationRequestId=0,i.anchorCorner=F.TOP_START,i.originCorner=F.TOP_START,i.anchorMargin={top:0,right:0,bottom:0,left:0},i.position={x:0,y:0},i}return G(e,t),Object.defineProperty(e,"cssClasses",{get:function(){return w},enumerable:!1,configurable:!0}),Object.defineProperty(e,"strings",{get:function(){return B},enumerable:!1,configurable:!0}),Object.defineProperty(e,"numbers",{get:function(){return H},enumerable:!1,configurable:!0}),Object.defineProperty(e,"Corner",{get:function(){return F},enumerable:!1,configurable:!0}),Object.defineProperty(e,"defaultAdapter",{get:function(){return{addClass:function(){},removeClass:function(){},hasClass:function(){return!1},hasAnchor:function(){return!1},isElementInContainer:function(){return!1},isFocused:function(){return!1},isRtl:function(){return!1},getInnerDimensions:function(){return{height:0,width:0}},getAnchorDimensions:function(){return null},getWindowDimensions:function(){return{height:0,width:0}},getBodyDimensions:function(){return{height:0,width:0}},getWindowScroll:function(){return{x:0,y:0}},setPosition:function(){},setMaxHeight:function(){},setTransformOrigin:function(){},saveFocus:function(){},restoreFocus:function(){},notifyClose:function(){},notifyOpen:function(){},notifyClosing:function(){}}},enumerable:!1,configurable:!0}),e.prototype.init=function(){var t=e.cssClasses,n=t.ROOT,i=t.OPEN;if(!this.adapter.hasClass(n))throw new Error(n+" class required in root element.");this.adapter.hasClass(i)&&(this.isSurfaceOpen=!0)},e.prototype.destroy=function(){clearTimeout(this.openAnimationEndTimerId),clearTimeout(this.closeAnimationEndTimerId),cancelAnimationFrame(this.animationRequestId)},e.prototype.setAnchorCorner=function(t){this.anchorCorner=t},e.prototype.flipCornerHorizontally=function(){this.originCorner=this.originCorner^L.RIGHT},e.prototype.setAnchorMargin=function(t){this.anchorMargin.top=t.top||0,this.anchorMargin.right=t.right||0,this.anchorMargin.bottom=t.bottom||0,this.anchorMargin.left=t.left||0},e.prototype.setIsHoisted=function(t){this.isHoistedElement=t},e.prototype.setFixedPosition=function(t){this.isFixedPosition=t},e.prototype.setAbsolutePosition=function(t,e){this.position.x=this.isFinite(t)?t:0,this.position.y=this.isFinite(e)?e:0},e.prototype.setIsHorizontallyCenteredOnViewport=function(t){this.isHorizontallyCenteredOnViewport=t},e.prototype.setQuickOpen=function(t){this.isQuickOpen=t},e.prototype.setMaxHeight=function(t){this.maxHeight=t},e.prototype.isOpen=function(){return this.isSurfaceOpen},e.prototype.open=function(){var t=this;this.isSurfaceOpen||(this.adapter.saveFocus(),this.isQuickOpen?(this.isSurfaceOpen=!0,this.adapter.addClass(e.cssClasses.OPEN),this.dimensions=this.adapter.getInnerDimensions(),this.autoposition(),this.adapter.notifyOpen()):(this.adapter.addClass(e.cssClasses.ANIMATING_OPEN),this.animationRequestId=requestAnimationFrame((function(){t.adapter.addClass(e.cssClasses.OPEN),t.dimensions=t.adapter.getInnerDimensions(),t.autoposition(),t.openAnimationEndTimerId=setTimeout((function(){t.openAnimationEndTimerId=0,t.adapter.removeClass(e.cssClasses.ANIMATING_OPEN),t.adapter.notifyOpen()}),H.TRANSITION_OPEN_DURATION)})),this.isSurfaceOpen=!0))},e.prototype.close=function(t){var n=this;if(void 0===t&&(t=!1),this.isSurfaceOpen){if(this.adapter.notifyClosing(),this.isQuickOpen)return this.isSurfaceOpen=!1,t||this.maybeRestoreFocus(),this.adapter.removeClass(e.cssClasses.OPEN),this.adapter.removeClass(e.cssClasses.IS_OPEN_BELOW),void this.adapter.notifyClose();this.adapter.addClass(e.cssClasses.ANIMATING_CLOSED),requestAnimationFrame((function(){n.adapter.removeClass(e.cssClasses.OPEN),n.adapter.removeClass(e.cssClasses.IS_OPEN_BELOW),n.closeAnimationEndTimerId=setTimeout((function(){n.closeAnimationEndTimerId=0,n.adapter.removeClass(e.cssClasses.ANIMATING_CLOSED),n.adapter.notifyClose()}),H.TRANSITION_CLOSE_DURATION)})),this.isSurfaceOpen=!1,t||this.maybeRestoreFocus()}},e.prototype.handleBodyClick=function(t){var e=t.target;this.adapter.isElementInContainer(e)||this.close()},e.prototype.handleKeydown=function(t){var e=t.keyCode;("Escape"===t.key||27===e)&&this.close()},e.prototype.autoposition=function(){var t;this.measurements=this.getAutoLayoutmeasurements();var n=this.getoriginCorner(),i=this.getMenuSurfaceMaxHeight(n),r=this.hasBit(n,L.BOTTOM)?"bottom":"top",o=this.hasBit(n,L.RIGHT)?"right":"left",s=this.getHorizontalOriginOffset(n),a=this.getVerticalOriginOffset(n),c=this.measurements,u=c.anchorSize,d=c.surfaceSize,l=((t={})[o]=s,t[r]=a,t);u.width/d.width>H.ANCHOR_TO_MENU_SURFACE_WIDTH_RATIO&&(o="center"),(this.isHoistedElement||this.isFixedPosition)&&this.adjustPositionForHoistedElement(l),this.adapter.setTransformOrigin(o+" "+r),this.adapter.setPosition(l),this.adapter.setMaxHeight(i?i+"px":""),this.hasBit(n,L.BOTTOM)||this.adapter.addClass(e.cssClasses.IS_OPEN_BELOW)},e.prototype.getAutoLayoutmeasurements=function(){var t=this.adapter.getAnchorDimensions(),e=this.adapter.getBodyDimensions(),n=this.adapter.getWindowDimensions(),i=this.adapter.getWindowScroll();return t||(t={top:this.position.y,right:this.position.x,bottom:this.position.y,left:this.position.x,width:0,height:0}),{anchorSize:t,bodySize:e,surfaceSize:this.dimensions,viewportDistance:{top:t.top,right:n.width-t.right,bottom:n.height-t.bottom,left:t.left},viewportSize:n,windowScroll:i}},e.prototype.getoriginCorner=function(){var t,n,i=this.originCorner,r=this.measurements,o=r.viewportDistance,s=r.anchorSize,a=r.surfaceSize,c=e.numbers.MARGIN_TO_EDGE;this.hasBit(this.anchorCorner,L.BOTTOM)?(t=o.top-c+this.anchorMargin.bottom,n=o.bottom-c-this.anchorMargin.bottom):(t=o.top-c+this.anchorMargin.top,n=o.bottom-c+s.height-this.anchorMargin.top),!(n-a.height>0)&&t>n&&(i=this.setBit(i,L.BOTTOM));var u,d,l=this.adapter.isRtl(),f=this.hasBit(this.anchorCorner,L.FLIP_RTL),h=this.hasBit(this.anchorCorner,L.RIGHT)||this.hasBit(i,L.RIGHT),m=!1;(m=l&&f?!h:h)?(u=o.left+s.width+this.anchorMargin.right,d=o.right-this.anchorMargin.right):(u=o.left+this.anchorMargin.left,d=o.right+s.width-this.anchorMargin.left);var p=u-a.width>0,T=d-a.width>0,O=this.hasBit(i,L.FLIP_RTL)&&this.hasBit(i,L.RIGHT);return T&&O&&l||!p&&O?i=this.unsetBit(i,L.RIGHT):(p&&m&&l||p&&!m&&h||!T&&u>=d)&&(i=this.setBit(i,L.RIGHT)),i},e.prototype.getMenuSurfaceMaxHeight=function(t){if(this.maxHeight>0)return this.maxHeight;var n=this.measurements.viewportDistance,i=0,r=this.hasBit(t,L.BOTTOM),o=this.hasBit(this.anchorCorner,L.BOTTOM),s=e.numbers.MARGIN_TO_EDGE;return r?(i=n.top+this.anchorMargin.top-s,o||(i+=this.measurements.anchorSize.height)):(i=n.bottom-this.anchorMargin.bottom+this.measurements.anchorSize.height-s,o&&(i-=this.measurements.anchorSize.height)),i},e.prototype.getHorizontalOriginOffset=function(t){var e=this.measurements.anchorSize,n=this.hasBit(t,L.RIGHT),i=this.hasBit(this.anchorCorner,L.RIGHT);if(n){var r=i?e.width-this.anchorMargin.left:this.anchorMargin.right;return this.isHoistedElement||this.isFixedPosition?r-(this.measurements.viewportSize.width-this.measurements.bodySize.width):r}return i?e.width-this.anchorMargin.right:this.anchorMargin.left},e.prototype.getVerticalOriginOffset=function(t){var e=this.measurements.anchorSize,n=this.hasBit(t,L.BOTTOM),i=this.hasBit(this.anchorCorner,L.BOTTOM);return n?i?e.height-this.anchorMargin.top:-this.anchorMargin.bottom:i?e.height+this.anchorMargin.bottom:this.anchorMargin.top},e.prototype.adjustPositionForHoistedElement=function(t){var e,n,i=this.measurements,r=i.windowScroll,o=i.viewportDistance,s=i.surfaceSize,a=i.viewportSize,c=Object.keys(t);try{for(var u=function(t){var e="function"==typeof Symbol&&Symbol.iterator,n=e&&t[e],i=0;if(n)return n.call(t);if(t&&"number"==typeof t.length)return{next:function(){return t&&i>=t.length&&(t=void 0),{value:t&&t[i++],done:!t}}};throw new TypeError(e?"Object is not iterable.":"Symbol.iterator is not defined.")}(c),d=u.next();!d.done;d=u.next()){var l=d.value,f=t[l]||0;!this.isHorizontallyCenteredOnViewport||"left"!==l&&"right"!==l?(f+=o[l],this.isFixedPosition||("top"===l?f+=r.y:"bottom"===l?f-=r.y:"left"===l?f+=r.x:f-=r.x),t[l]=f):t[l]=(a.width-s.width)/2}}catch(t){e={error:t}}finally{try{d&&!d.done&&(n=u.return)&&n.call(u)}finally{if(e)throw e.error}}},e.prototype.maybeRestoreFocus=function(){var t=this.adapter.isFocused(),e=document.activeElement&&this.adapter.isElementInContainer(document.activeElement);(t||e)&&this.adapter.restoreFocus()},e.prototype.hasBit=function(t,e){return Boolean(t&e)},e.prototype.setBit=function(t,e){return t|e},e.prototype.unsetBit=function(t,e){return t^e},e.prototype.isFinite=function(t){return"number"==typeof t&&isFinite(t)},e}(k),it={MENU_SELECTED_LIST_ITEM:"mdc-menu-item--selected",MENU_SELECTION_GROUP:"mdc-menu__selection-group",ROOT:"mdc-menu"},rt={ARIA_CHECKED_ATTR:"aria-checked",ARIA_DISABLED_ATTR:"aria-disabled",CHECKBOX_SELECTOR:'input[type="checkbox"]',LIST_SELECTOR:".mdc-list,.mdc-deprecated-list",SELECTED_EVENT:"MDCMenu:selected"},ot={FOCUS_ROOT_INDEX:-1};
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
 */!function(t){t[t.NONE=0]="NONE",t[t.LIST_ROOT=1]="LIST_ROOT",t[t.FIRST_ITEM=2]="FIRST_ITEM",t[t.LAST_ITEM=3]="LAST_ITEM"}(et||(et={}));
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
var st=function(t){function e(n){var i=t.call(this,z(z({},e.defaultAdapter),n))||this;return i.closeAnimationEndTimerId_=0,i.defaultFocusState_=et.LIST_ROOT,i}return G(e,t),Object.defineProperty(e,"cssClasses",{get:function(){return it},enumerable:!1,configurable:!0}),Object.defineProperty(e,"strings",{get:function(){return rt},enumerable:!1,configurable:!0}),Object.defineProperty(e,"numbers",{get:function(){return ot},enumerable:!1,configurable:!0}),Object.defineProperty(e,"defaultAdapter",{get:function(){return{addClassToElementAtIndex:function(){},removeClassFromElementAtIndex:function(){},addAttributeToElementAtIndex:function(){},removeAttributeFromElementAtIndex:function(){},elementContainsClass:function(){return!1},closeSurface:function(){},getElementIndex:function(){return-1},notifySelected:function(){},getMenuItemCount:function(){return 0},focusItemAtIndex:function(){},focusListRoot:function(){},getSelectedSiblingOfItemAtIndex:function(){return-1},isSelectableItemAtIndex:function(){return!1}}},enumerable:!1,configurable:!0}),e.prototype.destroy=function(){this.closeAnimationEndTimerId_&&clearTimeout(this.closeAnimationEndTimerId_),this.adapter.closeSurface()},e.prototype.handleKeydown=function(t){var e=t.key,n=t.keyCode;("Tab"===e||9===n)&&this.adapter.closeSurface(!0)},e.prototype.handleItemAction=function(t){var e=this,n=this.adapter.getElementIndex(t);n<0||(this.adapter.notifySelected({index:n}),this.adapter.closeSurface(),this.closeAnimationEndTimerId_=setTimeout((function(){var n=e.adapter.getElementIndex(t);n>=0&&e.adapter.isSelectableItemAtIndex(n)&&e.setSelectedIndex(n)}),nt.numbers.TRANSITION_CLOSE_DURATION))},e.prototype.handleMenuSurfaceOpened=function(){switch(this.defaultFocusState_){case et.FIRST_ITEM:this.adapter.focusItemAtIndex(0);break;case et.LAST_ITEM:this.adapter.focusItemAtIndex(this.adapter.getMenuItemCount()-1);break;case et.NONE:break;default:this.adapter.focusListRoot()}},e.prototype.setDefaultFocusState=function(t){this.defaultFocusState_=t},e.prototype.setSelectedIndex=function(t){if(this.validatedIndex_(t),!this.adapter.isSelectableItemAtIndex(t))throw new Error("MDCMenuFoundation: No selection group at specified index.");var e=this.adapter.getSelectedSiblingOfItemAtIndex(t);e>=0&&(this.adapter.removeAttributeFromElementAtIndex(e,rt.ARIA_CHECKED_ATTR),this.adapter.removeClassFromElementAtIndex(e,it.MENU_SELECTED_LIST_ITEM)),this.adapter.addClassToElementAtIndex(t,it.MENU_SELECTED_LIST_ITEM),this.adapter.addAttributeToElementAtIndex(t,rt.ARIA_CHECKED_ATTR,"true")},e.prototype.setEnabled=function(t,e){this.validatedIndex_(t),e?(this.adapter.removeClassFromElementAtIndex(t,Q),this.adapter.addAttributeToElementAtIndex(t,rt.ARIA_DISABLED_ATTR,"false")):(this.adapter.addClassToElementAtIndex(t,Q),this.adapter.addAttributeToElementAtIndex(t,rt.ARIA_DISABLED_ATTR,"true"))},e.prototype.validatedIndex_=function(t){var e=this.adapter.getMenuItemCount();if(!(t>=0&&t<e))throw new Error("MDCMenuFoundation: No list item at specified index.")},e}(k);function at(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,i=o(t);if(e){var s=o(this).constructor;n=Reflect.construct(i,arguments,s)}else n=i.apply(this,arguments);return r(this,n)}}function ct(t){var e,n=t[14].default,i=N(n,t,t[20],null);return{c:function(){i&&i.c()},l:function(t){i&&i.l(t)},m:function(t,n){i&&i.m(t,n),e=!0},p:function(t,e){i&&i.p&&1048576&e&&P(i,n,t,t[20],e,null,null)},i:function(t){e||(b(i,t),e=!0)},o:function(t){_(i,t),e=!1},d:function(t){i&&i.d(t)}}}function ut(t){var e,n,i,r,o=[{use:[t[6]].concat(c(t[1]))},{class:f((e={},a(e,t[2],!0),a(e,"mdc-menu",!0),e))},t[9]];function u(e){t[16](e)}for(var d={$$slots:{default:[ct]},$$scope:{ctx:t}},l=0;l<o.length;l+=1)d=h(d,o[l]);return void 0!==t[0]&&(d.open=t[0]),n=new D({props:d}),t[15](n),m.push((function(){return p(n,"open",u)})),n.$on("SMUI:menu-surface:mount",t[7]),n.$on("SMUI:list:mount",t[8]),n.$on("MDCMenuSurface:opened",t[17]),n.$on("keydown",t[18]),n.$on("MDCList:action",t[19]),{c:function(){T(n.$$.fragment)},l:function(t){O(n.$$.fragment,t)},m:function(t,e){I(n,t,e),r=!0},p:function(t,e){var r,u=s(e,1)[0],d=582&u?E(o,[66&u&&{use:[t[6]].concat(c(t[1]))},4&u&&{class:f((r={},a(r,t[2],!0),a(r,"mdc-menu",!0),r))},512&u&&g(t[9])]):{};1048576&u&&(d.$$scope={dirty:u,ctx:t}),!i&&1&u&&(i=!0,d.open=t[0],y((function(){return i=!1}))),n.$set(d)},i:function(t){r||(b(n.$$.fragment,t),r=!0)},o:function(t){_(n.$$.fragment,t),r=!1},d:function(e){t[15](null),A(n,e)}}}function dt(t,e,n){var i,r,o,s,a=["use","class","open","isOpen","setOpen","setDefaultFocusState","getElement"],c=S(e,a),u=e,d=u.$$slots,l=void 0===d?{}:d,f=u.$$scope,p=V,T=C(M()),O=e.use,I=void 0===O?[]:O,E=e.class,g=void 0===E?"":E,y=e.open,b=void 0!==y&&y;v((function(){return n(4,r=new st({addClassToElementAtIndex:function(t,e){s.addClassForElementIndex(t,e)},removeClassFromElementAtIndex:function(t,e){s.removeClassForElementIndex(t,e)},addAttributeToElementAtIndex:function(t,e,n){s.setAttributeForElementIndex(t,e,n)},removeAttributeFromElementAtIndex:function(t,e){s.removeAttributeForElementIndex(t,e)},elementContainsClass:function(t,e){return t.classList.contains(e)},closeSurface:function(t){return o.closeProgrammatic(t)},getElementIndex:function(t){return s.getOrderedList().map((function(t){return t.element})).indexOf(t)},notifySelected:function(t){return x(i,"MDCMenu:selected",{index:t.index,item:s.getOrderedList()[t.index].element})},getMenuItemCount:function(){return s.items.length},focusItemAtIndex:function(t){return s.focusItemAtIndex(t)},focusListRoot:function(){return s.element.focus()},isSelectableItemAtIndex:function(t){return!!p(s.getOrderedList()[t].element,".".concat(it.MENU_SELECTION_GROUP))},getSelectedSiblingOfItemAtIndex:function(t){var e=s.getOrderedList(),n=p(e[t].element,".".concat(it.MENU_SELECTION_GROUP)).querySelector(".".concat(it.MENU_SELECTED_LIST_ITEM));return n?e.map((function(t){return t.element})).indexOf(n):-1}})),x(i,"SMUI:menu:mount",r),r.init(),function(){r.destroy()}}));return t.$$set=function(t){e=h(h({},e),R(t)),n(9,c=S(e,a)),"use"in t&&n(1,I=t.use),"class"in t&&n(2,g=t.class),"open"in t&&n(0,b=t.open),"$$scope"in t&&n(20,f=t.$$scope)},[b,I,g,i,r,s,T,function(t){o||(o=t.detail)},function(t){s||n(5,s=t.detail)},c,function(){return b},function(t){n(0,b=t)},function(t){r.setDefaultFocusState(t)},function(){return i.getElement()},l,function(t){m[t?"unshift":"push"]((function(){n(3,i=t)}))},function(t){n(0,b=t)},function(){return r&&r.handleMenuSurfaceOpened()},function(t){return r&&r.handleKeydown(t)},function(t){return r&&r.handleItemAction(s.getOrderedList()[t.detail.index].element)},f]}var lt=function(r){i(s,l);var o=at(s);function s(e){var i;return t(this,s),i=o.call(this),u(n(i),e,dt,ut,d,{use:1,class:2,open:0,isOpen:10,setOpen:11,setDefaultFocusState:12,getElement:13}),i}return e(s,[{key:"isOpen",get:function(){return this.$$.ctx[10]}},{key:"setOpen",get:function(){return this.$$.ctx[11]}},{key:"setDefaultFocusState",get:function(){return this.$$.ctx[12]}},{key:"getElement",get:function(){return this.$$.ctx[13]}}]),s}();export{lt as M};
