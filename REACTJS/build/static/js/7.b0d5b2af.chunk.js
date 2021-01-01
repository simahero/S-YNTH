(this["webpackJsonpsynth-react"]=this["webpackJsonpsynth-react"]||[]).push([[7],{159:function(t,e,r){},160:function(t,e,r){},226:function(t,e,r){"use strict";r.r(e);var n=r(12),a=r(11),o=r(23),i=r(22),c=r(1),s=r(0),l=r.n(s),u=r(154),h=r(227),f=r(232),p=r(210),d=(r(159),function(t){Object(o.a)(r,t);var e=Object(i.a)(r);function r(t){var a;return Object(n.a)(this,r),(a=e.call(this,t)).handleDrag=function(t){t.preventDefault(),t.stopPropagation()},a.handleDragIn=function(t){t.preventDefault(),t.stopPropagation(),t.dataTransfer.items&&t.dataTransfer.items.length>0&&a.setState({dragging:!0})},a.handleDragOut=function(t){t.preventDefault(),t.stopPropagation(),a.setState({dragging:!1})},a.handleDrop=function(t){t.preventDefault(),t.stopPropagation(),a.setState({dragging:!1}),a.props.handleFileChange(t.dataTransfer.files,!0),t.dataTransfer.clearData()},a.handleUploadClick=function(){a.fileUpload.current.click()},a.onChange=function(t){t.stopPropagation(),t.preventDefault(),a.props.handleFileChange(t.target.files[0],!1)},a.state={dragging:!1,error:""},a.fileUpload=l.a.createRef(null),a}return Object(a.a)(r,[{key:"render",value:function(){var t=this;return Object(c.jsxs)("div",{className:this.state.dragging?"DraggedIn":"DraggedOut",onDragEnter:function(e){return t.handleDragIn(e)},onDragLeave:function(e){return t.handleDragOut(e)},onDragOver:function(e){return t.handleDrag(e)},onDrop:function(e){return t.handleDrop(e)},children:[""!==this.props.error&&Object(c.jsx)("div",{className:"DragError",children:this.props.error}),Object(c.jsx)("input",{accept:this.props.accept,type:"file",ref:this.fileUpload,style:{display:"none"},onChange:this.onChange}),Object(c.jsx)(p.a,{onClick:this.handleUploadClick,children:Object(c.jsxs)("p",{children:[Object(c.jsx)("strong",{children:"CLICK HERE"})," TO IMPORT YOUR CSV"]})}),Object(c.jsxs)("div",{children:[Object(c.jsx)("p",{children:"OR DROP HERE"})," "]}),this.children]})}}]),r}(l.a.Component)),g=r(96),v=r.n(g),y=r(98);function j(){return(j=Object(y.a)(v.a.mark((function t(e,r){return v.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",new Promise((function(t,n){var a=new FileReader;a.readAsText(e),a.onload=function(){var e=a.result.split("\n"),o=e[0].split(r);1===o.length&&n("Wrong delimiter!");for(var i=[],c=1;c<e.length;c++){for(var s={},l=e[c].split(r),u=0;u<o.length;u++)s[o[u]]=l[u];i.push(s)}t(i)},a.onerror=function(t){n(t)}})));case 1:case"end":return t.stop()}}),t)})))).apply(this,arguments)}r(160);var m=function(t){Object(o.a)(r,t);var e=Object(i.a)(r);function r(t){var a;return Object(n.a)(this,r),(a=e.call(this,t)).handleFileChange=function(t,e){e?t&&1===t.length?"csv"===t[0].name.split(".")[1]?a.setState({file:t,error:"",loading:!0}):a.setState({error:"Please upload a CSV file!"}):a.setState({error:"Please only drop one file!"}):a.setState({file:t,error:"",loading:!0});""===a.state.error&&a.state.file&&(a.setState({loading:!0}),function(t,e){return j.apply(this,arguments)}(a.state.file,a.state.delimiter).then((function(t){a.setState({contacts:t,loading:!1})})).catch((function(t){a.setState({error:t,loading:!1})})))},a.state={loading:!1,error:null,file:null,delimiter:";",csv:[],method:"Update",tags:[]},a}return Object(a.a)(r,[{key:"render",value:function(){var t=this;return Object(c.jsx)("div",{className:"CreateAudience",children:Object(c.jsxs)("div",{children:[Object(c.jsx)(u.a,{elevation:3,style:{margin:"10px 50px"},children:Object(c.jsx)("div",{className:"DragAndDropHolder",children:Object(c.jsx)(d,{accept:".csv",error:this.state.error,handleFileChange:this.handleFileChange,children:Object(c.jsxs)(h.a,{id:"select",label:"Delimiter",value:this.state.delimiter,onChange:function(e){return t.setState({delimiter:e.target.value})},select:!0,children:[Object(c.jsx)(f.a,{value:";",children:";"}),Object(c.jsx)(f.a,{value:",",children:","}),Object(c.jsx)(f.a,{value:":",children:":"}),Object(c.jsx)(f.a,{value:"|",children:"|"}),Object(c.jsx)(f.a,{value:"~",children:"~"})]})})})}),Object(c.jsxs)(u.a,{elevation:3,style:{margin:"10px 50px"},children:[Object(c.jsx)("h1",{align:"center",children:" Select a method! "}),Object(c.jsx)("div",{className:"RadioGroupHolder",children:Object(c.jsxs)("div",{className:"RadioGroup",children:[Object(c.jsx)("input",{className:"RadioInput",type:"radio"}),Object(c.jsx)("label",{className:"RadioLabel",for:"option-one",children:"Update"}),Object(c.jsx)("input",{className:"RadioInput",type:"radio"}),Object(c.jsx)("label",{className:"RadioLabel",for:"option-two",children:"Override"}),Object(c.jsx)("input",{className:"RadioInput",type:"radio"}),Object(c.jsx)("label",{className:"RadioLabel",for:"option-three",children:"Delete"})]})}),Object(c.jsxs)("div",{className:"OptionDisplay",children:[Object(c.jsx)("div",{children:Object(c.jsx)("p",{})}),Object(c.jsx)("div",{children:Object(c.jsx)("img",{src:"",alt:""})})]})]}),Object(c.jsx)(u.a,{elevation:3,style:{margin:"10px 50px"}})]})})}}]),r}(l.a.Component);e.default=m},96:function(t,e,r){t.exports=r(97)},97:function(t,e,r){var n=function(t){"use strict";var e,r=Object.prototype,n=r.hasOwnProperty,a="function"===typeof Symbol?Symbol:{},o=a.iterator||"@@iterator",i=a.asyncIterator||"@@asyncIterator",c=a.toStringTag||"@@toStringTag";function s(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{s({},"")}catch(R){s=function(t,e,r){return t[e]=r}}function l(t,e,r,n){var a=e&&e.prototype instanceof v?e:v,o=Object.create(a.prototype),i=new S(n||[]);return o._invoke=function(t,e,r){var n=h;return function(a,o){if(n===p)throw new Error("Generator is already running");if(n===d){if("throw"===a)throw o;return P()}for(r.method=a,r.arg=o;;){var i=r.delegate;if(i){var c=E(i,r);if(c){if(c===g)continue;return c}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if(n===h)throw n=d,r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n=p;var s=u(t,e,r);if("normal"===s.type){if(n=r.done?d:f,s.arg===g)continue;return{value:s.arg,done:r.done}}"throw"===s.type&&(n=d,r.method="throw",r.arg=s.arg)}}}(t,r,i),o}function u(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(R){return{type:"throw",arg:R}}}t.wrap=l;var h="suspendedStart",f="suspendedYield",p="executing",d="completed",g={};function v(){}function y(){}function j(){}var m={};m[o]=function(){return this};var b=Object.getPrototypeOf,x=b&&b(b(C([])));x&&x!==r&&n.call(x,o)&&(m=x);var O=j.prototype=v.prototype=Object.create(m);function w(t){["next","throw","return"].forEach((function(e){s(t,e,(function(t){return this._invoke(e,t)}))}))}function L(t,e){function r(a,o,i,c){var s=u(t[a],t,o);if("throw"!==s.type){var l=s.arg,h=l.value;return h&&"object"===typeof h&&n.call(h,"__await")?e.resolve(h.__await).then((function(t){r("next",t,i,c)}),(function(t){r("throw",t,i,c)})):e.resolve(h).then((function(t){l.value=t,i(l)}),(function(t){return r("throw",t,i,c)}))}c(s.arg)}var a;this._invoke=function(t,n){function o(){return new e((function(e,a){r(t,n,e,a)}))}return a=a?a.then(o,o):o()}}function E(t,r){var n=t.iterator[r.method];if(n===e){if(r.delegate=null,"throw"===r.method){if(t.iterator.return&&(r.method="return",r.arg=e,E(t,r),"throw"===r.method))return g;r.method="throw",r.arg=new TypeError("The iterator does not provide a 'throw' method")}return g}var a=u(n,t.iterator,r.arg);if("throw"===a.type)return r.method="throw",r.arg=a.arg,r.delegate=null,g;var o=a.arg;return o?o.done?(r[t.resultName]=o.value,r.next=t.nextLoc,"return"!==r.method&&(r.method="next",r.arg=e),r.delegate=null,g):o:(r.method="throw",r.arg=new TypeError("iterator result is not an object"),r.delegate=null,g)}function D(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function N(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function S(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(D,this),this.reset(!0)}function C(t){if(t){var r=t[o];if(r)return r.call(t);if("function"===typeof t.next)return t;if(!isNaN(t.length)){var a=-1,i=function r(){for(;++a<t.length;)if(n.call(t,a))return r.value=t[a],r.done=!1,r;return r.value=e,r.done=!0,r};return i.next=i}}return{next:P}}function P(){return{value:e,done:!0}}return y.prototype=O.constructor=j,j.constructor=y,y.displayName=s(j,c,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"===typeof t&&t.constructor;return!!e&&(e===y||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,j):(t.__proto__=j,s(t,c,"GeneratorFunction")),t.prototype=Object.create(O),t},t.awrap=function(t){return{__await:t}},w(L.prototype),L.prototype[i]=function(){return this},t.AsyncIterator=L,t.async=function(e,r,n,a,o){void 0===o&&(o=Promise);var i=new L(l(e,r,n,a),o);return t.isGeneratorFunction(r)?i:i.next().then((function(t){return t.done?t.value:i.next()}))},w(O),s(O,c,"Generator"),O[o]=function(){return this},O.toString=function(){return"[object Generator]"},t.keys=function(t){var e=[];for(var r in t)e.push(r);return e.reverse(),function r(){for(;e.length;){var n=e.pop();if(n in t)return r.value=n,r.done=!1,r}return r.done=!0,r}},t.values=C,S.prototype={constructor:S,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=e,this.done=!1,this.delegate=null,this.method="next",this.arg=e,this.tryEntries.forEach(N),!t)for(var r in this)"t"===r.charAt(0)&&n.call(this,r)&&!isNaN(+r.slice(1))&&(this[r]=e)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var r=this;function a(n,a){return c.type="throw",c.arg=t,r.next=n,a&&(r.method="next",r.arg=e),!!a}for(var o=this.tryEntries.length-1;o>=0;--o){var i=this.tryEntries[o],c=i.completion;if("root"===i.tryLoc)return a("end");if(i.tryLoc<=this.prev){var s=n.call(i,"catchLoc"),l=n.call(i,"finallyLoc");if(s&&l){if(this.prev<i.catchLoc)return a(i.catchLoc,!0);if(this.prev<i.finallyLoc)return a(i.finallyLoc)}else if(s){if(this.prev<i.catchLoc)return a(i.catchLoc,!0)}else{if(!l)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return a(i.finallyLoc)}}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var a=this.tryEntries[r];if(a.tryLoc<=this.prev&&n.call(a,"finallyLoc")&&this.prev<a.finallyLoc){var o=a;break}}o&&("break"===t||"continue"===t)&&o.tryLoc<=e&&e<=o.finallyLoc&&(o=null);var i=o?o.completion:{};return i.type=t,i.arg=e,o?(this.method="next",this.next=o.finallyLoc,g):this.complete(i)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),g},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),N(r),g}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var a=n.arg;N(r)}return a}}throw new Error("illegal catch attempt")},delegateYield:function(t,r,n){return this.delegate={iterator:C(t),resultName:r,nextLoc:n},"next"===this.method&&(this.arg=e),g}},t}(t.exports);try{regeneratorRuntime=n}catch(a){Function("r","regeneratorRuntime = r")(n)}},98:function(t,e,r){"use strict";function n(t,e,r,n,a,o,i){try{var c=t[o](i),s=c.value}catch(l){return void r(l)}c.done?e(s):Promise.resolve(s).then(n,a)}function a(t){return function(){var e=this,r=arguments;return new Promise((function(a,o){var i=t.apply(e,r);function c(t){n(i,a,o,c,s,"next",t)}function s(t){n(i,a,o,c,s,"throw",t)}c(void 0)}))}}r.d(e,"a",(function(){return a}))}}]);
//# sourceMappingURL=7.b0d5b2af.chunk.js.map