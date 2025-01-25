import{B as G,U as te,Z as F,aa as V,f as z,j as ne,b as Ae,d as Me,g as N,C as Ve,i as ze,O as De,t as Be,ab as le,ac as Pe,m as b,R as J,y as re,o as l,c as d,a as s,L as ce,z as _,A,G as ie,E as k,N as P,x as Z,J as T,I as o,T as He,F as I,H as x,K as B,P as ue,ad as oe,ae as de,af as D,ag as R,ah as Ee,ai as pe,aj as me,a0 as S,S as w,W as p,q as Ke,a3 as je,a6 as Fe,a7 as ae,a5 as Ne}from"./index-B3flDyuj.js";import{_ as Re}from"./ConfirmDialog-1-LsRpo8.js";import{_ as fe,C as he,a as be,b as ge,c as $,d as ve,e as Ue,f as Ze,s as h,g as qe}from"./CarDialog-C7FvG0JZ.js";import{a as We,b as Ge,c as U}from"./cars-CWy1_WwM.js";import{b as Je}from"./ErrorMessage-DdLEyoJC.js";import{C as Ye}from"./CustomPagination-C7l7ZB-z.js";var Qe=function(n){var t=n.dt;return`
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
`)},Xe={root:function(n){var t=n.props;return["p-menu p-component",{"p-menu-overlay":t.popup}]},start:"p-menu-start",list:"p-menu-list",submenuLabel:"p-menu-submenu-label",separator:"p-menu-separator",end:"p-menu-end",item:function(n){var t=n.instance;return["p-menu-item",{"p-focus":t.id===t.focusedOptionId,"p-disabled":t.disabled()}]},itemContent:"p-menu-item-content",itemLink:"p-menu-item-link",itemIcon:"p-menu-item-icon",itemLabel:"p-menu-item-label"},et=G.extend({name:"menu",theme:Qe,classes:Xe}),tt={name:"BaseMenu",extends:le,props:{popup:{type:Boolean,default:!1},model:{type:Array,default:null},appendTo:{type:[String,Object],default:"body"},autoZIndex:{type:Boolean,default:!0},baseZIndex:{type:Number,default:0},tabindex:{type:Number,default:0},ariaLabel:{type:String,default:null},ariaLabelledby:{type:String,default:null}},style:et,provide:function(){return{$pcMenu:this,$parentInstance:this}}},ye={name:"Menuitem",hostName:"Menu",extends:le,inheritAttrs:!1,emits:["item-click","item-mousemove"],props:{item:null,templates:null,id:null,focusedOptionId:null,index:null},methods:{getItemProp:function(n,t){return n&&n.item?Pe(n.item[t]):void 0},getPTOptions:function(n){return this.ptm(n,{context:{item:this.item,index:this.index,focused:this.isItemFocused(),disabled:this.disabled()}})},isItemFocused:function(){return this.focusedOptionId===this.id},onItemClick:function(n){var t=this.getItemProp(this.item,"command");t&&t({originalEvent:n,item:this.item.item}),this.$emit("item-click",{originalEvent:n,item:this.item,id:this.id})},onItemMouseMove:function(n){this.$emit("item-mousemove",{originalEvent:n,item:this.item,id:this.id})},visible:function(){return typeof this.item.visible=="function"?this.item.visible():this.item.visible!==!1},disabled:function(){return typeof this.item.disabled=="function"?this.item.disabled():this.item.disabled},label:function(){return typeof this.item.label=="function"?this.item.label():this.item.label},getMenuItemProps:function(n){return{action:b({class:this.cx("itemLink"),tabindex:"-1"},this.getPTOptions("itemLink")),icon:b({class:[this.cx("itemIcon"),n.icon]},this.getPTOptions("itemIcon")),label:b({class:this.cx("itemLabel")},this.getPTOptions("itemLabel"))}}},directives:{ripple:J}},nt=["id","aria-label","aria-disabled","data-p-focused","data-p-disabled"],it=["href","target"];function ot(e,n,t,a,r,i){var m=re("ripple");return i.visible()?(l(),d("li",b({key:0,id:t.id,class:[e.cx("item"),t.item.class],role:"menuitem",style:t.item.style,"aria-label":i.label(),"aria-disabled":i.disabled()},i.getPTOptions("item"),{"data-p-focused":i.isItemFocused(),"data-p-disabled":i.disabled()||!1}),[s("div",b({class:e.cx("itemContent"),onClick:n[0]||(n[0]=function(u){return i.onItemClick(u)}),onMousemove:n[1]||(n[1]=function(u){return i.onItemMouseMove(u)})},i.getPTOptions("itemContent")),[t.templates.item?t.templates.item?(l(),_(ie(t.templates.item),{key:1,item:t.item,label:i.label(),props:i.getMenuItemProps(t.item)},null,8,["item","label","props"])):k("",!0):ce((l(),d("a",b({key:0,href:t.item.url,class:e.cx("itemLink"),target:t.item.target,tabindex:"-1"},i.getPTOptions("itemLink")),[t.templates.itemicon?(l(),_(ie(t.templates.itemicon),{key:0,item:t.item,class:A(e.cx("itemIcon"))},null,8,["item","class"])):t.item.icon?(l(),d("span",b({key:1,class:[e.cx("itemIcon"),t.item.icon]},i.getPTOptions("itemIcon")),null,16)):k("",!0),s("span",b({class:e.cx("itemLabel")},i.getPTOptions("itemLabel")),P(i.label()),17)],16,it)),[[m]])],16)],16,nt)):k("",!0)}ye.render=ot;function se(e){return rt(e)||lt(e)||st(e)||at()}function at(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function st(e,n){if(e){if(typeof e=="string")return q(e,n);var t={}.toString.call(e).slice(8,-1);return t==="Object"&&e.constructor&&(t=e.constructor.name),t==="Map"||t==="Set"?Array.from(e):t==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?q(e,n):void 0}}function lt(e){if(typeof Symbol<"u"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function rt(e){if(Array.isArray(e))return q(e)}function q(e,n){(n==null||n>e.length)&&(n=e.length);for(var t=0,a=Array(n);t<n;t++)a[t]=e[t];return a}var we={name:"Menu",extends:tt,inheritAttrs:!1,emits:["show","hide","focus","blur"],data:function(){return{id:this.$attrs.id,overlayVisible:!1,focused:!1,focusedOptionIndex:-1,selectedOptionIndex:-1}},watch:{"$attrs.id":function(n){this.id=n||te()}},target:null,outsideClickListener:null,scrollHandler:null,resizeListener:null,container:null,list:null,mounted:function(){this.id=this.id||te(),this.popup||(this.bindResizeListener(),this.bindOutsideClickListener())},beforeUnmount:function(){this.unbindResizeListener(),this.unbindOutsideClickListener(),this.scrollHandler&&(this.scrollHandler.destroy(),this.scrollHandler=null),this.target=null,this.container&&this.autoZIndex&&F.clear(this.container),this.container=null},methods:{itemClick:function(n){var t=n.item;this.disabled(t)||(t.command&&t.command(n),this.overlayVisible&&this.hide(),!this.popup&&this.focusedOptionIndex!==n.id&&(this.focusedOptionIndex=n.id))},itemMouseMove:function(n){this.focused&&(this.focusedOptionIndex=n.id)},onListFocus:function(n){this.focused=!0,!this.popup&&this.changeFocusedOptionIndex(0),this.$emit("focus",n)},onListBlur:function(n){this.focused=!1,this.focusedOptionIndex=-1,this.$emit("blur",n)},onListKeyDown:function(n){switch(n.code){case"ArrowDown":this.onArrowDownKey(n);break;case"ArrowUp":this.onArrowUpKey(n);break;case"Home":this.onHomeKey(n);break;case"End":this.onEndKey(n);break;case"Enter":case"NumpadEnter":this.onEnterKey(n);break;case"Space":this.onSpaceKey(n);break;case"Escape":this.popup&&(V(this.target),this.hide());case"Tab":this.overlayVisible&&this.hide();break}},onArrowDownKey:function(n){var t=this.findNextOptionIndex(this.focusedOptionIndex);this.changeFocusedOptionIndex(t),n.preventDefault()},onArrowUpKey:function(n){if(n.altKey&&this.popup)V(this.target),this.hide(),n.preventDefault();else{var t=this.findPrevOptionIndex(this.focusedOptionIndex);this.changeFocusedOptionIndex(t),n.preventDefault()}},onHomeKey:function(n){this.changeFocusedOptionIndex(0),n.preventDefault()},onEndKey:function(n){this.changeFocusedOptionIndex(z(this.container,'li[data-pc-section="item"][data-p-disabled="false"]').length-1),n.preventDefault()},onEnterKey:function(n){var t=ne(this.list,'li[id="'.concat("".concat(this.focusedOptionIndex),'"]')),a=t&&ne(t,'a[data-pc-section="itemlink"]');this.popup&&V(this.target),a?a.click():t&&t.click(),n.preventDefault()},onSpaceKey:function(n){this.onEnterKey(n)},findNextOptionIndex:function(n){var t=z(this.container,'li[data-pc-section="item"][data-p-disabled="false"]'),a=se(t).findIndex(function(r){return r.id===n});return a>-1?a+1:0},findPrevOptionIndex:function(n){var t=z(this.container,'li[data-pc-section="item"][data-p-disabled="false"]'),a=se(t).findIndex(function(r){return r.id===n});return a>-1?a-1:0},changeFocusedOptionIndex:function(n){var t=z(this.container,'li[data-pc-section="item"][data-p-disabled="false"]'),a=n>=t.length?t.length-1:n<0?0:n;a>-1&&(this.focusedOptionIndex=t[a].getAttribute("id"))},toggle:function(n){this.overlayVisible?this.hide():this.show(n)},show:function(n){this.overlayVisible=!0,this.target=n.currentTarget},hide:function(){this.overlayVisible=!1,this.target=null},onEnter:function(n){Ae(n,{position:"absolute",top:"0",left:"0"}),this.alignOverlay(),this.bindOutsideClickListener(),this.bindResizeListener(),this.bindScrollListener(),this.autoZIndex&&F.set("menu",n,this.baseZIndex+this.$primevue.config.zIndex.menu),this.popup&&V(this.list),this.$emit("show")},onLeave:function(){this.unbindOutsideClickListener(),this.unbindResizeListener(),this.unbindScrollListener(),this.$emit("hide")},onAfterLeave:function(n){this.autoZIndex&&F.clear(n)},alignOverlay:function(){Me(this.container,this.target);var n=N(this.target);n>N(this.container)&&(this.container.style.minWidth=N(this.target)+"px")},bindOutsideClickListener:function(){var n=this;this.outsideClickListener||(this.outsideClickListener=function(t){var a=n.container&&!n.container.contains(t.target),r=!(n.target&&(n.target===t.target||n.target.contains(t.target)));n.overlayVisible&&a&&r?n.hide():!n.popup&&a&&r&&(n.focusedOptionIndex=-1)},document.addEventListener("click",this.outsideClickListener))},unbindOutsideClickListener:function(){this.outsideClickListener&&(document.removeEventListener("click",this.outsideClickListener),this.outsideClickListener=null)},bindScrollListener:function(){var n=this;this.scrollHandler||(this.scrollHandler=new Ve(this.target,function(){n.overlayVisible&&n.hide()})),this.scrollHandler.bindScrollListener()},unbindScrollListener:function(){this.scrollHandler&&this.scrollHandler.unbindScrollListener()},bindResizeListener:function(){var n=this;this.resizeListener||(this.resizeListener=function(){n.overlayVisible&&!ze()&&n.hide()},window.addEventListener("resize",this.resizeListener))},unbindResizeListener:function(){this.resizeListener&&(window.removeEventListener("resize",this.resizeListener),this.resizeListener=null)},visible:function(n){return typeof n.visible=="function"?n.visible():n.visible!==!1},disabled:function(n){return typeof n.disabled=="function"?n.disabled():n.disabled},label:function(n){return typeof n.label=="function"?n.label():n.label},onOverlayClick:function(n){De.emit("overlay-click",{originalEvent:n,target:this.target})},containerRef:function(n){this.container=n},listRef:function(n){this.list=n}},computed:{focusedOptionId:function(){return this.focusedOptionIndex!==-1?this.focusedOptionIndex:null}},components:{PVMenuitem:ye,Portal:Be}},ct=["id"],ut=["id","tabindex","aria-activedescendant","aria-label","aria-labelledby"],dt=["id"];function pt(e,n,t,a,r,i){var m=Z("PVMenuitem"),u=Z("Portal");return l(),_(u,{appendTo:e.appendTo,disabled:!e.popup},{default:T(function(){return[o(He,b({name:"p-connected-overlay",onEnter:i.onEnter,onLeave:i.onLeave,onAfterLeave:i.onAfterLeave},e.ptm("transition")),{default:T(function(){return[!e.popup||r.overlayVisible?(l(),d("div",b({key:0,ref:i.containerRef,id:r.id,class:e.cx("root"),onClick:n[3]||(n[3]=function(){return i.onOverlayClick&&i.onOverlayClick.apply(i,arguments)})},e.ptmi("root")),[e.$slots.start?(l(),d("div",b({key:0,class:e.cx("start")},e.ptm("start")),[I(e.$slots,"start")],16)):k("",!0),s("ul",b({ref:i.listRef,id:r.id+"_list",class:e.cx("list"),role:"menu",tabindex:e.tabindex,"aria-activedescendant":r.focused?i.focusedOptionId:void 0,"aria-label":e.ariaLabel,"aria-labelledby":e.ariaLabelledby,onFocus:n[0]||(n[0]=function(){return i.onListFocus&&i.onListFocus.apply(i,arguments)}),onBlur:n[1]||(n[1]=function(){return i.onListBlur&&i.onListBlur.apply(i,arguments)}),onKeydown:n[2]||(n[2]=function(){return i.onListKeyDown&&i.onListKeyDown.apply(i,arguments)})},e.ptm("list")),[(l(!0),d(x,null,B(e.model,function(c,f){return l(),d(x,{key:i.label(c)+f.toString()},[c.items&&i.visible(c)&&!c.separator?(l(),d(x,{key:0},[c.items?(l(),d("li",b({key:0,id:r.id+"_"+f,class:[e.cx("submenuLabel"),c.class],role:"none",ref_for:!0},e.ptm("submenuLabel")),[I(e.$slots,e.$slots.submenulabel?"submenulabel":"submenuheader",{item:c},function(){return[ue(P(i.label(c)),1)]})],16,dt)):k("",!0),(l(!0),d(x,null,B(c.items,function(y,C){return l(),d(x,{key:y.label+f+"_"+C},[i.visible(y)&&!y.separator?(l(),_(m,{key:0,id:r.id+"_"+f+"_"+C,item:y,templates:e.$slots,focusedOptionId:i.focusedOptionId,unstyled:e.unstyled,onItemClick:i.itemClick,onItemMousemove:i.itemMouseMove,pt:e.pt},null,8,["id","item","templates","focusedOptionId","unstyled","onItemClick","onItemMousemove","pt"])):i.visible(y)&&y.separator?(l(),d("li",b({key:"separator"+f+C,class:[e.cx("separator"),c.class],style:y.style,role:"separator",ref_for:!0},e.ptm("separator")),null,16)):k("",!0)],64)}),128))],64)):i.visible(c)&&c.separator?(l(),d("li",b({key:"separator"+f.toString(),class:[e.cx("separator"),c.class],style:c.style,role:"separator",ref_for:!0},e.ptm("separator")),null,16)):(l(),_(m,{key:i.label(c)+f.toString(),id:r.id+"_"+f,item:c,index:f,templates:e.$slots,focusedOptionId:i.focusedOptionId,unstyled:e.unstyled,onItemClick:i.itemClick,onItemMousemove:i.itemMouseMove,pt:e.pt},null,8,["id","item","index","templates","focusedOptionId","unstyled","onItemClick","onItemMousemove","pt"]))],64)}),128))],16,ut),e.$slots.end?(l(),d("div",b({key:1,class:e.cx("end")},e.ptm("end")),[I(e.$slots,"end")],16)):k("",!0)],16,ct)):k("",!0)]}),_:3},16,["onEnter","onLeave","onAfterLeave"])]}),_:3},8,["appendTo","disabled"])}we.render=pt;var mt=function(n){var t=n.dt;return`
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
`)},ft={root:function(n){var t=n.instance,a=n.props;return["p-togglebutton p-component",{"p-togglebutton-checked":t.active,"p-invalid":t.$invalid,"p-togglebutton-sm p-inputfield-sm":a.size==="small","p-togglebutton-lg p-inputfield-lg":a.size==="large"}]},content:"p-togglebutton-content",icon:"p-togglebutton-icon",label:"p-togglebutton-label"},ht=G.extend({name:"togglebutton",theme:mt,classes:ft}),bt={name:"BaseToggleButton",extends:de,props:{onIcon:String,offIcon:String,onLabel:{type:String,default:"Yes"},offLabel:{type:String,default:"No"},iconPos:{type:String,default:"left"},readonly:{type:Boolean,default:!1},tabindex:{type:Number,default:null},ariaLabelledby:{type:String,default:null},ariaLabel:{type:String,default:null},size:{type:String,default:null}},style:ht,provide:function(){return{$pcToggleButton:this,$parentInstance:this}}},_e={name:"ToggleButton",extends:bt,inheritAttrs:!1,emits:["change"],methods:{getPTOptions:function(n){var t=n==="root"?this.ptmi:this.ptm;return t(n,{context:{active:this.active,disabled:this.disabled}})},onChange:function(n){!this.disabled&&!this.readonly&&(this.writeValue(!this.d_value,n),this.$emit("change",n))},onBlur:function(n){var t,a;(t=(a=this.formField).onBlur)===null||t===void 0||t.call(a,n)}},computed:{active:function(){return this.d_value===!0},hasLabel:function(){return oe(this.onLabel)&&oe(this.offLabel)},label:function(){return this.hasLabel?this.d_value?this.onLabel:this.offLabel:" "}},directives:{ripple:J}},gt=["tabindex","disabled","aria-pressed","aria-labelledby","data-p-checked","data-p-disabled"];function vt(e,n,t,a,r,i){var m=re("ripple");return ce((l(),d("button",b({type:"button",class:e.cx("root"),tabindex:e.tabindex,disabled:e.disabled,"aria-pressed":e.d_value,onClick:n[0]||(n[0]=function(){return i.onChange&&i.onChange.apply(i,arguments)}),onBlur:n[1]||(n[1]=function(){return i.onBlur&&i.onBlur.apply(i,arguments)})},i.getPTOptions("root"),{"aria-labelledby":e.ariaLabelledby,"data-p-checked":i.active,"data-p-disabled":e.disabled}),[s("span",b({class:e.cx("content")},i.getPTOptions("content")),[I(e.$slots,"default",{},function(){return[I(e.$slots,"icon",{value:e.d_value,class:A(e.cx("icon"))},function(){return[e.onIcon||e.offIcon?(l(),d("span",b({key:0,class:[e.cx("icon"),e.d_value?e.onIcon:e.offIcon]},i.getPTOptions("icon")),null,16)):k("",!0)]}),s("span",b({class:e.cx("label")},i.getPTOptions("label")),P(i.label),17)]})],16)],16,gt)),[[m]])}_e.render=vt;var yt=function(n){var t=n.dt;return`
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
`)},wt={root:function(n){var t=n.instance;return["p-selectbutton p-component",{"p-invalid":t.$invalid}]}},_t=G.extend({name:"selectbutton",theme:yt,classes:wt}),kt={name:"BaseSelectButton",extends:de,props:{options:Array,optionLabel:null,optionValue:null,optionDisabled:null,multiple:Boolean,allowEmpty:{type:Boolean,default:!0},dataKey:null,ariaLabelledby:{type:String,default:null},size:{type:String,default:null}},style:_t,provide:function(){return{$pcSelectButton:this,$parentInstance:this}}};function Ct(e,n){var t=typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"];if(!t){if(Array.isArray(e)||(t=ke(e))||n){t&&(e=t);var a=0,r=function(){};return{s:r,n:function(){return a>=e.length?{done:!0}:{done:!1,value:e[a++]}},e:function(f){throw f},f:r}}throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var i,m=!0,u=!1;return{s:function(){t=t.call(e)},n:function(){var f=t.next();return m=f.done,f},e:function(f){u=!0,i=f},f:function(){try{m||t.return==null||t.return()}finally{if(u)throw i}}}}function xt(e){return It(e)||Ot(e)||ke(e)||Lt()}function Lt(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function ke(e,n){if(e){if(typeof e=="string")return W(e,n);var t={}.toString.call(e).slice(8,-1);return t==="Object"&&e.constructor&&(t=e.constructor.name),t==="Map"||t==="Set"?Array.from(e):t==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?W(e,n):void 0}}function Ot(e){if(typeof Symbol<"u"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function It(e){if(Array.isArray(e))return W(e)}function W(e,n){(n==null||n>e.length)&&(n=e.length);for(var t=0,a=Array(n);t<n;t++)a[t]=e[t];return a}var Ce={name:"SelectButton",extends:kt,inheritAttrs:!1,emits:["change"],methods:{getOptionLabel:function(n){return this.optionLabel?D(n,this.optionLabel):n},getOptionValue:function(n){return this.optionValue?D(n,this.optionValue):n},getOptionRenderKey:function(n){return this.dataKey?D(n,this.dataKey):this.getOptionLabel(n)},isOptionDisabled:function(n){return this.optionDisabled?D(n,this.optionDisabled):!1},onOptionSelect:function(n,t,a){var r=this;if(!(this.disabled||this.isOptionDisabled(t))){var i=this.isSelected(t);if(!(i&&!this.allowEmpty)){var m=this.getOptionValue(t),u;this.multiple?i?u=this.d_value.filter(function(c){return!R(c,m,r.equalityKey)}):u=this.d_value?[].concat(xt(this.d_value),[m]):[m]:u=i?null:m,this.writeValue(u,n),this.$emit("change",{event:n,value:u})}}},isSelected:function(n){var t=!1,a=this.getOptionValue(n);if(this.multiple){if(this.d_value){var r=Ct(this.d_value),i;try{for(r.s();!(i=r.n()).done;){var m=i.value;if(R(m,a,this.equalityKey)){t=!0;break}}}catch(u){r.e(u)}finally{r.f()}}}else t=R(this.d_value,a,this.equalityKey);return t}},computed:{equalityKey:function(){return this.optionValue?null:this.dataKey}},directives:{ripple:J},components:{ToggleButton:_e}},St=["aria-labelledby"];function $t(e,n,t,a,r,i){var m=Z("ToggleButton");return l(),d("div",b({class:e.cx("root"),role:"group","aria-labelledby":e.ariaLabelledby},e.ptmi("root")),[(l(!0),d(x,null,B(e.options,function(u,c){return l(),_(m,{key:i.getOptionRenderKey(u),modelValue:i.isSelected(u),onLabel:i.getOptionLabel(u),offLabel:i.getOptionLabel(u),disabled:e.disabled||i.isOptionDisabled(u),unstyled:e.unstyled,size:e.size,readonly:!e.allowEmpty&&i.isSelected(u),onChange:function(y){return i.onOptionSelect(y,u,c)},pt:e.ptm("pcToggleButton")},Ee({_:2},[e.$slots.option?{name:"default",fn:T(function(){return[I(e.$slots,"option",{option:u,index:c},function(){return[s("span",b({ref_for:!0},e.ptm("pcToggleButton").label),P(i.getOptionLabel(u)),17)]})]}),key:"0"}:void 0]),1032,["modelValue","onLabel","offLabel","disabled","unstyled","size","readonly","onChange","pt"])}),128))],16,St)}Ce.render=$t;const Tt={xmlns:"http://www.w3.org/2000/svg",width:"18",height:"18",viewBox:"0 0 18 18",fill:"none"},At=["fill"],Mt={__name:"iconGrid",props:{color:{type:String,default:"#14191F"}},setup(e){return(n,t)=>(l(),d("svg",Tt,[s("path",{d:"M14.0625 2.8125H3.9375C3.63913 2.8125 3.35298 2.93103 3.142 3.142C2.93103 3.35298 2.8125 3.63913 2.8125 3.9375V14.0625C2.8125 14.3609 2.93103 14.647 3.142 14.858C3.35298 15.069 3.63913 15.1875 3.9375 15.1875H14.0625C14.3609 15.1875 14.647 15.069 14.858 14.858C15.069 14.647 15.1875 14.3609 15.1875 14.0625V3.9375C15.1875 3.63913 15.069 3.35298 14.858 3.142C14.647 2.93103 14.3609 2.8125 14.0625 2.8125ZM14.0625 8.4375H9.5625V3.9375H14.0625V8.4375ZM8.4375 3.9375V8.4375H3.9375V3.9375H8.4375ZM3.9375 9.5625H8.4375V14.0625H3.9375V9.5625ZM14.0625 14.0625H9.5625V9.5625H14.0625V14.0625Z",fill:e.color},null,8,At)]))}},Vt={xmlns:"http://www.w3.org/2000/svg",width:"18",height:"18",viewBox:"0 0 18 18",fill:"none"},zt=["fill"],Dt={__name:"iconList",props:{color:{type:String,default:"#14191F"}},setup(e){return(n,t)=>(l(),d("svg",Vt,[s("path",{d:"M15.75 9C15.75 9.14918 15.6907 9.29226 15.5852 9.39775C15.4798 9.50324 15.3367 9.5625 15.1875 9.5625H2.8125C2.66332 9.5625 2.52024 9.50324 2.41475 9.39775C2.30926 9.29226 2.25 9.14918 2.25 9C2.25 8.85082 2.30926 8.70774 2.41475 8.60225C2.52024 8.49676 2.66332 8.4375 2.8125 8.4375H15.1875C15.3367 8.4375 15.4798 8.49676 15.5852 8.60225C15.6907 8.70774 15.75 8.85082 15.75 9ZM2.8125 5.0625H15.1875C15.3367 5.0625 15.4798 5.00324 15.5852 4.89775C15.6907 4.79226 15.75 4.64918 15.75 4.5C15.75 4.35082 15.6907 4.20774 15.5852 4.10225C15.4798 3.99676 15.3367 3.9375 15.1875 3.9375H2.8125C2.66332 3.9375 2.52024 3.99676 2.41475 4.10225C2.30926 4.20774 2.25 4.35082 2.25 4.5C2.25 4.64918 2.30926 4.79226 2.41475 4.89775C2.52024 5.00324 2.66332 5.0625 2.8125 5.0625ZM15.1875 12.9375H2.8125C2.66332 12.9375 2.52024 12.9968 2.41475 13.1023C2.30926 13.2077 2.25 13.3508 2.25 13.5C2.25 13.6492 2.30926 13.7923 2.41475 13.8977C2.52024 14.0032 2.66332 14.0625 2.8125 14.0625H15.1875C15.3367 14.0625 15.4798 14.0032 15.5852 13.8977C15.6907 13.7923 15.75 13.6492 15.75 13.5C15.75 13.3508 15.6907 13.2077 15.5852 13.1023C15.4798 12.9968 15.3367 12.9375 15.1875 12.9375Z",fill:e.color},null,8,zt)]))}},Bt={class:"car-snapshot car-snapshot--horizontal flex-col xl:flex-row"},Pt={class:"car-snapshot__horizontal-top flex flex-col lg:flex-row justify-between gap-4 bg-white w-full xl:w-5/6 rounded-md"},Ht={class:"w-7/12"},Et={class:"car-snapshot__info-container flex-col justify-center px-3 w-5/12"},Kt={class:"car-snapshot__info-container-item"},jt={class:"car-snapshot__info-container p-4 flex flex-row gap:4 lg:gap-8 w-full lg:w-5/12"},Ft={class:"car-snapshot__info-container w-1/3"},Nt={class:"car-snapshot__info-container w-1/3"},Rt={class:"car-snapshot__info-container p-4 flex-col justify-center w-1/3"},Ut={class:"car-snapshot__info-container p-5 w-full lg:w-2/12 flex flex-col items-center justify-center"},Zt={class:"car-snapshot__horizontal-bottom p-5 flex gap-4 h-full justify-center items-center w-full xl:w-1/6"},qt=Object.assign({inheritAttrs:!1},{__name:"CarSnapshotHorizontal",props:{id:String,brand:String,model:String,type:String,price:Number,image:String,status:String,transmission:String,capacity:Number,fuel:String},emits:["delete-option","modify-option"],setup(e,{emit:n}){const t=n,a=me(),r=()=>{t("modify-option")},i=()=>{t("delete-option")},m=u=>{a.push({name:"unit",params:{id:u.toLowerCase()}})};return(u,c)=>(l(),d("div",Bt,[s("div",Pt,[s("div",{class:A(["car-snapshot__image-container p-4 w-full lg:w-4/12",{"no-image":e.image.length===0}])},[s("div",Ht,[o(fe,{brand:e.brand,image:e.image,model:e.model,id:e.id},null,8,["brand","image","model","id"])]),s("div",Et,[o(he,{brand:e.brand},null,8,["brand"]),o(be,{model:e.model,class:"mb-2"},null,8,["model"]),s("div",Kt,[o(ge,{status:e.status},null,8,["status"])])])],2),s("div",jt,[s("div",Ft,[o($,{title:"Transmission",icon:"Transmission",data:e.transmission,showLabel:""},null,8,["data"])]),s("div",Nt,[o($,{title:"Capacity",icon:"Capacity",data:`${e.capacity} seats`,showLabel:""},null,8,["data"])]),s("div",Rt,[o(ve,{price:e.price,showLabel:""},null,8,["price"])])]),s("div",Ut,[o(S,{severity:"primary",label:"Select",block:"",onClick:c[0]||(c[0]=f=>m(e.id))})])]),s("div",Zt,[o(S,{size:"small",label:"Edit",onClick:r}),o(S,{size:"small",label:"Delete",onClick:i})])]))}}),Wt=pe(qt,[["__scopeId","data-v-49c5016c"]]),Gt={class:"car-snapshot car-snapshot--vertical flex-col p-4"},Jt={class:"car-snapshot__info-container align-top justify-between items-center"},Yt={class:"car-snapshot__attributes flex flex-col"},Qt={class:"car-snapshot__brand-&-model"},Xt={class:"car-snapshot__price-per-day flex flex-col items-end"},en={class:"car-snapshot__info-container justify-between items-center"},tn={class:"car-snapshot__info-container gap-6 items-center"},nn={class:"car-snapshot_actions flex gap-2 w-full"},on={class:"car-snapshot_link w-full"},an={class:"car-snapshot__more-action"},sn=Object.assign({inheritAttrs:!1},{__name:"CarSnapshotVertical",props:{id:String,brand:String,model:String,bodyType:String,price:Number,image:String,status:String,transmission:String,capacity:Number,fuel:String},emits:["delete-option","modify-option"],setup(e,{emit:n}){const t=me(),a=n,r=w(),i=w([{items:[{label:"Edit",icon:"pi pi-pencil",command:()=>u()},{label:"Delete",icon:"pi pi-trash",command:()=>c()}]}]),m=y=>{r.value.toggle(y)},u=()=>{a("modify-option")},c=()=>{a("delete-option")},f=y=>{t.push({name:"unit",params:{id:y.toLowerCase()}})};return(y,C)=>(l(),d("div",Gt,[s("div",Jt,[s("div",Yt,[s("div",Qt,[o(he,{brand:e.brand},null,8,["brand"]),o(be,{model:e.model},null,8,["model"])]),o(Ue,{bodyType:e.bodyType},null,8,["bodyType"])]),s("div",Xt,[o(ve,{price:e.price},null,8,["price"])])]),s("div",{class:A(["car-snapshot__image-container w-full flex justify-center",{"no-image":e.image.length===0}])},[o(fe,{brand:e.brand,image:e.image,model:e.model,block:"",id:e.id},null,8,["brand","image","model","id"])],2),s("div",en,[o(ge,{status:e.status},null,8,["status"]),o(Ze,{id:e.id},null,8,["id"])]),s("div",tn,[o($,{title:"Transmission",icon:"Transmission",data:e.transmission},null,8,["data"]),o($,{title:"Capacity",icon:"Capacity",data:`${e.capacity} seats`},null,8,["data"]),o($,{title:"Fuel",icon:"Fuel",data:e.fuel},null,8,["data"])]),s("div",nn,[s("div",on,[o(S,{label:"Select Car",severity:"primary",block:"",onClick:C[0]||(C[0]=H=>f(e.id))})]),s("div",an,[o(p(Ke),{type:"button",severity:"secondary",icon:"pi pi-ellipsis-h",onClick:m,"aria-haspopup":"true","aria-controls":"overlay_menu",class:"p-3"}),o(p(we),{ref_key:"menu",ref:r,id:"overlay_menu",model:i.value,popup:!0},null,8,["model"])])])]))}}),ln={class:"car-snapshot car-snapshot--horizontal border-none rounded-lg p-0 bg-white flex-col xl:flex-row flex"},rn={class:"car-snapshot__horizontal-top flex flex-col lg:flex-row justify-between gap-4 bg-white w-full xl:w-5/6 rounded-md"},cn={class:"car-snapshot__image-container p-4 w-full lg:w-4/12"},un={class:"w-7/12"},dn={class:"flex-col justify-center px-3 w-5/12"},pn={class:"car-snapshot__info-container p-4 flex flex-row gap:4 lg:gap-8 w-full lg:w-5/12"},mn={class:"car-snapshot__info-container flex flex-col gap-2 w-1/3 justify-center"},fn={class:"car-snapshot__info-container flex flex-col gap-2 w-1/3 justify-center"},hn={class:"car-snapshot__info-container flex flex-col gap-2 w-1/3 justify-center"},bn={class:"car-snapshot__info-container p-5 w-full lg:w-2/12 flex flex-col items-center justify-center"},gn={class:"car-snapshot__horizontal-bottom p-5 flex gap-4 h-full justify-center items-center w-full xl:w-1/6"},vn={__name:"SkeletonUnitHorizontal",setup(e){return(n,t)=>(l(),d("div",ln,[s("div",rn,[s("div",cn,[s("div",un,[o(p(h),{width:"100%",height:"5rem"})]),s("div",dn,[o(p(h),{width:"50%",height:"1rem",class:"mb-2"}),o(p(h),{width:"100%",height:"1.5rem",class:"mb-2"}),o(p(h),{width:"80%%",height:"1rem",class:"mb-2"})])]),s("div",pn,[s("div",mn,[o(p(h),{size:"2.5rem"}),o(p(h),{width:"50%",height:"1rem"}),o(p(h),{width:"80%",height:"1.5rem"})]),s("div",fn,[o(p(h),{size:"2.5rem"}),o(p(h),{width:"50%",height:"1rem"}),o(p(h),{width:"80%",height:"1.5rem"})]),s("div",hn,[o(p(h),{width:"50%",height:"1rem"}),o(p(h),{width:"80%",height:"2rem"})])]),s("div",bn,[o(p(h),{width:"100%",height:"3rem"})])]),s("div",gn,[o(p(h),{width:"40%",height:"2rem"}),o(p(h),{width:"40%",height:"2rem"})])]))}},yn={class:"border-none rounded-lg p-6 bg-white"},wn={class:"flex mb-4 justify-between"},_n={class:"flex flex-col items-end"},kn={class:"flex justify-between mt-4"},Cn={class:"flex justify-between mt-4"},xn={__name:"SkeletonUnitVertical",setup(e){return(n,t)=>(l(),d("div",yn,[s("div",wn,[s("div",null,[o(p(h),{width:"8rem",class:"mb-2",height:"1.5rem"}),o(p(h),{width:"4rem",class:"mb-2",height:"1rem"})]),s("div",_n,[o(p(h),{width:"4rem",class:"mb-2",height:"1.5rem"}),o(p(h),{width:"2rem",class:"mb-2",height:"1rem"})])]),o(p(h),{width:"100%",height:"150px"}),s("div",kn,[o(p(h),{width:"6rem",height:"1.5rem"}),o(p(h),{width:"6rem",height:"1.5rem"}),o(p(h),{width:"6rem",height:"1.5rem"})]),s("div",Cn,[o(p(h),{height:"2.5rem",class:"mr-3"}),o(p(h),{width:"2.5rem",height:"2.5rem"})])]))}},Ln={class:"page page-units"},On={class:"page-content"},In={class:"page-content-top mb-3 pb-1 flex gap-2 flex-wrap"},Sn={class:"page-content-center"},$n={class:"page-content-bottom"},Tn={__name:"UnitsView",setup(e){const n=w("grid"),t=w(["list","grid"]),a=w(""),r=w(),i=w([...We]),m=w(),u=w([...Ge]),c=w(!1),f=w(null),y=w(null),C=w(8),H=w(0),Y=w(0),E=w(["","","","","","","",""]),M=w(!0),O=async()=>{var v,L;M.value=!0;try{const g=await U.getCars({expression:a==null?void 0:a.value,type:(v=r==null?void 0:r.value)==null?void 0:v.name,status:(L=m==null?void 0:m.value)==null?void 0:L.name},"brand_asc",H.value,C.value);if(!g.ok)throw new Error("Failed to load data");E.value=g.data,Y.value=g.total}catch(g){console.error(g)}finally{M.value=!1}},xe=v=>{a.value=v,O()},Le=v=>{r.value=v,O()},Oe=v=>{m.value=v,O()},Ie=({page:v,rows:L})=>{H.value=v,C.value=L,O()},Q=v=>{f.value=v,c.value=!0},X=()=>{f.value=null,c.value=!1},Se=()=>{Te(f.value),X()},K=v=>{f.value=v,y.value=!0},ee=()=>{y.value=!1},$e=v=>{U.upsertCar(v),ee(),O()},Te=v=>{U.deleteCar(v),O()};return je(O),(v,L)=>(l(),d("div",Ln,[o(Ne,{title:"Units"}),s("div",On,[s("div",In,[o(Fe,{placeholder:"Search for car, etc",onSearchInput:xe,filter:a.value},null,8,["filter"]),o(ae,{options:i.value,selected:r.value,placeholder:"Car Type",onChangeSort:Le,class:"sort-by-types"},null,8,["options","selected"]),o(ae,{options:u.value,selected:m.value,placeholder:"Status",onChangeSort:Oe,class:"sort-by-status"},null,8,["options","selected"]),o(p(Ce),{modelValue:n.value,"onUpdate:modelValue":L[0]||(L[0]=g=>n.value=g),options:t.value,allowEmpty:!1,class:"ml-auto cars-toggle-menu"},{option:T(({option:g})=>[g==="list"?(l(),_(Dt,{key:0,color:"currentColor"})):k("",!0),g==="grid"?(l(),_(Mt,{key:1,color:"currentColor"})):k("",!0)]),_:1},8,["modelValue","options"]),o(S,{label:"Add unit",severity:"primary",size:"small",class:"ml-0 add-new-car",onClick:K})]),s("div",Sn,[E.value.length?(l(),d("div",{key:0,class:A(["car-list",`car-list-${n.value}`])},[(l(!0),d(x,null,B(E.value,g=>(l(),d(x,{key:g==null?void 0:g.id},[n.value==="grid"?(l(),d(x,{key:0},[M.value?(l(),_(xn,{key:0})):(l(),_(sn,b({key:1,ref_for:!0},g,{onModifyOption:j=>K(g),onDeleteOption:j=>Q(g.id)}),null,16,["onModifyOption","onDeleteOption"]))],64)):(l(),d(x,{key:1},[M.value?(l(),_(vn,{key:0})):(l(),_(Wt,b({key:1,ref_for:!0},g,{onModifyOption:j=>K(g),onDeleteOption:j=>Q(g.id)}),null,16,["onModifyOption","onDeleteOption"]))],64))],64))),128))],2)):(l(),_(p(Je),{key:1,severity:"secondary",class:"w-full mt-5 mb-5"},{default:T(()=>L[1]||(L[1]=[ue("No cars were found matching your criteria.")])),_:1}))]),s("div",$n,[o(Ye,{limit:C.value,total:Y.value,onPageChange:Ie},null,8,["limit","total"])]),o(Re,{showDialog:c.value,onApplyConfirmation:Se,onHide:X},null,8,["showDialog"])]),o(qe,{car:f.value,showDialog:y.value,onSave:$e,onHide:ee},null,8,["car","showDialog"])]))}},Pn=pe(Tn,[["__scopeId","data-v-3a79575c"]]);export{Pn as default};
