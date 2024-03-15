import{a as v,S as T,i as l}from"./assets/vendor-da186403.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))n(o);new MutationObserver(o=>{for(const r of o)if(r.type==="childList")for(const c of r.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&n(c)}).observe(document,{childList:!0,subtree:!0});function s(o){const r={};return o.integrity&&(r.integrity=o.integrity),o.referrerPolicy&&(r.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?r.credentials="include":o.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(o){if(o.ep)return;o.ep=!0;const r=s(o);fetch(o.href,r)}})();const $="42710952-cb07850fe6c5f6774b64d780f",M="https://pixabay.com/api/";async function L(t,e,s){try{return(await v.get(M,{params:{key:$,q:t,image_type:"photo",orientation:"horizontal",safesearch:!0,page:e,per_page:s}})).data.hits}catch(n){throw console.error("Error fetching images:",n),n}}const i=document.querySelector(".gallery"),w=new T(".gallery a",{captionsData:"alt",captionDelay:250});w.refresh();function C(t){i.innerHTML="",t.forEach(e=>{const s=`
      <li class="card">
        <a href="${e.largeImageURL}" class="link">
          <img src="${e.webformatURL}" alt="${e.tags}">
          <ul class="list-container">
          <li class="item-description"><h3>Likes</h3> <p>${e.likes}</p></li>
          <li class="item-description"><h3>Views</h3> <p>${e.views}</p></li>
          <li class="item-description"><h3>Comments</h3> <p>${e.comments}</p></li>
          <li class="item-description"><h3>Downloads</h3> <p>${e.downloads}</p></li>
        </ul>
        </a>
        
      </li>
    `;i.insertAdjacentHTML("beforeend",s)}),w.refresh()}function S(){const t=document.createElement("p");t.classList.add("end-message"),t.textContent="We're sorry, but you've reached the end of search results.",i.insertAdjacentElement("afterend",t)}function q(t){t.forEach(e=>{const s=`
      <li class="card">
        <a href="${e.largeImageURL}" class="link">
          <img src="${e.webformatURL}" alt="${e.tags}">
          <ul class="list-container">
            <li class="item-description"><h3>Likes</h3> <p>${e.likes}</p></li>
            <li class="item-description"><h3>Views</h3> <p>${e.views}</p></li>
            <li class="item-description"><h3>Comments</h3> <p>${e.comments}</p></li>
            <li class="item-description"><h3>Downloads</h3> <p>${e.downloads}</p></li>
          </ul>
        </a>
      </li>
    `;i.insertAdjacentHTML("beforeend",s)})}const d=document.querySelector(".scroll-to-top"),H=document.querySelector(".form"),y=document.querySelector(".search-input"),E=document.querySelector(".loader"),h=document.querySelector(".load-more-btn");f();let a="",p=1;const u=15;let g=500;H.addEventListener("submit",P);async function P(t){if(t.preventDefault(),a=y.value.trim(),p=1,a===""){l.error({title:"Error",message:"Please enter a search term.",position:"topCenter"}),m();return}I(),b();try{const e=await L(a,p,u);if(e.length===0){i.innerHTML="",l.info({title:"Info",message:"Sorry, there are no images matching your search query. Please try again!",position:"topCenter"}),m();return}else C(e),O(),y.value=""}catch(e){console.error("Error fetching images:",e),l.error({title:"Error",message:"Failed to fetch images. Please try again later.",position:"topCenter"})}finally{f()}}h.addEventListener("click",async()=>{try{b();const t=await L(a,p+=1,u);g=t.totalHits,(t.length<u||t.length>=g)&&(m(),S()),q(t);const e=i.firstElementChild.getBoundingClientRect().height;window.scrollBy({top:e*3,behavior:"smooth"})}catch(t){console.error("Error fetching more images:",t),l.error({title:"Error",message:`Error fetching more images: ${t}`})}finally{f()}});function b(){E.classList.remove("hidden")}function f(){E.classList.add("hidden")}function O(){h.style.display="block"}function m(){h.style.display="none"}function I(){const t=document.querySelector(".end-message");t&&t.remove()}window.addEventListener("scroll",()=>{document.body.scrollTop>30||document.documentElement.scrollTop>30?d.style.display="flex":d.style.display="none"});function x(){window.scrollTo({top:0,behavior:"smooth"})}d.addEventListener("click",x);
//# sourceMappingURL=commonHelpers.js.map
