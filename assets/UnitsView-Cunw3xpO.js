import{d as s,c,b as l,i as O,t as C,a,j as w,n as P,F as x,k as Ie,f as k,w as T,g as X,u as h,l as Oe,e as B,B as U,U as J,Z as F,p as z,q as H,v as ee,x as $e,y as Ve,z as j,C as Ae,A as Te,O as Me,D as Be,E as D,G as Pe,H as b,R as G,I as se,J as le,K as te,L as Z,T as De,M as A,N as K,r as v,Q as Ee,V as ne,W as R,X as N,Y as ze,o as He,S as Re,_ as oe,P as Ke}from"./index-B0ACGiVO.js";import{_ as Ue}from"./ConfirmDialog-DCAxoZU1.js";import Fe from"./iconCapacity-UxVdIp28.js";import je from"./iconTransmission-Dmaob_Nr.js";import Ne from"./iconFuel-CCZy8AC6.js";import{C as Ze,s as qe}from"./index-UUY02Ivs.js";const We=[{id:"CAR-001",brand:"Aston Martin",model:"DB12 Volante",type:"Convertible",price:20,image:"aston_martin.png",status:"unavailable",transmission:"automatic",capacity:2,fuel:"petrol"},{id:"CAR-002",brand:"Hyundai",model:"Sonata",type:"Sedan",price:45,image:"hyundai_sonata.png",status:"available",transmission:"manual",capacity:5,fuel:"petrol"},{id:"CAR-003",brand:"Nissan",model:"Ariya",type:"Hatchback",price:55,image:"nissan_ariya.png",status:"maintenance",transmission:"automatic",capacity:5,fuel:"hybrid"},{id:"CAR-004",brand:"Range Rover",model:"Velar",type:"SUV",price:140,image:"range_rover_velar.png",status:"available",transmission:"automatic",capacity:7,fuel:"diesel"},{id:"CAR-005",brand:"BMW",model:"LX3",type:"SUV",price:120,image:"bmw_lx3.png",status:"available",transmission:"automatic",capacity:7,fuel:"hybrid"},{id:"CAR-006",brand:"Audi",model:"Q7",type:"SUV",price:130,image:"audi_q7.png",status:"available",transmission:"automatic",capacity:7,fuel:"diesel"},{id:"CAR-007",brand:"Mercedes",model:"S-Class",type:"Sedan",price:100,image:"merci_s_class.png",status:"available",transmission:"automatic",capacity:5,fuel:"petrol"},{id:"CAR-008",brand:"Kia",model:"EV6",type:"Hatchback",price:40,image:"kia_ev6.png",status:"available",transmission:"manual",capacity:5,fuel:"hybrid"},{id:"CAR-009",brand:"Volkswagen",model:"Amarok",type:"Truck",price:80,image:"vw_amarok.png",status:"unavailable",transmission:"automatic",capacity:5,fuel:"diesel"}],I=[...We],ie={getCars:async(e={},n=null,t=0,i=5)=>{const r=Math.floor(Math.random()*1001)+500;return new Promise(o=>{setTimeout(()=>{let u=[...I];if(e!=null&&e.status&&(u=u.filter(p=>p.status.toLowerCase()===e.status.toLowerCase())),e!=null&&e.type&&(u=u.filter(p=>p.type.toLowerCase()===e.type.toLowerCase())),e!=null&&e.expression&&(u=u.filter(p=>!p.brand||new RegExp(e==null?void 0:e.expression,"i").test(p.brand)||!p.model||new RegExp(e==null?void 0:e.expression,"i").test(p.model)||!p.transmission||new RegExp(e==null?void 0:e.expression,"i").test(p.transmission)||!p.fuel||new RegExp(e==null?void 0:e.expression,"i").test(p.fuel)||!p.id||new RegExp(e==null?void 0:e.expression,"i").test(p.id))),n){const[p,S]=n.split("_");u.sort((M,$)=>S==="asc"?M[p].localeCompare($[p]):S==="desc"?$[p].localeCompare(M[p]):0)}const m=t===0?0:t*i,d=t===0?i:(t+1)*i,g=u.slice(m,d);o({ok:1,total:u.length,data:g})},r)})},addCar:async e=>new Promise(n=>{setTimeout(()=>{I.push(e),n({ok:1,message:"Car added successfully",data:e})},500)}),updateCar:async(e,n)=>new Promise(t=>{setTimeout(()=>{const i=I.findIndex(r=>r.id===e);i!==-1?(I[i]={...I[i],...n},t({ok:1,message:"Car updated successfully",data:I[i]})):t({ok:0,message:"Car not found"})},500)}),deleteCar:async e=>new Promise(n=>{setTimeout(()=>{const t=I.findIndex(i=>i.id===e);if(t!==-1){const i=I.splice(t,1);n({ok:1,message:"Car deleted successfully",data:i})}else n({ok:0,message:"Car not found"})},500)})},Xe={xmlns:"http://www.w3.org/2000/svg",width:"18",height:"18",viewBox:"0 0 18 18",fill:"none"},Ge=["fill"],Qe={__name:"iconGrid",props:{color:{type:String,default:"#14191F"}},setup(e){return(n,t)=>(s(),c("svg",Xe,[l("path",{d:"M14.0625 2.8125H3.9375C3.63913 2.8125 3.35298 2.93103 3.142 3.142C2.93103 3.35298 2.8125 3.63913 2.8125 3.9375V14.0625C2.8125 14.3609 2.93103 14.647 3.142 14.858C3.35298 15.069 3.63913 15.1875 3.9375 15.1875H14.0625C14.3609 15.1875 14.647 15.069 14.858 14.858C15.069 14.647 15.1875 14.3609 15.1875 14.0625V3.9375C15.1875 3.63913 15.069 3.35298 14.858 3.142C14.647 2.93103 14.3609 2.8125 14.0625 2.8125ZM14.0625 8.4375H9.5625V3.9375H14.0625V8.4375ZM8.4375 3.9375V8.4375H3.9375V3.9375H8.4375ZM3.9375 9.5625H8.4375V14.0625H3.9375V9.5625ZM14.0625 14.0625H9.5625V9.5625H14.0625V14.0625Z",fill:e.color},null,8,Ge)]))}},Ye={xmlns:"http://www.w3.org/2000/svg",width:"18",height:"18",viewBox:"0 0 18 18",fill:"none"},Je=["fill"],et={__name:"iconList",props:{color:{type:String,default:"#14191F"}},setup(e){return(n,t)=>(s(),c("svg",Ye,[l("path",{d:"M15.75 9C15.75 9.14918 15.6907 9.29226 15.5852 9.39775C15.4798 9.50324 15.3367 9.5625 15.1875 9.5625H2.8125C2.66332 9.5625 2.52024 9.50324 2.41475 9.39775C2.30926 9.29226 2.25 9.14918 2.25 9C2.25 8.85082 2.30926 8.70774 2.41475 8.60225C2.52024 8.49676 2.66332 8.4375 2.8125 8.4375H15.1875C15.3367 8.4375 15.4798 8.49676 15.5852 8.60225C15.6907 8.70774 15.75 8.85082 15.75 9ZM2.8125 5.0625H15.1875C15.3367 5.0625 15.4798 5.00324 15.5852 4.89775C15.6907 4.79226 15.75 4.64918 15.75 4.5C15.75 4.35082 15.6907 4.20774 15.5852 4.10225C15.4798 3.99676 15.3367 3.9375 15.1875 3.9375H2.8125C2.66332 3.9375 2.52024 3.99676 2.41475 4.10225C2.30926 4.20774 2.25 4.35082 2.25 4.5C2.25 4.64918 2.30926 4.79226 2.41475 4.89775C2.52024 5.00324 2.66332 5.0625 2.8125 5.0625ZM15.1875 12.9375H2.8125C2.66332 12.9375 2.52024 12.9968 2.41475 13.1023C2.30926 13.2077 2.25 13.3508 2.25 13.5C2.25 13.6492 2.30926 13.7923 2.41475 13.8977C2.52024 14.0032 2.66332 14.0625 2.8125 14.0625H15.1875C15.3367 14.0625 15.4798 14.0032 15.5852 13.8977C15.6907 13.7923 15.75 13.6492 15.75 13.5C15.75 13.3508 15.6907 13.2077 15.5852 13.1023C15.4798 12.9968 15.3367 12.9375 15.1875 12.9375Z",fill:e.color},null,8,Je)]))}},tt={class:"car-snapshot__brand pr-1"},nt={__name:"CarBrand",props:{brand:String,size:{type:String,default:"",validator:e=>["small",""].includes(e)}},setup(e){return(n,t)=>(s(),c("span",tt,C(e.brand),1))}},re=O(nt,[["__scopeId","data-v-73e0a495"]]),ot={class:"car-snapshot__capacity car-snapshot__info-with-icon"},it={class:"car-snapshot__info-icon"},at={key:0,class:"car-snapshot__info-label-title"},st={class:"car-snapshot__info-label-value"},ce={__name:"CarCapacity",props:{capacity:Number,showLabel:{type:Boolean,default:!1}},setup(e){return(n,t)=>(s(),c("div",ot,[l("span",it,[a(Fe)]),e.showLabel?(s(),c("span",at,"Capacity")):w("",!0),l("span",st,C(e.capacity)+" seats",1)]))}},lt=["src","alt","title"],ue={__name:"CarImage",props:{image:String,brand:String,model:String,block:Boolean},setup(e){function n(t){const r=new URL(import.meta.url).origin;return new URL(`/wheelzie/images/cars/${t}`,r).href}return(t,i)=>(s(),c("img",{src:n(e.image),alt:e.brand+" "+e.model,title:e.brand+" "+e.model,width:"300",height:"150",class:P(["car-snapshot__image",{"w-full":e.block,"h-auto":e.block}])},null,10,lt))}},rt={class:"car-snapshot__model"},ct={__name:"CarModel",props:{model:String},setup(e){return(n,t)=>(s(),c("span",rt,C(e.model),1))}},de=O(ct,[["__scopeId","data-v-ccdaf149"]]),ut={key:0,class:"car-snapshot__info-label-title"},dt={class:"car-snapshot__price pb-1"},pt={__name:"CarPrice",props:{price:Number,showLabel:{type:Boolean,default:!1}},setup(e){return(n,t)=>(s(),c(x,null,[e.showLabel?(s(),c("span",ut,"Price")):w("",!0),l("strong",dt,"$"+C(e.price),1),t[0]||(t[0]=l("div",{class:"car-snapshot__daily-text pt-1"},"/days",-1))],64))}},pe=O(pt,[["__scopeId","data-v-69ad4c88"]]),mt={__name:"CarStatus",props:{status:String},setup(e){const n=e,t=Ie(()=>{let i="";return n.status==="unavailable"&&(i="secondary"),n.status==="available"&&(i="contrast"),n.status==="maintenance"&&(i="danger"),i});return(i,r)=>(s(),k(h(Oe),{severity:t.value,class:P(["car-snapshot__status",`car-snapshot__status-${e.status}`])},{default:T(()=>[X(C(e.status),1)]),_:1},8,["severity","class"]))}},me=O(mt,[["__scopeId","data-v-5be22b2e"]]),ht={class:"car-snapshot__transmission car-snapshot__info-with-icon"},ft={class:"car-snapshot__info-icon"},bt={key:0,class:"car-snapshot__info-label-title"},gt={class:"car-snapshot__info-label-value"},he={__name:"CarTransmission",props:{transmission:String,showLabel:{type:Boolean,default:!1}},setup(e){return(n,t)=>(s(),c("div",ht,[l("span",ft,[a(je)]),e.showLabel?(s(),c("span",bt,"Transmission")):w("",!0),l("span",gt,C(e.transmission),1)]))}},yt={class:"car-snapshot car-snapshot--horizontal flex-col xl:flex-row"},vt={class:"car-snapshot__horizontal-top flex flex-col lg:flex-row justify-between gap-4 bg-white w-full xl:w-5/6 rounded-md"},_t={class:"car-snapshot__image-container p-4 w-full lg:w-4/12"},wt={class:"car-snapshot__info-container flex-col justify-center px-3 w-5/12"},kt={class:"car-snapshot__info-container-item"},Ct={class:"car-snapshot__info-container p-4 flex flex-row gap:4 lg:gap-8 w-full lg:w-5/12"},xt={class:"car-snapshot__info-container w-1/3"},St={class:"car-snapshot__info-container w-1/3"},Lt={class:"car-snapshot__info-container p-4 flex-col justify-center w-1/3"},It={class:"car-snapshot__info-container p-5 w-full lg:w-2/12 flex flex-col items-center justify-center"},Ot={class:"car-snapshot__horizontal-bottom p-5 flex gap-4 h-full justify-center items-center w-full xl:w-1/6"},$t={__name:"CarSnapshotHorizontal",props:{id:String,brand:String,model:String,type:String,price:Number,image:String,status:String,transmission:String,capacity:Number,fuel:String},emits:["delete-option","modify-option"],setup(e,{emit:n}){const t=n,i=()=>{t("modify-option")},r=()=>{t("delete-option")};return(o,u)=>(s(),c("div",yt,[l("div",vt,[l("div",_t,[a(ue,{brand:e.brand,image:e.image,model:e.model,class:"w-7/12"},null,8,["brand","image","model"]),l("div",wt,[a(re,{brand:e.brand},null,8,["brand"]),a(de,{model:e.model,class:"mb-2"},null,8,["model"]),l("div",kt,[a(me,{status:e.status},null,8,["status"])])])]),l("div",Ct,[l("div",xt,[a(he,{transmission:e.transmission,showLabel:""},null,8,["transmission"])]),l("div",St,[a(ce,{capacity:e.capacity,showLabel:""},null,8,["capacity"])]),l("div",Lt,[a(pe,{price:e.price,showLabel:""},null,8,["price"])])]),l("div",It,[a(B,{severity:"primary",label:"Select",block:""})])]),l("div",Ot,[a(B,{size:"small",label:"Edit",onClick:i}),a(B,{size:"small",label:"Delete",onClick:r})])]))}},Vt=O($t,[["__scopeId","data-v-9013698b"]]),At={class:"ccar-snapshot__fuel car-snapshot__info-with-icon"},Tt={class:"car-snapshot__info-icon"},Mt={key:0,class:"car-snapshot__info-label-title"},Bt={class:"car-snapshot__info-label-value"},Pt={__name:"CarFuel",props:{fuel:String,showLabel:{type:Boolean,default:!1}},setup(e){return(n,t)=>(s(),c("div",At,[l("span",Tt,[a(Ne)]),e.showLabel?(s(),c("span",Mt,"Fuel type")):w("",!0),l("span",Bt,C(e.fuel),1)]))}},Dt={class:"unit-car-id"},Et={__name:"CarId",props:{id:String},setup(e){return(n,t)=>(s(),c("div",Dt,[l("strong",null,C(e.id),1)]))}},zt={class:"car-snapshot__type"},Ht={__name:"CarType",props:{type:String},setup(e){return(n,t)=>(s(),c("div",zt,C(e.type),1))}},Rt=O(Ht,[["__scopeId","data-v-21f99e22"]]);var Kt=function(n){var t=n.dt;return`
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
`)},Ut={root:function(n){var t=n.props;return["p-menu p-component",{"p-menu-overlay":t.popup}]},start:"p-menu-start",list:"p-menu-list",submenuLabel:"p-menu-submenu-label",separator:"p-menu-separator",end:"p-menu-end",item:function(n){var t=n.instance;return["p-menu-item",{"p-focus":t.id===t.focusedOptionId,"p-disabled":t.disabled()}]},itemContent:"p-menu-item-content",itemLink:"p-menu-item-link",itemIcon:"p-menu-item-icon",itemLabel:"p-menu-item-label"},Ft=U.extend({name:"menu",theme:Kt,classes:Ut}),jt={name:"BaseMenu",extends:D,props:{popup:{type:Boolean,default:!1},model:{type:Array,default:null},appendTo:{type:[String,Object],default:"body"},autoZIndex:{type:Boolean,default:!0},baseZIndex:{type:Number,default:0},tabindex:{type:Number,default:0},ariaLabel:{type:String,default:null},ariaLabelledby:{type:String,default:null}},style:Ft,provide:function(){return{$pcMenu:this,$parentInstance:this}}},fe={name:"Menuitem",hostName:"Menu",extends:D,inheritAttrs:!1,emits:["item-click","item-mousemove"],props:{item:null,templates:null,id:null,focusedOptionId:null,index:null},methods:{getItemProp:function(n,t){return n&&n.item?Pe(n.item[t]):void 0},getPTOptions:function(n){return this.ptm(n,{context:{item:this.item,index:this.index,focused:this.isItemFocused(),disabled:this.disabled()}})},isItemFocused:function(){return this.focusedOptionId===this.id},onItemClick:function(n){var t=this.getItemProp(this.item,"command");t&&t({originalEvent:n,item:this.item.item}),this.$emit("item-click",{originalEvent:n,item:this.item,id:this.id})},onItemMouseMove:function(n){this.$emit("item-mousemove",{originalEvent:n,item:this.item,id:this.id})},visible:function(){return typeof this.item.visible=="function"?this.item.visible():this.item.visible!==!1},disabled:function(){return typeof this.item.disabled=="function"?this.item.disabled():this.item.disabled},label:function(){return typeof this.item.label=="function"?this.item.label():this.item.label},getMenuItemProps:function(n){return{action:b({class:this.cx("itemLink"),tabindex:"-1","aria-hidden":!0},this.getPTOptions("itemLink")),icon:b({class:[this.cx("itemIcon"),n.icon]},this.getPTOptions("itemIcon")),label:b({class:this.cx("itemLabel")},this.getPTOptions("itemLabel"))}}},directives:{ripple:G}},Nt=["id","aria-label","aria-disabled","data-p-focused","data-p-disabled"],Zt=["href","target"];function qt(e,n,t,i,r,o){var u=se("ripple");return o.visible()?(s(),c("li",b({key:0,id:t.id,class:[e.cx("item"),t.item.class],role:"menuitem",style:t.item.style,"aria-label":o.label(),"aria-disabled":o.disabled()},o.getPTOptions("item"),{"data-p-focused":o.isItemFocused(),"data-p-disabled":o.disabled()||!1}),[l("div",b({class:e.cx("itemContent"),onClick:n[0]||(n[0]=function(m){return o.onItemClick(m)}),onMousemove:n[1]||(n[1]=function(m){return o.onItemMouseMove(m)})},o.getPTOptions("itemContent")),[t.templates.item?t.templates.item?(s(),k(te(t.templates.item),{key:1,item:t.item,label:o.label(),props:o.getMenuItemProps(t.item)},null,8,["item","label","props"])):w("",!0):le((s(),c("a",b({key:0,href:t.item.url,class:e.cx("itemLink"),target:t.item.target,tabindex:"-1"},o.getPTOptions("itemLink")),[t.templates.itemicon?(s(),k(te(t.templates.itemicon),{key:0,item:t.item,class:P(e.cx("itemIcon"))},null,8,["item","class"])):t.item.icon?(s(),c("span",b({key:1,class:[e.cx("itemIcon"),t.item.icon]},o.getPTOptions("itemIcon")),null,16)):w("",!0),l("span",b({class:e.cx("itemLabel")},o.getPTOptions("itemLabel")),C(o.label()),17)],16,Zt)),[[u]])],16)],16,Nt)):w("",!0)}fe.render=qt;function ae(e){return Qt(e)||Gt(e)||Xt(e)||Wt()}function Wt(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Xt(e,n){if(e){if(typeof e=="string")return q(e,n);var t={}.toString.call(e).slice(8,-1);return t==="Object"&&e.constructor&&(t=e.constructor.name),t==="Map"||t==="Set"?Array.from(e):t==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?q(e,n):void 0}}function Gt(e){if(typeof Symbol<"u"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function Qt(e){if(Array.isArray(e))return q(e)}function q(e,n){(n==null||n>e.length)&&(n=e.length);for(var t=0,i=Array(n);t<n;t++)i[t]=e[t];return i}var be={name:"Menu",extends:jt,inheritAttrs:!1,emits:["show","hide","focus","blur"],data:function(){return{id:this.$attrs.id,overlayVisible:!1,focused:!1,focusedOptionIndex:-1,selectedOptionIndex:-1}},watch:{"$attrs.id":function(n){this.id=n||J()}},target:null,outsideClickListener:null,scrollHandler:null,resizeListener:null,container:null,list:null,mounted:function(){this.id=this.id||J(),this.popup||(this.bindResizeListener(),this.bindOutsideClickListener())},beforeUnmount:function(){this.unbindResizeListener(),this.unbindOutsideClickListener(),this.scrollHandler&&(this.scrollHandler.destroy(),this.scrollHandler=null),this.target=null,this.container&&this.autoZIndex&&F.clear(this.container),this.container=null},methods:{itemClick:function(n){var t=n.item;this.disabled(t)||(t.command&&t.command(n),this.overlayVisible&&this.hide(),!this.popup&&this.focusedOptionIndex!==n.id&&(this.focusedOptionIndex=n.id))},itemMouseMove:function(n){this.focused&&(this.focusedOptionIndex=n.id)},onListFocus:function(n){this.focused=!0,!this.popup&&this.changeFocusedOptionIndex(0),this.$emit("focus",n)},onListBlur:function(n){this.focused=!1,this.focusedOptionIndex=-1,this.$emit("blur",n)},onListKeyDown:function(n){switch(n.code){case"ArrowDown":this.onArrowDownKey(n);break;case"ArrowUp":this.onArrowUpKey(n);break;case"Home":this.onHomeKey(n);break;case"End":this.onEndKey(n);break;case"Enter":case"NumpadEnter":this.onEnterKey(n);break;case"Space":this.onSpaceKey(n);break;case"Escape":this.popup&&(z(this.target),this.hide());case"Tab":this.overlayVisible&&this.hide();break}},onArrowDownKey:function(n){var t=this.findNextOptionIndex(this.focusedOptionIndex);this.changeFocusedOptionIndex(t),n.preventDefault()},onArrowUpKey:function(n){if(n.altKey&&this.popup)z(this.target),this.hide(),n.preventDefault();else{var t=this.findPrevOptionIndex(this.focusedOptionIndex);this.changeFocusedOptionIndex(t),n.preventDefault()}},onHomeKey:function(n){this.changeFocusedOptionIndex(0),n.preventDefault()},onEndKey:function(n){this.changeFocusedOptionIndex(H(this.container,'li[data-pc-section="item"][data-p-disabled="false"]').length-1),n.preventDefault()},onEnterKey:function(n){var t=ee(this.list,'li[id="'.concat("".concat(this.focusedOptionIndex),'"]')),i=t&&ee(t,'a[data-pc-section="itemlink"]');this.popup&&z(this.target),i?i.click():t&&t.click(),n.preventDefault()},onSpaceKey:function(n){this.onEnterKey(n)},findNextOptionIndex:function(n){var t=H(this.container,'li[data-pc-section="item"][data-p-disabled="false"]'),i=ae(t).findIndex(function(r){return r.id===n});return i>-1?i+1:0},findPrevOptionIndex:function(n){var t=H(this.container,'li[data-pc-section="item"][data-p-disabled="false"]'),i=ae(t).findIndex(function(r){return r.id===n});return i>-1?i-1:0},changeFocusedOptionIndex:function(n){var t=H(this.container,'li[data-pc-section="item"][data-p-disabled="false"]'),i=n>=t.length?t.length-1:n<0?0:n;i>-1&&(this.focusedOptionIndex=t[i].getAttribute("id"))},toggle:function(n){this.overlayVisible?this.hide():this.show(n)},show:function(n){this.overlayVisible=!0,this.target=n.currentTarget},hide:function(){this.overlayVisible=!1,this.target=null},onEnter:function(n){$e(n,{position:"absolute",top:"0",left:"0"}),this.alignOverlay(),this.bindOutsideClickListener(),this.bindResizeListener(),this.bindScrollListener(),this.autoZIndex&&F.set("menu",n,this.baseZIndex+this.$primevue.config.zIndex.menu),this.popup&&z(this.list),this.$emit("show")},onLeave:function(){this.unbindOutsideClickListener(),this.unbindResizeListener(),this.unbindScrollListener(),this.$emit("hide")},onAfterLeave:function(n){this.autoZIndex&&F.clear(n)},alignOverlay:function(){Ve(this.container,this.target);var n=j(this.target);n>j(this.container)&&(this.container.style.minWidth=j(this.target)+"px")},bindOutsideClickListener:function(){var n=this;this.outsideClickListener||(this.outsideClickListener=function(t){var i=n.container&&!n.container.contains(t.target),r=!(n.target&&(n.target===t.target||n.target.contains(t.target)));n.overlayVisible&&i&&r?n.hide():!n.popup&&i&&r&&(n.focusedOptionIndex=-1)},document.addEventListener("click",this.outsideClickListener))},unbindOutsideClickListener:function(){this.outsideClickListener&&(document.removeEventListener("click",this.outsideClickListener),this.outsideClickListener=null)},bindScrollListener:function(){var n=this;this.scrollHandler||(this.scrollHandler=new Ae(this.target,function(){n.overlayVisible&&n.hide()})),this.scrollHandler.bindScrollListener()},unbindScrollListener:function(){this.scrollHandler&&this.scrollHandler.unbindScrollListener()},bindResizeListener:function(){var n=this;this.resizeListener||(this.resizeListener=function(){n.overlayVisible&&!Te()&&n.hide()},window.addEventListener("resize",this.resizeListener))},unbindResizeListener:function(){this.resizeListener&&(window.removeEventListener("resize",this.resizeListener),this.resizeListener=null)},visible:function(n){return typeof n.visible=="function"?n.visible():n.visible!==!1},disabled:function(n){return typeof n.disabled=="function"?n.disabled():n.disabled},label:function(n){return typeof n.label=="function"?n.label():n.label},onOverlayClick:function(n){Me.emit("overlay-click",{originalEvent:n,target:this.target})},containerRef:function(n){this.container=n},listRef:function(n){this.list=n}},computed:{focusedOptionId:function(){return this.focusedOptionIndex!==-1?this.focusedOptionIndex:null}},components:{PVMenuitem:fe,Portal:Be}},Yt=["id"],Jt=["id","tabindex","aria-activedescendant","aria-label","aria-labelledby"],en=["id"];function tn(e,n,t,i,r,o){var u=Z("PVMenuitem"),m=Z("Portal");return s(),k(m,{appendTo:e.appendTo,disabled:!e.popup},{default:T(function(){return[a(De,b({name:"p-connected-overlay",onEnter:o.onEnter,onLeave:o.onLeave,onAfterLeave:o.onAfterLeave},e.ptm("transition")),{default:T(function(){return[!e.popup||r.overlayVisible?(s(),c("div",b({key:0,ref:o.containerRef,id:r.id,class:e.cx("root"),onClick:n[3]||(n[3]=function(){return o.onOverlayClick&&o.onOverlayClick.apply(o,arguments)})},e.ptmi("root")),[e.$slots.start?(s(),c("div",b({key:0,class:e.cx("start")},e.ptm("start")),[A(e.$slots,"start")],16)):w("",!0),l("ul",b({ref:o.listRef,id:r.id+"_list",class:e.cx("list"),role:"menu",tabindex:e.tabindex,"aria-activedescendant":r.focused?o.focusedOptionId:void 0,"aria-label":e.ariaLabel,"aria-labelledby":e.ariaLabelledby,onFocus:n[0]||(n[0]=function(){return o.onListFocus&&o.onListFocus.apply(o,arguments)}),onBlur:n[1]||(n[1]=function(){return o.onListBlur&&o.onListBlur.apply(o,arguments)}),onKeydown:n[2]||(n[2]=function(){return o.onListKeyDown&&o.onListKeyDown.apply(o,arguments)})},e.ptm("list")),[(s(!0),c(x,null,K(e.model,function(d,g){return s(),c(x,{key:o.label(d)+g.toString()},[d.items&&o.visible(d)&&!d.separator?(s(),c(x,{key:0},[d.items?(s(),c("li",b({key:0,id:r.id+"_"+g,class:[e.cx("submenuLabel"),d.class],role:"none",ref_for:!0},e.ptm("submenuLabel")),[A(e.$slots,e.$slots.submenulabel?"submenulabel":"submenuheader",{item:d},function(){return[X(C(o.label(d)),1)]})],16,en)):w("",!0),(s(!0),c(x,null,K(d.items,function(p,S){return s(),c(x,{key:p.label+g+"_"+S},[o.visible(p)&&!p.separator?(s(),k(u,{key:0,id:r.id+"_"+g+"_"+S,item:p,templates:e.$slots,focusedOptionId:o.focusedOptionId,unstyled:e.unstyled,onItemClick:o.itemClick,onItemMousemove:o.itemMouseMove,pt:e.pt},null,8,["id","item","templates","focusedOptionId","unstyled","onItemClick","onItemMousemove","pt"])):o.visible(p)&&p.separator?(s(),c("li",b({key:"separator"+g+S,class:[e.cx("separator"),d.class],style:p.style,role:"separator",ref_for:!0},e.ptm("separator")),null,16)):w("",!0)],64)}),128))],64)):o.visible(d)&&d.separator?(s(),c("li",b({key:"separator"+g.toString(),class:[e.cx("separator"),d.class],style:d.style,role:"separator",ref_for:!0},e.ptm("separator")),null,16)):(s(),k(u,{key:o.label(d)+g.toString(),id:r.id+"_"+g,item:d,index:g,templates:e.$slots,focusedOptionId:o.focusedOptionId,unstyled:e.unstyled,onItemClick:o.itemClick,onItemMousemove:o.itemMouseMove,pt:e.pt},null,8,["id","item","index","templates","focusedOptionId","unstyled","onItemClick","onItemMousemove","pt"]))],64)}),128))],16,Jt),e.$slots.end?(s(),c("div",b({key:1,class:e.cx("end")},e.ptm("end")),[A(e.$slots,"end")],16)):w("",!0)],16,Yt)):w("",!0)]}),_:3},16,["onEnter","onLeave","onAfterLeave"])]}),_:3},8,["appendTo","disabled"])}be.render=tn;const nn={class:"car-snapshot car-snapshot--vertical flex-col p-4"},on={class:"car-snapshot__info-container align-top justify-between items-center"},an={class:"car-snapshot__attributes flex flex-col"},sn={class:"car-snapshot__brand-&-model"},ln={class:"car-snapshot__price-per-day flex flex-col items-end"},rn={class:"car-snapshot__image-container"},cn={class:"car-snapshot__info-container justify-between items-center"},un={class:"car-snapshot__info-container gap-6 items-center"},dn={class:"car-snapshot_actions flex gap-2 w-full"},pn={class:"car-snapshot_link w-full"},mn={class:"car-snapshot__more-action"},hn={__name:"CarSnapshotVertical",props:{id:String,brand:String,model:String,type:String,price:Number,image:String,status:String,transmission:String,capacity:Number,fuel:String},emits:["delete-option","modify-option"],setup(e,{emit:n}){const t=n,i=v(),r=v([{items:[{label:"Edit",icon:"pi pi-pencil",command:()=>u()},{label:"Delete",icon:"pi pi-trash",command:()=>m()}]}]),o=d=>{i.value.toggle(d)},u=()=>{t("modify-option")},m=()=>{t("delete-option")};return(d,g)=>(s(),c("div",nn,[l("div",on,[l("div",an,[l("div",sn,[a(re,{brand:e.brand},null,8,["brand"]),a(de,{model:e.model},null,8,["model"])]),a(Rt,{type:e.type},null,8,["type"])]),l("div",ln,[a(pe,{price:e.price},null,8,["price"])])]),l("div",rn,[a(ue,{brand:e.brand,image:e.image,model:e.model,block:""},null,8,["brand","image","model"])]),l("div",cn,[a(me,{status:e.status},null,8,["status"]),a(Et,{id:e.id},null,8,["id"])]),l("div",un,[a(he,{transmission:e.transmission},null,8,["transmission"]),a(ce,{capacity:e.capacity},null,8,["capacity"]),a(Pt,{fuel:e.fuel},null,8,["fuel"])]),l("div",dn,[l("div",pn,[a(B,{label:"Select Car",severity:"primary",block:""})]),l("div",mn,[a(h(Ee),{type:"button",severity:"secondary",icon:"pi pi-ellipsis-h",onClick:o,"aria-haspopup":"true","aria-controls":"overlay_menu",class:"p-3"}),a(h(be),{ref_key:"menu",ref:i,id:"overlay_menu",model:r.value,popup:!0},null,8,["model"])])])]))}};var fn=function(n){var t=n.dt;return`
.p-skeleton {
    overflow: hidden;
    background: `.concat(t("skeleton.background"),`;
    border-radius: `).concat(t("skeleton.border.radius"),`;
}

.p-skeleton::after {
    content: "";
    animation: p-skeleton-animation 1.2s infinite;
    height: 100%;
    left: 0;
    position: absolute;
    right: 0;
    top: 0;
    transform: translateX(-100%);
    z-index: 1;
    background: linear-gradient( 90deg, rgba(255, 255, 255, 0), `).concat(t("skeleton.animation.background"),`, rgba(255, 255, 255, 0) );
}

.p-skeleton-circle {
    border-radius: 50%;
}

.p-skeleton-animation-none::after {
    animation: none;
}

@keyframes p-skeleton-animation {
    from {
        transform: translateX(-100%);
    }
    to {
        transform: translateX(100%);
    }
}
`)},bn={root:{position:"relative"}},gn={root:function(n){var t=n.props;return["p-skeleton p-component",{"p-skeleton-circle":t.shape==="circle","p-skeleton-animation-none":t.animation==="none"}]}},yn=U.extend({name:"skeleton",theme:fn,classes:gn,inlineStyles:bn}),vn={name:"BaseSkeleton",extends:D,props:{shape:{type:String,default:"rectangle"},size:{type:String,default:null},width:{type:String,default:"100%"},height:{type:String,default:"1rem"},borderRadius:{type:String,default:null},animation:{type:String,default:"wave"}},style:yn,provide:function(){return{$pcSkeleton:this,$parentInstance:this}}},f={name:"Skeleton",extends:vn,inheritAttrs:!1,computed:{containerStyle:function(){return this.size?{width:this.size,height:this.size,borderRadius:this.borderRadius}:{width:this.width,height:this.height,borderRadius:this.borderRadius}}}};function _n(e,n,t,i,r,o){return s(),c("div",b({class:e.cx("root"),style:[e.sx("root"),o.containerStyle],"aria-hidden":"true"},e.ptmi("root")),null,16)}f.render=_n;const wn={class:"car-snapshot car-snapshot--horizontal border-none rounded-lg p-0 bg-white flex-col xl:flex-row flex"},kn={class:"car-snapshot__horizontal-top flex flex-col lg:flex-row justify-between gap-4 bg-white w-full xl:w-5/6 rounded-md"},Cn={class:"car-snapshot__image-container p-4 w-full lg:w-4/12"},xn={class:"w-7/12"},Sn={class:"flex-col justify-center px-3 w-5/12"},Ln={class:"car-snapshot__info-container p-4 flex flex-row gap:4 lg:gap-8 w-full lg:w-5/12"},In={class:"car-snapshot__info-container flex flex-col gap-2 w-1/3 justify-center"},On={class:"car-snapshot__info-container flex flex-col gap-2 w-1/3 justify-center"},$n={class:"car-snapshot__info-container flex flex-col gap-2 w-1/3 justify-center"},Vn={class:"car-snapshot__info-container p-5 w-full lg:w-2/12 flex flex-col items-center justify-center"},An={class:"car-snapshot__horizontal-bottom p-5 flex gap-4 h-full justify-center items-center w-full xl:w-1/6"},Tn={__name:"SkeletonUnitHorizontal",setup(e){return(n,t)=>(s(),c("div",wn,[l("div",kn,[l("div",Cn,[l("div",xn,[a(h(f),{width:"100%",height:"5rem"})]),l("div",Sn,[a(h(f),{width:"50%",height:"1rem",class:"mb-2"}),a(h(f),{width:"100%",height:"1.5rem",class:"mb-2"}),a(h(f),{width:"80%%",height:"1rem",class:"mb-2"})])]),l("div",Ln,[l("div",In,[a(h(f),{size:"2.5rem"}),a(h(f),{width:"50%",height:"1rem"}),a(h(f),{width:"80%",height:"1.5rem"})]),l("div",On,[a(h(f),{size:"2.5rem"}),a(h(f),{width:"50%",height:"1rem"}),a(h(f),{width:"80%",height:"1.5rem"})]),l("div",$n,[a(h(f),{width:"50%",height:"1rem"}),a(h(f),{width:"80%",height:"2rem"})])]),l("div",Vn,[a(h(f),{width:"100%",height:"3rem"})])]),l("div",An,[a(h(f),{width:"40%",height:"2rem"}),a(h(f),{width:"40%",height:"2rem"})])]))}},Mn={class:"border-none rounded-lg p-6 bg-white"},Bn={class:"flex mb-4 justify-between"},Pn={class:"flex flex-col items-end"},Dn={class:"flex justify-between mt-4"},En={class:"flex justify-between mt-4"},zn={__name:"SkeletonUnitVertical",setup(e){return(n,t)=>(s(),c("div",Mn,[l("div",Bn,[l("div",null,[a(h(f),{width:"8rem",class:"mb-2",height:"1.5rem"}),a(h(f),{width:"4rem",class:"mb-2",height:"1rem"})]),l("div",Pn,[a(h(f),{width:"4rem",class:"mb-2",height:"1.5rem"}),a(h(f),{width:"2rem",class:"mb-2",height:"1rem"})])]),a(h(f),{width:"100%",height:"150px"}),l("div",Dn,[a(h(f),{width:"6rem",height:"1.5rem"}),a(h(f),{width:"6rem",height:"1.5rem"}),a(h(f),{width:"6rem",height:"1.5rem"})]),l("div",En,[a(h(f),{height:"2.5rem",class:"mr-3"}),a(h(f),{width:"2.5rem",height:"2.5rem"})])]))}};var Hn=function(n){var t=n.dt;return`
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
`)},Rn={root:function(n){var t=n.instance,i=n.props;return["p-togglebutton p-component",{"p-togglebutton-checked":t.active,"p-invalid":i.invalid}]},content:"p-togglebutton-content",icon:"p-togglebutton-icon",label:"p-togglebutton-label"},Kn=U.extend({name:"togglebutton",theme:Hn,classes:Rn}),Un={name:"BaseToggleButton",extends:D,props:{modelValue:Boolean,onIcon:String,offIcon:String,onLabel:{type:String,default:"Yes"},offLabel:{type:String,default:"No"},iconPos:{type:String,default:"left"},invalid:{type:Boolean,default:!1},disabled:{type:Boolean,default:!1},readonly:{type:Boolean,default:!1},tabindex:{type:Number,default:null},ariaLabelledby:{type:String,default:null},ariaLabel:{type:String,default:null}},style:Kn,provide:function(){return{$pcToggleButton:this,$parentInstance:this}}},ge={name:"ToggleButton",extends:Un,inheritAttrs:!1,emits:["update:modelValue","change"],methods:{getPTOptions:function(n){var t=n==="root"?this.ptmi:this.ptm;return t(n,{context:{active:this.active,disabled:this.disabled}})},onChange:function(n){!this.disabled&&!this.readonly&&(this.$emit("update:modelValue",!this.modelValue),this.$emit("change",n))}},computed:{active:function(){return this.modelValue===!0},hasLabel:function(){return ne(this.onLabel)&&ne(this.offLabel)},label:function(){return this.hasLabel?this.modelValue?this.onLabel:this.offLabel:"&nbsp;"}},directives:{ripple:G}},Fn=["tabindex","disabled","aria-pressed","aria-labelledby","data-p-checked","data-p-disabled"];function jn(e,n,t,i,r,o){var u=se("ripple");return le((s(),c("button",b({type:"button",class:e.cx("root"),tabindex:e.tabindex,disabled:e.disabled,"aria-pressed":e.modelValue,onClick:n[0]||(n[0]=function(){return o.onChange&&o.onChange.apply(o,arguments)})},o.getPTOptions("root"),{"aria-labelledby":e.ariaLabelledby,"data-p-checked":o.active,"data-p-disabled":e.disabled}),[l("span",b({class:e.cx("content")},o.getPTOptions("content")),[A(e.$slots,"default",{},function(){return[A(e.$slots,"icon",{value:e.modelValue,class:P(e.cx("icon"))},function(){return[e.onIcon||e.offIcon?(s(),c("span",b({key:0,class:[e.cx("icon"),e.modelValue?e.onIcon:e.offIcon]},o.getPTOptions("icon")),null,16)):w("",!0)]}),l("span",b({class:e.cx("label")},o.getPTOptions("label")),C(o.label),17)]})],16)],16,Fn)),[[u]])}ge.render=jn;var Nn=function(n){var t=n.dt;return`
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
`)},Zn={root:function(n){var t=n.props;return["p-selectbutton p-component",{"p-invalid":t.invalid}]}},qn=U.extend({name:"selectbutton",theme:Nn,classes:Zn}),Wn={name:"BaseSelectButton",extends:D,props:{modelValue:null,options:Array,optionLabel:null,optionValue:null,optionDisabled:null,multiple:Boolean,allowEmpty:{type:Boolean,default:!0},invalid:{type:Boolean,default:!1},disabled:Boolean,dataKey:null,ariaLabelledby:{type:String,default:null}},style:qn,provide:function(){return{$pcSelectButton:this,$parentInstance:this}}};function Xn(e,n){var t=typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"];if(!t){if(Array.isArray(e)||(t=ye(e))||n){t&&(e=t);var i=0,r=function(){};return{s:r,n:function(){return i>=e.length?{done:!0}:{done:!1,value:e[i++]}},e:function(g){throw g},f:r}}throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var o,u=!0,m=!1;return{s:function(){t=t.call(e)},n:function(){var g=t.next();return u=g.done,g},e:function(g){m=!0,o=g},f:function(){try{u||t.return==null||t.return()}finally{if(m)throw o}}}}function Gn(e){return Jn(e)||Yn(e)||ye(e)||Qn()}function Qn(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function ye(e,n){if(e){if(typeof e=="string")return W(e,n);var t={}.toString.call(e).slice(8,-1);return t==="Object"&&e.constructor&&(t=e.constructor.name),t==="Map"||t==="Set"?Array.from(e):t==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?W(e,n):void 0}}function Yn(e){if(typeof Symbol<"u"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function Jn(e){if(Array.isArray(e))return W(e)}function W(e,n){(n==null||n>e.length)&&(n=e.length);for(var t=0,i=Array(n);t<n;t++)i[t]=e[t];return i}var ve={name:"SelectButton",extends:Wn,inheritAttrs:!1,emits:["update:modelValue","change"],methods:{getOptionLabel:function(n){return this.optionLabel?R(n,this.optionLabel):n},getOptionValue:function(n){return this.optionValue?R(n,this.optionValue):n},getOptionRenderKey:function(n){return this.dataKey?R(n,this.dataKey):this.getOptionLabel(n)},isOptionDisabled:function(n){return this.optionDisabled?R(n,this.optionDisabled):!1},onOptionSelect:function(n,t,i){var r=this;if(!(this.disabled||this.isOptionDisabled(t))){var o=this.isSelected(t);if(!(o&&!this.allowEmpty)){var u=this.getOptionValue(t),m;this.multiple?o?m=this.modelValue.filter(function(d){return!N(d,u,r.equalityKey)}):m=this.modelValue?[].concat(Gn(this.modelValue),[u]):[u]:m=o?null:u,this.$emit("update:modelValue",m),this.$emit("change",{event:n,value:m})}}},isSelected:function(n){var t=!1,i=this.getOptionValue(n);if(this.multiple){if(this.modelValue){var r=Xn(this.modelValue),o;try{for(r.s();!(o=r.n()).done;){var u=o.value;if(N(u,i,this.equalityKey)){t=!0;break}}}catch(m){r.e(m)}finally{r.f()}}}else t=N(this.modelValue,i,this.equalityKey);return t}},computed:{equalityKey:function(){return this.optionValue?null:this.dataKey}},directives:{ripple:G},components:{ToggleButton:ge}},eo=["aria-labelledby"];function to(e,n,t,i,r,o){var u=Z("ToggleButton");return s(),c("div",b({class:e.cx("root"),role:"group","aria-labelledby":e.ariaLabelledby},e.ptmi("root")),[(s(!0),c(x,null,K(e.options,function(m,d){return s(),k(u,{key:o.getOptionRenderKey(m),modelValue:o.isSelected(m),onLabel:o.getOptionLabel(m),offLabel:o.getOptionLabel(m),disabled:e.disabled||o.isOptionDisabled(m),unstyled:e.unstyled,onChange:function(p){return o.onOptionSelect(p,m,d)},pt:e.ptm("pcToggleButton")},ze({_:2},[e.$slots.option?{name:"default",fn:T(function(){return[A(e.$slots,"option",{option:m,index:d},function(){return[l("span",b({ref_for:!0},e.ptm("pcToggleButton").label),C(o.getOptionLabel(m)),17)]})]}),key:"0"}:void 0]),1032,["modelValue","onLabel","offLabel","disabled","unstyled","onChange","pt"])}),128))],16,eo)}ve.render=to;const no={class:"page page-units"},oo={class:"page-content"},io={class:"page-content-top mb-3 pb-1 flex gap-2 flex-wrap"},ao={class:"page-content-center"},so={class:"page-content-bottom"},lo={__name:"UnitsView",setup(e){const n=v("grid"),t=v(["list","grid"]),i=v(""),r=v(),o=v({types:[{name:"Convertible"},{name:"Hatchback"},{name:"Sedan"},{name:"SUV"},{name:"Truck"},{name:"Minivan"}]}),u=v(),m=v({types:[{name:"Available"},{name:"Unavailable"},{name:"Maintenance"}]}),d=v(!1),g=v(null),p=v(8),S=v(0),M=v(0),$=v(["","","","","","","",""]),E=v(!0),V=async()=>{var _,L;E.value=!0;try{const y=await ie.getCars({expression:i==null?void 0:i.value,type:(_=r==null?void 0:r.value)==null?void 0:_.name,status:(L=u==null?void 0:u.value)==null?void 0:L.name},"brand_asc",S.value,p.value);if(!y.ok)throw new Error("Failed to load data");$.value=y.data,M.value=y.total}catch(y){console.error(y)}finally{E.value=!1}},_e=_=>{i.value=_,V()},we=_=>{r.value=_,V()},ke=_=>{u.value=_,V()},Ce=({page:_,rows:L})=>{S.value=_,p.value=L,V()},Q=_=>{g.value=_,d.value=!0},Y=()=>{g.value=null,d.value=!1},xe=()=>{Se(g.value),Y()},Se=_=>{ie.deleteCar(_),V()};return He(V),(_,L)=>(s(),c("div",no,[a(Ke,{title:"Units"}),l("div",oo,[l("div",io,[a(Re,{placeholder:"Search for car, etc",onSearchInput:_e,filter:i.value},null,8,["filter"]),a(oe,{options:o.value.types,selected:r.value,placeholder:"Car Type",onChangeSort:we,class:"sort-by-types"},null,8,["options","selected"]),a(oe,{options:m.value.types,selected:u.value,placeholder:"Status",onChangeSort:ke,class:"sort-by-status"},null,8,["options","selected"]),a(h(ve),{modelValue:n.value,"onUpdate:modelValue":L[0]||(L[0]=y=>n.value=y),options:t.value,allowEmpty:!1,class:"ml-auto cars-toggle-menu"},{option:T(({option:y})=>[y==="list"?(s(),k(et,{key:0,color:"currentColor"})):w("",!0),y==="grid"?(s(),k(Qe,{key:1,color:"currentColor"})):w("",!0)]),_:1},8,["modelValue","options"]),a(B,{label:"Add unit",severity:"primary",size:"small",class:"ml-0 add-new-car"})]),l("div",ao,[$.value.length?(s(),c("div",{key:0,class:P(["car-list",`car-list-${n.value}`])},[(s(!0),c(x,null,K($.value,y=>(s(),c(x,{key:y==null?void 0:y.id},[n.value==="grid"?(s(),c(x,{key:0},[E.value?(s(),k(zn,{key:0})):(s(),k(hn,b({key:1,ref_for:!0},y,{onDeleteOption:Le=>Q(y.id)}),null,16,["onDeleteOption"]))],64)):(s(),c(x,{key:1},[E.value?(s(),k(Tn,{key:0})):(s(),k(Vt,b({key:1,ref_for:!0},y,{onDeleteOption:Le=>Q(y.id)}),null,16,["onDeleteOption"]))],64))],64))),128))],2)):(s(),k(h(qe),{key:1,severity:"secondary",class:"w-full mt-5 mb-5"},{default:T(()=>L[1]||(L[1]=[X("No cars were found matching your criteria.")])),_:1}))]),l("div",so,[a(Ze,{limit:p.value,total:M.value,onPageChange:Ce},null,8,["limit","total"])]),a(Ue,{showDialog:d.value,onApplyConfirmation:xe,onHide:Y},null,8,["showDialog"])])]))}},fo=O(lo,[["__scopeId","data-v-326aa764"]]);export{fo as default};
