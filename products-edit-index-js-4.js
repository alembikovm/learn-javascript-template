(window.webpackJsonp=window.webpackJsonp||[]).push([[4],[,,,,,,,function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return c}));var s=n(12),i=n(11),r=n(9);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}class o{constructor(e){a(this,"element",void 0),a(this,"subElements",{}),a(this,"defaultFormData",{title:"",description:"",quantity:1,subcategory:"",status:1,images:[],price:100,discount:0}),a(this,"onSubmit",e=>{e.preventDefault(),this.save()}),a(this,"uploadImage",()=>{const e=document.createElement("input");e.type="file",e.accept="image/*",e.onchange=async()=>{const[t]=e.files;if(t){const n=new FormData,{uploadImage:s,imageListContainer:i}=this.subElements;n.append("image",t),s.classList.add("is-loading"),s.disabled=!0;const a=await Object(r.a)("https://api.imgur.com/3/image",{method:"POST",headers:{Authorization:"Client-ID 28aaa2e823b03b1"},body:n});i.firstElementChild.append(this.getImageItem(a.data.link,t.name)),s.classList.remove("is-loading"),s.disabled=!1,e.remove()}},e.hidden=!0,document.body.appendChild(e),e.click()}),this.productId=e}template(){return`\n      <div class="product-form">\n\n      <form data-element="productForm" class="form-grid">\n        <div class="form-group form-group__half_left">\n          <fieldset>\n            <label class="form-label">Название товара</label>\n            <input required\n              id="title"\n              value=""\n              type="text"\n              name="title"\n              class="form-control"\n              placeholder="Название товара">\n          </fieldset>\n        </div>\n\n        <div class="form-group form-group__wide">\n          <label class="form-label">Описание</label>\n          <textarea required\n            id="description"\n            class="form-control"\n            name="description"\n            placeholder="Описание товара"></textarea>\n        </div>\n\n        <div class="form-group form-group__wide">\n          <label class="form-label">Фото</label>\n\n          <div data-element="imageListContainer"></div>\n\n          <button data-element="uploadImage" type="button" class="button-primary-outline">\n            <span>Загрузить</span>\n          </button>\n        </div>\n\n        <div class="form-group form-group__half_left">\n          <label class="form-label">Категория</label>\n            ${this.createCategoriesSelect()}\n        </div>\n\n        <div class="form-group form-group__half_left form-group__two-col">\n          <fieldset>\n            <label class="form-label">Цена ($)</label>\n            <input required\n              id="price"\n              value=""\n              type="number"\n              name="price"\n              class="form-control"\n              placeholder="${this.defaultFormData.price}">\n          </fieldset>\n          <fieldset>\n            <label class="form-label">Скидка ($)</label>\n            <input required\n              id="discount"\n              value=""\n              type="number"\n              name="discount"\n              class="form-control"\n              placeholder="${this.defaultFormData.discount}">\n          </fieldset>\n        </div>\n\n        <div class="form-group form-group__part-half">\n          <label class="form-label">Количество</label>\n          <input required\n            id="quantity"\n            value=""\n            type="number"\n            class="form-control"\n            name="quantity"\n            placeholder="${this.defaultFormData.quantity}">\n        </div>\n\n        <div class="form-group form-group__part-half">\n          <label class="form-label">Статус</label>\n          <select id="status" class="form-control" name="status">\n            <option value="1">Активен</option>\n            <option value="0">Неактивен</option>\n          </select>\n        </div>\n\n        <div class="form-buttons">\n          <button type="submit" name="save" class="button-primary-outline">\n            ${this.productId?"Сохранить":"Добавить"} товар\n          </button>\n        </div>\n      </form>\n    </div>\n    `}async render(){const e=this.loadCategoriesList(),t=this.productId?this.loadProductData(this.productId):Promise.resolve([this.defaultFormData]),[n,s]=await Promise.all([e,t]),[i]=s;return this.formData=i,this.categories=n,this.renderForm(),this.setFormData(),this.createImagesList(),this.initEventListeners(),this.element}renderForm(){const e=document.createElement("div");e.innerHTML=this.formData?this.template():this.getEmptyTemplate(),this.element=e.firstElementChild,this.subElements=this.getSubElements(e)}getEmptyTemplate(){return'<div>\n      <h1 class="page-title">Страница не найдена</h1>\n      <p>Извините, данный товар не существует</p>\n    </div>'}async save(){const e=this.getFormData(),t=await Object(r.a)("https://course-js.javascript.ru/api/rest/products",{method:"PATCH",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)});this.dispatchEvent(t.id)}getFormData(){const{productForm:e,imageListContainer:t}=this.subElements,n=["images"],s=["price","quantity","discount","status"],i=Object.keys(this.defaultFormData).filter(e=>!n.includes(e)),r={};for(const t of i)r[t]=s.includes(t)?parseInt(e[t].value):e[t].value;const a=t.querySelectorAll(".sortable-table__cell-img");r.images=[],r.id=this.productId;for(const e of a)r.images.push({url:e.src,source:e.alt});return r}dispatchEvent(e){const t=this.productId?new CustomEvent("product-updated",{detail:e}):new CustomEvent("product-saved");this.element.dispatchEvent(t)}setFormData(){const{productForm:e}=this.subElements,t=["images"];Object.keys(this.defaultFormData).filter(e=>!t.includes(e)).forEach(t=>{e.querySelector("#"+t).value=this.formData[t]||this.defaultFormData[t]})}async loadProductData(e){return await Object(r.a)("https://course-js.javascript.ru/api/rest/products?id="+e)}async loadCategoriesList(){return await Object(r.a)("https://course-js.javascript.ru/api/rest/categories?_sort=weight&_refs=subcategory")}createCategoriesSelect(){const e=document.createElement("div");e.innerHTML='<select class="form-control" id="subcategory" name="subcategory"></select>';const t=e.firstElementChild;for(const e of this.categories)for(const n of e.subcategories)t.append(new Option(`${e.title} > ${n.title}`,n.id));return t.outerHTML}getSubElements(e){const t={},n=e.querySelectorAll("[data-element]");for(const e of n)t[e.dataset.element]=e;return t}createImagesList(){const{imageListContainer:e}=this.subElements,{images:t}=this.formData,n=t.map(({url:e,source:t})=>this.getImageItem(e,t)),i=new s.a({items:n});e.append(i.element)}getImageItem(e,t){const n=document.createElement("div");return n.innerHTML=`\n      <li class="products-edit__imagelist-item sortable-list__item">\n        <span>\n          <img src="icon-grab.svg" data-grab-handle alt="grab">\n          <img class="sortable-table__cell-img" alt="${Object(i.a)(t)}" src="${Object(i.a)(e)}">\n          <span>${Object(i.a)(t)}</span>\n        </span>\n\n        <button type="button">\n          <img src="icon-trash.svg" alt="delete" data-delete-handle>\n        </button>\n      </li>`,n.firstElementChild}initEventListeners(){const{productForm:e,uploadImage:t}=this.subElements;e.addEventListener("submit",this.onSubmit),t.addEventListener("click",this.uploadImage)}destroy(){this.remove(),this.element=null,this.subElements=null}remove(){this.element.remove()}}function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}class c{constructor(e){l(this,"element",void 0),l(this,"subElements",{}),l(this,"components",{}),this.match=e}async initComponents(){const[,e]=this.match,t=new o(e);await t.render(),this.components.productForm=t}get template(){return'\n    <div class="products-edit">\n      <div class="content__top-panel">\n        <h1 class="page-title">\n          <a href="/products" class="link">Товары</a> / Добавить\n        </h1>\n      </div>\n      <div class="content-box">\n        <div data-element="productForm">\n          \x3c!-- product-form component --\x3e\n        </div>\n      </div>\n    </div>'}async render(){const e=document.createElement("div");return e.innerHTML=this.template,this.element=e.firstElementChild,this.subElements=this.getSubElements(this.element),await this.initComponents(),this.renderComponents(),this.element}renderComponents(){Object.keys(this.components).forEach(e=>{const t=this.subElements[e],{element:n}=this.components[e];t.append(n)})}getSubElements(e){return[...e.querySelectorAll("[data-element]")].reduce((e,t)=>(e[t.dataset.element]=t,e),{})}destroy(){for(const e of Object.values(this.components))e.destroy()}}},,function(e,t,n){"use strict";t.a=async function(e,t){let n,i;try{n=await fetch(e.toString(),t)}catch(e){throw new s(n,"Network error has occurred.")}if(!n.ok){let e=n.statusText;try{i=await n.json(),e=i.error&&i.error.message||i.data&&i.data.error&&i.data.error.message||e}catch(e){}let t=`Error ${n.status}: ${e}`;throw new s(n,i,t)}try{return await n.json()}catch(e){throw new s(n,null,e.message)}};class s extends Error{constructor(e,t,n){var s,i,r;super(n),r="FetchError",(i="name")in(s=this)?Object.defineProperty(s,i,{value:r,enumerable:!0,configurable:!0,writable:!0}):s[i]=r,this.response=e,this.body=t}}window.addEventListener("unhandledrejection",e=>{e.reason instanceof s&&alert(e.reason.message)})},,function(e,t,n){"use strict";t.a=e=>e.replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")},function(e,t,n){"use strict";function s(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}n.d(t,"a",(function(){return i}));class i{constructor({items:e=[]}={}){s(this,"element",void 0),s(this,"onDocumentPointerMove",({clientX:e,clientY:t})=>{this.moveDraggingAt(e,t);const{firstElementChild:n,children:s}=this.element,{top:i}=n.getBoundingClientRect(),{bottom:r}=this.element.getBoundingClientRect();if(t<i)this.movePlaceholderAt(0);else if(t>r)this.movePlaceholderAt(s.length);else for(let e=0;e<s.length;e++){const n=s[e];if(n!==this.draggingElem){const{top:s,bottom:i}=n.getBoundingClientRect(),{offsetHeight:r}=n;if(t>s&&t<i){if(t<s+r/2){this.movePlaceholderAt(e);break}this.movePlaceholderAt(e+1);break}}}this.scrollIfCloseToWindowEdge(t)}),s(this,"onDocumentPointerUp",()=>{this.dragStop()}),this.items=e,this.render()}render(){this.element=document.createElement("ul"),this.element.className="sortable-list",this.addItems(),this.initEventListeners()}initEventListeners(){this.element.addEventListener("pointerdown",e=>this.onPointerDown(e))}addItems(){for(let e of this.items)e.classList.add("sortable-list__item");this.element.append(...this.items)}onPointerDown(e){if(1!==e.which)return!1;const t=e.target.closest(".sortable-list__item");t&&(e.target.closest("[data-grab-handle]")&&(e.preventDefault(),this.dragStart(t,e)),e.target.closest("[data-delete-handle]")&&(e.preventDefault(),t.remove()))}dragStart(e,{clientX:t,clientY:n}){this.elementInitialIndex=[...this.element.children].indexOf(e),this.pointerInitialShift={x:t-e.getBoundingClientRect().x,y:n-e.getBoundingClientRect().y},this.draggingElem=e,this.placeholderElem=document.createElement("li"),this.placeholderElem.className="sortable-list__placeholder",e.style.width=e.offsetWidth+"px",e.style.height=e.offsetHeight+"px",this.placeholderElem.style.width=e.style.width,this.placeholderElem.style.height=e.style.height,e.classList.add("sortable-list__item_dragging"),e.after(this.placeholderElem),this.element.append(e),this.moveDraggingAt(t,n),document.addEventListener("pointermove",this.onDocumentPointerMove),document.addEventListener("pointerup",this.onDocumentPointerUp)}moveDraggingAt(e,t){this.draggingElem.style.left=e-this.pointerInitialShift.x+"px",this.draggingElem.style.top=t-this.pointerInitialShift.y+"px"}scrollIfCloseToWindowEdge(e){e<20?window.scrollBy(0,-10):e>document.documentElement.clientHeight-20&&window.scrollBy(0,10)}movePlaceholderAt(e){const t=this.element.children[e];t!==this.placeholderElem&&this.element.insertBefore(this.placeholderElem,t)}dragStop(){const e=[...this.element.children].indexOf(this.placeholderElem);this.placeholderElem.replaceWith(this.draggingElem),this.draggingElem.classList.remove("sortable-list__item_dragging"),this.draggingElem.style.left="",this.draggingElem.style.top="",this.draggingElem.style.width="",this.draggingElem.style.height="",document.removeEventListener("pointermove",this.onDocumentPointerMove),document.removeEventListener("pointerup",this.onDocumentPointerUp),this.draggingElem=null,e!==this.elementInitialIndex&&this.element.dispatchEvent(new CustomEvent("sortable-list-reorder",{bubbles:!0,details:{from:this.elementInitialIndex,to:e}}))}remove(){this.element.remove(),document.removeEventListener("pointermove",this.onDocumentPointerMove),document.removeEventListener("pointerup",this.onDocumentPointerUp)}destroy(){this.remove()}}}]]);
//# sourceMappingURL=products-edit-index-js-4.js.map