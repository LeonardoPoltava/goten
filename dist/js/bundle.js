document.querySelector(".header__btn").addEventListener("click",function(e){e.preventDefault(),document.querySelector(".contact").scrollIntoView({behavior:"smooth",block:"start",inline:"nearest"})}),document.querySelector(".mobile-nav__btn").addEventListener("click",function(e){e.preventDefault(),navigation.style.display="none",burgerButton.classList.remove("header__burger--active"),header.classList.remove("header--active"),document.querySelector(".contact").scrollIntoView({behavior:"smooth",block:"start",inline:"nearest"})});const buttons=document.querySelectorAll(".bases-tabs__elem[data-tab]"),swiper=(buttons.length&&buttons.forEach(e=>{e.addEventListener("click",function(){var e=this.getAttribute("data-tab"),t=document.querySelector(`section[data-tab="${e}"]`);buttons.forEach(e=>e.classList.remove("bases-tabs__elem--active")),"all"===e?(document.querySelectorAll("section[data-tab-block]").forEach(e=>e.style.display="grid"),this.classList.add("bases-tabs__elem--active")):(document.querySelectorAll("section[data-tab-block]").forEach(e=>e.style.display="none"),this.classList.add("bases-tabs__elem--active"),t.style.display="grid")})}),new Swiper(".swiper",{loop:!0,spaceBetween:40,pagination:{el:".swiper-pagination",type:"custom",clickable:!0,renderCustom:function(e,t,n){return'<span class="current">'+t+"</span>"+n}},navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"}})),burgerButton=document.querySelector(".header__burger"),navigation=document.querySelector(".mobile-nav"),header=document.querySelector(".header"),filterButtons=(burgerButton.addEventListener("click",function(){"flex"===navigation.style.display?(navigation.style.display="none",burgerButton.classList.remove("header__burger--active"),header.classList.remove("header--active")):(navigation.style.display="flex",header.classList.add("header--active"),burgerButton.classList.add("header__burger--active"))}),document.querySelectorAll(".blog-filter__button")),blogNav=(filterButtons.length&&filterButtons.forEach(e=>{e.addEventListener("click",function(){const t=this.getAttribute("data-category");var e=document.querySelectorAll(".blog-list__elem");filterButtons.forEach(e=>e.classList.remove("active")),e.forEach(e=>{"all"===t||e.dataset.category===t?e.style.display="grid":e.style.display="none"}),this.classList.add("active")})}),document.querySelector(".blog-nav"));function createNotification(){var e=document.createElement("div"),t=(e.className="notification",document.createElement("img")),n=(t.src="images/checkmark.svg",t.width=65,t.height=65,t.alt="",document.createElement("span"));return n.className="notification__text",n.textContent="Request was sent successfully",e.appendChild(t),e.appendChild(n),document.body.appendChild(e),e}function removeNotification(e){setTimeout(function(){e&&e.parentNode&&e.parentNode.removeChild(e)},3200)}blogNav&&blogNav.addEventListener("click",e=>{e.preventDefault(),e.target.classList.contains("blog-nav__elem")&&(e=e.target.getAttribute("href"),document.querySelector(e).scrollIntoView({behavior:"smooth",block:"start",inline:"nearest"}))}),document.addEventListener("DOMContentLoaded",function(){const n=document.querySelector(".contact-form");var e=document.querySelectorAll(".quote-form");const a=document.querySelector(".contact-form__content"),o=document.getElementById("loader"),s=document.getElementById("success-message");n.addEventListener("submit",function(e){e.preventDefault(),o.style.display="block",a.style.display="none";e=new FormData(n);const t=new XMLHttpRequest;t.open("POST","/mail.php"),t.onload=function(){200===t.status&&(o.style.display="none",s.style.display="flex",n.reset())},t.send(e)}),e.forEach(function(n){n.addEventListener("submit",function(e){e.preventDefault();e=new FormData(n);const t=new XMLHttpRequest;t.open("POST","/quote.php"),t.onload=function(){200===t.status&&(removeNotification(createNotification()),n.reset())},t.send(e)})})});