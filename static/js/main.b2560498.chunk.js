(this.webpackJsonpstorri=this.webpackJsonpstorri||[]).push([[0],{20:function(e,t,n){},28:function(e,t,n){"use strict";n.r(t);var a=n(0),c=n.n(a),s=n(5),r=n.n(s),i=(n(20),n(2)),d=(n(7),n(1));var l=function(){return Object(d.jsx)("div",{children:Object(d.jsx)("header",{children:Object(d.jsx)("div",{className:"wrapper",children:Object(d.jsx)("div",{className:"headerContainer",children:Object(d.jsx)("div",{className:"logo",children:Object(d.jsx)("h1",{children:"Storri"})})})})})})},o=n(15),j=n(3),b=n(6),u=n(4),O=function(e){var t=e.value,n=e.index,c=Object(a.useState)({subject:t.content[2],content:t.content[0]}),s=Object(i.a)(c,2),r=s[0],l=s[1],o=function(e){l(Object(u.a)(Object(u.a)({},r),{},Object(b.a)({},e.target.name,e.target.value)))};return Object(a.useEffect)((function(){}),[]),Object(d.jsx)(j.b,{draggableId:t.id,index:n,children:function(e){var n;return Object(d.jsxs)("div",Object(u.a)(Object(u.a)(Object(u.a)({className:"cards",ref:e.innerRef},e.draggableProps),e.dragHandleProps),{},{children:[Object(d.jsx)("h4",{children:t.content[1]}),Object(d.jsx)("input",{type:"text",className:"userAnswerInput",value:r.subject,onChange:o,name:"subject"}),Object(d.jsx)("textarea",(n={type:"text",className:"userAnswerTextarea",name:"echoText",rows:"1",cols:"20"},Object(b.a)(n,"name","content"),Object(b.a)(n,"onChange",o),Object(b.a)(n,"value",r.content),n))]}),t.id)}},t.id)};var p=function(e){var t=Object(a.useState)(""),n=Object(i.a)(t,2),c=(n[0],n[1],Object(a.useState)(!0)),s=Object(i.a)(c,2),r=s[0],l=s[1],o=Object(a.useState)(!0),b=Object(i.a)(o,2),u=b[0],p=b[1],h=Object(a.useState)(!0),x=Object(i.a)(h,2),v=x[0],f=x[1],m=Object(a.useState)(!0),N=Object(i.a)(m,2),y=N[0],g=N[1],C=Object(a.useState)(!0),w=Object(i.a)(C,2),I=w[0],q=w[1],S=Object(a.useState)({droppable:[],droppable2:[],droppable3:[],droppable4:[],droppable5:[]}),k=Object(i.a)(S,2),W=k[0],A=k[1],B=Object(a.useState)([]),R=Object(i.a)(B,2),E=(R[0],R[1]),T=Object(a.useState)([]),J=Object(i.a)(T,2),M=(J[0],J[1],Object(a.useState)([])),P=Object(i.a)(M,2),D=(P[0],P[1],Object(a.useState)([])),G=Object(i.a)(D,2);return G[0],G[1],Object(a.useEffect)((function(){var t=e.userInput.length;console.log("UserInput",e.userInput);var n=Array.from({length:t},(function(e,t){return t})).map((function(t){return{id:"".concat(t),content:["".concat(e.userInput[t][0]),"".concat(e.userInput[t][1]),"".concat(e.userInput[t][2])]}}));console.log(e),E(n),A({droppable:n,droppable2:[],droppable3:[],droppable4:[],droppable5:n})}),[e]),Object(d.jsx)("div",{className:"storySection",children:Object(d.jsx)("main",{children:Object(d.jsx)("section",{children:Object(d.jsx)("div",{className:"sectionContainer",children:Object(d.jsx)(j.a,{onDragEnd:function(e){var t=e.source,n=e.destination;if(n)if(t.droppableId===n.droppableId){var a=t.droppableId;console.log(W[a]);var c=function(e,t,n){var a=Array.from(e),c=a.splice(t,1),s=Object(i.a)(c,1)[0];return a.splice(n,0,s),a}(W[a],t.index,n.index),s=W;s[a]=c,A(s)}else{var r=function(e,t,n,a){var c=Array.from(e),s=Array.from(t),r=c.splice(n.index,1),d=Object(i.a)(r,1)[0];s.splice(a.index,0,d);var l={};return l[n.droppableId]=c,l[a.droppableId]=s,l}(W[t.droppableId],W[n.droppableId],t,n),d=W;d[t.droppableId]=r[t.droppableId],d[n.droppableId]=r[n.droppableId],A(d)}},children:Object(d.jsxs)("div",{className:"wrapper",children:[Object(d.jsxs)("h2",{children:["NoteBook",Object(d.jsxs)("button",{onClick:function(){l(!r)},children:[Object(d.jsx)("i",{className:"fas fa-angle-down"})," "]})]}),Object(d.jsx)("div",{className:"blue",children:Object(d.jsx)("div",{className:"wrapper",children:Object(d.jsx)("div",{className:"saveContainer ",id:"saveContainer",style:{display:r?"block":"none"},children:Object(d.jsx)(j.c,{droppableId:"droppable5",children:function(e){return Object(d.jsxs)("div",{className:"userAnswer",ref:e.innerRef,children:[W.droppable5.map((function(e,t){if(""!==e.content[2])return Object(d.jsx)(O,{value:e,index:t},t)})),e.placeholder]})}})})})}),Object(d.jsxs)("h2",{children:["Blank Cards",Object(d.jsx)("button",{onClick:function(){p(!u)},children:Object(d.jsx)("i",{className:"fas fa-angle-down"})})]}),Object(d.jsx)("div",{className:"blankCards storyContainer",style:{display:u?"block":"none"},children:Object(d.jsx)(j.c,{droppableId:"droppable",children:function(e){return Object(d.jsxs)("div",{className:"  userAnswer",ref:e.innerRef,children:[W.droppable.map((function(e,t){if(""===e.content[2])return Object(d.jsx)(O,{value:e,index:t},t)})),e.placeholder]})}})}),Object(d.jsxs)("h2",{children:["Beginning",Object(d.jsx)("button",{onClick:function(){f(!v)},children:Object(d.jsx)("i",{className:"fas fa-angle-down"})})]}),Object(d.jsx)("div",{className:"storyContainer",children:Object(d.jsx)("div",{className:"  ",children:Object(d.jsx)("div",{className:"blankCards  storyBoard ",style:{display:v?"block":"none"},children:Object(d.jsx)(j.c,{droppableId:"droppable2",children:function(e){return Object(d.jsxs)("div",{className:"userAnswer",ref:e.innerRef,children:[W.droppable2.map((function(e,t){return Object(d.jsx)(O,{value:e,index:t},t)})),e.placeholder]})}})})})}),Object(d.jsxs)("h2",{children:["Middle",Object(d.jsx)("button",{onClick:function(){g(!y)},children:Object(d.jsx)("i",{className:"fas fa-angle-down"})})]}),Object(d.jsx)("div",{className:"storyContainer",children:Object(d.jsx)("div",{className:"  ",children:Object(d.jsx)("div",{className:"blankCards  storyBoard ",style:{display:y?"block":"none"},children:Object(d.jsx)(j.c,{droppableId:"droppable3",children:function(e){return Object(d.jsxs)("div",{className:"userAnswer",ref:e.innerRef,children:[W.droppable3.map((function(e,t){return Object(d.jsx)(O,{value:e,index:t},t)})),e.placeholder]})}})})})}),Object(d.jsxs)("h2",{children:["End",Object(d.jsx)("button",{onClick:function(){q(!I)},children:Object(d.jsx)("i",{className:"fas fa-angle-down"})})]}),Object(d.jsx)("div",{className:"storyContainer",children:Object(d.jsx)("div",{className:"  ",children:Object(d.jsx)("div",{className:"blankCards  storyBoard ",style:{display:I?"block":"none"},children:Object(d.jsx)(j.c,{droppableId:"droppable4",children:function(e){return Object(d.jsxs)("div",{className:"userAnswer",ref:e.innerRef,children:[W.droppable4.map((function(e,t){return Object(d.jsx)(O,{value:e,index:t},t)})),e.placeholder]})}})})})}),""]})})})})})})};var h=function(){var e=Object(a.useState)(0),t=Object(i.a)(e,2),n=t[0],c=t[1],s=Object(a.useState)([]),r=Object(i.a)(s,2),l=r[0],j=r[1],b=Object(a.useState)(0),u=Object(i.a)(b,2),O=u[0],h=u[1],x=Object(a.useState)(""),v=Object(i.a)(x,2),f=v[0],m=v[1],N=Object(a.useState)(""),y=Object(i.a)(N,2),g=y[0],C=y[1],w=Object(a.useState)(""),I=Object(i.a)(w,2),q=I[0],S=I[1],k=[{id:"0",question:"Who was there?"},{id:"1",question:"Who was there?"},{id:"2",question:"Where were you?"},{id:"3",question:"Where were you?"},{id:"4",question:"When did it happen?"},{id:"5",question:"When did it happen?"},{id:"6",question:"What happened?"},{id:"7",question:"What happened?"},{id:"8",question:"Why this story?"},{id:"9",question:"Was there any dialogue?"},{id:"10",question:"What did you see?"},{id:"11",question:"What did you see?"},{id:"12",question:"What did you hear?"},{id:"13",question:"What did you hear?"},{id:"14",question:"What did you feel?"},{id:"15",question:"What did you feel?"},{id:"16",question:"What did you smell?"},{id:"17",question:"What did you smell?"}][n],W=Object(a.useState)(""),A=Object(i.a)(W,2),B=A[0],R=A[1];return Object(d.jsxs)("div",{children:[Object(d.jsx)("div",{className:"wrapper",children:Object(d.jsx)("div",{className:"container",style:{display:f},children:Object(d.jsxs)("div",{className:"questionBoard active",children:[Object(d.jsxs)("div",{className:"questionContainer",children:[Object(d.jsx)("h3",{children:k.question}),Object(d.jsxs)("div",{className:"inputContainer",children:[Object(d.jsx)("input",{className:"questionTitle",type:"text",onChange:function(e){S(e.target.value)},value:q}),Object(d.jsx)("p",{children:"Give the card a memorable title"})]}),Object(d.jsxs)("div",{className:"textareaContainer",children:[Object(d.jsx)("h3",{children:"Notes"}),Object(d.jsx)("textarea",{className:"questionText",id:"questionText",onChange:function(e){R(e.target.value)},value:B}),Object(d.jsx)("p",{children:"or continue without answering"})]})]}),Object(d.jsxs)("div",{className:"btnsContainer",children:[Object(d.jsx)("div",{className:"barContainer",children:Object(d.jsx)("div",{className:"bar",style:{width:O+"%"}})}),Object(d.jsx)("div",{className:"btnContainer ",onClick:function(){var e=[B,k.question,q];j([].concat(Object(o.a)(l),[e])),R(""),S("");var t=n+1,a=O+5,s=g+"grid";t>16&&(m(f+"none"),C(s)),c(t),h(a)},children:Object(d.jsx)("button",{className:"nextBtn",children:"Continue"})})]})]})})}),Object(d.jsx)("section",{className:"storyBoardSection",style:{display:g},children:Object(d.jsx)(p,{userInput:l})})]})};var x=function(){var e=Object(a.useState)(!1),t=Object(i.a)(e,2),n=t[0],c=t[1],s=Object(a.useState)(""),r=Object(i.a)(s,2),o=r[0];return r[1],Object(d.jsxs)("div",{className:"App",children:[Object(d.jsx)(l,{}),n?Object(d.jsx)(h,{}):null,Object(d.jsxs)("button",{className:"newBtn",style:{display:o},onClick:function(){c(!n)},children:[" ","+ Add an idea"]})]})};r.a.render(Object(d.jsx)(c.a.StrictMode,{children:Object(d.jsx)(x,{})}),document.getElementById("root"))},7:function(e,t,n){}},[[28,1,2]]]);
//# sourceMappingURL=main.b2560498.chunk.js.map