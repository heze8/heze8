(this.webpackJsonpreactniceresume=this.webpackJsonpreactniceresume||[]).push([[0],{24:function(e,t,s){},27:function(e,t,s){},47:function(e,t,s){"use strict";s.r(t);var a=s(1),n=s.n(a),i=s(17),c=s.n(i),r=(s(24),s(3)),o=s(4),l=s(6),d=s(5),h=s(14),j=s(18),u=s.n(j),b=(s(27),s(7)),p=s.n(b),m=s(13),O=s(8),x=s.n(O),v=s(11),f=s.n(v),g=s(0),w=function(e){Object(l.a)(s,e);var t=Object(d.a)(s);function s(e){var a;return Object(r.a)(this,s),(a=t.call(this,e))._iid=0,a._oid=0,a.size={width:0,height:0},a.canvasRef=n.a.createRef(),a}return Object(o.a)(s,[{key:"componentDidMount",value:function(){var e=this;this._oid=setTimeout((function(){e.initCanvas(),e.resize=e.resize.bind(e),window.addEventListener("resize",e.resize)}),100);var t=this.getCanvas();this.props.onCanvasDidMount&&this.props.onCanvasDidMount(t)}},{key:"initCanvas",value:function(){var e=this.getCanvas();this.props.globalCompositeOperation&&(e.getContext("2d").globalCompositeOperation="lighten");var t=this.setCanvasSize(e),s=t.width,a=t.height;this.heartbeatDetectionCanvasSize(e),this.props.onCanvasInited(e,s,a)}},{key:"getCanvas",value:function(){return this.canvasRef.current}},{key:"heartbeatDetectionCanvasSize",value:function(e){var t=this;this._iid=setInterval((function(){if(t.canvasRef.current&&t.canvasRef.current.clientHeight!==t.size.height){var s=t.setCanvasSize(e),a=s.width,n=s.height;t.props.onResize&&t.props.onResize(a,n)}}),100)}},{key:"componentWillUnmount",value:function(){try{window.removeEventListener("resize",this.resize),clearInterval(this._iid),clearTimeout(this._oid)}catch(e){}}},{key:"resize",value:function(){var e=this.canvasRef.current,t=window.innerWidth,s=window.innerHeight;e.width=t,e.height=s,this.setCanvasSize(e),this.props.onResize&&this.props.onResize(t,s)}},{key:"setCanvasSize",value:function(e){var t=this.canvasRef.current.clientWidth,s=this.canvasRef.current.clientHeight;return this.size.width=t,this.size.height=s,e.width=t,e.height=s,{width:t,height:s}}},{key:"handleWaypointEnter",value:function(){f.a.start()}},{key:"handleWaypointLeave",value:function(){f.a.stop()}},{key:"handleMouseDown",value:function(e){this.props.onMouseDown&&this.props.onMouseDown(e)}},{key:"handleMouseMove",value:function(e){this.props.onMouseMove&&this.props.onMouseMove(e)}},{key:"handleMouseUp",value:function(e){this.props.onMouseUp&&this.props.onMouseUp(e)}},{key:"getStyle",value:function(){var e=this.props.bg,t={width:"100%",height:"100%"};return!0===e?t=Object.assign(t,{position:"absolute",zIndex:0,top:0,left:0,opacity:.8}):e&&"object"===typeof e&&(t=Object.assign(t,e)),t}},{key:"render",value:function(){return Object(g.jsx)("canvas",{ref:this.canvasRef,onMouseMove:this.handleMouseMove.bind(this),className:"canvas",style:this.getStyle()})}}]),s}(n.a.Component),N=function(e){Object(l.a)(s,e);var t=Object(d.a)(s);function s(e){var a;return Object(r.a)(this,s),(a=t.call(this,e))._mousedown=!0,a.mouseInfo={x:501.5,y:305},a.renderProton=a.renderProton.bind(Object(m.a)(a)),a}return Object(o.a)(s,[{key:"handleCanvasInited",value:function(e){this.createProton(e),f.a.add(this.renderProton)}},{key:"componentWillUnmount",value:function(){try{f.a.remove(this.renderProton),this.proton.destroy()}catch(e){}}},{key:"createProton",value:function(e){var t=new x.a,s=new x.a.Emitter;s.damping=.008,s.rate=new x.a.Rate(300),s.addInitialize(new x.a.Mass(1)),s.addInitialize(new x.a.Radius(4)),s.addInitialize(new x.a.Velocity(new x.a.Span(1.5),new x.a.Span(0,360),"polar")),this.repulsionBehaviour=new x.a.Repulsion(this.mouseInfo,0,0),this.crossZoneBehaviour=new x.a.CrossZone(new x.a.RectZone(0,0,e.width,e.height),"cross"),s.addBehaviour(new x.a.Color("random")),s.addBehaviour(this.repulsionBehaviour),s.addBehaviour(this.crossZoneBehaviour),this.addRepulsionBehaviours(s,e),s.p.x=e.width/2,s.p.y=e.height/2,s.emit("once"),t.addEmitter(s);var a=this.createRenderer(e);t.addRenderer(a),this.proton=t,this.renderer=a}},{key:"addRepulsionBehaviours",value:function(e,t){for(var s=0;s<360;s+=30){var a=230*Math.cos(s*Math.PI/180),n=230*Math.sin(s*Math.PI/180);e.addBehaviour(new x.a.Attraction({x:a+t.width/2,y:n+t.height/2},10,300))}e.addBehaviour(new x.a.Repulsion({x:t.width/2,y:t.height/2},20,300))}},{key:"createRenderer",value:function(e){var t=e.getContext("2d"),s=new x.a.CanvasRenderer(e);return s.onProtonUpdate=function(){t.fillStyle="rgba(0, 0, 0, 0.12)",t.fillRect(0,0,e.width,e.height)},s.onParticleUpdate=function(e){t.beginPath(),t.strokeStyle=e.color,t.lineWidth=1,t.moveTo(e.old.p.x,e.old.p.y),t.lineTo(e.p.x,e.p.y),t.closePath(),t.stroke()},s}},{key:"handleResize",value:function(e,t){this.crossZoneBehaviour.reset(new x.a.RectZone(0,0,e,t),"cross"),this.crossZoneBehaviour.zone.width=e,this.crossZoneBehaviour.zone.height=t,this.proton.renderers[0].resize(e,t)}},{key:"handleMouseMove",value:function(e){var t,s;this._mousedown&&(e.pageX||0===e.pageX?(t=e.pageX,s=e.pageY):(e.offsetX||0===e.offsetX)&&(t=e.offsetX,s=e.offsetY),console.log(" "+t+s),this.mouseInfo.x=t,this.mouseInfo.y=s,this.repulsionBehaviour.reset(this.mouseInfo,30,500))}},{key:"renderProton",value:function(){this.proton&&this.proton.update()}},{key:"render",value:function(){return Object(g.jsx)(w,{bg:!0,globalCompositeOperation:"darken",onMouseMove:this.handleMouseMove.bind(this),onCanvasInited:this.handleCanvasInited.bind(this),onResize:this.handleResize.bind(this)})}}]),s}(n.a.Component),y=function(e){Object(l.a)(s,e);var t=Object(d.a)(s);function s(e){return Object(r.a)(this,s),t.call(this,e)}return Object(o.a)(s,[{key:"render",value:function(){if(!this.props.data)return null;var e=this.props.data.project,t=this.props.data.github,s=this.props.data.name,a=this.props.data.description;return Object(g.jsxs)("header",{id:"home",children:[Object(g.jsx)(N,{id:"particle"}),Object(g.jsxs)("nav",{id:"nav-wrap",children:[Object(g.jsx)("a",{className:"mobile-btn",href:"#nav-wrap",title:"Show navigation",children:"Show navigation"}),Object(g.jsx)("a",{className:"mobile-btn",href:"#home",title:"Hide navigation",children:"Hide navigation"}),Object(g.jsxs)("ul",{id:"nav",className:"nav",children:[Object(g.jsx)("li",{className:"current",children:Object(g.jsx)("a",{className:"smoothscroll",href:"#home",children:"Home"})}),Object(g.jsx)("li",{children:Object(g.jsx)("a",{className:"smoothscroll",href:"#about",children:"About"})}),Object(g.jsx)("li",{children:Object(g.jsx)("a",{className:"smoothscroll",href:"#resume",children:"Resume"})}),Object(g.jsx)("li",{children:Object(g.jsx)("a",{className:"smoothscroll",href:"#portfolio",children:"Works"})}),Object(g.jsx)("li",{children:Object(g.jsx)("a",{className:"smoothscroll",href:"#contact",children:"Contact"})})]})]}),Object(g.jsx)("div",{className:"row banner",children:Object(g.jsxs)("div",{className:"banner-text",children:[Object(g.jsx)(p.a,{bottom:!0,children:Object(g.jsx)("h1",{className:"responsive-headline",children:s})}),Object(g.jsx)(p.a,{bottom:!0,duration:1200,children:Object(g.jsxs)("h3",{children:[a,"."]})}),Object(g.jsx)("hr",{}),Object(g.jsx)(p.a,{bottom:!0,duration:2e3,children:Object(g.jsxs)("ul",{className:"social",children:[Object(g.jsxs)("a",{href:e,className:"button btn project-btn",children:[Object(g.jsx)("i",{className:"fa fa-book"}),"Project"]}),Object(g.jsxs)("a",{href:t,className:"button btn github-btn",children:[Object(g.jsx)("i",{className:"fa fa-github"}),"Github"]})]})})]})}),Object(g.jsx)("p",{className:"scrolldown",children:Object(g.jsx)("a",{className:"smoothscroll",href:"#about",children:Object(g.jsx)("i",{className:"icon-down-circle"})})})]})}}]),s}(a.Component),k=function(e){Object(l.a)(s,e);var t=Object(d.a)(s);function s(){return Object(r.a)(this,s),t.apply(this,arguments)}return Object(o.a)(s,[{key:"render",value:function(){if(!this.props.data)return null;var e=this.props.data.social.map((function(e){return Object(g.jsx)("li",{children:Object(g.jsx)("a",{href:e.url,children:Object(g.jsx)("i",{className:e.className})})},e.name)}));return Object(g.jsx)("footer",{children:Object(g.jsxs)("div",{className:"row",children:[Object(g.jsx)(p.a,{bottom:!0,children:Object(g.jsxs)("div",{className:"twelve columns",children:[Object(g.jsx)("ul",{className:"social-links",children:e}),Object(g.jsxs)("ul",{className:"copyright",children:[Object(g.jsx)("li",{children:"\xa9 Copyright 2021 Nordic Giant"}),Object(g.jsxs)("li",{children:["Design by"," ",Object(g.jsx)("a",{title:"Styleshout",href:"http://www.styleshout.com/",children:"Styleshout"})]})]})]})}),Object(g.jsx)("div",{id:"go-top",children:Object(g.jsx)("a",{className:"smoothscroll",title:"Back to Top",href:"#home",children:Object(g.jsx)("i",{className:"icon-up-open"})})})]})})}}]),s}(a.Component),C=function(e){Object(l.a)(s,e);var t=Object(d.a)(s);function s(){return Object(r.a)(this,s),t.apply(this,arguments)}return Object(o.a)(s,[{key:"render",value:function(){if(!this.props.data)return null;var e=this.props.data.name,t="images/"+this.props.data.image,s=this.props.data.bio,a=this.props.data.address.street,n=this.props.data.address.city,i=this.props.data.address.state,c=this.props.data.address.zip,r=this.props.data.phone,o=this.props.data.email,l=this.props.data.resumedownload;return Object(g.jsx)("section",{id:"about",children:Object(g.jsx)(p.a,{duration:1e3,children:Object(g.jsxs)("div",{className:"row",children:[Object(g.jsx)("div",{className:"three columns",children:Object(g.jsx)("img",{className:"profile-pic",src:t,alt:"Nordic Giant Profile Pic"})}),Object(g.jsxs)("div",{className:"nine columns main-col",children:[Object(g.jsx)("h2",{children:"About Me"}),Object(g.jsx)("p",{children:s}),Object(g.jsxs)("div",{className:"row",children:[Object(g.jsxs)("div",{className:"columns contact-details",children:[Object(g.jsx)("h2",{children:"Contact Details"}),Object(g.jsxs)("p",{className:"address",children:[Object(g.jsx)("span",{children:e}),Object(g.jsx)("br",{}),Object(g.jsxs)("span",{children:[a,Object(g.jsx)("br",{}),n," ",i,", ",c]}),Object(g.jsx)("br",{}),Object(g.jsx)("span",{children:r}),Object(g.jsx)("br",{}),Object(g.jsx)("span",{children:o})]})]}),Object(g.jsx)("div",{className:"columns download",children:Object(g.jsx)("p",{children:Object(g.jsxs)("a",{href:l,className:"button",children:[Object(g.jsx)("i",{className:"fa fa-download"}),"Download Resume"]})})})]})]})]})})})}}]),s}(a.Component),M=function(e){Object(l.a)(s,e);var t=Object(d.a)(s);function s(){return Object(r.a)(this,s),t.apply(this,arguments)}return Object(o.a)(s,[{key:"getRandomColor",value:function(){for(var e="#",t=0;t<6;t++)e+="0123456789ABCDEF"[Math.floor(16*Math.random())];return e}},{key:"render",value:function(){var e=this;if(!this.props.data)return null;var t=this.props.data.skillmessage,s=this.props.data.education.map((function(e){return Object(g.jsxs)("div",{children:[Object(g.jsx)("h3",{children:e.school}),Object(g.jsxs)("p",{className:"info",children:[e.degree," ",Object(g.jsx)("span",{children:"\u2022"}),Object(g.jsx)("em",{className:"date",children:e.graduated})]}),Object(g.jsx)("p",{children:e.description})]},e.school)})),a=this.props.data.work.map((function(e){return Object(g.jsxs)("div",{children:[Object(g.jsx)("h3",{children:e.company}),Object(g.jsxs)("p",{className:"info",children:[e.title,Object(g.jsx)("span",{children:"\u2022"})," ",Object(g.jsx)("em",{className:"date",children:e.years})]}),Object(g.jsx)("p",{children:e.description})]},e.company)})),n=this.props.data.skills.map((function(t){var s=e.getRandomColor(),a="bar-expand "+t.name.toLowerCase(),n=t.level;return Object(g.jsxs)("li",{children:[Object(g.jsx)("span",{style:{width:n,backgroundColor:s},className:a}),Object(g.jsx)("em",{children:t.name})]},t.name)}));return Object(g.jsxs)("section",{id:"resume",children:[Object(g.jsx)(p.a,{left:!0,duration:1300,children:Object(g.jsxs)("div",{className:"row education",children:[Object(g.jsx)("div",{className:"three columns header-col",children:Object(g.jsx)("h1",{children:Object(g.jsx)("span",{children:"Education"})})}),Object(g.jsx)("div",{className:"nine columns main-col",children:Object(g.jsx)("div",{className:"row item",children:Object(g.jsx)("div",{className:"twelve columns",children:s})})})]})}),Object(g.jsx)(p.a,{left:!0,duration:1300,children:Object(g.jsxs)("div",{className:"row work",children:[Object(g.jsx)("div",{className:"three columns header-col",children:Object(g.jsx)("h1",{children:Object(g.jsx)("span",{children:"Work"})})}),Object(g.jsx)("div",{className:"nine columns main-col",children:a})]})}),Object(g.jsx)(p.a,{left:!0,duration:1300,children:Object(g.jsxs)("div",{className:"row skill",children:[Object(g.jsx)("div",{className:"three columns header-col",children:Object(g.jsx)("h1",{children:Object(g.jsx)("span",{children:"Skills"})})}),Object(g.jsxs)("div",{className:"nine columns main-col",children:[Object(g.jsx)("p",{children:t}),Object(g.jsx)("div",{className:"bars",children:Object(g.jsx)("ul",{className:"skills",children:n})})]})]})})]})}}]),s}(a.Component),z=function(e){Object(l.a)(s,e);var t=Object(d.a)(s);function s(){return Object(r.a)(this,s),t.apply(this,arguments)}return Object(o.a)(s,[{key:"render",value:function(){if(!this.props.data)return null;var e=this.props.data.name,t=this.props.data.address.street,s=this.props.data.address.city,a=this.props.data.address.state,n=this.props.data.address.zip,i=this.props.data.phone,c=this.props.data.contactmessage;return Object(g.jsxs)("section",{id:"contact",children:[Object(g.jsx)(b.Fade,{bottom:!0,duration:1e3,children:Object(g.jsxs)("div",{className:"row section-head",children:[Object(g.jsx)("div",{className:"two columns header-col",children:Object(g.jsx)("h1",{children:Object(g.jsx)("span",{children:"Get In Touch."})})}),Object(g.jsx)("div",{className:"ten columns",children:Object(g.jsx)("p",{className:"lead",children:c})})]})}),Object(g.jsxs)("div",{className:"row",children:[Object(g.jsx)(b.Slide,{left:!0,duration:1e3,children:Object(g.jsxs)("div",{className:"eight columns",children:[Object(g.jsx)("form",{action:"",method:"post",id:"contactForm",name:"contactForm",children:Object(g.jsxs)("fieldset",{children:[Object(g.jsxs)("div",{children:[Object(g.jsxs)("label",{htmlFor:"contactName",children:["Name ",Object(g.jsx)("span",{className:"required",children:"*"})]}),Object(g.jsx)("input",{type:"text",defaultValue:"",size:"35",id:"contactName",name:"contactName",onChange:this.handleChange})]}),Object(g.jsxs)("div",{children:[Object(g.jsxs)("label",{htmlFor:"contactEmail",children:["Email ",Object(g.jsx)("span",{className:"required",children:"*"})]}),Object(g.jsx)("input",{type:"text",defaultValue:"",size:"35",id:"contactEmail",name:"contactEmail",onChange:this.handleChange})]}),Object(g.jsxs)("div",{children:[Object(g.jsx)("label",{htmlFor:"contactSubject",children:"Subject"}),Object(g.jsx)("input",{type:"text",defaultValue:"",size:"35",id:"contactSubject",name:"contactSubject",onChange:this.handleChange})]}),Object(g.jsxs)("div",{children:[Object(g.jsxs)("label",{htmlFor:"contactMessage",children:["Message ",Object(g.jsx)("span",{className:"required",children:"*"})]}),Object(g.jsx)("textarea",{cols:"50",rows:"15",id:"contactMessage",name:"contactMessage"})]}),Object(g.jsxs)("div",{children:[Object(g.jsx)("button",{className:"submit",children:"Submit"}),Object(g.jsx)("span",{id:"image-loader",children:Object(g.jsx)("img",{alt:"",src:"images/loader.gif"})})]})]})}),Object(g.jsx)("div",{id:"message-warning",children:" Error boy"}),Object(g.jsxs)("div",{id:"message-success",children:[Object(g.jsx)("i",{className:"fa fa-check"}),"Your message was sent, thank you!",Object(g.jsx)("br",{})]})]})}),Object(g.jsx)(b.Slide,{right:!0,duration:1e3,children:Object(g.jsxs)("aside",{className:"four columns footer-widgets",children:[Object(g.jsxs)("div",{className:"widget widget_contact",children:[Object(g.jsx)("h4",{children:"Address and Phone"}),Object(g.jsxs)("p",{className:"address",children:[e,Object(g.jsx)("br",{}),t," ",Object(g.jsx)("br",{}),s,", ",a," ",n,Object(g.jsx)("br",{}),Object(g.jsx)("span",{children:i})]})]}),Object(g.jsxs)("div",{className:"widget widget_tweets",children:[Object(g.jsx)("h4",{className:"widget-title",children:"Latest Tweets"}),Object(g.jsxs)("ul",{id:"twitter",children:[Object(g.jsxs)("li",{children:[Object(g.jsxs)("span",{children:["This is Photoshop's version of Lorem Ipsum. Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum",Object(g.jsx)("a",{href:"./",children:"http://t.co/CGIrdxIlI3"})]}),Object(g.jsx)("b",{children:Object(g.jsx)("a",{href:"./",children:"2 Days Ago"})})]}),Object(g.jsxs)("li",{children:[Object(g.jsxs)("span",{children:["Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi",Object(g.jsx)("a",{href:"./",children:"http://t.co/CGIrdxIlI3"})]}),Object(g.jsx)("b",{children:Object(g.jsx)("a",{href:"./",children:"3 Days Ago"})})]})]})]})]})})]})]})}}]),s}(a.Component),R=s(19),S=s.n(R),D=0,I=function(e){Object(l.a)(s,e);var t=Object(d.a)(s);function s(){return Object(r.a)(this,s),t.apply(this,arguments)}return Object(o.a)(s,[{key:"render",value:function(){if(!this.props.data)return null;var e=this.props.data.projects.map((function(e){var t="images/portfolio/"+e.image;return Object(g.jsx)("div",{className:"columns portfolio-item",children:Object(g.jsxs)("div",{className:"item-wrap",children:[Object(g.jsx)(S.a,{alt:e.title,src:t}),Object(g.jsx)("div",{style:{textAlign:"center"},children:e.title})]})},D++)}));return Object(g.jsx)("section",{id:"portfolio",children:Object(g.jsx)(p.a,{left:!0,duration:1e3,distance:"40px",children:Object(g.jsx)("div",{className:"row",children:Object(g.jsxs)("div",{className:"twelve columns collapsed",children:[Object(g.jsx)("h1",{children:"Check Out Some of My Works."}),Object(g.jsx)("div",{id:"portfolio-wrapper",className:"bgrid-quarters s-bgrid-thirds cf",children:e})]})})})})}}]),s}(a.Component),P=function(e){Object(l.a)(s,e);var t=Object(d.a)(s);function s(e){var a;return Object(r.a)(this,s),(a=t.call(this,e)).state={foo:"bar",resumeData:{}},h.a.initialize("UA-110570651-1"),h.a.pageview(window.location.pathname),a}return Object(o.a)(s,[{key:"getResumeData",value:function(){u.a.ajax({url:"./resumeData.json",dataType:"json",cache:!1,success:function(e){this.setState({resumeData:e})}.bind(this),error:function(e,t,s){console.log(s),alert(s)}})}},{key:"componentDidMount",value:function(){this.getResumeData()}},{key:"render",value:function(){return Object(g.jsxs)("div",{className:"App",children:[Object(g.jsx)(y,{data:this.state.resumeData.main}),Object(g.jsx)(C,{data:this.state.resumeData.main}),Object(g.jsx)(M,{data:this.state.resumeData.resume}),Object(g.jsx)(I,{data:this.state.resumeData.portfolio}),Object(g.jsx)(z,{data:this.state.resumeData.main}),Object(g.jsx)(k,{data:this.state.resumeData.main})]})}}]),s}(a.Component),B=function(e){e&&e instanceof Function&&s.e(3).then(s.bind(null,48)).then((function(t){var s=t.getCLS,a=t.getFID,n=t.getFCP,i=t.getLCP,c=t.getTTFB;s(e),a(e),n(e),i(e),c(e)}))};c.a.render(Object(g.jsx)(P,{}),document.getElementById("root")),B()}},[[47,1,2]]]);
//# sourceMappingURL=main.773eae14.chunk.js.map