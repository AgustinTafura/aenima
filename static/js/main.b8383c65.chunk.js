(this["webpackJsonpaenima-frontend"]=this["webpackJsonpaenima-frontend"]||[]).push([[0],{40:function(e,t,n){},47:function(e,t,n){},71:function(e,t,n){},72:function(e,t,n){"use strict";n.r(t);var c=n(1),a=n.n(c),r=n(34),o=n.n(r),s=(n(40),n(41),n(42),n(44),n(47),n(4)),i=n(2),d=n(10),l=n(19),u=n(9),j=n.n(u),b=n(13),p=n(14),h=n.n(p),m=n(0),x=Object(c.createContext)(),O=function(e){var t=e.children,n=Object(c.useState)([]),a=Object(d.a)(n,2),r=a[0],o=a[1];function s(){return(s=Object(b.a)(j.a.mark((function e(){return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:h.a.get("".concat("https://aenima.herokuapp.com","/products")).then((function(e){return o(e.data)})).catch((function(e){console.log(e),alert("hubo un inconveniente, por favor intentelo mas tarde")}));case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function i(){return(i=Object(b.a)(j.a.mark((function e(t){return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:h.a.delete("".concat("https://aenima.herokuapp.com","/products/").concat(t)).then((function(e){var n=r.findIndex((function(e){return e.id===t})),c=Object(l.a)(r);return c.splice(n,1),o(c),e})).catch((function(e){console.log(e),alert("hubo un inconveniente, por favor intentelo mas tarde")}));case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function u(){return(u=Object(b.a)(j.a.mark((function e(t){return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:h.a.get("".concat("https://aenima.herokuapp.com","/products/").concat(t)).then((function(e){return console.log(e),e})).catch((function(e){console.log(e),alert("hubo un inconveniente, por favor intentelo mas tarde")}));case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function p(){return(p=Object(b.a)(j.a.mark((function e(t,n){return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:h.a.put("".concat("https://aenima.herokuapp.com","/products/").concat(t),{data:n}).then((function(e){var c=r.findIndex((function(e){return e.id===t})),a=Object(l.a)(r);return a.splice(c,1,e.data),console.log(7777777,a),o(a),n})).catch((function(e){console.log(e),alert("hubo un inconveniente, por favor intentelo mas tarde")}));case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function O(){return(O=Object(b.a)(j.a.mark((function e(t){return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:h.a.post("".concat("https://aenima.herokuapp.com","/products"),{product:t}).then((function(e){return console.log(e),o([].concat(Object(l.a)(r),[t])),e})).catch((function(e){console.log(e),alert("hubo un inconveniente, por favor intentelo mas tarde")}));case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return Object(c.useEffect)((function(){!function(){s.apply(this,arguments)}()}),[]),Object(m.jsx)(x.Provider,{value:{productList:r,deleteProductById:function(e){return i.apply(this,arguments)},addProduct:function(e){return O.apply(this,arguments)},updateProduct:function(e,t){return p.apply(this,arguments)},getProductByIdFromDB:function(e){return u.apply(this,arguments)},getProductById:function(e){return r.find((function(t){return t._id===e}))}},children:t})},f=n(12),v=n.n(f),g=function(e){var t=e.productToDelete,n=e.setProductToDelete,a=Object(c.useContext)(x).deleteProductById,r=Object(i.f)();function o(){return a(t._id),r.push("/products")}return Object(c.useEffect)((function(){return v()("#deleteProductModal").on("hidden.bs.modal",(function(e){e.stopPropagation(),n({})})),function(){v()("#deleteProductModal").on("hidden.bs.modal",(function(e){}))}}),[]),Object(m.jsx)("div",{className:"modal fade",id:"deleteProductModal",tabIndex:"-1",role:"dialog","aria-labelledby":"deleteProductModal","aria-hidden":"true",children:Object(m.jsx)("div",{className:"modal-dialog",role:"document",children:Object(m.jsxs)("div",{className:"modal-content",children:[Object(m.jsxs)("div",{className:"modal-header",children:[Object(m.jsxs)("h5",{className:"modal-title",children:["Estas seguro que desas Eliminar ",t.nombre,"?"]}),Object(m.jsx)("button",{className:"close",type:"button","data-dismiss":"modal","aria-label":"Close",children:Object(m.jsx)("span",{"aria-hidden":"true",children:"\xd7"})})]}),Object(m.jsxs)("div",{className:"modal-footer",children:[Object(m.jsx)("button",{className:"btn btn-secondary",type:"button","data-dismiss":"modal",children:"Cancel"}),Object(m.jsx)("button",{onClick:function(){return o},className:"btn btn-light",type:"button","data-dismiss":"modal",children:"Aceptar"})]})]})})})},N=function(){var e=Object(c.useContext)(x).productList,t=(Object(i.f)(),Object(c.useState)({})),n=Object(d.a)(t,2),a=n[0],r=n[1],o=Object(c.useState)([]),l=Object(d.a)(o,2),u=l[0],j=l[1],b=[],p=[];function h(t){var n=t.target.value,c=t.target.name,a=e.filter((function(e){return e[c]===n}));console.log(c,n,a),j(n?a:e)}return e.forEach((function(e,t){p.push(e.marca),b.push(e.nombre)})),Object(c.useEffect)((function(){j(e)}),[e]),Object(m.jsxs)(m.Fragment,{children:[Object(m.jsx)("button",{className:"btn btn-info",children:Object(m.jsx)(s.b,{className:"nav-link text-white",to:"/products/add",children:"Agregar nuevo Producto"})}),Object(m.jsxs)("table",{className:"table mt-5",children:[Object(m.jsx)("thead",{children:Object(m.jsxs)("tr",{children:[Object(m.jsx)("th",{scope:"col",children:"Imagen "}),Object(m.jsx)("th",{scope:"col",children:Object(m.jsxs)("div",{className:"input-group",children:[Object(m.jsx)("div",{className:"input-group-prepend",children:Object(m.jsx)("div",{className:"input-group-text",children:"Nombre"})}),Object(m.jsxs)("select",{name:"nombre",onChange:h,className:"form-control",children:[Object(m.jsx)("option",{value:"",children:"Todo"}),null===b||void 0===b?void 0:b.map((function(e,t){return Object(m.jsx)("option",{value:e,children:e},t)}))]})]})}),Object(m.jsx)("th",{scope:"col",children:Object(m.jsxs)("div",{className:"input-group",children:[Object(m.jsx)("div",{className:"input-group-prepend",children:Object(m.jsx)("div",{className:"input-group-text",children:"Marca"})}),Object(m.jsxs)("select",{name:"marca",onChange:h,className:"form-control",children:[Object(m.jsx)("option",{value:"",children:"Todo"}),null===p||void 0===p?void 0:p.map((function(e,t){return Object(m.jsx)("option",{value:e,children:e},t)}))]})]})}),Object(m.jsx)("th",{scope:"col",children:"Descripci\xf3n"}),Object(m.jsx)("th",{scope:"col",children:"Precio"}),Object(m.jsx)("th",{}),Object(m.jsx)("th",{})]})}),Object(m.jsx)("tbody",{children:u.map((function(e,t){return Object(m.jsxs)("tr",{children:[Object(m.jsxs)("td",{className:"py-1",children:[" ",Object(m.jsxs)(s.b,{to:"/products/".concat(e._id),children:[" ",Object(m.jsx)("img",{src:e.imagenUrl,alt:"",style:{width:"4rem"}})," "]})]}),Object(m.jsx)("td",{children:e.nombre}),Object(m.jsx)("td",{children:e.marca}),Object(m.jsx)("td",{children:e.descripcion}),Object(m.jsx)("td",{children:e.precio}),Object(m.jsxs)("td",{children:[" ",Object(m.jsxs)(s.b,{to:"/products/edit/".concat(e._id),children:[" ",Object(m.jsx)("button",{className:"btn btn-warning",children:Object(m.jsx)("i",{className:"far fa-edit"})})]})]}),Object(m.jsx)("td",{children:Object(m.jsx)("button",{onClick:function(){return function(e){console.log(e),r(e),v()("#deleteProductModal").modal("show")}(e)},className:"btn btn-danger",children:Object(m.jsx)("i",{className:"far fa-trash-alt "})})})]},t)}))})]}),Object(m.jsx)(g,{productToDelete:a,setProductToDelete:r})]})},y=function(e){var t=e.product,n=Object(i.g)().id;return Object(m.jsxs)("div",{className:"card mb-5",style:{maxWidth:"18.25rem",display:"inline-block",verticalAlign:"top"},children:[Object(m.jsx)("img",{className:"card-img-top",src:t.imagenUrl,alt:""}),Object(m.jsxs)("div",{className:"card-body",children:[Object(m.jsx)("h5",{className:"card-title",children:t.nombre}),Object(m.jsx)("p",{className:"card-text",children:t.descripcion}),n?Object(m.jsxs)(m.Fragment,{children:[Object(m.jsx)("p",{className:"card-text",children:t.marca}),Object(m.jsxs)("p",{className:"card-text",children:["$ ",t.precio]}),Object(m.jsx)("button",{className:"btn btn-primary",children:"Comprar"})]}):Object(m.jsx)(s.b,{to:"/products/".concat(t._id),className:"btn btn-primary",children:"Detalle"})]})]})},P=function(){var e=(0,Object(c.useContext)(x).getProductById)(Object(i.g)().id);return e?Object(m.jsx)(m.Fragment,{children:Object(m.jsx)(y,{product:e})}):Object(m.jsxs)("div",{children:[Object(m.jsx)("span",{className:"spinner-border spinner-border-sm"})," Cargando productos"]})},C=function(){var e=Object(c.useContext)(x).productList;return 0===e.length?Object(m.jsxs)("div",{children:[Object(m.jsx)("span",{className:"spinner-border spinner-border-sm"})," Cargando productos"]}):Object(m.jsx)(m.Fragment,{children:Object(m.jsx)("div",{className:"container mt-5 pt-5",children:Object(m.jsx)("div",{className:"row d-flex justify-content-center justify-content-md-between",children:e.map((function(e,t){return Object(m.jsx)(y,{product:e},t)}))})})})},k=function(){var e=Object(i.f)(),t=Object(c.useContext)(x),n=t.getProductById,a=t.addProduct,r=t.updateProduct,o=Object(i.g)().id,s=o?n(o):{},l=Object(c.useReducer)((function(e,t){var n=null===t||void 0===t?void 0:t.name,c=null===t||void 0===t?void 0:t.value;return e["".concat(n)]=c,e}),{}),u=Object(d.a)(l,2),j=u[0],b=u[1];return Object(m.jsxs)("div",{className:"container",children:[Object(m.jsx)("h4",{children:o?"Editar Producto":"Crear un nuevo Producto"}),Object(m.jsxs)("form",{onSubmit:function(t){t.preventDefault(),o?r(o,j).then(e.push("/products")):a(j).then(e.push("/products"))},className:"col-6",children:[["nombre","marca","descripcion","precio","imagenUrl"].map((function(e){return Object(m.jsxs)("div",{className:"input-group mb-2 mr-sm-2",children:[Object(m.jsx)("div",{className:"input-group-prepend",children:Object(m.jsx)("div",{className:"input-group-text",children:e})}),Object(m.jsx)("input",{defaultValue:s?s["".concat(e)]:"",onChange:function(t){return b({name:e,value:t.target.value})},type:"text",className:"form-control",required:!0})]},e)})),Object(m.jsxs)("button",{type:"submit",className:"btn btn-primary",children:[" ",o?"Actualizar":"Agregar"]})]})]})},w=function(){return Object(m.jsxs)(i.c,{children:[Object(m.jsx)(i.a,{exact:!0,path:"/",component:C}),Object(m.jsx)(i.a,{exact:!0,path:"/products",component:N}),Object(m.jsx)(i.a,{exact:!0,path:"/products/add",component:k}),Object(m.jsx)(i.a,{exact:!0,path:"/products/edit/:id",component:k}),Object(m.jsx)(i.a,{exact:!0,path:"/products/:id",component:P})]})},I=(n(71),function(e){return Object(m.jsx)(m.Fragment,{children:Object(m.jsxs)("nav",{id:"navbar",className:"navbar navbar-expand-lg navbar-light d-flex justify-content-between fixed-top bg-dark",children:[Object(m.jsx)("div",{id:"logo",children:Object(m.jsx)(s.b,{className:"nav-link",to:"/",style:{color:"white"},children:"AENIMA"})}),Object(m.jsx)("button",{className:"navbar-toggler border-0",type:"button","data-toggle":"collapse","data-target":"#navbarNav","aria-controls":"navbarNav","aria-expanded":"false","aria-label":"Toggle navigation",children:Object(m.jsx)("span",{className:"navbar-toggler-icon"})}),Object(m.jsx)("div",{className:"collapse navbar-collapse justify-content-end ",id:"navbarNav",children:Object(m.jsx)("ul",{className:"navbar-nav text-center nav nav-pills",children:Object(m.jsx)("li",{className:"nav-item",children:Object(m.jsx)(s.b,{className:"nav-link",to:"/products",children:"Editar Productos"})})})})]})})});var E=function(){return Object(m.jsx)("div",{className:"App",children:Object(m.jsxs)(s.a,{basename:"/aenima",children:[console.log("LOCALHOST","https://aenima.herokuapp.com"),Object(m.jsxs)(O,{children:[Object(m.jsx)(I,{}),Object(m.jsx)("div",{className:"container mt-5 pt-5",children:Object(m.jsx)(w,{})})]})]})})},F=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,73)).then((function(t){var n=t.getCLS,c=t.getFID,a=t.getFCP,r=t.getLCP,o=t.getTTFB;n(e),c(e),a(e),r(e),o(e)}))};o.a.render(Object(m.jsx)(a.a.StrictMode,{children:Object(m.jsx)(E,{})}),document.getElementById("root")),F()}},[[72,1,2]]]);
//# sourceMappingURL=main.b8383c65.chunk.js.map