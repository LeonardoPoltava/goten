document.querySelector(".header__btn")&&document.querySelector(".header__btn").addEventListener("click",function(e){e.preventDefault(),document.querySelector(".contact").scrollIntoView({behavior:"smooth",block:"start",inline:"nearest"})}),document.querySelector(".mobile-nav__btn")&&document.querySelector(".mobile-nav__btn").addEventListener("click",function(e){e.preventDefault(),navigation.style.display="none",burgerButton.classList.remove("header__burger--active"),header.classList.remove("header--active"),document.querySelector(".contact").scrollIntoView({behavior:"smooth",block:"start",inline:"nearest"})});const buttons=document.querySelectorAll(".bases-tabs__elem[data-tab]"),swiper=(buttons.length&&buttons.forEach(e=>{e.addEventListener("click",function(){var e=this.getAttribute("data-tab"),t=document.querySelector(`section[data-tab="${e}"]`);buttons.forEach(e=>e.classList.remove("bases-tabs__elem--active")),"all"===e?(document.querySelectorAll("section[data-tab-block]").forEach(e=>e.style.display="grid"),this.classList.add("bases-tabs__elem--active")):(document.querySelectorAll("section[data-tab-block]").forEach(e=>e.style.display="none"),this.classList.add("bases-tabs__elem--active"),t.style.display="grid")})}),new Swiper(".swiper",{loop:!0,spaceBetween:40,pagination:{el:".swiper-pagination",type:"custom",clickable:!0,renderCustom:function(e,t,o){return'<span class="current">'+t+"</span>"+o}},navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"}})),burgerButton=document.querySelector(".header__burger"),navigation=document.querySelector(".mobile-nav"),header=document.querySelector(".header"),filterButtons=(burgerButton.addEventListener("click",function(){"flex"===navigation.style.display?(navigation.style.display="none",burgerButton.classList.remove("header__burger--active"),header.classList.remove("header--active")):(navigation.style.display="flex",header.classList.add("header--active"),burgerButton.classList.add("header__burger--active"))}),document.querySelectorAll(".blog-filter__button")),blogNav=(filterButtons.length&&filterButtons.forEach(e=>{e.addEventListener("click",function(){const t=this.getAttribute("data-category");var e=document.querySelectorAll(".blog-list__elem");filterButtons.forEach(e=>e.classList.remove("active")),e.forEach(e=>{"all"===t||e.dataset.category===t?e.style.display="grid":e.style.display="none"}),this.classList.add("active")})}),document.querySelector(".blog-nav"));function createNotification(){var e=document.createElement("div"),t=(e.className="notification",document.createElement("img")),o=(t.src="images/checkmark.svg",t.width=65,t.height=65,t.alt="",document.createElement("span"));return o.className="notification__text",o.textContent="Request was sent successfully",e.appendChild(t),e.appendChild(o),document.body.appendChild(e),e}function removeNotification(e){setTimeout(function(){e&&e.parentNode&&e.parentNode.removeChild(e)},3200)}blogNav&&blogNav.addEventListener("click",e=>{e.preventDefault(),e.target.classList.contains("blog-nav__elem")&&(e=e.target.getAttribute("href"),document.querySelector(e).scrollIntoView({behavior:"smooth",block:"start",inline:"nearest"}))}),document.addEventListener("DOMContentLoaded",function(){const o=document.querySelector(".contact-form");var e=document.querySelectorAll(".quote-form");const n=document.querySelector(".contact-form__content"),a=document.getElementById("loader"),i=document.getElementById("success-message");o&&o.addEventListener("submit",function(e){e.preventDefault(),a.style.display="block",n.style.display="none";e=new FormData(o);const t=new XMLHttpRequest;t.open("POST","/mail.php"),t.onload=function(){200===t.status&&(a.style.display="none",i.style.display="flex",o.reset())},t.send(e)}),e.length&&e.forEach(function(o){o.addEventListener("submit",function(e){e.preventDefault();e=new FormData(o);const t=new XMLHttpRequest;t.open("POST","/quote.php"),t.onload=function(){200===t.status&&(removeNotification(createNotification()),o.reset())},t.send(e)})})});let cc=initCookieConsent();cc.run({current_lang:"en",autoclear_cookies:!0,page_scripts:!0,onFirstAction:function(e,t){},onAccept:function(e){},onChange:function(e,t){},languages:{en:{consent_modal:{title:"We use cookies!",description:'This website collects cookies to deliver better user experience. We collect cookies to analyze our website traffic and performance. We do not track you across other sites. You can see our <a href="/privacy-notice.html">Privacy Notice</a>',primary_btn:{text:"Accept all",role:"accept_all"},secondary_btn:{text:"Customize Selection",role:"settings"}},settings_modal:{title:"Cookie preferences",save_settings_btn:"Save settings",accept_all_btn:"Accept all",reject_all_btn:"Reject all",close_btn_label:"Close",cookie_table_headers:[{col1:"Name"},{col2:"Domain"},{col3:"Expiration"},{col4:"Description"}],blocks:[{title:"Cookie usage 📢",description:'I use cookies to ensure the basic functionalities of the website and to enhance your online experience. You can choose for each category to opt-in/out whenever you want. For more details relative to cookies and other sensitive data, please read the full <a href="#" class="cc-link">privacy policy</a>.'},{title:"Strictly necessary cookies",description:"These cookies are essential for the proper functioning of my website. Without these cookies, the website would not work properly",toggle:{value:"necessary",enabled:!0,readonly:!0}},{title:"Performance and Analytics cookies",description:"These cookies allow the website to remember the choices you have made in the past",toggle:{value:"analytics",enabled:!1,readonly:!1},cookie_table:[{col1:"^_ga",col2:"google.com",col3:"2 years",col4:"description ...",is_regex:!0},{col1:"_gid",col2:"google.com",col3:"1 day",col4:"description ..."}]},{title:"Advertisement and Targeting cookies",description:"These cookies collect information about how you use the website, which pages you visited and which links you clicked on. All of the data is anonymized and cannot be used to identify you",toggle:{value:"targeting",enabled:!1,readonly:!1}},{title:"More information",description:"For any queries in relation to our policy on cookies and your choices, please contact us."}]}}}});