import{K as s,L as l,M as d,O as u,R as a,S as f,T as M,W as C,X as g,g as e,i as c,j as r,r as n,s as p,t as m}from"./chunk-3CHWTR6Z.js";var y=[{path:"about",component:f},{path:"contact",component:M},{path:"countries",loadChildren:()=>import("./chunk-L6FEN565.js").then(o=>o.CountriesModule)},{path:"**",redirectTo:"countries"}],A=(()=>{class o{static \u0275fac=function(t){return new(t||o)};static \u0275mod=r({type:o});static \u0275inj=e({imports:[a.forRoot(y),a]})}return o})();var b=(()=>{class o{title="countryApp";static \u0275fac=function(t){return new(t||o)};static \u0275cmp=c({type:o,selectors:[["app-root"]],decls:5,vars:0,consts:[[1,"row","mt-4"],[1,"col-3"],[1,"col"]],template:function(t,w){t&1&&(n(0,"div",0)(1,"div",1),m(2,"shared-sidebar"),p(),n(3,"div",2),m(4,"router-outlet"),p()())},dependencies:[u,C]})}return o})();var v=(()=>{class o{static \u0275fac=function(t){return new(t||o)};static \u0275mod=r({type:o,bootstrap:[b]});static \u0275inj=e({imports:[d,A,g,s]})}return o})();l().bootstrapModule(v,{ngZoneEventCoalescing:!0}).catch(o=>console.error(o));
