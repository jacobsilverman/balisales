"use strict";(self.webpackChunkbalisales=self.webpackChunkbalisales||[]).push([[929,906],{8679:function(e,t,n){n.d(t,{Z:function(){return x}});var a=n(4165),s=n(5861),r=n(885),i=n(2791),l=n(7342),u=n(9743),c=n(2677),o=n(6788),m=n(3990),d=n(4894),f=n(4453),h=n(9062),p=n(2892),g=n(184);var x=function(e){var t=e.user,n=e.accountView,x=(0,i.useState)([]),Z=(0,r.Z)(x,2),N=Z[0],b=Z[1],v=(0,i.useState)(!1),j=(0,r.Z)(v,2),y=j[0],S=j[1];(0,i.useEffect)((function(){(0,d.ww)(t).then((function(e){e.sort((function(e,t){return t.timeStamp-e.timeStamp})),b(e)})).catch((function(){console.error("cant get user posts")}))}),[]);var k=function(){var e=(0,s.Z)((0,a.Z)().mark((function e(t){var n,s,r,i;return(0,a.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=(0,f.cF)(),s=(0,h.JU)(p.db,"posts",t.id),e.next=4,(0,h.oe)(s);case 4:(0,d.sq)(t.id),r=0;case 6:if(!(r<t.numberOfImages)){e.next=13;break}return i=(0,f.iH)(n,"PostImages/".concat(t.id,"/image-").concat(r)),e.next=10,(0,f.oq)(i);case 10:r++,e.next=6;break;case 13:b(null===N||void 0===N?void 0:N.filter((function(e){return e.id!==t.id})));case 14:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return(0,g.jsx)(i.Fragment,{children:function(){if(0===N.length)return(0,g.jsx)(o.Z,{});for(var e=[],t=[],a=0;a<N.length;a++)t.push(N[a]),(a+1)%3!==0&&a!==N.length-1||(e.push(t),t=[]);return e.length>0&&(0,g.jsx)(l.ZP,{container:!0,style:{padding:"0px"},className:"grid-container-posts",children:e.map((function(e){return e.map((function(e){var t="url(".concat(null===e||void 0===e?void 0:e.urls[0],")"),a="id="+(null===e||void 0===e?void 0:e.id);return(0,g.jsx)(m.Z,{displayUrl:t,item:e,queryParam:a,accountView:n,deletePost:k,openEditModal:y,setOpenEditModal:S},e.id)}))}))})||(0,g.jsx)(u.Z,{children:(0,g.jsx)(c.Z,{xs:12,className:"center",children:"No Posts Available"})})}()})}},906:function(e,t,n){n.r(t);var a=n(8679);t.default=a.Z},4929:function(e,t,n){n.r(t),n.d(t,{default:function(){return p}});var a=n(1413),s=n(885),r=n(2791),i=n(7022),l=n(9743),u=n(2677),c=n(4894),o=n(906),m=n(9135),d=n(6151),f=n(4530),h=n(184);var p=function(){var e,t=(0,r.useState)(""),n=(0,s.Z)(t,2),p=n[0],g=n[1],x=(0,r.useState)(""),Z=(0,s.Z)(x,2),N=Z[0],b=Z[1],v=(0,r.useState)(""),j=(0,s.Z)(v,2),y=j[0],S=j[1],k=(0,r.useState)(""),w=(0,s.Z)(k,2),C=w[0],P=w[1],W=(0,r.useState)(""),E=(0,s.Z)(W,2),O=E[0],U=E[1],q=(0,r.useState)(""),F=(0,s.Z)(q,2),L=F[0],M=F[1],V=(0,r.useState)(""),H=(0,s.Z)(V,2),I=H[0],R=H[1],T=(0,r.useState)(""),z=(0,s.Z)(T,2),A=z[0],G=z[1],J=(0,r.useState)([]),B=(0,s.Z)(J,2),D=B[0],K=B[1],Q=(0,r.useState)(null),X=(0,s.Z)(Q,2),Y=X[0],$=X[1],_=(0,r.useState)({firstName:!0,lastName:!0,displayName:!0,phoneNumber:!0}),ee=(0,s.Z)(_,2),te=ee[0],ne=ee[1],ae=(0,r.useMemo)((function(){return!Object.values(te).some((function(e){return!1===e}))}),[te]);return(0,r.useEffect)((function(){(0,c.bG)().then((function(e){g(e.id),b(e.firstName),S(e.lastName),P(e.displayName),U(e.phoneNumber),M(e.instagram),R(e.facebook),K(e.posts||[]),ne({firstName:e.firstName.length>0,lastName:e.lastName.length>0,displayName:e.displayName.length>0,phoneNumber:0===e.phoneNumber.length||10===e.phoneNumber.length})}))}),[]),(0,h.jsx)(i.Z,{children:(0,h.jsxs)(l.Z,{children:[(0,h.jsxs)(u.Z,{xs:12,className:"center settings-container",children:[(0,h.jsxs)(l.Z,{children:[(0,h.jsx)(u.Z,{xs:12,md:"6",lg:4,className:"setting-item",children:(0,h.jsx)(f.Z,{fullWidth:!0,label:"first name",error:!te.firstName,type:"search",onChange:function(e){var t=e.target.value;ne((function(e){return(0,a.Z)((0,a.Z)({},e),{},{firstName:""!==t})})),b(t)},value:N})}),(0,h.jsx)(u.Z,{xs:12,md:"6",lg:4,className:"setting-item",children:(0,h.jsx)(f.Z,{fullWidth:!0,label:"last name",error:!te.lastName,type:"search",onChange:function(e){var t=e.target.value;ne((function(e){return(0,a.Z)((0,a.Z)({},e),{},{lastName:""!==t})})),S(t)},value:y})}),(0,h.jsx)(u.Z,{xs:12,md:"6",lg:4,className:"setting-item",children:(0,h.jsx)(f.Z,{fullWidth:!0,label:"display name",error:!te.displayName,type:"search",onChange:function(e){var t=e.target.value;ne((function(e){return(0,a.Z)((0,a.Z)({},e),{},{displayName:""!==t})})),P(t)},value:C})}),(0,h.jsx)(u.Z,{xs:12,md:"6",lg:4,className:"setting-item",children:(0,h.jsx)(f.Z,{fullWidth:!0,label:"phone number",error:!te.phoneNumber,onChange:function(e){var t=e.target.value.replace("(","").replace(")","").replace(" ","").replace("-","");ne((function(e){return(0,a.Z)((0,a.Z)({},e),{},{phoneNumber:0===t.length||10===t.length})})),U(t)},value:(e=O,(e.length>3?"(":"")+e.substring(0,3)+(e.length>3?") ":"")+e.substring(3,6)+(e.length>6?"-":"")+e.substring(6,10)),inputProps:{maxLength:14}})}),(0,h.jsx)(u.Z,{xs:12,md:"6",lg:4,className:"setting-item",children:(0,h.jsx)(f.Z,{fullWidth:!0,label:"instagram",color:"",type:"url",onChange:function(e){return M(e.target.value)},value:L})}),(0,h.jsx)(u.Z,{xs:12,md:"6",lg:4,className:"setting-item",children:(0,h.jsx)(f.Z,{fullWidth:!0,label:"facebook",color:"",type:"url",onChange:function(e){return R(e.target.value)},value:I})}),(0,h.jsx)(u.Z,{xs:12,className:"setting-item",children:(0,h.jsxs)("label",{className:"profile-label",htmlFor:"inputTag",children:[(0,h.jsx)("span",{style:{color:"black"},children:"Profile Picture"}),(0,h.jsx)("input",{id:"inputTag",className:"profile-input",type:"file",onChange:function(e){G(e.target.files[0]),$(URL.createObjectURL(e.target.files[0]))},accept:"/image/*"}),(0,h.jsx)("br",{}),Y?(0,h.jsx)("img",{src:Y,className:"upload-image",alt:"preview image"}):(0,h.jsx)(m.H3h,{size:40})]})})]}),(0,h.jsx)(l.Z,{children:(0,h.jsx)(u.Z,{xs:12,className:"submit-button",children:(0,h.jsx)(d.Z,{disabled:!ae,variant:"contained",onClick:function(){return(0,c.ps)({id:p,firstName:N,lastName:y,displayName:C,phoneNumber:O,instagram:L,facebook:I,posts:D},A)},children:"Submit"})})})]}),(0,h.jsx)("hr",{}),(0,h.jsx)(o.default,{user:p,accountView:!0})]})})}}}]);
//# sourceMappingURL=929.c3858796.chunk.js.map