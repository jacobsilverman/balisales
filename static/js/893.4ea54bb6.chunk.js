"use strict";(self.webpackChunkbalisales=self.webpackChunkbalisales||[]).push([[893],{3893:function(e,n,t){t.r(n),t.d(n,{default:function(){return w}});var i=t(4165),l=t(5861),s=t(885),a=t(2791),d=t(3675),r=t(6519),c=t(9743),o=t(2677),u=t(6157),h=t(184),m=function(e){var n=e.deletePost,t=e.item,i=e.openDeleteModal,l=e.setOpenDeleteModal,s=e.setOpenEditModal;return(0,h.jsx)(r.Z,{open:i,id:"delete-modal",children:(0,h.jsx)(c.Z,{className:"modal-dialog delete-modal",children:(0,h.jsxs)(o.Z,{xs:5,sm:5,md:2,className:"modal-content modal-background center",children:[(0,h.jsx)(c.Z,{className:"modal-header",children:(0,h.jsx)(o.Z,{className:"modal-title",children:"Do you want to delete this post?"})}),(0,h.jsxs)(c.Z,{children:[(0,h.jsx)(o.Z,{xs:6,children:(0,h.jsx)(u.Z,{onClick:function(){return l(!1)},children:"no"})}),(0,h.jsx)(o.Z,{xs:6,children:(0,h.jsx)(u.Z,{onClick:function(){n(t).then((function(){return s(!1)})),l(!1)},children:"yes"})})]})]})})})},x=t(9891),p=t(1747),f=t(4530),Z=t(6362),j=t(4925),b=t(3347),v=t(9062),g=t(2892),N=t(4894),C=t(4453),k=function(e){var n=e.item,t=e.openEditModal,k=e.setOpenEditModal,w=e.filterPosts,S=e.setFilterPosts,y=(0,a.useState)(null===n||void 0===n?void 0:n.title),D=(0,s.Z)(y,2),z=D[0],I=D[1],M=(0,a.useState)(null===n||void 0===n?void 0:n.description),O=(0,s.Z)(M,2),P=O[0],E=O[1],W=(0,a.useState)(null===n||void 0===n?void 0:n.type),B=(0,s.Z)(W,2),F=B[0],q=B[1],H=(0,a.useState)(null===n||void 0===n?void 0:n.brand),J=(0,s.Z)(H,2),R=J[0],U=J[1],T=(0,a.useState)(null===n||void 0===n?void 0:n.condition),V=(0,s.Z)(T,2),Y=V[0],A=V[1],G=(0,a.useState)(null===n||void 0===n?void 0:n.price),K=(0,s.Z)(G,2),L=K[0],Q=K[1],X=(0,a.useState)(!1),$=(0,s.Z)(X,2),_=$[0],ee=$[1];(0,a.useEffect)((function(){I(n.title),E(n.description),q(n.type),U(n.brand),A(n.condition),Q(n.price)}),[n]);var ne=function(e,n){return e.map((function(e){return(0,h.jsx)(x.Z,{value:e,children:e},n+"-"+e)}))},te=function(){var e=(0,l.Z)((0,i.Z)().mark((function e(){var t;return(0,i.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=(0,v.JU)(g.db,"posts",n.id),e.next=3,(0,v.pl)(t,{title:z,type:F,brand:R,condition:Y,price:L,description:P,timeStamp:Date.now(),numberOfImages:n.numberOfImages,author:{name:n.author.name,id:n.author.id}}).then((function(){var e=(0,C.iH)((0,C.cF)(),"PostImages/".concat(n.id,"/image-0"));console.log("pictureRef: ",e)})).catch((function(e){console.error("problem: ",e)})).finally((function(){window.location.reload()}));case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),ie=function(){var e=(0,l.Z)((0,i.Z)().mark((function e(n){var t,l,s,a;return(0,i.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=(0,C.cF)(),l=(0,v.JU)(g.db,"posts",n.id),e.next=4,(0,v.oe)(l);case 4:(0,N.sq)(n.id),s=0;case 6:if(!(s<n.numberOfImages)){e.next=13;break}return a=(0,C.iH)(t,"PostImages/".concat(n.id,"/image-").concat(s)),e.next=10,(0,C.oq)(a);case 10:s++,e.next=6;break;case 13:S(null===w||void 0===w?void 0:w.filter((function(e){return e.id!==n.id})));case 14:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}();return(0,h.jsx)(r.Z,{open:t,children:(0,h.jsx)(c.Z,{className:"edit-modal",children:(0,h.jsxs)(o.Z,{xs:7,className:"modal-background center",children:[(0,h.jsx)(m,{deletePost:ie,item:n,openDeleteModal:_,setOpenDeleteModal:ee,setOpenEditModal:k}),(0,h.jsxs)(c.Z,{className:"edit-input",children:[(0,h.jsx)(o.Z,{xs:6,sm:9,className:"left",children:(0,h.jsx)("h2",{children:"Edit"})}),(0,h.jsx)(o.Z,{xs:6,sm:3,children:(0,h.jsx)(u.Z,{variant:"danger",onClick:function(e){e.preventDefault(),ee(!0)},children:"Delete"})})]}),(0,h.jsx)(c.Z,{className:"edit-input",children:(0,h.jsx)(f.Z,{fullWidth:!0,size:"small",value:z,label:"Title",className:"input-width",onChange:function(e){return I(e.target.value)}})}),(0,h.jsx)(c.Z,{className:"edit-input",children:(0,h.jsx)(f.Z,{fullWidth:!0,size:"small",value:L,label:"Price",className:"input-width",onChange:function(e){return Q(e.target.value)}})}),(0,h.jsx)(c.Z,{className:"edit-input",children:(0,h.jsxs)(Z.Z,{fullWidth:!0,children:[(0,h.jsx)(j.Z,{size:"small",id:"brand-edit-label",children:"Brand"}),(0,h.jsx)(b.Z,{labelId:"brand-edit-label",id:"brand-edit-select",size:"small",value:R,label:"Brand",onChange:function(e){return U(e.target.value)},children:ne(d.YS,"brand")})]})}),(0,h.jsx)(c.Z,{className:"edit-input",children:(0,h.jsxs)(Z.Z,{fullWidth:!0,children:[(0,h.jsx)(j.Z,{size:"small",id:"business-edit-label",children:"Business"}),(0,h.jsx)(b.Z,{labelId:"business-edit-label",id:"business-edit-select",size:"small",value:F,label:"Business",onChange:function(e){return q(e.target.value)},children:ne(d.V5,"type")})]})}),(0,h.jsx)(c.Z,{className:"edit-input",children:(0,h.jsxs)(Z.Z,{fullWidth:!0,children:[(0,h.jsx)(j.Z,{size:"small",id:"condition-edit-label",children:"Condition"}),(0,h.jsx)(b.Z,{labelId:"condition-edit-label",id:"condition-edit-select",size:"small",value:Y,label:"Condition",onChange:function(e){return A(e.target.value)},children:ne([1,2,3,4,5,6,7,8,9,10],"condition")})]})}),(0,h.jsx)(c.Z,{className:"edit-input",children:(0,h.jsx)(p.Z,{fullwidth:"true",minRows:3,value:P,placeholder:"Description",label:"description",onChange:function(e){return E(e.target.value)}})}),(0,h.jsxs)(c.Z,{className:"edit-input",children:[(0,h.jsx)(o.Z,{xs:6,children:(0,h.jsx)(u.Z,{onClick:function(){return k(!1)},children:"Cancel"})}),(0,h.jsx)(o.Z,{xs:6,children:(0,h.jsx)(u.Z,{onClick:function(){te(),k(!1)},children:"Submit"})})]})]})})})},w=k}}]);
//# sourceMappingURL=893.4ea54bb6.chunk.js.map