(this["webpackJsonpaenima-frontend"]=this["webpackJsonpaenima-frontend"]||[]).push([[0],{40:function(t,e,c){},47:function(t,e,c){},71:function(t,e,c){},72:function(t,e,c){"use strict";c.r(e);var n=c(1),a=c.n(n),r=c(34),s=c.n(r),o=(c(40),c(41),c(42),c(44),c(47),c(4)),i=c(2),d=c(10),l=c(19),u=c(9),j=c.n(u),b=c(13),p=c(14),h=c.n(p),m=c(0),x=Object(n.createContext)(),O=function(t){var e=t.children,c=Object(n.useState)([]),a=Object(d.a)(c,2),r=a[0],s=a[1];function o(){return(o=Object(b.a)(j.a.mark((function t(){return j.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:h.a.get("".concat("http://localhost:3000","/products")).then((function(t){return s(t.data)})).catch((function(t){return alert("hubo un inconveniente, por favor intentelo mas tarde"),t}));case 1:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function i(){return(i=Object(b.a)(j.a.mark((function t(e){return j.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:h.a.delete("".concat("http://localhost:3000","/products/").concat(e)).then((function(t){var c=r.findIndex((function(t){return t._id===e})),n=Object(l.a)(r);return n.splice(c,1),s(n),t})).catch((function(t){return alert("hubo un inconveniente, por favor intentelo mas tarde"),t}));case 1:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function u(){return(u=Object(b.a)(j.a.mark((function t(e){return j.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:h.a.get("".concat("http://localhost:3000","/products/").concat(e)).then((function(t){return t.data})).catch((function(t){return alert("hubo un inconveniente, por favor intentelo mas tarde"),t}));case 1:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function p(){return(p=Object(b.a)(j.a.mark((function t(e,c){return j.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:h.a.put("".concat("http://localhost:3000","/products/").concat(e),{data:c}).then((function(t){var n=r.findIndex((function(t){return t._id===e})),a=Object(l.a)(r);return a.splice(n,1,t.data),s(a),c})).catch((function(t){return alert("hubo un inconveniente, por favor intentelo mas tarde"),t}));case 1:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function O(){return(O=Object(b.a)(j.a.mark((function t(e){return j.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:h.a.post("".concat("http://localhost:3000","/products"),{product:e}).then((function(t){return s([].concat(Object(l.a)(r),[t.data])),t})).catch((function(t){return alert("hubo un inconveniente, por favor intentelo mas tarde"),t}));case 1:case"end":return t.stop()}}),t)})))).apply(this,arguments)}return Object(n.useEffect)((function(){!function(){o.apply(this,arguments)}()}),[]),Object(m.jsx)(x.Provider,{value:{productList:r,deleteProductById:function(t){return i.apply(this,arguments)},addProduct:function(t){return O.apply(this,arguments)},updateProduct:function(t,e){return p.apply(this,arguments)},getProductByIdFromDB:function(t){return u.apply(this,arguments)},getProductById:function(t){return r.find((function(e){return e._id===t}))}},children:e})},f=c(12),v=c.n(f),g=function(t){var e=t.productToDelete,c=t.setProductToDelete,a=Object(n.useContext)(x).deleteProductById;return Object(n.useEffect)((function(){return v()("#deleteProductModal").on("hidden.bs.modal",(function(t){t.stopPropagation(),c({})})),function(){v()("#deleteProductModal").on("hidden.bs.modal",(function(t){}))}}),[]),Object(m.jsx)("div",{className:"modal fade",id:"deleteProductModal",tabIndex:"-1",role:"dialog","aria-labelledby":"deleteProductModal","aria-hidden":"true",children:Object(m.jsx)("div",{className:"modal-dialog",role:"document",children:Object(m.jsxs)("div",{className:"modal-content",children:[Object(m.jsxs)("div",{className:"modal-header",children:[Object(m.jsxs)("h5",{className:"modal-title",children:["Estas seguro que desas Eliminar ",e.nombre,"?"]}),Object(m.jsx)("button",{className:"close",type:"button","data-dismiss":"modal","aria-label":"Close",children:Object(m.jsx)("span",{"aria-hidden":"true",children:"\xd7"})})]}),Object(m.jsxs)("div",{className:"modal-footer",children:[Object(m.jsx)("button",{className:"btn btn-secondary",type:"button","data-dismiss":"modal",children:"Cancel"}),Object(m.jsx)("button",{onClick:function(){a(e._id)},className:"btn btn-light",type:"button","data-dismiss":"modal",children:"Aceptar"})]})]})})})},N=function(){var t=Object(n.useContext)(x).productList,e=Object(n.useState)({}),c=Object(d.a)(e,2),a=c[0],r=c[1],s=Object(n.useState)([]),i=Object(d.a)(s,2),l=i[0],u=i[1],j=[],b=[];return t.forEach((function(t,e){!b.includes(t.marca)&&b.push(t.marca),!j.includes(t.nombre)&&j.push(t.nombre)})),Object(n.useEffect)((function(){u(t)}),[t]),Object(m.jsxs)(m.Fragment,{children:[Object(m.jsx)("button",{className:"btn btn-info",children:Object(m.jsx)(o.b,{className:"nav-link text-white",to:"/products/add",children:"Agregar nuevo Producto"})}),Object(m.jsxs)("table",{className:"table mt-5",children:[Object(m.jsx)("thead",{children:Object(m.jsxs)("tr",{children:[Object(m.jsx)("th",{scope:"col",children:"Imagen "}),Object(m.jsx)("th",{scope:"col",children:"Nombre"}),Object(m.jsx)("th",{scope:"col",children:Object(m.jsxs)("div",{className:"input-group",children:[Object(m.jsx)("div",{className:"input-group-prepend",children:Object(m.jsx)("div",{className:"input-group-text",children:"Marca"})}),Object(m.jsxs)("select",{name:"marca",onChange:function(e){var c=e.target.value,n=e.target.name,a=t.filter((function(t){return t[n]===c}));u(c?a:t)},className:"form-control",children:[Object(m.jsx)("option",{value:"",children:"Todo"}),null===b||void 0===b?void 0:b.map((function(t,e){return Object(m.jsx)("option",{value:t,children:t},e)}))]})]})}),Object(m.jsx)("th",{scope:"col",children:"Descripci\xf3n"}),Object(m.jsx)("th",{scope:"col",children:"Precio"}),Object(m.jsx)("th",{}),Object(m.jsx)("th",{})]})}),Object(m.jsx)("tbody",{children:l.map((function(t,e){return Object(m.jsxs)("tr",{children:[Object(m.jsxs)("td",{className:"py-1",children:[" ",Object(m.jsxs)(o.b,{to:"/products/".concat(t._id),children:[" ",Object(m.jsx)("img",{src:"".concat("http://localhost:3000","/images/").concat(t.imagenUrl),alt:"",style:{width:"4rem"}})," "]})]}),Object(m.jsx)("td",{children:t.nombre}),Object(m.jsx)("td",{children:t.marca}),Object(m.jsx)("td",{children:t.descripcion}),Object(m.jsx)("td",{children:t.precio}),Object(m.jsxs)("td",{children:[" ",Object(m.jsxs)(o.b,{to:"/products/edit/".concat(t._id),children:[" ",Object(m.jsx)("button",{className:"btn btn-warning",children:Object(m.jsx)("i",{className:"far fa-edit"})})]})]}),Object(m.jsx)("td",{children:Object(m.jsx)("button",{onClick:function(){return function(t){r(t),v()("#deleteProductModal").modal("show")}(t)},className:"btn btn-danger",children:Object(m.jsx)("i",{className:"far fa-trash-alt "})})})]},e)}))})]}),Object(m.jsx)(g,{productToDelete:a,setProductToDelete:r})]})},y=function(t){var e=t.product,c=Object(i.g)().id;return Object(m.jsxs)("div",{className:"card mb-5",style:{maxWidth:"18.25rem",display:"inline-block",verticalAlign:"top"},children:[Object(m.jsx)("img",{className:"card-img-top",src:"".concat("http://localhost:3000","/images/").concat(e.imagenUrl),alt:""}),Object(m.jsxs)("div",{className:"card-body",children:[Object(m.jsx)("h5",{className:"card-title",children:e.nombre}),Object(m.jsx)("p",{className:"card-text",children:e.descripcion}),c?Object(m.jsxs)(m.Fragment,{children:[Object(m.jsx)("p",{className:"card-text",children:e.marca}),Object(m.jsxs)("p",{className:"card-text",children:["$ ",e.precio]}),Object(m.jsx)("button",{className:"btn btn-primary",children:"Comprar"})]}):Object(m.jsx)(o.b,{to:"/products/".concat(e._id),className:"btn btn-primary",children:"Detalle"})]})]})},P=function(){var t=(0,Object(n.useContext)(x).getProductById)(Object(i.g)().id);return t?Object(m.jsx)(m.Fragment,{children:Object(m.jsx)(y,{product:t})}):Object(m.jsxs)("div",{children:[Object(m.jsx)("span",{className:"spinner-border spinner-border-sm"})," Cargando productos"]})},w=function(){var t=Object(n.useContext)(x).productList;return 0===t.length?Object(m.jsxs)("div",{children:[Object(m.jsx)("span",{className:"spinner-border spinner-border-sm"})," Cargando productos"]}):Object(m.jsx)(m.Fragment,{children:Object(m.jsx)("div",{className:"container mt-5 pt-5",children:Object(m.jsx)("div",{className:"row d-flex justify-content-center justify-content-md-between",children:t.map((function(t,e){return Object(m.jsx)(y,{product:t},e)}))})})})},C=function(){var t=Object(i.f)(),e=Object(n.useContext)(x),c=e.getProductById,a=e.addProduct,r=e.updateProduct,s=Object(i.g)().id,l=s?c(s):{},u=Object(n.useReducer)((function(t,e){var c=null===e||void 0===e?void 0:e.name,n=null===e||void 0===e?void 0:e.value;return t["".concat(c)]=n,t}),{}),j=Object(d.a)(u,2),b=j[0],p=j[1];return Object(m.jsxs)("div",{className:"container",children:[Object(m.jsx)("h4",{children:s?"Editar Producto":"Crear un nuevo Producto"}),Object(m.jsxs)("form",{onSubmit:function(e){e.preventDefault(),s?r(s,b).then(t.push("/products")):a(b).then(t.push("/products"))},className:"col-6",children:[["nombre","marca","descripcion","precio","imagenUrl"].map((function(t){return Object(m.jsxs)("div",{className:"input-group mb-2 mr-sm-2",children:[Object(m.jsx)("div",{className:"input-group-prepend",children:Object(m.jsx)("div",{className:"input-group-text",children:t})}),Object(m.jsx)("input",{defaultValue:l?l["".concat(t)]:"",onChange:function(e){return p({name:t,value:e.target.value.trim()})},type:"text",className:"form-control",required:!0})]},t)})),Object(m.jsxs)("button",{type:"submit",className:"btn btn-primary mx-2",children:[" ",s?"Actualizar":"Agregar"]}),Object(m.jsx)("button",{className:"btn btn-ligth mx-2",children:Object(m.jsx)(o.b,{to:"/products",children:"Cancelar"})})]})]})},k=function(){return Object(m.jsxs)(i.c,{children:[Object(m.jsx)(i.a,{exact:!0,path:"/",component:w}),Object(m.jsx)(i.a,{exact:!0,path:"/products",component:N}),Object(m.jsx)(i.a,{exact:!0,path:"/products/add",component:C}),Object(m.jsx)(i.a,{exact:!0,path:"/products/edit/:id",component:C}),Object(m.jsx)(i.a,{exact:!0,path:"/products/:id",component:P})]})},I=(c(71),function(t){return Object(m.jsx)(m.Fragment,{children:Object(m.jsxs)("nav",{id:"navbar",className:"navbar navbar-expand-lg navbar-light d-flex justify-content-between fixed-top bg-dark",children:[Object(m.jsx)("div",{id:"logo",children:Object(m.jsx)(o.b,{className:"nav-link",to:"/",style:{color:"white"},children:"AENIMA"})}),Object(m.jsx)("button",{className:"navbar-toggler border-0",type:"button","data-toggle":"collapse","data-target":"#navbarNav","aria-controls":"navbarNav","aria-expanded":"false","aria-label":"Toggle navigation",children:Object(m.jsx)("span",{className:"navbar-toggler-icon"})}),Object(m.jsx)("div",{className:"collapse navbar-collapse justify-content-end ",id:"navbarNav",children:Object(m.jsx)("ul",{className:"navbar-nav text-center nav nav-pills",children:Object(m.jsx)("li",{className:"nav-item",children:Object(m.jsx)(o.b,{className:"nav-link",to:"/products",children:"Editar Productos"})})})})]})})});var E=function(){return Object(m.jsx)("div",{className:"App",children:Object(m.jsx)(o.a,{basename:"/aenima",children:Object(m.jsxs)(O,{children:[Object(m.jsx)(I,{}),Object(m.jsx)("div",{className:"container mt-5 pt-5",children:Object(m.jsx)(k,{})})]})})})},F=function(t){t&&t instanceof Function&&c.e(3).then(c.bind(null,73)).then((function(e){var c=e.getCLS,n=e.getFID,a=e.getFCP,r=e.getLCP,s=e.getTTFB;c(t),n(t),a(t),r(t),s(t)}))};s.a.render(Object(m.jsx)(a.a.StrictMode,{children:Object(m.jsx)(E,{})}),document.getElementById("root")),F()}},[[72,1,2]]]);
//# sourceMappingURL=main.0a30bdc9.chunk.js.map