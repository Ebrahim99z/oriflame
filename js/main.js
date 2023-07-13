const body = document.querySelector("body");
const nav = document.querySelector("header>nav");
//menu height on scroll
let lastKnownScrollPosition = 0;
function doSomething(scrollPos) {
  if (scrollPos == 0) {
    body.classList.remove("top-nav--is-shrunk");
  } else {
    body.classList.add("top-nav--is-shrunk");
  }
  nav.style.height = "--top-nav-height";
}
document.addEventListener("scroll", () => {
  lastKnownScrollPosition = window.scrollY;
  doSomething(lastKnownScrollPosition);
});
function closeMnue() {
  if (
    document
      .querySelectorAll(
        "nav.main-header>div.mnue>div.mnue-logo>button>div.line"
      )[1]
      .classList.contains("line-2")
  ) {
    setTimeout(() => {
      MnueIcon.firstElementChild.classList.toggle("line-1");
      document
        .querySelectorAll(
          "nav.main-header>div.mnue>div.mnue-logo>button>div.line"
        )[1]
        .classList.toggle("line-2");
      MnueIcon.lastElementChild.classList.toggle("line-3");
      MnueMainDiv.remove();
      body.style.overflow = "unset";
      body.style.paddingRight = "unset";
    }, 340);
  }
}
function bodyOverFlow(int) {
  body.style.overflow = "hidden";
  if (window.screen.width > 1365) {
    body.style.paddingRight = `${int}px`;
  }
}
function bodyOverFlowNo() {
  body.style.overflow = "unset";
  body.style.paddingRight = "unset";
}
//shop icon
const shopIcon = document.querySelector("a.shop-icon");
let f = 0;
shopIcon.addEventListener("mouseenter", () => {
  closeMnue();
  setTimeout(() => {
    bodyOverFlow(15);
    const shopElementMain = document.createElement("div");
    shopElementMain.classList = "mainDiv";
    document.body.append(shopElementMain);
    shopElementMain.innerHTML =
      `<div class="mainDivBulr" style="opacity: 1; transition: opacity 0ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;"></div>` +
      `<div class="shopIcon">
      <div class="shopIconTitle"><div class="title"><a class="titleA">Shopping bag (0)</a></div></div>
      <div class="shopIconEmpty">
        <div class="title">
          Empty bag
          <p class="titleP">- Looking pretty empty in your bag -</p>
        </div>
      </div>
      <div class="btn">
      <a class="btnA"><p class="btnP">Go to basket</p></a>
      </div>
    </div>`;
    shopElementMain.lastElementChild.addEventListener("mouseenter", () => {
      f++;
    });
    shopElementMain.lastElementChild.addEventListener("mouseleave", () => {
      shopElementMain.remove();
      bodyOverFlowNo();
      f--;
    });
    shopIcon.addEventListener("mouseleave", () => {
      setTimeout(() => {
        if (f <= 0) {
          shopElementMain.remove();
          bodyOverFlowNo();
        }
      }, 380);
    });
  }, 340);
});
/*new slater div*/
const sub = document.querySelector("footer>div.sub");
sub.addEventListener("click", () => {
  bodyOverFlow(15);
  const subOpen = document.createElement("div");
  subOpen.classList = "mainSlater";
  document.body.append(subOpen);
  const subBulr = document.createElement("div");
  subBulr.classList = "slaterBulr";
  const slaterMain = document.createElement("div");
  slaterMain.classList = "slaterMain";
  subOpen.append(slaterMain, subBulr);
  const slater = document.createElement("div");
  slater.classList = "slater";
  slaterMain.append(slater);
  const slaterItems = [
    (icon = document.createElement("div")),
    (head = document.createElement("h2")),
    (main = document.createElement("div")),
    (btn = document.createElement("div")),
  ];
  icon.style.position = "absolute";
  icon.style.right = "0px";
  icon.innerHTML = `<button class='slaterIconBtn'><svg style='width:24px; height:24px;' viewbox='0 0 24 24'><path d="m12.961 12 6.09-6.09a.678.678 0 1 0-.961-.961L12 11.039l-6.09-6.09a.678.678 0 1 0-.961.961l6.09 6.09-6.09 6.09a.678.678 0 0 0 .481 1.16.676.676 0 0 0 .481-.199l6.09-6.09 6.09 6.09c.133.133.306.199.481.199s.348-.066.481-.199a.678.678 0 0 0 0-.961L12.963 12z"></path></svg></button>
  `;
  head.classList.add("slaterH2");
  head.innerHTML = `<svg class='slaterH2-Svg' viewbox='0 0 24 24'><path d="M20.445 3.24a1.13 1.13 0 0 0-1.245-.098l.006-.003-15.5 8.361a1.146 1.146 0 0 0 .152 2.081l.008.003 3.774 1.348-.385 3.024a1.143 1.143 0 0 0 1.986.906l.001-.001 1.944-2.18 3.984 3.983a1.144 1.144 0 0 0 1.919-.534l.002-.008 3.77-15.711a1.127 1.127 0 0 0-.413-1.17l-.003-.002zM4.23 12.508c-.001-.013.001-.015.01-.02l13.012-6.987-9.126 8.408zm4.139 5.59.416-3.27 7.458-6.871-5.484 7.509zm7.595 1.773L11.9 15.806l7.548-10.335z"></path></svg>
  <h3 class='slaterH3'>Newsletter</h3>
  `;
  main.classList.add("slaterMainBox");
  main.innerHTML = `<p class="slaterMainP">Sign up today and be the first to get our best deals, latest news and beauty tips.</p>`;
  const slaterBox = document.createElement("div");
  slaterBox.classList = "MainBox";
  slaterBox.innerHTML = `<label class='label'>Enter your e-mail adress *</label>
  <div class='textBox'>
  <input type="email" class="input" value="">
  <svg class='errIcon' viewbox='0 0 24 24'><path d="M12 20.25c4.549 0 8.25-3.701 8.25-8.25S16.549 3.75 12 3.75 3.75 7.451 3.75 12s3.701 8.25 8.25 8.25zm0-15.469c3.98 0 7.219 3.239 7.219 7.219S15.98 19.219 12 19.219 4.781 15.98 4.781 12 8.02 4.781 12 4.781zm-.516 7.735V8.391a.516.516 0 1 1 1.032 0v4.125a.516.516 0 1 1-1.032 0zm-.102 2.991a.617.617 0 1 1 1.234-.002.617.617 0 0 1-1.234.002z" fill='red'></path></svg>
  <svg class='okIcon' viewbox='0 0 24 24'><path d="M12 3.75c-2.212 0-4.288.858-5.846 2.416S3.738 9.8 3.738 12.012a8.202 8.202 0 0 0 2.416 5.821A8.214 8.214 0 0 0 12 20.25a8.18 8.18 0 0 0 3.206-.649c.983-.416 1.867-1.011 2.627-1.768s1.358-1.639 1.776-2.619a8.121 8.121 0 0 0 .653-3.202c0-4.555-3.706-8.261-8.261-8.261zm7.244 8.261c0 1.943-.753 3.768-2.12 5.138s-3.19 2.126-5.132 2.126c-1.942 0-3.767-.755-5.138-2.126s-2.126-3.195-2.126-5.138c0-1.944.755-3.773 2.126-5.149 1.372-1.378 3.197-2.137 5.138-2.137s3.763.759 5.132 2.137a7.26 7.26 0 0 1 2.12 5.149z"></path>
  <path d="m14.332 9.745-3.486 3.465-1.16-1.172a.488.488 0 0 0-.668-.023l-.011.01a.49.49 0 0 0-.024.71l1.517 1.517a.486.486 0 0 0 .689 0l3.831-3.817a.489.489 0 0 0-.007-.697.485.485 0 0 0-.681.006z"></path>
  </svg>
  </div>
  <p class='Pfalse'>Email error</p> 
  `;
  btn.innerHTML = `<div class='btnMain'><button class='btnNew'>SUBSCRIBE</button></div>`;
  main.append(slaterBox);
  slaterItems.forEach((elem) => {
    slater.append(elem);
  });
  const labelFucos = document.querySelector("div.MainBox>label");
  const input = document.querySelector("div.textBox>input");
  input.addEventListener("click", () => {
    labelFucos.style.color = "#68bb93";
    input.style.borderColor = "#68bb93";
  });
  input.addEventListener("keyup", () => {
    let email = input.value;
    let chekEmail = /^[^]+\.[a-z]{2,3}$/;
    if (email.match(chekEmail)) {
      document.querySelector("svg.okIcon").style.display = "block";
      labelFucos.style.color = "#68bb93";
      input.style.borderColor = "#68bb93";
      document.querySelector("p.Pfalse").style.visibility = "hidden";
      document.querySelector("svg.errIcon").style.display = "none";
      document.querySelector("button.btnNew").classList.add("btnHover");
    } else {
      document.querySelector("p.Pfalse").style.visibility = "visible";
      document.querySelector("svg.errIcon").style.display = "block";
      document.querySelector("svg.okIcon").style.display = "none";
      labelFucos.style.color = "rgb(218, 52, 72)";
      input.style.borderColor = "rgb(218, 52, 72)";
      document.querySelector("button.btnNew").classList.remove("btnHover");
    }
  });
  document
    .querySelector("button.slaterIconBtn")
    .addEventListener("click", () => {
      close();
    });
  subOpen.addEventListener("click", OutSub);
  function OutSub(ev) {
    if (ev.target == slaterMain) {
      close();
    }
  }
  function close() {
    subOpen.remove();
    bodyOverFlowNo();
  }
});
/*chat with us*/
const chatOpen = document.querySelector("div.chatOpen");
const chatWithUs = document.querySelector("div.icon-chat");
const closeIcon = document.querySelector("div.chatOpenTitle-icons>svg");
const miniIcon = document.querySelector("div.chatOpenTitle-icons>div.mini");
const input = document.querySelectorAll("td>input.Req");
input.forEach((elem) => {
  elem.addEventListener("keyup", () => {
    if (elem.value == "") {
      elem.style.borderColor = "#C00D1E";
    } else {
      elem.style.borderColor = "#68bb93";
    }
  });
});
chatOpen.addEventListener("click", (ev) => {
  if (input[0].value == "" && ev.target != input[0]) {
    input[0].style.borderColor = "#C00D1E";
  }
});
input[1].addEventListener("click", () => {
  chatOpen.addEventListener("click", rem);
});
function rem(ev) {
  if (input[1].value == "" && ev.target != input[1]) {
    input[1].style.borderColor = "#C00D1E";
  }
}
chatWithUs.addEventListener("click", () => {
  input[0].style.borderColor = "#68bb93";
  input[1].style.borderColor = "#68bb93";
  input[0].focus();
  chatOpen.style.bottom = "0%";
});
closeIcon.addEventListener("click", () => {
  chatOpen.removeEventListener("click", rem);
  chatOpen.style.bottom = "-130%";
  chatWithUs.style.color = "rgb(255, 255, 255)";
  chatWithUs.style.borderColor = "rgb(0, 118, 129)";
  chatWithUs.style.background = "rgb(0, 118, 129)";
  chatWithUs.firstElementChild.style.fill = "#fff";
});
miniIcon.addEventListener("click", () => {
  chatOpen.style.bottom = "-130%";
  chatWithUs.style.color = "#000";
  chatWithUs.style.borderColor = "#ccc";
  chatWithUs.style.background = "#fff";
  chatWithUs.firstElementChild.style.fill = "#000";
});
/*Main mnue*/
const MnueMain = document.querySelector("nav.main-header");
const MnueIcon = document.querySelector(
  "nav.main-header>div.mnue>div.mnue-logo>button"
);

