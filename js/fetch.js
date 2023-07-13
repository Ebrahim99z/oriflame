const fetchSrc = async (url, method, arry) => {
  const res = await fetch(url, {
    method: method,
  });
  const data = await res.json();
  data.forEach((elem, i) => {
    arry[i].src = elem;
  });
};
const wathsNew_Bestoffers = document.querySelectorAll("div.banner>a>img,a>div.image>img,div.banner>img,div.midle>div.image>img");
const ourTopBrands=document.querySelectorAll("div.brands>div.items>a>img")
const swiperSlids = document.querySelectorAll("div.swiper-slide>img");
const standards = document.querySelectorAll("div.items#standards>img");
const ourApps = document.querySelectorAll("div.img-icons>img");
fetchSrc("http://localhost:3000/swiper-slid-src", "GET", swiperSlids);
fetchSrc("http://localhost:3000/Our-top-brands", "GET", ourTopBrands);
fetchSrc("http://localhost:3000/standards", "GET", standards);
fetchSrc("http://localhost:3000/ourAppsIcons", "GET", ourApps);
fetchSrc(
  "http://localhost:3000/What'snew&Bestoffers-src",
  "GET",
  wathsNew_Bestoffers
);
const fetchtext = async (url, method, arry) => {
  const res = await fetch(url, {
    method: method,
  });
  const data = await res.json();
  data.forEach((elem, i) => {
    if(i<arry.length){
      arry[i].innerHTML += elem;
    }
  });
};
const swiperitems = document.querySelectorAll(
  "div.items>div.text-1,div.text-2,div.button>button"
);
const allbtns = document.querySelectorAll("#ft-btn");
const links = document.querySelectorAll("div.links>a");
const lowMnue_items = document.querySelectorAll("div.MN>a,a.MN-item,span.MN-item");
const footerMnueItems=document.querySelectorAll("div.linksContents>ul>li>a,div.linksContents>ul>li.li-main,a.li-main,div.li-main")
fetchtext("http://localhost:3000/swiper-slid-items", "GET", swiperitems);
fetchtext("http://localhost:3000/all-buttons", "GET", allbtns);
fetchtext("http://localhost:3000/links-after-swiper", "GET", links);
fetchtext("http://localhost:3000/footerMnueItems", "GET", footerMnueItems);
fetchtext("http://localhost:3000/mnueAllItems", "GET",lowMnue_items);
//////////////////////////////////////////////////////////////////////////////////////
const whatsnew_Toptext = document.querySelectorAll(
  "li#whatsnew>a>div.top-text"
);
const whatsnew_Maintext = document.querySelectorAll(
  "li#whatsnew>a>div.main-text"
);
const whatsnew_price = document.querySelectorAll("li#whatsnew>a>div.price");
const Bestoffers_Toptext = document.querySelectorAll(
  "li#Bestoffers>a>div.top-text"
);
const Bestoffers_Maintext = document.querySelectorAll(
  "li#Bestoffers>a>div.main-text"
);
const Bestoffers_price = document.querySelectorAll("li#Bestoffers>a>div.price");
const hairNail_Toptext = document.querySelectorAll(
  "li#hair-nail>a>div.top-text"
);
const hairNail_Maintext = document.querySelectorAll(
  "li#hair-nail>a>div.main-text"
);
const hairNail_price = document.querySelectorAll("li#hair-nail>a>div.price");
async function MainItems(
  url,method,arry_of,arry_1,arry_2,arry_3
) {
  const res = await fetch(url, {
    method: method,
  });
  const data = await res.json();
  data[arry_of].forEach((elem, i) => {
    arry_1[i].innerHTML += elem.toptext;
    arry_2[i].innerHTML += elem.maintext;
    arry_3[i].firstElementChild.innerHTML = elem.price[0];
    arry_3[i].lastElementChild.innerHTML = elem.price[1];
  });
}
MainItems(
  "http://localhost:3000/MainItems",
  "GET",
  "whatsnew",
  whatsnew_Toptext,
  whatsnew_Maintext,
  whatsnew_price
);
MainItems(
  "http://localhost:3000/MainItems",
  "GET",
  "Bestoffers",
  Bestoffers_Toptext,
  Bestoffers_Maintext,
  Bestoffers_price
);
MainItems(
  "http://localhost:3000/MainItems",
  "GET",
  "Hair & Nail",
  hairNail_Toptext,
  hairNail_Maintext,
  hairNail_price
);
async function OB_text(url,method,arry) {
  const res = await fetch(url, {
    method: method,
  });
  const data = await res.json();
  let i =0
  for (const key in data) {
    arry[i].innerHTML += data[key];
    i++
  }
}
const bannerTitle=document.querySelectorAll("div#banner-title,h3#banner-title")
OB_text("http://localhost:3000/all-banner-titles","GET",bannerTitle)
const allText=document.querySelectorAll(".allText")
async function OB_text_smart(url,method,arry) {
  const res = await fetch(url, {
    method: method,
  });
  const data = await res.json();
  let i = 1 
  for (const key in data) {
    data[key].forEach((elem) => {
      if(i==1){
        arry[0].innerHTML+=elem.firstText
        arry[1].innerHTML+=elem.secoundText
      }else if(i==2){
        arry[2].innerHTML+=elem.firstText
        arry[3].innerHTML+=elem.secoundText
      }
      else if(i==3){
        arry[4].innerHTML+=elem.firstText
        arry[5].innerHTML+=elem.secoundText
      }
      else if(i==4){
        arry[6].innerHTML+=elem.firstText
        arry[7].innerHTML+=elem.secoundText
      }
      else if(i==5){
        arry[8].src=elem.icon
        arry[9].innerHTML+=elem.firstText
        arry[10].innerHTML+=elem.secoundText
      }
      else if(i==6){
        arry[11].src=elem.icon
        arry[12].innerHTML+=elem.firstText
        arry[13].innerHTML+=elem.secoundText
      }
      else if(i==7){
        arry[14].src=elem.icon
        arry[15].innerHTML+=elem.firstText
        arry[16].innerHTML+=elem.secoundText
      }
      else if(i==8){
        arry[17].innerHTML+=elem.firstText
        arry[18].innerHTML+=elem.secoundText
      }
      else if(i==9){
        arry[19].innerHTML+=elem.firstText
        arry[20].innerHTML+=elem.secoundText
      }
      i++
    });
  }
}
OB_text_smart("http://localhost:3000/allText","GET",allText)