"use strict";(self.webpackChunkbalisales=self.webpackChunkbalisales||[]).push([[502],{6502:function(e,n,t){t.r(n),t.d(n,{default:function(){return O}});var i=t(4165),l=t(5861),a=t(1413),o=t(3433),s=t(9439),r=t(2791),d=t(3675),c=t(6519),u=t(9743),v=t(2677),h=t(6157),f=t(9230),p=t(184),Z=function(e){var n=e.deletePost,t=e.item,i=e.openDeleteModal,l=e.setOpenDeleteModal,a=e.setOpenEditModal,o=(0,f.$G)().t;return(0,p.jsx)(c.Z,{open:i,id:"delete-modal",children:(0,p.jsx)(u.Z,{className:"modal-dialog delete-modal",children:(0,p.jsxs)(v.Z,{xs:2,className:"modal-content modal-background-edit center",children:[(0,p.jsx)(u.Z,{className:"modal-header",children:(0,p.jsx)(v.Z,{className:"modal-title",children:o("Do you want to delete this post?")})}),(0,p.jsx)("br",{}),(0,p.jsxs)(u.Z,{children:[(0,p.jsx)(v.Z,{xs:6,children:(0,p.jsx)(h.Z,{onClick:function(){return l(!1)},children:o("No")})}),(0,p.jsx)(v.Z,{xs:6,children:(0,p.jsx)(h.Z,{onClick:function(){n(t).then((function(){return a(!1)})),l(!1)},children:o("Yes")})})]})]})})})},x=t(9891),m=t(1889),b=t(7621),j=t(1747),g=t(7391),y=t(6362),k=t(4925),C=t(8588),N=t(9062),S=t(2892),w=t(6278),z=t(9135),P=t(4453),D=function(){var e=(0,l.Z)((0,i.Z)().mark((function e(n,t){var l;return(0,i.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return l=(0,N.JU)(S.db,"".concat((0,d.NZ)(),"-posts"),t),e.next=3,(0,N.pl)(l,n).then((function(){console.log("POST EDIT SAVED")})).catch((function(e){console.error("problem: ",e)}));case 3:case"end":return e.stop()}}),e)})));return function(n,t){return e.apply(this,arguments)}}(),I=function(e){var n=e.item,t=e.setPosts,I=e.openEditModal,O=e.setOpenEditModal,M=e.filterPosts,E=e.setFilterPosts,T=(0,r.useState)(null===n||void 0===n?void 0:n.title),V=(0,s.Z)(T,2),W=V[0],q=V[1],B=(0,r.useState)(null===n||void 0===n?void 0:n.description),H=(0,s.Z)(B,2),R=H[0],F=H[1],U=(0,r.useState)(null===n||void 0===n?void 0:n.type),$=(0,s.Z)(U,2),G=$[0],L=$[1],A=(0,r.useState)(null===n||void 0===n?void 0:n.blade),J=(0,s.Z)(A,2),X=J[0],Y=J[1],_=(0,r.useState)(null===n||void 0===n?void 0:n.brand),K=(0,s.Z)(_,2),Q=K[0],ee=K[1],ne=(0,r.useState)(null===n||void 0===n?void 0:n.condition),te=(0,s.Z)(ne,2),ie=te[0],le=te[1],ae=(0,r.useState)(null===n||void 0===n?void 0:n.price),oe=(0,s.Z)(ae,2),se=oe[0],re=oe[1],de=(0,r.useState)(null===n||void 0===n?void 0:n.status),ce=(0,s.Z)(de,2),ue=ce[0],ve=ce[1],he=(0,r.useState)(!1),fe=(0,s.Z)(he,2),pe=fe[0],Ze=fe[1],xe=(0,r.useState)(!1),me=(0,s.Z)(xe,2),be=me[0],je=me[1],ge=(0,r.useState)(null===n||void 0===n?void 0:n.urls),ye=(0,s.Z)(ge,2),ke=ye[0],Ce=ye[1],Ne=(0,r.useState)({title:!0,type:!0,blade:!0,brand:!0,condition:!0,price:!0,status:!0}),Se=(0,s.Z)(Ne,2),we=Se[0],ze=Se[1],Pe=(0,f.$G)().t;(0,r.useEffect)((function(){var e=!1;return e||(q(null===n||void 0===n?void 0:n.title),F(null===n||void 0===n?void 0:n.description),L(null===n||void 0===n?void 0:n.type),Y(null===n||void 0===n?void 0:n.blade),ee(null===n||void 0===n?void 0:n.brand),le(null===n||void 0===n?void 0:n.condition),re(null===n||void 0===n?void 0:n.price),ve(null===n||void 0===n?void 0:n.status),Ce(null===n||void 0===n?void 0:n.urls)),function(){return e=!0}}),[n]);var De=(0,r.useMemo)((function(){var e=!Object.values(we).some((function(e){return!1===e}));return!0===e&&je(!1),e}),[we]),Ie=function(e,n){return e.map((function(e){return(0,p.jsx)(x.Z,{value:e,children:Pe(e)},n+"-"+e)}))},Oe=function(){var e=(0,l.Z)((0,i.Z)().mark((function e(n){var t,l,a,o;return(0,i.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=(0,P.cF)(),l=(0,N.JU)(S.db,"".concat((0,d.NZ)(),"-posts"),n.id),e.next=4,(0,N.oe)(l);case 4:(0,w.sq)(n.id),a=0;case 6:if(!(a<n.numberOfImages)){e.next=13;break}return o=(0,P.iH)(t,"".concat((0,d.NZ)(),"-postImages/").concat(n.id,"/image-").concat(a)),e.next=10,(0,P.oq)(o);case 10:a++,e.next=6;break;case 13:E(null===M||void 0===M?void 0:M.filter((function(e){return e.id!==n.id})));case 14:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),Me=function(){var e=(0,l.Z)((0,i.Z)().mark((function e(){var t,l,a,o,s,r;return(0,i.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t=(0,P.cF)(),l=0;case 2:if(!(l<M.length)){e.next=17;break}if(e.prev=3,ke.some((function(e){return e.indexOf("-"+l)>-1}))){e.next=9;break}return a=(0,P.iH)(t,"".concat((0,d.NZ)(),"-postImages/").concat(n.id,"/image-").concat(l)),e.next=9,(0,P.oq)(a);case 9:e.next=14;break;case 11:e.prev=11,e.t0=e.catch(3),console.log("can't look through images");case 14:l++,e.next=2;break;case 17:for(o=[],s=function(e){var i=(0,P.iH)(t,"/".concat((0,d.NZ)(),"-postImages/").concat(n.id,"/image-").concat(e));if("string"!==typeof ke[e]){var l=(0,P.B0)(i,ke[e]);o.push(l)}else{var a=new XMLHttpRequest;a.responseType="blob",a.onload=function(e){var n=a.response;if(n){var t=(0,P.B0)(i,n);o.push(t)}},a.open("GET",ke[e]),a.send()}},r=0;r<ke.length;r++)s(r);Promise.all(o).then((function(e){console.log(e)})).catch((function(e){console.error(e)})).finally((function(){window.location.reload()}));case 21:case"end":return e.stop()}}),e,null,[[3,11]])})));return function(){return e.apply(this,arguments)}}(),Ee=(null===ke||void 0===ke?void 0:ke.length)<=1?"200px":"100px",Te=(0,p.jsx)(m.ZP,{justifyContent:"center",container:!0,spacing:3,children:null===ke||void 0===ke?void 0:ke.map((function(e,n){var t="string"!==typeof e?URL.createObjectURL(e):e,i=0===n?"flex-end":n!==ke.length-1?"space-between":"flex-start";return(0,p.jsx)(m.ZP,{Container:!0,item:!0,spacing:3,children:(0,p.jsxs)(b.Z,{children:[(null===ke||void 0===ke?void 0:ke.length)>1&&(0,p.jsx)(h.Z,{variant:"danger",style:{width:"100%",borderRadius:"0px"},onClick:function(){return function(e){var n=null===ke||void 0===ke?void 0:ke.filter((function(n,t){return t!==e}));Ce(n)}(n)},children:"remove"}),(0,p.jsx)(m.ZP,{item:!0,className:"center",style:{backgroundImage:"url(".concat(t,")"),backgroundSize:"100% 100%",width:Ee,height:Ee}},t),(0,p.jsxs)("div",{style:{display:"flex",justifyContent:i},children:[n>0&&(0,p.jsx)(h.Z,{variant:"outlined",onClick:function(){return function(e){e<=0||Ce((function(n){var t=(0,o.Z)(n),i=t[e-1];return t[e-1]=t[e],t[e]=i,t}))}(n)},children:d.tq?"^":"<"}),n<ke.length-1&&(0,p.jsx)(h.Z,{variant:"outlined",onClick:function(){return function(e){e>=(null===ke||void 0===ke?void 0:ke.length)-1||Ce((function(n){var t=(0,o.Z)(n),i=t[e+1];return t[e+1]=t[e],t[e]=i,t}))}(n)},children:d.tq?"v":">"})]})]})},t)}))}),Ve=(0,p.jsx)(u.Z,{className:"edit-input",children:(0,p.jsx)(v.Z,{xs:12,className:"setting-item",children:(0,p.jsxs)("label",{className:"profile-label",htmlFor:"add-post-image",children:[(0,p.jsx)("input",{id:"add-post-image",className:"profile-input",type:"file",onChange:function(e){Ce((function(n){return[].concat((0,o.Z)(n),[e.target.files[0]])}))},accept:"image/*"}),(0,p.jsx)("span",{style:{color:"black"},children:"Add Picture"}),(0,p.jsx)("br",{}),(0,p.jsx)(z.H3h,{size:40})]})})});return(0,p.jsx)(c.Z,{open:I,onClick:function(){return O(!1)},children:(0,p.jsx)(u.Z,{className:"edit-modal",children:(0,p.jsxs)(v.Z,{xs:7,className:"modal-background-edit center",onClick:function(e){return e.stopPropagation()},children:[(0,p.jsx)(h.Z,{variant:"outlined",id:"select-modal-exit-button",color:"error",onClick:function(e){O(!1),q(null===n||void 0===n?void 0:n.title),F(null===n||void 0===n?void 0:n.description),L(null===n||void 0===n?void 0:n.type),Y(null===n||void 0===n?void 0:n.blade),ee(null===n||void 0===n?void 0:n.brand),le(null===n||void 0===n?void 0:n.condition),re(null===n||void 0===n?void 0:n.price),ve(null===n||void 0===n?void 0:n.status),Ce(null===n||void 0===n?void 0:n.urls)},children:"X"}),(0,p.jsx)(Z,{deletePost:Oe,item:n,openDeleteModal:pe,setOpenDeleteModal:Ze,setOpenEditModal:O}),(0,p.jsxs)(u.Z,{className:"edit-input",children:[(0,p.jsx)(v.Z,{xs:4,className:"left",children:(0,p.jsx)("h2",{children:Pe("Edit")})}),(0,p.jsx)(v.Z,{children:(0,p.jsx)(g.Z,{error:!we.title,fullWidth:!0,size:"small",value:W,label:Pe("Title"),className:"input-width",onChange:function(e){var n=e.target.value;n.match(/['\-"><;:\\+{}!@#$%=^*_|[\]]/)||(ze((function(e){return(0,a.Z)((0,a.Z)({},e),{},{title:""!==n})})),q(n))}})})]}),(0,p.jsxs)(u.Z,{className:"edit-input",children:[(0,p.jsx)(v.Z,{sm:4,children:(0,p.jsxs)(y.Z,{fullWidth:!0,children:[(0,p.jsx)(k.Z,{error:!1===we.status&&be,size:"small",id:"status-edit-label",children:Pe("Status")}),(0,p.jsx)(C.Z,{labelId:"status-edit-label",id:"status-edit-select",size:"small",defaultValue:null===n||void 0===n?void 0:n.status,value:ue,label:Pe("Status"),onChange:function(e){var n=e.target.value;""!==n&&ze((function(e){return(0,a.Z)((0,a.Z)({},e),{},{status:!0})})),ve(n)},children:Ie(d.Do,"status")})]})}),(0,p.jsx)(v.Z,{sm:4,children:(0,p.jsxs)(y.Z,{fullWidth:!0,children:[(0,p.jsx)(k.Z,{error:!1===we.type&&be,size:"small",id:"business-edit-label",children:Pe("Sale Type")}),(0,p.jsx)(C.Z,{labelId:"business-edit-label",id:"business-edit-select",size:"small",defaultValue:null===n||void 0===n?void 0:n.type,value:G,label:Pe("Sale Type"),onChange:function(e){var n=e.target.value;""!==n&&ze((function(e){return(0,a.Z)((0,a.Z)({},e),{},{type:!0})})),L(n)},children:Ie(d.V5,"type")})]})}),(0,p.jsx)(v.Z,{sm:4,children:(0,p.jsx)(g.Z,{fullWidth:!0,size:"small",value:se,type:"number",label:Pe("Price"),className:"input-width",onChange:function(e){var n=e.target.value;n.match(/['\-"]/)||(ze((function(e){return(0,a.Z)((0,a.Z)({},e),{},{price:""!==n})})),re(n))}})})]}),(0,p.jsxs)(u.Z,{className:"edit-input",children:[(0,p.jsx)(v.Z,{sm:4,children:(0,p.jsxs)(y.Z,{fullWidth:!0,children:[(0,p.jsx)(k.Z,{error:!1===we.brand&&be,size:"small",id:"brand-edit-label",children:Pe("Brand")}),(0,p.jsx)(C.Z,{labelId:"brand-edit-label",id:"brand-edit-select",size:"small",defaultValue:null===n||void 0===n?void 0:n.brand,value:Q,label:Pe("Brand"),onChange:function(e){var n=e.target.value;""!==n&&ze((function(e){return(0,a.Z)((0,a.Z)({},e),{},{brand:!0})})),ee(n)},children:Ie(d.YS,"brand")})]})}),(0,p.jsx)(v.Z,{sm:4,children:(0,p.jsxs)(y.Z,{fullWidth:!0,error:!1===we.blade&&be,children:[(0,p.jsx)(k.Z,{id:"blade-edit-label",size:"small",children:Pe("Blade")}),(0,p.jsx)(C.Z,{labelId:"blade-edit-label",id:"blade-edit-select",size:"small",defaultValue:null===n||void 0===n?void 0:n.blade,value:X,label:Pe("Blade"),onChange:function(e){var n=e.target.value;""!==n&&ze((function(e){return(0,a.Z)((0,a.Z)({},e),{},{blade:!0})})),Y(n)},children:Ie(d.SP,"blade")})]})}),(0,p.jsx)(v.Z,{sm:4,children:(0,p.jsxs)(y.Z,{fullWidth:!0,children:[(0,p.jsx)(k.Z,{error:!1===we.condition&&be,size:"small",id:"condition-edit-label",children:Pe("Condition")}),(0,p.jsx)(C.Z,{labelId:"condition-edit-label",id:"condition-edit-select",size:"small",defaultValue:null===n||void 0===n?void 0:n.condition,value:ie,label:Pe("Condition"),onChange:function(e){var n=e.target.value;""!==n&&ze((function(e){return(0,a.Z)((0,a.Z)({},e),{},{condition:!0})})),le(n)},children:Ie([1,2,3,4,5,6,7,8,9,10],"condition")})]})})]}),(0,p.jsx)(u.Z,{className:"edit-input",children:(0,p.jsx)(v.Z,{xs:12,children:(0,p.jsx)(j.Z,{style:{width:"100%"},minRows:3,value:R,placeholder:Pe("Description"),label:Pe("Description"),onChange:function(e){var n=e.target.value;n.match(/['\-"><;:\\+{}!@#$%=^*_|[\]]/)||F(n)}})})}),Ve,Te,(0,p.jsxs)(u.Z,{className:"edit-input",children:[(0,p.jsx)(v.Z,{xs:6,children:(0,p.jsx)(h.Z,{variant:"danger",onClick:function(e){e.preventDefault(),Ze(!0)},children:Pe("Delete")})}),(0,p.jsx)(v.Z,{xs:6,children:(0,p.jsx)(h.Z,{disabled:be,onClick:function(){De?(De&&D({title:W,type:G,blade:X,brand:Q,condition:ie,price:se,description:R,status:ue,timeStamp:n.timeStamp,editTimeStamp:Date.now(),numberOfImages:ke.length,author:{name:n.author.name,id:n.author.id}},n.id).then((function(e){t((function(e){return(0,o.Z)(e.map((function(e){return e.id===n.id?(0,a.Z)((0,a.Z)({},n),{},{title:W,type:G,blade:X,brand:Q,condition:ie,price:se,description:R,status:ue}):e})))})),console.log("result: ",e)})).catch((function(e){console.error("problem when saving the edit post: ",e)})),Me(ke),O(!1)):je(!0)},children:Pe("Submit")})})]})]})})})},O=I}}]);
//# sourceMappingURL=502.3d007c0f.chunk.js.map