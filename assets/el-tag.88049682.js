import{b as E,Z as T,a as w,a2 as N,u as M,k as V,o as n,c as $,g as t,r as m,n as o,e as a,q as c,s as r,z as g,bf as k,av as C,au as b,f as h,h as y,al as I,_ as P,w as q}from"./index.1cefbf14.js";const Z=E({closable:Boolean,type:{type:String,values:["success","info","warning","danger",""],default:""},hit:Boolean,disableTransitions:Boolean,color:{type:String,default:""},size:{type:String,values:T,default:""},effect:{type:String,values:["dark","light","plain"],default:"light"},round:Boolean}),j={close:l=>l instanceof MouseEvent,click:l=>l instanceof MouseEvent},A={name:"ElTag"},D=w({...A,props:Z,emits:j,setup(l,{emit:i}){const v=l,_=N(),s=M("tag"),u=V(()=>{const{type:e,hit:f,effect:S,closable:z,round:B}=v;return[s.b(),s.is("closable",z),s.m(e),s.m(_.value),s.m(S),s.is("hit",f),s.is("round",B)]}),p=e=>{i("close",e)},d=e=>{i("click",e)};return(e,f)=>e.disableTransitions?(n(),$("span",{key:0,class:o(a(u)),style:y({backgroundColor:e.color}),onClick:d},[t("span",{class:o(a(s).e("content"))},[m(e.$slots,"default")],2),e.closable?(n(),c(a(b),{key:0,class:o(a(s).e("close")),onClick:C(p,["stop"])},{default:r(()=>[g(a(k))]),_:1},8,["class","onClick"])):h("v-if",!0)],6)):(n(),c(I,{key:1,name:`${a(s).namespace.value}-zoom-in-center`,appear:""},{default:r(()=>[t("span",{class:o(a(u)),style:y({backgroundColor:e.color}),onClick:d},[t("span",{class:o(a(s).e("content"))},[m(e.$slots,"default")],2),e.closable?(n(),c(a(b),{key:0,class:o(a(s).e("close")),onClick:C(p,["stop"])},{default:r(()=>[g(a(k))]),_:1},8,["class","onClick"])):h("v-if",!0)],6)]),_:3},8,["name"]))}});var F=P(D,[["__file","/home/runner/work/element-plus/element-plus/packages/components/tag/src/tag.vue"]]);const H=q(F);export{H as E,Z as t};