MnueIcon.addEventListener("click", () => {
  var MatchMedia = window.matchMedia("(max-width:991px)").matches;
  if (!MatchMedia) {
    //mune icon cheng
    MnueIcon.firstElementChild.classList.toggle("line-1");
    document
      .querySelectorAll(
        "nav.main-header>div.mnue>div.mnue-logo>button>div.line"
      )[1]
      .classList.toggle("line-2");
    MnueIcon.lastElementChild.classList.toggle("line-3");
    //open mnue div
    if (MnueIcon.firstElementChild.classList.contains("line-1")) {
      setTimeout(() => {
        MnueMainDiv = document.createElement("div");
        MnueMainDiv.classList = "mainMnue";
        MnueMain.append(MnueMainDiv);
        let MnueMainItemsDiv = document.createElement("div");
        MnueMainItemsDiv.classList = "mainMnueItemsDiv";
        MnueMainDiv.append(MnueMainItemsDiv);
        let MnueMainItems = [
          (Ul = document.createElement("ul")),
          (divShow = document.createElement("div")),
          (divBlur = document.createElement("div")),
        ];
        Ul.classList = "MnueItems-ul";
        let UlDiv = document.createElement("div");
        UlDiv.style =
          "--backGroundColor:rgba(229, 229, 229, 0.20);--borderColor:#fff;";
        UlDiv.style.width = "100%";
        UlDiv.style.paddingLeft = "0";
        UlDiv.classList.add("MnueItems-li-a");
        UlDiv.innerHTML = `
      <div class="mnueTitre">
        <div class="divImg"><img class='mnueTitreImg' src=""></div>
        <p class="mnueTitreP">Get personal product recommendations</p>
      </div>
      `;
        Ul.prepend(UlDiv);
        divShow.classList = "MnueItems-divShow";
        divBlur.classList = "MnueItems-divBlur";
        MnueMainItems.map((elem) => {
          MnueMainItemsDiv.append(elem);
        });
        document.querySelector("div.divImg>img").src = "./image/div-1-img.jpg";
        for (i = 1; i <= 13; i++) {
          let li = document.createElement("li");
          let a = document.createElement("a");
          li.style.marginBottom = "5px";
          Ul.appendChild(li);
          li.appendChild(a);
          a.classList = "MnueItems-li-a";
          if (i == 3) {
            a.remove();
            li.append(document.createElement("p"));
            document.querySelector("ul.MnueItems-ul>li>p").classList =
              "MnueItems-li-a";
          }
          if (i == 13) {
            li.style.marginBottom = "0px";
            li.appendChild(a.cloneNode(true));
          }
        }
        const mnueItemsA = document.querySelectorAll("ul.MnueItems-ul>li");
        mnueItemsA.forEach((elem, i) => {
          if (i < 3) {
            elem.firstElementChild.style =
              "--borderColor:#fff;--backGroundColor:rgba(229, 229, 229, 0.20);";
          }
          if (i == 12) {
            elem.childNodes.forEach((item) => {
              item.style =
                "--backGroundColor:#fff;--borderColor:#fff; lineHeight:1.5rem;";
              item.classList.add("MnueItems-li-a-last");
            });
          }
        });
        const mnueAllItems = document.querySelectorAll(
          "ul.MnueItems-ul>li>a,ul.MnueItems-ul>li>p"
        );
        const fetchtext = async (url, method, arry) => {
          const res = await fetch(url, {
            method: method,
          });
          const data = await res.json();
          data.forEach((elem, i) => {
            if (i < arry.length) {
              arry[i].innerHTML += elem;
            }
          });
        };
        const mnueAllItems_style = [
          "--backGroundColor:rgb(145 231 227/20%);--borderColor:rgb(145, 231, 227);",
          "--backGroundColor:rgb(231 147 183 /20%);--borderColor:rgb(231, 147, 183);",
          "--backGroundColor:rgb(182 173 165/20%);--borderColor:rgb(182, 173, 165)",
          "--backGroundColor:rgb(39 116 174 / 20%);--borderColor:rgb(39, 116, 174);",
          "--backGroundColor:rgb(240 194 100 / 20%);--borderColor:rgb(240, 194, 100);",
          "--backGroundColor:rgb(255 128 114 / 20%);--borderColor:rgb(255, 128, 114);",
          "--backGroundColor:rgb(104 91 199 / 20%);--borderColor:rgb(104, 91, 199);",
          "--backGroundColor:rgb(0 118 129 / 20%);--borderColor:rgb(0, 118, 129);",
          "--backGroundColor:rgb(126 209 234 / 20%);--borderColor:rgb(126, 209, 234);",
        ];
        mnueAllItems.forEach((elem, i) => {
          if (i > 2 && i < 12) {
            elem.style = mnueAllItems_style[i - 3];
          }
        });
        fetchtext("http://localhost:3000/mnueAllItems", "GET", mnueAllItems);
        /*div in any li*/
        const liShowDiv = document.querySelectorAll(
          "ul.MnueItems-ul>li,ul.MnueItems-ul>div"
        );
        liShowDiv.forEach((elem, i) => {
          elem.addEventListener("mouseenter", () => {
            //console.log(i);
            if (i < 13) {
              divShow.innerHTML = "";
            }
            let div = document.createElement("div");
            if (i != 13 && i != 1) {
              divShow.append(div);
            }
            if (i == 0) {
              div.classList = "item-1";
              div.innerHTML = `
            <div>
              <div style="margin-top:12.5px;">
                <div class="item-1-text">Get personal product recommendations</div>
                <p style="margin: 10px 0px 0px; font-size:12px;">Reach out to your independent Oriflame Brand Partner to get personal beauty advise and product recommendations.</p>
                <p style="margin: 10px 0px 0px;"><a href="#" class="item-1-text-a-se item-1-text-a">SEE ALL BENEFITS</a></p>
                <p style="margin: 10px 0px 10px;"><a href="#" class="item-1-text-a" style="font-weight: normal;">ian@ianorford.com</a></p>
              </div>
            </div>
            <div>
              <div class="item-1-div-image"><img></div>
            </div>
            `;
              document.querySelector("div.item-1-div-image>img").src =
                document.querySelector("div.divImg>img").src;
            }
            if (i == 2) {
              div.classList = "item-2";
              div.innerHTML = `
            <div class="item-2-title">
              <a href="#" class='item-2-title-a'>Catalogue 09</a>
              <p class="item-2-title-p">7.6.2023 - 28.6.2023</p>
            </div>
            <a href="#" class="item-2-image"><img src="./image/div-2-img.jpg"></a>
            <div class="item-2-image-link">
              <a href="#" class="item-2-image-link-a">See all</a>
            </div>
            `;
            }
            if (i == 3) {
              div.classList = "item-3";
              div.innerHTML = `
            <div class="item-3-Div">
              <a href="#" class="item-3-Div-a">
                <img src="./image/mnue-Inspiration-img/img-2.jpg">
                <span class="image-span">Editorials</span>
              </a>
              <a href="#" class="item-3-Div-a">
                <img src="./image/mnue-Inspiration-img/img-1.jpg">
                <span class="image-span">Ingredient library</span>
              </a>
              <a href="#" class="item-3-Div-a">
                <img src="./image/mnue-Inspiration-img/img-3.jpg">
                <span class="image-span">Novage+</span>
              </a>
            </div>
            `;
            }
            /*real mnue start*/
            if (i > 3 && i < 13) {
              div.className = "realmnue";
              const divSecound = document.createElement("div");
              divSecound.className = "realmnue-main";
              div.appendChild(divSecound);
              const divSecoundTitle = document.createElement("div");
              divSecoundTitle.className = "realmnue-main-title";
              divSecoundTitle.innerHTML = `
            <svg class='realmnue-main-title-svg' viewbox='0 0 24 24'>
              <path d="M19.245 4.225a1.435 1.435 0 0 0-1.078-.475h-5.156c-.419 0-.812.173-1.078.475-.267.302-.39.713-.337 1.128l1.415 11.32v2.03c0 .853.694 1.547 1.547 1.547h2.063c.853 0 1.547-.694 1.547-1.547v-2.03l1.415-11.32a1.437 1.437 0 0 0-.337-1.128zm-2.624 14.994h-2.062a.517.517 0 0 1-.516-.516v-1.547h3.094v1.547a.517.517 0 0 1-.516.516zm.576-3.094h-3.215L12.619 5.224a.386.386 0 0 1 .088-.316.39.39 0 0 1 .304-.127h5.156a.39.39 0 0 1 .304.127.395.395 0 0 1 .088.316l-1.363 10.901zM7.35 3.75c-1.867 0-2.565.736-2.639.82a1.35 1.35 0 0 0-.181 1.42l1.262 2.523v10.191c0 .853.694 1.547 1.547 1.547s1.547-.694 1.547-1.547V8.513l1.262-2.523a1.36 1.36 0 0 0-.173-1.418c-.072-.085-.754-.822-2.624-.822zm-.011 15.469a.517.517 0 0 1-.516-.516V8.906h1.031v9.797a.517.517 0 0 1-.516.516zm1.887-13.69L8.052 7.875H6.627L5.454 5.529c-.033-.066-.014-.224.025-.268.005-.005.489-.479 1.872-.479 1.365 0 1.839.459 1.84.459.049.058.069.22.035.288z"></path>
            </svg>
            <a href="#" class="realmnue-main-title-a">What's new</a>
            `;
              const divSecoundMain = document.createElement("div");
              divSecoundMain.className = "realmnue-main-Main";
              const divSecoundMainItems = document.createElement("div");
              divSecoundMainItems.className = "realmnue-main-Main-items";
              divSecoundMainItems.innerHTML = `<a heref="#" class="realmnue-main-Main-items-a"></a>`;
              function appendItems(Div_num) {
                for (let i = 1; i <= Div_num; i++) {
                  divSecound.prepend(
                    divSecoundTitle,
                    divSecoundMain.cloneNode(true)
                  );
                }
                if (i == 12 || i == 10) {
                  document.querySelector("div.realmnue-main-title").remove();
                }
              }
              function appendSub_items(num, el) {
                for (ind = 0; ind < num; ind++) {
                  el.append(divSecoundMainItems.cloneNode(true));
                }
              }
              async function OB_text(url, method, arry_of) {
                const res = await fetch(url, {
                  method: method,
                });
                const sub_item = document.querySelectorAll(
                  "a.realmnue-main-Main-items-a"
                );
                const data = await res.json();
                data[arry_of].forEach((elem, i) => {
                  if (i < sub_item.length) {
                    sub_item[i].innerHTML += elem;
                  }
                });
              }
              if (i === 4) {
                appendItems(10);
                document
                  .querySelectorAll("div.realmnue-main-Main")
                  .forEach((elem, i) => {
                    if (i == 0) {
                      appendSub_items(4, elem);
                    } else if (i == 1) {
                      appendSub_items(6, elem);
                    } else if (i == 2) {
                      appendSub_items(3, elem);
                    } else if (i == 3) {
                      appendSub_items(3, elem);
                    } else if (i == 4) {
                      appendSub_items(3, elem);
                    } else if (i == 5) {
                      appendSub_items(4, elem);
                    } else if (i == 6) {
                      appendSub_items(1, elem);
                    } else if (i == 7) {
                      appendSub_items(1, elem);
                    } else if (i == 8) {
                      appendSub_items(1, elem);
                    } else if (i == 9) {
                      appendSub_items(7, elem);
                    }
                    elem.firstElementChild.firstElementChild.classList.add(
                      "realmnue-main-Main-items-a-1"
                    );
                  });
                OB_text(
                  "http://localhost:3000/subMnue-items",
                  "GET",
                  "Skincare"
                );
              }
              if (i == 5) {
                appendItems(7);
                document
                  .querySelectorAll("div.realmnue-main-Main")
                  .forEach((elem, i) => {
                    if (i == 0) {
                      appendSub_items(8, elem);
                    } else if (i == 1) {
                      appendSub_items(6, elem);
                    } else if (i == 2) {
                      appendSub_items(5, elem);
                    } else if (i == 3) {
                      appendSub_items(5, elem);
                    } else if (i == 4) {
                      appendSub_items(3, elem);
                    } else if (i == 5) {
                      appendSub_items(1, elem);
                    } else if (i == 6) {
                      appendSub_items(4, elem);
                    } else if (i == 7) {
                      appendSub_items(4, elem);
                    }
                    elem.firstElementChild.firstElementChild.classList.add(
                      "realmnue-main-Main-items-a-1"
                    );
                  });
                OB_text(
                  "http://localhost:3000/subMnue-items",
                  "GET",
                  "Make-Up"
                );
              }
              if (i == 6) {
                appendItems(3);
                document
                  .querySelectorAll("div.realmnue-main-Main")
                  .forEach((elem, i) => {
                    if (i == 0) {
                      appendSub_items(5, elem);
                    } else if (i == 1) {
                      appendSub_items(3, elem);
                    } else if (i == 2) {
                      appendSub_items(6, elem);
                    }
                    elem.firstElementChild.firstElementChild.classList.add(
                      "realmnue-main-Main-items-a-1"
                    );
                  });
                OB_text(
                  "http://localhost:3000/subMnue-items",
                  "GET",
                  "Fragrance"
                );
              }
              if (i == 7) {
                appendItems(9);
                document
                  .querySelectorAll("div.realmnue-main-Main")
                  .forEach((elem, i) => {
                    if (i == 0) {
                      appendSub_items(5, elem);
                    } else if (i == 1) {
                      appendSub_items(5, elem);
                    } else if (i == 2) {
                      appendSub_items(3, elem);
                    } else if (i == 3) {
                      appendSub_items(1, elem);
                    } else if (i == 4) {
                      appendSub_items(1, elem);
                    } else if (i == 5) {
                      appendSub_items(1, elem);
                    } else if (i == 6) {
                      appendSub_items(1, elem);
                    } else if (i == 7) {
                      appendSub_items(1, elem);
                    } else if (i == 8) {
                      appendSub_items(6, elem);
                    }
                    elem.firstElementChild.firstElementChild.classList.add(
                      "realmnue-main-Main-items-a-1"
                    );
                  });
                OB_text(
                  "http://localhost:3000/subMnue-items",
                  "GET",
                  "Bath & Body"
                );
              }
              if (i == 8) {
                appendItems(6);
                document
                  .querySelectorAll("div.realmnue-main-Main")
                  .forEach((elem, i) => {
                    if (i == 0) {
                      appendSub_items(1, elem);
                    } else if (i == 1) {
                      appendSub_items(1, elem);
                    } else if (i == 2) {
                      appendSub_items(1, elem);
                    } else if (i == 3) {
                      appendSub_items(4, elem);
                    } else if (i == 4) {
                      appendSub_items(3, elem);
                    } else if (i == 5) {
                      appendSub_items(6, elem);
                    }
                    elem.firstElementChild.firstElementChild.classList.add(
                      "realmnue-main-Main-items-a-1"
                    );
                  });
                OB_text("http://localhost:3000/subMnue-items", "GET", "Hair");
              }
              if (i == 9) {
                appendItems(4);
                document
                  .querySelectorAll("div.realmnue-main-Main")
                  .forEach((elem, i) => {
                    if (i == 0) {
                      appendSub_items(4, elem);
                    } else if (i == 1) {
                      appendSub_items(4, elem);
                    } else if (i == 2) {
                      appendSub_items(3, elem);
                    } else if (i == 3) {
                      appendSub_items(2, elem);
                    }
                    elem.firstElementChild.firstElementChild.classList.add(
                      "realmnue-main-Main-items-a-1"
                    );
                  });
                OB_text(
                  "http://localhost:3000/subMnue-items",
                  "GET",
                  "Accessories"
                );
              }
              if (i == 10) {
                appendItems(4);
                document
                  .querySelectorAll("div.realmnue-main-Main")
                  .forEach((elem, i) => {
                    if (i == 0) {
                      appendSub_items(9, elem);
                    } else if (i == 1) {
                      appendSub_items(1, elem);
                    } else if (i == 2) {
                      appendSub_items(1, elem);
                    } else if (i == 3) {
                      appendSub_items(2, elem);
                    }
                    elem.firstElementChild.firstElementChild.classList.add(
                      "realmnue-main-Main-items-a-1"
                    );
                  });
                OB_text(
                  "http://localhost:3000/subMnue-items",
                  "GET",
                  "Wellness"
                );
              }
              if (i == 11) {
                appendItems(9);
                document
                  .querySelectorAll("div.realmnue-main-Main")
                  .forEach((elem, i) => {
                    if (i == 0) {
                      appendSub_items(3, elem);
                    } else if (i == 1) {
                      appendSub_items(2, elem);
                    } else if (i == 2) {
                      appendSub_items(3, elem);
                    } else if (i == 3) {
                      appendSub_items(2, elem);
                    } else if (i == 4) {
                      appendSub_items(3, elem);
                    } else if (i == 5) {
                      appendSub_items(1, elem);
                    } else if (i == 6) {
                      appendSub_items(1, elem);
                    } else if (i == 7) {
                      appendSub_items(1, elem);
                    } else if (i == 8) {
                      appendSub_items(5, elem);
                    }
                    elem.firstElementChild.firstElementChild.classList.add(
                      "realmnue-main-Main-items-a-1"
                    );
                  });
                OB_text("http://localhost:3000/subMnue-items", "GET", "Men");
              }
              if (i == 12) {
                appendItems(3);
                document
                  .querySelectorAll("div.realmnue-main-Main")
                  .forEach((elem, i) => {
                    if (i == 0) {
                      appendSub_items(4, elem);
                    } else if (i == 1) {
                      appendSub_items(3, elem);
                    } else if (i == 2) {
                      appendSub_items(3, elem);
                    }
                    elem.firstElementChild.firstElementChild.classList.add(
                      "realmnue-main-Main-items-a-1"
                    );
                  });
                OB_text(
                  "http://localhost:3000/subMnue-items",
                  "GET",
                  "Kids & Baby"
                );
              }
            }
          });
        });
        MnueMainDiv.addEventListener("click", OutMnue);
        function OutMnue(ev) {
          if (ev.target == divBlur) {
            closeMnue();
          }
        }
      }, 200);
    } else {
      setTimeout(() => {
        MnueMainDiv.remove();
      }, 300);
    }
  } else {
    aside.append(ul);
    login.remove();
    btnP.classList.add("show");
    btnS.classList.remove("show");
    mnueLowSize.style.display = "unset";
    setTimeout(() => {
      bodyOverFlow(0);
      mnueLowSizeBulr.style =
        "background: rgba(0, 0, 0, 0.45);backdrop-filter: blur(2px);";
      aside.style.transform = "translate(0px , 0px)";
    }, 200);
  }
});
const mnueLowSize = document.querySelector("div.mnueLowSize");
const aside = document.querySelector("aside.mainMnue");
const mnueLowSizeBulr = document.querySelector("div.mnueLowSizeBlur");
const btnP = document.querySelector("button.mainMnueTitle-btn");
const btnS = document.querySelectorAll("button.mainMnueTitle-btn")[1];
const ul = document.querySelector("ul.mainMnue-ul");
const login = document.querySelector("div.login");
/*swiching & closing mnue*/
btnP.addEventListener("click", () => {
  aside.append(ul);
  login.remove();
  if (btnP.classList.contains("show")) {
    mnueLowSizeBulr.style = "unset";
    aside.style.transform = "translate(-100% , 0px)";
    setTimeout(() => {
      mnueLowSize.style.display = "none";
    }, 500);
    bodyOverFlowNo();
  } else {
    btnP.classList.add("show");
    btnS.classList.remove("show");
  }
});
btnS.addEventListener("click", () => {
  aside.append(login);
  ul.remove();
  if (btnS.classList.contains("show")) {
    mnueLowSizeBulr.style = "unset";
    aside.style.transform = "translate(-100% , 0px)";
    setTimeout(() => {
      mnueLowSize.style.display = "none";
    }, 500);
    bodyOverFlowNo();
  } else {
    btnS.classList.add("show");
    btnP.classList.remove("show");
  }
});
mnueLowSize.addEventListener("click", (ev) => {
  if (ev.target == mnueLowSizeBulr) {
    aside.append(ul);
    login.remove();
    if (btnP.classList.contains("show")) {
      mnueLowSizeBulr.style = "unset";
      aside.style.transform = "translate(-100% , 0px)";
      setTimeout(() => {
        mnueLowSize.style.display = "none";
      }, 500);
      bodyOverFlowNo();
    } else {
      btnP.classList.add("show");
      btnS.classList.remove("show");
    }
  }
});
const lowMnueul_items = document.querySelectorAll(
  "ul.mainMnue-ul >li,ul.mainMnue-ul >div"
);
/*mnue lowSize main*/
const div = document.createElement("div");
const divItem = document.createElement("div");
function lowMnueMainItems(num) {
  divItem.innerHTML = `
  <div class="lowMnueMain-items-div open">
    <a href="#"></a>
    <span>
      <svg viewbox="0 0 24 24" style="width:20px;height:20px;">
        <path d="M12.089 15.147a.369.369 0 0 0 .086-.025.378.378 0 0 0 .083-.046c.016-.01.035-.015.049-.027.01-.009.015-.021.023-.03.009-.01.021-.014.03-.023l4.577-5.371a.475.475 0 0 0-.053-.668.472.472 0 0 0-.667.053L12 13.958 7.783 9.01a.472.472 0 0 0-.833.308.47.47 0 0 0 .113.307l4.577 5.371c.009.011.022.015.032.025.008.009.011.02.021.028.015.012.033.017.049.027a.398.398 0 0 0 .083.046c.028.012.057.018.086.025.03.005.058.01.089.01s.059-.005.089-.01z"></path>
      </svg>
    </span>
  </div>
  `;
  divItem.style.paddingTop = "20px";
  divItem.className = "SubItems";
  for (let i = 0; i < num; i++) {
    div.appendChild(divItem.cloneNode(true));
  }
}
lowMnueul_items.forEach((elem, i) => {
  elem.addEventListener("click", lowMnueSwich);
  function lowMnueSwich(ev) {
    if (i === 0) {
      elem.firstElementChild.classList.toggle("bgColor");
      elem.firstElementChild.lastElementChild.classList.toggle("spanRotate");
      elem.append(div);
      if (i == 0 && elem.firstElementChild.classList.contains("bgColor")) {
        const hr = document.getElementById("HR");
        div.style.padding = "0px 30px 30px";
        elem.insertBefore(div, hr);
        div.innerHTML = `
        <p class="lowMnue-i1-p">Reach out to your independent Oriflame Brand Partner to get personal beauty advise and product recommendations.</p>
        <div class="lowMnue-i1-div"><a href="#" class="lowMnue-i1-div-a">SEE ALL BENEFITS</a></div>
        <div class="lowMnue-i1-div"><a href="#" class="lowMnue-i1-div-a">fayandandrew@ntlworld.com</a></div>
        <div style="margin-top:10px;">
          <div class="lowMnue-i1-div" style="margin-top: 18.75px;">
            <svg viewbox="2.8 4 16.5 16" style="width:22px;height:24px;margin: 7px 3px;">
            <path d="M19.245 4.225a1.435 1.435 0 0 0-1.078-.475h-5.156c-.419 0-.812.173-1.078.475-.267.302-.39.713-.337 1.128l1.415 11.32v2.03c0 .853.694 1.547 1.547 1.547h2.063c.853 0 1.547-.694 1.547-1.547v-2.03l1.415-11.32a1.437 1.437 0 0 0-.337-1.128zm-2.624 14.994h-2.062a.517.517 0 0 1-.516-.516v-1.547h3.094v1.547a.517.517 0 0 1-.516.516zm.576-3.094h-3.215L12.619 5.224a.386.386 0 0 1 .088-.316.39.39 0 0 1 .304-.127h5.156a.39.39 0 0 1 .304.127.395.395 0 0 1 .088.316l-1.363 10.901zM7.35 3.75c-1.867 0-2.565.736-2.639.82a1.35 1.35 0 0 0-.181 1.42l1.262 2.523v10.191c0 .853.694 1.547 1.547 1.547s1.547-.694 1.547-1.547V8.513l1.262-2.523a1.36 1.36 0 0 0-.173-1.418c-.072-.085-.754-.822-2.624-.822zm-.011 15.469a.517.517 0 0 1-.516-.516V8.906h1.031v9.797a.517.517 0 0 1-.516.516zm1.887-13.69L8.052 7.875H6.627L5.454 5.529c-.033-.066-.014-.224.025-.268.005-.005.489-.479 1.872-.479 1.365 0 1.839.459 1.84.459.049.058.069.22.035.288z"></path>
            </svg>
            <a href="#" style="color:rgb(0,0,0);">See my favourite products</a>
          </div>
        </div>
        `;
      } else {
        div.remove();
        div.innerHTML = "";
      }
    }
    if (ev.target === elem.firstElementChild) {
      if (i > 1 && i < 13) {
        elem.firstElementChild.classList.toggle("bgColor");
        elem.firstElementChild.lastElementChild.classList.toggle("spanRotate");
        elem.append(div);
      }
      if (i == 2 && elem.firstElementChild.classList.contains("bgColor")) {
        div.innerHTML = `
        <div style="padding: 20px 20px 5px 25px;">
            <a href="#" class="lowMnue-i2-a">
              <div class="lowMnue-i2-a-div-img"><img src="https://viewer.ipaper.io/oriflame/uk/2023010/Image.ashx?PageNumber=1&ImageType=Normal"></div>
              <div class="lowMnue-i2-a-div-title">
                <div>28.6.2023 - 19.7.2023</div>
                <div>Catalogue 10</div>
              </div>
              <div class="lowMnue-i2-a-icon">
                <svg viewbox="0 0 24 24">
                <path d="M15.894 11.89c-.008-.037-.015-.072-.031-.107a.507.507 0 0 0-.056-.102c-.012-.02-.018-.043-.034-.061-.011-.012-.026-.018-.037-.029-.012-.011-.017-.026-.029-.037L9.06 5.89a.587.587 0 0 0-.827.066.582.582 0 0 0 .066.825L14.422 12l-6.123 5.219a.584.584 0 0 0 .381 1.031c.134 0 .27-.046.38-.14l6.647-5.664c.014-.011.018-.027.031-.04.011-.01.024-.014.035-.026.015-.018.021-.041.034-.061a.57.57 0 0 0 .087-.209c.006-.037.012-.072.012-.11s-.006-.073-.012-.11z"></path>
                </svg>
              </div>
            </a>
        </div>
        <div style="margin-top:15px;text-align:center;">
          <a href="#" class="lowMnue-i2-seeAll">See all</a>
        </div>
        `;
      } else if (
        i == 3 &&
        elem.firstElementChild.classList.contains("bgColor")
      ) {
        div.innerHTML = `
        <ul class="lowMnue-i3-ul">
          <li><a href="#" class="green-hover">Editorials</a></li>
          <li><a href="#">Ingredient library</a></li>
          <li><a href="#">Novage+</a></li>
        </ul>
        `;
      } else if (
        i > 3 &&
        i < 13 &&
        elem.firstElementChild.classList.contains("bgColor")
      ) {
        function lowMnue_items(num, el, ae) {
          for (ind = 1; ind <= num; ind++) {
            el.append(ae.cloneNode(true));
          }
        }
        if (i == 4) {
          lowMnueMainItems(10);
        }
        if (i == 5) {
          lowMnueMainItems(7);
        }
        if (i == 6) {
          lowMnueMainItems(3);
        }
        if (i == 7) {
          lowMnueMainItems(9);
        }
        if (i == 8) {
          lowMnueMainItems(6);
        }
        if (i == 9) {
          lowMnueMainItems(4);
        }
        if (i == 10) {
          lowMnueMainItems(4);
        }
        if (i == 11) {
          lowMnueMainItems(9);
        }
        if (i == 12) {
          lowMnueMainItems(3);
        }
        //mnue lowSize main-innerItems
        const lowMnueInnerItems = document.querySelectorAll(
          "div.lowMnueMain-items-div"
        );
        async function OB_inner_title(url, method, arry_of) {
          const res = await fetch(url, {
            method: method,
          });
          const data = await res.json();
          data[arry_of].forEach((elem, i) => {
            if (i < lowMnueInnerItems.length) {
              lowMnueInnerItems[i].firstElementChild.innerHTML += elem;
            }
          });
        }
        lowMnueInnerItems.forEach((elem, index) => {
          const div = document.createElement("div");
          div.classList.add("_subMain");
          const a = document.createElement("a");
          a.classList.add("InnerItems");
          a.innerHTML="inner_Emty"
          elem.addEventListener("click", InnerItems);
          function InnerItems(ev) {
            if (elem.classList.contains("open")) {
              elem.lastElementChild.classList.toggle("spanRotate");
              elem.parentElement.append(div);
              elem.classList.remove("open");
              const dS = document.querySelector("div._subMain");
              if (index == 0) {
                lowMnue_items(3, dS, a);
              } else if (index == 1) {
                lowMnue_items(5, dS, a);
              } else if (index == 2) {
                lowMnue_items(2, dS, a);
              } else if (index == 3) {
                lowMnue_items(2, dS, a);
              } else if (index == 4) {
                lowMnue_items(2, dS, a);
              } else if (index == 5) {
                lowMnue_items(3, dS, a);
              } else if (index == 9) {
                lowMnue_items(7, dS, a);
              }
            } else {
              elem.lastElementChild.classList.toggle("spanRotate");
              div.remove();
              div.innerHTML = "";
              elem.classList.add("open");
            }
          }
        });
        if (i == 4) {
          OB_inner_title(
            "http://localhost:3000/mnue-low-size-titles",
            "GET",
            "Skincare"
          );
        }
        if (i == 5) {
          OB_inner_title(
            "http://localhost:3000/mnue-low-size-titles",
            "GET",
            "Make-Up"
          );
        }
        if (i == 6) {
          OB_inner_title(
            "http://localhost:3000/mnue-low-size-titles",
            "GET",
            "Fragrance"
          );
        }
        if (i == 7) {
          OB_inner_title(
            "http://localhost:3000/mnue-low-size-titles",
            "GET",
            "Bath & Body"
          );
        }
        if (i == 8) {
          OB_inner_title(
            "http://localhost:3000/mnue-low-size-titles",
            "GET",
            "Hair"
          );
        }
        if (i == 9) {
          OB_inner_title(
            "http://localhost:3000/mnue-low-size-titles",
            "GET",
            "Accessories"
          );
        }
        if (i == 10) {
          OB_inner_title(
            "http://localhost:3000/mnue-low-size-titles",
            "GET",
            "Wellness"
          );
        }
        if (i == 11) {
          OB_inner_title(
            "http://localhost:3000/mnue-low-size-titles",
            "GET",
            "Men"
          );
        }
        if (i == 12) {
          OB_inner_title(
            "http://localhost:3000/mnue-low-size-titles",
            "GET",
            "Kids & Baby"
          );
        }
      } else {
        div.remove();
        div.innerHTML = "";
      }
    }
  }
});
/*low size serch button*/
const serchIcon = document.querySelector("div.serch-icon-992px");
const serchContainer = document.querySelector("div.serch-container-992px");
const divBlurSerch = document.createElement("div");
const cleanIcon = document.querySelector("div.clic-icon");
cleanIcon.addEventListener("click", () => {
  document.querySelector("div.serch-box>input").value = "";
});
divBlurSerch.className = "serch-blur";
serchIcon.addEventListener("click", () => {
  serchContainer.classList.toggle("serch-active");
  serchIcon.append(divBlurSerch);
  if (serchContainer.classList.contains("serch-active") == false) {
    divBlurSerch.remove();
    document.querySelector("div.serch-box>input").value = "";
  }
});
//log in chek email
let flag = 0;
const logInputs = document.querySelectorAll("div.FR>input");
document.querySelector("svg#pass").addEventListener("click", () => {
  const passSvg = document.querySelector("svg#pass>path:nth-of-type(3)");
  if (flag === 0) {
    passSvg.style.display = "block";
    logInputs[1].type = "text";
    flag++;
  } else {
    passSvg.style.display = "none";
    logInputs[1].type = "password";
    flag--;
  }
});
logInputs.forEach((elem) => {
  elem.addEventListener("click", cheklog);
  function cheklog() {
    elem.parentElement.style.color = "rgb(104, 187, 147)";
    elem.style.borderColor = "rgb(104, 187, 147)";
    elem.parentElement.lastElementChild.style.display = "none";
  }
  elem.addEventListener("keyup", () => {
    if (elem.value == "") {
      elem.parentElement.style.color = "rgb(218, 52, 72)";
      elem.style.borderColor = "rgb(218, 52, 72)";
      elem.parentElement.lastElementChild.style.display = "block";
      elem.removeEventListener("click", cheklog);
    } else {
      elem.parentElement.style.color = "rgb(104, 187, 147)";
      elem.style.borderColor = "rgb(104, 187, 147)";
      elem.parentElement.lastElementChild.style.display = "none";
    }
  });
});
const footerMnueMobile = document.querySelectorAll("div.linksContents>ul");
footerMnueMobile.forEach((elem) => {
  elem.addEventListener("click", () => {
    elem.classList.toggle("ulMax");
  });
});
