(this["webpackJsonpsynth-react"]=this["webpackJsonpsynth-react"]||[]).push([[9],{161:function(e,t,a){},227:function(e,t,a){"use strict";a.r(t);var n=a(9),c=a(12),i=a(11),s=a(22),o=a(21),r=a(1),d=a(0),l=a.n(d),h=a(136),j=a(2),b=a(75),u=a(84),f=a(214),x=a(105),O=a(218),m=a(160),p=a(111),g=a(112),N=function(e){var t=[{field:"id",headerName:"ID",flex:2},{field:"name",headerName:"Campaign name",flex:2},{field:"created_at",headerName:"Created at",type:"date",flex:2},{field:"template_id",headerName:"Template ID"},{field:"tags",headerName:"Audience tags",flex:2},{field:"sent",sortable:!1,disableClickEventBubbling:!0,headerName:"Actions",width:300,renderCell:function(t){return Object(r.jsxs)("div",{children:[Object(r.jsx)(f.a,{className:"ActionButtons",onClick:function(){return e.editClick(t.row.id)},children:Object(r.jsx)(p.a,{})}),Object(r.jsx)(f.a,{className:"ActionButtons",onClick:function(){return e.deleteClick(t.row.id)},children:Object(r.jsx)(g.a,{})}),t.value?Object(r.jsx)(f.a,{className:"ActionButtons",onClick:function(){return e.sendClick(t.row.id)},children:Object(r.jsx)(p.b,{})}):Object(r.jsx)(f.a,{className:"ActionButtons",onClick:function(){return e.analyticsClick(t.row.id)},children:Object(r.jsx)(m.a,{})})]})}}];return Object(r.jsx)("div",{style:{height:"calc(100vh - 80px)",margin:"10px",width:"calc(100% - 20px)",backgroundColor:"#dddddd",borderRadius:"4px",textAlign:"center"},children:Object(r.jsx)(x.a,{components:{loadingOverlay:function(){return Object(r.jsx)(x.b,{children:Object(r.jsx)("div",{style:{position:"absolute",top:0,width:"100%"},children:Object(r.jsx)(O.a,{})})})}},onSelectionChange:function(e){console.log(e.rowIds)},loading:e.loading,stickyHeader:!0,rows:e.rows,columns:t,pageSize:15,checkboxSelection:!0})})},v=a(113),k=(a(89),function(e){Object(s.a)(a,e);var t=Object(o.a)(a);function a(e){var n;return Object(c.a)(this,a),(n=t.call(this,e)).getData=function(){u.a.get("http://localhost:5000/api/v1/campaigns").then((function(e){console.log(e),n.setState({loading:!1,data:e})})).catch((function(e){n.setState({loading:!1,data:[{}]})}))},n.newClick=function(){n.setState({redirect:{pathname:"/campaign/edit",state:{from:n.props.location}}})},n.editClick=function(e){n.setState({redirect:{pathname:"/campaign/edit",search:"?id=".concat(n.state.data[e-1].id),state:{from:n.props.location}}})},n.deleteClick=function(e){window.confirm("Are you sure you want to delete this campaign?")&&u.a.delete("path",{id:e}).then((function(){n.setState({data:n.state.data.splice(e,1)})})).catch((function(e){alert(e)}))},n.analyticsClick=function(e){n.setState({redirect:{pathname:"/campaign/analytics",search:"?id=".concat(n.state.data[e-1].id),state:{from:n.props.location}}})},n.sendClick=function(e){n.setState({redirect:{pathname:"/campaign/send",search:"?id=".concat(n.state.data[e-1].id),state:{from:n.props.location}}})},n.state={loading:!0,data:[],redirect:null},n}return Object(i.a)(a,[{key:"componentDidMount",value:function(){this.getData()}},{key:"render",value:function(){return Object(r.jsxs)("div",{children:[Object(r.jsx)(b.a,{children:Object(r.jsx)("title",{children:"CAMPAIGNS | S:YNTH"})}),this.state.redirect&&Object(r.jsx)(j.a,{to:this.state.redirect}),Object(r.jsxs)("div",{className:"DashboardHeadingWrapper",children:[Object(r.jsx)("h2",{className:"DashboardHeading",children:"Campaigns"}),Object(r.jsxs)(f.a,{className:"NewCampaign",onClick:this.newClick,children:[Object(r.jsx)(v.a,{})," CREATE NEW CAMPAIGN "]})]}),Object(r.jsx)(N,{rows:this.state.data,loading:this.state.loading,editClick:this.editClick,deleteClick:this.deleteClick,analyticsClick:this.analyticsClick,sendClick:this.sendClick})]})}}]),a}(l.a.Component)),C=a(14),w=function(e){var t=[{field:"id",headerName:"ID",flex:2},{field:"name",headerName:"Name",flex:2},{field:"created_at",headerName:"Created at",type:"date",flex:2},{field:"buttons",sortable:!1,disableClickEventBubbling:!0,headerName:"Actions",width:300,renderCell:function(e){var t=function(){alert(e.row.id),console.log(e)};return Object(r.jsxs)("div",{children:[Object(r.jsx)(f.a,{className:"ActionButtons",onClick:t,children:Object(r.jsx)(p.a,{})}),Object(r.jsx)(f.a,{className:"ActionButtons",onClick:t,children:Object(r.jsx)(g.a,{})})]})}}];return Object(r.jsx)("div",{style:{height:"calc(100vh - 80px)",margin:"10px",width:"calc(100% - 20px)",backgroundColor:"#dddddd",borderRadius:"4px",textAlign:"center"},children:Object(r.jsx)(x.a,{components:{loadingOverlay:function(){return Object(r.jsx)(x.b,{children:Object(r.jsx)("div",{style:{position:"absolute",top:0,width:"100%"},children:Object(r.jsx)(O.a,{})})})}},onSelectionChange:function(e){console.log(e.rowIds)},loading:e.loading,stickyHeader:!0,rows:e.rows,columns:t,pageSize:15,checkboxSelection:!0})})},y=function(e){Object(s.a)(a,e);var t=Object(o.a)(a);function a(e){var n;return Object(c.a)(this,a),(n=t.call(this,e)).getData=function(){u.a.get("/get/templates").then((function(e){console.log(e),n.setState({loading:!1,data:e.data})})).catch((function(e){n.setState({loading:!1,data:[]})}))},n.state={loading:!0,data:[]},n}return Object(i.a)(a,[{key:"componentDidMount",value:function(){this.getData()}},{key:"render",value:function(){return Object(r.jsxs)("div",{children:[Object(r.jsx)(b.a,{children:Object(r.jsx)("title",{children:"TEMPLATES | S:YNTH"})}),Object(r.jsxs)("div",{className:"DashboardHeadingWrapper",children:[Object(r.jsx)("h2",{className:"DashboardHeading",children:"Templates"}),Object(r.jsx)(f.a,{className:"NewTemplate",children:Object(r.jsxs)(C.b,{to:"/create/template",children:[Object(r.jsx)(v.a,{})," CREATE NEW TEMPLATE "]})})]}),Object(r.jsx)(w,{rows:this.state.data,loading:this.state.loading})]})}}]),a}(l.a.Component),S=function(e){var t=[{field:"id",headerName:"ID",flex:2},{field:"email",headerName:"E-mail address",flex:2},{field:"first_name",headerName:"Firstname",type:"date",flex:2},{field:"lastname",headerName:"Lastname",flex:2},{field:"tags",headerName:"Tags",flex:2,sortable:!1,renderCell:function(e){return Object(r.jsxs)("div",{children:[" ",JSON.stringify(e)]})}},{field:"buttons",sortable:!1,disableClickEventBubbling:!0,headerName:"Actions",width:300,renderCell:function(e){var t=function(){alert(e.row.id),console.log(e)};return Object(r.jsxs)("div",{children:[Object(r.jsx)(f.a,{className:"ActionButtons",onClick:t,children:Object(r.jsx)(p.a,{})}),Object(r.jsx)(f.a,{className:"ActionButtons",onClick:t,children:Object(r.jsx)(g.a,{})})]})}}];return Object(r.jsx)("div",{style:{height:"calc(100vh - 80px)",margin:"10px",width:"calc(100% - 20px)",backgroundColor:"#dddddd",borderRadius:"4px",textAlign:"center"},children:Object(r.jsx)(x.a,{components:{loadingOverlay:function(){return Object(r.jsx)(x.b,{children:Object(r.jsx)("div",{style:{position:"absolute",top:0,width:"100%"},children:Object(r.jsx)(O.a,{})})})}},onSelectionChange:function(e){console.log(e.rowIds)},loading:e.loading,stickyHeader:!0,rows:e.rows,columns:t,pageSize:15,checkboxSelection:!0})})},A=function(e){Object(s.a)(a,e);var t=Object(o.a)(a);function a(e){var n;return Object(c.a)(this,a),(n=t.call(this,e)).getData=function(){u.a.get("/get/audiences").then((function(e){n.setState({loading:!1,data:e.data})})).catch((function(e){n.setState({loading:!1,data:[]})}))},n.state={loading:!0,data:[]},n}return Object(i.a)(a,[{key:"componentDidMount",value:function(){this.getData()}},{key:"render",value:function(){return Object(r.jsxs)("div",{children:[Object(r.jsx)(b.a,{children:Object(r.jsx)("title",{children:"AUDIENCES | S:YNTH"})}),Object(r.jsxs)("div",{className:"DashboardHeadingWrapper",children:[Object(r.jsx)("h2",{className:"DashboardHeading",children:"Audience"}),Object(r.jsx)(f.a,{className:"NewAudience",children:Object(r.jsxs)(C.b,{to:"/create/audience",children:[Object(r.jsx)(v.a,{})," MANAGE AUDIENCE "]})})]}),Object(r.jsx)(S,{rows:this.state.data,loading:this.state.loading})]})}}]),a}(l.a.Component),D=function(){return Object(r.jsxs)("div",{children:[Object(r.jsx)(b.a,{children:Object(r.jsx)("title",{children:"AUTOMATION | S:YNTH"})}),Object(r.jsx)("div",{className:"DashboardHeadingWrapper",children:Object(r.jsx)("h2",{className:"DashboardHeading",children:"Automation"})})]})},H=function(){return Object(r.jsxs)("div",{children:[Object(r.jsx)(b.a,{children:Object(r.jsx)("title",{children:"FORMS | S:YNTH"})}),Object(r.jsx)("div",{className:"DashboardHeadingWrapper",children:Object(r.jsx)("h2",{className:"DashboardHeading",children:"Forms"})})]})},T=function(){return Object(r.jsxs)("div",{children:[Object(r.jsx)(b.a,{children:Object(r.jsx)("title",{children:"ANALYTICS | S:YNTH"})}),Object(r.jsx)("div",{className:"DashboardHeadingWrapper",children:Object(r.jsx)("h2",{className:"DashboardHeading",children:"Analytics"})})]})},B=a(82),E=a(30),I=(a(161),function(e){Object(s.a)(a,e);var t=Object(o.a)(a);function a(e){var n;return Object(c.a)(this,a),(n=t.call(this,e)).state={loading:!0,dashboard:e.dashboard},n}return Object(i.a)(a,[{key:"componentDidMount",value:function(){this.setState({loading:!1})}},{key:"renderDashboard",value:function(e){switch(e){case"campaigns":return Object(r.jsx)(k,Object(n.a)({},this.props));case"templates":return Object(r.jsx)(y,Object(n.a)({},this.props));case"audience":return Object(r.jsx)(A,Object(n.a)({},this.props));case"automation":return Object(r.jsx)(D,Object(n.a)({},this.props));case"forms":return Object(r.jsx)(H,Object(n.a)({},this.props));case"analytics":return Object(r.jsx)(T,Object(n.a)({},this.props));default:return Object(r.jsx)(k,Object(n.a)({},this.props))}}},{key:"switchDashboard",value:function(e){this.props.history.push(e),this.setState({dashboard:e})}},{key:"render",value:function(){var e=this;return Object(r.jsxs)("div",{children:[this.state.loading&&Object(r.jsx)(E.a,{}),Object(r.jsxs)("div",{className:"HomeMain",children:[Object(r.jsxs)("div",{className:"HomeSidebar",children:[Object(r.jsx)(B.a,{}),Object(r.jsxs)("ul",{children:[Object(r.jsx)(h.a,{className:"HomeBox",onClick:function(){return e.switchDashboard("campaigns")},style:"campaigns"===this.state.dashboard?{backgroundColor:"#ffffff24"}:{},boxShadow:3,children:Object(r.jsx)("li",{children:" Campaigns "})}),Object(r.jsx)(h.a,{className:"HomeBox",onClick:function(){return e.switchDashboard("templates")},style:"templates"===this.state.dashboard?{backgroundColor:"#ffffff24"}:{},boxShadow:3,children:Object(r.jsx)("li",{children:" Templates "})}),Object(r.jsx)(h.a,{className:"HomeBox",onClick:function(){return e.switchDashboard("audience")},style:"audience"===this.state.dashboard?{backgroundColor:"#ffffff24"}:{},boxShadow:3,children:Object(r.jsx)("li",{children:" Audience "})}),Object(r.jsx)(h.a,{className:"HomeBox",onClick:function(){return e.switchDashboard("automation")},style:"automation"===this.state.dashboard?{backgroundColor:"#ffffff24"}:{},boxShadow:3,children:Object(r.jsx)("li",{children:" Automation "})}),Object(r.jsx)(h.a,{className:"HomeBox",onClick:function(){return e.switchDashboard("forms")},style:"forms"===this.state.dashboard?{backgroundColor:"#ffffff24"}:{},boxShadow:3,children:Object(r.jsx)("li",{children:" Forms "})}),Object(r.jsx)(h.a,{className:"HomeBox",onClick:function(){return e.switchDashboard("analytics")},style:"analytics"===this.state.dashboard?{backgroundColor:"#ffffff24"}:{},boxShadow:3,children:Object(r.jsx)("li",{children:" Analytics "})})]})]}),Object(r.jsx)("div",{className:"HomeDashboard",children:this.renderDashboard(this.state.dashboard)})]})]})}}]),a}(l.a.Component));t.default=I},82:function(e,t,a){"use strict";var n=a(1);a(0),a(83);t.a=function(){return Object(n.jsx)("div",{children:Object(n.jsx)("nav",{className:"Nav",children:Object(n.jsxs)("div",{className:"BrandHolder",children:[Object(n.jsx)("img",{className:"Logo",alt:"logo",src:"./logo512.png"}),Object(n.jsx)("p",{className:"LogoBrand NavText",children:"YNTH"})]})})})}},83:function(e,t,a){},84:function(e,t,a){"use strict";var n=a(12),c=a(11),i=a(29),s=a.n(i);function o(){var e=JSON.parse(localStorage.getItem("user"));return e&&e.token?{"x-access-token":e.token}:{}}var r="http://localhost:5000/api/v1",d=function(){function e(){Object(n.a)(this,e)}return Object(c.a)(e,[{key:"get",value:function(e){return new Promise((function(t,a){s.a.get(r+e,{headers:o()}).then((function(e){t(e)})).catch((function(e){a(e)}))}))}},{key:"post",value:function(e,t){return new Promise((function(a,n){s.a.post(r+e,t,{headers:o()}).then((function(e){a(e)})).catch((function(e){n(e)}))}))}},{key:"delete",value:function(e,t){return new Promise((function(a,n){s.a.delete(r+e,t,{headers:o()}).then((function(e){a(e)})).catch((function(e){n(e)}))}))}}]),e}();t.a=new d},89:function(e,t,a){}}]);
//# sourceMappingURL=9.2b598ae4.chunk.js.map