(this["webpackJsonpsynth-react"]=this["webpackJsonpsynth-react"]||[]).push([[7],{125:function(t,e){t.exports={header:{tag:"Header",options:{style:{color:"#000000"},content:"Header",align:"center"}},image:{tag:"Image",options:{style:{},imageStyle:{},width:600,height:"auto",align:"center",src:""}},parahraph:{tag:"Paragraph",options:{style:{},content:""}},socialshare:{tag:"SocialShare",options:{style:{display:"flex",alignItems:"center",justifyContent:"center",width:"100%"},social:[{name:"facebook",display:!0,img:"https://cdn2.iconfinder.com/data/icons/social-media-2285/512/1_Facebook_colored_svg_copy-512.png",link:"#"},{name:"instagram",display:!0,img:"https://cdn2.iconfinder.com/data/icons/social-media-2285/512/1_Instagram_colored_svg_1-512.png",link:"#"},{name:"youtube",display:!0,img:"https://cdn2.iconfinder.com/data/icons/social-media-2285/512/1_Youtube_colored_svg-512.png",link:"#"},{name:"twitter",display:!0,img:"https://cdn2.iconfinder.com/data/icons/social-media-2285/512/1_Twitter3_colored_svg-512.png",link:"#"}]}}}},153:function(t,e,n){},154:function(t,e,n){},156:function(t,e,n){},225:function(t,e,n){"use strict";n.r(e);var c=n(12),a=n(11),s=n(28),i=n(22),r=n(21),o=n(1),l=n(0),d=n.n(l),j=d.a.createContext(!0),h=j.Provider,u=(j.Consumer,j),b=n(77),x=function(t){var e=Object(l.useContext)(u),n=e.state.blocks[t.index].options;return Object(o.jsx)("tr",{stlye:n.style,onClick:function(){var n;n=t.index,e.handler({sideBarOptions:"Header",sideBarTab:"options",currentIndex:n})},children:Object(o.jsx)("td",{children:Object(o.jsx)("h1",{align:n.align,children:n.content})})})},O=function(t){var e=Object(l.useContext)(u),n=e.state.blocks[t.index].options;return Object(o.jsx)("tr",{style:n.style,onClick:function(){var n;n=t.index,e.handler({sideBarOptions:"Image",sideBarTab:"options",currentIndex:n})},children:Object(o.jsx)("td",{children:Object(o.jsx)("img",{alt:n.alt,style:n.imageStyle,width:n.width,height:n.height,align:n.align,src:n.src})})})},p=function(t){var e=Object(l.useContext)(u),n=e.state.blocks[t.index].options;return Object(o.jsx)("tr",{style:n.style,onClick:function(){var n;n=t.index,e.handler({sideBarOptions:"Paragraph",sideBarTab:"options",currentIndex:n})},children:Object(o.jsx)("td",{children:Object(o.jsx)("p",{children:n.content})})})},g=function(t){var e=Object(l.useContext)(u),n=e.state.blocks[t.index].options;return Object(o.jsx)("tr",{style:n.style,onClick:function(){var n;n=t.index,e.handler({sideBarOptions:"SocialShare",sideBarTab:"options",currentIndex:n})},children:Object(o.jsx)("td",{style:{width:"100%",display:"flex",alignItems:"center",justifyContent:"center"},children:n.social.map((function(t,e){return!0===t.display?Object(o.jsx)("a",{style:{margin:"5px",height:"auto"},href:t.link,target:"_blank",rel:"noreferrer",children:Object(o.jsx)("img",{width:"32",height:"32",alt:"social-icon",src:t.img})},e):null}))})})},f=function(t){var e=Object(l.useContext)(u),n=Object(l.useState)({maxWidth:"600",margin:"auto",backgroundColor:"white",height:"850"}),c=Object(b.a)(n,2),a=c[0];c[1];return Object(o.jsx)("table",{id:"mail",width:"600",style:a,children:Object(o.jsx)("tbody",{children:e.state.blocks.map((function(t,e){switch(t.tag){case"Header":return Object(o.jsx)(x,{index:e});case"Image":return Object(o.jsx)(O,{index:e});case"Paragraph":return Object(o.jsx)(p,{index:e});case"SocialShare":return Object(o.jsx)(g,{index:e})}}))})})},k=n(76),v=n(136),m=(n(153),n(125)),y=n.n(m),C=n(155),B=(n(154),function(t){Object(i.a)(n,t);var e=Object(r.a)(n);function n(t){var a;Object(c.a)(this,n),a=e.call(this,t);var s=t.state.blocks[t.state.currentIndex];return a.state={current:s,content:s.options.content,style:s.options.style,align:s.options.align},a}return Object(a.a)(n,[{key:"componentDidMount",value:function(){console.log(this.props)}},{key:"setAlign",value:function(t){var e=this.state.current;e.options.align=t,this.props.handler(e),this.setState({align:t})}},{key:"setContent",value:function(t){var e=this.state.current;e.options.content=t,this.props.handler(e),this.setState({content:t})}},{key:"setBlockStyle",value:function(t,e){var n=this.state.style;n[t]=e,this.props.handler(n),this.setState({style:n.style})}},{key:"render",value:function(){var t=this;return Object(o.jsxs)("div",{children:[Object(o.jsx)("h3",{align:"center",children:"Header OPS"}),Object(o.jsxs)("div",{className:"HeaderOptionsAlign",children:[Object(o.jsx)(v.a,{className:"AlignButtons",style:"left"===this.state.align?{backgroundColor:"#ffffff16"}:{},onClick:function(){return t.setAlign("left",0)},children:Object(o.jsx)(C.c,{className:"FaIcon"})}),Object(o.jsx)(v.a,{className:"AlignButtons",style:"center"===this.state.align?{backgroundColor:"#ffffff16"}:{},onClick:function(){return t.setAlign("center",1)},children:Object(o.jsx)(C.a,{className:"FaIcon"})}),Object(o.jsx)(v.a,{className:"AlignButtons",style:"right"===this.state.align?{backgroundColor:"#ffffff16"}:{},onClick:function(){return t.setAlign("right",2)},children:Object(o.jsx)(C.d,{className:"FaIcon"})}),Object(o.jsx)(v.a,{className:"AlignButtons",style:"justify"===this.state.align?{backgroundColor:"#ffffff16"}:{},onClick:function(){return t.setAlign("justify",3)},children:Object(o.jsx)(C.b,{className:"FaIcon"})})]}),Object(o.jsx)("input",{className:"HeaderOptionsInput",type:"text",value:this.state.text,onChange:function(e){t.setContent(e.target.value)}}),Object(o.jsxs)("div",{className:"ColorPanel",children:[Object(o.jsx)("p",{children:"Color: "})," ",Object(o.jsx)("input",{type:"color",onChange:function(e){return t.setBlockStyle("color",e.target.value)}})]})]})}}]),n}(d.a.Component)),S=function(t){var e=Object(l.useState)(t.currentBlock.options.src),n=Object(b.a)(e,2),c=n[0],a=n[1];return Object(o.jsxs)("div",{children:["ImageOptions link: ",Object(o.jsx)("input",{value:c,type:"text",onChange:function(e){!function(e){a(e);var n=t.currentBlock;n.options.src=e,t.setBlockOptions(n)}(e.target.value)}})]})},N=function(){return Object(o.jsx)("div",{children:"ParagraphOptions"})},w=function(t){var e=Object(l.useState)(t.currentBlock.options.social),n=Object(b.a)(e,2),c=n[0],a=n[1],s=Object(l.useState)({facebook:"true",instagram:"true",youtube:"true",twitter:"true"}),i=Object(b.a)(s,2),r=i[0],d=(i[1],function(e,n){var c=t.currentBlock;c.options.social[n].link=e,t.setBlockOptions(c);var s=Array.from(s);s[n].link=e,a(s)}),j=function(e,n){r[e]=!r[e];var c=t.currentBlock;c.options.social[n].display=e,t.setBlockOptions(c)};return Object(o.jsxs)("div",{children:[Object(o.jsx)("h3",{align:"center",children:"Social Options"}),Object(o.jsxs)("div",{children:[Object(o.jsxs)("div",{children:[Object(o.jsx)("h5",{children:"Facebook"}),"display: ",Object(o.jsx)("input",{type:"checkbox",defaultChecked:r.facebook,onChange:function(t){j(t.target.checked,0)}}),Object(o.jsx)("br",{}),"link: ",Object(o.jsx)("input",{value:c[0].link,type:"text",onChange:function(t){d(t.target.value,0)}})]}),Object(o.jsxs)("div",{children:[Object(o.jsx)("h5",{children:"Instagram"}),"display: ",Object(o.jsx)("input",{type:"checkbox",defaultChecked:r.instagram,onChange:function(t){j(t.target.checked,1)}}),Object(o.jsx)("br",{}),"link: ",Object(o.jsx)("input",{value:c[1].link,type:"text",onChange:function(t){d(t.target.value,1)}})]}),Object(o.jsxs)("div",{children:[Object(o.jsx)("h5",{children:"youtube"}),"display: ",Object(o.jsx)("input",{type:"checkbox",defaultChecked:r.youtube,onChange:function(t){j(t.target.checked,2)}}),Object(o.jsx)("br",{}),"link: ",Object(o.jsx)("input",{value:c[2].link,type:"text",onChange:function(t){d(t.target.value,2)}})]}),Object(o.jsxs)("div",{children:[Object(o.jsx)("h5",{children:"twitter"}),"display: ",Object(o.jsx)("input",{type:"checkbox",defaultChecked:r.twitter,onChange:function(t){j(t.target.checked,3)}}),Object(o.jsx)("br",{}),"link: ",Object(o.jsx)("input",{value:c[3].link,type:"text",onChange:function(t){d(t.target.value,3)}})]})]})]})},I=function(t){Object(i.a)(n,t);var e=Object(r.a)(n);function n(t){var a;return Object(c.a)(this,n),(a=e.call(this,t)).renderOptions=function(t){switch(t){case"Header":return Object(o.jsx)(B,{});case"Image":return Object(o.jsx)(S,{});case"Paragraph":return Object(o.jsx)(N,{});case"SocialShare":return Object(o.jsx)(w,{});default:return null}},a}return Object(a.a)(n,[{key:"render",value:function(){var t=this;return Object(o.jsxs)("div",{className:"EditSidebar",children:[Object(o.jsxs)("div",{className:"SidebarHeader",children:[Object(o.jsx)(v.a,{className:"EditBox",boxShadow:3,onClick:function(){return t.context.handler({sideBarTab:"blocks"})},children:"BLOCKS"}),Object(o.jsx)(v.a,{className:"EditBox",boxShadow:3,onClick:function(){return t.context.handler({sideBarTab:"options"})},children:"OPTIONS"})]}),"blocks"===this.content.state.sideBarTab&&Object(o.jsx)("div",{className:"EditBlocks",children:Object(o.jsxs)("ul",{children:[Object(o.jsx)("li",{onClick:function(){t.context.handler({blocks:[].concat(Object(k.a)(t.content.state.blocks),[y.a.header])})},children:Object(o.jsx)(v.a,{className:"EditBox",boxShadow:3,children:"Header"})}),Object(o.jsx)("li",{onClick:function(){t.context.handler({blocks:[].concat(Object(k.a)(t.content.state.blocks),[y.a.parahraph])})},children:Object(o.jsx)(v.a,{className:"EditBox",boxShadow:3,children:"Paragraph"})}),Object(o.jsx)("li",{onClick:function(){t.context.handler({blocks:[].concat(Object(k.a)(t.content.state.blocks),[y.a.image])})},children:Object(o.jsx)(v.a,{className:"EditBox",boxShadow:3,children:"Image"})}),Object(o.jsx)("li",{onClick:function(){t.context.handler({blocks:[].concat(Object(k.a)(t.content.state.blocks),[y.a.socialshare])})},children:Object(o.jsx)(v.a,{className:"EditBox",boxShadow:3,children:"SocialShare"})})]})}),"options"===this.content.state.sideBarTab&&Object(o.jsx)("div",{className:"EditOptions",children:this.renderOptions(this.content.state.sideBarOptions)})]})}}]),n}(d.a.Component);I.contextType=u;var T=I,_=(n(156),n(82)),H=n(30),E=function(t){Object(i.a)(n,t);var e=Object(r.a)(n);function n(t){var a;return Object(c.a)(this,n),(a=e.call(this,t)).state={loading:!0,blocks:[],sideBarTab:"blocks",currentIndex:0,sideBarOptions:"",html:""},a.handler=a.handler.bind(Object(s.a)(a)),a}return Object(a.a)(n,[{key:"handler",value:function(t){this.setState(t)}},{key:"componentDidMount",value:function(){this.setState({loading:!1})}},{key:"render",value:function(){return Object(o.jsx)(h,{value:{state:this.state,handler:this.handler},children:Object(o.jsxs)("div",{children:[this.state.loading&&Object(o.jsx)(H.a,{}),Object(o.jsx)(_.a,{}),Object(o.jsxs)("div",{className:"EditMain",children:[Object(o.jsx)(T,{}),Object(o.jsx)("div",{className:"EditPreview",children:Object(o.jsx)("div",{className:"EditPreviewHolder",children:Object(o.jsx)("div",{className:"EditTableHolder",children:Object(o.jsx)(f,{})})})})]})]})})}}]),n}(d.a.Component);e.default=E},82:function(t,e,n){"use strict";var c=n(1);n(0),n(83);e.a=function(){return Object(c.jsx)("div",{children:Object(c.jsx)("nav",{className:"Nav",children:Object(c.jsxs)("div",{className:"BrandHolder",children:[Object(c.jsx)("img",{className:"Logo",alt:"logo",src:"./logo512.png"}),Object(c.jsx)("p",{className:"LogoBrand NavText",children:"YNTH"})]})})})}},83:function(t,e,n){}}]);
//# sourceMappingURL=7.716eb6c3.chunk.js.map