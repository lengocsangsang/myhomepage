let e,t,o,n,c;const r=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],a=document.querySelector(".country-button-general"),l=document.querySelector(".country-button-business"),i=document.querySelector(".country-button-technology"),u=document.querySelector(".country-button-entertainment"),s=document.querySelector(".country-button-sports"),d=document.querySelector(".country-button-science"),f=document.querySelector(".country-button-health");document.getElementById("#panel-item-family");const p=document.querySelector(".titleDate"),m=document.querySelector(".titleWeekday"),y=document.querySelector(".title-time"),h={HaNhu:"2000-07-08",MinhNhu:"2004-03-06",Dad:"1953-01-04",Sang:"1988-05-01",Ngan:"1982-10-06",Huyen:"1980-10-10",Trong:"1980-03-16"},b=[{color:"#ff4081",shadow:"0 0 5px #ff4081, 0 0 10px #ff4081, 0 0 15px #ff4081"},{color:"#00bcd4",shadow:"0 0 5px #00bcd4, 0 0 10px #00bcd4, 0 0 15px #00bcd4"},{color:"#ffffff",shadow:"0 0 5px #ffffff, 0 0 10px #ffffff, 0 0 15px #ffffff"},{color:"#8bc34a",shadow:"0 0 5px #8bc34a, 0 0 10px #8bc34a, 0 0 15px #8bc34a"},{color:"#ffeb3b",shadow:"0 0 5px #ffeb3b, 0 0 10px #ffeb3b, 0 0 15px #ffeb3b"},{color:"#9c27b0",shadow:"0 0 5px #9c27b0, 0 0 10px #9c27b0, 0 0 15px #9c27b0"},{color:"#e91e63",shadow:"0 0 5px #e91e63, 0 0 10px #e91e63, 0 0 15px #e91e63"},{color:"#2196f3",shadow:"0 0 5px #2196f3, 0 0 10px #2196f3, 0 0 15px #2196f3"},{color:"#ff5722",shadow:"0 0 5px #ff5722, 0 0 10px #ff5722, 0 0 15px #ff5722"},{color:"#673ab7",shadow:"0 0 5px #673ab7, 0 0 10px #673ab7, 0 0 15px #673ab7"},{color:"#4caf50",shadow:"0 0 5px #4caf50, 0 0 10px #4caf50, 0 0 15px #4caf50"},{color:"#ff9800",shadow:"0 0 5px #ff9800, 0 0 10px #ff9800, 0 0 15px #ff9800"},{color:"#3f51b5",shadow:"0 0 5px #3f51b5, 0 0 10px #3f51b5, 0 0 15px #3f51b5"},{color:"#009688",shadow:"0 0 5px #009688, 0 0 10px #009688, 0 0 15px #009688"},{color:"#c2185b",shadow:"0 0 5px #c2185b, 0 0 10px #c2185b, 0 0 15px #c2185b"},{color:"#607d8b",shadow:"0 0 5px #607d8b, 0 0 10px #607d8b, 0 0 15px #607d8b"},{color:"#795548",shadow:"0 0 5px #795548, 0 0 10px #795548, 0 0 15px #795548"},{color:"#ffb300",shadow:"0 0 5px #ffb300, 0 0 10px #ffb300, 0 0 15px #ffb300"}];function g(){let e=new Date,t=e.getMonth(),o=e.getDate();for(let e in h){let n=new Date(h[e]),c=n.getMonth(),r=n.getDate();if(t===c&&o===r){console.log(n.getMonth(),n.getDate()),document.querySelector(".moving-message").textContent=`Happy Birthday to ${e}!!!`;let t=document.querySelector(".right-container");!function(){for(let e=0;e<100;e++){let e=document.createElement("div");e.classList.add("firework"),e.style.top=`${100*Math.random()}%`,e.style.left=`${100*Math.random()}%`,t.appendChild(e)}let e=t.querySelectorAll(".firework");console.log("fireworks.length:",e.length);for(let t=0;t<e.length;t++){let o=Math.floor(Math.random()*b.length),{color:n,shadow:c}=b[o];e[t].style.backgroundColor=n,e[t].style.boxShadow=c}}(),setTimeout(()=>{t.querySelectorAll(".firework").forEach(e=>e.remove())},1e5)}}}document.querySelector(".country-button-general"),document.querySelector(".country-button-business"),document.querySelector(".country-button-technology"),document.querySelector(".country-button-entertainment"),document.querySelector(".country-button-sports"),document.querySelector(".country-button-science"),document.querySelector(".country-button-health"),document.getElementById("#panel-item-family");const S=document.querySelector(".bitcoin-title"),x=document.querySelector(".bitcoin-price"),w=document.querySelector(".bitcoin-market-cap"),k=document.querySelector(".bitcoin-max-supply"),q=document.querySelector(".ethereum-title"),E=document.querySelector(".ethereum-price"),v=document.querySelector(".ethereum-market-cap"),$=document.querySelector(".ethereum-max-supply"),L=document.querySelector(".solana-title"),C=document.querySelector(".solana-price"),D=document.querySelector(".solana-market-cap"),M=document.querySelector(".solana-max-supply"),I=document.querySelector(".tether-title"),T=document.querySelector(".tether-price"),B=document.querySelector(".tether-market-cap"),j=document.querySelector(".tether-max-supply"),N=document.querySelector(".dogecoin-title"),U=document.querySelector(".dogecoin-price"),H=document.querySelector(".dogecoin-market-cap"),A=document.querySelector(".dogecoin-max-supply");async function F(){try{let r=await fetch("https://api.coingecko.com/api/v3/coins/list");if(!r.ok)throw Error(`HTTP Error: ${r.status}`);let a=await r.json();for(let r=0;r<a.length;r++){let l=a[r].name.toLowerCase();"bitcoin"===l&&(e=`${a[r].symbol}-${a[r].id}`),"ethereum"===l&&(t=`${a[r].symbol}-${a[r].id}`),"tether"===l&&(o=`${a[r].symbol}-${a[r].id}`),"solana"===l&&(n=`${a[r].symbol}-${a[r].id}`),"dogecoin"===l&&(c=`${a[r].symbol}-${a[r].id}`)}let l=await fetch(`https://api.coinpaprika.com/v1/tickers/${e}`);if(!l.ok)throw Error(`Bitcoin fetch failed: ${l.status}`);let i=await l.json(),u=await fetch(`https://api.coinpaprika.com/v1/tickers/${t}`);if(!u.ok)throw Error(`Ethereum fetch failed: ${u.status}`);let s=await u.json(),d=await fetch(`https://api.coinpaprika.com/v1/tickers/${n}`);if(!d.ok)throw Error(`Solana fetch failed: ${d.status}`);let f=await d.json(),p=await fetch(`https://api.coinpaprika.com/v1/tickers/${o}`);if(!p.ok)throw Error(`Tether fetch failed: ${p.status}`);let m=await p.json(),y=await fetch(`https://api.coinpaprika.com/v1/tickers/${c}`);if(!y.ok)throw Error(`Dogecoin fetch failed: ${y.status}`);let h=await y.json(),b=(e,t,o,n,c,r,a)=>{setTimeout(()=>{o&&(o.textContent=a.toUpperCase()),n&&(n.textContent=`Price: ${t.quotes.USD.price.toLocaleString("en-US",{style:"currency",currency:"USD"})}`),c&&(c.textContent=`Market cap: ${t.quotes.USD.market_cap.toLocaleString("en-US",{style:"currency",currency:"USD",minimumFractionDigits:0,maximumFractionDigits:0})}`),r&&(r.textContent=`Max supply: ${t.max_supply?t.max_supply.toLocaleString("en-US"):"N/A"}`)},e)};b(0,i,S,x,w,k,e),b(5e3,s,q,E,v,$,t),b(1e4,f,L,C,D,M,n),b(15e3,m,I,T,B,j,o),b(2e4,h,N,U,H,A,c)}catch(e){console.error("Error:",e.message)}}const J=document.querySelector(".news-render");async function O(e){try{J.innerHTML="";let t=await fetch(`https://gnews.io/api/v4/top-headlines?category=${e}&lang=ja&country=jp&apikey=98b015ea23fe1c48e0824579120bc116`,{mode:"cors",headers:{"User-Agent":"Mozilla/5.0 (Windows NT 10.0; Win64; x64)"}}),o=await t.json();!function(e){if(0===e.articles.length){let e=document.createElement("em");e.classList.add("news-content"),e.textContent="No top headlines for now...",J.appendChild(e)}if(e.articles.length>5)for(let t=0;t<5;t++){let o=document.createElement("li");o.classList.add("news-content"),o.textContent=e.articles[t].title;let n=document.createElement("a");n.href=e.articles[t].url,n.textContent=e.articles[t].url,n.target="_blank",J.appendChild(o),J.appendChild(n)}else for(let t=0;t<e.articles.length;t++){let o=document.createElement("li");o.classList.add("news-content"),o.textContent=e.articles[t].title;let n=document.createElement("a");n.href=e.articles[t].url,n.textContent=e.articles[t].url,n.target="_blank",J.appendChild(o),J.appendChild(n)}}(o)}catch(e){console.log("ERROR:",e.message)}finally{console.log("doing something here later")}}const _=document.querySelector(".back-to-homepage");async function V(){a.addEventListener("click",async function(){O("general")}),l.addEventListener("click",async function(){O("business")}),i.addEventListener("click",async function(){O("technology")}),u.addEventListener("click",async function(){O("entertainment")}),s.addEventListener("click",async function(){O("sports")}),d.addEventListener("click",async function(){O("science")}),f.addEventListener("click",async function(){O("health")}),_.addEventListener("click",function(){document.querySelector(".general-container").scrollIntoView()})}!function e(){let t=new Date,o=t.getFullYear(),n=r[t.getMonth()],c=t.getDate(),a=t.getHours().toString().padStart(2,"0"),l=t.getMinutes().toString().padStart(2,"0"),i=t.getSeconds().toString().padStart(2,"0");y.textContent=`${a}:${l}:${i}`,p.textContent=`${o} ${n} ${c},`,m.textContent=function(){let e;switch(new Date().getDay()){case 0:e="Sunday";break;case 1:e="Monday";break;case 2:e="Tuesday";break;case 3:e="Wednesday";break;case 4:e="Thursday";break;case 5:e="Friday";break;case 6:e="Saturday"}return e}(),setTimeout(e,1e3)}(),document.addEventListener("DOMContentLoaded",function(){let e=document.querySelector(".taskInputBox"),t=document.querySelector(".taskList"),o=document.querySelector(".clearTaskBtn");function n(e){let o=document.createElement("li");o.classList.add("task-item"),o.textContent=e,t.appendChild(o)}function c(){let e=localStorage.getItem("tasks");return null===e?[]:JSON.parse(e)}c().forEach(e=>{n(e)}),e.addEventListener("keydown",function(t){if("Enter"===t.key){var o;let r;t.preventDefault();let a=e.value.trim();if(""===a)return alert("You haven't input your task yet");n(a),o=a,(r=c()).push(o),localStorage.setItem("tasks",JSON.stringify(r)),e.value=""}}),o.addEventListener("click",function(){if(0===c().length)return alert("no tasks registered yet");localStorage.removeItem("tasks"),t.innerHTML=""})}),document.querySelector(".side-panel-button").addEventListener("mouseenter",function(){document.querySelector(".side-panel").style.transform="translateX(22.3vw)"}),document.querySelector(".panel-button-container").addEventListener("mouseleave",function(){document.querySelector(".side-panel").style.transform="translateX(-22.3vw)"}),document.getElementById("panel-item-news").addEventListener("click",function(){document.getElementById("newspage").scrollIntoView()}),document.getElementById("panel-item-family").addEventListener("click",function(){document.querySelector(".family-general-container").scrollIntoView()}),document.getElementById("panel-item-professional").addEventListener("click",function(){document.querySelector(".professional-general-container").scrollIntoView()}),g(),setInterval(g,6e4),F(),setInterval(F,864e5),V();
//# sourceMappingURL=index.6216c918.js.map
