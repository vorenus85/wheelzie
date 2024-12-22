import{d as s,c,b as l,i as O,t as C,a,j as w,n as B,F as x,k as Oe,f as k,w as V,g as W,u as h,l as $e,e as z,B as K,U as J,Z as F,p as E,q as D,v as ee,x as Ae,y as Te,z as U,C as Ve,A as Me,O as ze,D as Be,E as X,G as Pe,H as b,R as G,I as se,J as le,K as te,L as N,T as Ee,M as T,N as R,r as v,Q as De,V as ne,W as re,X as H,Y as j,$ as He,o as Re,S as Ke,_ as oe,P as Fe}from"./index-CUwcopFq.js";import{_ as Ue}from"./ConfirmDialog-rxks-Fgn.js";import je from"./iconCapacity-BT2NOM9n.js";import Ne from"./iconTransmission-C_tKEArW.js";import Ze from"./iconFuel-CGy14TZZ.js";import{C as qe,s as We}from"./index-DNrBx0BM.js";const Xe=[{id:"CAR-001",brand:"Aston Martin",model:"DB12 Volante",type:"Convertible",price:20,image:"aston_martin.png",status:"unavailable",transmission:"automatic",capacity:2,fuel:"petrol"},{id:"CAR-002",brand:"Hyundai",model:"Sonata",type:"Sedan",price:45,image:"hyundai_sonata.png",status:"available",transmission:"manual",capacity:5,fuel:"petrol"},{id:"CAR-003",brand:"Nissan",model:"Ariya",type:"Hatchback",price:55,image:"nissan_ariya.png",status:"maintenance",transmission:"automatic",capacity:5,fuel:"hybrid"},{id:"CAR-004",brand:"Range Rover",model:"Velar",type:"SUV",price:140,image:"range_rover_velar.png",status:"available",transmission:"automatic",capacity:7,fuel:"diesel"},{id:"CAR-005",brand:"BMW",model:"LX3",type:"SUV",price:120,image:"bmw_lx3.png",status:"available",transmission:"automatic",capacity:7,fuel:"hybrid"},{id:"CAR-006",brand:"Audi",model:"Q7",type:"SUV",price:130,image:"audi_q7.png",status:"available",transmission:"automatic",capacity:7,fuel:"diesel"},{id:"CAR-007",brand:"Mercedes",model:"S-Class",type:"Sedan",price:100,image:"merci_s_class.png",status:"available",transmission:"automatic",capacity:5,fuel:"petrol"},{id:"CAR-008",brand:"Kia",model:"EV6",type:"Hatchback",price:40,image:"kia_ev6.png",status:"available",transmission:"manual",capacity:5,fuel:"hybrid"},{id:"CAR-009",brand:"Volkswagen",model:"Amarok",type:"Truck",price:80,image:"vw_amarok.png",status:"unavailable",transmission:"automatic",capacity:5,fuel:"diesel"}],I=[...Xe],ie={getCars:async(e={},n=null,t=0,i=5)=>{const r=Math.floor(Math.random()*1001)+500;return new Promise(o=>{setTimeout(()=>{let u=[...I];if(e!=null&&e.status&&(u=u.filter(p=>p.status.toLowerCase()===e.status.toLowerCase())),e!=null&&e.type&&(u=u.filter(p=>p.type.toLowerCase()===e.type.toLowerCase())),e!=null&&e.expression&&(u=u.filter(p=>!p.brand||new RegExp(e==null?void 0:e.expression,"i").test(p.brand)||!p.model||new RegExp(e==null?void 0:e.expression,"i").test(p.model)||!p.transmission||new RegExp(e==null?void 0:e.expression,"i").test(p.transmission)||!p.fuel||new RegExp(e==null?void 0:e.expression,"i").test(p.fuel)||!p.id||new RegExp(e==null?void 0:e.expression,"i").test(p.id))),n){const[p,S]=n.split("_");u.sort((M,$)=>S==="asc"?M[p].localeCompare($[p]):S==="desc"?$[p].localeCompare(M[p]):0)}const m=t===0?0:t*i,d=t===0?i:(t+1)*i,g=u.slice(m,d);o({ok:1,total:u.length,data:g})},r)})},addCar:async e=>new Promise(n=>{setTimeout(()=>{I.push(e),n({ok:1,message:"Car added successfully",data:e})},500)}),updateCar:async(e,n)=>new Promise(t=>{setTimeout(()=>{const i=I.findIndex(r=>r.id===e);i!==-1?(I[i]={...I[i],...n},t({ok:1,message:"Car updated successfully",data:I[i]})):t({ok:0,message:"Car not found"})},500)}),deleteCar:async e=>new Promise(n=>{setTimeout(()=>{const t=I.findIndex(i=>i.id===e);if(t!==-1){const i=I.splice(t,1);n({ok:1,message:"Car deleted successfully",data:i})}else n({ok:0,message:"Car not found"})},500)})},Ge={xmlns:"http://www.w3.org/2000/svg",width:"18",height:"18",viewBox:"0 0 18 18",fill:"none"},Qe=["fill"],Ye={__name:"iconGrid",props:{color:{type:String,default:"#14191F"}},setup(e){return(n,t)=>(s(),c("svg",Ge,[l("path",{d:"M14.0625 2.8125H3.9375C3.63913 2.8125 3.35298 2.93103 3.142 3.142C2.93103 3.35298 2.8125 3.63913 2.8125 3.9375V14.0625C2.8125 14.3609 2.93103 14.647 3.142 14.858C3.35298 15.069 3.63913 15.1875 3.9375 15.1875H14.0625C14.3609 15.1875 14.647 15.069 14.858 14.858C15.069 14.647 15.1875 14.3609 15.1875 14.0625V3.9375C15.1875 3.63913 15.069 3.35298 14.858 3.142C14.647 2.93103 14.3609 2.8125 14.0625 2.8125ZM14.0625 8.4375H9.5625V3.9375H14.0625V8.4375ZM8.4375 3.9375V8.4375H3.9375V3.9375H8.4375ZM3.9375 9.5625H8.4375V14.0625H3.9375V9.5625ZM14.0625 14.0625H9.5625V9.5625H14.0625V14.0625Z",fill:e.color},null,8,Qe)]))}},Je={xmlns:"http://www.w3.org/2000/svg",width:"18",height:"18",viewBox:"0 0 18 18",fill:"none"},et=["fill"],tt={__name:"iconList",props:{color:{type:String,default:"#14191F"}},setup(e){return(n,t)=>(s(),c("svg",Je,[l("path",{d:"M15.75 9C15.75 9.14918 15.6907 9.29226 15.5852 9.39775C15.4798 9.50324 15.3367 9.5625 15.1875 9.5625H2.8125C2.66332 9.5625 2.52024 9.50324 2.41475 9.39775C2.30926 9.29226 2.25 9.14918 2.25 9C2.25 8.85082 2.30926 8.70774 2.41475 8.60225C2.52024 8.49676 2.66332 8.4375 2.8125 8.4375H15.1875C15.3367 8.4375 15.4798 8.49676 15.5852 8.60225C15.6907 8.70774 15.75 8.85082 15.75 9ZM2.8125 5.0625H15.1875C15.3367 5.0625 15.4798 5.00324 15.5852 4.89775C15.6907 4.79226 15.75 4.64918 15.75 4.5C15.75 4.35082 15.6907 4.20774 15.5852 4.10225C15.4798 3.99676 15.3367 3.9375 15.1875 3.9375H2.8125C2.66332 3.9375 2.52024 3.99676 2.41475 4.10225C2.30926 4.20774 2.25 4.35082 2.25 4.5C2.25 4.64918 2.30926 4.79226 2.41475 4.89775C2.52024 5.00324 2.66332 5.0625 2.8125 5.0625ZM15.1875 12.9375H2.8125C2.66332 12.9375 2.52024 12.9968 2.41475 13.1023C2.30926 13.2077 2.25 13.3508 2.25 13.5C2.25 13.6492 2.30926 13.7923 2.41475 13.8977C2.52024 14.0032 2.66332 14.0625 2.8125 14.0625H15.1875C15.3367 14.0625 15.4798 14.0032 15.5852 13.8977C15.6907 13.7923 15.75 13.6492 15.75 13.5C15.75 13.3508 15.6907 13.2077 15.5852 13.1023C15.4798 12.9968 15.3367 12.9375 15.1875 12.9375Z",fill:e.color},null,8,et)]))}},nt={class:"car-snapshot__brand pr-1"},ot={__name:"CarBrand",props:{brand:String,size:{type:String,default:"",validator:e=>["small",""].includes(e)}},setup(e){return(n,t)=>(s(),c("span",nt,C(e.brand),1))}},ce=O(ot,[["__scopeId","data-v-73e0a495"]]),it={class:"car-snapshot__capacity car-snapshot__info-with-icon"},at={class:"car-snapshot__info-icon"},st={key:0,class:"car-snapshot__info-label-title"},lt={class:"car-snapshot__info-label-value"},ue={__name:"CarCapacity",props:{capacity:Number,showLabel:{type:Boolean,default:!1}},setup(e){return(n,t)=>(s(),c("div",it,[l("span",at,[a(je)]),e.showLabel?(s(),c("span",st,"Capacity")):w("",!0),l("span",lt,C(e.capacity)+" seats",1)]))}},rt=["src","alt","title"],de={__name:"CarImage",props:{image:String,brand:String,model:String,block:Boolean},setup(e){function n(t){const r=new URL(import.meta.url).origin;return new URL(`/wheelzie/images/cars/${t}`,r).href}return(t,i)=>(s(),c("img",{src:n(e.image),alt:e.brand+" "+e.model,title:e.brand+" "+e.model,width:"300",height:"150",class:B(["car-snapshot__image",{"w-full":e.block,"h-auto":e.block}])},null,10,rt))}},ct={class:"car-snapshot__model"},ut={__name:"CarModel",props:{model:String},setup(e){return(n,t)=>(s(),c("span",ct,C(e.model),1))}},pe=O(ut,[["__scopeId","data-v-ccdaf149"]]),dt={key:0,class:"car-snapshot__info-label-title"},pt={class:"car-snapshot__price pb-1"},mt={__name:"CarPrice",props:{price:Number,showLabel:{type:Boolean,default:!1}},setup(e){return(n,t)=>(s(),c(x,null,[e.showLabel?(s(),c("span",dt,"Price")):w("",!0),l("strong",pt,"$"+C(e.price),1),t[0]||(t[0]=l("div",{class:"car-snapshot__daily-text pt-1"},"/days",-1))],64))}},me=O(mt,[["__scopeId","data-v-69ad4c88"]]),ht={__name:"CarStatus",props:{status:String},setup(e){const n=e,t=Oe(()=>{let i="";return n.status==="unavailable"&&(i="secondary"),n.status==="available"&&(i="contrast"),n.status==="maintenance"&&(i="danger"),i});return(i,r)=>(s(),k(h($e),{severity:t.value,class:B(["car-snapshot__status",`car-snapshot__status-${e.status}`])},{default:V(()=>[W(C(e.status),1)]),_:1},8,["severity","class"]))}},he=O(ht,[["__scopeId","data-v-5be22b2e"]]),ft={class:"car-snapshot__transmission car-snapshot__info-with-icon"},bt={class:"car-snapshot__info-icon"},gt={key:0,class:"car-snapshot__info-label-title"},yt={class:"car-snapshot__info-label-value"},fe={__name:"CarTransmission",props:{transmission:String,showLabel:{type:Boolean,default:!1}},setup(e){return(n,t)=>(s(),c("div",ft,[l("span",bt,[a(Ne)]),e.showLabel?(s(),c("span",gt,"Transmission")):w("",!0),l("span",yt,C(e.transmission),1)]))}},vt={class:"car-snapshot car-snapshot--horizontal flex-col xl:flex-row"},_t={class:"car-snapshot__horizontal-top flex flex-col lg:flex-row justify-between gap-4 bg-white w-full xl:w-5/6 rounded-md"},wt={class:"car-snapshot__image-container p-4 w-full lg:w-4/12"},kt={class:"car-snapshot__info-container flex-col justify-center px-3 w-5/12"},Ct={class:"car-snapshot__info-container-item"},xt={class:"car-snapshot__info-container p-4 flex flex-row gap:4 lg:gap-8 w-full lg:w-5/12"},St={class:"car-snapshot__info-container w-1/3"},Lt={class:"car-snapshot__info-container w-1/3"},It={class:"car-snapshot__info-container p-4 flex-col justify-center w-1/3"},Ot={class:"car-snapshot__info-container p-5 w-full lg:w-2/12 flex flex-col items-center justify-center"},$t={class:"car-snapshot__horizontal-bottom p-5 flex gap-4 h-full justify-center items-center w-full xl:w-1/6"},At={__name:"CarSnapshotHorizontal",props:{id:String,brand:String,model:String,type:String,price:Number,image:String,status:String,transmission:String,capacity:Number,fuel:String},emits:["delete-option","modify-option"],setup(e,{emit:n}){const t=n,i=()=>{t("modify-option")},r=()=>{t("delete-option")};return(o,u)=>(s(),c("div",vt,[l("div",_t,[l("div",wt,[a(de,{brand:e.brand,image:e.image,model:e.model,class:"w-7/12"},null,8,["brand","image","model"]),l("div",kt,[a(ce,{brand:e.brand},null,8,["brand"]),a(pe,{model:e.model,class:"mb-2"},null,8,["model"]),l("div",Ct,[a(he,{status:e.status},null,8,["status"])])])]),l("div",xt,[l("div",St,[a(fe,{transmission:e.transmission,showLabel:""},null,8,["transmission"])]),l("div",Lt,[a(ue,{capacity:e.capacity,showLabel:""},null,8,["capacity"])]),l("div",It,[a(me,{price:e.price,showLabel:""},null,8,["price"])])]),l("div",Ot,[a(z,{severity:"primary",label:"Select",block:""})])]),l("div",$t,[a(z,{size:"small",label:"Edit",onClick:i}),a(z,{size:"small",label:"Delete",onClick:r})])]))}},Tt=O(At,[["__scopeId","data-v-9013698b"]]),Vt={class:"ccar-snapshot__fuel car-snapshot__info-with-icon"},Mt={class:"car-snapshot__info-icon"},zt={key:0,class:"car-snapshot__info-label-title"},Bt={class:"car-snapshot__info-label-value"},Pt={__name:"CarFuel",props:{fuel:String,showLabel:{type:Boolean,default:!1}},setup(e){return(n,t)=>(s(),c("div",Vt,[l("span",Mt,[a(Ze)]),e.showLabel?(s(),c("span",zt,"Fuel type")):w("",!0),l("span",Bt,C(e.fuel),1)]))}},Et={class:"unit-car-id"},Dt={__name:"CarId",props:{id:String},setup(e){return(n,t)=>(s(),c("div",Et,[l("strong",null,C(e.id),1)]))}},Ht={class:"car-snapshot__type"},Rt={__name:"CarType",props:{type:String},setup(e){return(n,t)=>(s(),c("div",Ht,C(e.type),1))}},Kt=O(Rt,[["__scopeId","data-v-21f99e22"]]);var Ft=function(n){var t=n.dt;return`
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
    border-block-start: 1px solid `).concat(t("menu.separator.border.color"),`;
}
`)},Ut={root:function(n){var t=n.props;return["p-menu p-component",{"p-menu-overlay":t.popup}]},start:"p-menu-start",list:"p-menu-list",submenuLabel:"p-menu-submenu-label",separator:"p-menu-separator",end:"p-menu-end",item:function(n){var t=n.instance;return["p-menu-item",{"p-focus":t.id===t.focusedOptionId,"p-disabled":t.disabled()}]},itemContent:"p-menu-item-content",itemLink:"p-menu-item-link",itemIcon:"p-menu-item-icon",itemLabel:"p-menu-item-label"},jt=K.extend({name:"menu",theme:Ft,classes:Ut}),Nt={name:"BaseMenu",extends:X,props:{popup:{type:Boolean,default:!1},model:{type:Array,default:null},appendTo:{type:[String,Object],default:"body"},autoZIndex:{type:Boolean,default:!0},baseZIndex:{type:Number,default:0},tabindex:{type:Number,default:0},ariaLabel:{type:String,default:null},ariaLabelledby:{type:String,default:null}},style:jt,provide:function(){return{$pcMenu:this,$parentInstance:this}}},be={name:"Menuitem",hostName:"Menu",extends:X,inheritAttrs:!1,emits:["item-click","item-mousemove"],props:{item:null,templates:null,id:null,focusedOptionId:null,index:null},methods:{getItemProp:function(n,t){return n&&n.item?Pe(n.item[t]):void 0},getPTOptions:function(n){return this.ptm(n,{context:{item:this.item,index:this.index,focused:this.isItemFocused(),disabled:this.disabled()}})},isItemFocused:function(){return this.focusedOptionId===this.id},onItemClick:function(n){var t=this.getItemProp(this.item,"command");t&&t({originalEvent:n,item:this.item.item}),this.$emit("item-click",{originalEvent:n,item:this.item,id:this.id})},onItemMouseMove:function(n){this.$emit("item-mousemove",{originalEvent:n,item:this.item,id:this.id})},visible:function(){return typeof this.item.visible=="function"?this.item.visible():this.item.visible!==!1},disabled:function(){return typeof this.item.disabled=="function"?this.item.disabled():this.item.disabled},label:function(){return typeof this.item.label=="function"?this.item.label():this.item.label},getMenuItemProps:function(n){return{action:b({class:this.cx("itemLink"),tabindex:"-1"},this.getPTOptions("itemLink")),icon:b({class:[this.cx("itemIcon"),n.icon]},this.getPTOptions("itemIcon")),label:b({class:this.cx("itemLabel")},this.getPTOptions("itemLabel"))}}},directives:{ripple:G}},Zt=["id","aria-label","aria-disabled","data-p-focused","data-p-disabled"],qt=["href","target"];function Wt(e,n,t,i,r,o){var u=se("ripple");return o.visible()?(s(),c("li",b({key:0,id:t.id,class:[e.cx("item"),t.item.class],role:"menuitem",style:t.item.style,"aria-label":o.label(),"aria-disabled":o.disabled()},o.getPTOptions("item"),{"data-p-focused":o.isItemFocused(),"data-p-disabled":o.disabled()||!1}),[l("div",b({class:e.cx("itemContent"),onClick:n[0]||(n[0]=function(m){return o.onItemClick(m)}),onMousemove:n[1]||(n[1]=function(m){return o.onItemMouseMove(m)})},o.getPTOptions("itemContent")),[t.templates.item?t.templates.item?(s(),k(te(t.templates.item),{key:1,item:t.item,label:o.label(),props:o.getMenuItemProps(t.item)},null,8,["item","label","props"])):w("",!0):le((s(),c("a",b({key:0,href:t.item.url,class:e.cx("itemLink"),target:t.item.target,tabindex:"-1"},o.getPTOptions("itemLink")),[t.templates.itemicon?(s(),k(te(t.templates.itemicon),{key:0,item:t.item,class:B(e.cx("itemIcon"))},null,8,["item","class"])):t.item.icon?(s(),c("span",b({key:1,class:[e.cx("itemIcon"),t.item.icon]},o.getPTOptions("itemIcon")),null,16)):w("",!0),l("span",b({class:e.cx("itemLabel")},o.getPTOptions("itemLabel")),C(o.label()),17)],16,qt)),[[u]])],16)],16,Zt)):w("",!0)}be.render=Wt;function ae(e){return Yt(e)||Qt(e)||Gt(e)||Xt()}function Xt(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Gt(e,n){if(e){if(typeof e=="string")return Z(e,n);var t={}.toString.call(e).slice(8,-1);return t==="Object"&&e.constructor&&(t=e.constructor.name),t==="Map"||t==="Set"?Array.from(e):t==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?Z(e,n):void 0}}function Qt(e){if(typeof Symbol<"u"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function Yt(e){if(Array.isArray(e))return Z(e)}function Z(e,n){(n==null||n>e.length)&&(n=e.length);for(var t=0,i=Array(n);t<n;t++)i[t]=e[t];return i}var ge={name:"Menu",extends:Nt,inheritAttrs:!1,emits:["show","hide","focus","blur"],data:function(){return{id:this.$attrs.id,overlayVisible:!1,focused:!1,focusedOptionIndex:-1,selectedOptionIndex:-1}},watch:{"$attrs.id":function(n){this.id=n||J()}},target:null,outsideClickListener:null,scrollHandler:null,resizeListener:null,container:null,list:null,mounted:function(){this.id=this.id||J(),this.popup||(this.bindResizeListener(),this.bindOutsideClickListener())},beforeUnmount:function(){this.unbindResizeListener(),this.unbindOutsideClickListener(),this.scrollHandler&&(this.scrollHandler.destroy(),this.scrollHandler=null),this.target=null,this.container&&this.autoZIndex&&F.clear(this.container),this.container=null},methods:{itemClick:function(n){var t=n.item;this.disabled(t)||(t.command&&t.command(n),this.overlayVisible&&this.hide(),!this.popup&&this.focusedOptionIndex!==n.id&&(this.focusedOptionIndex=n.id))},itemMouseMove:function(n){this.focused&&(this.focusedOptionIndex=n.id)},onListFocus:function(n){this.focused=!0,!this.popup&&this.changeFocusedOptionIndex(0),this.$emit("focus",n)},onListBlur:function(n){this.focused=!1,this.focusedOptionIndex=-1,this.$emit("blur",n)},onListKeyDown:function(n){switch(n.code){case"ArrowDown":this.onArrowDownKey(n);break;case"ArrowUp":this.onArrowUpKey(n);break;case"Home":this.onHomeKey(n);break;case"End":this.onEndKey(n);break;case"Enter":case"NumpadEnter":this.onEnterKey(n);break;case"Space":this.onSpaceKey(n);break;case"Escape":this.popup&&(E(this.target),this.hide());case"Tab":this.overlayVisible&&this.hide();break}},onArrowDownKey:function(n){var t=this.findNextOptionIndex(this.focusedOptionIndex);this.changeFocusedOptionIndex(t),n.preventDefault()},onArrowUpKey:function(n){if(n.altKey&&this.popup)E(this.target),this.hide(),n.preventDefault();else{var t=this.findPrevOptionIndex(this.focusedOptionIndex);this.changeFocusedOptionIndex(t),n.preventDefault()}},onHomeKey:function(n){this.changeFocusedOptionIndex(0),n.preventDefault()},onEndKey:function(n){this.changeFocusedOptionIndex(D(this.container,'li[data-pc-section="item"][data-p-disabled="false"]').length-1),n.preventDefault()},onEnterKey:function(n){var t=ee(this.list,'li[id="'.concat("".concat(this.focusedOptionIndex),'"]')),i=t&&ee(t,'a[data-pc-section="itemlink"]');this.popup&&E(this.target),i?i.click():t&&t.click(),n.preventDefault()},onSpaceKey:function(n){this.onEnterKey(n)},findNextOptionIndex:function(n){var t=D(this.container,'li[data-pc-section="item"][data-p-disabled="false"]'),i=ae(t).findIndex(function(r){return r.id===n});return i>-1?i+1:0},findPrevOptionIndex:function(n){var t=D(this.container,'li[data-pc-section="item"][data-p-disabled="false"]'),i=ae(t).findIndex(function(r){return r.id===n});return i>-1?i-1:0},changeFocusedOptionIndex:function(n){var t=D(this.container,'li[data-pc-section="item"][data-p-disabled="false"]'),i=n>=t.length?t.length-1:n<0?0:n;i>-1&&(this.focusedOptionIndex=t[i].getAttribute("id"))},toggle:function(n){this.overlayVisible?this.hide():this.show(n)},show:function(n){this.overlayVisible=!0,this.target=n.currentTarget},hide:function(){this.overlayVisible=!1,this.target=null},onEnter:function(n){Ae(n,{position:"absolute",top:"0",left:"0"}),this.alignOverlay(),this.bindOutsideClickListener(),this.bindResizeListener(),this.bindScrollListener(),this.autoZIndex&&F.set("menu",n,this.baseZIndex+this.$primevue.config.zIndex.menu),this.popup&&E(this.list),this.$emit("show")},onLeave:function(){this.unbindOutsideClickListener(),this.unbindResizeListener(),this.unbindScrollListener(),this.$emit("hide")},onAfterLeave:function(n){this.autoZIndex&&F.clear(n)},alignOverlay:function(){Te(this.container,this.target);var n=U(this.target);n>U(this.container)&&(this.container.style.minWidth=U(this.target)+"px")},bindOutsideClickListener:function(){var n=this;this.outsideClickListener||(this.outsideClickListener=function(t){var i=n.container&&!n.container.contains(t.target),r=!(n.target&&(n.target===t.target||n.target.contains(t.target)));n.overlayVisible&&i&&r?n.hide():!n.popup&&i&&r&&(n.focusedOptionIndex=-1)},document.addEventListener("click",this.outsideClickListener))},unbindOutsideClickListener:function(){this.outsideClickListener&&(document.removeEventListener("click",this.outsideClickListener),this.outsideClickListener=null)},bindScrollListener:function(){var n=this;this.scrollHandler||(this.scrollHandler=new Ve(this.target,function(){n.overlayVisible&&n.hide()})),this.scrollHandler.bindScrollListener()},unbindScrollListener:function(){this.scrollHandler&&this.scrollHandler.unbindScrollListener()},bindResizeListener:function(){var n=this;this.resizeListener||(this.resizeListener=function(){n.overlayVisible&&!Me()&&n.hide()},window.addEventListener("resize",this.resizeListener))},unbindResizeListener:function(){this.resizeListener&&(window.removeEventListener("resize",this.resizeListener),this.resizeListener=null)},visible:function(n){return typeof n.visible=="function"?n.visible():n.visible!==!1},disabled:function(n){return typeof n.disabled=="function"?n.disabled():n.disabled},label:function(n){return typeof n.label=="function"?n.label():n.label},onOverlayClick:function(n){ze.emit("overlay-click",{originalEvent:n,target:this.target})},containerRef:function(n){this.container=n},listRef:function(n){this.list=n}},computed:{focusedOptionId:function(){return this.focusedOptionIndex!==-1?this.focusedOptionIndex:null}},components:{PVMenuitem:be,Portal:Be}},Jt=["id"],en=["id","tabindex","aria-activedescendant","aria-label","aria-labelledby"],tn=["id"];function nn(e,n,t,i,r,o){var u=N("PVMenuitem"),m=N("Portal");return s(),k(m,{appendTo:e.appendTo,disabled:!e.popup},{default:V(function(){return[a(Ee,b({name:"p-connected-overlay",onEnter:o.onEnter,onLeave:o.onLeave,onAfterLeave:o.onAfterLeave},e.ptm("transition")),{default:V(function(){return[!e.popup||r.overlayVisible?(s(),c("div",b({key:0,ref:o.containerRef,id:r.id,class:e.cx("root"),onClick:n[3]||(n[3]=function(){return o.onOverlayClick&&o.onOverlayClick.apply(o,arguments)})},e.ptmi("root")),[e.$slots.start?(s(),c("div",b({key:0,class:e.cx("start")},e.ptm("start")),[T(e.$slots,"start")],16)):w("",!0),l("ul",b({ref:o.listRef,id:r.id+"_list",class:e.cx("list"),role:"menu",tabindex:e.tabindex,"aria-activedescendant":r.focused?o.focusedOptionId:void 0,"aria-label":e.ariaLabel,"aria-labelledby":e.ariaLabelledby,onFocus:n[0]||(n[0]=function(){return o.onListFocus&&o.onListFocus.apply(o,arguments)}),onBlur:n[1]||(n[1]=function(){return o.onListBlur&&o.onListBlur.apply(o,arguments)}),onKeydown:n[2]||(n[2]=function(){return o.onListKeyDown&&o.onListKeyDown.apply(o,arguments)})},e.ptm("list")),[(s(!0),c(x,null,R(e.model,function(d,g){return s(),c(x,{key:o.label(d)+g.toString()},[d.items&&o.visible(d)&&!d.separator?(s(),c(x,{key:0},[d.items?(s(),c("li",b({key:0,id:r.id+"_"+g,class:[e.cx("submenuLabel"),d.class],role:"none",ref_for:!0},e.ptm("submenuLabel")),[T(e.$slots,e.$slots.submenulabel?"submenulabel":"submenuheader",{item:d},function(){return[W(C(o.label(d)),1)]})],16,tn)):w("",!0),(s(!0),c(x,null,R(d.items,function(p,S){return s(),c(x,{key:p.label+g+"_"+S},[o.visible(p)&&!p.separator?(s(),k(u,{key:0,id:r.id+"_"+g+"_"+S,item:p,templates:e.$slots,focusedOptionId:o.focusedOptionId,unstyled:e.unstyled,onItemClick:o.itemClick,onItemMousemove:o.itemMouseMove,pt:e.pt},null,8,["id","item","templates","focusedOptionId","unstyled","onItemClick","onItemMousemove","pt"])):o.visible(p)&&p.separator?(s(),c("li",b({key:"separator"+g+S,class:[e.cx("separator"),d.class],style:p.style,role:"separator",ref_for:!0},e.ptm("separator")),null,16)):w("",!0)],64)}),128))],64)):o.visible(d)&&d.separator?(s(),c("li",b({key:"separator"+g.toString(),class:[e.cx("separator"),d.class],style:d.style,role:"separator",ref_for:!0},e.ptm("separator")),null,16)):(s(),k(u,{key:o.label(d)+g.toString(),id:r.id+"_"+g,item:d,index:g,templates:e.$slots,focusedOptionId:o.focusedOptionId,unstyled:e.unstyled,onItemClick:o.itemClick,onItemMousemove:o.itemMouseMove,pt:e.pt},null,8,["id","item","index","templates","focusedOptionId","unstyled","onItemClick","onItemMousemove","pt"]))],64)}),128))],16,en),e.$slots.end?(s(),c("div",b({key:1,class:e.cx("end")},e.ptm("end")),[T(e.$slots,"end")],16)):w("",!0)],16,Jt)):w("",!0)]}),_:3},16,["onEnter","onLeave","onAfterLeave"])]}),_:3},8,["appendTo","disabled"])}ge.render=nn;const on={class:"car-snapshot car-snapshot--vertical flex-col p-4"},an={class:"car-snapshot__info-container align-top justify-between items-center"},sn={class:"car-snapshot__attributes flex flex-col"},ln={class:"car-snapshot__brand-&-model"},rn={class:"car-snapshot__price-per-day flex flex-col items-end"},cn={class:"car-snapshot__image-container"},un={class:"car-snapshot__info-container justify-between items-center"},dn={class:"car-snapshot__info-container gap-6 items-center"},pn={class:"car-snapshot_actions flex gap-2 w-full"},mn={class:"car-snapshot_link w-full"},hn={class:"car-snapshot__more-action"},fn={__name:"CarSnapshotVertical",props:{id:String,brand:String,model:String,type:String,price:Number,image:String,status:String,transmission:String,capacity:Number,fuel:String},emits:["delete-option","modify-option"],setup(e,{emit:n}){const t=n,i=v(),r=v([{items:[{label:"Edit",icon:"pi pi-pencil",command:()=>u()},{label:"Delete",icon:"pi pi-trash",command:()=>m()}]}]),o=d=>{i.value.toggle(d)},u=()=>{t("modify-option")},m=()=>{t("delete-option")};return(d,g)=>(s(),c("div",on,[l("div",an,[l("div",sn,[l("div",ln,[a(ce,{brand:e.brand},null,8,["brand"]),a(pe,{model:e.model},null,8,["model"])]),a(Kt,{type:e.type},null,8,["type"])]),l("div",rn,[a(me,{price:e.price},null,8,["price"])])]),l("div",cn,[a(de,{brand:e.brand,image:e.image,model:e.model,block:""},null,8,["brand","image","model"])]),l("div",un,[a(he,{status:e.status},null,8,["status"]),a(Dt,{id:e.id},null,8,["id"])]),l("div",dn,[a(fe,{transmission:e.transmission},null,8,["transmission"]),a(ue,{capacity:e.capacity},null,8,["capacity"]),a(Pt,{fuel:e.fuel},null,8,["fuel"])]),l("div",pn,[l("div",mn,[a(z,{label:"Select Car",severity:"primary",block:""})]),l("div",hn,[a(h(De),{type:"button",severity:"secondary",icon:"pi pi-ellipsis-h",onClick:o,"aria-haspopup":"true","aria-controls":"overlay_menu",class:"p-3"}),a(h(ge),{ref_key:"menu",ref:i,id:"overlay_menu",model:r.value,popup:!0},null,8,["model"])])])]))}};var bn=function(n){var t=n.dt;return`
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
    background: linear-gradient(90deg, rgba(255, 255, 255, 0), `).concat(t("skeleton.animation.background"),`, rgba(255, 255, 255, 0));
}

[dir='rtl'] .p-skeleton::after {
    animation-name: p-skeleton-animation-rtl;
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

@keyframes p-skeleton-animation-rtl {
    from {
        transform: translateX(100%);
    }
    to {
        transform: translateX(-100%);
    }
}
`)},gn={root:{position:"relative"}},yn={root:function(n){var t=n.props;return["p-skeleton p-component",{"p-skeleton-circle":t.shape==="circle","p-skeleton-animation-none":t.animation==="none"}]}},vn=K.extend({name:"skeleton",theme:bn,classes:yn,inlineStyles:gn}),_n={name:"BaseSkeleton",extends:X,props:{shape:{type:String,default:"rectangle"},size:{type:String,default:null},width:{type:String,default:"100%"},height:{type:String,default:"1rem"},borderRadius:{type:String,default:null},animation:{type:String,default:"wave"}},style:vn,provide:function(){return{$pcSkeleton:this,$parentInstance:this}}},f={name:"Skeleton",extends:_n,inheritAttrs:!1,computed:{containerStyle:function(){return this.size?{width:this.size,height:this.size,borderRadius:this.borderRadius}:{width:this.width,height:this.height,borderRadius:this.borderRadius}}}};function wn(e,n,t,i,r,o){return s(),c("div",b({class:e.cx("root"),style:[e.sx("root"),o.containerStyle],"aria-hidden":"true"},e.ptmi("root")),null,16)}f.render=wn;const kn={class:"car-snapshot car-snapshot--horizontal border-none rounded-lg p-0 bg-white flex-col xl:flex-row flex"},Cn={class:"car-snapshot__horizontal-top flex flex-col lg:flex-row justify-between gap-4 bg-white w-full xl:w-5/6 rounded-md"},xn={class:"car-snapshot__image-container p-4 w-full lg:w-4/12"},Sn={class:"w-7/12"},Ln={class:"flex-col justify-center px-3 w-5/12"},In={class:"car-snapshot__info-container p-4 flex flex-row gap:4 lg:gap-8 w-full lg:w-5/12"},On={class:"car-snapshot__info-container flex flex-col gap-2 w-1/3 justify-center"},$n={class:"car-snapshot__info-container flex flex-col gap-2 w-1/3 justify-center"},An={class:"car-snapshot__info-container flex flex-col gap-2 w-1/3 justify-center"},Tn={class:"car-snapshot__info-container p-5 w-full lg:w-2/12 flex flex-col items-center justify-center"},Vn={class:"car-snapshot__horizontal-bottom p-5 flex gap-4 h-full justify-center items-center w-full xl:w-1/6"},Mn={__name:"SkeletonUnitHorizontal",setup(e){return(n,t)=>(s(),c("div",kn,[l("div",Cn,[l("div",xn,[l("div",Sn,[a(h(f),{width:"100%",height:"5rem"})]),l("div",Ln,[a(h(f),{width:"50%",height:"1rem",class:"mb-2"}),a(h(f),{width:"100%",height:"1.5rem",class:"mb-2"}),a(h(f),{width:"80%%",height:"1rem",class:"mb-2"})])]),l("div",In,[l("div",On,[a(h(f),{size:"2.5rem"}),a(h(f),{width:"50%",height:"1rem"}),a(h(f),{width:"80%",height:"1.5rem"})]),l("div",$n,[a(h(f),{size:"2.5rem"}),a(h(f),{width:"50%",height:"1rem"}),a(h(f),{width:"80%",height:"1.5rem"})]),l("div",An,[a(h(f),{width:"50%",height:"1rem"}),a(h(f),{width:"80%",height:"2rem"})])]),l("div",Tn,[a(h(f),{width:"100%",height:"3rem"})])]),l("div",Vn,[a(h(f),{width:"40%",height:"2rem"}),a(h(f),{width:"40%",height:"2rem"})])]))}},zn={class:"border-none rounded-lg p-6 bg-white"},Bn={class:"flex mb-4 justify-between"},Pn={class:"flex flex-col items-end"},En={class:"flex justify-between mt-4"},Dn={class:"flex justify-between mt-4"},Hn={__name:"SkeletonUnitVertical",setup(e){return(n,t)=>(s(),c("div",zn,[l("div",Bn,[l("div",null,[a(h(f),{width:"8rem",class:"mb-2",height:"1.5rem"}),a(h(f),{width:"4rem",class:"mb-2",height:"1rem"})]),l("div",Pn,[a(h(f),{width:"4rem",class:"mb-2",height:"1.5rem"}),a(h(f),{width:"2rem",class:"mb-2",height:"1rem"})])]),a(h(f),{width:"100%",height:"150px"}),l("div",En,[a(h(f),{width:"6rem",height:"1.5rem"}),a(h(f),{width:"6rem",height:"1.5rem"}),a(h(f),{width:"6rem",height:"1.5rem"})]),l("div",Dn,[a(h(f),{height:"2.5rem",class:"mr-3"}),a(h(f),{width:"2.5rem",height:"2.5rem"})])]))}};var Rn=function(n){var t=n.dt;return`
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
    inset-inline-start: `).concat(t("togglebutton.content.left"),`;
    inset-block-start: `).concat(t("togglebutton.content.top"),`;
    width: calc(100% - calc(2 * `).concat(t("togglebutton.content.left"),`));
    height: calc(100% - calc(2 * `).concat(t("togglebutton.content.top"),`));
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

.p-togglebutton-sm {
    padding: `).concat(t("togglebutton.sm.padding"),`;
    font-size: `).concat(t("togglebutton.sm.font.size"),`;
}

.p-togglebutton-lg {
    padding: `).concat(t("togglebutton.lg.padding"),`;
    font-size: `).concat(t("togglebutton.lg.font.size"),`;
}
`)},Kn={root:function(n){var t=n.instance,i=n.props;return["p-togglebutton p-component",{"p-togglebutton-checked":t.active,"p-invalid":t.$invalid,"p-togglebutton-sm p-inputfield-sm":i.size==="small","p-togglebutton-lg p-inputfield-lg":i.size==="large"}]},content:"p-togglebutton-content",icon:"p-togglebutton-icon",label:"p-togglebutton-label"},Fn=K.extend({name:"togglebutton",theme:Rn,classes:Kn}),Un={name:"BaseToggleButton",extends:re,props:{onIcon:String,offIcon:String,onLabel:{type:String,default:"Yes"},offLabel:{type:String,default:"No"},iconPos:{type:String,default:"left"},readonly:{type:Boolean,default:!1},tabindex:{type:Number,default:null},ariaLabelledby:{type:String,default:null},ariaLabel:{type:String,default:null},size:{type:String,default:null}},style:Fn,provide:function(){return{$pcToggleButton:this,$parentInstance:this}}},ye={name:"ToggleButton",extends:Un,inheritAttrs:!1,emits:["change"],methods:{getPTOptions:function(n){var t=n==="root"?this.ptmi:this.ptm;return t(n,{context:{active:this.active,disabled:this.disabled}})},onChange:function(n){!this.disabled&&!this.readonly&&(this.writeValue(!this.d_value,n),this.$emit("change",n))},onBlur:function(n){var t,i;(t=(i=this.formField).onBlur)===null||t===void 0||t.call(i,n)}},computed:{active:function(){return this.d_value===!0},hasLabel:function(){return ne(this.onLabel)&&ne(this.offLabel)},label:function(){return this.hasLabel?this.d_value?this.onLabel:this.offLabel:" "}},directives:{ripple:G}},jn=["tabindex","disabled","aria-pressed","aria-labelledby","data-p-checked","data-p-disabled"];function Nn(e,n,t,i,r,o){var u=se("ripple");return le((s(),c("button",b({type:"button",class:e.cx("root"),tabindex:e.tabindex,disabled:e.disabled,"aria-pressed":e.d_value,onClick:n[0]||(n[0]=function(){return o.onChange&&o.onChange.apply(o,arguments)}),onBlur:n[1]||(n[1]=function(){return o.onBlur&&o.onBlur.apply(o,arguments)})},o.getPTOptions("root"),{"aria-labelledby":e.ariaLabelledby,"data-p-checked":o.active,"data-p-disabled":e.disabled}),[l("span",b({class:e.cx("content")},o.getPTOptions("content")),[T(e.$slots,"default",{},function(){return[T(e.$slots,"icon",{value:e.d_value,class:B(e.cx("icon"))},function(){return[e.onIcon||e.offIcon?(s(),c("span",b({key:0,class:[e.cx("icon"),e.d_value?e.onIcon:e.offIcon]},o.getPTOptions("icon")),null,16)):w("",!0)]}),l("span",b({class:e.cx("label")},o.getPTOptions("label")),C(o.label),17)]})],16)],16,jn)),[[u]])}ye.render=Nn;var Zn=function(n){var t=n.dt;return`
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
    border-inline-start-width: 1px;
    border-start-start-radius: `).concat(t("selectbutton.border.radius"),`;
    border-end-start-radius: `).concat(t("selectbutton.border.radius"),`;
}

.p-selectbutton .p-togglebutton:last-child {
    border-start-end-radius: `).concat(t("selectbutton.border.radius"),`;
    border-end-end-radius: `).concat(t("selectbutton.border.radius"),`;
}

.p-selectbutton.p-invalid {
    outline: 1px solid `).concat(t("selectbutton.invalid.border.color"),`;
    outline-offset: 0;
}
`)},qn={root:function(n){var t=n.instance;return["p-selectbutton p-component",{"p-invalid":t.$invalid}]}},Wn=K.extend({name:"selectbutton",theme:Zn,classes:qn}),Xn={name:"BaseSelectButton",extends:re,props:{options:Array,optionLabel:null,optionValue:null,optionDisabled:null,multiple:Boolean,allowEmpty:{type:Boolean,default:!0},dataKey:null,ariaLabelledby:{type:String,default:null},size:{type:String,default:null}},style:Wn,provide:function(){return{$pcSelectButton:this,$parentInstance:this}}};function Gn(e,n){var t=typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"];if(!t){if(Array.isArray(e)||(t=ve(e))||n){t&&(e=t);var i=0,r=function(){};return{s:r,n:function(){return i>=e.length?{done:!0}:{done:!1,value:e[i++]}},e:function(g){throw g},f:r}}throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var o,u=!0,m=!1;return{s:function(){t=t.call(e)},n:function(){var g=t.next();return u=g.done,g},e:function(g){m=!0,o=g},f:function(){try{u||t.return==null||t.return()}finally{if(m)throw o}}}}function Qn(e){return eo(e)||Jn(e)||ve(e)||Yn()}function Yn(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function ve(e,n){if(e){if(typeof e=="string")return q(e,n);var t={}.toString.call(e).slice(8,-1);return t==="Object"&&e.constructor&&(t=e.constructor.name),t==="Map"||t==="Set"?Array.from(e):t==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?q(e,n):void 0}}function Jn(e){if(typeof Symbol<"u"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function eo(e){if(Array.isArray(e))return q(e)}function q(e,n){(n==null||n>e.length)&&(n=e.length);for(var t=0,i=Array(n);t<n;t++)i[t]=e[t];return i}var _e={name:"SelectButton",extends:Xn,inheritAttrs:!1,emits:["change"],methods:{getOptionLabel:function(n){return this.optionLabel?H(n,this.optionLabel):n},getOptionValue:function(n){return this.optionValue?H(n,this.optionValue):n},getOptionRenderKey:function(n){return this.dataKey?H(n,this.dataKey):this.getOptionLabel(n)},isOptionDisabled:function(n){return this.optionDisabled?H(n,this.optionDisabled):!1},onOptionSelect:function(n,t,i){var r=this;if(!(this.disabled||this.isOptionDisabled(t))){var o=this.isSelected(t);if(!(o&&!this.allowEmpty)){var u=this.getOptionValue(t),m;this.multiple?o?m=this.d_value.filter(function(d){return!j(d,u,r.equalityKey)}):m=this.d_value?[].concat(Qn(this.d_value),[u]):[u]:m=o?null:u,this.writeValue(m,n),this.$emit("change",{event:n,value:m})}}},isSelected:function(n){var t=!1,i=this.getOptionValue(n);if(this.multiple){if(this.d_value){var r=Gn(this.d_value),o;try{for(r.s();!(o=r.n()).done;){var u=o.value;if(j(u,i,this.equalityKey)){t=!0;break}}}catch(m){r.e(m)}finally{r.f()}}}else t=j(this.d_value,i,this.equalityKey);return t}},computed:{equalityKey:function(){return this.optionValue?null:this.dataKey}},directives:{ripple:G},components:{ToggleButton:ye}},to=["aria-labelledby"];function no(e,n,t,i,r,o){var u=N("ToggleButton");return s(),c("div",b({class:e.cx("root"),role:"group","aria-labelledby":e.ariaLabelledby},e.ptmi("root")),[(s(!0),c(x,null,R(e.options,function(m,d){return s(),k(u,{key:o.getOptionRenderKey(m),modelValue:o.isSelected(m),onLabel:o.getOptionLabel(m),offLabel:o.getOptionLabel(m),disabled:e.disabled||o.isOptionDisabled(m),unstyled:e.unstyled,size:e.size,readonly:!e.allowEmpty&&o.isSelected(m),onChange:function(p){return o.onOptionSelect(p,m,d)},pt:e.ptm("pcToggleButton")},He({_:2},[e.$slots.option?{name:"default",fn:V(function(){return[T(e.$slots,"option",{option:m,index:d},function(){return[l("span",b({ref_for:!0},e.ptm("pcToggleButton").label),C(o.getOptionLabel(m)),17)]})]}),key:"0"}:void 0]),1032,["modelValue","onLabel","offLabel","disabled","unstyled","size","readonly","onChange","pt"])}),128))],16,to)}_e.render=no;const oo={class:"page page-units"},io={class:"page-content"},ao={class:"page-content-top mb-3 pb-1 flex gap-2 flex-wrap"},so={class:"page-content-center"},lo={class:"page-content-bottom"},ro={__name:"UnitsView",setup(e){const n=v("grid"),t=v(["list","grid"]),i=v(""),r=v(),o=v({types:[{name:"Convertible"},{name:"Hatchback"},{name:"Sedan"},{name:"SUV"},{name:"Truck"},{name:"Minivan"}]}),u=v(),m=v({types:[{name:"Available"},{name:"Unavailable"},{name:"Maintenance"}]}),d=v(!1),g=v(null),p=v(8),S=v(0),M=v(0),$=v(["","","","","","","",""]),P=v(!0),A=async()=>{var _,L;P.value=!0;try{const y=await ie.getCars({expression:i==null?void 0:i.value,type:(_=r==null?void 0:r.value)==null?void 0:_.name,status:(L=u==null?void 0:u.value)==null?void 0:L.name},"brand_asc",S.value,p.value);if(!y.ok)throw new Error("Failed to load data");$.value=y.data,M.value=y.total}catch(y){console.error(y)}finally{P.value=!1}},we=_=>{i.value=_,A()},ke=_=>{r.value=_,A()},Ce=_=>{u.value=_,A()},xe=({page:_,rows:L})=>{S.value=_,p.value=L,A()},Q=_=>{g.value=_,d.value=!0},Y=()=>{g.value=null,d.value=!1},Se=()=>{Le(g.value),Y()},Le=_=>{ie.deleteCar(_),A()};return Re(A),(_,L)=>(s(),c("div",oo,[a(Fe,{title:"Units"}),l("div",io,[l("div",ao,[a(Ke,{placeholder:"Search for car, etc",onSearchInput:we,filter:i.value},null,8,["filter"]),a(oe,{options:o.value.types,selected:r.value,placeholder:"Car Type",onChangeSort:ke,class:"sort-by-types"},null,8,["options","selected"]),a(oe,{options:m.value.types,selected:u.value,placeholder:"Status",onChangeSort:Ce,class:"sort-by-status"},null,8,["options","selected"]),a(h(_e),{modelValue:n.value,"onUpdate:modelValue":L[0]||(L[0]=y=>n.value=y),options:t.value,allowEmpty:!1,class:"ml-auto cars-toggle-menu"},{option:V(({option:y})=>[y==="list"?(s(),k(tt,{key:0,color:"currentColor"})):w("",!0),y==="grid"?(s(),k(Ye,{key:1,color:"currentColor"})):w("",!0)]),_:1},8,["modelValue","options"]),a(z,{label:"Add unit",severity:"primary",size:"small",class:"ml-0 add-new-car"})]),l("div",so,[$.value.length?(s(),c("div",{key:0,class:B(["car-list",`car-list-${n.value}`])},[(s(!0),c(x,null,R($.value,y=>(s(),c(x,{key:y==null?void 0:y.id},[n.value==="grid"?(s(),c(x,{key:0},[P.value?(s(),k(Hn,{key:0})):(s(),k(fn,b({key:1,ref_for:!0},y,{onDeleteOption:Ie=>Q(y.id)}),null,16,["onDeleteOption"]))],64)):(s(),c(x,{key:1},[P.value?(s(),k(Mn,{key:0})):(s(),k(Tt,b({key:1,ref_for:!0},y,{onDeleteOption:Ie=>Q(y.id)}),null,16,["onDeleteOption"]))],64))],64))),128))],2)):(s(),k(h(We),{key:1,severity:"secondary",class:"w-full mt-5 mb-5"},{default:V(()=>L[1]||(L[1]=[W("No cars were found matching your criteria.")])),_:1}))]),l("div",lo,[a(qe,{limit:p.value,total:M.value,onPageChange:xe},null,8,["limit","total"])]),a(Ue,{showDialog:d.value,onApplyConfirmation:Se,onHide:Y},null,8,["showDialog"])])]))}},bo=O(ro,[["__scopeId","data-v-326aa764"]]);export{bo as default};
