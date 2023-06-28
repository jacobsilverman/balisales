"use strict";(self.webpackChunkbalisales=self.webpackChunkbalisales||[]).push([[979],{1822:function(e,t,n){n.r(t),n.d(t,{default:function(){return w}});var a=n(4165),r=n(5861),l=n(1413),i=n(3433),s=n(9439),c=n(2791),u=n(2677),o=n(7022),d=n(9743),f=n(6157),h=n(3675),b=n(4894),v=n(9062),p=n(2892),Z=n(4453),m=n(9135),x=n(7391),g=n(6362),j=n(9891),N=n(4925),y=n(8588),S=n(1747),C=n(9230),I=n(184);var k=function(){var e=(0,c.useState)(""),t=(0,s.Z)(e,2),n=t[0],k=t[1],w=(0,c.useState)(""),P=(0,s.Z)(w,2),B=P[0],O=P[1],D=(0,c.useState)(""),W=(0,s.Z)(D,2),R=W[0],T=W[1],U=(0,c.useState)(""),V=(0,s.Z)(U,2),z=V[0],_=V[1],E=(0,c.useState)(""),F=(0,s.Z)(E,2),H=F[0],L=F[1],M=(0,c.useState)(""),$=(0,s.Z)(M,2),A=$[0],G=$[1],J=(0,c.useState)(""),K=(0,s.Z)(J,2),Y=K[0],q=K[1],Q=(0,c.useState)(!1),X=(0,s.Z)(Q,2),ee=X[0],te=X[1],ne=(0,c.useState)([]),ae=(0,s.Z)(ne,2),re=ae[0],le=ae[1],ie=(0,c.useState)([]),se=(0,s.Z)(ie,2),ce=se[0],ue=se[1],oe=(0,c.useState)(0),de=(0,s.Z)(oe,2),fe=(de[0],de[1]),he=(0,c.useState)(0),be=(0,s.Z)(he,2),ve=be[0],pe=be[1],Ze=(0,c.useState)({title:!1,price:!1,brand:!1,sale:!1,condition:!1,blade:!1,picture:!1}),me=(0,s.Z)(Ze,2),xe=me[0],ge=me[1],je=(0,C.$G)().t,Ne=(0,c.useMemo)((function(){var e=!Object.values(xe).some((function(e){return!1===e}));return!0===e&&te(!1),e}),[xe]),ye=function(){var e=(0,r.Z)((0,a.Z)().mark((function e(){var t,r,l;return(0,a.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(te(!0),Ne){e.next=3;break}return e.abrupt("return");case 3:if(re[0]){e.next=6;break}return alert("Please upload an image first!"),e.abrupt("return");case 6:return l=(0,v.hJ)(p.db,"production-posts"),e.next=9,(0,v.ET)(l,{status:"Available",title:n,type:R,blade:Y,brand:z,condition:H,price:A,description:B,numberOfImages:re.length,timeStamp:Date.now(),author:{name:(null===p.I8||void 0===p.I8||null===(t=p.I8.currentUser)||void 0===t?void 0:t.displayName)||"anonymous",id:(null===p.I8||void 0===p.I8||null===(r=p.I8.currentUser)||void 0===r?void 0:r.uid)||"none"}}).then((function(e){var t=[];return re.map((function(n,a){var r=(0,Z.iH)(p.tO,"/".concat((0,h.NZ)(),"-postImages/").concat(e.id,"/image-").concat(a)),l=(0,Z.B0)(r,n);t.push(l),l.on("state_changed",(function(e){var t=Math.round(e.bytesTransferred/e.totalBytes*100);fe(t)}),(function(e){return console.log(e)}),(function(){console.log(r)}))})),Promise.all(t).then((function(){console.log("all uploaded"),k(""),O(""),T(""),_(""),L(""),G(""),q(""),pe(0),le([]),ue([]),te(!1)})).catch((function(e){console.error(e)})),e})).then((function(e){(0,b.iy)(e.id)})).catch((function(){console.log("error with creating post")}));case 9:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),Se=function(e,t){return e.map((function(e){return(0,I.jsx)(j.Z,{value:e,children:je(e)},t+"-"+e)}))};return(0,I.jsxs)(o.Z,{className:"create-container",children:[(0,I.jsxs)(d.Z,{children:[(0,I.jsx)(u.Z,{xs:12,md:6,className:"create-input",children:(0,I.jsx)(x.Z,{fullWidth:!0,label:je("Title"),color:"",error:!1===xe.title&&ee,type:"search",value:n,onChange:function(e){var t=e.target.value;t.length>25||t.match(/['\-"><;:\\+{}!@#$%=^*_|[\]]/)||(ge((function(e){return(0,l.Z)((0,l.Z)({},e),{},{title:""!==t})})),k(t))}})}),(0,I.jsx)(u.Z,{xs:12,md:6,className:"create-input",children:(0,I.jsx)(x.Z,{fullWidth:!0,label:je("Price"),color:"",error:!1===xe.price&&ee,type:"number",value:A,onChange:function(e){var t=e.target.value;t.match(/[-]/)||(ge((function(e){return(0,l.Z)((0,l.Z)({},e),{},{price:""!==t})})),G(t))}})}),(0,I.jsx)(u.Z,{xs:12,md:6,className:"create-input",children:(0,I.jsxs)(g.Z,{fullWidth:!0,error:!1===xe.brand&&ee,children:[(0,I.jsx)(N.Z,{id:"brand-label",children:je("Brand")}),(0,I.jsx)(y.Z,{labelId:"brand-label",id:"brand-select",label:"Brand",defaultValue:"",value:z,onChange:function(e){var t=e.target.value;""!==t&&ge((function(e){return(0,l.Z)((0,l.Z)({},e),{},{brand:!0})})),_(t)},children:Se(h.YS,"brand")})]})}),(0,I.jsx)(u.Z,{xs:12,md:6,className:"create-input",children:(0,I.jsxs)(g.Z,{fullWidth:!0,error:!1===xe.sale&&ee,children:[(0,I.jsx)(N.Z,{id:"sale-type-label",children:je("Sale Type")}),(0,I.jsx)(y.Z,{labelId:"sale-type-label",id:"sale-type-select",label:je("Sale Type"),defaultValue:"",value:R,onChange:function(e){var t=e.target.value;""!==t&&ge((function(e){return(0,l.Z)((0,l.Z)({},e),{},{sale:!0})})),T(t)},children:Se(h.V5,"type")})]})}),(0,I.jsx)(u.Z,{xs:12,md:6,className:"create-input",children:(0,I.jsxs)(g.Z,{fullWidth:!0,error:!1===xe.condition&&ee,children:[(0,I.jsx)(N.Z,{id:"condition-label",children:je("Condition")}),(0,I.jsx)(y.Z,{labelId:"condition-label",id:"condition-select",label:je("Condition"),defaultValue:"",value:H,onChange:function(e){var t=e.target.value;""!==t&&ge((function(e){return(0,l.Z)((0,l.Z)({},e),{},{condition:!0})})),L(t)},children:Se([1,2,3,4,5,6,7,8,9,10],"condition")})]})}),(0,I.jsx)(u.Z,{xs:12,md:6,className:"create-input",children:(0,I.jsxs)(g.Z,{fullWidth:!0,error:!1===xe.blade&&ee,children:[(0,I.jsx)(N.Z,{id:"blade-label",children:je("Blade")}),(0,I.jsx)(y.Z,{labelId:"blade-label",id:"blade-select",label:je("Blade"),defaultValue:"",value:Y,onChange:function(e){var t=e.target.value;""!==t&&ge((function(e){return(0,l.Z)((0,l.Z)({},e),{},{blade:!0})})),q(t)},children:Se(h.SP,"blade")})]})})]}),(0,I.jsx)(d.Z,{children:(0,I.jsx)(u.Z,{xs:12,children:(0,I.jsx)(S.Z,{style:{width:"100%"},minRows:5,value:B,placeholder:je("Description"),label:je("Description"),onChange:function(e){var t=e.target.value;t.length>425||t.match(/[\-><;:\\+{}@%=^*_|[\]]/)||O(t)}})})}),(0,I.jsxs)(d.Z,{children:[(0,I.jsx)(u.Z,{xs:"12",className:"setting-item center",children:(0,I.jsxs)("label",{className:"profile-label",htmlFor:"inputPicture-default",children:[(0,I.jsx)("b",{children:je("Upload Image")}),(0,I.jsx)("input",{id:"inputPicture-default",className:"profile-input",type:"file",onChange:function(e){var t;(t=e).target.files&&t.target.files[0]&&(ue((function(e){return[].concat((0,i.Z)(e),[URL.createObjectURL(t.target.files[0])])})),le((function(e){return[].concat((0,i.Z)(e),[t.target.files[0]])})),pe((function(e){return e+1})),ge((function(e){return(0,l.Z)((0,l.Z)({},e),{},{picture:!0})})))},accept:"/image/*"}),(0,I.jsx)("br",{}),(0,I.jsx)(m.H3h,{size:70,className:""})]})}),function(){for(var e=[],t=function(t){var n,a,r,i;e.push((0,I.jsx)(u.Z,{xs:"12",className:"setting-item center",children:(0,I.jsxs)("label",{className:"profile-label",htmlFor:"inputPicture-"+(null===(a=re[t])||void 0===a?void 0:a.name),onClick:function(){return function(e){for(var t=[],n=[],a=0;a<ce.length;a++)e!==a&&(t.push(ce[a]),n.push(re[a]));ue(t),le(n),pe((function(e){return e-1})),ve-1===0&&ge((function(e){return(0,l.Z)((0,l.Z)({},e),{},{picture:!1})}))}(t)},children:[(0,I.jsx)("span",{children:null===(r=re[t])||void 0===r?void 0:r.name}),(0,I.jsx)("br",{}),(0,I.jsx)("img",{id:"inputPicture-"+(null===(i=re[t])||void 0===i?void 0:i.name),src:ce[t],className:"upload-image",alt:"preview image"})]})},null===(n=re[t])||void 0===n?void 0:n.name))},n=0;n<re.length;n++)t(n);return e}()]}),(0,I.jsx)(d.Z,{children:(0,I.jsx)(u.Z,{xs:12,className:"center",children:(0,I.jsx)(f.Z,{disabled:ee,className:"submit-button",onClick:ye,children:je("Submit")})})})]})},w=k},6157:function(e,t,n){n.d(t,{Z:function(){return p}});var a=n(1413),r=n(9439),l=n(5987),i=n(1694),s=n.n(i),c=n(2791),u=n(184),o=["as","disabled"];function d(e){var t=e.tagName,n=e.disabled,a=e.href,r=e.target,l=e.rel,i=e.role,s=e.onClick,c=e.tabIndex,u=void 0===c?0:c,o=e.type;t||(t=null!=a||null!=r||null!=l?"a":"button");var d={tagName:t};if("button"===t)return[{type:o||"button",disabled:n},d];var f=function(e){(n||"a"===t&&function(e){return!e||"#"===e.trim()}(a))&&e.preventDefault(),n?e.stopPropagation():null==s||s(e)};return"a"===t&&(a||(a="#"),n&&(a=void 0)),[{role:null!=i?i:"button",disabled:void 0,tabIndex:n?void 0:u,href:a,target:"a"===t?r:void 0,"aria-disabled":n||void 0,rel:"a"===t?l:void 0,onClick:f,onKeyDown:function(e){" "===e.key&&(e.preventDefault(),f(e))}},d]}var f=c.forwardRef((function(e,t){var n=e.as,a=e.disabled,l=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,o),i=d(Object.assign({tagName:n,disabled:a},l)),s=(0,r.Z)(i,2),c=s[0],f=s[1].tagName;return(0,u.jsx)(f,Object.assign({},l,c,{ref:t}))}));f.displayName="Button";var h=n(162),b=["as","bsPrefix","variant","size","active","className"],v=c.forwardRef((function(e,t){var n=e.as,i=e.bsPrefix,c=e.variant,o=e.size,f=e.active,v=e.className,p=(0,l.Z)(e,b),Z=(0,h.vE)(i,"btn"),m=d((0,a.Z)({tagName:n},p)),x=(0,r.Z)(m,2),g=x[0],j=x[1].tagName;return(0,u.jsx)(j,(0,a.Z)((0,a.Z)((0,a.Z)({},g),p),{},{ref:t,className:s()(v,Z,f&&"active",c&&"".concat(Z,"-").concat(c),o&&"".concat(Z,"-").concat(o),p.href&&p.disabled&&"disabled")}))}));v.displayName="Button",v.defaultProps={variant:"primary",active:!1,disabled:!1};var p=v}}]);
//# sourceMappingURL=979.aefd4475.chunk.js.map