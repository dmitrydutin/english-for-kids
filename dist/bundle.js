(()=>{var t={575:t=>{t.exports=function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}},226:t=>{t.exports=function(t,e){var a=e.get(t);if(!a)throw new TypeError("attempted to get private field on non-instance");return a.get?a.get.call(t):a.value}},962:t=>{t.exports=function(t,e,a){var n=e.get(t);if(!n)throw new TypeError("attempted to set private field on non-instance");if(n.set)n.set.call(t,a);else{if(!n.writable)throw new TypeError("attempted to set read only private field");n.value=a}return a}},913:t=>{function e(t,e){for(var a=0;a<e.length;a++){var n=e[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}t.exports=function(t,a,n){return a&&e(t.prototype,a),n&&e(t,n),t}},713:t=>{t.exports=function(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}},467:t=>{t.exports={musicsSort:function(){return Math.random()-.5}}}},e={};function a(n){if(e[n])return e[n].exports;var i=e[n]={exports:{}};return t[n](i,i.exports,a),i.exports}a.n=t=>{var e=t&&t.__esModule?()=>t.default:()=>t;return a.d(e,{a:e}),e},a.d=(t,e)=>{for(var n in e)a.o(e,n)&&!a.o(t,n)&&Object.defineProperty(t,n,{enumerable:!0,get:e[n]})},a.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),(()=>{"use strict";var t=a(575),e=a.n(t),n=a(913),i=a.n(n),s=a(226),r=a.n(s),o=a(962),d=a.n(o);function c(t,e,a){if(!e.has(t))throw new TypeError("attempted to get private field on non-instance");return a}var l=new WeakMap,u=new WeakMap,p=new WeakSet,h=function(){function t(){e()(this,t),p.add(this),l.set(this,{writable:!0,value:void 0}),u.set(this,{writable:!0,value:void 0})}return i()(t,[{key:"render",value:function(t,e){d()(this,l,t),d()(this,u,e),c(this,p,m).call(this)}},{key:"reRender",value:function(){c(this,p,m).call(this)}}]),t}(),m=function(){var t=this;r()(this,u).innerHTML="",r()(this,l).forEach((function(e){r()(t,u).append((new e).render())}))};const f=new h,v=new(function(){function t(){e()(this,t)}return i()(t,[{key:"switch",value:function(){for(var t=arguments.length,a=new Array(t),n=0;n<t;n++)a[n]=arguments[n];return window.onpopstate=function(){f.reRender()},function(){function t(){e()(this,t)}return i()(t,[{key:"render",value:function(){var t,e,n=window.location.pathname,i=null===(t=a.find((function(t){return t.path===n})))||void 0===t?void 0:t.Component,s=null===(e=a.find((function(t){return void 0===t.path})))||void 0===e?void 0:e.Component;return i?(new i).render():(new s).render()}}]),t}()}},{key:"route",value:function(t,e){return{path:t,Component:e}}},{key:"navigateTo",value:function(t){window.history.pushState(null,null,t),f.reRender()}}]),t}()),g=JSON.parse('[{"title":"Clothes","image":"clothes/sweater.svg","href":"/clothes","content":[{"word":"Sweater","translation":"Свитер","image":"clothes/sweater.svg","audio":"clothes/sweater.mp3"},{"word":"Bow tie","translation":"Бабочка","image":"clothes/bow-tie.svg","audio":"clothes/bow-tie.mp3"},{"word":"Gloves","translation":"Перчатки","image":"clothes/gloves.svg","audio":"clothes/gloves.mp3"},{"word":"Handbag","translation":"Сумочка","image":"clothes/handbag.svg","audio":"clothes/handbag.mp3"},{"word":"Dress","translation":"Платье","image":"clothes/dress.svg","audio":"clothes/dress.mp3"},{"word":"Coat","translation":"Пальто","image":"clothes/overcoat.svg","audio":"clothes/overcoat.mp3"},{"word":"Hat","translation":"Шапка","image":"clothes/hat.svg","audio":"clothes/hat.mp3"},{"word":"Clock","translation":"Часы","image":"clothes/wristwatch.svg","audio":"clothes/wristwatch.mp3"}]},{"title":"Space","image":"space/satellite.svg","href":"/space","content":[{"word":"Antenna","translation":"Антенна","image":"space/antenna.svg","audio":"space/antenna.mp3"},{"word":"Asteroid","translation":"Астероид","image":"space/asteroid.svg","audio":"space/asteroid.mp3"},{"word":"Astronaut","translation":"Космонавт","image":"space/astronaut.svg","audio":"space/astronaut.mp3"},{"word":"Satellite","translation":"Спутник","image":"space/satellite.svg","audio":"space/satellite.mp3"},{"word":"Sun","translation":"Солнце","image":"space/sun.svg","audio":"space/sun.mp3"},{"word":"Orbit","translation":"Орбита","image":"space/orbit.svg","audio":"space/orbit.mp3"},{"word":"Telescope","translation":"Телескоп","image":"space/telescope.svg","audio":"space/telescope.mp3"},{"word":"Comet","translation":"Комета","image":"space/comet.svg","audio":"space/comet.mp3"}]},{"title":"Planets","image":"planets/earth.svg","href":"/planets","content":[{"word":"Mercury","translation":"Меркурий","image":"planets/mercury.svg","audio":"planets/mercury.mp3"},{"word":"Venus","translation":"Венера","image":"planets/venus.svg","audio":"planets/venus.mp3"},{"word":"Earth","translation":"Земля","image":"planets/earth.svg","audio":"planets/earth.mp3"},{"word":"Mars","translation":"Марс","image":"planets/mars.svg","audio":"planets/mars.mp3"},{"word":"Jupiter","translation":"Юпитер","image":"planets/jupiter.svg","audio":"planets/jupiter.mp3"},{"word":"Saturn","translation":"Сатурн","image":"planets/saturn.svg","audio":"planets/saturn.mp3"},{"word":"Uranus","translation":"Уран","image":"planets/uranus.svg","audio":"planets/uranus.mp3"},{"word":"Neptune","translation":"Нептун","image":"planets/neptune.svg","audio":"planets/neptune.mp3"}]},{"title":"Christmas","image":"christmas/candles.svg","href":"/christmas","content":[{"word":"Snowman","translation":"Снеговик","image":"christmas/snowman.svg","audio":"christmas/snowman.mp3"},{"word":"Candles","translation":"Свечи","image":"christmas/candles.svg","audio":"christmas/candles.mp3"},{"word":"Presents","translation":"Подарки","image":"christmas/presents.svg","audio":"christmas/presents.mp3"},{"word":"Balloons","translation":"Шарики","image":"christmas/balloons.svg","audio":"christmas/balloons.mp3"},{"word":"Calendar","translation":"Календарь","image":"christmas/calendar.svg","audio":"christmas/calendar.mp3"},{"word":"Fireplace","translation":"Камин","image":"christmas/fireplace.svg","audio":"christmas/fireplace.mp3"},{"word":"Garlands","translation":"Гирлянды","image":"christmas/garlands.svg","audio":"christmas/garlands.mp3"},{"word":"Snowflake","translation":"Снежинка","image":"christmas/snowflakes.svg","audio":"christmas/snowflakes.mp3"}]},{"title":"Food","image":"food/bananas.svg","href":"/food","content":[{"word":"Bananas","translation":"Бананы","image":"food/bananas.svg","audio":"food/bananas.mp3"},{"word":"Coffee","translation":"Кофе","image":"food/coffee.svg","audio":"food/coffee.mp3"},{"word":"Donut","translation":"Пончик","image":"food/donut.svg","audio":"food/donut.mp3"},{"word":"French fries","translation":"Картошка фри","image":"food/french-fries.svg","audio":"food/french-fries.mp3"},{"word":"Pizza","translation":"Пицца","image":"food/pizza.svg","audio":"food/pizza.mp3"},{"word":"Ice cream","translation":"Мороженое","image":"food/ice-cream.svg","audio":"food/ice-cream.mp3"},{"word":"Chocolate","translation":"Шоколад","image":"food/chocolate.svg","audio":"food/chocolate.mp3"},{"word":"Hamburger","translation":"Гамбургер","image":"food/hamburger.svg","audio":"food/hamburger.mp3"}]},{"title":"Food 2","image":"food2/pudding.svg","href":"/food2","content":[{"word":"Cake","translation":"Торт","image":"food2/cake.svg","audio":"food2/cake.mp3"},{"word":"Berries","translation":"Ягоды","image":"food2/berries.svg","audio":"food2/berries.mp3"},{"word":"Cheese","translation":"Сыр","image":"food2/cheese.svg","audio":"food2/cheese.mp3"},{"word":"Pancakes","translation":"Блины","image":"food2/pancakes.svg","audio":"food2/pancakes.mp3"},{"word":"Pudding","translation":"Пудинг","image":"food2/pudding.svg","audio":"food2/pudding.mp3"},{"word":"Cookies","translation":"Печенье","image":"food2/cookies.svg","audio":"food2/cookies.mp3"},{"word":"Sausage","translation":"Колбаса","image":"food2/sausage.svg","audio":"food2/sausage.mp3"},{"word":"Salad","translation":"Салат","image":"food2/salad.svg","audio":"food2/salad.mp3"}]},{"title":"Food 3","image":"food3/fish.svg","href":"/food3","content":[{"word":"Cupcake","translation":"Кекс","image":"food3/cupcake.svg","audio":"food3/cupcake.mp3"},{"word":"Brownie","translation":"Брауни","image":"food3/brownie.svg","audio":"food3/brownie.mp3"},{"word":"Candy","translation":"Конфета","image":"food3/candy.svg","audio":"food3/candy.mp3"},{"word":"Bread","translation":"Хлеб","image":"food3/bread.svg","audio":"food3/bread.mp3"},{"word":"Juice","translation":"Сок","image":"food3/juice.svg","audio":"food3/juice.mp3"},{"word":"Cocoa","translation":"Какао","image":"food3/cocoa.svg","audio":"food3/cocoa.mp3"},{"word":"Fish","translation":"Рыба","image":"food3/fish.svg","audio":"food3/fish.mp3"},{"word":"Tea","translation":"Чай","image":"food3/tea.svg","audio":"food3/tea.mp3"}]},{"title":"Animals","image":"animals/lion.svg","href":"/animals","content":[{"word":"Bison","translation":"Бизон","image":"animals/bison.svg","audio":"animals/bison.mp3"},{"word":"Camel","translation":"Верблюд","image":"animals/camel.svg","audio":"animals/camel.mp3"},{"word":"Gorilla","translation":"Горилла","image":"animals/gorilla.svg","audio":"animals/gorilla.mp3"},{"word":"Lemur","translation":"Лемур","image":"animals/lemur.svg","audio":"animals/lemur.mp3"},{"word":"Lion","translation":"Лев","image":"animals/lion.svg","audio":"animals/lion.mp3"},{"word":"Penguin","translation":"Пингвин","image":"animals/penguin.svg","audio":"animals/penguin.mp3"},{"word":"Sloth","translation":"Ленивец","image":"animals/sloth.svg","audio":"animals/sloth.mp3"},{"word":"Tiger","translation":"Тигр","image":"animals/tiger.svg","audio":"animals/tiger.mp3"}]}]');function w(t,e,a){if(!e.has(t))throw new TypeError("attempted to get private field on non-instance");return a}var b=new WeakMap,_=new WeakMap,k=new WeakSet,y=new WeakSet,E=new WeakSet,L=new WeakSet,S=function(){function t(){e()(this,t),L.add(this),E.add(this),y.add(this),k.add(this),b.set(this,{writable:!0,value:void 0}),_.set(this,{writable:!0,value:void 0})}return i()(t,[{key:"open",value:function(){r()(this,b).classList.add("opened"),r()(this,_).classList.add("opened"),r()(this,_).style.visibility="visible"}},{key:"close",value:function(){var t=this;return r()(this,b).classList.remove("opened"),r()(this,_).classList.remove("opened"),r()(this,_).getAnimations()[0].finished.then((function(){r()(t,_).style.visibility="hidden"}))}},{key:"render",value:function(){var t=this;d()(this,b,document.createElement("div")),d()(this,_,document.createElement("div"));var e=w(this,k,W).call(this),a=w(this,L,j).call(this);return r()(this,b).classList.add("menu-wrapper"),r()(this,_).classList.add("menu"),r()(this,b).addEventListener("click",(function(e){r()(t,b)===e.target&&t.close()})),r()(this,_).append(e),r()(this,_).append(a),r()(this,b).append(r()(this,_)),r()(this,b)}}]),t}(),W=function(){var t=document.createElement("div"),e=w(this,y,O).call(this),a=w(this,E,M).call(this);return t.classList.add("menu__title"),t.append(e),t.append(a),t},O=function(){var t=this,e=document.createElement("a");return e.classList.add("menu__title__link"),e.href="/",e.textContent="English for kids",e.setAttribute("aria-label","Английский для детей"),e.addEventListener("click",(function(e){e.preventDefault();var a=e.currentTarget.href;t.close().then((function(){v.navigateTo(a)}))})),e},M=function(){var t=this,e=document.createElement("div"),a=document.createElement("span"),n=document.createElement("span");return e.classList.add("menu__close-button"),a.classList.add("menu__close-button__line"),n.classList.add("menu__close-button__line"),e.setAttribute("aria-label","Закрыть меню"),e.setAttribute("role","button"),e.setAttribute("tabindex","0"),e.append(a),e.append(n),e.addEventListener("click",this.close.bind(this)),e.addEventListener("keypress",(function(e){["Space","Enter"].includes(e.code)&&t.close()})),e},j=function(){var t=this,e=document.createElement("div");return e.classList.add("menu__body"),g.forEach((function(a){var n=document.createElement("a"),i=document.createElement("img"),s=document.createElement("p");n.classList.add("menu__body__link"),i.classList.add("menu__body__link__icon"),s.classList.add("menu__body__link__text"),a.href===window.location.pathname&&n.classList.add("active"),n.href=a.href,i.src=a.image,s.textContent=a.title,n.addEventListener("click",(function(e){e.preventDefault();var a=e.currentTarget.href;t.close().then((function(){v.navigateTo(a)}))})),n.append(i),n.append(s),e.append(n)})),e};function C(t,e,a){if(!e.has(t))throw new TypeError("attempted to get private field on non-instance");return a}var x=new WeakMap,T=new WeakSet,P=new WeakSet,A=new WeakSet,D=function(){function t(){e()(this,t),A.add(this),P.add(this),T.add(this),x.set(this,{writable:!0,value:void 0}),d()(this,x,new S)}return i()(t,[{key:"render",value:function(){var t=document.createElement("header");return t.classList.add("header"),t.append(C(this,T,R).call(this)),t.append(C(this,P,B).call(this)),t.append(C(this,A,F).call(this)),t.append(r()(this,x).render()),t}}]),t}(),R=function(){var t=this,e=document.createElement("div"),a=document.createElement("span"),n=document.createElement("span"),i=document.createElement("span");return e.classList.add("burger-button"),a.classList.add("burger-button__line"),n.classList.add("burger-button__line"),i.classList.add("burger-button__line"),e.setAttribute("aria-label","Главное меню"),e.setAttribute("role","button"),e.setAttribute("tabindex","0"),e.append(a),e.append(n),e.append(i),e.addEventListener("click",r()(this,x).open.bind(r()(this,x))),e.addEventListener("keypress",(function(e){["Space","Enter"].includes(e.code)&&r()(t,x).open()})),e},B=function(){var t=document.createElement("a"),e=document.createElement("span");return t.classList.add("header__logo"),e.classList.add("header__logo__text"),t.href="/",e.textContent="English for kids",t.setAttribute("aria-label","Английский для детей"),t.addEventListener("click",(function(t){t.preventDefault(),v.navigateTo(t.currentTarget.href)})),t.append(e),t},F=function(){var t=document.createElement("a");return t.classList.add("header__statistics"),t.href="/statistics",t.setAttribute("aria-label","Статистика"),t.addEventListener("click",(function(t){t.preventDefault(),v.navigateTo(t.currentTarget.href)})),t},z=a(713),H=a.n(z);function I(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function J(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?I(Object(a),!0).forEach((function(e){H()(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):I(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function N(t,e,a){if(!e.has(t))throw new TypeError("attempted to get private field on non-instance");return a}var G=new WeakMap,U=new WeakMap,V=new WeakSet,q=new WeakSet,K=new WeakSet,Q=function(){function t(){e()(this,t),K.add(this),q.add(this),V.add(this),G.set(this,{writable:!0,value:!1}),U.set(this,{writable:!0,value:void 0}),N(this,K,Z).call(this),r()(this,U)||N(this,V,X).call(this)}return i()(t,[{key:"updateStatistics",value:function(t,e,a){r()(this,U)[t].content[e][a]+=1,N(this,q,Y).call(this)}},{key:"resetStatistics",value:function(){N(this,V,X).call(this),N(this,q,Y).call(this)}},{key:"gameMode",get:function(){return r()(this,G)},set:function(t){d()(this,G,t)}},{key:"statistics",get:function(){return r()(this,U)}}]),t}(),X=function(){d()(this,U,g.map((function(t){var e=t.content.map((function(t){return J(J({},t),{},{trained:0,correct:0,incorrect:0})}));return{title:t.title,content:e}})))},Y=function(){localStorage.setItem("statistics",JSON.stringify(r()(this,U)))},Z=function(){d()(this,U,JSON.parse(localStorage.getItem("statistics")))};const $=new Q;var tt=function(){function t(){e()(this,t)}return i()(t,[{key:"render",value:function(){var t=document.createElement("div");return t.classList.add("switch-mode"),$.gameMode&&t.classList.add("active"),t.setAttribute("aria-label","Режим игры"),t.setAttribute("role","button"),t.setAttribute("tabindex","0"),t.addEventListener("click",(function(){$.gameMode=!$.gameMode,f.reRender()})),t.addEventListener("keypress",(function(t){["Space","Enter"].includes(t.code)&&($.gameMode=!$.gameMode,f.reRender())})),t}}]),t}();function et(t,e,a){if(!e.has(t))throw new TypeError("attempted to get private field on non-instance");return a}var at=new WeakSet,nt=new WeakSet,it=new WeakSet,st=function(){function t(){e()(this,t),it.add(this),nt.add(this),at.add(this)}return i()(t,[{key:"render",value:function(){var t=document.createElement("main"),e=document.createElement("div"),a=document.createElement("div"),n=et(this,at,rt).call(this),i=et(this,nt,ot).call(this);return t.classList.add("categories"),e.classList.add("container"),a.classList.add("categories__inner"),a.append(n),a.append(i),a.append((new tt).render()),e.append(a),t.append(e),t}}]),t}(),rt=function(){var t=document.createElement("h1");return t.classList.add("categories__title"),t.textContent="Choose category",t},ot=function(){var t=this,e=document.createElement("div");return e.classList.add("categories__cards"),g.forEach((function(a){var n=et(t,it,dt).call(t,a.title,a.image,a.href);e.append(n)})),e},dt=function(t,e,a){var n=document.createElement("a"),i=document.createElement("img"),s=document.createElement("div");return n.classList.add("categories__card"),i.classList.add("categories__card__image"),s.classList.add("categories__card__description"),$.gameMode&&n.classList.add("active"),n.href=a,i.src=e,s.textContent=t,n.addEventListener("click",(function(t){t.preventDefault(),v.navigateTo(t.currentTarget.href)})),n.append(i),n.append(s),n},ct=a(467);function lt(t,e,a){if(!e.has(t))throw new TypeError("attempted to get private field on non-instance");return a}var ut=new WeakMap,pt=new WeakMap,ht=new WeakMap,mt=new WeakMap,ft=new WeakMap,vt=new WeakMap,gt=new WeakMap,wt=new WeakMap,bt=new WeakMap,_t=new WeakMap,kt=new WeakSet,yt=new WeakSet,Et=new WeakSet,Lt=new WeakSet,St=new WeakSet,Wt=new WeakSet,Ot=new WeakSet,Mt=new WeakSet,jt=new WeakSet,Ct=new WeakSet,xt=new WeakSet,Tt=new WeakSet,Pt=new WeakSet,At=new WeakSet,Dt=new WeakSet,Rt=function(){function t(a,n,i){var s=this;e()(this,t),Dt.add(this),At.add(this),Pt.add(this),Tt.add(this),xt.add(this),Ct.add(this),jt.add(this),Mt.add(this),Ot.add(this),Wt.add(this),St.add(this),Lt.add(this),Et.add(this),yt.add(this),kt.add(this),ut.set(this,{writable:!0,value:null}),pt.set(this,{writable:!0,value:!1}),ht.set(this,{writable:!0,value:0}),mt.set(this,{writable:!0,value:null}),ft.set(this,{writable:!0,value:null}),vt.set(this,{writable:!0,value:!1}),gt.set(this,{writable:!0,value:0}),wt.set(this,{writable:!0,value:[]}),bt.set(this,{writable:!0,value:[]}),_t.set(this,{writable:!0,value:{}}),d()(this,ut,a),d()(this,pt,n),d()(this,ht,i),r()(this,ut).content.forEach((function(t,e){r()(s,bt).push({id:e,audio:t.audio})})),r()(this,bt).sort(ct.musicsSort)}return i()(t,[{key:"render",value:function(){var t=document.createElement("main"),e=document.createElement("div"),a=document.createElement("div"),n=lt(this,kt,Bt).call(this,r()(this,ut)),i=lt(this,yt,Ft).call(this,r()(this,ut)),s=lt(this,Ot,Nt).call(this);return t.classList.add("category"),e.classList.add("container"),a.classList.add("category__inner"),a.append(n),a.append(i),$.gameMode&&r()(this,ut).content.length>0&&a.append(s),a.append((new tt).render()),e.append(a),t.append(e),d()(this,ft,a),t}}]),t}(),Bt=function(t){var e=document.createElement("h1");return e.classList.add("category__title"),e.textContent=t.title,e},Ft=function(t){var e=this,a=document.createElement("div");return a.classList.add("category__cards"),t.content.forEach((function(t,n){var i=lt(e,Et,zt).call(e,t,n);a.append(i)})),a},zt=function(t,e){var a=t.word,n=t.translation,i=t.image,s=t.audio,r=document.createElement("div"),o=lt(this,Lt,Ht).call(this,i,a,s,r,e),d=lt(this,Wt,Jt).call(this,i,n);return r.classList.add("category__card"),$.gameMode&&r.classList.add("active"),r.addEventListener("mouseleave",(function(){r.classList.remove("rotated")})),r.append(d),r.append(o),r},Ht=function(t,e,a,n,i){var s=this,o=document.createElement("div"),d=document.createElement("img"),c=document.createElement("div"),l=document.createElement("div");return o.classList.add("category__card__front"),d.classList.add("category__card__image"),c.classList.add("category__card__description"),l.classList.add("category__card__front__rotate-button"),d.src=t,c.textContent=e,lt(this,St,It).call(this,o,l,a,n,i),o.addEventListener("click",(function(t){t.target!==l&&($.gameMode?lt(s,Tt,Kt).call(s,i,o):(new Audio(a).play(),r()(s,pt)&&$.updateStatistics(r()(s,ht),i,"trained")))})),l.addEventListener("click",(function(){n.classList.add("rotated")})),o.append(d),$.gameMode||(o.append(c),o.append(l)),o},It=function(t,e,a,n,i){var s=this;t.setAttribute("aria-label","Воспроизвести запись"),t.setAttribute("role","button"),t.setAttribute("tabindex","0"),e.setAttribute("aria-label","Перевернуть карточку"),e.setAttribute("role","button"),e.setAttribute("tabindex","0"),t.addEventListener("keypress",(function(n){n.target!==e&&($.gameMode?lt(s,Tt,Kt).call(s,i,t):(new Audio(a).play(),r()(s,pt)&&$.updateStatistics(r()(s,ht),i,"trained")))})),e.addEventListener("keypress",(function(t){["Space","Enter"].includes(t.code)&&n.classList.add("rotated")}))},Jt=function(t,e){var a=document.createElement("div"),n=document.createElement("img"),i=document.createElement("div");return a.classList.add("category__card__back"),n.classList.add("category__card__image"),i.classList.add("category__card__description"),n.src=t,i.textContent=e,a.append(n),$.gameMode||a.append(i),a},Nt=function(){var t=this,e=document.createElement("div"),a=document.createElement("button");return d()(this,mt,document.createElement("div")),e.classList.add("category__control-bar"),a.classList.add("category__control-bar__start-game"),r()(this,mt).classList.add("category__control-bar__status-block"),a.textContent="Start game",a.addEventListener("click",(function(){lt(t,xt,qt).call(t,a)})),e.append(a),e.append(r()(this,mt)),e},Gt=function(){var t=document.createElement("div");t.classList.add("category__control-bar__status-block__star"),r()(this,mt).append(t)},Ut=function(){var t=document.createElement("div");t.classList.add("category__control-bar__status-block__star--empty"),r()(this,mt).append(t)},Vt=function(t){d()(this,vt,!0),t.classList.add("active")},qt=function(t){r()(this,vt)||(lt(this,Ct,Vt).call(this,t),d()(this,_t,r()(this,bt).pop())),new Audio(r()(this,_t).audio).play()},Kt=function(t,e){if(r()(this,vt)&&!r()(this,wt).includes(t))if(r()(this,_t).id===t){lt(this,Mt,Gt).call(this);var a=new Audio("correct.wav").play();lt(this,Pt,Qt).call(this,a),e.classList.add("disabled"),r()(this,wt).push(t),r()(this,pt)&&$.updateStatistics(r()(this,ht),t,"correct")}else lt(this,jt,Ut).call(this),new Audio("wrong.wav").play(),d()(this,gt,r()(this,gt)+1),r()(this,pt)&&$.updateStatistics(r()(this,ht),t,"incorrect")},Qt=function(t){var e=this;r()(this,bt).length>0?(d()(this,_t,r()(this,bt).pop()),t.then((function(){setTimeout((function(){new Audio(r()(e,_t).audio).play()}),630)}))):lt(this,At,Xt).call(this)},Xt=function(){0===r()(this,gt)?(new Audio("success.mp3").play(),lt(this,Dt,Yt).call(this,"like.svg","Success")):(new Audio("failure.mp3").play(),lt(this,Dt,Yt).call(this,"dislike.svg","Failure: ".concat(r()(this,gt)," mistakes"))),setTimeout((function(){v.navigateTo("/")}),5e3)},Yt=function(t,e){r()(this,ft).innerHTML="";var a=lt(this,kt,Bt).call(this,r()(this,ut));r()(this,ft).append(a);var n=document.createElement("div"),i=document.createElement("img"),s=document.createElement("div");n.classList.add("category__popup"),i.classList.add("category__popup__image"),s.classList.add("category__popup__text"),i.src=t,s.textContent=e,n.append(i),n.append(s),r()(this,ft).append(n)};function Zt(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function $t(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?Zt(Object(a),!0).forEach((function(e){H()(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):Zt(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function te(t,e,a){if(!e.has(t))throw new TypeError("attempted to get private field on non-instance");return a}var ee=new WeakMap,ae=new WeakMap,ne=new WeakMap,ie=new WeakMap,se=new WeakSet,re=new WeakSet,oe=new WeakSet,de=function(){function t(){e()(this,t),oe.add(this),re.add(this),se.add(this),ee.set(this,{writable:!0,value:null}),ae.set(this,{writable:!0,value:!1}),ne.set(this,{writable:!0,value:0}),ie.set(this,{writable:!0,value:[]});var a=window.location.pathname,n=g.find((function(t){return t.href===a})),i=g.findIndex((function(t){return t.href===a}));void 0!==n?(d()(this,ee,n),d()(this,ne,i),d()(this,ae,!0)):(te(this,se,ce).call(this),te(this,re,le).call(this),te(this,oe,ue).call(this))}return i()(t,[{key:"render",value:function(){return new Rt(r()(this,ee),r()(this,ae),r()(this,ne)).render()}}]),t}(),ce=function(){var t=this;$.statistics.forEach((function(e){e.content.forEach((function(a){var n=a.correct+a.incorrect,i=Math.floor(a.correct/n*100);r()(t,ie).push($t($t({},a),{},{category:e.title,percent:i||0}))}))}))},le=function(){d()(this,ie,r()(this,ie).filter((function(t){return 0!==t.incorrect}))),r()(this,ie).sort((function(t,e){return t.percent-e.percent})),d()(this,ie,r()(this,ie).slice(0,8))},ue=function(){d()(this,ee,{title:"Difficult words",content:r()(this,ie)})};function pe(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function he(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?pe(Object(a),!0).forEach((function(e){H()(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):pe(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function me(t,e,a){if(!e.has(t))throw new TypeError("attempted to get private field on non-instance");return a}var fe=new WeakMap,ve=new WeakMap,ge=new WeakMap,we=new WeakSet,be=new WeakSet,_e=new WeakSet,ke=new WeakSet,ye=new WeakSet,Ee=new WeakSet,Le=new WeakSet,Se=new WeakSet,We=new WeakSet,Oe=function(){function t(){var a=this;e()(this,t),We.add(this),Se.add(this),Le.add(this),Ee.add(this),ye.add(this),ke.add(this),_e.add(this),be.add(this),we.add(this),fe.set(this,{writable:!0,value:[]}),ve.set(this,{writable:!0,value:void 0}),ge.set(this,{writable:!0,value:null}),$.statistics.forEach((function(t){t.content.forEach((function(e){var n=e.correct+e.incorrect,i=Math.floor(e.correct/n*100)||0;r()(a,fe).push(he(he({},e),{},{category:t.title,percent:i}))}))}))}return i()(t,[{key:"render",value:function(){var t=document.createElement("main"),e=document.createElement("div"),a=document.createElement("div"),n=me(this,we,Me).call(this),i=me(this,be,je).call(this);return t.classList.add("statistics"),e.classList.add("container"),a.classList.add("statistics__inner"),a.append(n),a.append(i),e.append(a),t.append(e),t}}]),t}(),Me=function(){var t=document.createElement("div"),e=document.createElement("button"),a=document.createElement("button");return t.classList.add("statistics__header"),e.classList.add("statistics__header__repeat"),a.classList.add("statistics__header__reset"),e.textContent="Repeat difficult words",a.textContent="Reset",e.addEventListener("click",(function(){v.navigateTo("/difficult-words")})),a.addEventListener("click",(function(){$.resetStatistics(),f.reRender()})),t.append(e),t.append(a),t},je=function(){var t=document.createElement("div");return d()(this,ge,document.createElement("table")),t.classList.add("statistics__body"),r()(this,ge).classList.add("statistics__body__table"),me(this,_e,Ce).call(this),t.append(r()(this,ge)),t},Ce=function(){r()(this,ge).innerHTML="";var t=me(this,ke,xe).call(this),e=me(this,Ee,Pe).call(this);t.classList.add("statistics__body__table__head"),e.classList.add("statistics__body__table__body"),r()(this,ge).append(t),r()(this,ge).append(e)},xe=function(){var t=document.createElement("thead"),e=document.createElement("tr"),a=me(this,ye,Te).call(this,"Categories","category"),n=me(this,ye,Te).call(this,"Words","word"),i=me(this,ye,Te).call(this,"Translation","translation"),s=me(this,ye,Te).call(this,"Trained","trained"),r=me(this,ye,Te).call(this,"Correct","correct"),o=me(this,ye,Te).call(this,"Incorrect","incorrect"),d=me(this,ye,Te).call(this,"%","percent");return e.append(a),e.append(n),e.append(i),e.append(s),e.append(r),e.append(o),e.append(d),t.append(e),t},Te=function(t,e){var a=this,n=document.createElement("th");return n.textContent=t,n.addEventListener("click",(function(){me(a,Se,De).call(a,e)})),n},Pe=function(){var t=this,e=document.createElement("tbody");return r()(this,fe).forEach((function(a){var n=document.createElement("tr"),i=me(t,Le,Ae).call(t,a.category),s=me(t,Le,Ae).call(t,a.word),r=me(t,Le,Ae).call(t,a.translation),o=me(t,Le,Ae).call(t,a.trained),d=me(t,Le,Ae).call(t,a.correct),c=me(t,Le,Ae).call(t,a.incorrect),l=me(t,Le,Ae).call(t,a.percent);n.append(i),n.append(s),n.append(r),n.append(o),n.append(d),n.append(c),n.append(l),e.append(n)})),e},Ae=function(t){var e=document.createElement("td");return e.textContent=t,e},De=function(t){r()(this,ve)===t?(d()(this,ve,""),me(this,We,Re).call(this,t),r()(this,fe).reverse()):(d()(this,ve,t),me(this,We,Re).call(this,t)),me(this,_e,Ce).call(this)},Re=function(t){r()(this,fe).sort((function(e,a){return"string"==typeof e[t]?e[t]>a[t]?1:e[t]<a[t]?-1:0:e[t]-a[t]}))},Be=function(){function t(){e()(this,t)}return i()(t,[{key:"render",value:function(){var t=document.createElement("main"),e=document.createElement("div"),a=document.createElement("div"),n=document.createElement("h1");return t.classList.add("error-page"),e.classList.add("container"),a.classList.add("error-page__inner"),n.classList.add("error-page__text"),n.textContent="The page you’re looking for can’t be found.",a.append(n),e.append(a),t.append(e),t}}]),t}();function Fe(t,e,a){if(!e.has(t))throw new TypeError("attempted to get private field on non-instance");return a}var ze=new WeakSet,He=new WeakSet,Ie=function(){function t(){e()(this,t),He.add(this),ze.add(this)}return i()(t,[{key:"render",value:function(){var t=document.createElement("footer"),e=document.createElement("div"),a=document.createElement("div"),n=Fe(this,ze,Je).call(this),i=Fe(this,He,Ne).call(this);return t.classList.add("footer"),e.classList.add("container"),a.classList.add("footer__inner"),a.append(n),a.append(i),e.append(a),t.append(e),t}}]),t}(),Je=function(){var t=document.createElement("p"),e=document.createElement("span"),a=document.createElement("a");return t.classList.add("footer__site-info"),e.classList.add("footer__site-info__creation-year"),a.classList.add("footer__site-info__author"),e.textContent="© 2020",a.textContent="Dmitry Dutin",a.href="https://github.com/dmitrydutin",a.target="_blank",t.append(e),t.append(a),t},Ne=function(){var t=document.createElement("a");return t.classList.add("footer__course-info"),t.href="https://rs.school/js/",t.target="_blank",t.setAttribute("aria-label","Rolling scopes school"),t};const Ge=[D,v.switch(v.route("/",st),v.route("/clothes",de),v.route("/space",de),v.route("/planets",de),v.route("/christmas",de),v.route("/food",de),v.route("/food2",de),v.route("/food3",de),v.route("/animals",de),v.route("/statistics",Oe),v.route("/difficult-words",de),v.route(void 0,Be)),Ie];window.addEventListener("DOMContentLoaded",(function(){f.render(Ge,document.body)}))})()})();