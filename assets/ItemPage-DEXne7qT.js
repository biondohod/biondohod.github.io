import{u as S,a as W,r as o,j as e,S as k}from"./main-jdxjInvn.js";import{E as A,I as j,a as F}from"./ErrorMessage-LCsYCziH.js";/* empty css                */const z=m=>{const{loading:r,error:a,getSingleItem:c}=S(),{favorites:l,setFavorites:g,cart:v,setCart:N}=m,x=W().id,[s,w]=o.useState(void 0),[d,u]=o.useState(0),[h,_]=o.useState(0);o.useEffect(()=>{x&&c(parseInt(x)).then(t=>{var p;w(t);const n=(p=t.images)==null?void 0:p.length;_(n||0)});const i=()=>{window.innerWidth<=575&&u(0)};return window.addEventListener("resize",i),()=>{window.removeEventListener("resize",i)}},[]);const f=()=>{const i=-(h-1)*(window.innerWidth<575?280:480),t=d+(window.innerWidth<575?280:480);u(t>0?i:t)},I=()=>{const i=-(h-1)*(window.innerWidth<575?280:480),t=0,n=d-(window.innerWidth<575?280:480);u(n<i?t:n)},y=()=>s?e.jsxs("div",{className:"item",children:[e.jsxs("div",{className:"item__slider",children:[e.jsxs("button",{className:"item__slider-btn item__slider-btn--prev",onClick:f,children:["←",e.jsx("span",{className:"visually-hidden",children:"Previous picture."})]}),e.jsx("div",{className:"item__slider-carousel",children:e.jsx("div",{className:"item__images",style:{left:`${d}px`},children:P()})}),e.jsxs("button",{className:"item__slider-btn item__slider-btn--next",onClick:I,children:["→",e.jsx("span",{className:"visually-hidden",children:"Next picture."})]})]}),e.jsxs("div",{className:"item__wrapper",children:[e.jsxs("div",{className:"item__info",children:[e.jsxs("p",{className:"items__item-description",children:["Category: ",s.category.name]}),e.jsx("h2",{className:"item__title",children:s.title}),e.jsx("p",{className:"item__description",children:s.description}),e.jsxs("p",{className:"item__price",children:["$",s.price]})]}),e.jsxs("div",{className:"items__item-buttons items__item-buttons--single",children:[e.jsx(j,{storageKey:"favourites",id:s.id,item:s,itemsArray:l,setItemsArray:g}),e.jsx(j,{storageKey:"cart",id:s.id,item:s,itemsArray:v,setItemsArray:N})]})]})]}):e.jsx(A,{text:"There is no item"}),P=()=>s?s.images.map((i,t)=>e.jsx("img",{src:i,className:"item__image",alt:"item image."},t)):e.jsx(e.Fragment,{children:"There are no images :("}),C=r||a||!s?null:y(),E=r?e.jsx(k,{}):null,b=a?e.jsx(F,{}):null;return e.jsxs(e.Fragment,{children:[C,E,b]})},M=m=>{const{favorites:r,setFavorites:a,cart:c,setCart:l}=m;return e.jsx(z,{favorites:r,setFavorites:a,cart:c,setCart:l})};export{M as default};
