(self["webpackChunksoaplement"]=self["webpackChunksoaplement"]||[]).push([[928],{1957:function(t,e,s){s(1703),
/*!
  * Bootstrap carousel.js v5.2.0-beta1 (https://getbootstrap.com/)
  * Copyright 2011-2022 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
  */
function(e,i){t.exports=i(s(1437),s(4130),s(6221),s(7317),s(4378),s(1884))}(0,(function(t,e,s,i,n,a){"use strict";const o=t=>t&&"object"===typeof t&&"default"in t?t:{default:t},r=o(e),l=o(s),c=o(i),d=o(n),u=o(a),h="carousel",p="bs.carousel",m=`.${p}`,f=".data-api",v="ArrowLeft",g="ArrowRight",b=500,_="next",y="prev",x="left",w="right",k=`slide${m}`,I=`slid${m}`,E=`keydown${m}`,C=`mouseenter${m}`,T=`mouseleave${m}`,$=`dragstart${m}`,A=`load${m}${f}`,L=`click${m}${f}`,P="carousel",S="active",j="slide",M="carousel-item-end",D="carousel-item-start",q="carousel-item-next",W="carousel-item-prev",N=".active",O=".carousel-item",H=N+O,X=".carousel-item img",Z=".carousel-indicators",F="[data-bs-slide], [data-bs-slide-to]",V='[data-bs-ride="carousel"]',U={[v]:w,[g]:x},z={interval:5e3,keyboard:!0,pause:"hover",ride:!1,touch:!0,wrap:!0},B={interval:"(number|boolean)",keyboard:"boolean",ride:"(boolean|string)",pause:"(string|boolean)",touch:"boolean",wrap:"boolean"};class Y extends u.default{constructor(t,e){super(t,e),this._interval=null,this._activeElement=null,this._isSliding=!1,this.touchTimeout=null,this._swipeHelper=null,this._indicatorsElement=c.default.findOne(Z,this._element),this._addEventListeners(),this._config.ride===P&&this.cycle()}static get Default(){return z}static get DefaultType(){return B}static get NAME(){return h}next(){this._slide(_)}nextWhenVisible(){!document.hidden&&t.isVisible(this._element)&&this.next()}prev(){this._slide(y)}pause(){this._isSliding&&t.triggerTransitionEnd(this._element),this._clearInterval()}cycle(){this._clearInterval(),this._updateInterval(),this._interval=setInterval((()=>this.nextWhenVisible()),this._config.interval)}_maybeEnableCycle(){this._config.ride&&(this._isSliding?r.default.one(this._element,I,(()=>this.cycle())):this.cycle())}to(t){const e=this._getItems();if(t>e.length-1||t<0)return;if(this._isSliding)return void r.default.one(this._element,I,(()=>this.to(t)));const s=this._getItemIndex(this._getActive());if(s===t)return;const i=t>s?_:y;this._slide(i,e[t])}dispose(){this._swipeHelper&&this._swipeHelper.dispose(),super.dispose()}_configAfterMerge(t){return t.defaultInterval=t.interval,t}_addEventListeners(){this._config.keyboard&&r.default.on(this._element,E,(t=>this._keydown(t))),"hover"===this._config.pause&&(r.default.on(this._element,C,(()=>this.pause())),r.default.on(this._element,T,(()=>this._maybeEnableCycle()))),this._config.touch&&d.default.isSupported()&&this._addTouchEventListeners()}_addTouchEventListeners(){for(const s of c.default.find(X,this._element))r.default.on(s,$,(t=>t.preventDefault()));const t=()=>{"hover"===this._config.pause&&(this.pause(),this.touchTimeout&&clearTimeout(this.touchTimeout),this.touchTimeout=setTimeout((()=>this._maybeEnableCycle()),b+this._config.interval))},e={leftCallback:()=>this._slide(this._directionToOrder(x)),rightCallback:()=>this._slide(this._directionToOrder(w)),endCallback:t};this._swipeHelper=new d.default(this._element,e)}_keydown(t){if(/input|textarea/i.test(t.target.tagName))return;const e=U[t.key];e&&(t.preventDefault(),this._slide(this._directionToOrder(e)))}_getItemIndex(t){return this._getItems().indexOf(t)}_setActiveIndicatorElement(t){if(!this._indicatorsElement)return;const e=c.default.findOne(N,this._indicatorsElement);e.classList.remove(S),e.removeAttribute("aria-current");const s=c.default.findOne(`[data-bs-slide-to="${t}"]`,this._indicatorsElement);s&&(s.classList.add(S),s.setAttribute("aria-current","true"))}_updateInterval(){const t=this._activeElement||this._getActive();if(!t)return;const e=Number.parseInt(t.getAttribute("data-bs-interval"),10);this._config.interval=e||this._config.defaultInterval}_slide(e,s=null){if(this._isSliding)return;const i=this._getActive(),n=e===_,a=s||t.getNextActiveElement(this._getItems(),i,n,this._config.wrap);if(a===i)return;const o=this._getItemIndex(a),l=t=>r.default.trigger(this._element,t,{relatedTarget:a,direction:this._orderToDirection(e),from:this._getItemIndex(i),to:o}),c=l(k);if(c.defaultPrevented)return;if(!i||!a)return;const d=Boolean(this._interval);this.pause(),this._isSliding=!0,this._setActiveIndicatorElement(o),this._activeElement=a;const u=n?D:M,h=n?q:W;a.classList.add(h),t.reflow(a),i.classList.add(u),a.classList.add(u);const p=()=>{a.classList.remove(u,h),a.classList.add(S),i.classList.remove(S,h,u),this._isSliding=!1,l(I)};this._queueCallback(p,i,this._isAnimated()),d&&this.cycle()}_isAnimated(){return this._element.classList.contains(j)}_getActive(){return c.default.findOne(H,this._element)}_getItems(){return c.default.find(O,this._element)}_clearInterval(){this._interval&&(clearInterval(this._interval),this._interval=null)}_directionToOrder(e){return t.isRTL()?e===x?y:_:e===x?_:y}_orderToDirection(e){return t.isRTL()?e===y?x:w:e===y?w:x}static jQueryInterface(t){return this.each((function(){const e=Y.getOrCreateInstance(this,t);if("number"!==typeof t){if("string"===typeof t){if(void 0===e[t]||t.startsWith("_")||"constructor"===t)throw new TypeError(`No method named "${t}"`);e[t]()}}else e.to(t)}))}}return r.default.on(document,L,F,(function(e){const s=t.getElementFromSelector(this);if(!s||!s.classList.contains(P))return;e.preventDefault();const i=Y.getOrCreateInstance(s),n=this.getAttribute("data-bs-slide-to");return n?(i.to(n),void i._maybeEnableCycle()):"next"===l.default.getDataAttribute(this,"slide")?(i.next(),void i._maybeEnableCycle()):(i.prev(),void i._maybeEnableCycle())})),r.default.on(window,A,(()=>{const t=c.default.find(V);for(const e of t)Y.getOrCreateInstance(e)})),t.defineJQueryPlugin(Y),Y}))},7317:function(t,e,s){
/*!
  * Bootstrap selector-engine.js v5.2.0-beta1 (https://getbootstrap.com/)
  * Copyright 2011-2022 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
  */
(function(e,i){t.exports=i(s(1437))})(0,(function(t){"use strict";const e={find(t,e=document.documentElement){return[].concat(...Element.prototype.querySelectorAll.call(e,t))},findOne(t,e=document.documentElement){return Element.prototype.querySelector.call(e,t)},children(t,e){return[].concat(...t.children).filter((t=>t.matches(e)))},parents(t,e){const s=[];let i=t.parentNode.closest(e);while(i)s.push(i),i=i.parentNode.closest(e);return s},prev(t,e){let s=t.previousElementSibling;while(s){if(s.matches(e))return[s];s=s.previousElementSibling}return[]},next(t,e){let s=t.nextElementSibling;while(s){if(s.matches(e))return[s];s=s.nextElementSibling}return[]},focusableChildren(e){const s=["a","button","input","textarea","select","details","[tabindex]",'[contenteditable="true"]'].map((t=>`${t}:not([tabindex^="-"])`)).join(",");return this.find(s,e).filter((e=>!t.isDisabled(e)&&t.isVisible(e)))}};return e}))},4378:function(t,e,s){
/*!
  * Bootstrap swipe.js v5.2.0-beta1 (https://getbootstrap.com/)
  * Copyright 2011-2022 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
  */
(function(e,i){t.exports=i(s(2166),s(4130),s(1437))})(0,(function(t,e,s){"use strict";const i=t=>t&&"object"===typeof t&&"default"in t?t:{default:t},n=i(t),a=i(e),o="swipe",r=".bs.swipe",l=`touchstart${r}`,c=`touchmove${r}`,d=`touchend${r}`,u=`pointerdown${r}`,h=`pointerup${r}`,p="touch",m="pen",f="pointer-event",v=40,g={leftCallback:null,rightCallback:null,endCallback:null},b={leftCallback:"(function|null)",rightCallback:"(function|null)",endCallback:"(function|null)"};class _ extends n.default{constructor(t,e){super(),this._element=t,t&&_.isSupported()&&(this._config=this._getConfig(e),this._deltaX=0,this._supportPointerEvents=Boolean(window.PointerEvent),this._initEvents())}static get Default(){return g}static get DefaultType(){return b}static get NAME(){return o}dispose(){a.default.off(this._element,r)}_start(t){this._supportPointerEvents?this._eventIsPointerPenTouch(t)&&(this._deltaX=t.clientX):this._deltaX=t.touches[0].clientX}_end(t){this._eventIsPointerPenTouch(t)&&(this._deltaX=t.clientX-this._deltaX),this._handleSwipe(),s.execute(this._config.endCallback)}_move(t){this._deltaX=t.touches&&t.touches.length>1?0:t.touches[0].clientX-this._deltaX}_handleSwipe(){const t=Math.abs(this._deltaX);if(t<=v)return;const e=t/this._deltaX;this._deltaX=0,e&&s.execute(e>0?this._config.rightCallback:this._config.leftCallback)}_initEvents(){this._supportPointerEvents?(a.default.on(this._element,u,(t=>this._start(t))),a.default.on(this._element,h,(t=>this._end(t))),this._element.classList.add(f)):(a.default.on(this._element,l,(t=>this._start(t))),a.default.on(this._element,c,(t=>this._move(t))),a.default.on(this._element,d,(t=>this._end(t))))}_eventIsPointerPenTouch(t){return this._supportPointerEvents&&(t.pointerType===m||t.pointerType===p)}static isSupported(){return"ontouchstart"in document.documentElement||navigator.maxTouchPoints>0}}return _}))},126:function(t,e,s){"use strict";s.d(e,{Z:function(){return a}});var i={data(){return{isLoading:!0,isCartEmpty:!0,carts:{},sum:"",discountSum:"",renewItem:{},couponMessage:""}},methods:{getCarts(){this.isLoading=!0;const t="https://vue3-course-api.hexschool.io/api/h513h/cart";this.$http.get(t).then((t=>{this.isLoading=!1,this.carts=t.data.data.carts,this.carts.length>0?(this.isCartEmpty=!1,this.getTotal()):this.isCartEmpty=!0}))},deleteItem(t){const e=`https://vue3-course-api.hexschool.io/api/h513h/cart/${t}`;this.$http.delete(e).then((t=>{this.getCarts()}))},getTotal(){const t=this.carts.reduce(((t,e)=>t+e.total),0);this.sum=t;const e=this.carts.reduce(((t,e)=>t+e.final_total),0);this.discountSum=e},renewQty(t,e,s,i){t?e+=1:e-=1,this.renewItem={product_id:i,qty:parseInt(e)};const n=this.renewItem;if(0===n.qty)this.deleteItem(s);else{const t=`https://vue3-course-api.hexschool.io/api/h513h/cart/${s}`;this.$http.put(t,{data:n}).then((t=>{this.getCarts()})).catch((t=>{console.log(t)}))}},useCoupon(t){const e={code:t},s="https://vue3-course-api.hexschool.io/api/h513h/coupon";this.$http.post(s,{data:e}).then((t=>{t.data.success?this.couponMessage="Applied successfully!":this.couponMessage="Sorry, this code is invalid...",this.getCarts()})).catch((t=>{console.log(t)}))},goToReceipt(){this.$router.push("/receipt")}},created(){this.getCarts(),this.emitter.on("renewCart",this.getCarts)}};const n=i;var a=n},8489:function(t,e,s){"use strict";s.d(e,{Z:function(){return a}});var i={data(){return{products:[],categories:[],newProducts:{},product:{}}},methods:{getProducts(t=1){const e="https://vue3-course-api.hexschool.io/api/h513h/products/all";this.$http.get(e).then((t=>{this.products=t.data.products.reverse(),this.newProducts=this.products.slice(0,5);const e=this.products.map((t=>t.category));this.categories=Array.from(new Set(e)).sort()})).catch((t=>{console.log(t)}))},goToProduct(t){this.$router.push(`/products/detail/${t}`),this.getProduct(t)},getProduct(t){const e=`https://vue3-course-api.hexschool.io/api/h513h/product/${t}`;this.$http.get(e).then((t=>{this.product=t.data.product}))}},mounted(){this.getProducts()},created(){this.getProducts()}};const n=i;var a=n},5603:function(t,e,s){"use strict";s.d(e,{Z:function(){return W}});var i=s(3396),n=s(7139);const a={class:"navbar navbar-expand-lg bg-light sticky-top"},o={class:"container-fluid"},r=(0,i.Uk)("Soaplement"),l=(0,i._)("button",{class:"navbar-toggler border-0",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarNavAltMarkup","aria-controls":"navbarNavAltMarkup","aria-expanded":"false","aria-label":"Toggle navigation"},[(0,i._)("span",null,[(0,i._)("i",{class:"fa-solid fa-bars"})])],-1),c={class:"collapse navbar-collapse justify-content-end",id:"navbarNavAltMarkup"},d={class:"navbar-nav"},u=(0,i.Uk)("Products"),h=(0,i._)("i",{class:"fa-solid fa-basket-shopping"},null,-1),p=(0,i._)("span",{class:"visually-hidden"},"New alerts",-1),m=[p];function f(t,e,s,p,f,v){const g=(0,i.up)("router-link");return(0,i.wg)(),(0,i.iD)("nav",a,[(0,i._)("div",o,[(0,i.Wm)(g,{class:"navbar-brand font-monospace text-dark",to:"/"},{default:(0,i.w5)((()=>[r])),_:1}),l,(0,i._)("div",c,[(0,i._)("div",d,[(0,i.Wm)(g,{class:"nav-link text-center",to:"/products"},{default:(0,i.w5)((()=>[u])),_:1}),(0,i.Wm)(g,{class:"nav-link text-center position-relative",to:"/shoppingcart",modelValue:t.carts.length,"onUpdate:modelValue":e[0]||(e[0]=e=>t.carts.length=e)},{default:(0,i.w5)((()=>[h,(0,i._)("span",{class:(0,n.C_)(["position-absolute top-50 translate-middle p-1 bg-danger border border-light rounded-circle",{"d-none":t.isCartEmpty}])},m,2)])),_:1},8,["modelValue"])])])])])}var v=s(126),g={mixins:[v.Z]},b=s(89);const _=(0,b.Z)(g,[["render",f]]);var y=_,x=s(9242);const w={class:"p-sm-5 py-5 bg-primary"},k={class:"container"},I={class:"row justify-content-center"},E={class:"col-md-3 mb-3"},C=(0,i._)("h3",{class:"font-monospace text-center"},"Soaplement",-1),T={class:"ps-3"},$=(0,i.Uk)("Exclusive brand-new and long-lost favourite cosmetics that you can't get anywhere else "),A=(0,i._)("div",{class:"col-md-3 text-center mb-3"},[(0,i._)("h3",{class:"font-monospace"},"Contact Us"),(0,i._)("p",null,"serve@soaplement.com")],-1),L=(0,i._)("div",{class:"col-md-3 text-center"},[(0,i._)("h3",{class:"font-monospace"},"Follower Us"),(0,i._)("div",{class:"d-flex justify-content-center"},[(0,i._)("p",{class:"fs-5 me-3 d-inline-block hover-text-white",role:"button"},[(0,i._)("i",{class:"fa-brands fa-facebook"})]),(0,i._)("p",{class:"fs-5 me-3 hover-text-white",role:"button"},[(0,i._)("i",{class:"fa-brands fa-instagram-square"})]),(0,i._)("p",{class:"fs-5 hover-text-white",role:"button"},[(0,i._)("i",{class:"fa-brands fa-twitter-square"})])])],-1);function P(t,e,s,n,a,o){return(0,i.wg)(),(0,i.iD)("footer",w,[(0,i._)("div",k,[(0,i._)("div",I,[(0,i._)("div",E,[C,(0,i._)("p",T,[$,(0,i._)("a",{onClick:e[0]||(e[0]=(0,x.iM)(((...t)=>o.goToLogin&&o.goToLogin(...t)),["prevent"])),class:"btn btn-link"},"Login")])]),A,L])])])}var S={methods:{goToLogin(){this.$router.push("/login")}}};const j=(0,b.Z)(S,[["render",P]]);var M=j,D={components:{Navbar:y,Footer:M}};const q=D;var W=q},6649:function(t,e,s){"use strict";s.r(e),s.d(e,{default:function(){return R}});var i=s(3396),n=s(9242),a=s(7139),o=s.p+"img/banner1.2e732a6d.png",r=s.p+"img/banner2.bd4e8b4e.png",l=s.p+"img/banner3.5d5889e3.png",c=s.p+"img/banner4.5c7978fc.png";const d={id:"carousel",class:"carousel slide","data-bs-ride":"carousel",ref:"carousel"},u=(0,i.uE)('<div class="carousel-inner"><div class="carousel-item active max-vh-70"><img src="'+o+'" class="d-block w-100" alt="banner"></div><div class="carousel-item max-vh-70"><img src="'+r+'" class="d-block w-100" alt="banner"></div><div class="carousel-item max-vh-70"><img src="'+l+'" class="d-block w-100" alt="banner"></div><div class="carousel-item max-vh-70"><img src="'+c+'" class="d-block w-100" alt="banner"></div></div><button class="carousel-control-prev" type="button" data-bs-target="#carousel" data-bs-slide="prev"><span class="carousel-control-prev-icon" aria-hidden="true"></span><span class="visually-hidden">Previous</span></button><button class="carousel-control-next" type="button" data-bs-target="#carousel" data-bs-slide="next"><span class="carousel-control-next-icon" aria-hidden="true"></span><span class="visually-hidden">Next</span></button>',3),h=[u],p={class:"py-5"},m=(0,i._)("div",{class:"container"},[(0,i._)("h3",{class:"font-monospace my-3 fs-1"},"Latest"),(0,i._)("hr",{class:"mb-3"})],-1),f={class:"container-fluid overflow-horizontal pt-3"},v={class:"row flex-nowrap ps-5 py-3"},g=["onClick"],b={class:"card-body p-2"},_={class:"card-title fst-italic"},y=(0,i._)("div",{class:"container"},[(0,i._)("h3",{class:"font-monospace my-3 fs-1"},"Fresh & Natural ingredients"),(0,i._)("hr",{class:"mb-3"})],-1),x={class:"container-fluid overflow-hidden pt-3"},w={class:"row align-items-start"},k=(0,i._)("h3",{class:"content-text"},"Mint",-1),I=[k],E=(0,i._)("h3",{class:"content-text"},"Lavenders",-1),C=[E],T=(0,i._)("h3",{class:"content-text"},"Milk",-1),$=[T],A={class:"row"},L=(0,i._)("h3",{class:"content-text"},"Flowers",-1),P=[L],S=(0,i._)("h3",{class:"content-text"},"Flowers",-1),j=[S],M=(0,i._)("h3",{class:"content-text"},"Flowers",-1),D=[M],q=(0,i._)("h3",{class:"content-text"},"Herbs",-1),W=[q],N=(0,i.uE)('<div class="container py-5"><h3 class="font-monospace my-3 fs-1">Feedback &amp; Reviews</h3><hr class="mb-3"><div class="row justify-content-center align-items-stretch pt-3"><div class="col-10 col-md-5 me-3"><div class="row"><img src="https://images.unsplash.com/photo-1618481212093-a0286ef0cc95" alt="review" class="img-fluid"><div class="text-center my-5"><i class="fa-solid fa-quote-left fs-3"></i><p>I love the Oatmeal &amp; Honey bar which works great for me since I am allergic to many other soaps and scents! The shipping is very quick, too.<br> - Anna.</p></div></div></div><div class="col-10 col-md-5"><div class="row flex-column flex-md-column-reverse"><div><img src="https://images.unsplash.com/photo-1595090475026-274ec9ef1753" alt="review" class="img-fluid"></div><div class="text-center my-5"><i class="fa-solid fa-quote-left fs-3"></i><p>Absolutely fantastic soap that all my family use. We all have sensitive skin, and these soaps are great and smell gorgeous. Love the idea of the box as it is zero waste. You get some really chunky bars and little bits of soap. The little bits of soap are really useful when travelling or cleaning. Thank you for despatching so quickly and in a really sturdy box, which I can keep all the soap bars/bits in until I need them. Will definitely be buy more from the shop!!<br> - Kay W.</p></div></div></div></div><div class="row justify-content-center align-items-stretch pt-3"><div class="col-10 col-md-5 me-3"><div class="row"><img src="https://images.unsplash.com/photo-1484980859177-5ac1249fda6f?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=1529&amp;q=80" alt="review" class="img-fluid"><div class="text-center my-5"><i class="fa-solid fa-quote-left fs-3"></i><p>I love the Oatmeal &amp; Honey bar which works great for me since I am allergic to many other soaps and scents! The shipping is very quick, too.<br> - Anna.</p></div></div></div><div class="col-10 col-md-5"><div class="row flex-column flex-md-column-reverse"><div><img src="https://images.unsplash.com/photo-1543364195-077a16c30ff3?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjZ8fGZydWl0fGVufDB8MnwwfHw%3D&amp;auto=format&amp;fit=crop&amp;w=900&amp;q=60" alt="review" class="img-fluid"></div><div class="text-center my-5"><i class="fa-solid fa-quote-left fs-3"></i><p>Absolutely fantastic soap that all my family use. We all have sensitive skin, and these soaps are great and smell gorgeous. Love the idea of the box as it is zero waste. You get some really chunky bars and little bits of soap. The little bits of soap are really useful when travelling or cleaning. Thank you for despatching so quickly and in a really sturdy box, which I can keep all the soap bars/bits in until I need them. Will definitely be buy more from the shop!!<br> - Kay W.</p></div></div></div></div></div>',1),O=(0,i.uE)('<div class="row justify-content-center py-5"><div class="col-10 col-md-5"><h4 class="mb-3 text-light font-monospace">Subscribe Us to get the latest news!</h4><div class="input-group mb-3"><input type="text" class="form-control" name="subscribe" placeholder="Please input your e-mail" aria-label="subscribe" aria-describedby="subscribe_btn"><button class="btn btn-primary" type="submit" id="subscribe_btn">Subscribe</button></div></div></div>',1),H=[O];function X(t,e,s,o,r,l){const c=(0,i.up)("Navbar"),u=(0,i.up)("Footer");return(0,i.wg)(),(0,i.iD)(i.HY,null,[(0,i.Wm)(c),(0,i._)("div",d,h,512),(0,i._)("div",p,[m,(0,i._)("div",f,[(0,i._)("div",v,[((0,i.wg)(!0),(0,i.iD)(i.HY,null,(0,i.Ko)(t.newProducts,(e=>((0,i.wg)(),(0,i.iD)("div",{class:"col-7 col-md-3 me-3",key:e.id},[(0,i._)("div",{class:"card border-0",onClick:(0,n.iM)((s=>t.goToProduct(e.id)),["stop","prevent"])},[(0,i._)("div",{class:"card-img-hover card-img-top pt-100",style:(0,a.j5)(l.backgroundImg(e.mainImageUrl))},null,4),(0,i._)("div",b,[(0,i._)("h4",_,(0,a.zw)(e.title),1)])],8,g)])))),128))])])]),y,(0,i._)("div",x,[(0,i._)("div",w,[(0,i._)("div",{class:"col-md-6 overflow-hidden p-0 vh-30 text-center text-light font-monospace img-hover-effect fs-3 position-relative",style:(0,a.j5)([l.backgroundImg(r.content1),{"hover{background-color":"black}"}])},I,4),(0,i._)("div",{class:"col-6 col-md-3 overflow-hidden p-0 vh-30 text-center text-light font-monospace img-hover-effect fs-3 position-relative",style:(0,a.j5)(l.backgroundImg(r.content2))},C,4),(0,i._)("div",{class:"col-6 col-md-3 overflow-hidden p-0 vh-30 text-center text-light font-monospace img-hover-effect fs-3 position-relative",style:(0,a.j5)(l.backgroundImg(r.content3))},$,4)]),(0,i._)("div",A,[(0,i._)("div",{class:"col-4 col-md-3 overflow-hidden p-0 vh-30 text-center text-light font-monospace img-hover-effect fs-3 position-relative",style:(0,a.j5)(l.backgroundImg(r.content4))},P,4),(0,i._)("div",{class:"col-4 col-md-3 overflow-hidden p-0 vh-30 text-center text-light font-monospace img-hover-effect fs-3 position-relative",style:(0,a.j5)(l.backgroundImg(r.content5))},j,4),(0,i._)("div",{class:"col-4 col-md-2 overflow-hidden p-0 vh-30 text-center text-light font-monospace img-hover-effect fs-3 position-relative",style:(0,a.j5)(l.backgroundImg(r.content6))},D,4),(0,i._)("div",{class:"col-md-4 overflow-hidden p-0 vh-30 text-center text-light font-monospace img-hover-effect fs-3 position-relative",style:(0,a.j5)(l.backgroundImg(r.content7))},W,4)])]),N,(0,i._)("div",{class:"container-fluid p-5 bg-primary",style:(0,a.j5)([l.backgroundImg(r.subscription),{"background-attachment":"fixed"}])},H,4),(0,i.Wm)(u)],64)}var Z=s(5603),F=s(1957),V=s.n(F),U=s(8489),z={mixins:[Z.Z,U.Z],data(){return{carousel:{},content1:s(9166),content2:s(3017),content3:s(9460),content4:s(7772),content5:s(5422),content6:s(7013),content7:s(7862),subscription:s(4964)}},methods:{turnToProductsPage(){this.$router.push("/products")},backgroundImg(t){return{"background-image":'url("'+t+'")',"background-position":"center center","background-size":"cover"}}},mounted(){this.carousel=new(V())(this.$refs.carousel)}},B=s(89);const Y=(0,B.Z)(z,[["render",X]]);var R=Y},9166:function(t,e,s){"use strict";t.exports=s.p+"img/content1.db863980.png"},3017:function(t,e,s){"use strict";t.exports=s.p+"img/content2.372f5ba0.png"},9460:function(t,e,s){"use strict";t.exports=s.p+"img/content3.541c4889.png"},7772:function(t,e,s){"use strict";t.exports=s.p+"img/content4.d709edb0.png"},5422:function(t,e,s){"use strict";t.exports=s.p+"img/content5.ec42e700.png"},7013:function(t,e,s){"use strict";t.exports=s.p+"img/content6.83154e20.png"},7862:function(t,e,s){"use strict";t.exports=s.p+"img/content7.bcdd9acd.png"},4964:function(t,e,s){"use strict";t.exports=s.p+"img/subscription.7fecfbfe.png"}}]);
//# sourceMappingURL=928.49b7f7ee.js.map