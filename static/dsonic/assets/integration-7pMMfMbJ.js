import"./modulepreload-polyfill-B5Qt9EMX.js";/* empty css                   */import{i as c}from"./sidebar-observer-0kL-4i8s.js";/* empty css             */c({sectionSelector:".section",linkSelector:".sidebar-nav a"});typeof Prism<"u"&&Prism.highlightAll();document.querySelectorAll(".code-block").forEach(t=>{const o=t.querySelector(".code-block-header");if(!o)return;const e=document.createElement("button");e.className="copy-btn",e.innerHTML=`
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect>
        <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
      </svg>
      <span>Copy</span>
    `,o.appendChild(e),e.addEventListener("click",async()=>{const r=t.querySelector("code");if(!r)return;const n=r.textContent;try{await navigator.clipboard.writeText(n),e.classList.add("copied"),e.querySelector("span").textContent="Copied!",setTimeout(()=>{e.classList.remove("copied"),e.querySelector("span").textContent="Copy"},2e3)}catch(i){console.error("Failed to copy:",i)}})});
