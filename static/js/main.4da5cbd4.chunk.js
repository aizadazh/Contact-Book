(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{45:function(e,t,a){e.exports=a(75)},50:function(e,t,a){},75:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(23),o=a.n(c),s=(a(50),a(9)),l=a(10),i=a(13),p=a(11),u=a(14),m=a(18),d=a(17),h=a(12),f=a(8),b=a.n(f),v=a(20),y=a(21),E=a.n(y),O=function(e){function t(){var e,a;Object(s.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(i.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(r)))).state={showContactInfo:!1},a.onDeleteClick=function(e){a.props.deleteContact(e)},a}return Object(u.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this;console.log(this.props.contact);var t=this.props.contact,a=t.id,n=t.name,c=t.phone,o=this.state.showContactInfo,s="";return s=this.props.contact.address.constructor===String?this.props.contact.address:this.props.contact.address.street,r.a.createElement("div",null,r.a.createElement("h4",null,n," ",r.a.createElement("i",{onClick:function(){return e.setState({showContactInfo:!e.state.showContactInfo})},className:"fas fa-sort-down",style:{cursor:"pointer",color:"blue"}}),r.a.createElement("i",{className:"fas fa-times",style:{cursor:"pointer",float:"right",color:"red"},onClick:this.onDeleteClick.bind(this,a)}),r.a.createElement(m.b,{to:"contact/edit/".concat(a)},r.a.createElement("i",{className:"fas fa-pencil-alt",style:{cursor:"pointer",float:"right",color:"green",marginRight:"1rem",fontSize:"0.7em",paddingTop:"0.3em"}}))),o?r.a.createElement("ul",{className:"list-group"},r.a.createElement("li",{className:"list-group-item"},"Address: ",s),r.a.createElement("li",{className:"list-group-item"},"Phone: ",c)):null)}}]),t}(n.Component),C=Object(h.b)(null,{deleteContact:function(e){return function(){var t=Object(v.a)(b.a.mark(function t(a){return b.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,E.a.delete("https://jsonplaceholder.typicode.com/users/".concat(e));case 3:a({type:"DELETE_CONTACT",payload:e}),t.next=9;break;case 6:t.prev=6,t.t0=t.catch(0),a({type:"DELETE_CONTACT",payload:e});case 9:case"end":return t.stop()}},t,null,[[0,6]])}));return function(e){return t.apply(this,arguments)}}()}})(O),g=function(e){function t(){return Object(s.a)(this,t),Object(i.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){this.props.getContacts()}},{key:"render",value:function(){var e=this.props.contacts;return r.a.createElement(n.Fragment,null,r.a.createElement("h1",{className:"display-5 mb-2"},r.a.createElement("span",{className:"text-danger"},"\u0421\u043f\u0438\u0441\u043e\u043a \u043a\u043e\u043d\u0442\u0430\u043a\u0442\u043e\u0432")),e.map(function(e){return r.a.createElement(C,{key:e.id,contact:e})}))}}]),t}(n.Component),j=Object(h.b)(function(e){return{contacts:e.contact.contacts}},{getContacts:function(){return function(){var e=Object(v.a)(b.a.mark(function e(t){var a;return b.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,E.a.get("https://jsonplaceholder.typicode.com/users");case 2:a=e.sent,t({type:"GET_CONTACTS",payload:a.data});case 4:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}()}})(g),N=a(19),T=a(41),w=a.n(T),k=function(e){var t=e.label,a=e.name,n=e.value,c=e.placeholder,o=e.type,s=e.onChange,l=e.error;return r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:a},t),r.a.createElement("input",{type:o,name:a,className:w()("form-control form-control-lg",{"is-invalid":l}),placeholder:c,value:n,onChange:s}))};k.defaultProps={type:"text"};var S=k,D=function(e){function t(){var e,a;Object(s.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(i.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(r)))).state={name:"",address:"",phone:"",errors:{}},a.onSubmit=function(e){e.preventDefault();var t=a.state,n=t.name,r=t.address,c=t.phone;if(""!==n)if(""!==c)if(""!==r){var o={name:n,address:r,phone:c};a.props.addContact(o),a.setState={name:"",address:"",phone:"",errors:{}},a.props.history.push("/")}else a.setState({errors:{address:"\u041f\u043e\u0436\u0430\u043b\u0443\u0439\u0441\u0442\u0430, \u0432\u0432\u0435\u0434\u0438\u0442\u0435 \u0430\u0434\u0440\u0435\u0441"}});else a.setState({errors:{phone:"\u041f\u043e\u0436\u0430\u043b\u0443\u0439\u0441\u0442\u0430, \u0432\u0432\u0435\u0434\u0438\u0442\u0435 \u043d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0430"}});else a.setState({errors:{name:"\u041f\u043e\u0436\u0430\u043b\u0443\u0439\u0441\u0442\u0430, \u0432\u0432\u0435\u0434\u0438\u0442\u0435 \u0438\u043c\u044f"}})},a.onChange=function(e){return a.setState(Object(N.a)({},e.target.name,e.target.value))},a}return Object(u.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this.state,t=e.name,a=e.address,n=e.phone,c=e.errors;return r.a.createElement("div",{className:"card mb-3"},r.a.createElement("div",{className:"card-header"},"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c \u043a\u043e\u043d\u0442\u0430\u043a\u0442"),r.a.createElement("div",{className:"card-body"},r.a.createElement("form",{onSubmit:this.onSubmit},r.a.createElement(S,{label:"\u0424\u0418\u041e",name:"name",placeholder:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0438\u043c\u044f",value:t,onChange:this.onChange,error:c.name}),r.a.createElement(S,{label:"\u0410\u0434\u0440\u0435\u0441",name:"address",type:"address",placeholder:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0430\u0434\u0440\u0435\u0441",value:a,onChange:this.onChange,error:c.address}),r.a.createElement(S,{label:"\u041d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0430",name:"phone",placeholder:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0430",value:n,onChange:this.onChange,error:c.phone}),r.a.createElement("input",{type:"submit",value:"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c \u043a\u043e\u043d\u0442\u0430\u043a\u0442",className:"btn btn-danger btn-block"}))))}}]),t}(n.Component),x=Object(h.b)(null,{addContact:function(e){return function(){var t=Object(v.a)(b.a.mark(function t(a){var n;return b.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,E.a.post("https://jsonplaceholder.typicode.com/users",e);case 2:n=t.sent,a({type:"ADD_CONTACT",payload:n.data});case 4:case"end":return t.stop()}},t)}));return function(e){return t.apply(this,arguments)}}()}})(D),A=function(e){function t(){var e,a;Object(s.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(i.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(r)))).state={name:"",address:"",phone:"",errors:{}},a.onSubmit=function(e){e.preventDefault();var t=a.state,n=t.name,r=t.address,c=t.phone;if(""!==n)if(""!==r)if(""!==c){var o={id:a.props.match.params.id,name:n,address:r,phone:c};a.props.editContact(o),a.setState({name:"",address:"",phone:"",errors:{}}),a.props.history.push("/")}else a.setState({errors:{phone:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0430"}});else a.setState({errors:{address:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0430\u0434\u0440\u0435\u0441"}});else a.setState({errors:{name:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0438\u043c\u044f"}})},a.onChange=function(e){return a.setState(Object(N.a)({},e.target.name,e.target.value))},a}return Object(u.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){var e=this.props.match.params.id;this.props.getContact(e)}},{key:"componentWillReceiveProps",value:function(e,t){var a=e.contact,n=a.name,r=a.address,c=a.phone;this.setState({name:n,address:r,phone:c}),console.log(r.street)}},{key:"render",value:function(){var e=this.state,t=e.name,a=e.address,n=e.phone,c=e.errors;return r.a.createElement("div",{className:"card mb-3"},r.a.createElement("div",{className:"card-header"},"\u0420\u0435\u0434\u0430\u043a\u0442\u0438\u0440\u043e\u0432\u0430\u0442\u044c \u043a\u043e\u043d\u0442\u0430\u043a\u0442"),r.a.createElement("div",{className:"card-body"},r.a.createElement("form",{onSubmit:this.onSubmit},r.a.createElement(S,{label:"\u0424\u0418\u041e",name:"name",placeholder:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0438\u043c\u044f",value:t,onChange:this.onChange,error:c.name}),r.a.createElement(S,{label:"\u0410\u0434\u0440\u0435\u0441",name:"address",type:"address",placeholder:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0430\u0434\u0440\u0435\u0441",value:a.street,onChange:this.onChange,error:c.address}),r.a.createElement(S,{label:"\u041d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0430",name:"phone",placeholder:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0430",value:n,onChange:this.onChange,error:c.phone}),r.a.createElement("input",{type:"submit",value:"\u0420\u0435\u0434\u0430\u043a\u0442\u0438\u0440\u043e\u0432\u0430\u0442\u044c \u043a\u043e\u043d\u0442\u0430\u043a\u0442",className:"btn btn-dark btn-block"}))))}}]),t}(n.Component),P=Object(h.b)(function(e){return{contact:e.contact.contact}},{getContact:function(e){return function(){var t=Object(v.a)(b.a.mark(function t(a){var n;return b.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,E.a.get("https://jsonplaceholder.typicode.com/users/".concat(e));case 2:n=t.sent,a({type:"GET_CONTACT",payload:n.data});case 4:case"end":return t.stop()}},t)}));return function(e){return t.apply(this,arguments)}}()},editContact:function(e){return function(){var t=Object(v.a)(b.a.mark(function t(a){var n;return b.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,E.a.put("https://jsonplaceholder.typicode.com/users/".concat(e.id),e);case 2:n=t.sent,a({type:"EDIT_CONTACT",payload:n.data});case 4:case"end":return t.stop()}},t)}));return function(e){return t.apply(this,arguments)}}()}})(A),_=function(e){var t=e.branding;return r.a.createElement("nav",{className:"navbar navbar-expand-sm navbar-dark bg-info mb-3 py-3"},r.a.createElement("div",{className:"container"},r.a.createElement("a",{href:"/",className:"navbar-brand"},t),r.a.createElement("div",null,r.a.createElement("ul",{className:"navbar-nav mr-auto"},r.a.createElement("li",{className:"nav-item"},r.a.createElement(m.b,{to:"/",className:"nav-link"},r.a.createElement("i",{className:"fas fa-home"})," \u0413\u043b\u0430\u0432\u043d\u0430\u044f")),r.a.createElement("li",{className:"nav-item"},r.a.createElement(m.b,{to:"/contact/add",className:"nav-link"},r.a.createElement("i",{className:"fas fa-plus"})," \u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c"))))))};_.defaultProps={branding:"Contact Book"};var I=_,G=a(16),L=a(42),M=a(43),R=a(44);function B(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),a.push.apply(a,n)}return a}function F(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?B(a,!0).forEach(function(t){Object(N.a)(e,t,a[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):B(a).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))})}return e}var J={contacts:[],contact:{}},W=Object(G.combineReducers)({contact:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:J,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"GET_CONTACTS":return F({},e,{contacts:t.payload});case"GET_CONTACT":return F({},e,{contact:t.payload});case"ADD_CONTACT":return F({},e,{contacts:[].concat(Object(R.a)(e.contacts),[t.payload])});case"EDIT_CONTACT":return F({},e,{contacts:e.contacts.map(function(e){return e.id===t.payload.id?t.payload:e})});case"DELETE_CONTACT":return F({},e,{contacts:e.contacts.filter(function(e){return e.id!==t.payload})});default:return e}}}),z=[M.a],q=Object(G.createStore)(W,{},Object(L.composeWithDevTools)(G.applyMiddleware.apply(void 0,z))),H=(a(74),function(e){function t(){return Object(s.a)(this,t),Object(i.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return r.a.createElement(h.a,{store:q},r.a.createElement(m.a,null,r.a.createElement("div",{className:"App"},r.a.createElement(I,{branding:"\u041a\u043e\u043d\u0442\u0430\u043a\u0442\u043d\u0430\u044f \u043a\u043d\u0438\u0433\u0430"}),r.a.createElement("div",{className:"container"},r.a.createElement(d.c,null,r.a.createElement(d.a,{exact:!0,path:"/",component:j}),r.a.createElement(d.a,{exact:!0,path:"/contact/add",component:x}),r.a.createElement(d.a,{exact:!0,path:"/contact/edit/:id",component:P}))))))}}]),t}(n.Component));o.a.render(r.a.createElement(H,null),document.getElementById("root"))}},[[45,1,2]]]);
//# sourceMappingURL=main.4da5cbd4.chunk.js.map