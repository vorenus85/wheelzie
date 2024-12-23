import{e as u,c as m,b as i,k as R,t as $,a as l,l as x,n as Z,F as D,m as Ke,g as I,w as C,h as E,u as c,p as Fe,f as U,B as q,U as ve,Z as se,q as Q,v as J,x as ye,y as je,z as Ne,A as re,C as We,D as Xe,O as Ze,E as qe,G as be,H as Ye,I as y,R as fe,J as xe,K as Ce,L as we,M as ce,T as Ge,N,Q as X,r as w,V as Qe,W as ke,X as ge,Y as ee,$ as de,a0 as Je,a1 as et,a2 as tt,a3 as nt,a4 as at,a5 as H,a6 as F,a7 as W,a8 as te,a9 as ne,aa as it,ab as ot,ac as lt,o as st,S as rt,_ as _e,P as dt}from"./index-WWrSMJmy.js";import{n as ut,s as ct,a as pt,b as mt,_ as ht}from"./index-9ewDun5D.js";import bt from"./iconCapacity-BusLlNux.js";import ft from"./iconTransmission-RP5skhea.js";import gt from"./iconFuel-Ce0T0exV.js";import{C as vt,s as yt}from"./index-ENsQHgNd.js";const wt={xmlns:"http://www.w3.org/2000/svg",width:"18",height:"18",viewBox:"0 0 18 18",fill:"none"},kt=["fill"],_t={__name:"iconGrid",props:{color:{type:String,default:"#14191F"}},setup(e){return(t,n)=>(u(),m("svg",wt,[i("path",{d:"M14.0625 2.8125H3.9375C3.63913 2.8125 3.35298 2.93103 3.142 3.142C2.93103 3.35298 2.8125 3.63913 2.8125 3.9375V14.0625C2.8125 14.3609 2.93103 14.647 3.142 14.858C3.35298 15.069 3.63913 15.1875 3.9375 15.1875H14.0625C14.3609 15.1875 14.647 15.069 14.858 14.858C15.069 14.647 15.1875 14.3609 15.1875 14.0625V3.9375C15.1875 3.63913 15.069 3.35298 14.858 3.142C14.647 2.93103 14.3609 2.8125 14.0625 2.8125ZM14.0625 8.4375H9.5625V3.9375H14.0625V8.4375ZM8.4375 3.9375V8.4375H3.9375V3.9375H8.4375ZM3.9375 9.5625H8.4375V14.0625H3.9375V9.5625ZM14.0625 14.0625H9.5625V9.5625H14.0625V14.0625Z",fill:e.color},null,8,kt)]))}},St={xmlns:"http://www.w3.org/2000/svg",width:"18",height:"18",viewBox:"0 0 18 18",fill:"none"},xt=["fill"],Ct={__name:"iconList",props:{color:{type:String,default:"#14191F"}},setup(e){return(t,n)=>(u(),m("svg",St,[i("path",{d:"M15.75 9C15.75 9.14918 15.6907 9.29226 15.5852 9.39775C15.4798 9.50324 15.3367 9.5625 15.1875 9.5625H2.8125C2.66332 9.5625 2.52024 9.50324 2.41475 9.39775C2.30926 9.29226 2.25 9.14918 2.25 9C2.25 8.85082 2.30926 8.70774 2.41475 8.60225C2.52024 8.49676 2.66332 8.4375 2.8125 8.4375H15.1875C15.3367 8.4375 15.4798 8.49676 15.5852 8.60225C15.6907 8.70774 15.75 8.85082 15.75 9ZM2.8125 5.0625H15.1875C15.3367 5.0625 15.4798 5.00324 15.5852 4.89775C15.6907 4.79226 15.75 4.64918 15.75 4.5C15.75 4.35082 15.6907 4.20774 15.5852 4.10225C15.4798 3.99676 15.3367 3.9375 15.1875 3.9375H2.8125C2.66332 3.9375 2.52024 3.99676 2.41475 4.10225C2.30926 4.20774 2.25 4.35082 2.25 4.5C2.25 4.64918 2.30926 4.79226 2.41475 4.89775C2.52024 5.00324 2.66332 5.0625 2.8125 5.0625ZM15.1875 12.9375H2.8125C2.66332 12.9375 2.52024 12.9968 2.41475 13.1023C2.30926 13.2077 2.25 13.3508 2.25 13.5C2.25 13.6492 2.30926 13.7923 2.41475 13.8977C2.52024 14.0032 2.66332 14.0625 2.8125 14.0625H15.1875C15.3367 14.0625 15.4798 14.0032 15.5852 13.8977C15.6907 13.7923 15.75 13.6492 15.75 13.5C15.75 13.3508 15.6907 13.2077 15.5852 13.1023C15.4798 12.9968 15.3367 12.9375 15.1875 12.9375Z",fill:e.color},null,8,xt)]))}},Lt={class:"car-snapshot__brand pr-1"},It={__name:"CarBrand",props:{brand:String,size:{type:String,default:"",validator:e=>["small",""].includes(e)}},setup(e){return(t,n)=>(u(),m("span",Lt,$(e.brand),1))}},Le=R(It,[["__scopeId","data-v-73e0a495"]]),$t={class:"car-snapshot__capacity car-snapshot__info-with-icon"},Dt={class:"car-snapshot__info-icon"},At={key:0,class:"car-snapshot__info-label-title"},Ot={class:"car-snapshot__info-label-value"},Ie={__name:"CarCapacity",props:{capacity:Number,showLabel:{type:Boolean,default:!1}},setup(e){return(t,n)=>(u(),m("div",$t,[i("span",Dt,[l(bt)]),e.showLabel?(u(),m("span",At,"Capacity")):x("",!0),i("span",Ot,$(e.capacity)+" seats",1)]))}},Mt=["src","alt","title"],$e={__name:"CarImage",props:{image:String,brand:String,model:String,block:Boolean},setup(e){function t(n){const s=new URL(import.meta.url).origin;return new URL(`/wheelzie/images/cars/${n}`,s).href}return(n,o)=>(u(),m("img",{src:t(e.image),alt:e.brand+" "+e.model,title:e.brand+" "+e.model,width:"300",height:"150",class:Z(["car-snapshot__image",{"w-full":e.block,"h-auto":e.block}])},null,10,Mt))}},Vt={class:"car-snapshot__model"},Pt={__name:"CarModel",props:{model:String},setup(e){return(t,n)=>(u(),m("span",Vt,$(e.model),1))}},De=R(Pt,[["__scopeId","data-v-ccdaf149"]]),Bt={key:0,class:"car-snapshot__info-label-title"},Et={class:"car-snapshot__price pb-1"},zt={__name:"CarPrice",props:{price:Number,showLabel:{type:Boolean,default:!1}},setup(e){return(t,n)=>(u(),m(D,null,[e.showLabel?(u(),m("span",Bt,"Price")):x("",!0),i("strong",Et,"$"+$(e.price),1),n[0]||(n[0]=i("div",{class:"car-snapshot__daily-text pt-1"},"/days",-1))],64))}},Ae=R(zt,[["__scopeId","data-v-69ad4c88"]]),Tt={__name:"CarStatus",props:{status:String},setup(e){const t=e,n=Ke(()=>{let o="";return t.status==="Unavailable"&&(o="secondary"),t.status==="Available"&&(o="contrast"),t.status==="Maintenance"&&(o="danger"),o});return(o,s)=>(u(),I(c(Fe),{severity:n.value,class:Z(["car-snapshot__status",`car-snapshot__status-${e.status}`])},{default:C(()=>[E($(e.status),1)]),_:1},8,["severity","class"]))}},Oe=R(Tt,[["__scopeId","data-v-ab8caf62"]]),Ht={class:"car-snapshot__transmission car-snapshot__info-with-icon"},Ut={class:"car-snapshot__info-icon"},Rt={key:0,class:"car-snapshot__info-label-title"},Kt={class:"car-snapshot__info-label-value"},Me={__name:"CarTransmission",props:{transmission:String,showLabel:{type:Boolean,default:!1}},setup(e){return(t,n)=>(u(),m("div",Ht,[i("span",Ut,[l(ft)]),e.showLabel?(u(),m("span",Rt,"Transmission")):x("",!0),i("span",Kt,$(e.transmission),1)]))}},Ft={class:"car-snapshot car-snapshot--horizontal flex-col xl:flex-row"},jt={class:"car-snapshot__horizontal-top flex flex-col lg:flex-row justify-between gap-4 bg-white w-full xl:w-5/6 rounded-md"},Nt={class:"car-snapshot__image-container p-4 w-full lg:w-4/12"},Wt={class:"car-snapshot__info-container flex-col justify-center px-3 w-5/12"},Xt={class:"car-snapshot__info-container-item"},Zt={class:"car-snapshot__info-container p-4 flex flex-row gap:4 lg:gap-8 w-full lg:w-5/12"},qt={class:"car-snapshot__info-container w-1/3"},Yt={class:"car-snapshot__info-container w-1/3"},Gt={class:"car-snapshot__info-container p-4 flex-col justify-center w-1/3"},Qt={class:"car-snapshot__info-container p-5 w-full lg:w-2/12 flex flex-col items-center justify-center"},Jt={class:"car-snapshot__horizontal-bottom p-5 flex gap-4 h-full justify-center items-center w-full xl:w-1/6"},en={__name:"CarSnapshotHorizontal",props:{id:String,brand:String,model:String,type:String,price:Number,image:String,status:String,transmission:String,capacity:Number,fuel:String},emits:["delete-option","modify-option"],setup(e,{emit:t}){const n=t,o=()=>{n("modify-option")},s=()=>{n("delete-option")};return(a,r)=>(u(),m("div",Ft,[i("div",jt,[i("div",Nt,[l($e,{brand:e.brand,image:e.image,model:e.model,class:"w-7/12"},null,8,["brand","image","model"]),i("div",Wt,[l(Le,{brand:e.brand},null,8,["brand"]),l(De,{model:e.model,class:"mb-2"},null,8,["model"]),i("div",Xt,[l(Oe,{status:e.status},null,8,["status"])])])]),i("div",Zt,[i("div",qt,[l(Me,{transmission:e.transmission,showLabel:""},null,8,["transmission"])]),i("div",Yt,[l(Ie,{capacity:e.capacity,showLabel:""},null,8,["capacity"])]),i("div",Gt,[l(Ae,{price:e.price,showLabel:""},null,8,["price"])])]),i("div",Qt,[l(U,{severity:"primary",label:"Select",block:""})])]),i("div",Jt,[l(U,{size:"small",label:"Edit",onClick:o}),l(U,{size:"small",label:"Delete",onClick:s})])]))}},tn=R(en,[["__scopeId","data-v-9013698b"]]),nn={class:"ccar-snapshot__fuel car-snapshot__info-with-icon"},an={class:"car-snapshot__info-icon"},on={key:0,class:"car-snapshot__info-label-title"},ln={class:"car-snapshot__info-label-value"},sn={__name:"CarFuel",props:{fuel:String,showLabel:{type:Boolean,default:!1}},setup(e){return(t,n)=>(u(),m("div",nn,[i("span",an,[l(gt)]),e.showLabel?(u(),m("span",on,"Fuel type")):x("",!0),i("span",ln,$(e.fuel),1)]))}},rn={class:"unit-car-id"},dn={__name:"CarId",props:{id:String},setup(e){return(t,n)=>(u(),m("div",rn,[i("strong",null,$(e.id),1)]))}},un={class:"car-snapshot__type"},cn={__name:"CarType",props:{type:String},setup(e){return(t,n)=>(u(),m("div",un,$(e.type),1))}},pn=R(cn,[["__scopeId","data-v-21f99e22"]]);var mn=function(t){var n=t.dt;return`
.p-menu {
    background: `.concat(n("menu.background"),`;
    color: `).concat(n("menu.color"),`;
    border: 1px solid `).concat(n("menu.border.color"),`;
    border-radius: `).concat(n("menu.border.radius"),`;
    min-width: 12.5rem;
}

.p-menu-list {
    margin: 0;
    padding: `).concat(n("menu.list.padding"),`;
    outline: 0 none;
    list-style: none;
    display: flex;
    flex-direction: column;
    gap: `).concat(n("menu.list.gap"),`;
}

.p-menu-item-content {
    transition: background `).concat(n("menu.transition.duration"),", color ").concat(n("menu.transition.duration"),`;
    border-radius: `).concat(n("menu.item.border.radius"),`;
    color: `).concat(n("menu.item.color"),`;
}

.p-menu-item-link {
    cursor: pointer;
    display: flex;
    align-items: center;
    text-decoration: none;
    overflow: hidden;
    position: relative;
    color: inherit;
    padding: `).concat(n("menu.item.padding"),`;
    gap: `).concat(n("menu.item.gap"),`;
    user-select: none;
    outline: 0 none;
}

.p-menu-item-label {
    line-height: 1;
}

.p-menu-item-icon {
    color: `).concat(n("menu.item.icon.color"),`;
}

.p-menu-item.p-focus .p-menu-item-content {
    color: `).concat(n("menu.item.focus.color"),`;
    background: `).concat(n("menu.item.focus.background"),`;
}

.p-menu-item.p-focus .p-menu-item-icon {
    color: `).concat(n("menu.item.icon.focus.color"),`;
}

.p-menu-item:not(.p-disabled) .p-menu-item-content:hover {
    color: `).concat(n("menu.item.focus.color"),`;
    background: `).concat(n("menu.item.focus.background"),`;
}

.p-menu-item:not(.p-disabled) .p-menu-item-content:hover .p-menu-item-icon {
    color: `).concat(n("menu.item.icon.focus.color"),`;
}

.p-menu-overlay {
    box-shadow: `).concat(n("menu.shadow"),`;
}

.p-menu-submenu-label {
    background: `).concat(n("menu.submenu.label.background"),`;
    padding: `).concat(n("menu.submenu.label.padding"),`;
    color: `).concat(n("menu.submenu.label.color"),`;
    font-weight: `).concat(n("menu.submenu.label.font.weight"),`;
}

.p-menu-separator {
    border-block-start: 1px solid `).concat(n("menu.separator.border.color"),`;
}
`)},hn={root:function(t){var n=t.props;return["p-menu p-component",{"p-menu-overlay":n.popup}]},start:"p-menu-start",list:"p-menu-list",submenuLabel:"p-menu-submenu-label",separator:"p-menu-separator",end:"p-menu-end",item:function(t){var n=t.instance;return["p-menu-item",{"p-focus":n.id===n.focusedOptionId,"p-disabled":n.disabled()}]},itemContent:"p-menu-item-content",itemLink:"p-menu-item-link",itemIcon:"p-menu-item-icon",itemLabel:"p-menu-item-label"},bn=q.extend({name:"menu",theme:mn,classes:hn}),fn={name:"BaseMenu",extends:be,props:{popup:{type:Boolean,default:!1},model:{type:Array,default:null},appendTo:{type:[String,Object],default:"body"},autoZIndex:{type:Boolean,default:!0},baseZIndex:{type:Number,default:0},tabindex:{type:Number,default:0},ariaLabel:{type:String,default:null},ariaLabelledby:{type:String,default:null}},style:bn,provide:function(){return{$pcMenu:this,$parentInstance:this}}},Ve={name:"Menuitem",hostName:"Menu",extends:be,inheritAttrs:!1,emits:["item-click","item-mousemove"],props:{item:null,templates:null,id:null,focusedOptionId:null,index:null},methods:{getItemProp:function(t,n){return t&&t.item?Ye(t.item[n]):void 0},getPTOptions:function(t){return this.ptm(t,{context:{item:this.item,index:this.index,focused:this.isItemFocused(),disabled:this.disabled()}})},isItemFocused:function(){return this.focusedOptionId===this.id},onItemClick:function(t){var n=this.getItemProp(this.item,"command");n&&n({originalEvent:t,item:this.item.item}),this.$emit("item-click",{originalEvent:t,item:this.item,id:this.id})},onItemMouseMove:function(t){this.$emit("item-mousemove",{originalEvent:t,item:this.item,id:this.id})},visible:function(){return typeof this.item.visible=="function"?this.item.visible():this.item.visible!==!1},disabled:function(){return typeof this.item.disabled=="function"?this.item.disabled():this.item.disabled},label:function(){return typeof this.item.label=="function"?this.item.label():this.item.label},getMenuItemProps:function(t){return{action:y({class:this.cx("itemLink"),tabindex:"-1"},this.getPTOptions("itemLink")),icon:y({class:[this.cx("itemIcon"),t.icon]},this.getPTOptions("itemIcon")),label:y({class:this.cx("itemLabel")},this.getPTOptions("itemLabel"))}}},directives:{ripple:fe}},gn=["id","aria-label","aria-disabled","data-p-focused","data-p-disabled"],vn=["href","target"];function yn(e,t,n,o,s,a){var r=xe("ripple");return a.visible()?(u(),m("li",y({key:0,id:n.id,class:[e.cx("item"),n.item.class],role:"menuitem",style:n.item.style,"aria-label":a.label(),"aria-disabled":a.disabled()},a.getPTOptions("item"),{"data-p-focused":a.isItemFocused(),"data-p-disabled":a.disabled()||!1}),[i("div",y({class:e.cx("itemContent"),onClick:t[0]||(t[0]=function(p){return a.onItemClick(p)}),onMousemove:t[1]||(t[1]=function(p){return a.onItemMouseMove(p)})},a.getPTOptions("itemContent")),[n.templates.item?n.templates.item?(u(),I(we(n.templates.item),{key:1,item:n.item,label:a.label(),props:a.getMenuItemProps(n.item)},null,8,["item","label","props"])):x("",!0):Ce((u(),m("a",y({key:0,href:n.item.url,class:e.cx("itemLink"),target:n.item.target,tabindex:"-1"},a.getPTOptions("itemLink")),[n.templates.itemicon?(u(),I(we(n.templates.itemicon),{key:0,item:n.item,class:Z(e.cx("itemIcon"))},null,8,["item","class"])):n.item.icon?(u(),m("span",y({key:1,class:[e.cx("itemIcon"),n.item.icon]},a.getPTOptions("itemIcon")),null,16)):x("",!0),i("span",y({class:e.cx("itemLabel")},a.getPTOptions("itemLabel")),$(a.label()),17)],16,vn)),[[r]])],16)],16,gn)):x("",!0)}Ve.render=yn;function Se(e){return Sn(e)||_n(e)||kn(e)||wn()}function wn(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function kn(e,t){if(e){if(typeof e=="string")return pe(e,t);var n={}.toString.call(e).slice(8,-1);return n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set"?Array.from(e):n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?pe(e,t):void 0}}function _n(e){if(typeof Symbol<"u"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function Sn(e){if(Array.isArray(e))return pe(e)}function pe(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,o=Array(t);n<t;n++)o[n]=e[n];return o}var Pe={name:"Menu",extends:fn,inheritAttrs:!1,emits:["show","hide","focus","blur"],data:function(){return{id:this.$attrs.id,overlayVisible:!1,focused:!1,focusedOptionIndex:-1,selectedOptionIndex:-1}},watch:{"$attrs.id":function(t){this.id=t||ve()}},target:null,outsideClickListener:null,scrollHandler:null,resizeListener:null,container:null,list:null,mounted:function(){this.id=this.id||ve(),this.popup||(this.bindResizeListener(),this.bindOutsideClickListener())},beforeUnmount:function(){this.unbindResizeListener(),this.unbindOutsideClickListener(),this.scrollHandler&&(this.scrollHandler.destroy(),this.scrollHandler=null),this.target=null,this.container&&this.autoZIndex&&se.clear(this.container),this.container=null},methods:{itemClick:function(t){var n=t.item;this.disabled(n)||(n.command&&n.command(t),this.overlayVisible&&this.hide(),!this.popup&&this.focusedOptionIndex!==t.id&&(this.focusedOptionIndex=t.id))},itemMouseMove:function(t){this.focused&&(this.focusedOptionIndex=t.id)},onListFocus:function(t){this.focused=!0,!this.popup&&this.changeFocusedOptionIndex(0),this.$emit("focus",t)},onListBlur:function(t){this.focused=!1,this.focusedOptionIndex=-1,this.$emit("blur",t)},onListKeyDown:function(t){switch(t.code){case"ArrowDown":this.onArrowDownKey(t);break;case"ArrowUp":this.onArrowUpKey(t);break;case"Home":this.onHomeKey(t);break;case"End":this.onEndKey(t);break;case"Enter":case"NumpadEnter":this.onEnterKey(t);break;case"Space":this.onSpaceKey(t);break;case"Escape":this.popup&&(Q(this.target),this.hide());case"Tab":this.overlayVisible&&this.hide();break}},onArrowDownKey:function(t){var n=this.findNextOptionIndex(this.focusedOptionIndex);this.changeFocusedOptionIndex(n),t.preventDefault()},onArrowUpKey:function(t){if(t.altKey&&this.popup)Q(this.target),this.hide(),t.preventDefault();else{var n=this.findPrevOptionIndex(this.focusedOptionIndex);this.changeFocusedOptionIndex(n),t.preventDefault()}},onHomeKey:function(t){this.changeFocusedOptionIndex(0),t.preventDefault()},onEndKey:function(t){this.changeFocusedOptionIndex(J(this.container,'li[data-pc-section="item"][data-p-disabled="false"]').length-1),t.preventDefault()},onEnterKey:function(t){var n=ye(this.list,'li[id="'.concat("".concat(this.focusedOptionIndex),'"]')),o=n&&ye(n,'a[data-pc-section="itemlink"]');this.popup&&Q(this.target),o?o.click():n&&n.click(),t.preventDefault()},onSpaceKey:function(t){this.onEnterKey(t)},findNextOptionIndex:function(t){var n=J(this.container,'li[data-pc-section="item"][data-p-disabled="false"]'),o=Se(n).findIndex(function(s){return s.id===t});return o>-1?o+1:0},findPrevOptionIndex:function(t){var n=J(this.container,'li[data-pc-section="item"][data-p-disabled="false"]'),o=Se(n).findIndex(function(s){return s.id===t});return o>-1?o-1:0},changeFocusedOptionIndex:function(t){var n=J(this.container,'li[data-pc-section="item"][data-p-disabled="false"]'),o=t>=n.length?n.length-1:t<0?0:t;o>-1&&(this.focusedOptionIndex=n[o].getAttribute("id"))},toggle:function(t){this.overlayVisible?this.hide():this.show(t)},show:function(t){this.overlayVisible=!0,this.target=t.currentTarget},hide:function(){this.overlayVisible=!1,this.target=null},onEnter:function(t){je(t,{position:"absolute",top:"0",left:"0"}),this.alignOverlay(),this.bindOutsideClickListener(),this.bindResizeListener(),this.bindScrollListener(),this.autoZIndex&&se.set("menu",t,this.baseZIndex+this.$primevue.config.zIndex.menu),this.popup&&Q(this.list),this.$emit("show")},onLeave:function(){this.unbindOutsideClickListener(),this.unbindResizeListener(),this.unbindScrollListener(),this.$emit("hide")},onAfterLeave:function(t){this.autoZIndex&&se.clear(t)},alignOverlay:function(){Ne(this.container,this.target);var t=re(this.target);t>re(this.container)&&(this.container.style.minWidth=re(this.target)+"px")},bindOutsideClickListener:function(){var t=this;this.outsideClickListener||(this.outsideClickListener=function(n){var o=t.container&&!t.container.contains(n.target),s=!(t.target&&(t.target===n.target||t.target.contains(n.target)));t.overlayVisible&&o&&s?t.hide():!t.popup&&o&&s&&(t.focusedOptionIndex=-1)},document.addEventListener("click",this.outsideClickListener))},unbindOutsideClickListener:function(){this.outsideClickListener&&(document.removeEventListener("click",this.outsideClickListener),this.outsideClickListener=null)},bindScrollListener:function(){var t=this;this.scrollHandler||(this.scrollHandler=new We(this.target,function(){t.overlayVisible&&t.hide()})),this.scrollHandler.bindScrollListener()},unbindScrollListener:function(){this.scrollHandler&&this.scrollHandler.unbindScrollListener()},bindResizeListener:function(){var t=this;this.resizeListener||(this.resizeListener=function(){t.overlayVisible&&!Xe()&&t.hide()},window.addEventListener("resize",this.resizeListener))},unbindResizeListener:function(){this.resizeListener&&(window.removeEventListener("resize",this.resizeListener),this.resizeListener=null)},visible:function(t){return typeof t.visible=="function"?t.visible():t.visible!==!1},disabled:function(t){return typeof t.disabled=="function"?t.disabled():t.disabled},label:function(t){return typeof t.label=="function"?t.label():t.label},onOverlayClick:function(t){Ze.emit("overlay-click",{originalEvent:t,target:this.target})},containerRef:function(t){this.container=t},listRef:function(t){this.list=t}},computed:{focusedOptionId:function(){return this.focusedOptionIndex!==-1?this.focusedOptionIndex:null}},components:{PVMenuitem:Ve,Portal:qe}},xn=["id"],Cn=["id","tabindex","aria-activedescendant","aria-label","aria-labelledby"],Ln=["id"];function In(e,t,n,o,s,a){var r=ce("PVMenuitem"),p=ce("Portal");return u(),I(p,{appendTo:e.appendTo,disabled:!e.popup},{default:C(function(){return[l(Ge,y({name:"p-connected-overlay",onEnter:a.onEnter,onLeave:a.onLeave,onAfterLeave:a.onAfterLeave},e.ptm("transition")),{default:C(function(){return[!e.popup||s.overlayVisible?(u(),m("div",y({key:0,ref:a.containerRef,id:s.id,class:e.cx("root"),onClick:t[3]||(t[3]=function(){return a.onOverlayClick&&a.onOverlayClick.apply(a,arguments)})},e.ptmi("root")),[e.$slots.start?(u(),m("div",y({key:0,class:e.cx("start")},e.ptm("start")),[N(e.$slots,"start")],16)):x("",!0),i("ul",y({ref:a.listRef,id:s.id+"_list",class:e.cx("list"),role:"menu",tabindex:e.tabindex,"aria-activedescendant":s.focused?a.focusedOptionId:void 0,"aria-label":e.ariaLabel,"aria-labelledby":e.ariaLabelledby,onFocus:t[0]||(t[0]=function(){return a.onListFocus&&a.onListFocus.apply(a,arguments)}),onBlur:t[1]||(t[1]=function(){return a.onListBlur&&a.onListBlur.apply(a,arguments)}),onKeydown:t[2]||(t[2]=function(){return a.onListKeyDown&&a.onListKeyDown.apply(a,arguments)})},e.ptm("list")),[(u(!0),m(D,null,X(e.model,function(h,g){return u(),m(D,{key:a.label(h)+g.toString()},[h.items&&a.visible(h)&&!h.separator?(u(),m(D,{key:0},[h.items?(u(),m("li",y({key:0,id:s.id+"_"+g,class:[e.cx("submenuLabel"),h.class],role:"none",ref_for:!0},e.ptm("submenuLabel")),[N(e.$slots,e.$slots.submenulabel?"submenulabel":"submenuheader",{item:h},function(){return[E($(a.label(h)),1)]})],16,Ln)):x("",!0),(u(!0),m(D,null,X(h.items,function(b,L){return u(),m(D,{key:b.label+g+"_"+L},[a.visible(b)&&!b.separator?(u(),I(r,{key:0,id:s.id+"_"+g+"_"+L,item:b,templates:e.$slots,focusedOptionId:a.focusedOptionId,unstyled:e.unstyled,onItemClick:a.itemClick,onItemMousemove:a.itemMouseMove,pt:e.pt},null,8,["id","item","templates","focusedOptionId","unstyled","onItemClick","onItemMousemove","pt"])):a.visible(b)&&b.separator?(u(),m("li",y({key:"separator"+g+L,class:[e.cx("separator"),h.class],style:b.style,role:"separator",ref_for:!0},e.ptm("separator")),null,16)):x("",!0)],64)}),128))],64)):a.visible(h)&&h.separator?(u(),m("li",y({key:"separator"+g.toString(),class:[e.cx("separator"),h.class],style:h.style,role:"separator",ref_for:!0},e.ptm("separator")),null,16)):(u(),I(r,{key:a.label(h)+g.toString(),id:s.id+"_"+g,item:h,index:g,templates:e.$slots,focusedOptionId:a.focusedOptionId,unstyled:e.unstyled,onItemClick:a.itemClick,onItemMousemove:a.itemMouseMove,pt:e.pt},null,8,["id","item","index","templates","focusedOptionId","unstyled","onItemClick","onItemMousemove","pt"]))],64)}),128))],16,Cn),e.$slots.end?(u(),m("div",y({key:1,class:e.cx("end")},e.ptm("end")),[N(e.$slots,"end")],16)):x("",!0)],16,xn)):x("",!0)]}),_:3},16,["onEnter","onLeave","onAfterLeave"])]}),_:3},8,["appendTo","disabled"])}Pe.render=In;const $n={class:"car-snapshot car-snapshot--vertical flex-col p-4"},Dn={class:"car-snapshot__info-container align-top justify-between items-center"},An={class:"car-snapshot__attributes flex flex-col"},On={class:"car-snapshot__brand-&-model"},Mn={class:"car-snapshot__price-per-day flex flex-col items-end"},Vn={class:"car-snapshot__image-container"},Pn={class:"car-snapshot__info-container justify-between items-center"},Bn={class:"car-snapshot__info-container gap-6 items-center"},En={class:"car-snapshot_actions flex gap-2 w-full"},zn={class:"car-snapshot_link w-full"},Tn={class:"car-snapshot__more-action"},Hn={__name:"CarSnapshotVertical",props:{id:String,brand:String,model:String,type:String,price:Number,image:String,status:String,transmission:String,capacity:Number,fuel:String},emits:["delete-option","modify-option"],setup(e,{emit:t}){const n=t,o=w(),s=w([{items:[{label:"Edit",icon:"pi pi-pencil",command:()=>r()},{label:"Delete",icon:"pi pi-trash",command:()=>p()}]}]),a=h=>{o.value.toggle(h)},r=()=>{n("modify-option")},p=()=>{n("delete-option")};return(h,g)=>(u(),m("div",$n,[i("div",Dn,[i("div",An,[i("div",On,[l(Le,{brand:e.brand},null,8,["brand"]),l(De,{model:e.model},null,8,["model"])]),l(pn,{type:e.type},null,8,["type"])]),i("div",Mn,[l(Ae,{price:e.price},null,8,["price"])])]),i("div",Vn,[l($e,{brand:e.brand,image:e.image,model:e.model,block:""},null,8,["brand","image","model"])]),i("div",Pn,[l(Oe,{status:e.status},null,8,["status"]),l(dn,{id:e.id},null,8,["id"])]),i("div",Bn,[l(Me,{transmission:e.transmission},null,8,["transmission"]),l(Ie,{capacity:e.capacity},null,8,["capacity"]),l(sn,{fuel:e.fuel},null,8,["fuel"])]),i("div",En,[i("div",zn,[l(U,{label:"Select Car",severity:"primary",block:""})]),i("div",Tn,[l(c(Qe),{type:"button",severity:"secondary",icon:"pi pi-ellipsis-h",onClick:a,"aria-haspopup":"true","aria-controls":"overlay_menu",class:"p-3"}),l(c(Pe),{ref_key:"menu",ref:o,id:"overlay_menu",model:s.value,popup:!0},null,8,["model"])])])]))}};var Un=function(t){var n=t.dt;return`
.p-skeleton {
    overflow: hidden;
    background: `.concat(n("skeleton.background"),`;
    border-radius: `).concat(n("skeleton.border.radius"),`;
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
    background: linear-gradient(90deg, rgba(255, 255, 255, 0), `).concat(n("skeleton.animation.background"),`, rgba(255, 255, 255, 0));
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
`)},Rn={root:{position:"relative"}},Kn={root:function(t){var n=t.props;return["p-skeleton p-component",{"p-skeleton-circle":n.shape==="circle","p-skeleton-animation-none":n.animation==="none"}]}},Fn=q.extend({name:"skeleton",theme:Un,classes:Kn,inlineStyles:Rn}),jn={name:"BaseSkeleton",extends:be,props:{shape:{type:String,default:"rectangle"},size:{type:String,default:null},width:{type:String,default:"100%"},height:{type:String,default:"1rem"},borderRadius:{type:String,default:null},animation:{type:String,default:"wave"}},style:Fn,provide:function(){return{$pcSkeleton:this,$parentInstance:this}}},k={name:"Skeleton",extends:jn,inheritAttrs:!1,computed:{containerStyle:function(){return this.size?{width:this.size,height:this.size,borderRadius:this.borderRadius}:{width:this.width,height:this.height,borderRadius:this.borderRadius}}}};function Nn(e,t,n,o,s,a){return u(),m("div",y({class:e.cx("root"),style:[e.sx("root"),a.containerStyle],"aria-hidden":"true"},e.ptmi("root")),null,16)}k.render=Nn;const Wn={class:"car-snapshot car-snapshot--horizontal border-none rounded-lg p-0 bg-white flex-col xl:flex-row flex"},Xn={class:"car-snapshot__horizontal-top flex flex-col lg:flex-row justify-between gap-4 bg-white w-full xl:w-5/6 rounded-md"},Zn={class:"car-snapshot__image-container p-4 w-full lg:w-4/12"},qn={class:"w-7/12"},Yn={class:"flex-col justify-center px-3 w-5/12"},Gn={class:"car-snapshot__info-container p-4 flex flex-row gap:4 lg:gap-8 w-full lg:w-5/12"},Qn={class:"car-snapshot__info-container flex flex-col gap-2 w-1/3 justify-center"},Jn={class:"car-snapshot__info-container flex flex-col gap-2 w-1/3 justify-center"},ea={class:"car-snapshot__info-container flex flex-col gap-2 w-1/3 justify-center"},ta={class:"car-snapshot__info-container p-5 w-full lg:w-2/12 flex flex-col items-center justify-center"},na={class:"car-snapshot__horizontal-bottom p-5 flex gap-4 h-full justify-center items-center w-full xl:w-1/6"},aa={__name:"SkeletonUnitHorizontal",setup(e){return(t,n)=>(u(),m("div",Wn,[i("div",Xn,[i("div",Zn,[i("div",qn,[l(c(k),{width:"100%",height:"5rem"})]),i("div",Yn,[l(c(k),{width:"50%",height:"1rem",class:"mb-2"}),l(c(k),{width:"100%",height:"1.5rem",class:"mb-2"}),l(c(k),{width:"80%%",height:"1rem",class:"mb-2"})])]),i("div",Gn,[i("div",Qn,[l(c(k),{size:"2.5rem"}),l(c(k),{width:"50%",height:"1rem"}),l(c(k),{width:"80%",height:"1.5rem"})]),i("div",Jn,[l(c(k),{size:"2.5rem"}),l(c(k),{width:"50%",height:"1rem"}),l(c(k),{width:"80%",height:"1.5rem"})]),i("div",ea,[l(c(k),{width:"50%",height:"1rem"}),l(c(k),{width:"80%",height:"2rem"})])]),i("div",ta,[l(c(k),{width:"100%",height:"3rem"})])]),i("div",na,[l(c(k),{width:"40%",height:"2rem"}),l(c(k),{width:"40%",height:"2rem"})])]))}},ia={class:"border-none rounded-lg p-6 bg-white"},oa={class:"flex mb-4 justify-between"},la={class:"flex flex-col items-end"},sa={class:"flex justify-between mt-4"},ra={class:"flex justify-between mt-4"},da={__name:"SkeletonUnitVertical",setup(e){return(t,n)=>(u(),m("div",ia,[i("div",oa,[i("div",null,[l(c(k),{width:"8rem",class:"mb-2",height:"1.5rem"}),l(c(k),{width:"4rem",class:"mb-2",height:"1rem"})]),i("div",la,[l(c(k),{width:"4rem",class:"mb-2",height:"1.5rem"}),l(c(k),{width:"2rem",class:"mb-2",height:"1rem"})])]),l(c(k),{width:"100%",height:"150px"}),i("div",sa,[l(c(k),{width:"6rem",height:"1.5rem"}),l(c(k),{width:"6rem",height:"1.5rem"}),l(c(k),{width:"6rem",height:"1.5rem"})]),i("div",ra,[l(c(k),{height:"2.5rem",class:"mr-3"}),l(c(k),{width:"2.5rem",height:"2.5rem"})])]))}},ua=[{id:"CAR-001",brand:"Aston Martin",model:"DB12 Volante",type:"Convertible",price:20,image:"aston_martin.png",status:"Unavailable",transmission:"Automatic",capacity:2,fuel:"Petrol",topSpeed:"120",range:"400",acceleration:"8.0",description:""},{id:"CAR-002",brand:"Hyundai",model:"Sonata",type:"Sedan",price:45,image:"hyundai_sonata.png",status:"Available",transmission:"Manual",capacity:5,fuel:"Petrol",topSpeed:"120",range:"400",acceleration:"8.0",description:""},{id:"CAR-003",brand:"Nissan",model:"Ariya",type:"Hatchback",price:55,image:"nissan_ariya.png",status:"Maintenance",transmission:"Automatic",capacity:5,fuel:"Hybrid",topSpeed:"120",range:"400",acceleration:"8.0",description:""},{id:"CAR-004",brand:"Range Rover",model:"Velar",type:"SUV",price:140,image:"range_rover_velar.png",status:"Available",transmission:"Automatic",capacity:7,fuel:"Diesel",topSpeed:"120",range:"400",acceleration:"8.0",description:""},{id:"CAR-005",brand:"BMW",model:"LX3",type:"SUV",price:120,image:"bmw_lx3.png",status:"Available",transmission:"Automatic",capacity:7,fuel:"Hybrid",topSpeed:"120",range:"400",acceleration:"8.0",description:""},{id:"CAR-006",brand:"Audi",model:"Q7",type:"SUV",price:130,image:"audi_q7.png",status:"Available",transmission:"Automatic",capacity:7,fuel:"Diesel",topSpeed:"120",range:"400",acceleration:"8.0",description:""},{id:"CAR-007",brand:"Mercedes",model:"S-Class",type:"Sedan",price:100,image:"merci_s_class.png",status:"Available",transmission:"Automatic",capacity:5,fuel:"Petrol",topSpeed:"120",range:"400",acceleration:"8.0",description:""},{id:"CAR-008",brand:"Kia",model:"EV6",type:"Hatchback",price:40,image:"kia_ev6.png",status:"Available",transmission:"Manual",capacity:5,fuel:"Hybrid",topSpeed:"120",range:"400",acceleration:"8.0",description:""},{id:"CAR-009",brand:"Volkswagen",model:"Amarok",type:"Truck",price:80,image:"vw_amarok.png",status:"Unavailable",transmission:"Automatic",capacity:5,fuel:"Diesel",topSpeed:"120",range:"400",acceleration:"8.0",description:""}],j=[...ua],Be=[{label:"SUV"},{label:"Sedan"},{label:"Hatchback"},{label:"Coupe"},{label:"Convertible"},{label:"Truck"},{label:"Van"},{label:"Wagon"},{label:"Crossover"},{label:"Minivan"}],ca=[{label:"Air Conditioning",key:"1"},{label:"Bluetooth Connectivity",key:"2"},{label:"Backup Camera",key:"3"},{label:"Cruise Control",key:"4"},{label:"Keyless Entry",key:"5"},{label:"Power Windows and Locks",key:"6"},{label:"AM/FM Radio with CD Player",key:"7"},{label:"USB Charging Ports",key:"8"},{label:"Spacious Trunk",key:"9"},{label:"Advanced Safety Features (e.g., Lane Departure Warning, Automatic Emergency Braking)",key:"10"}],Ee=[{label:"Available"},{label:"Unavailable"},{label:"Maintenance"}],pa=[{label:"Automatic"},{label:"Manual"}],ma=[{label:"Petrol"},{label:"Diesel"},{label:"Electric"},{label:"Hybrid"}],ze=[{label:"Toyota",models:[{label:"Corolla"},{label:"Camry"},{label:"Yaris"},{label:"Avalon"}]},{label:"Aston Martin",models:[{label:"DB11"},{label:"DB12 Volante"},{label:"DBS"},{label:"Vantage"},{label:"Rapide"}]},{label:"Hyundai",models:[{label:"Accent"},{label:"Sonata"},{label:"Ioniq"},{label:"Palisade"}]},{label:"BMW",models:[{label:"5 Series"},{label:"7 Series"},{label:"X1"},{label:"LX3"},{label:"X5"},{label:"X7"}]},{label:"Kia",models:[{label:"Optima"},{label:"Stinger"},{label:"Soul"},{label:"Sportage"},{label:"EV6"}]},{label:"Mercedes-Benz",models:[{label:"C-Class"},{label:"E-Class"},{label:"S-Class"},{label:"GLA"},{label:"GLC"},{label:"GLE"},{label:"GLS"}]},{label:"Nissan",models:[{label:"Ariya"},{label:"Maxima"},{label:"Rogue"},{label:"Murano"},{label:"Pathfinder"}]},{label:"Range Rover",models:[{label:"Evoque"},{label:"Velar"},{label:"Sport"},{label:"Vogue"}]},{label:"Volkswagen",models:[{label:"Golf"},{label:"Passat"},{label:"Amarok"},{label:"Touareg"}]},{label:"Audi",models:[{label:"A5"},{label:"A6"},{label:"Q2"},{label:"Q3"},{label:"Q7"},{label:"Q4 e-tron"}]}],ha=ze.map(e=>({label:e.label})),ue={getCars:async(e={},t=null,n=0,o=5)=>{const s=Math.floor(Math.random()*1001)+500;return new Promise(a=>{setTimeout(()=>{let r=[...j];if(e!=null&&e.status&&(r=r.filter(b=>b.status.toLowerCase()===e.status.toLowerCase())),e!=null&&e.type&&(r=r.filter(b=>b.type.toLowerCase()===e.type.toLowerCase())),e!=null&&e.expression&&(r=r.filter(b=>!b.brand||new RegExp(e==null?void 0:e.expression,"i").test(b.brand)||!b.model||new RegExp(e==null?void 0:e.expression,"i").test(b.model)||!b.transmission||new RegExp(e==null?void 0:e.expression,"i").test(b.transmission)||!b.fuel||new RegExp(e==null?void 0:e.expression,"i").test(b.fuel)||!b.id||new RegExp(e==null?void 0:e.expression,"i").test(b.id))),t){const[b,L]=t.split("_");r.sort((O,M)=>L==="asc"?O[b].localeCompare(M[b]):L==="desc"?M[b].localeCompare(O[b]):0)}const p=n===0?0:n*o,h=n===0?o:(n+1)*o,g=r.slice(p,h);a({ok:1,total:r.length,data:g})},s)})},upsertCar:async e=>new Promise(t=>{setTimeout(()=>{const n=j.findIndex(o=>o.id===e.id);if(n!==-1)j[n]={...e};else{const o={...e,id:ut()};j.push(o),t({ok:1,message:"Car added successfully",data:o})}},500)}),deleteCar:async e=>new Promise(t=>{setTimeout(()=>{const n=j.findIndex(o=>o.id===e);if(n!==-1){const o=j.splice(n,1);t({ok:1,message:"Car deleted successfully",data:o})}else t({ok:0,message:"Car not found"})},500)})};var ba=function(t){var n=t.dt;return`
.p-togglebutton {
    display: inline-flex;
    cursor: pointer;
    user-select: none;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    position: relative;
    color: `.concat(n("togglebutton.color"),`;
    background: `).concat(n("togglebutton.background"),`;
    border: 1px solid `).concat(n("togglebutton.border.color"),`;
    padding: `).concat(n("togglebutton.padding"),`;
    font-size: 1rem;
    font-family: inherit;
    font-feature-settings: inherit;
    transition: background `).concat(n("togglebutton.transition.duration"),", color ").concat(n("togglebutton.transition.duration"),", border-color ").concat(n("togglebutton.transition.duration"),`,
        outline-color `).concat(n("togglebutton.transition.duration"),", box-shadow ").concat(n("togglebutton.transition.duration"),`;
    border-radius: `).concat(n("togglebutton.border.radius"),`;
    outline-color: transparent;
    font-weight: `).concat(n("togglebutton.font.weight"),`;
}

.p-togglebutton-content {
    position: relative;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: `).concat(n("togglebutton.gap"),`;
}

.p-togglebutton-label,
.p-togglebutton-icon {
    position: relative;
    transition: none;
}

.p-togglebutton::before {
    content: "";
    background: transparent;
    transition: background `).concat(n("togglebutton.transition.duration"),", color ").concat(n("togglebutton.transition.duration"),", border-color ").concat(n("togglebutton.transition.duration"),`,
            outline-color `).concat(n("togglebutton.transition.duration"),", box-shadow ").concat(n("togglebutton.transition.duration"),`;
    position: absolute;
    inset-inline-start: `).concat(n("togglebutton.content.left"),`;
    inset-block-start: `).concat(n("togglebutton.content.top"),`;
    width: calc(100% - calc(2 * `).concat(n("togglebutton.content.left"),`));
    height: calc(100% - calc(2 * `).concat(n("togglebutton.content.top"),`));
    border-radius: `).concat(n("togglebutton.border.radius"),`;
}

.p-togglebutton.p-togglebutton-checked::before {
    background: `).concat(n("togglebutton.content.checked.background"),`;
    box-shadow: `).concat(n("togglebutton.content.checked.shadow"),`;
}

.p-togglebutton:not(:disabled):not(.p-togglebutton-checked):hover {
    background: `).concat(n("togglebutton.hover.background"),`;
    color: `).concat(n("togglebutton.hover.color"),`;
}

.p-togglebutton.p-togglebutton-checked {
    background: `).concat(n("togglebutton.checked.background"),`;
    border-color: `).concat(n("togglebutton.checked.border.color"),`;
    color: `).concat(n("togglebutton.checked.color"),`;
}

.p-togglebutton:focus-visible {
    box-shadow: `).concat(n("togglebutton.focus.ring.shadow"),`;
    outline: `).concat(n("togglebutton.focus.ring.width")," ").concat(n("togglebutton.focus.ring.style")," ").concat(n("togglebutton.focus.ring.color"),`;
    outline-offset: `).concat(n("togglebutton.focus.ring.offset"),`;
}

.p-togglebutton.p-invalid {
    border-color: `).concat(n("togglebutton.invalid.border.color"),`;
}

.p-togglebutton:disabled {
    opacity: 1;
    cursor: default;
    background: `).concat(n("togglebutton.disabled.background"),`;
    border-color: `).concat(n("togglebutton.disabled.border.color"),`;
    color: `).concat(n("togglebutton.disabled.color"),`;
}

.p-togglebutton-icon {
    color: `).concat(n("togglebutton.icon.color"),`;
}

.p-togglebutton:not(:disabled):not(.p-togglebutton-checked):hover .p-togglebutton-icon {
    color: `).concat(n("togglebutton.icon.hover.color"),`;
}

.p-togglebutton.p-togglebutton-checked .p-togglebutton-icon {
    color: `).concat(n("togglebutton.icon.checked.color"),`;
}

.p-togglebutton:disabled .p-togglebutton-icon {
    color: `).concat(n("togglebutton.icon.disabled.color"),`;
}

.p-togglebutton-sm {
    padding: `).concat(n("togglebutton.sm.padding"),`;
    font-size: `).concat(n("togglebutton.sm.font.size"),`;
}

.p-togglebutton-lg {
    padding: `).concat(n("togglebutton.lg.padding"),`;
    font-size: `).concat(n("togglebutton.lg.font.size"),`;
}
`)},fa={root:function(t){var n=t.instance,o=t.props;return["p-togglebutton p-component",{"p-togglebutton-checked":n.active,"p-invalid":n.$invalid,"p-togglebutton-sm p-inputfield-sm":o.size==="small","p-togglebutton-lg p-inputfield-lg":o.size==="large"}]},content:"p-togglebutton-content",icon:"p-togglebutton-icon",label:"p-togglebutton-label"},ga=q.extend({name:"togglebutton",theme:ba,classes:fa}),va={name:"BaseToggleButton",extends:ge,props:{onIcon:String,offIcon:String,onLabel:{type:String,default:"Yes"},offLabel:{type:String,default:"No"},iconPos:{type:String,default:"left"},readonly:{type:Boolean,default:!1},tabindex:{type:Number,default:null},ariaLabelledby:{type:String,default:null},ariaLabel:{type:String,default:null},size:{type:String,default:null}},style:ga,provide:function(){return{$pcToggleButton:this,$parentInstance:this}}},Te={name:"ToggleButton",extends:va,inheritAttrs:!1,emits:["change"],methods:{getPTOptions:function(t){var n=t==="root"?this.ptmi:this.ptm;return n(t,{context:{active:this.active,disabled:this.disabled}})},onChange:function(t){!this.disabled&&!this.readonly&&(this.writeValue(!this.d_value,t),this.$emit("change",t))},onBlur:function(t){var n,o;(n=(o=this.formField).onBlur)===null||n===void 0||n.call(o,t)}},computed:{active:function(){return this.d_value===!0},hasLabel:function(){return ke(this.onLabel)&&ke(this.offLabel)},label:function(){return this.hasLabel?this.d_value?this.onLabel:this.offLabel:" "}},directives:{ripple:fe}},ya=["tabindex","disabled","aria-pressed","aria-labelledby","data-p-checked","data-p-disabled"];function wa(e,t,n,o,s,a){var r=xe("ripple");return Ce((u(),m("button",y({type:"button",class:e.cx("root"),tabindex:e.tabindex,disabled:e.disabled,"aria-pressed":e.d_value,onClick:t[0]||(t[0]=function(){return a.onChange&&a.onChange.apply(a,arguments)}),onBlur:t[1]||(t[1]=function(){return a.onBlur&&a.onBlur.apply(a,arguments)})},a.getPTOptions("root"),{"aria-labelledby":e.ariaLabelledby,"data-p-checked":a.active,"data-p-disabled":e.disabled}),[i("span",y({class:e.cx("content")},a.getPTOptions("content")),[N(e.$slots,"default",{},function(){return[N(e.$slots,"icon",{value:e.d_value,class:Z(e.cx("icon"))},function(){return[e.onIcon||e.offIcon?(u(),m("span",y({key:0,class:[e.cx("icon"),e.d_value?e.onIcon:e.offIcon]},a.getPTOptions("icon")),null,16)):x("",!0)]}),i("span",y({class:e.cx("label")},a.getPTOptions("label")),$(a.label),17)]})],16)],16,ya)),[[r]])}Te.render=wa;var ka=function(t){var n=t.dt;return`
.p-selectbutton {
    display: inline-flex;
    user-select: none;
    vertical-align: bottom;
    outline-color: transparent;
    border-radius: `.concat(n("selectbutton.border.radius"),`;
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
    border-start-start-radius: `).concat(n("selectbutton.border.radius"),`;
    border-end-start-radius: `).concat(n("selectbutton.border.radius"),`;
}

.p-selectbutton .p-togglebutton:last-child {
    border-start-end-radius: `).concat(n("selectbutton.border.radius"),`;
    border-end-end-radius: `).concat(n("selectbutton.border.radius"),`;
}

.p-selectbutton.p-invalid {
    outline: 1px solid `).concat(n("selectbutton.invalid.border.color"),`;
    outline-offset: 0;
}
`)},_a={root:function(t){var n=t.instance;return["p-selectbutton p-component",{"p-invalid":n.$invalid}]}},Sa=q.extend({name:"selectbutton",theme:ka,classes:_a}),xa={name:"BaseSelectButton",extends:ge,props:{options:Array,optionLabel:null,optionValue:null,optionDisabled:null,multiple:Boolean,allowEmpty:{type:Boolean,default:!0},dataKey:null,ariaLabelledby:{type:String,default:null},size:{type:String,default:null}},style:Sa,provide:function(){return{$pcSelectButton:this,$parentInstance:this}}};function Ca(e,t){var n=typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"];if(!n){if(Array.isArray(e)||(n=He(e))||t){n&&(e=n);var o=0,s=function(){};return{s,n:function(){return o>=e.length?{done:!0}:{done:!1,value:e[o++]}},e:function(g){throw g},f:s}}throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var a,r=!0,p=!1;return{s:function(){n=n.call(e)},n:function(){var g=n.next();return r=g.done,g},e:function(g){p=!0,a=g},f:function(){try{r||n.return==null||n.return()}finally{if(p)throw a}}}}function La(e){return Da(e)||$a(e)||He(e)||Ia()}function Ia(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function He(e,t){if(e){if(typeof e=="string")return me(e,t);var n={}.toString.call(e).slice(8,-1);return n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set"?Array.from(e):n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?me(e,t):void 0}}function $a(e){if(typeof Symbol<"u"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function Da(e){if(Array.isArray(e))return me(e)}function me(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,o=Array(t);n<t;n++)o[n]=e[n];return o}var Ue={name:"SelectButton",extends:xa,inheritAttrs:!1,emits:["change"],methods:{getOptionLabel:function(t){return this.optionLabel?ee(t,this.optionLabel):t},getOptionValue:function(t){return this.optionValue?ee(t,this.optionValue):t},getOptionRenderKey:function(t){return this.dataKey?ee(t,this.dataKey):this.getOptionLabel(t)},isOptionDisabled:function(t){return this.optionDisabled?ee(t,this.optionDisabled):!1},onOptionSelect:function(t,n,o){var s=this;if(!(this.disabled||this.isOptionDisabled(n))){var a=this.isSelected(n);if(!(a&&!this.allowEmpty)){var r=this.getOptionValue(n),p;this.multiple?a?p=this.d_value.filter(function(h){return!de(h,r,s.equalityKey)}):p=this.d_value?[].concat(La(this.d_value),[r]):[r]:p=a?null:r,this.writeValue(p,t),this.$emit("change",{event:t,value:p})}}},isSelected:function(t){var n=!1,o=this.getOptionValue(t);if(this.multiple){if(this.d_value){var s=Ca(this.d_value),a;try{for(s.s();!(a=s.n()).done;){var r=a.value;if(de(r,o,this.equalityKey)){n=!0;break}}}catch(p){s.e(p)}finally{s.f()}}}else n=de(this.d_value,o,this.equalityKey);return n}},computed:{equalityKey:function(){return this.optionValue?null:this.dataKey}},directives:{ripple:fe},components:{ToggleButton:Te}},Aa=["aria-labelledby"];function Oa(e,t,n,o,s,a){var r=ce("ToggleButton");return u(),m("div",y({class:e.cx("root"),role:"group","aria-labelledby":e.ariaLabelledby},e.ptmi("root")),[(u(!0),m(D,null,X(e.options,function(p,h){return u(),I(r,{key:a.getOptionRenderKey(p),modelValue:a.isSelected(p),onLabel:a.getOptionLabel(p),offLabel:a.getOptionLabel(p),disabled:e.disabled||a.isOptionDisabled(p),unstyled:e.unstyled,size:e.size,readonly:!e.allowEmpty&&a.isSelected(p),onChange:function(b){return a.onOptionSelect(b,p,h)},pt:e.ptm("pcToggleButton")},Je({_:2},[e.$slots.option?{name:"default",fn:C(function(){return[N(e.$slots,"option",{option:p,index:h},function(){return[i("span",y({ref_for:!0},e.ptm("pcToggleButton").label),$(a.getOptionLabel(p)),17)]})]}),key:"0"}:void 0]),1032,["modelValue","onLabel","offLabel","disabled","unstyled","size","readonly","onChange","pt"])}),128))],16,Aa)}Ue.render=Oa;var Ma=function(t){var n=t.dt;return`
.p-slider {
    position: relative;
    background: `.concat(n("slider.track.background"),`;
    border-radius: `).concat(n("slider.track.border.radius"),`;
}

.p-slider-handle {
    cursor: grab;
    touch-action: none;
    user-select: none;
    display: flex;
    justify-content: center;
    align-items: center;
    height: `).concat(n("slider.handle.height"),`;
    width: `).concat(n("slider.handle.width"),`;
    background: `).concat(n("slider.handle.background"),`;
    border-radius: `).concat(n("slider.handle.border.radius"),`;
    transition: background `).concat(n("slider.transition.duration"),", color ").concat(n("slider.transition.duration"),", border-color ").concat(n("slider.transition.duration"),", box-shadow ").concat(n("slider.transition.duration"),", outline-color ").concat(n("slider.transition.duration"),`;
    outline-color: transparent;
}

.p-slider-handle::before {
    content: "";
    width: `).concat(n("slider.handle.content.width"),`;
    height: `).concat(n("slider.handle.content.height"),`;
    display: block;
    background: `).concat(n("slider.handle.content.background"),`;
    border-radius: `).concat(n("slider.handle.content.border.radius"),`;
    box-shadow: `).concat(n("slider.handle.content.shadow"),`;
    transition: background `).concat(n("slider.transition.duration"),`;
}

.p-slider:not(.p-disabled) .p-slider-handle:hover {
    background: `).concat(n("slider.handle.hover.background"),`;
}

.p-slider:not(.p-disabled) .p-slider-handle:hover::before {
    background: `).concat(n("slider.handle.content.hover.background"),`;
}

.p-slider-handle:focus-visible {
    box-shadow: `).concat(n("slider.handle.focus.ring.shadow"),`;
    outline: `).concat(n("slider.handle.focus.ring.width")," ").concat(n("slider.handle.focus.ring.style")," ").concat(n("slider.handle.focus.ring.color"),`;
    outline-offset: `).concat(n("slider.handle.focus.ring.offset"),`;
}

.p-slider-range {
    display: block;
    background: `).concat(n("slider.range.background"),`;
    border-radius: `).concat(n("slider.border.radius"),`;
}

.p-slider.p-slider-horizontal {
    height: `).concat(n("slider.track.size"),`;
}

.p-slider-horizontal .p-slider-range {
    inset-block-start: 0;
    inset-inline-start: 0;
    height: 100%;
}

.p-slider-horizontal .p-slider-handle {
    inset-block-start: 50%;
    margin-block-start: calc(-1 * calc(`).concat(n("slider.handle.height"),` / 2));
    margin-inline-start: calc(-1 * calc(`).concat(n("slider.handle.width"),` / 2));
}

.p-slider-vertical {
    min-height: 100px;
    width: `).concat(n("slider.track.size"),`;
}

.p-slider-vertical .p-slider-handle {
    inset-inline-start: 50%;
    margin-inline-start: calc(-1 * calc(`).concat(n("slider.handle.width"),` / 2));
    margin-block-end: calc(-1 * calc(`).concat(n("slider.handle.height"),` / 2));
}

.p-slider-vertical .p-slider-range {
    inset-block-end: 0;
    inset-inline-start: 0;
    width: 100%;
}
`)},Va={handle:{position:"absolute"},range:{position:"absolute"}},Pa={root:function(t){var n=t.instance,o=t.props;return["p-slider p-component",{"p-disabled":o.disabled,"p-invalid":n.$invalid,"p-slider-horizontal":o.orientation==="horizontal","p-slider-vertical":o.orientation==="vertical"}]},range:"p-slider-range",handle:"p-slider-handle"},Ba=q.extend({name:"slider",theme:Ma,classes:Pa,inlineStyles:Va}),Ea={name:"BaseSlider",extends:ge,props:{min:{type:Number,default:0},max:{type:Number,default:100},orientation:{type:String,default:"horizontal"},step:{type:Number,default:null},range:{type:Boolean,default:!1},tabindex:{type:Number,default:0},ariaLabelledby:{type:String,default:null},ariaLabel:{type:String,default:null}},style:Ba,provide:function(){return{$pcSlider:this,$parentInstance:this}}};function za(e){return Ra(e)||Ua(e)||Ha(e)||Ta()}function Ta(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Ha(e,t){if(e){if(typeof e=="string")return he(e,t);var n={}.toString.call(e).slice(8,-1);return n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set"?Array.from(e):n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?he(e,t):void 0}}function Ua(e){if(typeof Symbol<"u"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function Ra(e){if(Array.isArray(e))return he(e)}function he(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,o=Array(t);n<t;n++)o[n]=e[n];return o}var Re={name:"Slider",extends:Ea,inheritAttrs:!1,emits:["change","slideend"],dragging:!1,handleIndex:null,initX:null,initY:null,barWidth:null,barHeight:null,dragListener:null,dragEndListener:null,beforeUnmount:function(){this.unbindDragListeners()},methods:{updateDomData:function(){var t=this.$el.getBoundingClientRect();this.initX=t.left+et(),this.initY=t.top+tt(),this.barWidth=this.$el.offsetWidth,this.barHeight=this.$el.offsetHeight},setValue:function(t){var n,o=t.touches?t.touches[0].pageX:t.pageX,s=t.touches?t.touches[0].pageY:t.pageY;this.orientation==="horizontal"?nt(this.$el)?n=(this.initX+this.barWidth-o)*100/this.barWidth:n=(o-this.initX)*100/this.barWidth:n=(this.initY+this.barHeight-s)*100/this.barHeight;var a=(this.max-this.min)*(n/100)+this.min;if(this.step){var r=this.range?this.value[this.handleIndex]:this.value,p=a-r;p<0?a=r+Math.ceil(a/this.step-r/this.step)*this.step:p>0&&(a=r+Math.floor(a/this.step-r/this.step)*this.step)}else a=Math.floor(a);this.updateModel(t,a)},updateModel:function(t,n){var o=parseFloat(n.toFixed(10)),s;this.range?(s=this.value?za(this.value):[],this.handleIndex==0?(o<this.min?o=this.min:o>=this.max&&(o=this.max),s[0]=o):(o>this.max?o=this.max:o<=this.min&&(o=this.min),s[1]=o)):(o<this.min?o=this.min:o>this.max&&(o=this.max),s=o),this.writeValue(s,t),this.$emit("change",s)},onDragStart:function(t,n){this.disabled||(this.$el.setAttribute("data-p-sliding",!0),this.dragging=!0,this.updateDomData(),this.range&&this.value[0]===this.max?this.handleIndex=0:this.handleIndex=n,t.currentTarget.focus())},onDrag:function(t){this.dragging&&this.setValue(t)},onDragEnd:function(t){this.dragging&&(this.dragging=!1,this.$el.setAttribute("data-p-sliding",!1),this.$emit("slideend",{originalEvent:t,value:this.value}))},onBarClick:function(t){this.disabled||at(t.target,"data-pc-section")!=="handle"&&(this.updateDomData(),this.setValue(t))},onMouseDown:function(t,n){this.bindDragListeners(),this.onDragStart(t,n)},onKeyDown:function(t,n){switch(this.handleIndex=n,t.code){case"ArrowDown":case"ArrowLeft":this.decrementValue(t,n),t.preventDefault();break;case"ArrowUp":case"ArrowRight":this.incrementValue(t,n),t.preventDefault();break;case"PageDown":this.decrementValue(t,n,!0),t.preventDefault();break;case"PageUp":this.incrementValue(t,n,!0),t.preventDefault();break;case"Home":this.updateModel(t,this.min),t.preventDefault();break;case"End":this.updateModel(t,this.max),t.preventDefault();break}},onBlur:function(t,n){var o,s;(o=(s=this.formField).onBlur)===null||o===void 0||o.call(s,t)},decrementValue:function(t,n){var o=arguments.length>2&&arguments[2]!==void 0?arguments[2]:!1,s;this.range?this.step?s=this.value[n]-this.step:s=this.value[n]-1:this.step?s=this.value-this.step:!this.step&&o?s=this.value-10:s=this.value-1,this.updateModel(t,s),t.preventDefault()},incrementValue:function(t,n){var o=arguments.length>2&&arguments[2]!==void 0?arguments[2]:!1,s;this.range?this.step?s=this.value[n]+this.step:s=this.value[n]+1:this.step?s=this.value+this.step:!this.step&&o?s=this.value+10:s=this.value+1,this.updateModel(t,s),t.preventDefault()},bindDragListeners:function(){this.dragListener||(this.dragListener=this.onDrag.bind(this),document.addEventListener("mousemove",this.dragListener)),this.dragEndListener||(this.dragEndListener=this.onDragEnd.bind(this),document.addEventListener("mouseup",this.dragEndListener))},unbindDragListeners:function(){this.dragListener&&(document.removeEventListener("mousemove",this.dragListener),this.dragListener=null),this.dragEndListener&&(document.removeEventListener("mouseup",this.dragEndListener),this.dragEndListener=null)},rangeStyle:function(){if(this.range){var t=this.rangeEndPosition>this.rangeStartPosition?this.rangeEndPosition-this.rangeStartPosition:this.rangeStartPosition-this.rangeEndPosition,n=this.rangeEndPosition>this.rangeStartPosition?this.rangeStartPosition:this.rangeEndPosition;return this.horizontal?{"inset-inline-start":n+"%",width:t+"%"}:{bottom:n+"%",height:t+"%"}}else return this.horizontal?{width:this.handlePosition+"%"}:{height:this.handlePosition+"%"}},handleStyle:function(){return this.horizontal?{"inset-inline-start":this.handlePosition+"%"}:{bottom:this.handlePosition+"%"}},rangeStartHandleStyle:function(){return this.horizontal?{"inset-inline-start":this.rangeStartPosition+"%"}:{bottom:this.rangeStartPosition+"%"}},rangeEndHandleStyle:function(){return this.horizontal?{"inset-inline-start":this.rangeEndPosition+"%"}:{bottom:this.rangeEndPosition+"%"}}},computed:{value:function(){var t;if(this.range){var n,o,s,a;return[(n=(o=this.d_value)===null||o===void 0?void 0:o[0])!==null&&n!==void 0?n:this.min,(s=(a=this.d_value)===null||a===void 0?void 0:a[1])!==null&&s!==void 0?s:this.max]}return(t=this.d_value)!==null&&t!==void 0?t:this.min},horizontal:function(){return this.orientation==="horizontal"},vertical:function(){return this.orientation==="vertical"},handlePosition:function(){return this.value<this.min?0:this.value>this.max?100:(this.value-this.min)*100/(this.max-this.min)},rangeStartPosition:function(){return this.value&&this.value[0]!==void 0?this.value[0]<this.min?0:(this.value[0]-this.min)*100/(this.max-this.min):0},rangeEndPosition:function(){return this.value&&this.value.length===2&&this.value[1]!==void 0?this.value[1]>this.max?100:(this.value[1]-this.min)*100/(this.max-this.min):100}}},Ka=["tabindex","aria-valuemin","aria-valuenow","aria-valuemax","aria-labelledby","aria-label","aria-orientation"],Fa=["tabindex","aria-valuemin","aria-valuenow","aria-valuemax","aria-labelledby","aria-label","aria-orientation"],ja=["tabindex","aria-valuemin","aria-valuenow","aria-valuemax","aria-labelledby","aria-label","aria-orientation"];function Na(e,t,n,o,s,a){return u(),m("div",y({class:e.cx("root"),onClick:t[18]||(t[18]=function(){return a.onBarClick&&a.onBarClick.apply(a,arguments)})},e.ptmi("root"),{"data-p-sliding":!1}),[i("span",y({class:e.cx("range"),style:[e.sx("range"),a.rangeStyle()]},e.ptm("range")),null,16),e.range?x("",!0):(u(),m("span",y({key:0,class:e.cx("handle"),style:[e.sx("handle"),a.handleStyle()],onTouchstartPassive:t[0]||(t[0]=function(r){return a.onDragStart(r)}),onTouchmovePassive:t[1]||(t[1]=function(r){return a.onDrag(r)}),onTouchend:t[2]||(t[2]=function(r){return a.onDragEnd(r)}),onMousedown:t[3]||(t[3]=function(r){return a.onMouseDown(r)}),onKeydown:t[4]||(t[4]=function(r){return a.onKeyDown(r)}),onBlur:t[5]||(t[5]=function(r){return a.onBlur(r)}),tabindex:e.tabindex,role:"slider","aria-valuemin":e.min,"aria-valuenow":e.d_value,"aria-valuemax":e.max,"aria-labelledby":e.ariaLabelledby,"aria-label":e.ariaLabel,"aria-orientation":e.orientation},e.ptm("handle")),null,16,Ka)),e.range?(u(),m("span",y({key:1,class:e.cx("handle"),style:[e.sx("handle"),a.rangeStartHandleStyle()],onTouchstartPassive:t[6]||(t[6]=function(r){return a.onDragStart(r,0)}),onTouchmovePassive:t[7]||(t[7]=function(r){return a.onDrag(r)}),onTouchend:t[8]||(t[8]=function(r){return a.onDragEnd(r)}),onMousedown:t[9]||(t[9]=function(r){return a.onMouseDown(r,0)}),onKeydown:t[10]||(t[10]=function(r){return a.onKeyDown(r,0)}),onBlur:t[11]||(t[11]=function(r){return a.onBlur(r,0)}),tabindex:e.tabindex,role:"slider","aria-valuemin":e.min,"aria-valuenow":e.d_value?e.d_value[0]:null,"aria-valuemax":e.max,"aria-labelledby":e.ariaLabelledby,"aria-label":e.ariaLabel,"aria-orientation":e.orientation},e.ptm("startHandler")),null,16,Fa)):x("",!0),e.range?(u(),m("span",y({key:2,class:e.cx("handle"),style:[e.sx("handle"),a.rangeEndHandleStyle()],onTouchstartPassive:t[12]||(t[12]=function(r){return a.onDragStart(r,1)}),onTouchmovePassive:t[13]||(t[13]=function(r){return a.onDrag(r)}),onTouchend:t[14]||(t[14]=function(r){return a.onDragEnd(r)}),onMousedown:t[15]||(t[15]=function(r){return a.onMouseDown(r,1)}),onKeydown:t[16]||(t[16]=function(r){return a.onKeyDown(r,1)}),onBlur:t[17]||(t[17]=function(r){return a.onBlur(r,1)}),tabindex:e.tabindex,role:"slider","aria-valuemin":e.min,"aria-valuenow":e.d_value?e.d_value[1]:null,"aria-valuemax":e.max,"aria-labelledby":e.ariaLabelledby,"aria-label":e.ariaLabel,"aria-orientation":e.orientation},e.ptm("endHandler")),null,16,ja)):x("",!0)],16)}Re.render=Na;const Wa={class:"flex gap-1 my-5"},Xa={class:"w-1/2"},Za={class:"flex gap-1 my-5"},qa={class:"w-1/2"},Ya={class:"flex gap-1 my-5"},Ga={class:"w-1/2 flex items-center justify-start"},Qa={class:"flex gap-1 my-5"},Ja={class:"w-1/2"},ei={class:"flex gap-1 my-5"},ti={class:"w-1/4"},ni={class:"flex gap-1 my-5"},ai={class:"w-1/2"},ii={class:"flex gap-1 my-5"},oi={class:"w-1/2"},li={class:"flex gap-1 my-5"},si={class:"w-1/2"},ri={class:"px-3"},di={class:"flex gap-1 my-5"},ui={class:"w-1/2"},ci={class:"flex gap-1 my-5"},pi={class:"w-1/4"},mi={class:"flex gap-1 my-5"},hi={class:"w-1/4"},bi={class:"flex gap-1 my-5"},fi={class:"w-1/4"},gi={class:"flex gap-1 my-5"},vi={class:"w-1/2"},yi={class:"flex gap-1 my-5"},wi={class:"w-1/2"},ki=["for"],_i={class:"flex gap-2 justify-end mt-5 py-3"},Si={__name:"CarDialog",props:{car:{type:Object,default:()=>({})},showDialog:Boolean},emits:["save","hide"],setup(e,{emit:t}){const n=t,o=w(!1),s=e,a=w("Add new car"),p=w({...{brand:"",model:"",type:"",price:"",image:"",status:"",transmission:"",capacity:1,fuel:"",topSpeed:"",range:"",acceleration:"",description:"",features:[]}}),h=w([]),g=w({label:""}),b=w({label:""}),L=w({label:""}),O=w({label:""}),M=w({label:""}),z=w({label:""}),T=()=>{b.value=null,h.value=g.value?V(g.value.label):[]},V=v=>{var d;return((d=ze.find(A=>A.label===v))==null?void 0:d.models)||[]},ae=w({});H(()=>s.showDialog,v=>{var d,A,P,f,K,G,_;a.value=(d=s.car)!=null&&d.id?"Edit car":"Add new car",p.value={...s.car},g.value={label:(A=s.car)==null?void 0:A.brand},L.value={label:(P=s.car)==null?void 0:P.type},O.value={label:(f=s.car)==null?void 0:f.status},M.value={label:(K=s.car)==null?void 0:K.transmission},z.value={label:(G=s.car)==null?void 0:G.fuel},T(),b.value={label:(_=s.car)==null?void 0:_.model},o.value=v}),H(()=>g.value,v=>{p.value.brand=v==null?void 0:v.label}),H(()=>b.value,v=>{p.value.model=v==null?void 0:v.label}),H(()=>L.value,v=>{p.value.type=v==null?void 0:v.label}),H(()=>O.value,v=>{p.value.status=v==null?void 0:v.label}),H(()=>M.value,v=>{p.value.transmission=v==null?void 0:v.label}),H(()=>z.value,v=>{p.value.fuel=v==null?void 0:v.label});const Y=()=>{n("hide")},ie=()=>{n("save",p.value)},oe=()=>{console.log("Uploaded")};return(v,d)=>(u(),I(c(mt),{header:a.value,visible:o.value,"onUpdate:visible":[d[14]||(d[14]=A=>o.value=A),Y],style:{width:"650px"},modal:!0},{default:C(()=>{var A,P;return[i("form",{onSubmit:lt(ie,["prevent"]),ref:"form"},[i("div",Wa,[d[15]||(d[15]=i("div",{class:"flex items-start pt-3 w-1/2"},[i("label",{for:"brand"},"Brand")],-1)),i("div",Xa,[l(c(F),{id:"brand",size:"small",modelValue:g.value,"onUpdate:modelValue":d[0]||(d[0]=f=>g.value=f),options:c(ha),optionLabel:"label",placeholder:"Select a brand",onChange:T},null,8,["modelValue","options"])])]),i("div",Za,[d[16]||(d[16]=i("div",{class:"flex items-start pt-3 w-1/2"},[i("label",{for:"model"},"Model")],-1)),i("div",qa,[l(c(F),{id:"model",size:"small",modelValue:b.value,"onUpdate:modelValue":d[1]||(d[1]=f=>b.value=f),options:h.value,placeholder:"Select a model",optionLabel:"label",disabled:!((A=g.value)!=null&&A.label)},null,8,["modelValue","options","disabled"])])]),i("div",Ya,[d[17]||(d[17]=i("div",{class:"flex items-start pt-3 w-1/2"},[i("label",{for:"image"},"Image")],-1)),i("div",Ga,[l(c(ct),{mode:"basic",severity:"secondary",name:"image[]",url:"/api/upload",accept:"image/*",maxFileSize:1e6,onUpload:oe,auto:!0,chooseLabel:"Browse"})])]),i("div",Qa,[d[18]||(d[18]=i("div",{class:"flex items-start pt-3 w-1/2"},[i("label",{for:"type"},"Body type")],-1)),i("div",Ja,[l(c(F),{size:"small",id:"type",checkmark:"",modelValue:L.value,"onUpdate:modelValue":d[2]||(d[2]=f=>L.value=f),options:c(Be),filter:"",optionLabel:"label",placeholder:"Select body type"},null,8,["modelValue","options"])])]),i("div",ei,[d[21]||(d[21]=i("div",{class:"flex items-start pt-3 w-1/2"},[i("label",{for:"price"},"Price")],-1)),i("div",ti,[l(c(ne),{size:"small"},{default:C(()=>[l(c(W),null,{default:C(()=>d[19]||(d[19]=[E("$")])),_:1}),l(c(te),{modelValue:p.value.price,"onUpdate:modelValue":d[3]||(d[3]=f=>p.value.price=f),placeholder:"Price"},null,8,["modelValue"]),l(c(W),null,{default:C(()=>d[20]||(d[20]=[E(".00")])),_:1})]),_:1})])]),i("div",ni,[d[22]||(d[22]=i("div",{class:"flex items-start pt-3 w-1/2"},[i("label",{for:"status"},"Status")],-1)),i("div",ai,[l(c(F),{id:"status",size:"small",checkmark:"",modelValue:O.value,"onUpdate:modelValue":d[4]||(d[4]=f=>O.value=f),options:c(Ee),filter:"",optionLabel:"label",placeholder:"Select a status"},null,8,["modelValue","options"])])]),i("div",ii,[d[23]||(d[23]=i("div",{class:"flex items-start pt-3 w-1/2"},[i("label",{for:"transmission"},"Transmission")],-1)),i("div",oi,[l(c(F),{size:"small",id:"transmission",checkmark:"",modelValue:M.value,"onUpdate:modelValue":d[5]||(d[5]=f=>M.value=f),options:c(pa),filter:"",optionLabel:"label",placeholder:"Select a transmission type"},null,8,["modelValue","options"])])]),i("div",li,[d[24]||(d[24]=i("div",{class:"flex items-start pt-3 w-1/2"},[i("label",{for:"capacity"},"Capacity")],-1)),i("div",si,[i("div",null,[l(c(it),{size:"small",modelValue:p.value.capacity,"onUpdate:modelValue":d[6]||(d[6]=f=>p.value.capacity=f),modelModifiers:{number:!0},class:"w-10 mb-4"},null,8,["modelValue"]),i("div",ri,[l(c(Re),{modelValue:p.value.capacity,"onUpdate:modelValue":d[7]||(d[7]=f=>p.value.capacity=f),class:"w-full",min:1,max:8},null,8,["modelValue"])])])])]),i("div",di,[d[25]||(d[25]=i("div",{class:"flex items-start pt-3 w-1/2"},[i("label",{for:"fuel"},"Fuel")],-1)),i("div",ui,[l(c(F),{size:"small",id:"fuel",checkmark:"",modelValue:z.value,"onUpdate:modelValue":d[8]||(d[8]=f=>z.value=f),options:c(ma),filter:"",optionLabel:"label",placeholder:"Select a fuel type"},null,8,["modelValue","options"])])]),i("div",ci,[d[27]||(d[27]=i("div",{class:"flex items-start pt-3 w-1/2"},[i("label",{for:"topSpeed"},"Top speed")],-1)),i("div",pi,[l(c(ne),{size:"small"},{default:C(()=>[l(c(te),{modelValue:p.value.topSpeed,"onUpdate:modelValue":d[9]||(d[9]=f=>p.value.topSpeed=f),modelModifiers:{number:!0}},null,8,["modelValue"]),l(c(W),null,{default:C(()=>d[26]||(d[26]=[E("mph")])),_:1})]),_:1})])]),i("div",mi,[d[29]||(d[29]=i("div",{class:"flex items-start pt-3 w-1/2"},[i("label",{for:"range"},"Range")],-1)),i("div",hi,[l(c(ne),{size:"small"},{default:C(()=>[l(c(te),{modelValue:p.value.range,"onUpdate:modelValue":d[10]||(d[10]=f=>p.value.range=f),modelModifiers:{number:!0}},null,8,["modelValue"]),l(c(W),null,{default:C(()=>d[28]||(d[28]=[E("miles")])),_:1})]),_:1})])]),i("div",bi,[d[31]||(d[31]=i("div",{class:"flex items-start pt-3 w-1/2"},[i("label",{for:"acceleration"},[E("Acceleration "),i("small",null,"(0 - 60 mph)")])],-1)),i("div",fi,[l(c(ne),{size:"small"},{default:C(()=>[l(c(te),{modelValue:p.value.acceleration,"onUpdate:modelValue":d[11]||(d[11]=f=>p.value.acceleration=f),modelModifiers:{number:!0}},null,8,["modelValue"]),l(c(W),null,{default:C(()=>d[30]||(d[30]=[E("sec")])),_:1})]),_:1})])]),i("div",gi,[d[32]||(d[32]=i("div",{class:"flex items-start pt-3 w-1/2"},[i("label",{for:"description"},"Description")],-1)),i("div",vi,[l(c(pt),{invalid:!!((P=ae.value)!=null&&P.description),modelValue:p.value.description,"onUpdate:modelValue":d[12]||(d[12]=f=>p.value.description=f),id:"description",class:"w-full"},null,8,["invalid","modelValue"])])]),i("div",yi,[d[33]||(d[33]=i("div",{class:"flex items-start pt-3 w-1/2"},[i("label",{for:"features"},"Features")],-1)),i("div",wi,[(u(!0),m(D,null,X(c(ca),f=>(u(),m("div",{key:f.key,class:"flex items-center gap-2 mb-2"},[l(c(ot),{modelValue:p.value.features,"onUpdate:modelValue":d[13]||(d[13]=K=>p.value.features=K),inputId:f.key,name:"feature",value:f.label},null,8,["modelValue","inputId","value"]),i("label",{for:f.key},$(f.label),9,ki)]))),128))])]),i("div",_i,[l(U,{label:"Cancel",onClick:Y,outlined:"",severity:"secondary"}),l(U,{label:"Save",type:"submit",severity:"primary",autofocus:""})])],544)]}),_:1},8,["header","visible"]))}},xi={class:"page page-units"},Ci={class:"page-content"},Li={class:"page-content-top mb-3 pb-1 flex gap-2 flex-wrap"},Ii={class:"page-content-center"},$i={class:"page-content-bottom"},Di={__name:"UnitsView",setup(e){const t=w("grid"),n=w(["list","grid"]),o=w(""),s=w(),a=w([...Be]),r=w(),p=w([...Ee]),h=w(!1),g=w(null),b=w(null),L=w(8),O=w(0),M=w(0),z=w(["","","","","","","",""]),T=w(!0),V=async()=>{var _,B;T.value=!0;try{const S=await ue.getCars({expression:o==null?void 0:o.value,type:(_=s==null?void 0:s.value)==null?void 0:_.name,status:(B=r==null?void 0:r.value)==null?void 0:B.name},"brand_asc",O.value,L.value);if(!S.ok)throw new Error("Failed to load data");z.value=S.data,M.value=S.total}catch(S){console.error(S)}finally{T.value=!1}},ae=_=>{o.value=_,V()},Y=_=>{s.value=_,V()},ie=_=>{r.value=_,V()},oe=({page:_,rows:B})=>{O.value=_,L.value=B,V()},v=_=>{g.value=_,h.value=!0},d=()=>{g.value=null,h.value=!1},A=()=>{G(g.value),d()},P=_=>{g.value=_,b.value=!0},f=()=>{b.value=!1},K=_=>{ue.upsertCar(_),f(),V()},G=_=>{ue.deleteCar(_),V()};return st(V),(_,B)=>(u(),m("div",xi,[l(dt,{title:"Units"}),i("div",Ci,[i("div",Li,[l(rt,{placeholder:"Search for car, etc",onSearchInput:ae,filter:o.value},null,8,["filter"]),l(_e,{options:a.value,selected:s.value,placeholder:"Car Type",onChangeSort:Y,class:"sort-by-types"},null,8,["options","selected"]),l(_e,{options:p.value,selected:r.value,placeholder:"Status",onChangeSort:ie,class:"sort-by-status"},null,8,["options","selected"]),l(c(Ue),{modelValue:t.value,"onUpdate:modelValue":B[0]||(B[0]=S=>t.value=S),options:n.value,allowEmpty:!1,class:"ml-auto cars-toggle-menu"},{option:C(({option:S})=>[S==="list"?(u(),I(Ct,{key:0,color:"currentColor"})):x("",!0),S==="grid"?(u(),I(_t,{key:1,color:"currentColor"})):x("",!0)]),_:1},8,["modelValue","options"]),l(U,{label:"Add unit",severity:"primary",size:"small",class:"ml-0 add-new-car",onClick:P})]),i("div",Ii,[z.value.length?(u(),m("div",{key:0,class:Z(["car-list",`car-list-${t.value}`])},[(u(!0),m(D,null,X(z.value,S=>(u(),m(D,{key:S==null?void 0:S.id},[t.value==="grid"?(u(),m(D,{key:0},[T.value?(u(),I(da,{key:0})):(u(),I(Hn,y({key:1,ref_for:!0},S,{onModifyOption:le=>P(S),onDeleteOption:le=>v(S.id)}),null,16,["onModifyOption","onDeleteOption"]))],64)):(u(),m(D,{key:1},[T.value?(u(),I(aa,{key:0})):(u(),I(tn,y({key:1,ref_for:!0},S,{onModifyOption:le=>P(S),onDeleteOption:le=>v(S.id)}),null,16,["onModifyOption","onDeleteOption"]))],64))],64))),128))],2)):(u(),I(c(yt),{key:1,severity:"secondary",class:"w-full mt-5 mb-5"},{default:C(()=>B[1]||(B[1]=[E("No cars were found matching your criteria.")])),_:1}))]),i("div",$i,[l(vt,{limit:L.value,total:M.value,onPageChange:oe},null,8,["limit","total"])]),l(ht,{showDialog:h.value,onApplyConfirmation:A,onHide:d},null,8,["showDialog"])]),l(Si,{car:g.value,showDialog:b.value,onSave:K,onHide:f},null,8,["car","showDialog"])]))}},Ei=R(Di,[["__scopeId","data-v-3a79575c"]]);export{Ei as default};
