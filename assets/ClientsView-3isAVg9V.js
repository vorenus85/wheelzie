import{d as v,c as b,b as n,V as z,i as E,a,L as N,r as u,o as H,w as h,u as c,P as V,S as B,e as x,aa as R,ab as p,G as S,M as $,s as A}from"./index-CbEHWgV7.js";import{C as I}from"./CustomPagination-BpMqOKpn.js";const P=[{id:"1",firstName:"Alice",lastName:"Johnson",fullname:"Alice Johnson",email:"alice.johnson@example.com",phone:"123-456-7890",addressLine1:"123 Maple Street",addressLine2:"",city:"",country:"",state:"",zip:"",additional:"",residenceCard:"sample.pdf",driveLicense:"sample2.pdf",points:80},{id:"2",firstName:"Bob",lastName:"Smith",fullname:"Bob Smith",email:"bob.smith@example.com",phone:"234-567-8901",addressLine1:"456 Oak Avenue",addressLine2:"",city:"",country:"",state:"",zip:"",additional:"",residenceCard:"sample.pdf",driveLicense:"",points:120},{id:"3",firstName:"Charlie",lastName:"Davies",fullname:"Charlie Davies",email:"charlie.davis@example.com",phone:"345-678-9012",addressLine1:"789 Pine Road",addressLine2:"",city:"",country:"",state:"",zip:"",additional:"",residenceCard:"",driveLicense:"sample2.pdf",points:150},{id:"4",firstName:"Diana",lastName:"White",fullname:"Diana White",email:"diana.white@example.com",phone:"456-789-0123",addressLine1:"101 Birch Lane",addressLine2:"",city:"",country:"",state:"",zip:"",additional:"",residenceCard:"sample2.pdf",driveLicense:"sample2.pdf",points:50}],T=[...P],Z={getClients:async(e={},i=null,s=0,d=5)=>{const m=Math.floor(Math.random()*1001)+500;return new Promise(_=>{setTimeout(()=>{let r=[...T];e!=null&&e.expression&&(r=r.filter(l=>!l.firstName||new RegExp(e==null?void 0:e.expression.toLowerCase(),"i").test(l.firstName.toLowerCase())||!l.lastName||new RegExp(e==null?void 0:e.expression.toLowerCase(),"i").test(l.lastName.toLowerCase())||!l.fullname||new RegExp(e==null?void 0:e.expression.toLowerCase(),"i").test(l.fullname.toLowerCase())||!l.email||new RegExp(e==null?void 0:e.expression.toLowerCase(),"i").test(l.email.toLowerCase())||!l.phone||new RegExp(e==null?void 0:e.expression.toLowerCase(),"i").test(l.phone.toLowerCase())));const C=s===0?0:s*d,w=s===0?d:(s+1)*d,y=r.slice(C,w);_({ok:1,total:r.length,data:y})},m)})}},j=["width","height"],F={__name:"iconFile",props:{size:{type:Number,default:24}},setup(e){return(i,s)=>(v(),b("svg",{xmlns:"http://www.w3.org/2000/svg",width:e.size,height:e.size,viewBox:"0 0 12 12",fill:"none"},s[0]||(s[0]=[n("path",{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M2.09467 1.34467C2.23532 1.20402 2.42609 1.125 2.625 1.125H7.125C7.22446 1.125 7.31984 1.16451 7.39016 1.23483L10.0152 3.85984C10.0855 3.93016 10.125 4.02554 10.125 4.125V10.125C10.125 10.3239 10.046 10.5147 9.90533 10.6553C9.76468 10.796 9.57391 10.875 9.375 10.875H2.625C2.42609 10.875 2.23532 10.796 2.09467 10.6553C1.95402 10.5147 1.875 10.3239 1.875 10.125V1.875C1.875 1.67609 1.95402 1.48532 2.09467 1.34467ZM6.96967 1.875L2.625 1.875L2.625 10.125H9.375V4.28033L6.96967 1.875Z",fill:"currentColor"},null,-1),n("path",{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M7.125 1.125C7.33211 1.125 7.5 1.29289 7.5 1.5V3.75H9.75C9.95711 3.75 10.125 3.91789 10.125 4.125C10.125 4.33211 9.95711 4.5 9.75 4.5H7.125C6.91789 4.5 6.75 4.33211 6.75 4.125V1.5C6.75 1.29289 6.91789 1.125 7.125 1.125Z",fill:"currentColor"},null,-1),n("path",{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M4.125 6.375C4.125 6.16789 4.29289 6 4.5 6H7.5C7.70711 6 7.875 6.16789 7.875 6.375C7.875 6.58211 7.70711 6.75 7.5 6.75H4.5C4.29289 6.75 4.125 6.58211 4.125 6.375Z",fill:"currentColor"},null,-1),n("path",{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M4.125 7.875C4.125 7.66789 4.29289 7.5 4.5 7.5H7.5C7.70711 7.5 7.875 7.66789 7.875 7.875C7.875 8.08211 7.70711 8.25 7.5 8.25H4.5C4.29289 8.25 4.125 8.08211 4.125 7.875Z",fill:"currentColor"},null,-1)]),8,j))}},J={class:"document-tag gap-2 flex"},W={class:"document-tag-icon flex items-center justify-center"},G={class:"document-tag-name"},O={__name:"DocumentTag",props:{firstName:String,cardType:{type:String,validator:e=>["residenceCard","driveLicense"].includes(e)}},setup(e){const i=e,s=E(()=>{const d=i.cardType==="residenceCard"?"Residence Card":"License";return`${i.firstName}'s ${d}`});return(d,m)=>(v(),b("div",J,[n("div",W,[a(F,{size:12})]),n("div",G,N(s.value),1)]))}},D=z(O,[["__scopeId","data-v-106c6e68"]]),U={class:"page page-clients"},q={class:"page-content"},K={class:"clients-table"},Q={class:"page-content-top mb-3 pb-1 flex gap-2 flex-wrap"},X={class:"text-muted"},Y={class:"flex gap-2"},ee={class:"page-content-bottom"},ne={__name:"ClientsView",setup(e){const i=u(""),s=u(),d=u(),m=u(8),_=u(0),r=u(0),C=u(!0),w=({page:t,rows:g})=>{r.value=t,m.value=g,L()},y=t=>{i.value=t,L()},l=t=>{console.log("onEditClient",t)},M=t=>{console.log("onDeleteClient",t)},L=async()=>{C.value=!0;try{const t=await Z.getClients({expression:i==null?void 0:i.value},null,r.value,m.value);if(!t.ok)throw new Error("Failed to load data");d.value=t.data,_.value=t.total}catch(t){t.value=t.message}finally{C.value=!1}};return H(()=>{L()}),(t,g)=>(v(),b("div",U,[a(V,{title:"Clients"}),n("div",q,[n("div",K,[a(c(A),null,{content:h(()=>[n("div",Q,[a(B,{variant:"dark",placeholder:"Search for client",onSearchInput:y,filter:i.value},null,8,["filter"]),a(x,{label:"Add client",severity:"primary",size:"small",class:"ml-auto add-new-client"})]),a(c(R),{class:"outlined",scrollable:"",selection:s.value,"onUpdate:selection":g[0]||(g[0]=o=>s.value=o),value:d.value,loading:C.value,tableStyle:"min-width: 50rem"},{default:h(()=>[a(c(p),{selectionMode:"multiple",headerStyle:"width: 3rem"}),a(c(p),{field:"fullname",sortable:"",header:"Client"},{body:h(o=>[n("div",null,N(o.data.fullname),1),n("span",X,N(o.data.email),1)]),_:1}),a(c(p),{field:"phone",sortable:"",header:"Phone"}),a(c(p),{field:"addressLine1",sortable:"",header:"Address"}),a(c(p),{header:"Documents"},{body:h(o=>{var f,k;return[(f=o.data)!=null&&f.residenceCard?(v(),S(D,{key:0,class:"my-1","card-type":"residenceCard",firstName:o.data.firstName},null,8,["firstName"])):$("",!0),(k=o.data)!=null&&k.driveLicense?(v(),S(D,{key:1,class:"my-1","card-type":"driveLicense",firstName:o.data.firstName},null,8,["firstName"])):$("",!0)]}),_:1}),a(c(p),{field:"points",sortable:"",header:"Points"}),a(c(p),{header:"Actions"},{body:h(o=>[n("div",Y,[a(x,{size:"small",label:"Edit",outlined:"",onClick:f=>l(o.data.id)},null,8,["onClick"]),a(x,{size:"small",label:"Delete",outlined:"",onClick:f=>M(o.data.id)},null,8,["onClick"])])]),_:1})]),_:1},8,["selection","value","loading"]),n("div",ee,[a(I,{limit:m.value,total:_.value,onPageChange:w},null,8,["limit","total"])])]),_:1})])])]))}};export{ne as default};