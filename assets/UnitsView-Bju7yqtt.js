import{o as c,d as k,n as x,u as w,s as de,B as P,e as $,c as m,f as I,m as g,b as s,r as f,w as j,g as L,a as b,h as Ie,i as Se,j as Oe,_ as X,k as pe,l as M,p as xe,q as Ae,t as Ve,U as re,Z as H,v as K,x as _,y as se,z as $e,A as Te,C as N,D as Pe,E as Be,O as Me,F as ze,G as Ee,R as Y,H as me,I as ge,J as q,K as y,L as v,M as G,T as Re,N as V,Q as U,S as Ke,V as le,W as D,X as Z,Y as _e,$ as De,P as Ue}from"./index-Beecf-rO.js";import Fe from"./iconCapacity-D8bthFd0.js";import He from"./iconFuel-Cuoguznw.js";import Ne from"./iconTransmission-COYNIvXw.js";const Ze=[{id:"CAR-001",brand:"Aston Martin",model:"DB12 Volante",type:"Convertible",price:20,image:"aston_martin.png",status:"unavailable",transmission:"automatic",capacity:2,fuel:"petrol"},{id:"CAR-002",brand:"Hyundai",model:"Sonata",type:"Sedan",price:45,image:"hyundai_sonata.png",status:"available",transmission:"manual",capacity:5,fuel:"petrol"},{id:"CAR-003",brand:"Nissan",model:"Ariya",type:"Hatchback",price:55,image:"nissan_ariya.png",status:"maintenance",transmission:"automatic",capacity:5,fuel:"hybrid"},{id:"CAR-004",brand:"Range Rover",model:"Velar",type:"SUV",price:140,image:"range_rover_velar.png",status:"available",transmission:"automatic",capacity:7,fuel:"diesel"},{id:"CAR-005",brand:"BMW",model:"LX3",type:"SUV",price:120,image:"bmw_lx3.png",status:"available",transmission:"automatic",capacity:7,fuel:"hybrid"},{id:"CAR-006",brand:"Audi",model:"Q7",type:"SUV",price:130,image:"audi_q7.png",status:"available",transmission:"automatic",capacity:7,fuel:"diesel"},{id:"CAR-007",brand:"Mercedes",model:"S-Class",type:"Sedan",price:100,image:"merci_s_class.png",status:"available",transmission:"automatic",capacity:5,fuel:"petrol"},{id:"CAR-008",brand:"Kia",model:"EV6",type:"Hatchback",price:40,image:"kia_ev6.png",status:"available",transmission:"manual",capacity:5,fuel:"hybrid"},{id:"CAR-009",brand:"Volkswagen",model:"Amarok",type:"Truck",price:80,image:"vw_amarok.png",status:"unavailable",transmission:"automatic",capacity:5,fuel:"diesel"}],O=[...Ze],je={getCars:async(e={},n=null,t=0,i=5)=>{const r=Math.floor(Math.random()*2001)+500;return new Promise(o=>{setTimeout(()=>{let u=[...O];if(e!=null&&e.status&&(u=u.filter(d=>d.status.toLowerCase()===e.status.toLowerCase())),e!=null&&e.type&&(u=u.filter(d=>d.type.toLowerCase()===e.type.toLowerCase())),e!=null&&e.expression&&(u=u.filter(d=>!d.brand||new RegExp(e==null?void 0:e.expression,"i").test(d.brand)||!d.model||new RegExp(e==null?void 0:e.expression,"i").test(d.model)||!d.transmission||new RegExp(e==null?void 0:e.expression,"i").test(d.transmission)||!d.fuel||new RegExp(e==null?void 0:e.expression,"i").test(d.fuel)||!d.id||new RegExp(e==null?void 0:e.expression,"i").test(d.id))),n){const[d,S]=n.split("_");u.sort((z,E)=>S==="asc"?z[d].localeCompare(E[d]):S==="desc"?E[d].localeCompare(z[d]):0)}const a=t===0?0:t*i,l=t===0?i:(t+1)*i,p=u.slice(a,l);o({ok:1,total:u.length,data:p})},r)})},addCar:async e=>new Promise(n=>{setTimeout(()=>{O.push(e),n({ok:1,message:"Car added successfully",data:e})},500)}),updateCar:async(e,n)=>new Promise(t=>{setTimeout(()=>{const i=O.findIndex(r=>r.id===e);i!==-1?(O[i]={...O[i],...n},t({ok:1,message:"Car updated successfully",data:O[i]})):t({ok:0,message:"Car not found"})},500)}),deleteCar:async e=>new Promise(n=>{setTimeout(()=>{const t=O.findIndex(i=>i.id===e);if(t!==-1){const i=O.splice(t,1);n({ok:1,message:"Car deleted successfully",data:i})}else n({ok:0,message:"Car not found"})},500)})},be={__name:"CTAButton",props:{label:String,disabled:{type:Boolean,default:!1},block:{type:Boolean,default:!1},size:{type:String,default:""},variant:{type:String,default:"",validator:e=>["outlined",""].includes(e)},severity:{type:String,default:"secondary",validator:e=>["primary","secondary"].includes(e)}},setup(e){return(n,t)=>(c(),k(w(de),{label:e.label,severity:e.severity,size:e.size,disabled:e.disabled,variant:e.variant,class:x({"w-full":e.block})},null,8,["label","severity","size","disabled","variant","class"]))}};var qe=function(n){var t=n.dt;return`
.p-inputgroup,
.p-inputgroup .p-floatlabel,
.p-inputgroup .p-iftalabel {
    display: flex;
    align-items: stretch;
    width: 100%;
}

.p-inputgroup .p-inputtext,
.p-inputgroup .p-inputwrapper {
    flex: 1 1 auto;
    width: 1%;
}

.p-inputgroupaddon {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: `.concat(t("inputgroup.addon.padding"),`;
    background: `).concat(t("inputgroup.addon.background"),`;
    color: `).concat(t("inputgroup.addon.color"),`;
    border-top: 1px solid `).concat(t("inputgroup.addon.border.color"),`;
    border-bottom: 1px solid `).concat(t("inputgroup.addon.border.color"),`;
    min-width: `).concat(t("inputgroup.addon.min.width"),`;
}

.p-inputgroupaddon:first-child,
.p-inputgroupaddon + .p-inputgroupaddon {
    border-left: 1px solid `).concat(t("inputgroup.addon.border.color"),`;
}

.p-inputgroupaddon:last-child {
    border-right: 1px solid `).concat(t("inputgroup.addon.border.color"),`;
}

.p-inputgroup > .p-component,
.p-inputgroup > .p-inputwrapper > .p-component,
.p-inputgroup > .p-floatlabel > .p-component,
.p-inputgroup > .p-floatlabel > .p-inputwrapper > .p-component,
.p-inputgroup > .p-iftalabel > .p-component,
.p-inputgroup > .p-iftalabel > .p-inputwrapper > .p-component {
    border-radius: 0;
    margin: 0;
}

.p-inputgroupaddon:first-child,
.p-inputgroup > .p-component:first-child,
.p-inputgroup > .p-inputwrapper:first-child > .p-component,
.p-inputgroup > .p-floatlabel:first-child > .p-component,
.p-inputgroup > .p-floatlabel:first-child > .p-inputwrapper > .p-component,
.p-inputgroup > .p-iftalabel:first-child > .p-component,
.p-inputgroup > .p-iftalabel:first-child > .p-inputwrapper > .p-component {
    border-top-left-radius: `).concat(t("inputgroup.addon.border.radius"),`;
    border-bottom-left-radius: `).concat(t("inputgroup.addon.border.radius"),`;
}

.p-inputgroupaddon:last-child,
.p-inputgroup > .p-component:last-child,
.p-inputgroup > .p-inputwrapper:last-child > .p-component,
.p-inputgroup > .p-floatlabel:last-child > .p-component,
.p-inputgroup > .p-floatlabel:last-child > .p-inputwrapper > .p-component,
.p-inputgroup > .p-iftalabel:last-child > .p-component,
.p-inputgroup > .p-iftalabel:last-child > .p-inputwrapper > .p-component {
    border-top-right-radius: `).concat(t("inputgroup.addon.border.radius"),`;
    border-bottom-right-radius: `).concat(t("inputgroup.addon.border.radius"),`;
}

.p-inputgroup .p-component:focus,
.p-inputgroup .p-component.p-focus,
.p-inputgroup .p-inputwrapper-focus,
.p-inputgroup .p-component:focus ~ label,
.p-inputgroup .p-component.p-focus ~ label,
.p-inputgroup .p-inputwrapper-focus ~ label {
    z-index: 1;
}

.p-inputgroup > .p-button:not(.p-button-icon-only) {
    width: auto;
}
`)},Ge={root:"p-inputgroup"},We=P.extend({name:"inputgroup",theme:qe,classes:Ge}),Qe={name:"BaseInputGroup",extends:$,style:We,provide:function(){return{$pcInputGroup:this,$parentInstance:this}}},J={name:"InputGroup",extends:Qe,inheritAttrs:!1};function Xe(e,n,t,i,r,o){return c(),m("div",g({class:e.cx("root")},e.ptmi("root")),[I(e.$slots,"default")],16)}J.render=Xe;var Ye={root:"p-inputgroupaddon"},Je=P.extend({name:"inputgroupaddon",classes:Ye}),et={name:"BaseInputGroupAddon",extends:$,style:Je,provide:function(){return{$pcInputGroupAddon:this,$parentInstance:this}}},ee={name:"InputGroupAddon",extends:et,inheritAttrs:!1};function tt(e,n,t,i,r,o){return c(),m("div",g({class:e.cx("root")},e.ptmi("root")),[I(e.$slots,"default")],16)}ee.render=tt;const nt=["width","height"],ot={__name:"iconSearch",props:{size:{type:Number,default:24}},setup(e){return(n,t)=>(c(),m("svg",{xmlns:"http://www.w3.org/2000/svg",width:e.size,height:e.size,viewBox:"0 0 14 14",fill:"none"},t[0]||(t[0]=[s("path",{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M6.34375 2.1875C4.04832 2.1875 2.1875 4.04832 2.1875 6.34375C2.1875 8.63918 4.04832 10.5 6.34375 10.5C8.63918 10.5 10.5 8.63918 10.5 6.34375C10.5 4.04832 8.63918 2.1875 6.34375 2.1875ZM1.3125 6.34375C1.3125 3.56507 3.56507 1.3125 6.34375 1.3125C9.12243 1.3125 11.375 3.56507 11.375 6.34375C11.375 9.12243 9.12243 11.375 6.34375 11.375C3.56507 11.375 1.3125 9.12243 1.3125 6.34375Z",fill:"#4C596A"},null,-1),s("path",{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M9.28283 9.28283C9.45368 9.11197 9.73069 9.11197 9.90155 9.28283L12.5594 11.9406C12.7302 12.1115 12.7302 12.3885 12.5594 12.5594C12.3885 12.7302 12.1115 12.7302 11.9406 12.5594L9.28283 9.90155C9.11197 9.73069 9.11197 9.45368 9.28283 9.28283Z",fill:"#4C596A"},null,-1)]),8,nt))}},it={__name:"SearchInput",props:{placeholder:String,filter:String,variant:{type:String,default:"light"}},emits:["search-input"],setup(e,{emit:n}){const t=n,i=e,r=f(i.filter),o=()=>{r.value.length>3&&t("search-input",r.value)},u=()=>{t("search-input",r.value)};return j(()=>i.filter,a=>{r.value=a}),(a,l)=>(c(),k(w(J),{class:x(["search-input",`variant-${e.variant}`])},{default:L(()=>[b(w(ee),{class:""},{default:L(()=>[b(ot,{size:14})]),_:1}),b(w(Se),{size:"small",modelValue:r.value,"onUpdate:modelValue":l[0]||(l[0]=p=>r.value=p),clear:"",placeholder:e.placeholder,autocomplete:"off",onKeyup:[Ie(u,["enter"]),o]},null,8,["modelValue","placeholder"])]),_:1},8,["class"]))}},at=["width","height"],rt={__name:"iconFilter",props:{size:{type:Number,default:24}},setup(e){return(n,t)=>(c(),m("svg",{xmlns:"http://www.w3.org/2000/svg",width:e.size,height:e.size,viewBox:"0 0 14 14",fill:"none"},t[0]||(t[0]=[s("path",{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M2.30211 2.1875C2.30215 2.1875 2.30206 2.1875 2.30211 2.1875H11.6974C11.8671 2.18755 12.0333 2.23697 12.1755 2.32972C12.3176 2.42248 12.4297 2.55457 12.4981 2.7099C12.5665 2.86524 12.5882 3.03711 12.5607 3.20458C12.5332 3.37173 12.4577 3.5273 12.3435 3.6524C12.3433 3.65264 12.3431 3.65288 12.3429 3.65313L8.74976 7.60719V10.7007C8.75071 10.8462 8.71511 10.9897 8.64621 11.1179C8.57743 11.2459 8.47768 11.3546 8.35608 11.4341L6.60781 12.5978L6.60604 12.599C6.47475 12.6854 6.32259 12.7349 6.16555 12.7423C6.00851 12.7496 5.8524 12.7145 5.71362 12.6406C5.57485 12.5668 5.45854 12.4569 5.37692 12.3225C5.29529 12.1882 5.25138 12.0343 5.24979 11.8771L5.24974 11.8727L5.24976 7.60721L5.2486 7.60597L1.65666 3.65313C1.65646 3.65291 1.65627 3.6527 1.65607 3.65248C1.54183 3.52737 1.46637 3.37177 1.43886 3.20458C1.4113 3.03711 1.43304 2.86524 1.50143 2.7099C1.56983 2.55457 1.68192 2.42248 1.82406 2.32972C1.9661 2.23703 2.13202 2.18762 2.30163 2.1875M11.6973 3.0625H2.30225L2.30324 3.06358L5.89453 7.01564C6.0439 7.17686 6.12625 7.38895 6.12476 7.60875V11.8682L7.87475 10.7034L7.87475 10.7023L7.87476 7.60875C7.87328 7.38895 7.95562 7.17686 8.105 7.01564L11.6963 3.06359L11.6973 3.0625Z",fill:"#4C596A"},null,-1)]),8,at))}},ue={__name:"SortDropdown",props:{placeholder:String,selected:Object,options:Object,optionLabel:{type:String,default:"name"},variant:{type:String,default:"light"}},emits:["change-sort"],setup(e,{emit:n}){const t=n,i=e,r=f(i.selected);return j(()=>i.filter,o=>{r.value=o}),j(r,o=>{t("change-sort",o)}),(o,u)=>(c(),k(w(J),{class:x(["search-filter",`variant-${e.variant}`])},{default:L(()=>[b(w(ee),null,{default:L(()=>[b(rt,{size:14})]),_:1}),b(w(Oe),{modelValue:r.value,"onUpdate:modelValue":u[0]||(u[0]=a=>r.value=a),showClear:"",options:e.options,optionLabel:e.optionLabel,placeholder:e.placeholder,class:x(["p-select-sm p-inputfield-sm"])},null,8,["modelValue","options","optionLabel","placeholder"])]),_:1},8,["class"]))}},st="RowsPerPageDropdown PrevPageLink PageLinks NextPageLink",lt={__name:"BottomPagination",props:{limit:Number,total:Number},emits:["page-change"],setup(e,{emit:n}){const t=n,i=e,r=pe(()=>i.total),o=u=>{const{first:a,rows:l,page:p}=u;t("page-change",{first:a,rows:l,page:p})};return(u,a)=>(c(),k(w(Ve),{template:st,class:"mt-4 we-pagination",rows:e.limit,totalRecords:r.value,rowsPerPageOptions:[1,2,3,4,5,6,7,8,9,10],onPage:o},{start:L(()=>a[0]||(a[0]=[M(" Results per page ")])),previcon:L(()=>[b(xe),a[1]||(a[1]=M()),a[2]||(a[2]=s("span",null,"Prev",-1))]),nexticon:L(()=>[a[3]||(a[3]=s("span",null,"Next",-1)),a[4]||(a[4]=M()),b(Ae)]),_:1},8,["rows","totalRecords"]))}},ut=X(lt,[["__scopeId","data-v-4d802b1a"]]);var ct=function(n){var t=n.dt;return`
.p-menu {
    background: `.concat(t("menu.background"),`;
    color: `).concat(t("menu.color"),`;
    border: 1px solid `).concat(t("menu.border.color"),`;
    border-radius: `).concat(t("menu.border.radius"),`;
    min-width: 12.5rem;
}

.p-menu-list {
    margin: 0;
    padding: `).concat(t("menu.list.padding"),`;
    outline: 0 none;
    list-style: none;
    display: flex;
    flex-direction: column;
    gap: `).concat(t("menu.list.gap"),`;
}

.p-menu-item-content {
    transition: background `).concat(t("menu.transition.duration"),", color ").concat(t("menu.transition.duration"),`;
    border-radius: `).concat(t("menu.item.border.radius"),`;
    color: `).concat(t("menu.item.color"),`;
}

.p-menu-item-link {
    cursor: pointer;
    display: flex;
    align-items: center;
    text-decoration: none;
    overflow: hidden;
    position: relative;
    color: inherit;
    padding: `).concat(t("menu.item.padding"),`;
    gap: `).concat(t("menu.item.gap"),`;
    user-select: none;
    outline: 0 none;
}

.p-menu-item-label {
    line-height: 1;
}

.p-menu-item-icon {
    color: `).concat(t("menu.item.icon.color"),`;
}

.p-menu-item.p-focus .p-menu-item-content {
    color: `).concat(t("menu.item.focus.color"),`;
    background: `).concat(t("menu.item.focus.background"),`;
}

.p-menu-item.p-focus .p-menu-item-icon {
    color: `).concat(t("menu.item.icon.focus.color"),`;
}

.p-menu-item:not(.p-disabled) .p-menu-item-content:hover {
    color: `).concat(t("menu.item.focus.color"),`;
    background: `).concat(t("menu.item.focus.background"),`;
}

.p-menu-item:not(.p-disabled) .p-menu-item-content:hover .p-menu-item-icon {
    color: `).concat(t("menu.item.icon.focus.color"),`;
}

.p-menu-overlay {
    box-shadow: `).concat(t("menu.shadow"),`;
}

.p-menu-submenu-label {
    background: `).concat(t("menu.submenu.label.background"),`;
    padding: `).concat(t("menu.submenu.label.padding"),`;
    color: `).concat(t("menu.submenu.label.color"),`;
    font-weight: `).concat(t("menu.submenu.label.font.weight"),`;
}

.p-menu-separator {
    border-top: 1px solid `).concat(t("menu.separator.border.color"),`;
}
`)},dt={root:function(n){var t=n.props;return["p-menu p-component",{"p-menu-overlay":t.popup}]},start:"p-menu-start",list:"p-menu-list",submenuLabel:"p-menu-submenu-label",separator:"p-menu-separator",end:"p-menu-end",item:function(n){var t=n.instance;return["p-menu-item",{"p-focus":t.id===t.focusedOptionId,"p-disabled":t.disabled()}]},itemContent:"p-menu-item-content",itemLink:"p-menu-item-link",itemIcon:"p-menu-item-icon",itemLabel:"p-menu-item-label"},pt=P.extend({name:"menu",theme:ct,classes:dt}),mt={name:"BaseMenu",extends:$,props:{popup:{type:Boolean,default:!1},model:{type:Array,default:null},appendTo:{type:[String,Object],default:"body"},autoZIndex:{type:Boolean,default:!0},baseZIndex:{type:Number,default:0},tabindex:{type:Number,default:0},ariaLabel:{type:String,default:null},ariaLabelledby:{type:String,default:null}},style:pt,provide:function(){return{$pcMenu:this,$parentInstance:this}}},fe={name:"Menuitem",hostName:"Menu",extends:$,inheritAttrs:!1,emits:["item-click","item-mousemove"],props:{item:null,templates:null,id:null,focusedOptionId:null,index:null},methods:{getItemProp:function(n,t){return n&&n.item?Ee(n.item[t]):void 0},getPTOptions:function(n){return this.ptm(n,{context:{item:this.item,index:this.index,focused:this.isItemFocused(),disabled:this.disabled()}})},isItemFocused:function(){return this.focusedOptionId===this.id},onItemClick:function(n){var t=this.getItemProp(this.item,"command");t&&t({originalEvent:n,item:this.item.item}),this.$emit("item-click",{originalEvent:n,item:this.item,id:this.id})},onItemMouseMove:function(n){this.$emit("item-mousemove",{originalEvent:n,item:this.item,id:this.id})},visible:function(){return typeof this.item.visible=="function"?this.item.visible():this.item.visible!==!1},disabled:function(){return typeof this.item.disabled=="function"?this.item.disabled():this.item.disabled},label:function(){return typeof this.item.label=="function"?this.item.label():this.item.label},getMenuItemProps:function(n){return{action:g({class:this.cx("itemLink"),tabindex:"-1","aria-hidden":!0},this.getPTOptions("itemLink")),icon:g({class:[this.cx("itemIcon"),n.icon]},this.getPTOptions("itemIcon")),label:g({class:this.cx("itemLabel")},this.getPTOptions("itemLabel"))}}},directives:{ripple:Y}},gt=["id","aria-label","aria-disabled","data-p-focused","data-p-disabled"],bt=["href","target"];function ft(e,n,t,i,r,o){var u=me("ripple");return o.visible()?(c(),m("li",g({key:0,id:t.id,class:[e.cx("item"),t.item.class],role:"menuitem",style:t.item.style,"aria-label":o.label(),"aria-disabled":o.disabled()},o.getPTOptions("item"),{"data-p-focused":o.isItemFocused(),"data-p-disabled":o.disabled()||!1}),[s("div",g({class:e.cx("itemContent"),onClick:n[0]||(n[0]=function(a){return o.onItemClick(a)}),onMousemove:n[1]||(n[1]=function(a){return o.onItemMouseMove(a)})},o.getPTOptions("itemContent")),[t.templates.item?t.templates.item?(c(),k(q(t.templates.item),{key:1,item:t.item,label:o.label(),props:o.getMenuItemProps(t.item)},null,8,["item","label","props"])):y("",!0):ge((c(),m("a",g({key:0,href:t.item.url,class:e.cx("itemLink"),target:t.item.target,tabindex:"-1"},o.getPTOptions("itemLink")),[t.templates.itemicon?(c(),k(q(t.templates.itemicon),{key:0,item:t.item,class:x(e.cx("itemIcon"))},null,8,["item","class"])):t.item.icon?(c(),m("span",g({key:1,class:[e.cx("itemIcon"),t.item.icon]},o.getPTOptions("itemIcon")),null,16)):y("",!0),s("span",g({class:e.cx("itemLabel")},o.getPTOptions("itemLabel")),v(o.label()),17)],16,bt)),[[u]])],16)],16,gt)):y("",!0)}fe.render=ft;function ce(e){return kt(e)||yt(e)||vt(e)||ht()}function ht(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function vt(e,n){if(e){if(typeof e=="string")return W(e,n);var t={}.toString.call(e).slice(8,-1);return t==="Object"&&e.constructor&&(t=e.constructor.name),t==="Map"||t==="Set"?Array.from(e):t==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?W(e,n):void 0}}function yt(e){if(typeof Symbol<"u"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function kt(e){if(Array.isArray(e))return W(e)}function W(e,n){(n==null||n>e.length)&&(n=e.length);for(var t=0,i=Array(n);t<n;t++)i[t]=e[t];return i}var he={name:"Menu",extends:mt,inheritAttrs:!1,emits:["show","hide","focus","blur"],data:function(){return{id:this.$attrs.id,overlayVisible:!1,focused:!1,focusedOptionIndex:-1,selectedOptionIndex:-1}},watch:{"$attrs.id":function(n){this.id=n||re()}},target:null,outsideClickListener:null,scrollHandler:null,resizeListener:null,container:null,list:null,mounted:function(){this.id=this.id||re(),this.popup||(this.bindResizeListener(),this.bindOutsideClickListener())},beforeUnmount:function(){this.unbindResizeListener(),this.unbindOutsideClickListener(),this.scrollHandler&&(this.scrollHandler.destroy(),this.scrollHandler=null),this.target=null,this.container&&this.autoZIndex&&H.clear(this.container),this.container=null},methods:{itemClick:function(n){var t=n.item;this.disabled(t)||(t.command&&t.command(n),this.overlayVisible&&this.hide(),!this.popup&&this.focusedOptionIndex!==n.id&&(this.focusedOptionIndex=n.id))},itemMouseMove:function(n){this.focused&&(this.focusedOptionIndex=n.id)},onListFocus:function(n){this.focused=!0,!this.popup&&this.changeFocusedOptionIndex(0),this.$emit("focus",n)},onListBlur:function(n){this.focused=!1,this.focusedOptionIndex=-1,this.$emit("blur",n)},onListKeyDown:function(n){switch(n.code){case"ArrowDown":this.onArrowDownKey(n);break;case"ArrowUp":this.onArrowUpKey(n);break;case"Home":this.onHomeKey(n);break;case"End":this.onEndKey(n);break;case"Enter":case"NumpadEnter":this.onEnterKey(n);break;case"Space":this.onSpaceKey(n);break;case"Escape":this.popup&&(K(this.target),this.hide());case"Tab":this.overlayVisible&&this.hide();break}},onArrowDownKey:function(n){var t=this.findNextOptionIndex(this.focusedOptionIndex);this.changeFocusedOptionIndex(t),n.preventDefault()},onArrowUpKey:function(n){if(n.altKey&&this.popup)K(this.target),this.hide(),n.preventDefault();else{var t=this.findPrevOptionIndex(this.focusedOptionIndex);this.changeFocusedOptionIndex(t),n.preventDefault()}},onHomeKey:function(n){this.changeFocusedOptionIndex(0),n.preventDefault()},onEndKey:function(n){this.changeFocusedOptionIndex(_(this.container,'li[data-pc-section="item"][data-p-disabled="false"]').length-1),n.preventDefault()},onEnterKey:function(n){var t=se(this.list,'li[id="'.concat("".concat(this.focusedOptionIndex),'"]')),i=t&&se(t,'a[data-pc-section="itemlink"]');this.popup&&K(this.target),i?i.click():t&&t.click(),n.preventDefault()},onSpaceKey:function(n){this.onEnterKey(n)},findNextOptionIndex:function(n){var t=_(this.container,'li[data-pc-section="item"][data-p-disabled="false"]'),i=ce(t).findIndex(function(r){return r.id===n});return i>-1?i+1:0},findPrevOptionIndex:function(n){var t=_(this.container,'li[data-pc-section="item"][data-p-disabled="false"]'),i=ce(t).findIndex(function(r){return r.id===n});return i>-1?i-1:0},changeFocusedOptionIndex:function(n){var t=_(this.container,'li[data-pc-section="item"][data-p-disabled="false"]'),i=n>=t.length?t.length-1:n<0?0:n;i>-1&&(this.focusedOptionIndex=t[i].getAttribute("id"))},toggle:function(n){this.overlayVisible?this.hide():this.show(n)},show:function(n){this.overlayVisible=!0,this.target=n.currentTarget},hide:function(){this.overlayVisible=!1,this.target=null},onEnter:function(n){$e(n,{position:"absolute",top:"0",left:"0"}),this.alignOverlay(),this.bindOutsideClickListener(),this.bindResizeListener(),this.bindScrollListener(),this.autoZIndex&&H.set("menu",n,this.baseZIndex+this.$primevue.config.zIndex.menu),this.popup&&K(this.list),this.$emit("show")},onLeave:function(){this.unbindOutsideClickListener(),this.unbindResizeListener(),this.unbindScrollListener(),this.$emit("hide")},onAfterLeave:function(n){this.autoZIndex&&H.clear(n)},alignOverlay:function(){Te(this.container,this.target);var n=N(this.target);n>N(this.container)&&(this.container.style.minWidth=N(this.target)+"px")},bindOutsideClickListener:function(){var n=this;this.outsideClickListener||(this.outsideClickListener=function(t){var i=n.container&&!n.container.contains(t.target),r=!(n.target&&(n.target===t.target||n.target.contains(t.target)));n.overlayVisible&&i&&r?n.hide():!n.popup&&i&&r&&(n.focusedOptionIndex=-1)},document.addEventListener("click",this.outsideClickListener))},unbindOutsideClickListener:function(){this.outsideClickListener&&(document.removeEventListener("click",this.outsideClickListener),this.outsideClickListener=null)},bindScrollListener:function(){var n=this;this.scrollHandler||(this.scrollHandler=new Pe(this.target,function(){n.overlayVisible&&n.hide()})),this.scrollHandler.bindScrollListener()},unbindScrollListener:function(){this.scrollHandler&&this.scrollHandler.unbindScrollListener()},bindResizeListener:function(){var n=this;this.resizeListener||(this.resizeListener=function(){n.overlayVisible&&!Be()&&n.hide()},window.addEventListener("resize",this.resizeListener))},unbindResizeListener:function(){this.resizeListener&&(window.removeEventListener("resize",this.resizeListener),this.resizeListener=null)},visible:function(n){return typeof n.visible=="function"?n.visible():n.visible!==!1},disabled:function(n){return typeof n.disabled=="function"?n.disabled():n.disabled},label:function(n){return typeof n.label=="function"?n.label():n.label},onOverlayClick:function(n){Me.emit("overlay-click",{originalEvent:n,target:this.target})},containerRef:function(n){this.container=n},listRef:function(n){this.list=n}},computed:{focusedOptionId:function(){return this.focusedOptionIndex!==-1?this.focusedOptionIndex:null}},components:{PVMenuitem:fe,Portal:ze}},wt=["id"],Lt=["id","tabindex","aria-activedescendant","aria-label","aria-labelledby"],Ct=["id"];function It(e,n,t,i,r,o){var u=G("PVMenuitem"),a=G("Portal");return c(),k(a,{appendTo:e.appendTo,disabled:!e.popup},{default:L(function(){return[b(Re,g({name:"p-connected-overlay",onEnter:o.onEnter,onLeave:o.onLeave,onAfterLeave:o.onAfterLeave},e.ptm("transition")),{default:L(function(){return[!e.popup||r.overlayVisible?(c(),m("div",g({key:0,ref:o.containerRef,id:r.id,class:e.cx("root"),onClick:n[3]||(n[3]=function(){return o.onOverlayClick&&o.onOverlayClick.apply(o,arguments)})},e.ptmi("root")),[e.$slots.start?(c(),m("div",g({key:0,class:e.cx("start")},e.ptm("start")),[I(e.$slots,"start")],16)):y("",!0),s("ul",g({ref:o.listRef,id:r.id+"_list",class:e.cx("list"),role:"menu",tabindex:e.tabindex,"aria-activedescendant":r.focused?o.focusedOptionId:void 0,"aria-label":e.ariaLabel,"aria-labelledby":e.ariaLabelledby,onFocus:n[0]||(n[0]=function(){return o.onListFocus&&o.onListFocus.apply(o,arguments)}),onBlur:n[1]||(n[1]=function(){return o.onListBlur&&o.onListBlur.apply(o,arguments)}),onKeydown:n[2]||(n[2]=function(){return o.onListKeyDown&&o.onListKeyDown.apply(o,arguments)})},e.ptm("list")),[(c(!0),m(V,null,U(e.model,function(l,p){return c(),m(V,{key:o.label(l)+p.toString()},[l.items&&o.visible(l)&&!l.separator?(c(),m(V,{key:0},[l.items?(c(),m("li",g({key:0,id:r.id+"_"+p,class:[e.cx("submenuLabel"),l.class],role:"none",ref_for:!0},e.ptm("submenuLabel")),[I(e.$slots,e.$slots.submenulabel?"submenulabel":"submenuheader",{item:l},function(){return[M(v(o.label(l)),1)]})],16,Ct)):y("",!0),(c(!0),m(V,null,U(l.items,function(d,S){return c(),m(V,{key:d.label+p+"_"+S},[o.visible(d)&&!d.separator?(c(),k(u,{key:0,id:r.id+"_"+p+"_"+S,item:d,templates:e.$slots,focusedOptionId:o.focusedOptionId,unstyled:e.unstyled,onItemClick:o.itemClick,onItemMousemove:o.itemMouseMove,pt:e.pt},null,8,["id","item","templates","focusedOptionId","unstyled","onItemClick","onItemMousemove","pt"])):o.visible(d)&&d.separator?(c(),m("li",g({key:"separator"+p+S,class:[e.cx("separator"),l.class],style:d.style,role:"separator",ref_for:!0},e.ptm("separator")),null,16)):y("",!0)],64)}),128))],64)):o.visible(l)&&l.separator?(c(),m("li",g({key:"separator"+p.toString(),class:[e.cx("separator"),l.class],style:l.style,role:"separator",ref_for:!0},e.ptm("separator")),null,16)):(c(),k(u,{key:o.label(l)+p.toString(),id:r.id+"_"+p,item:l,index:p,templates:e.$slots,focusedOptionId:o.focusedOptionId,unstyled:e.unstyled,onItemClick:o.itemClick,onItemMousemove:o.itemMouseMove,pt:e.pt},null,8,["id","item","index","templates","focusedOptionId","unstyled","onItemClick","onItemMousemove","pt"]))],64)}),128))],16,Lt),e.$slots.end?(c(),m("div",g({key:1,class:e.cx("end")},e.ptm("end")),[I(e.$slots,"end")],16)):y("",!0)],16,wt)):y("",!0)]}),_:3},16,["onEnter","onLeave","onAfterLeave"])]}),_:3},8,["appendTo","disabled"])}he.render=It;var St=function(n){var t=n.dt;return`
.p-tag {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    background: `.concat(t("tag.primary.background"),`;
    color: `).concat(t("tag.primary.color"),`;
    font-size: `).concat(t("tag.font.size"),`;
    font-weight: `).concat(t("tag.font.weight"),`;
    padding: `).concat(t("tag.padding"),`;
    border-radius: `).concat(t("tag.border.radius"),`;
    gap: `).concat(t("tag.gap"),`;
}

.p-tag-icon {
    font-size: `).concat(t("tag.icon.size"),`;
    width: `).concat(t("tag.icon.size"),`;
    height:`).concat(t("tag.icon.size"),`;
}

.p-tag-rounded {
    border-radius: `).concat(t("tag.rounded.border.radius"),`;
}

.p-tag-success {
    background: `).concat(t("tag.success.background"),`;
    color: `).concat(t("tag.success.color"),`;
}

.p-tag-info {
    background: `).concat(t("tag.info.background"),`;
    color: `).concat(t("tag.info.color"),`;
}

.p-tag-warn {
    background: `).concat(t("tag.warn.background"),`;
    color: `).concat(t("tag.warn.color"),`;
}

.p-tag-danger {
    background: `).concat(t("tag.danger.background"),`;
    color: `).concat(t("tag.danger.color"),`;
}

.p-tag-secondary {
    background: `).concat(t("tag.secondary.background"),`;
    color: `).concat(t("tag.secondary.color"),`;
}

.p-tag-contrast {
    background: `).concat(t("tag.contrast.background"),`;
    color: `).concat(t("tag.contrast.color"),`;
}
`)},Ot={root:function(n){var t=n.props;return["p-tag p-component",{"p-tag-info":t.severity==="info","p-tag-success":t.severity==="success","p-tag-warn":t.severity==="warn","p-tag-danger":t.severity==="danger","p-tag-secondary":t.severity==="secondary","p-tag-contrast":t.severity==="contrast","p-tag-rounded":t.rounded}]},icon:"p-tag-icon",label:"p-tag-label"},xt=P.extend({name:"tag",theme:St,classes:Ot}),At={name:"BaseTag",extends:$,props:{value:null,severity:null,rounded:Boolean,icon:String},style:xt,provide:function(){return{$pcTag:this,$parentInstance:this}}},ve={name:"Tag",extends:At,inheritAttrs:!1};function Vt(e,n,t,i,r,o){return c(),m("span",g({class:e.cx("root")},e.ptmi("root")),[e.$slots.icon?(c(),k(q(e.$slots.icon),g({key:0,class:e.cx("icon")},e.ptm("icon")),null,16,["class"])):e.icon?(c(),m("span",g({key:1,class:[e.cx("icon"),e.icon]},e.ptm("icon")),null,16)):y("",!0),e.value!=null||e.$slots.default?I(e.$slots,"default",{key:2},function(){return[s("span",g({class:e.cx("label")},e.ptm("label")),v(e.value),17)]}):y("",!0)],16)}ve.render=Vt;const $t={class:"card-unit card-unit-vertical"},Tt={class:"unit-main-info-container"},Pt={class:"unit-car-infos"},Bt={class:"unit-car-brand-model"},Mt={class:"unit-car-brand unit-car-main-info pr-1"},zt={class:"unit-car-model unit-car-main-info"},Et={class:"unit-car-type unit-car-sub-info"},Rt={class:"unit-car-details"},Kt={class:"unit-car-daily-price unit-car-main-info"},_t={class:"unit-car-image w-full"},Dt=["src","alt","title"],Ut={class:"unit-car-status"},Ft={class:"unit-car-id"},Ht={class:"unit-car-details-info"},Nt={class:"car-info-transmission car-info-detail"},Zt={class:"icon"},jt={class:"label"},qt={class:"car-info-capacity car-info-detail"},Gt={class:"icon"},Wt={class:"label"},Qt={class:"car-info-fuel-type car-info-detail"},Xt={class:"icon"},Yt={class:"label"},Jt={class:"unit-car-actions flex gap-2 w-full"},en={class:"action-cta w-full"},tn={class:"more-action"},nn=Ke({__name:"CarVertical",props:{id:String,brand:String,model:String,type:String,price:Number,image:String,status:String,transmission:String,capacity:Number,fuel:String},setup(e){const n=e,t=pe(()=>{let a="";return n.status==="unavailable"&&(a="secondary"),n.status==="available"&&(a="contrast"),n.status==="maintenance"&&(a="danger"),a}),i=f(),r=f([{items:[{label:"Edit",icon:"pi pi-pencil"},{label:"Delete",icon:"pi pi-trash"}]}]),o=a=>{i.value.toggle(a)};function u(a){const p=new URL(import.meta.url).origin;return new URL(`/wheelzie/images/cars/${a}`,p).href}return(a,l)=>(c(),m("div",$t,[s("div",Tt,[s("div",Pt,[s("div",Bt,[s("span",Mt,v(e.brand),1),s("span",zt,v(e.model),1)]),s("div",Et,v(e.type),1)]),s("div",Rt,[s("div",Kt,"$"+v(e.price),1),l[0]||(l[0]=s("div",{class:"unit-car-daily-text unit-car-sub-info"},"/days",-1))])]),s("div",_t,[s("img",{src:u(e.image),alt:e.brand+" "+e.model,title:e.brand+" "+e.model,width:"300",height:"150",class:"w-full h-auto"},null,8,Dt)]),s("div",Ut,[b(w(ve),{severity:t.value,class:x(["unit-car-status-badge",`unit-car-status-badge-${e.status}`])},{default:L(()=>[M(v(e.status),1)]),_:1},8,["severity","class"]),s("div",Ft,[s("strong",null,v(e.id),1)])]),s("div",Ht,[s("div",Nt,[s("span",Zt,[b(Ne)]),s("span",jt,v(e.transmission),1)]),s("div",qt,[s("span",Gt,[b(Fe)]),s("span",Wt,v(e.capacity)+" seats",1)]),s("div",Qt,[s("span",Xt,[b(He)]),s("span",Yt,v(e.fuel),1)])]),s("div",Jt,[s("div",en,[b(be,{label:"Select Car",severity:"primary",block:""})]),s("div",tn,[b(w(de),{type:"button",severity:"secondary",icon:"pi pi-ellipsis-h",onClick:o,"aria-haspopup":"true","aria-controls":"overlay_menu",class:"p-3"}),b(w(he),{ref_key:"menu",ref:i,id:"overlay_menu",model:r.value,popup:!0},null,8,["model"])])])]))}}),on=X(nn,[["__scopeId","data-v-563729be"]]);var an=function(n){var t=n.dt;return`
.p-togglebutton {
    display: inline-flex;
    cursor: pointer;
    user-select: none;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    position: relative;
    color: `.concat(t("togglebutton.color"),`;
    background: `).concat(t("togglebutton.background"),`;
    border: 1px solid `).concat(t("togglebutton.border.color"),`;
    padding: `).concat(t("togglebutton.padding"),`;
    font-size: 1rem;
    font-family: inherit;
    font-feature-settings: inherit;
    transition: background `).concat(t("togglebutton.transition.duration"),", color ").concat(t("togglebutton.transition.duration"),", border-color ").concat(t("togglebutton.transition.duration"),`,
        outline-color `).concat(t("togglebutton.transition.duration"),", box-shadow ").concat(t("togglebutton.transition.duration"),`;
    border-radius: `).concat(t("togglebutton.border.radius"),`;
    outline-color: transparent;
    font-weight: `).concat(t("togglebutton.font.weight"),`;
}

.p-togglebutton-content {
    position: relative;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: `).concat(t("togglebutton.gap"),`;
}

.p-togglebutton-label,
.p-togglebutton-icon {
    position: relative;
    transition: none;
}

.p-togglebutton::before {
    content: "";
    background: transparent;
    transition: background `).concat(t("togglebutton.transition.duration"),", color ").concat(t("togglebutton.transition.duration"),", border-color ").concat(t("togglebutton.transition.duration"),`,
            outline-color `).concat(t("togglebutton.transition.duration"),", box-shadow ").concat(t("togglebutton.transition.duration"),`;
    position: absolute;
    left: `).concat(t("togglebutton.content.left"),`;
    top: `).concat(t("togglebutton.content.top"),`;
    width: calc(100% - calc(2 *  `).concat(t("togglebutton.content.left"),`));
    height: calc(100% - calc(2 *  `).concat(t("togglebutton.content.top"),`));
    border-radius: `).concat(t("togglebutton.border.radius"),`;
}

.p-togglebutton.p-togglebutton-checked::before {
    background: `).concat(t("togglebutton.content.checked.background"),`;
    box-shadow: `).concat(t("togglebutton.content.checked.shadow"),`;
}

.p-togglebutton:not(:disabled):not(.p-togglebutton-checked):hover {
    background: `).concat(t("togglebutton.hover.background"),`;
    color: `).concat(t("togglebutton.hover.color"),`;
}

.p-togglebutton.p-togglebutton-checked {
    background: `).concat(t("togglebutton.checked.background"),`;
    border-color: `).concat(t("togglebutton.checked.border.color"),`;
    color: `).concat(t("togglebutton.checked.color"),`;
}

.p-togglebutton:focus-visible {
    box-shadow: `).concat(t("togglebutton.focus.ring.shadow"),`;
    outline: `).concat(t("togglebutton.focus.ring.width")," ").concat(t("togglebutton.focus.ring.style")," ").concat(t("togglebutton.focus.ring.color"),`;
    outline-offset: `).concat(t("togglebutton.focus.ring.offset"),`;
}

.p-togglebutton.p-invalid {
    border-color: `).concat(t("togglebutton.invalid.border.color"),`;
}

.p-togglebutton:disabled {
    opacity: 1;
    cursor: default;
    background: `).concat(t("togglebutton.disabled.background"),`;
    border-color: `).concat(t("togglebutton.disabled.border.color"),`;
    color: `).concat(t("togglebutton.disabled.color"),`;
}

.p-togglebutton-icon {
    color: `).concat(t("togglebutton.icon.color"),`;
}

.p-togglebutton:not(:disabled):not(.p-togglebutton-checked):hover .p-togglebutton-icon {
    color: `).concat(t("togglebutton.icon.hover.color"),`;
}

.p-togglebutton.p-togglebutton-checked .p-togglebutton-icon {
    color: `).concat(t("togglebutton.icon.checked.color"),`;
}

.p-togglebutton:disabled .p-togglebutton-icon {
    color: `).concat(t("togglebutton.icon.disabled.color"),`;
}
`)},rn={root:function(n){var t=n.instance,i=n.props;return["p-togglebutton p-component",{"p-togglebutton-checked":t.active,"p-invalid":i.invalid}]},content:"p-togglebutton-content",icon:"p-togglebutton-icon",label:"p-togglebutton-label"},sn=P.extend({name:"togglebutton",theme:an,classes:rn}),ln={name:"BaseToggleButton",extends:$,props:{modelValue:Boolean,onIcon:String,offIcon:String,onLabel:{type:String,default:"Yes"},offLabel:{type:String,default:"No"},iconPos:{type:String,default:"left"},invalid:{type:Boolean,default:!1},disabled:{type:Boolean,default:!1},readonly:{type:Boolean,default:!1},tabindex:{type:Number,default:null},ariaLabelledby:{type:String,default:null},ariaLabel:{type:String,default:null}},style:sn,provide:function(){return{$pcToggleButton:this,$parentInstance:this}}},ye={name:"ToggleButton",extends:ln,inheritAttrs:!1,emits:["update:modelValue","change"],methods:{getPTOptions:function(n){var t=n==="root"?this.ptmi:this.ptm;return t(n,{context:{active:this.active,disabled:this.disabled}})},onChange:function(n){!this.disabled&&!this.readonly&&(this.$emit("update:modelValue",!this.modelValue),this.$emit("change",n))}},computed:{active:function(){return this.modelValue===!0},hasLabel:function(){return le(this.onLabel)&&le(this.offLabel)},label:function(){return this.hasLabel?this.modelValue?this.onLabel:this.offLabel:"&nbsp;"}},directives:{ripple:Y}},un=["tabindex","disabled","aria-pressed","aria-labelledby","data-p-checked","data-p-disabled"];function cn(e,n,t,i,r,o){var u=me("ripple");return ge((c(),m("button",g({type:"button",class:e.cx("root"),tabindex:e.tabindex,disabled:e.disabled,"aria-pressed":e.modelValue,onClick:n[0]||(n[0]=function(){return o.onChange&&o.onChange.apply(o,arguments)})},o.getPTOptions("root"),{"aria-labelledby":e.ariaLabelledby,"data-p-checked":o.active,"data-p-disabled":e.disabled}),[s("span",g({class:e.cx("content")},o.getPTOptions("content")),[I(e.$slots,"default",{},function(){return[I(e.$slots,"icon",{value:e.modelValue,class:x(e.cx("icon"))},function(){return[e.onIcon||e.offIcon?(c(),m("span",g({key:0,class:[e.cx("icon"),e.modelValue?e.onIcon:e.offIcon]},o.getPTOptions("icon")),null,16)):y("",!0)]}),s("span",g({class:e.cx("label")},o.getPTOptions("label")),v(o.label),17)]})],16)],16,un)),[[u]])}ye.render=cn;var dn=function(n){var t=n.dt;return`
.p-selectbutton {
    display: inline-flex;
    user-select: none;
    vertical-align: bottom;
    outline-color: transparent;
    border-radius: `.concat(t("selectbutton.border.radius"),`;
}

.p-selectbutton .p-togglebutton {
    border-radius: 0;
    border-width: 1px 1px 1px 0;
}

.p-selectbutton .p-togglebutton:focus-visible {
    position: relative;
    z-index: 1;
}

.p-selectbutton .p-togglebutton:first-child {
    border-left-width: 1px;
    border-top-left-radius: `).concat(t("selectbutton.border.radius"),`;
    border-bottom-left-radius: `).concat(t("selectbutton.border.radius"),`;
}

.p-selectbutton .p-togglebutton:last-child {
    border-top-right-radius: `).concat(t("selectbutton.border.radius"),`;
    border-bottom-right-radius: `).concat(t("selectbutton.border.radius"),`;
}

.p-selectbutton.p-invalid {
    outline: 1px solid `).concat(t("selectbutton.invalid.border.color"),`;
    outline-offset: 0;
}
`)},pn={root:function(n){var t=n.props;return["p-selectbutton p-component",{"p-invalid":t.invalid}]}},mn=P.extend({name:"selectbutton",theme:dn,classes:pn}),gn={name:"BaseSelectButton",extends:$,props:{modelValue:null,options:Array,optionLabel:null,optionValue:null,optionDisabled:null,multiple:Boolean,allowEmpty:{type:Boolean,default:!0},invalid:{type:Boolean,default:!1},disabled:Boolean,dataKey:null,ariaLabelledby:{type:String,default:null}},style:mn,provide:function(){return{$pcSelectButton:this,$parentInstance:this}}};function bn(e,n){var t=typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"];if(!t){if(Array.isArray(e)||(t=ke(e))||n){t&&(e=t);var i=0,r=function(){};return{s:r,n:function(){return i>=e.length?{done:!0}:{done:!1,value:e[i++]}},e:function(p){throw p},f:r}}throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var o,u=!0,a=!1;return{s:function(){t=t.call(e)},n:function(){var p=t.next();return u=p.done,p},e:function(p){a=!0,o=p},f:function(){try{u||t.return==null||t.return()}finally{if(a)throw o}}}}function fn(e){return yn(e)||vn(e)||ke(e)||hn()}function hn(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function ke(e,n){if(e){if(typeof e=="string")return Q(e,n);var t={}.toString.call(e).slice(8,-1);return t==="Object"&&e.constructor&&(t=e.constructor.name),t==="Map"||t==="Set"?Array.from(e):t==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?Q(e,n):void 0}}function vn(e){if(typeof Symbol<"u"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function yn(e){if(Array.isArray(e))return Q(e)}function Q(e,n){(n==null||n>e.length)&&(n=e.length);for(var t=0,i=Array(n);t<n;t++)i[t]=e[t];return i}var we={name:"SelectButton",extends:gn,inheritAttrs:!1,emits:["update:modelValue","change"],methods:{getOptionLabel:function(n){return this.optionLabel?D(n,this.optionLabel):n},getOptionValue:function(n){return this.optionValue?D(n,this.optionValue):n},getOptionRenderKey:function(n){return this.dataKey?D(n,this.dataKey):this.getOptionLabel(n)},isOptionDisabled:function(n){return this.optionDisabled?D(n,this.optionDisabled):!1},onOptionSelect:function(n,t,i){var r=this;if(!(this.disabled||this.isOptionDisabled(t))){var o=this.isSelected(t);if(!(o&&!this.allowEmpty)){var u=this.getOptionValue(t),a;this.multiple?o?a=this.modelValue.filter(function(l){return!Z(l,u,r.equalityKey)}):a=this.modelValue?[].concat(fn(this.modelValue),[u]):[u]:a=o?null:u,this.$emit("update:modelValue",a),this.$emit("change",{event:n,value:a})}}},isSelected:function(n){var t=!1,i=this.getOptionValue(n);if(this.multiple){if(this.modelValue){var r=bn(this.modelValue),o;try{for(r.s();!(o=r.n()).done;){var u=o.value;if(Z(u,i,this.equalityKey)){t=!0;break}}}catch(a){r.e(a)}finally{r.f()}}}else t=Z(this.modelValue,i,this.equalityKey);return t}},computed:{equalityKey:function(){return this.optionValue?null:this.dataKey}},directives:{ripple:Y},components:{ToggleButton:ye}},kn=["aria-labelledby"];function wn(e,n,t,i,r,o){var u=G("ToggleButton");return c(),m("div",g({class:e.cx("root"),role:"group","aria-labelledby":e.ariaLabelledby},e.ptmi("root")),[(c(!0),m(V,null,U(e.options,function(a,l){return c(),k(u,{key:o.getOptionRenderKey(a),modelValue:o.isSelected(a),onLabel:o.getOptionLabel(a),offLabel:o.getOptionLabel(a),disabled:e.disabled||o.isOptionDisabled(a),unstyled:e.unstyled,onChange:function(d){return o.onOptionSelect(d,a,l)},pt:e.ptm("pcToggleButton")},_e({_:2},[e.$slots.option?{name:"default",fn:L(function(){return[I(e.$slots,"option",{option:a,index:l},function(){return[s("span",g({ref_for:!0},e.ptm("pcToggleButton").label),v(o.getOptionLabel(a)),17)]})]}),key:"0"}:void 0]),1032,["modelValue","onLabel","offLabel","disabled","unstyled","onChange","pt"])}),128))],16,kn)}we.render=wn;const Ln={class:"page page-units"},Cn={class:"page-content"},In={class:"page-content-top mb-3 pb-1 flex gap-2"},Sn={class:"page-content-center"},On={key:0,class:"card-units"},xn={class:"page-content-bottom"},An={__name:"UnitsView",setup(e){const n=f("Units"),t=f("Add unit"),i=f("grid"),r=f(["list","grid"]),o=f(""),u=f({placeholder:"Search for car, etc"}),a=f(),l=f({placeholder:"Car Type",types:[{name:"Convertible"},{name:"Hatchback"},{name:"Sedan"},{name:"SUV"},{name:"Truck"},{name:"Minivan"}]}),p=f(),d=f({placeholder:"Status",types:[{name:"Available"},{name:"Unavailable"},{name:"Maintenance"}]}),S=C=>{o.value=C,B()},z=C=>{a.value=C,B()},E=C=>{p.value=C,B()},R=f(8),te=f(0),F=f(!0),ne=f(0),Le=f("brand_asc");f(null);const oe=f(Array(R.value).fill().map(()=>{})),Ce=C=>{const{rows:T,page:h}=C;te.value=h,R.value=T,B()},B=async()=>{var ie,ae;F.value=!0;const C=o==null?void 0:o.value,T=(ie=a==null?void 0:a.value)==null?void 0:ie.name,h=(ae=p==null?void 0:p.value)==null?void 0:ae.name;try{const A=await je.getCars({expression:C,type:T,status:h},Le.value,te.value,R.value);if(!A.ok)throw new Error("Failed to load data");oe.value=A.data,ne.value=A.total}catch(A){console.log(A),A.value=A.message}finally{F.value=!1}};return De(()=>{B()}),(C,T)=>(c(),m("div",Ln,[b(Ue,{title:n.value},null,8,["title"]),s("div",Cn,[s("div",In,[b(it,{placeholder:u.value.placeholder,onSearchInput:S,filter:o.value},null,8,["placeholder","filter"]),b(ue,{options:l.value.types,selected:a.value,placeholder:l.value.placeholder,onChangeSort:z},null,8,["options","selected","placeholder"]),b(ue,{options:d.value.types,selected:p.value,placeholder:d.value.placeholder,onChangeSort:E},null,8,["options","selected","placeholder"]),b(w(we),{modelValue:i.value,"onUpdate:modelValue":T[0]||(T[0]=h=>i.value=h),options:r.value,allowEmpty:!1,class:"ml-auto"},{option:L(({option:h})=>[s("i",{class:x([h==="list"?"pi pi-bars":"pi pi-table"])},null,2)]),_:1},8,["modelValue","options"]),b(be,{label:t.value,severity:"primary",size:"small"},null,8,["label"])]),s("div",Sn,[F.value?y("",!0):(c(),m("div",On,[(c(!0),m(V,null,U(oe.value,h=>(c(),k(on,{key:h.id,id:h.id,brand:h.brand,model:h.model,type:h.type,price:h.price,image:h.image,status:h.status,transmission:h.transmission,capacity:h.capacity,fuel:h.fuel},null,8,["id","brand","model","type","price","image","status","transmission","capacity","fuel"]))),128))]))]),s("div",xn,[b(ut,{limit:R.value,total:ne.value,onPageChange:Ce},null,8,["limit","total"])])])]))}},Bn=X(An,[["__scopeId","data-v-8f30e21a"]]);export{Bn as default};
