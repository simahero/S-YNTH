(this["webpackJsonpsynth-react"]=this["webpackJsonpsynth-react"]||[]).push([[11],{126:function(e,t,n){"use strict";function a(e){var t=e.theme,n=e.name,a=e.props;if(!t||!t.props||!t.props[n])return a;var r,c=t.props[n];for(r in c)void 0===a[r]&&(a[r]=c[r]);return a}n.d(t,"a",(function(){return a}))},132:function(e,t,n){"use strict";var a=n(20),r=n(3),c=n(0),o=(n(10),n(70)),s=n(71),i=c.forwardRef((function(e,t){var n=e.classes,s=e.className,i=e.component,u=void 0===i?"div":i,l=e.square,d=void 0!==l&&l,h=e.elevation,f=void 0===h?1:h,p=e.variant,m=void 0===p?"elevation":p,v=Object(a.a)(e,["classes","className","component","square","elevation","variant"]);return c.createElement(u,Object(r.a)({className:Object(o.a)(n.root,s,"outlined"===m?n.outlined:n["elevation".concat(f)],!d&&n.rounded),ref:t},v))}));t.a=Object(s.a)((function(e){var t={};return e.shadows.forEach((function(e,n){t["elevation".concat(n)]={boxShadow:e}})),Object(r.a)({root:{backgroundColor:e.palette.background.paper,color:e.palette.text.primary,transition:e.transitions.create("box-shadow")},rounded:{borderRadius:e.shape.borderRadius},outlined:{border:"1px solid ".concat(e.palette.divider)}},t)}),{name:"MuiPaper"})(i)},219:function(e,t,n){"use strict";n.r(t);var a=n(12),r=n(11),c=n(22),o=n(21),s=n(1),i=n(0),u=n.n(i),l=n(132),d=n(84),h=n(75),f=n(82),p=function(e){Object(c.a)(n,e);var t=Object(o.a)(n);function n(e){var r;return Object(a.a)(this,n),(r=t.call(this,e)).useQuery=function(){return new URLSearchParams(r.props.location.search)},r.state={campaign:null,tags:[],templates:[]},r}return Object(r.a)(n,[{key:"componentDidMount",value:function(){var e=this;this.useQuery().get("id")&&d.a.get("http://localhost:5000/api/v1/campaigns?id=".concat(this.useQuery().get("id"))).then((function(t){return e.setState({campaign:t})})).catch((function(e){return console.log(e)})),d.a.get("http://localhost:5000/api/v1/templates").then((function(t){return e.setState({templates:t})})).catch((function(e){return console.log(e)})),d.a.get("http://localhost:5000/api/v1/tags").then((function(t){return e.setState({tags:t})})).catch((function(e){return console.log(e)}))}},{key:"render",value:function(){return Object(s.jsxs)(s.Fragment,{children:[Object(s.jsx)(h.a,{children:Object(s.jsx)("title",{children:"EDIT CAMPAIGN | S:YNTH"})}),Object(s.jsx)(f.a,{}),Object(s.jsx)("div",{className:"CreateCampaign",children:Object(s.jsxs)(l.a,{elevation:3,style:{margin:"10px 50px"},children:["campaign: ",JSON.stringify(this.state.campaign),"template to send  ",JSON.stringify(this.state.templates),"audience tags to send to ",JSON.stringify(this.state.tags)]})})]})}}]),n}(u.a.Component);t.default=p},71:function(e,t,n){"use strict";var a=n(3),r=n(20),c=n(0),o=n.n(c),s=(n(10),n(25)),i=n.n(s),u=n(224),l=n(126),d=n(240),h=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return function(n){var c=t.defaultTheme,s=t.withTheme,h=void 0!==s&&s,f=t.name,p=Object(r.a)(t,["defaultTheme","withTheme","name"]);var m=f,v=Object(u.a)(e,Object(a.a)({defaultTheme:c,Component:n,name:f||n.displayName,classNamePrefix:m},p)),j=o.a.forwardRef((function(e,t){e.classes;var s,i=e.innerRef,u=Object(r.a)(e,["classes","innerRef"]),p=v(Object(a.a)(Object(a.a)({},n.defaultProps),e)),m=u;return("string"===typeof f||h)&&(s=Object(d.a)()||c,f&&(m=Object(l.a)({theme:s,name:f,props:u})),h&&!m.theme&&(m.theme=s)),o.a.createElement(n,Object(a.a)({ref:i||t,classes:p},m))}));return i()(j,n),j}},f=n(81);t.a=function(e,t){return h(e,Object(a.a)({defaultTheme:f.a},t))}},82:function(e,t,n){"use strict";var a=n(1);n(0),n(83);t.a=function(){return Object(a.jsx)("div",{children:Object(a.jsx)("nav",{className:"Nav",children:Object(a.jsxs)("div",{className:"BrandHolder",children:[Object(a.jsx)("img",{className:"Logo",alt:"logo",src:"./logo512.png"}),Object(a.jsx)("p",{className:"LogoBrand NavText",children:"YNTH"})]})})})}},83:function(e,t,n){},84:function(e,t,n){"use strict";var a=n(12),r=n(11),c=n(29),o=n.n(c);function s(){var e=JSON.parse(localStorage.getItem("user"));return e&&e.token?{"x-access-token":e.token}:{}}var i="http://localhost:5000/api/v1",u=function(){function e(){Object(a.a)(this,e)}return Object(r.a)(e,[{key:"get",value:function(e){return new Promise((function(t,n){o.a.get(i+e,{headers:s()}).then((function(e){t(e)})).catch((function(e){n(e)}))}))}},{key:"post",value:function(e,t){return new Promise((function(n,a){o.a.post(i+e,t,{headers:s()}).then((function(e){n(e)})).catch((function(e){a(e)}))}))}},{key:"delete",value:function(e,t){return new Promise((function(n,a){o.a.delete(i+e,t,{headers:s()}).then((function(e){n(e)})).catch((function(e){a(e)}))}))}}]),e}();t.a=new u}}]);
//# sourceMappingURL=11.d1cea988.chunk.js.map