import{r as o,o as h,c as k,a as t,b as l,w as f,u as b,m as y,d as C,P as B,S,_ as w,e as P,s as x}from"./index-CuyuB9MZ.js";import{_ as I}from"./MainButton-BQAYDC6S.js";import{C as V}from"./CustomPagination-DkyLdQdI.js";const $={class:"page page-bookings"},A={class:"page-content"},E={class:"module"},N={class:"module-head flex justify-center items-center gap-4"},j={class:"page-content-bottom"},O={__name:"BookingsView",setup(z){const s=o(""),u=o(),c=o(15),d=o(0),g=o(0),r=o(!0),i=async()=>{var e;r.value=!0;try{const a=await y.getBookings({expression:s==null?void 0:s.value,status:(e=n==null?void 0:n.value)==null?void 0:e.name},null,g.value,c.value);if(!a.ok)throw new Error("Failed to load data");u.value=a.data,d.value=a.total}catch(a){a.value=a.message}finally{r.value=!1}},m=({page:e,rows:a})=>{g.value=e,c.value=a,i()},n=o(),v=o({types:[{name:"Returned"},{name:"Ongoing"},{name:"Cancelled"}]}),p=e=>{n.value=e,i()},_=e=>{s.value=e,i()};return h(()=>{i()}),(e,a)=>(C(),k("div",$,[t(B,{title:"Bookings"}),l("div",A,[t(b(x),{class:"booking-table-module mt-4"},{content:f(()=>[l("div",E,[l("div",N,[a[0]||(a[0]=l("h3",{class:"module-head-title"},"Car Bookings",-1)),t(S,{placeholder:"Search for car, etc",onSearchInput:_,filter:s.value,class:"ml-auto",variant:"dark"},null,8,["filter"]),t(w,{options:v.value.types,selected:n.value,placeholder:"Status",onChangeSort:p,variant:"dark",class:"sort-by-status"},null,8,["options","selected"]),t(I,{label:"Add booking",severity:"primary",size:"small",class:"add-booking"})])]),t(P,{bookings:u.value,loading:r.value},null,8,["bookings","loading"]),l("div",j,[t(V,{limit:c.value,total:d.value,onPageChange:m},null,8,["limit","total"])])]),_:1})])]))}};export{O as default};
