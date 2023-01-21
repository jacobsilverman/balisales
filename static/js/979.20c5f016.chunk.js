"use strict";(self.webpackChunkbalisales=self.webpackChunkbalisales||[]).push([[979],{1822:function(e,n,t){t.r(n),t.d(n,{default:function(){return I}});var l=t(4165),a=t(5861),i=t(2982),s=t(885),r=t(2791),c=t(2677),u=t(7022),o=t(9743),d=t(6157),h=t(1083),f=t(4894),x=t(9062),Z=t(2892),p=t(4453),m=t(9135),j=t(4530),b=t(6362),g=t(9891),v=t(4925),S=t(3347),N=t(1747),y=t(184);var C=function(){var e=(0,r.useState)(""),n=(0,s.Z)(e,2),t=n[0],C=n[1],I=(0,r.useState)(""),w=(0,s.Z)(I,2),k=w[0],B=w[1],T=(0,r.useState)(""),W=(0,s.Z)(T,2),U=W[0],P=W[1],O=(0,r.useState)(""),R=(0,s.Z)(O,2),D=R[0],H=R[1],L=(0,r.useState)(""),z=(0,s.Z)(L,2),E=z[0],F=z[1],J=(0,r.useState)(""),M=(0,s.Z)(J,2),V=M[0],Y=M[1],_=(0,r.useState)(""),q=(0,s.Z)(_,2),A=(q[0],q[1]),G=(0,r.useState)(!1),K=(0,s.Z)(G,2),Q=K[0],X=K[1],$=(0,r.useState)([]),ee=(0,s.Z)($,2),ne=ee[0],te=ee[1],le=(0,r.useState)([]),ae=(0,s.Z)(le,2),ie=ae[0],se=ae[1],re=(0,r.useState)(0),ce=(0,s.Z)(re,2),ue=(ce[0],ce[1]),oe=(0,r.useState)(0),de=(0,s.Z)(oe,2),he=de[0],fe=de[1],xe=function(){var e=(0,a.Z)((0,l.Z)().mark((function e(){var n,a,i;return(0,l.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return X(!0),i=(0,x.hJ)(Z.db,"posts"),e.next=4,(0,x.ET)(i,{title:t,type:U,brand:D,condition:E,price:V,description:k,numberOfImages:ne.length,timeStamp:Date.now(),author:{name:(null===Z.I8||void 0===Z.I8||null===(n=Z.I8.currentUser)||void 0===n?void 0:n.displayName)||"anonymous",id:(null===Z.I8||void 0===Z.I8||null===(a=Z.I8.currentUser)||void 0===a?void 0:a.uid)||"none"}}).then((function(e){ne[0]||alert("Please upload an image first!");var n=[];return ne.map((function(t,l){var a=(0,p.iH)(Z.tO,"/PostImages/".concat(e.id,"/image-").concat(l)),i=(0,p.B0)(a,t);n.push(i),i.on("state_changed",(function(e){var n=Math.round(e.bytesTransferred/e.totalBytes*100);ue(n)}),(function(e){return console.log(e)}),(function(){console.log(a)}))})),Promise.all(n).then((function(){console.log("all uploaded")})).catch((function(e){console.error(e)})),e})).then((function(e){(0,f.iy)(e.id)}));case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),Ze=function(e){return e.map((function(e,n){return(0,y.jsx)(g.Z,{value:e,children:e},n)}))};return(0,y.jsxs)(u.Z,{className:"create-container",children:[(0,y.jsxs)(o.Z,{children:[(0,y.jsx)(c.Z,{xs:12,md:6,className:"create-input",children:(0,y.jsx)(j.Z,{fullWidth:!0,label:"title",color:"",onChange:function(e){return C(e.target.value)}})}),(0,y.jsx)(c.Z,{xs:12,md:6,className:"create-input",children:(0,y.jsx)(j.Z,{fullWidth:!0,label:"price",color:"",onChange:function(e){return Y(e.target.value)}})}),(0,y.jsx)(c.Z,{xs:12,md:6,className:"create-input",children:(0,y.jsxs)(b.Z,{fullWidth:!0,children:[(0,y.jsx)(v.Z,{id:"brand-label",children:"Brand"}),(0,y.jsxs)(S.Z,{labelId:"brand-label",id:"brand-select",label:"Brand",onChange:function(e){return H(e.target.value)},children:[(0,y.jsx)(g.Z,{value:"default",children:"default"}),Ze(h.YS)]})]})}),(0,y.jsx)(c.Z,{xs:12,md:6,className:"create-input",children:(0,y.jsxs)(b.Z,{fullWidth:!0,children:[(0,y.jsx)(v.Z,{id:"sale-type-label",children:"Sale Type"}),(0,y.jsxs)(S.Z,{labelId:"sale-type-label",id:"sale-type-select",label:"Sale Type",onChange:function(e){return P(e.target.value)},children:[(0,y.jsx)(g.Z,{value:"default",children:"default"}),Ze(h.V5)]})]})}),(0,y.jsx)(c.Z,{xs:12,md:6,className:"create-input",children:(0,y.jsxs)(b.Z,{fullWidth:!0,children:[(0,y.jsx)(v.Z,{id:"condition-label",children:"Condition"}),(0,y.jsxs)(S.Z,{labelId:"condition-label",id:"condition-select",label:"Condition",onChange:function(e){return F(e.target.value)},children:[(0,y.jsx)(g.Z,{value:"default",children:"default"}),Ze([1,2,3,4,5,6,7,8,9,10])]})]})}),(0,y.jsx)(c.Z,{xs:12,md:6,className:"create-input",children:(0,y.jsxs)(b.Z,{fullWidth:!0,children:[(0,y.jsx)(v.Z,{id:"blade-label",children:"Blade"}),(0,y.jsxs)(S.Z,{labelId:"blade-label",id:"blade-select",label:"Blade",onChange:function(e){return A(e.target.value)},children:[(0,y.jsx)(g.Z,{value:"default",children:"default"}),Ze(h.SP)]})]})})]}),(0,y.jsx)(o.Z,{children:(0,y.jsx)(c.Z,{xs:12,children:(0,y.jsx)(N.Z,{style:{width:"100%"},minRows:5,value:k,placeholder:"Description",label:"description",onChange:function(e){return B(e.target.value)}})})}),(0,y.jsx)(o.Z,{children:function(){for(var e=[],n=function(n){var t;e.push((0,y.jsx)(c.Z,{xs:"12",sm:he>0?6:12,className:"setting-item center",children:(0,y.jsxs)("label",{className:"profile-label",htmlFor:"inputTag-"+n,onClick:0!==n&&function(){var e;0!==(e=n)&&(se((function(n){return n.splice(e,1)})),te((function(n){return n.splice(e,1)})),fe((function(e){return e-1})))},children:[(0,y.jsx)("span",{children:(null===(t=ne[he-n])||void 0===t?void 0:t.name)||"Upload Image"}),0===n&&(0,y.jsx)("input",{id:"inputTag-"+n,className:"profile-input",type:"file",onChange:function(e){return t=e,l=n,console.log(t.target.files[0]),t.target.files&&t.target.files[0]&&0===l&&(se([URL.createObjectURL(t.target.files[0])].concat((0,i.Z)(ie))),te((function(e){return[].concat((0,i.Z)(e),[t.target.files[0]])})),fe((function(e){return e+1}))),void console.log(l);var t,l},accept:"/image/*"}),(0,y.jsx)("br",{}),0===n?(0,y.jsx)(m.H3h,{size:70,className:""}):(0,y.jsx)("img",{src:ie[he-n],className:"upload-image",alt:"preview image"})]})},n))},t=0;t<=he;t++)n(t);return e}()}),(0,y.jsx)(o.Z,{children:(0,y.jsx)(c.Z,{xs:12,className:"center",children:(0,y.jsx)(d.Z,{disabled:Q,className:"submit-button",onClick:xe,children:"Submit"})})})]})},I=C}}]);
//# sourceMappingURL=979.20c5f016.chunk.js.map