"use strict";(self.webpackChunkbalisales=self.webpackChunkbalisales||[]).push([[929,906],{8679:function(e,t,n){n.d(t,{Z:function(){return Z}});var a=n(4165),s=n(5861),i=n(885),l=n(2791),r=n(7342),c=n(9743),u=n(2677),o=n(6788),d=n(1089),m=n(4894),h=n(4453),f=n(9062),p=n(2892),x=n(184);var Z=function(e){var t=e.user,n=e.accountView,Z=(0,l.useState)([]),g=(0,i.Z)(Z,2),j=g[0],v=g[1],b=(0,l.useState)(!1),N=(0,i.Z)(b,2),C=N[0],w=N[1];(0,l.useEffect)((function(){(0,m.ww)(t).then((function(e){e.sort((function(e,t){return t.timeStamp-e.timeStamp})),v(e)})).catch((function(){console.error("cant get user posts")}))}),[]);var y=function(){var e=(0,s.Z)((0,a.Z)().mark((function e(t){var n,s,i,l;return(0,a.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=(0,h.cF)(),s=(0,f.JU)(p.db,"posts",t.id),e.next=4,(0,f.oe)(s);case 4:(0,m.sq)(t.id),i=0;case 6:if(!(i<t.numberOfImages)){e.next=13;break}return l=(0,h.iH)(n,"PostImages/".concat(t.id,"/image-").concat(i)),e.next=10,(0,h.oq)(l);case 10:i++,e.next=6;break;case 13:v(null===j||void 0===j?void 0:j.filter((function(e){return e.id!==t.id})));case 14:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return(0,x.jsx)(l.Fragment,{children:function(){if(0===j.length)return(0,x.jsx)(o.Z,{});for(var e=[],t=[],a=0;a<j.length;a++)t.push(j[a]),(a+1)%3!==0&&a!==j.length-1||(e.push(t),t=[]);return e.length>0&&(0,x.jsx)(r.ZP,{container:!0,style:{padding:"0px"},className:"grid-container-posts",children:e.map((function(e){return e.map((function(e){var t="url(".concat(null===e||void 0===e?void 0:e.urls[0],")"),a="id="+(null===e||void 0===e?void 0:e.id);return(0,x.jsx)(d.Z,{displayUrl:t,item:e,queryParam:a,accountView:n,deletePost:y,openEditModal:C,setOpenEditModal:w},e.id)}))}))})||(0,x.jsx)(c.Z,{children:(0,x.jsx)(u.Z,{xs:12,className:"center",children:"No Posts Available"})})}()})}},906:function(e,t,n){n.r(t);var a=n(8679);t.default=a.Z},1089:function(e,t,n){n.d(t,{Z:function(){return k}});var a=n(2791),s=n(3504),i=n(7342),l=n(4165),r=n(5861),c=n(885),u=n(1083),o=n(6519),d=n(9743),m=n(2677),h=n(6157),f=n(184),p=function(e){var t=e.deletePost,n=e.item,a=e.openDeleteModal,s=e.setOpenDeleteModal;return(0,f.jsx)(o.Z,{open:a,id:"delete-modal",children:(0,f.jsx)(d.Z,{className:"modal-dialog delete-modal",children:(0,f.jsxs)(m.Z,{xs:5,sm:5,md:2,className:"modal-content modal-background center",children:[(0,f.jsx)(d.Z,{className:"modal-header",children:(0,f.jsx)(m.Z,{className:"modal-title",children:"Do you want to delete this post?"})}),(0,f.jsxs)(d.Z,{children:[(0,f.jsx)(m.Z,{xs:6,children:(0,f.jsx)(h.Z,{onClick:function(){return s(!1)},children:"no"})}),(0,f.jsx)(m.Z,{xs:6,children:(0,f.jsx)(h.Z,{onClick:function(){t(n),s(!1)},children:"yes"})})]})]})})})},x=n(9891),Z=n(1747),g=n(4530),j=n(6362),v=n(4925),b=n(3347),N=n(9062),C=n(2892),w=n(9135),y=n(4453),S=function(e){var t=e.item,n=e.openEditModal,s=e.setOpenEditModal,S=e.deletePost,k=(0,a.useState)(t.title),P=(0,c.Z)(k,2),M=P[0],V=P[1],H=(0,a.useState)(t.description),O=(0,c.Z)(H,2),E=O[0],I=O[1],W=(0,a.useState)(t.type),z=(0,c.Z)(W,2),D=z[0],U=z[1],B=(0,a.useState)(t.brand),F=(0,c.Z)(B,2),R=F[0],q=F[1],L=(0,a.useState)(t.condition),T=(0,c.Z)(L,2),J=T[0],A=T[1],G=(0,a.useState)(t.price),Y=(0,c.Z)(G,2),K=Y[0],Q=Y[1],X=(0,a.useState)(!1),$=(0,c.Z)(X,2),_=$[0],ee=$[1],te=(0,a.useState)(t.numberOfImages),ne=(0,c.Z)(te,2),ae=ne[0],se=(ne[1],(0,a.useState)({})),ie=(0,c.Z)(se,2),le=ie[0],re=ie[1],ce=(0,a.useState)(""),ue=(0,c.Z)(ce,2),oe=(ue[0],ue[1]);var de=function(e){return e.map((function(e,t){return(0,f.jsx)(x.Z,{value:e,children:e},t)}))},me=function(){var e=(0,r.Z)((0,l.Z)().mark((function e(){var n;return(0,l.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=(0,N.JU)(C.db,"posts",t.id),e.next=3,(0,N.pl)(n,{title:M,type:D,brand:R,condition:J,price:K,description:E,timeStamp:Date.now(),numberOfImages:ae,author:{name:t.author.name,id:t.author.id}}).then((function(){var e=(0,y.iH)((0,y.cF)(),"PostImages/".concat(t.id,"/image-0"));console.log("pictureRef: ",e)})).catch((function(e){console.error("problem: ",e)})).finally((function(){window.location.reload()}));case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();i.ZP,t.urls.map((function(e){return(0,f.jsx)(i.ZP,{item:!0,className:"center",style:{backgroundImage:"url(".concat(e,")"),backgroundSize:"100% 100%",width:"100px",height:"100px"},onClick:function(){return function(e){re((function(t){var n;return t[e]=null===(n=!t[e])||void 0===n||n,t})),console.log(le)}(e)},children:le[e]},e)})),d.Z,m.Z,w.H3h;return(0,f.jsx)(o.Z,{open:n,children:(0,f.jsx)(d.Z,{className:"edit-modal",children:(0,f.jsxs)(m.Z,{xs:7,className:"modal-background center",children:[(0,f.jsx)(p,{deletePost:S,item:t,openDeleteModal:_,setOpenDeleteModal:ee}),(0,f.jsxs)(d.Z,{className:"edit-input",children:[(0,f.jsx)(m.Z,{xs:6,sm:9,className:"left",children:(0,f.jsx)("h2",{children:"Edit"})}),(0,f.jsx)(m.Z,{xs:6,sm:3,children:(0,f.jsx)(h.Z,{variant:"danger",onClick:function(e){e.preventDefault(),ee(!0)},children:"Delete"})})]}),(0,f.jsx)(d.Z,{className:"edit-input",children:(0,f.jsx)(g.Z,{fullWidth:!0,size:"small",value:M,label:"Title",className:"input-width",onChange:function(e){return V(e.target.value)}})}),(0,f.jsx)(d.Z,{className:"edit-input",children:(0,f.jsx)(g.Z,{fullWidth:!0,size:"small",value:K,label:"Price",className:"input-width",onChange:function(e){return Q(e.target.value)}})}),(0,f.jsx)(d.Z,{className:"edit-input",children:(0,f.jsxs)(j.Z,{fullWidth:!0,children:[(0,f.jsx)(v.Z,{size:"small",id:"brand-edit-label",children:"Brand"}),(0,f.jsx)(b.Z,{labelId:"brand-edit-label",id:"brand-edit-select",size:"small",value:R,label:"Brand",onChange:function(e){return q(e.target.value)},children:de(u.YS)})]})}),(0,f.jsx)(d.Z,{className:"edit-input",children:(0,f.jsxs)(j.Z,{fullWidth:!0,children:[(0,f.jsx)(v.Z,{size:"small",id:"business-edit-label",children:"Business"}),(0,f.jsx)(b.Z,{labelId:"business-edit-label",id:"business-edit-select",size:"small",value:D,label:"Business",onChange:function(e){return U(e.target.value)},children:de(u.V5)})]})}),(0,f.jsx)(d.Z,{className:"edit-input",children:(0,f.jsxs)(j.Z,{fullWidth:!0,children:[(0,f.jsx)(v.Z,{size:"small",id:"condition-edit-label",children:"Condition"}),(0,f.jsx)(b.Z,{labelId:"condition-edit-label",id:"condition-edit-select",size:"small",value:J,label:"Condition",onChange:function(e){return A(e.target.value)},children:de([1,2,3,4,5,6,7,8,9,10])})]})}),(0,f.jsx)(d.Z,{className:"edit-input",children:(0,f.jsx)(Z.Z,{fullwidth:"true",minRows:3,value:E,placeholder:"Description",label:"description",onChange:function(e){return I(e.target.value)}})}),(0,f.jsxs)(d.Z,{className:"edit-input",children:[(0,f.jsx)(m.Z,{xs:6,children:(0,f.jsx)(h.Z,{onClick:function(){return s(!1)},children:"Cancel"})}),(0,f.jsx)(m.Z,{xs:6,children:(0,f.jsx)(h.Z,{onClick:function(){me(),s(!1)},children:"Submit"})})]})]})})})};var k=function(e){var t=e.displayUrl,n=e.item,l=e.queryParam,r=e.viewCount,c=e.viewCountHeight,u=e.accountView,o=e.showViewCount,d=void 0===o?3:o,m=e.deletePost,h=e.openEditModal,p=e.setOpenEditModal;return(0,f.jsxs)(a.Fragment,{children:[u&&(0,f.jsx)(S,{item:n,openEditModal:h,setOpenEditModal:p,deletePost:m}),(0,f.jsx)(i.ZP,{item:!0,className:"post-container",style:{backgroundImage:t,height:c+"vw"},id:"post"+(null===n||void 0===n?void 0:n.id),xs:d?4:12/r,children:(0,f.jsx)(s.rU,{className:"link",to:!u&&{pathname:"/singlePost",search:l},onClick:u&&function(e){e.preventDefault(),p(!0)},children:(null===n||void 0===n?void 0:n.numberOfImages)>1&&(0,f.jsx)("svg",{style:{marginLeft:"auto",marginRight:"1vw",width:"5vw",height:"5vw",color:"white"},viewBox:"0 0 24 24",children:(0,f.jsx)("path",{fill:"currentColor",d:"M21 16V6H7V16H21M21 4C21.53 4 22.04 4.21 22.41 4.59C22.79 4.96 23 5.47 23 6V16C23 16.53 22.79 17.04 22.41 17.41C22.04 17.79 21.53 18 21 18H7C5.89 18 5 17.1 5 16V6C5 4.89 5.89 4 7 4H21M3 20H18V22H3C2.47 22 1.96 21.79 1.59 21.41C1.21 21.04 1 20.53 1 20V9H3V20Z"})})})})]})}},4929:function(e,t,n){n.r(t),n.d(t,{default:function(){return p}});var a=n(1413),s=n(885),i=n(2791),l=n(7022),r=n(9743),c=n(2677),u=n(4894),o=n(906),d=n(9135),m=n(6151),h=n(4530),f=n(184);var p=function(){var e,t=(0,i.useState)(""),n=(0,s.Z)(t,2),p=n[0],x=n[1],Z=(0,i.useState)(""),g=(0,s.Z)(Z,2),j=g[0],v=g[1],b=(0,i.useState)(""),N=(0,s.Z)(b,2),C=N[0],w=N[1],y=(0,i.useState)(""),S=(0,s.Z)(y,2),k=S[0],P=S[1],M=(0,i.useState)(""),V=(0,s.Z)(M,2),H=V[0],O=V[1],E=(0,i.useState)(""),I=(0,s.Z)(E,2),W=I[0],z=I[1],D=(0,i.useState)(""),U=(0,s.Z)(D,2),B=U[0],F=U[1],R=(0,i.useState)(""),q=(0,s.Z)(R,2),L=q[0],T=q[1],J=(0,i.useState)([]),A=(0,s.Z)(J,2),G=A[0],Y=A[1],K=(0,i.useState)(null),Q=(0,s.Z)(K,2),X=Q[0],$=Q[1],_=(0,i.useState)({firstName:!0,lastName:!0,displayName:!0,phoneNumber:!0}),ee=(0,s.Z)(_,2),te=ee[0],ne=ee[1],ae=(0,i.useMemo)((function(){return!Object.values(te).some((function(e){return!1===e}))}),[te]);return(0,i.useEffect)((function(){(0,u.bG)().then((function(e){x(e.id),v(e.firstName),w(e.lastName),P(e.displayName),O(e.phoneNumber),z(e.instagram),F(e.facebook),Y(e.posts||[]),ne({firstName:e.firstName.length>0,lastName:e.lastName.length>0,displayName:e.displayName.length>0,phoneNumber:0===e.phoneNumber.length||10===e.phoneNumber.length})}))}),[]),(0,f.jsx)(l.Z,{children:(0,f.jsxs)(r.Z,{children:[(0,f.jsxs)(c.Z,{xs:12,className:"center settings-container",children:[(0,f.jsxs)(r.Z,{children:[(0,f.jsx)(c.Z,{xs:12,md:"6",lg:4,className:"setting-item",children:(0,f.jsx)(h.Z,{fullWidth:!0,label:"first name",error:!te.firstName,type:"search",onChange:function(e){var t=e.target.value;ne((function(e){return(0,a.Z)((0,a.Z)({},e),{},{firstName:""!==t})})),v(t)},value:j})}),(0,f.jsx)(c.Z,{xs:12,md:"6",lg:4,className:"setting-item",children:(0,f.jsx)(h.Z,{fullWidth:!0,label:"last name",error:!te.lastName,type:"search",onChange:function(e){var t=e.target.value;ne((function(e){return(0,a.Z)((0,a.Z)({},e),{},{lastName:""!==t})})),w(t)},value:C})}),(0,f.jsx)(c.Z,{xs:12,md:"6",lg:4,className:"setting-item",children:(0,f.jsx)(h.Z,{fullWidth:!0,label:"display name",error:!te.displayName,type:"search",onChange:function(e){var t=e.target.value;ne((function(e){return(0,a.Z)((0,a.Z)({},e),{},{displayName:""!==t})})),P(t)},value:k})}),(0,f.jsx)(c.Z,{xs:12,md:"6",lg:4,className:"setting-item",children:(0,f.jsx)(h.Z,{fullWidth:!0,label:"phone number",error:!te.phoneNumber,onChange:function(e){var t=e.target.value.replace("(","").replace(")","").replace(" ","").replace("-","");ne((function(e){return(0,a.Z)((0,a.Z)({},e),{},{phoneNumber:0===t.length||10===t.length})})),O(t)},value:(e=H,(e.length>3?"(":"")+e.substring(0,3)+(e.length>3?") ":"")+e.substring(3,6)+(e.length>6?"-":"")+e.substring(6,10)),inputProps:{maxLength:14}})}),(0,f.jsx)(c.Z,{xs:12,md:"6",lg:4,className:"setting-item",children:(0,f.jsx)(h.Z,{fullWidth:!0,label:"instagram",color:"",type:"url",onChange:function(e){return z(e.target.value)},value:W})}),(0,f.jsx)(c.Z,{xs:12,md:"6",lg:4,className:"setting-item",children:(0,f.jsx)(h.Z,{fullWidth:!0,label:"facebook",color:"",type:"url",onChange:function(e){return F(e.target.value)},value:B})}),(0,f.jsx)(c.Z,{xs:12,className:"setting-item",children:(0,f.jsxs)("label",{className:"profile-label",htmlFor:"inputTag",children:[(0,f.jsx)("span",{style:{color:"black"},children:"Profile Picture"}),(0,f.jsx)("input",{id:"inputTag",className:"profile-input",type:"file",onChange:function(e){T(e.target.files[0]),$(URL.createObjectURL(e.target.files[0]))},accept:"/image/*"}),(0,f.jsx)("br",{}),X?(0,f.jsx)("img",{src:X,className:"upload-image",alt:"preview image"}):(0,f.jsx)(d.H3h,{size:40})]})})]}),(0,f.jsx)(r.Z,{children:(0,f.jsx)(c.Z,{xs:12,className:"submit-button",children:(0,f.jsx)(m.Z,{disabled:!ae,variant:"contained",onClick:function(){return(0,u.ps)({id:p,firstName:j,lastName:C,displayName:k,phoneNumber:H,instagram:W,facebook:B,posts:G},L)},children:"Submit"})})})]}),(0,f.jsx)("hr",{}),(0,f.jsx)(o.default,{user:p,accountView:!0})]})})}}}]);
//# sourceMappingURL=929.59b248a3.chunk.js.map