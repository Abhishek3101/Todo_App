(this.webpackJsonptodo=this.webpackJsonptodo||[]).push([[0],{78:function(e,t,o){},79:function(e,t,o){},89:function(e,t,o){"use strict";o.r(t);var n=o(1),c=o.n(n),i=o(22),a=o.n(i),s=(o(78),o(18)),d=(o(79),o(122)),r=o(121),l=o(49);o(63),o(64);l.a.initializeApp({apiKey:"AIzaSyAFFSyz-qBllBjBu3WmA6LVBMLvynq60xg",authDomain:"todo-fee4d.firebaseapp.com",projectId:"todo-fee4d",storageBucket:"todo-fee4d.appspot.com",messagingSenderId:"15857449880",appId:"1:15857449880:web:361274de2ab4651aaf89ed"});var j=l.a.firestore(),u=o(117),p=o(123),b=o(26);function f(e){var t=e.todo,o=e.inprogress,n=e.id;return Object(b.jsxs)("div",{style:{display:"flex"},children:[Object(b.jsx)(u.a,{children:Object(b.jsx)(p.a,{primary:t,secondary:o?"In Progress":"Completed"})}),Object(b.jsx)(r.a,{onClick:function(){j.collection("todos").doc(n).update({inprogress:!o})},children:o?"Done":"UnDone"}),Object(b.jsx)(r.a,{onClick:function(){j.collection("todos").doc(n).delete()},children:"X"})]})}var O=o(41);var h=function(){var e=Object(n.useState)([]),t=Object(s.a)(e,2),o=t[0],c=t[1],i=Object(n.useState)(""),a=Object(s.a)(i,2),u=a[0],p=a[1],h=Object(n.useState)("Hello"),g=Object(s.a)(h,2),m=g[0],x=g[1],v=Object(n.useState)(""),y=Object(s.a)(v,2),S=y[0],w=y[1],k=Object(n.useState)(!1),C=Object(s.a)(k,2),I=C[0],B=C[1];function D(){j.collection("todos").onSnapshot((function(e){c(e.docs.map((function(e){return{id:e.id,todo:e.data().todo,inprogress:e.data().inprogress,email:e.data().email}})))}))}return Object(n.useEffect)((function(){D()}),[!0===I]),Object(b.jsx)("div",{className:"App",children:Object(b.jsxs)("div",{style:{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",width:"100%"},children:[Object(b.jsxs)("h1",{children:[m," Todo"]}),Object(b.jsx)(r.a,{onClick:function(){var e=new O.a,t=Object(O.b)();Object(O.c)(t,e).then((function(e){var t=e.user,n=t.displayName,c=t.email;x(n),w(c),B(!0),console.log("I have logged in"),D(),console.log(o)})).catch((function(e){console.log(e)}))},children:"Google Sign-in"}),Object(b.jsx)(r.a,{onClick:function(){var e=Object(O.b)();Object(O.d)(e).then((function(){console.log("Signed Out"),x("Hello"),w(""),B(!1),console.log(o)})).catch((function(e){}))},children:"Sign-out"}),Object(b.jsxs)("form",{children:[Object(b.jsx)(d.a,{id:"standard-basic",label:"Write a Todo",value:u,style:{width:"90vw",maxWidth:"500px"},onChange:function(e){return p(e.target.value)}}),Object(b.jsx)(r.a,{type:"submit",variant:"contained",onClick:function(e){e.preventDefault(),j.collection("todos").add({inprogress:!0,timestamp:l.a.firestore.FieldValue.serverTimestamp(),todo:u,email:S}),p("")},style:{display:"none"},children:"Default"})]}),I?Object(b.jsx)("div",{style:{width:"90vw",maxWidth:"500px",marginTop:"24px"},children:o.filter((function(e){return e.email===S})).map((function(e){return Object(b.jsx)(f,{todo:e.todo,inprogress:e.inprogress,id:e.id})}))}):Object(b.jsx)("p",{children:"login please"})]})})};a.a.render(Object(b.jsx)(c.a.StrictMode,{children:Object(b.jsx)(h,{})}),document.getElementById("root"))}},[[89,1,2]]]);
//# sourceMappingURL=main.cf228db9.chunk.js.map