(this.webpackJsonpreactnew=this.webpackJsonpreactnew||[]).push([[0],{12:function(e,t,a){},15:function(e,t,a){},23:function(e,t,a){e.exports=a(34)},28:function(e,t,a){},34:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),c=a(21),r=a.n(c),o=(a(28),a(3)),s=a(4),i=a(6),m=a(5),u=(a(12),l.a.Component,a(9)),h=(a(15),a(1)),p=function(e){Object(i.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(o.a)(this,a),(n=t.call(this,e)).state={name:"",email:"",phone:"",fl:null},n.cname=n.cname.bind(Object(u.a)(n)),n.cemail=n.cemail.bind(Object(u.a)(n)),n.cphone=n.cphone.bind(Object(u.a)(n)),n.cpic=n.cpic.bind(Object(u.a)(n)),n.save=n.save.bind(Object(u.a)(n)),n}return Object(s.a)(a,[{key:"cname",value:function(e){this.setState({name:e.target.value})}},{key:"cemail",value:function(e){this.setState({email:e.target.value})}},{key:"cphone",value:function(e){this.setState({phone:e.target.value})}},{key:"cpic",value:function(e){this.setState({fl:e.target.files[0]})}},{key:"save",value:function(){var e=this,t=new FormData;t.append("name",this.state.name),t.append("email",this.state.email),t.append("phone",this.state.phone),t.append("propic",this.state.fl,this.state.fl.name),fetch("http://localhost/reactnew/ins",{method:"post",body:t}).then((function(e){return e.json()})).then((function(t){e.props.history.push("/api")})),alert("successfull")}},{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement("h1",{style:{color:"red"}},"Input Data"),l.a.createElement("div",{className:"form-group"},l.a.createElement("label",{for:"name"},"Name"),l.a.createElement("p",null,l.a.createElement("input",{type:"text",className:"form-control",id:"name",value:this.state.name,onChange:this.cname})),l.a.createElement("label",{for:"email"},"Email"),l.a.createElement("p",null,l.a.createElement("input",{type:"email",className:"form-control",id:"email",value:this.state.email,onChange:this.cemail})),l.a.createElement("label",{for:"phone"},"Phone"),l.a.createElement("p",null,l.a.createElement("input",{type:"text",className:"form-control",id:"phone",value:this.state.phone,onChange:this.cphone})),l.a.createElement("p",null,"Image"),l.a.createElement("p",null,l.a.createElement("input",{type:"file",name:"propic",onChange:this.cpic})),l.a.createElement("p",null,l.a.createElement("input",{type:"button",className:"btn btn-primary",value:"save",onClick:this.save}))))}}]),a}(l.a.Component),d=Object(h.f)(p),b=function(e){Object(i.a)(a,e);var t=Object(m.a)(a);function a(e){return Object(o.a)(this,a),t.call(this,e)}return Object(s.a)(a,[{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement("h1",null,"This is About Page"))}}]),a}(l.a.Component),v=function(e){Object(i.a)(a,e);var t=Object(m.a)(a);function a(e){return Object(o.a)(this,a),t.call(this,e)}return Object(s.a)(a,[{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement("h1",{style:{color:"yellow"}},"You can contact here..."))}}]),a}(l.a.Component),E=function(e){Object(i.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(o.a)(this,a),(n=t.call(this,e)).state={search:"",temp:""},n}return Object(s.a)(a,[{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement("h3",{className:"hometext"},"Search Reasult"),l.a.createElement("h1",{style:{color:"red"}},"What is Lorem Ipsum?"))}}]),a}(l.a.Component),f=function(e){Object(i.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(o.a)(this,a),(n=t.call(this,e)).state={user:[],tmp:""},n.srch=n.srch.bind(Object(u.a)(n)),n.search=n.search.bind(Object(u.a)(n)),n.getall=n.getall.bind(Object(u.a)(n)),n}return Object(s.a)(a,[{key:"del",value:function(e){var t=this;fetch("http://localhost/reactnew/delete/"+e).then((function(e){return e.json()})).then((function(e){t.setState({user:e})})),alert("successfully deleted")}},{key:"search",value:function(){var e=this;fetch("http://localhost/reactnew/srchapi/"+this.state.tmp).then((function(e){return e.json()})).then((function(t){e.setState({user:t})}))}},{key:"srch",value:function(e){this.setState({tmp:e.target.value})}},{key:"getall",value:function(){var e=this;fetch("http://localhost/reactnew/getapi").then((function(e){return e.json()})).then((function(t){e.setState({user:t})}))}},{key:"componentDidMount",value:function(){var e=this;fetch("http://localhost/reactnew/getapi").then((function(e){return e.json()})).then((function(t){e.setState({user:t})}))}},{key:"render",value:function(){var e=this;return l.a.createElement("div",null,l.a.createElement("div",{className:"container"},l.a.createElement("input",{type:"text",name:"srch",value:this.state.tmp,onChange:this.srch}),l.a.createElement("input",{type:"button",value:"Search",onClick:this.search,className:"btn btn-dark"}),l.a.createElement("input",{type:"button",value:"All",onClick:this.getall,className:"btn btn-sucsess"}),l.a.createElement("table",{className:"table table-striped"},l.a.createElement("thead",null,l.a.createElement("tr",null,l.a.createElement("th",null,"Name"),l.a.createElement("th",null,"Email"),l.a.createElement("th",null,"Phone"),l.a.createElement("th",null,"Image"),l.a.createElement("th",null,"Delete"))),l.a.createElement("tbody",null,this.state.user.map((function(t){return l.a.createElement("tr",{key:t.id},l.a.createElement("td",null,t.name),l.a.createElement("td",null,t.email),l.a.createElement("td",null,t.phone),l.a.createElement("td",null,l.a.createElement("img",{src:t.image,className:"imgs"})),l.a.createElement("td",null,l.a.createElement("input",{type:"button",value:"delete",className:"btn btn-danger",onClick:e.del.bind(e,t.id)})))}))))),l.a.createElement("div",{className:"modal",id:"myModal"},l.a.createElement("div",{className:"modal-dialog"},l.a.createElement("div",{className:"modal-content"},l.a.createElement("div",{className:"modal-header"},l.a.createElement("h4",{className:"modal-title"},"Modal Heading"),l.a.createElement("button",{type:"button",className:"close","data-dismiss":"modal"},"\xd7")),l.a.createElement("div",{className:"modal-body"},"Modal body.."),l.a.createElement("div",{className:"modal-footer"},l.a.createElement("button",{type:"button",className:"btn btn-danger","data-dismiss":"modal"},"Close"))))))}}]),a}(l.a.Component),y=a(11),g=function(e){Object(i.a)(a,e);var t=Object(m.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(s.a)(a,[{key:"render",value:function(){return l.a.createElement(y.a,null,l.a.createElement("div",{className:"container"},l.a.createElement("nav",{className:"navbar navbar-expand-sm bg-dark navbar-dark"},l.a.createElement("a",{className:"navbar-brand",to:""},"Logo"),l.a.createElement("ul",{className:"navbar-nav"},l.a.createElement("li",{className:"nav-item"},l.a.createElement(y.b,{className:"nav-link",to:"/"},"Home")),l.a.createElement("li",{className:"nav-item"},l.a.createElement(y.b,{className:"nav-link",to:"/about"},"About")),l.a.createElement("li",{className:"nav-item"},l.a.createElement(y.b,{className:"nav-link",to:"/contact"},"Contact")),l.a.createElement("li",{className:"nav-item"},l.a.createElement(y.b,{className:"nav-link",to:"/api"},"Backend page")),l.a.createElement("li",{className:"nav-item"},l.a.createElement("button",{type:"button",className:"btn btn-danger","data-toggle":"modal","data-target":"#myModal"},"Login")))),l.a.createElement(h.c,null,l.a.createElement(h.a,{exact:!0,path:"/",component:d}),l.a.createElement(h.a,{exact:!0,path:"/about",component:b}),l.a.createElement(h.a,{exact:!0,path:"/contact",component:v}),l.a.createElement(h.a,{exact:!0,path:"/search",component:E}),l.a.createElement(h.a,{exact:!0,path:"/api",component:f}))))}}]),a}(l.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(g,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[23,1,2]]]);
//# sourceMappingURL=main.08182d58.chunk.js.map