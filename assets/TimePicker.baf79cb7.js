import{c2 as W,O as Te,b as we,d as Pe,a as X,aO as xe,u as Z,j as Ce,k as C,C as ee,o as ne,c as De,g as k,n as g,e as r,t as A,z as y,f as Oe,_ as Re,$ as B,ay as Ae,x as Ve,aK as ye,y as Ie,q as Ee}from"./index.1cefbf14.js";import"./el-scrollbar.df028c31.js";import{f as Me,u as Ne,g as $e,h as He,i as J,d as D,c as Be,t as Fe,T as Ue,j as je,C as Le}from"./panel-time-pick.bbd04e2b.js";import{b as Ke}from"./_baseFlatten.58742091.js";import{b as qe,S as F,s as te,c as ze,d as Ge}from"./el-form-item.2d3d3b92.js";import"./index.7b1d721d.js";function ae(e){return e}function Ye(e,n,a){switch(a.length){case 0:return e.call(n);case 1:return e.call(n,a[0]);case 2:return e.call(n,a[0],a[1]);case 3:return e.call(n,a[0],a[1],a[2])}return e.apply(n,a)}function We(){}var Ze=800,Je=16,Qe=Date.now;function Xe(e){var n=0,a=0;return function(){var l=Qe(),i=Je-(l-a);if(a=l,i>0){if(++n>=Ze)return arguments[0]}else n=0;return e.apply(void 0,arguments)}}function en(e){return function(){return e}}var nn=W?function(e,n){return W(e,"toString",{configurable:!0,enumerable:!1,value:en(n),writable:!0})}:ae;const tn=nn;var an=Xe(tn);const sn=an;function rn(e,n,a,l){for(var i=e.length,p=a+(l?1:-1);l?p--:++p<i;)if(n(e[p],p,e))return p;return-1}function on(e){return e!==e}function ln(e,n,a){for(var l=a-1,i=e.length;++l<i;)if(e[l]===n)return l;return-1}function cn(e,n,a){return n===n?ln(e,n,a):rn(e,on,a)}function un(e,n){var a=e==null?0:e.length;return!!a&&cn(e,n,0)>-1}var Q=Math.max;function pn(e,n,a){return n=Q(n===void 0?e.length-1:n,0),function(){for(var l=arguments,i=-1,p=Q(l.length-n,0),o=Array(p);++i<p;)o[i]=l[n+i];i=-1;for(var u=Array(n+1);++i<n;)u[i]=l[i];return u[n]=a(o),Ye(e,this,u)}}function dn(e,n){return sn(pn(e,n,ae),e+"")}function mn(e){return Te(e)&&qe(e)}function fn(e,n,a){for(var l=-1,i=e==null?0:e.length;++l<i;)if(a(n,e[l]))return!0;return!1}var bn=1/0,gn=F&&1/te(new F([,-0]))[1]==bn?function(e){return new F(e)}:We;const vn=gn;var hn=200;function kn(e,n,a){var l=-1,i=un,p=e.length,o=!0,u=[],b=u;if(a)o=!1,i=fn;else if(p>=hn){var _=n?null:vn(e);if(_)return te(_);o=!1,i=Ge,b=new ze}else b=n?[]:u;e:for(;++l<p;){var v=e[l],S=n?n(v):v;if(v=a||v!==0?v:0,o&&S===S){for(var O=b.length;O--;)if(b[O]===S)continue e;n&&b.push(S),u.push(v)}else i(b,S,a)||(b!==u&&b.push(S),u.push(v))}return u}var Sn=dn(function(e){return kn(Ke(e,1,mn,!0))});const U=Sn,_n=we({...Me,parsedValue:{type:Pe(Array)}}),Tn=["disabled"],wn=X({__name:"panel-time-range",props:_n,emits:["pick","select-range","set-picker-option"],setup(e,{emit:n}){const a=e,l=(t,s)=>{const c=[];for(let d=t;d<=s;d++)c.push(d);return c},{t:i,lang:p}=xe(),o=Z("time"),u=Z("picker"),b=Ce("EP_PICKER_BASE"),{arrowControl:_,disabledHours:v,disabledMinutes:S,disabledSeconds:O,defaultValue:I}=b.props,T=C(()=>a.parsedValue[0]),w=C(()=>a.parsedValue[1]),se=Ne(a),re=()=>{n("pick",se.value,!1)},P=C(()=>a.format.includes("ss")),j=C(()=>a.format.includes("A")?"A":a.format.includes("a")?"a":""),oe=(t=!1)=>{n("pick",[T.value,w.value],t)},le=t=>{L(t.millisecond(0),w.value)},ie=t=>{L(T.value,t.millisecond(0))},ce=t=>{const s=t.map(d=>D(d).locale(p.value)),c=q(s);return s[0].isSame(c[0])&&s[1].isSame(c[1])},L=(t,s)=>{n("pick",[t,s],!0)},ue=C(()=>T.value>w.value),R=ee([0,2]),pe=(t,s)=>{n("select-range",t,s,"min"),R.value=[t,s]},K=C(()=>P.value?11:8),de=(t,s)=>{n("select-range",t,s,"max");const c=r(K);R.value=[t+c,s+c]},me=t=>{const s=P.value?[0,3,6,11,14,17]:[0,3,8,11],c=["hours","minutes"].concat(P.value?["seconds"]:[]),m=(s.indexOf(R.value[0])+t+s.length)%s.length,f=s.length/2;m<f?$.start_emitSelectRange(c[m]):$.end_emitSelectRange(c[m-f])},fe=t=>{const s=t.code,{left:c,right:d,up:m,down:f}=Ae;if([c,d].includes(s)){me(s===c?-1:1),t.preventDefault();return}if([m,f].includes(s)){const h=s===m?-1:1,x=R.value[0]<K.value?"start":"end";$[`${x}_scrollDown`](h),t.preventDefault();return}},E=(t,s)=>{const c=v?v(t):[],d=t==="start",f=(s||(d?w.value:T.value)).hour(),h=d?l(f+1,23):l(0,f-1);return U(c,h)},M=(t,s,c)=>{const d=S?S(t,s):[],m=s==="start",f=c||(m?w.value:T.value),h=f.hour();if(t!==h)return d;const x=f.minute(),H=m?l(x+1,59):l(0,x-1);return U(d,H)},N=(t,s,c,d)=>{const m=O?O(t,s,c):[],f=c==="start",h=d||(f?w.value:T.value),x=h.hour(),H=h.minute();if(t!==x||s!==H)return m;const Y=h.second(),_e=f?l(Y+1,59):l(0,Y-1);return U(m,_e)},q=([t,s])=>[z(t,"start",!0,s),z(s,"end",!1,t)],{getAvailableHours:be,getAvailableMinutes:ge,getAvailableSeconds:ve}=$e(E,M,N),{timePickerOptions:$,getAvailableTime:z,onSetOption:G}=He({getAvailableHours:be,getAvailableMinutes:ge,getAvailableSeconds:ve}),he=t=>t?B(t)?t.map(s=>D(s,a.format).locale(p.value)):D(t,a.format).locale(p.value):null,ke=t=>t?B(t)?t.map(s=>s.format(a.format)):t.format(a.format):null,Se=()=>{if(B(I))return I.map(s=>D(s).locale(p.value));const t=D(I).locale(p.value);return[t,t.add(60,"m")]};return n("set-picker-option",["formatToString",ke]),n("set-picker-option",["parseUserInput",he]),n("set-picker-option",["isValidValue",ce]),n("set-picker-option",["handleKeydownInput",fe]),n("set-picker-option",["getDefaultValue",Se]),n("set-picker-option",["getRangeAvailableTime",q]),(t,s)=>t.actualVisible?(ne(),De("div",{key:0,class:g([r(o).b("range-picker"),r(u).b("panel")])},[k("div",{class:g(r(o).be("range-picker","content"))},[k("div",{class:g(r(o).be("range-picker","cell"))},[k("div",{class:g(r(o).be("range-picker","header"))},A(r(i)("el.datepicker.startTime")),3),k("div",{class:g([r(o).be("range-picker","body"),r(o).be("panel","content"),r(o).is("arrow",r(_)),{"has-seconds":r(P)}])},[y(J,{ref:"minSpinner",role:"start","show-seconds":r(P),"am-pm-mode":r(j),"arrow-control":r(_),"spinner-date":r(T),"disabled-hours":E,"disabled-minutes":M,"disabled-seconds":N,onChange:le,onSetOption:r(G),onSelectRange:pe},null,8,["show-seconds","am-pm-mode","arrow-control","spinner-date","onSetOption"])],2)],2),k("div",{class:g(r(o).be("range-picker","cell"))},[k("div",{class:g(r(o).be("range-picker","header"))},A(r(i)("el.datepicker.endTime")),3),k("div",{class:g([r(o).be("range-picker","body"),r(o).be("panel","content"),r(o).is("arrow",r(_)),{"has-seconds":r(P)}])},[y(J,{ref:"maxSpinner",role:"end","show-seconds":r(P),"am-pm-mode":r(j),"arrow-control":r(_),"spinner-date":r(w),"disabled-hours":E,"disabled-minutes":M,"disabled-seconds":N,onChange:ie,onSetOption:r(G),onSelectRange:de},null,8,["show-seconds","am-pm-mode","arrow-control","spinner-date","onSetOption"])],2)],2)],2),k("div",{class:g(r(o).be("panel","footer"))},[k("button",{type:"button",class:g([r(o).be("panel","btn"),"cancel"]),onClick:s[0]||(s[0]=c=>re())},A(r(i)("el.datepicker.cancel")),3),k("button",{type:"button",class:g([r(o).be("panel","btn"),"confirm"]),disabled:r(ue),onClick:s[1]||(s[1]=c=>oe())},A(r(i)("el.datepicker.confirm")),11,Tn)],2)],2)):Oe("v-if",!0)}});var Pn=Re(wn,[["__file","/home/runner/work/element-plus/element-plus/packages/components/time-picker/src/time-picker-com/panel-time-range.vue"]]);D.extend(Be);var xn=X({name:"ElTimePicker",install:null,props:{...Fe,isRange:{type:Boolean,default:!1}},emits:["update:modelValue"],setup(e,n){const a=ee(),[l,i]=e.isRange?["timerange",Pn]:["time",Ue],p=o=>n.emit("update:modelValue",o);return Ve("ElPopperOptions",e.popperOptions),n.expose({focus:o=>{var u;(u=a.value)==null||u.handleFocusInput(o)},blur:o=>{var u;(u=a.value)==null||u.handleBlurInput(o)}}),()=>{var o;const u=(o=e.format)!=null?o:je;return y(Le,ye(e,{ref:a,type:l,format:u,"onUpdate:modelValue":p}),{default:b=>y(i,b,null)})}}});const V=xn;V.install=e=>{e.component(V.name,V)};const Cn=V;const Dn={};function On(e,n){const a=Cn;return ne(),Ee(a)}const Mn=Ie(Dn,[["render",On]]);export{Mn as default};