import{a as $,S as b,i as l}from"./assets/vendor-da186403.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))n(r);new MutationObserver(r=>{for(const o of r)if(o.type==="childList")for(const d of o.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&n(d)}).observe(document,{childList:!0,subtree:!0});function s(r){const o={};return r.integrity&&(o.integrity=r.integrity),r.referrerPolicy&&(o.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?o.credentials="include":r.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function n(r){if(r.ep)return;r.ep=!0;const o=s(r);fetch(r.href,o)}})();const T="42710952-cb07850fe6c5f6774b64d780f",v="https://pixabay.com/api/";async function y(t,e,s){try{return(await $.get(`${v}?key=${T}&q=${t}&image_type=photo&orientation=horizontal&safesearch=true&page=${e}&per_page=${s}`)).data.hits}catch(n){throw console.error("Error fetching images:",n),n}}const i=document.querySelector(".gallery"),g=new b(".gallery a",{captionsData:"alt",captionDelay:250});g.refresh();function M(t){i.innerHTML="",t.forEach(e=>{const s=`
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
    `;i.insertAdjacentHTML("beforeend",s)}),g.refresh()}function S(){const t=document.createElement("p");t.classList.add("end-message"),t.textContent="We're sorry, but you've reached the end of search results.",i.insertAdjacentElement("afterend",t)}function q(t){t.forEach(e=>{const s=`
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
    `;i.insertAdjacentHTML("beforeend",s)})}const p=document.querySelector(".scroll-to-top"),P=document.querySelector(".form"),h=document.querySelector(".search-input"),L=document.querySelector(".loader"),m=document.querySelector(".load-more-btn");a();f();let c="",w=1;const u=15;P.addEventListener("submit",C);async function C(t){if(t.preventDefault(),c=h.value.trim(),c===""){l.error({title:"Error",message:"Please enter a search term.",position:"topCenter"}),a();return}E();try{const e=await y(c,w,u);e.length===0?(i.innerHTML="",l.info({title:"Info",message:"Sorry, there are no images matching your search query. Please try again!",position:"topCenter"}),a()):(M(e),h.value="",H())}catch(e){console.error("Error fetching images:",e),l.error({title:"Error",message:"Failed to fetch images. Please try again later.",position:"topCenter"})}finally{f()}}m.addEventListener("click",async()=>{try{E();const t=await y(c,w+=1,u);q(t),t.length<u&&(a(),S())}catch(t){console.error("Error fetching more images:",t),l.error({title:"Error",message:`Error fetching more images: ${t}`})}finally{f()}});function E(){L.classList.remove("hidden")}function f(){L.classList.add("hidden")}function H(){m.classList.remove("hidden")}function a(){m.classList.add("hidden")}window.addEventListener("scroll",()=>{document.body.scrollTop>30||document.documentElement.scrollTop>30?p.style.display="flex":p.style.display="none"});function I(){window.scrollTo({top:0,behavior:"smooth"})}p.addEventListener("click",I);
//# sourceMappingURL=commonHelpers.js.map
