(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[4],{127:function(e,t,a){},128:function(e,t,a){},129:function(e,t,a){e.exports=a.p+"static/media/logo1.2d4b61b2.png"},130:function(e,t,a){},131:function(e,t,a){e.exports=a.p+"static/media/plus.dfc7dd48.svg"},132:function(e,t,a){e.exports=a.p+"static/media/minus.10313e88.svg"},133:function(e,t,a){e.exports=a.p+"static/media/paint.add1fc1e.svg"},134:function(e,t,a){},135:function(e,t,a){},174:function(e,t,a){},175:function(e,t,a){},176:function(e,t,a){},203:function(e,t){},206:function(e,t,a){},207:function(e,t,a){e.exports=a.p+"static/media/chat (1).9ad1fd39.svg"},208:function(e,t,a){e.exports=a.p+"static/media/chat (3).d8911815.svg"},209:function(e,t,a){},210:function(e,t,a){},211:function(e,t,a){},233:function(e,t,a){},235:function(e,t,a){},239:function(e,t,a){"use strict";a.r(t);var n=a(10),c=a(0),o=a.n(c),r=(a(127),a(128),a(129)),l=a.n(r),s=a(8),i=a(17),u=(a(130),a(131)),m=a.n(u),d=a(132),E=a.n(d),p=a(133),f=a.n(p),h=function(e){var t=e.socket,a=Object(c.useRef)(null),n=Object(c.useRef)(null),r=5,l=Object(c.useRef)(r);Object(c.useEffect)((function(){var e=a.current,c=n.current,o=e.getContext("2d"),r=document.getElementsByClassName("color");console.log(r,"the colors"),console.log(c);for(var s={color:"black"},i=function(e){s.color=e.target.className.split(" ")[1]},u=0;u<r.length;u++)r[u].addEventListener("click",i,!1);var m=!1,d=function(a,n,c,r,s,i){if(o.beginPath(),o.moveTo(a,n),o.lineTo(c,r),o.strokeStyle=s,o.lineWidth=l,o.stroke(),o.closePath(),i){var u=e.width,m=e.height;t.emit("drawing",{x0:a/u,y0:n/m,x1:c/u,y1:r/m,color:s})}},E=function(e){m=!0,s.x=e.clientX||e.touches[0].clientX,s.y=e.clientY||e.touches[0].clientY},p=function(e){m&&(d(s.x,s.y,e.clientX||e.touches[0].clientX,e.clientY||e.touches[0].clientY,s.color,!0),s.x=e.clientX||e.touches[0].clientX,s.y=e.clientY||e.touches[0].clientY)},f=function(e){m&&(m=!1,d(s.x,s.y,e.clientX||e.touches[0].clientX,e.clientY||e.touches[0].clientY,s.color,!0))},h=function(e,t){var a=(new Date).getTime();return function(){var n=(new Date).getTime();n-a>=t&&(a=n,e.apply(null,arguments))}};e.addEventListener("mousedown",E,!1),e.addEventListener("mouseup",f,!1),e.addEventListener("mouseout",f,!1),e.addEventListener("mousemove",h(p,10),!1),e.addEventListener("touchstart",E,!1),e.addEventListener("touchend",f,!1),e.addEventListener("touchcancel",f,!1),e.addEventListener("touchmove",h(p,10),!1);var g=function(){e.width=window.innerWidth-80,e.height=window.innerHeight-80};window.addEventListener("resize",g,!1),g();t.on("drawing",(function(t){var a=e.width,n=e.height;d(t.x0*a,t.y0*n,t.x1*a,t.y1*n,t.color)}))}));return o.a.createElement("div",null,o.a.createElement("canvas",{ref:a,className:"whiteboard"}),o.a.createElement("div",{ref:n,className:"colors"},o.a.createElement("img",{className:"cnvs",src:f.a}),o.a.createElement("div",{className:"color black"}),o.a.createElement("div",{className:"color red"}),o.a.createElement("div",{className:"color green"}),o.a.createElement("div",{className:"color white"}),o.a.createElement("div",{className:"color yellow"}),o.a.createElement("h2",null,"Drawing Area"),o.a.createElement("div",{className:"size-btns"},o.a.createElement("button",{className:"size",onClick:function(){r<100&&(l=r+=5,console.log(l))}}," ",o.a.createElement("img",{className:"inc-dec",src:m.a})," "),o.a.createElement("button",{className:"size",onClick:function(){r>5&&(l=r-=5,console.log(l))}}," ",o.a.createElement("img",{className:"inc-dec",src:E.a})," "))))};a(134);var g=function(e){return o.a.createElement(s.a,Object.assign({},e,{size:"xl","aria-labelledby":"contained-modal-title-vcenter",centered:!0}),o.a.createElement(s.a.Body,{className:"board-body"},o.a.createElement(h,{socket:e.socket})),o.a.createElement(s.a.Footer,null,o.a.createElement(i.a,{onClick:e.onHide},"Close")))},v=a(16),b=a(29),j=(a(135),a(6)),y=a(136);var O=function(e){var t=Object(c.useState)("".concat("https://codezone34heroku.web.app/","/editor/").concat(Object(j.g)().uid)),a=Object(n.a)(t,2),r=a[0],l=(a[1],Object(c.useState)(!1)),i=Object(n.a)(l,2),u=i[0],m=i[1];return o.a.createElement(s.a,Object.assign({},e,{size:"md","aria-labelledby":"contained-modal-title-vcenter",centered:!0}),o.a.createElement(s.a.Header,{closeButton:!0},o.a.createElement(s.a.Title,{id:"contained-modal-title-vcenter"},"Copy Link to Share!!")),o.a.createElement(s.a.Body,{className:"copyheight"},o.a.createElement("input",{value:r}),o.a.createElement(y.CopyToClipboard,{text:r,onCopy:function(){return m((function(e){return!e}))}},o.a.createElement("button",{className:u?"copiedbutton":"copybutton"},u?"copied!":"copy"))),o.a.createElement(s.a.Footer,null,o.a.createElement("button",{className:"fancy",onClick:e.onHide},"Close")))};var N=function(e){var t=e.socket,a=e.username,r=Object(c.useContext)(v.a),s=Object(c.useState)(!1),i=Object(n.a)(s,2),u=i[0],m=i[1],d=Object(c.useState)(!1),E=Object(n.a)(d,2),p=E[0],f=E[1],h=Object(c.useState)(!1),j=Object(n.a)(h,2),y=j[0],N=j[1];return o.a.createElement("div",null,o.a.createElement("div",{className:"solidborder"}),o.a.createElement("div",{className:"editortop"},o.a.createElement("div",null,o.a.createElement("img",{src:l.a,className:"logodesign"})),o.a.createElement("div",{className:"userinfo"},o.a.createElement("span",{className:"username"},"Welcome,"),o.a.createElement("span",{className:"username"},a)),o.a.createElement("ul",{className:"editorfunctionsdesign"},o.a.createElement("li",null,o.a.createElement("div",{className:"editortop-li",onClick:function(){return N(!0)}},"Share"),o.a.createElement("span",null),o.a.createElement(O,{show:y,onHide:function(){return N(!1)}})),r.isloggedin&&o.a.createElement("li",null,o.a.createElement("div",{className:"editortop-li",onClick:function(){return m(!0)}},"Drawing"),o.a.createElement("span",null),o.a.createElement(g,{socket:t,show:u,onHide:function(){return m(!1)}})),!r.isloggedin&&o.a.createElement("li",null,o.a.createElement("div",{className:"editortop-li",onClick:function(){return f(!0)}},"Drawing"),o.a.createElement("span",null),o.a.createElement(b.a,{show:p,onHide:function(){return f(!1)}})),!r.isloggedin&&o.a.createElement("li",null,o.a.createElement("div",{className:"editortop-li",onClick:function(){return f(!0)}},"Login"),o.a.createElement("span",null)),r.isloggedin&&o.a.createElement("li",null,o.a.createElement("div",{className:"editortop-li",onClick:r.logout},"Logout"),o.a.createElement("span",null)))))},k=a(102),S=a(168),C=(a(174),{c:"#include<stdio.h>\n\nint main() {\n    // write your code here\n    return 0;\n}\n",cpp:"#include<bits/stdc++.h> \nusing namespace std;\n\nint main() {\n\t//write your code here\n\treturn 0;\n}\n",java:"class test {\n    public static void main(String args[]){\n        // write your code here\n    }\n}\n",python:"#write your code here\n"}),w=a(24),x=a.n(w),H=a(18);a(175);var L=function(e){return Object(c.useEffect)((function(){document.querySelector("td")&&document.querySelector("td").insertAdjacentHTML("beforeend",e.output)})),o.a.createElement(s.a,Object.assign({},e,{size:"md","aria-labelledby":"contained-modal-title-vcenter",centered:!0}),o.a.createElement(s.a.Body,{className:"modalbody"},o.a.createElement("div",{className:"codeid"},"Code ID:\xa0",o.a.createElement("span",null,e.id)),o.a.createElement("div",{className:"compilestatus"},o.a.createElement("div",{className:"compileresult"},"Compile Status:\xa0","OK"===e.compile&&"NA"===e.status?o.a.createElement("span",{className:"successfulcommpile"},"Compiled Successfully"):o.a.createElement("span",{className:"errorcompile"},"SIGSEGV"===e.status?"Segmentation fault":e.compile)),o.a.createElement("div",{className:"timeresult"},"Time:\xa0",o.a.createElement("span",null,e.time))),o.a.createElement("table",null,o.a.createElement("thead",null,o.a.createElement("tr",null,o.a.createElement("th",null,"Output:"))),o.a.createElement("tbody",null,o.a.createElement("tr",null,o.a.createElement("td",null)))),o.a.createElement("div",{className:"exitcode"},"exit code:\xa0",o.a.createElement("span",null,e.exitcode))),o.a.createElement(s.a.Footer,null,o.a.createElement(i.a,{className:"welc-btn",onClick:e.onHide},"Close")))};a(176);var A,B=function(e){return o.a.createElement(s.a,Object.assign({},e,{size:"md","aria-labelledby":"contained-modal-title-vcenter",centered:!0}),o.a.createElement(s.a.Body,null,o.a.createElement("div",null,o.a.createElement("div",{className:"form-group",id:"heightsetter"},o.a.createElement("textarea",{type:"textarea",value:e.userinput,onChange:function(t){e.setuserinput(t.target.value)}})))),o.a.createElement(s.a.Footer,null,o.a.createElement(i.a,{className:"welc-btn",onClick:e.onHide},"Add Input")))};var T=function(e){var t=e.socket,a=e.personname,r=Object(c.useState)("light"),l=Object(n.a)(r,2),s=l[0],i=l[1],u=Object(c.useState)("cpp"),m=Object(n.a)(u,2),d=m[0],E=m[1],p=Object(c.useState)(C.cpp),f=Object(n.a)(p,2),h=f[0],g=f[1],v=Object(c.useState)(C.cpp),b=Object(n.a)(v,2),y=b[0],O=b[1],N=Object(c.useState)(""),w=Object(n.a)(N,2),T=w[0],z=w[1],I=Object(c.useState)(""),D=Object(n.a)(I,2),G=D[0],_=D[1],q=Object(c.useState)(""),F=Object(n.a)(q,2),M=F[0],Y=F[1],X=Object(c.useState)(""),K=Object(n.a)(X,2),P=K[0],R=K[1],J=Object(c.useState)(""),W=Object(n.a)(J,2),V=W[0],Q=W[1],U=Object(c.useState)(""),Z=Object(n.a)(U,2),$=Z[0],ee=Z[1],te=Object(c.useState)(!1),ae=Object(n.a)(te,2),ne=ae[0],ce=ae[1],oe=Object(c.useState)(!1),re=Object(n.a)(oe,2),le=re[0],se=re[1],ie=Object(c.useState)(!1),ue=Object(n.a)(ie,2),me=ue[0],de=ue[1],Ee=Object(c.useState)(!1),pe=Object(n.a)(Ee,2),fe=pe[0],he=pe[1],ge=Object(j.g)().uid;return Object(c.useEffect)((function(){t.emit("join-room",ge,a)}),[]),Object(c.useEffect)((function(){t.on("changed-value",(function(e){g(e)}))}),[h]),A=function(e,a){var n=a;O(a),t.emit("inputchanged",n)},o.a.createElement("div",{className:"outsidedesign"},ne&&o.a.createElement(H.a,null),o.a.createElement(L,{id:$,compile:M,time:P,show:le,onHide:function(){return se(!1)},output:G,status:fe,exitcode:V}),o.a.createElement(B,{show:me,setuserinput:z,userinput:T,onHide:function(){de(!1),document.getElementById("custominput").checked=!1}}),o.a.createElement("div",{className:"topheader"},o.a.createElement("div",{className:"themetog"},o.a.createElement("button",{onClick:function(){i("light"===s?"dark":"light")}},"Change Theme"),o.a.createElement("select",{id:"lang",onChange:function(e){return function(e){var t=e.target.value;E(t),g(C[t])}(e)}},o.a.createElement("option",{value:"cpp"},"C++"),o.a.createElement("option",{value:"c"},"C"),o.a.createElement("option",{value:"java"},"Java"),o.a.createElement("option",{value:"python"},"Python")),o.a.createElement("button",{className:"runbtn",onClick:function(){var e="".concat("https://codezone34.herokuapp.com","/codezone/execution/run"),t={};t.code=y,t.input=T,t.language=d,ce(!0),x.a.ajax({type:"POST",data:JSON.stringify(t),contentType:"application/json",url:e,success:function(e){ce(!1),ee(e.response.code_id),Y(e.response.compile_status),R(e.response.run_status.time_used),_(e.response.run_status.output_html),Q(e.response.run_status.exit_code),he(e.response.run_status.status_detail),se(!0)},error:function(e){ce(!1),console.log(e),z("")}})}},"Run"),o.a.createElement("div",{className:"new"},o.a.createElement("form",null,o.a.createElement("div",{className:"custominput"},o.a.createElement("input",{type:"checkbox",id:"custominput",onChange:function(){de(!0)}}),o.a.createElement("label",{htmlFor:"custominput"},"Custom Input")))))),o.a.createElement(k.ControlledEditor,{className:"editorstyles",onChange:A,height:"24rem",style:"border:2px solid gray",width:"40rem",value:h,theme:s,loading:o.a.createElement(S.FillSpinner,null),language:d,options:{selectOnLineNumbers:!0,renderIndentGuides:!0,colorDecorators:!0,cursorBlinking:"blink",autoClosingQuotes:"always",find:{autoFindInSelection:"always"},snippetSuggestions:"inline"}}))},z=a(177),I=a.n(z),D=["Renji Abarai","S\u014dsuke Aizen","Alucard","Android 17","Alex Louis Armstrong","Hao Asakura","Yoh Asakura","Astro Boy","Shinn Asuka","Char Aznable","Sergio Batista","Batou","Beerus","Beyond the Grave","Black Jack","Black Star","Legato Bluesummers","King Bradley","Dio Brando","Brock","Broly","Cell","Cross Marian","Osamu Dazai","Natsu Dragneel","Ryoma Echizen","Alphonse Elric","Edward Elric","Kiritsugu Emiya","Shirou Emiya","Luke fon Fabre","Frieza","Akira Fudo","Gaara","Gourry Gabriev","Gohan","Goku","Hayato Gokudera","Griffith","Tadashi Hamada","Captain Harlock","Haseo","Kakashi Hatake","Kyoya Hibari","Himura Kenshin","Saito Hiraga","Yoichi Hiruma","T\u014dshir\u014d Hitsugaya","Van Hohenheim","Bertolt Hoover","Maes Hughes","Cygnus Hyoga","Hikaru Ichijyo","Gin Ichimaru","Gendo Ikari","Shinji Ikari","Phoenix Ikki","Inuyasha","Matt Ishida"],G=(a(206),a(207)),_=a.n(G),q=a(208),F=a.n(q);var M=function(e){var t=e.username,a=e.chatroom,r=e.setroomjoined,l=e.setname,s=e.setroom,i=Object(c.useState)(!1),u=Object(n.a)(i,2),m=u[0],d=u[1],E=Object(c.useContext)(v.a);return o.a.createElement("div",{className:"chatjoin"},o.a.createElement("div",{className:"chat_strip"},o.a.createElement("div",null,o.a.createElement("span",null,"Chat Area")),o.a.createElement("img",{className:"svg_1",src:_.a,alt:"chat"})),o.a.createElement("h1",null,"Code",o.a.createElement("span",null,"zone")," Chatroom"),!E.isloggedin&&o.a.createElement("div",{className:"startchat"},o.a.createElement("button",{className:"joinchatbtn",onClick:function(){return d(!0)}},"Start Chat"),o.a.createElement(b.a,{show:m,onHide:function(){return d(!1)}})),E.isloggedin&&o.a.createElement("div",{className:"startchat"},o.a.createElement("button",{className:"joinchatbtn",onClick:function(){s(a),l(t),r(!0)}},"Start Chat")),o.a.createElement("img",{className:"svg_2",src:F.a,alt:"chatt"}))},Y=(a(209),a(237)),X=(a(210),a(211),a(212)),K=a.n(X),P=(a(233),a(234)),R=a.n(P);var J=function(e){var t=e.message,a=t.text,n=t.user,c=!1,r=e.name.trim().toLowerCase();return n.trim().toLowerCase()===r&&(c=!0),c?o.a.createElement("div",{className:"messagecontainer justifyend"},o.a.createElement("div",{className:"messagebox"},o.a.createElement("span",{className:"senttext"},r),o.a.createElement("p",{className:"messagetext"},R.a.emojify(a)))):o.a.createElement("div",{className:"messagecontainer justifystart"},o.a.createElement("div",{className:"messagebox"},o.a.createElement("span",{className:"senttext"},n),o.a.createElement("p",{className:"messagetext"},R.a.emojify(a))))};var W=function(e){var t=e.Messages,a=e.name;return o.a.createElement(K.a,{className:"messages"},t.map((function(e,t){return o.a.createElement("div",{key:t},o.a.createElement(J,{message:e,name:a}))})))};var V=function(e){var t=e.socket,a=e.joinparam,r=t.io.uri,l=Object(c.useState)(a.name),s=Object(n.a)(l,2),i=s[0],u=s[1],m=Object(c.useState)(""),d=Object(n.a)(m,2),E=(d[0],d[1]),p=Object(c.useState)(""),f=Object(n.a)(p,2),h=f[0],g=f[1],v=Object(c.useState)([]),b=Object(n.a)(v,2),j=b[0],y=b[1];Object(c.useEffect)((function(){return u(a.name),E(a.room),console.log(a),t.emit("chat-room",i),function(){t.emit("disconnect"),t.off()}}),[r,a]),Object(c.useEffect)((function(){t.on("message",(function(e){console.log(e),y([].concat(Object(Y.a)(j),[e]))}))}),[j]);var O=function(e){e.preventDefault(),h&&t.emit("sendmessage",h,(function(){g("")}))};return console.log(h,j),Object(c.useEffect)((function(){document.querySelector(".msger-chat").scrollTop+=500})),o.a.createElement("div",{className:"chatpart"},o.a.createElement("main",{className:"msger-chat"},o.a.createElement(W,{Messages:j,name:i})),o.a.createElement("form",{class:"msger-inputarea"},o.a.createElement("input",{type:"text",className:"msger-input",value:h,placeholder:"Type a message....",onChange:function(e){g(e.target.value)},onKeyPress:function(e){return"Enter"===e.key?O(e):null}}),o.a.createElement("button",{type:"submit",onClick:function(e){O(e)},className:"msger-send-btn"},"Send")))};var Q,U=function(e){var t=e.personname,a=e.socket,r=Object(c.useState)(!1),l=Object(n.a)(r,2),s=l[0],i=l[1],u=Object(c.useState)(null),m=Object(n.a)(u,2),d=m[0],E=m[1],p=Object(c.useState)(null),f=Object(n.a)(p,2),h=f[0],g=f[1],v=Object(j.g)().uid;return o.a.createElement("div",{className:"chatbox"},!s&&o.a.createElement(M,{username:t,chatroom:v,setroomjoined:i,setname:E,setroom:g}),s&&o.a.createElement(V,{socket:a,joinparam:{name:d,room:h}}))};a(235);Q=I()("https://codezone34.herokuapp.com");t.default=function(){var e=Object(c.useState)(D[Math.floor(57*Math.random())]),t=Object(n.a)(e,2),a=t[0],r=(t[1],Object(c.useContext)(v.a));return Object(c.useEffect)((function(){Q.on("notification",(function(e){var t=document.createElement("Div");t.classList.add("notificationouterpart"),t.innerHTML="<h3>".concat(e," joined the room</h3>"),document.querySelector(".editorwholepage")&&document.querySelector(".editorwholepage").appendChild(t),setTimeout((function(){for(var e=Array.from(document.querySelectorAll(".notificationouterpart")),t=0;t<e.length;++t)document.querySelector(".editorwholepage").removeChild(e[t])}),5e3)})),Q.on("leavenotification",(function(e){var t=document.createElement("Div");t.classList.add("notificationouterpart"),t.innerHTML="<h3>".concat(e," left the room</h3>"),document.querySelector(".editorwholepage")&&document.querySelector(".editorwholepage").appendChild(t),setTimeout((function(){for(var e=Array.from(document.querySelectorAll(".notificationouterpart")),t=0;t<e.length;++t)document.querySelector(".editorwholepage").removeChild(e[t])}),5e3)}))})),o.a.createElement("div",{className:"editorwholepage"},o.a.createElement(N,{socket:Q,username:r.username?r.username:a}),o.a.createElement("div",{className:"codeandvideo"},o.a.createElement("div",{className:"codearea"},o.a.createElement("div",{className:"codeareastyles"},o.a.createElement(T,{socket:Q,personname:r.username?r.username:a}))),o.a.createElement("div",{className:"videoarea"},o.a.createElement(U,{personname:r.username,socket:Q}))))}}}]);
//# sourceMappingURL=4.833cf3be.chunk.js.map