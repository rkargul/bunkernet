(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[888],{1780:function(e,r,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/_app",function(){return t(5602)}])},8418:function(e,r,t){"use strict";function n(e,r){(null==r||r>e.length)&&(r=e.length);for(var t=0,n=new Array(r);t<r;t++)n[t]=e[t];return n}function o(e,r){return function(e){if(Array.isArray(e))return e}(e)||function(e,r){var t=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=t){var n,o,a=[],c=!0,i=!1;try{for(t=t.call(e);!(c=(n=t.next()).done)&&(a.push(n.value),!r||a.length!==r);c=!0);}catch(l){i=!0,o=l}finally{try{c||null==t.return||t.return()}finally{if(i)throw o}}return a}}(e,r)||function(e,r){if(!e)return;if("string"===typeof e)return n(e,r);var t=Object.prototype.toString.call(e).slice(8,-1);"Object"===t&&e.constructor&&(t=e.constructor.name);if("Map"===t||"Set"===t)return Array.from(t);if("Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return n(e,r)}(e,r)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}r.default=void 0;var a,c=(a=t(7294))&&a.__esModule?a:{default:a},i=t(6273),l=t(387),u=t(7190);var s={};function f(e,r,t,n){if(e&&i.isLocalURL(r)){e.prefetch(r,t,n).catch((function(e){0}));var o=n&&"undefined"!==typeof n.locale?n.locale:e&&e.locale;s[r+"%"+t+(o?"%"+o:"")]=!0}}var d=function(e){var r,t=!1!==e.prefetch,n=l.useRouter(),a=c.default.useMemo((function(){var r=o(i.resolveHref(n,e.href,!0),2),t=r[0],a=r[1];return{href:t,as:e.as?i.resolveHref(n,e.as):a||t}}),[n,e.href,e.as]),d=a.href,h=a.as,p=e.children,v=e.replace,m=e.shallow,y=e.scroll,b=e.locale;"string"===typeof p&&(p=c.default.createElement("a",null,p));var g=(r=c.default.Children.only(p))&&"object"===typeof r&&r.ref,x=o(u.useIntersection({rootMargin:"200px"}),2),w=x[0],j=x[1],k=c.default.useCallback((function(e){w(e),g&&("function"===typeof g?g(e):"object"===typeof g&&(g.current=e))}),[g,w]);c.default.useEffect((function(){var e=j&&t&&i.isLocalURL(d),r="undefined"!==typeof b?b:n&&n.locale,o=s[d+"%"+h+(r?"%"+r:"")];e&&!o&&f(n,d,h,{locale:r})}),[h,d,j,b,t,n]);var E={ref:k,onClick:function(e){r.props&&"function"===typeof r.props.onClick&&r.props.onClick(e),e.defaultPrevented||function(e,r,t,n,o,a,c,l){("A"!==e.currentTarget.nodeName.toUpperCase()||!function(e){var r=e.currentTarget.target;return r&&"_self"!==r||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&i.isLocalURL(t))&&(e.preventDefault(),r[o?"replace":"push"](t,n,{shallow:a,locale:l,scroll:c}))}(e,n,d,h,v,m,y,b)},onMouseEnter:function(e){r.props&&"function"===typeof r.props.onMouseEnter&&r.props.onMouseEnter(e),i.isLocalURL(d)&&f(n,d,h,{priority:!0})}};if(e.passHref||"a"===r.type&&!("href"in r.props)){var N="undefined"!==typeof b?b:n&&n.locale,O=n&&n.isLocaleDomain&&i.getDomainLocale(h,N,n&&n.locales,n&&n.domainLocales);E.href=O||i.addBasePath(i.addLocale(h,N,n&&n.defaultLocale))}return c.default.cloneElement(r,E)};r.default=d},7190:function(e,r,t){"use strict";function n(e,r){(null==r||r>e.length)&&(r=e.length);for(var t=0,n=new Array(r);t<r;t++)n[t]=e[t];return n}function o(e,r){return function(e){if(Array.isArray(e))return e}(e)||function(e,r){var t=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=t){var n,o,a=[],c=!0,i=!1;try{for(t=t.call(e);!(c=(n=t.next()).done)&&(a.push(n.value),!r||a.length!==r);c=!0);}catch(l){i=!0,o=l}finally{try{c||null==t.return||t.return()}finally{if(i)throw o}}return a}}(e,r)||function(e,r){if(!e)return;if("string"===typeof e)return n(e,r);var t=Object.prototype.toString.call(e).slice(8,-1);"Object"===t&&e.constructor&&(t=e.constructor.name);if("Map"===t||"Set"===t)return Array.from(t);if("Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return n(e,r)}(e,r)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}Object.defineProperty(r,"__esModule",{value:!0}),r.useIntersection=function(e){var r=e.rootRef,t=e.rootMargin,n=e.disabled||!i,s=a.useRef(),f=o(a.useState(!1),2),d=f[0],h=f[1],p=o(a.useState(r?r.current:null),2),v=p[0],m=p[1],y=a.useCallback((function(e){s.current&&(s.current(),s.current=void 0),n||d||e&&e.tagName&&(s.current=function(e,r,t){var n=function(e){var r,t={root:e.root||null,margin:e.rootMargin||""},n=u.find((function(e){return e.root===t.root&&e.margin===t.margin}));n?r=l.get(n):(r=l.get(t),u.push(t));if(r)return r;var o=new Map,a=new IntersectionObserver((function(e){e.forEach((function(e){var r=o.get(e.target),t=e.isIntersecting||e.intersectionRatio>0;r&&t&&r(t)}))}),e);return l.set(t,r={id:t,observer:a,elements:o}),r}(t),o=n.id,a=n.observer,c=n.elements;return c.set(e,r),a.observe(e),function(){if(c.delete(e),a.unobserve(e),0===c.size){a.disconnect(),l.delete(o);var r=u.findIndex((function(e){return e.root===o.root&&e.margin===o.margin}));r>-1&&u.splice(r,1)}}}(e,(function(e){return e&&h(e)}),{root:v,rootMargin:t}))}),[n,v,t,d]);return a.useEffect((function(){if(!i&&!d){var e=c.requestIdleCallback((function(){return h(!0)}));return function(){return c.cancelIdleCallback(e)}}}),[d]),a.useEffect((function(){r&&m(r.current)}),[r]),[y,d]};var a=t(7294),c=t(9311),i="undefined"!==typeof IntersectionObserver;var l=new Map,u=[]},5602:function(e,r,t){"use strict";t.r(r),t.d(r,{default:function(){return l}});var n=t(5893),o=t(1664);function a(e){var r=e.children;return(0,n.jsxs)("div",{className:"dark:bg-neutral-900 flex flex-col min-h-screen",children:[(0,n.jsx)("header",{id:"TOP",className:"bg-neutral-200 dark:bg-black py-4 px-8",children:(0,n.jsxs)("div",{className:"container max-w-3xl mx-auto flex justify-between",children:[(0,n.jsx)(o.default,{href:"/",children:(0,n.jsx)("a",{className:"font-mono no-underline my-auto",children:"~/"})}),(0,n.jsxs)("div",{className:"font-mono",children:[(0,n.jsx)("span",{className:"hidden sm:block mx-auto my-auto text-green-600 dark:text-yellow-600",children:"cochaviz@bunkernet.dev"})," ",(0,n.jsx)("span",{className:"block sm:hidden mx-auto my-auto text-green-600 dark:text-yellow-600",children:"cochaviz"})," "]}),(0,n.jsxs)("div",{className:"flex gap-x-2",children:[(0,n.jsx)("a",{href:"https://www.github.com/zoharcochavi",children:" github "}),(0,n.jsx)("a",{href:"https://www.linkedin.com/in/cochaviz",children:" linkedin "})]})]})}),(0,n.jsx)("main",{className:"container max-w-2xl",children:r}),(0,n.jsx)("footer",{className:"bg-neutral-200 dark:bg-black mt-8 py-4",children:(0,n.jsxs)("div",{className:"container max-w-3xl mx-auto text-neutral-400 flex justify-between",children:[(0,n.jsx)("div",{children:"\xa9 2022 - Zohar Cochavi"}),(0,n.jsx)("a",{href:"https://github.com/cochaviz/bunkernet",children:"check the source"})]})})]})}t(9008),t(906);function c(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function i(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{},n=Object.keys(t);"function"===typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(t).filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})))),n.forEach((function(r){c(e,r,t[r])}))}return e}var l=function(e){var r=e.Component,t=e.pageProps;return(0,n.jsx)(a,{children:(0,n.jsx)(r,i({},t))})}},906:function(){},9008:function(e,r,t){e.exports=t(5443)},1664:function(e,r,t){e.exports=t(8418)}},function(e){var r=function(r){return e(e.s=r)};e.O(0,[774,179],(function(){return r(1780),r(387)}));var t=e.O();_N_E=t}]);