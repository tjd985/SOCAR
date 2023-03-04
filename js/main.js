import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const headerbarEL = document.querySelector("header>.header_bar");
const navEL = document.querySelector("header>.header_bar span");

const headermenuEL = document.querySelector("header .header__menu");
const navbgEL = document.querySelector("header .header__menu__background");

// header__menu바 초기 위치 설정(안보이게)
gsap.set(headermenuEL,{
  x: 1000
});

// 클릭시 header__menu 펼치기
navEL.addEventListener("click", () => {
  if(navEL.className === "material-symbols-outlined"){
    navEL.classList.add("open");
    navEL.textContent = "close";

    navbgEL.classList.add("open");
    headerbarEL.classList.add("open");

    gsap.to(headermenuEL,{
      x: 0,
      duration: .4,
      opacity: 1
    });
  } else{
    navEL.classList.remove("open");
    navEL.textContent = "menu";

    navbgEL.classList.remove("open");
    headerbarEL.classList.remove("open");
    
    gsap.to(headermenuEL,{
      x: 1000,
      duration: .4
    });
  }
});

// 스크롤에따라 headerBar 사라졌다 나왔다
const header_bar__hide = gsap.from(headerbarEL, { 
  yPercent: -100,
  paused: true,
  duration: 0.4,
  opacity: 0
}).progress(1);

ScrollTrigger.create({
  trigger: headerbarEL,
  start: "100% top",
  end: "5777px, 99%",
  toggleClass: "change",
  onUpdate: (self) => {
    self.direction === -1 ? header_bar__hide.play() : header_bar__hide.reverse()
  }
});


// section-1 FadeIn animation
let h1El = document.querySelector(".section-1>h1");

gsap.timeline().from(h1El,{
  y: 30,
  opacity: 0,
  delay: .3,
  duration: .5
})
.from(".download>a",{
  opacity:0,
  delay: .5,
  duration: .3
})
.from(".download__inside",{
  opacity: 0,
  x: 805,
  duration: .3
})
.from(".download>img",{
  opacity: 0,
  duration: .4
});


// section-2 contents animations
let all = Array.from(document.querySelectorAll(".section-2 .inner *:not(article)"));

all.forEach((section_insideEl) => {
  gsap.from(section_insideEl,{
    scrollTrigger: {
      trigger: section_insideEl,
      start: "10%, bottom",
      end: "top, bottom"
    },
    x: 70,
    opacity: 0,
    delay: .3,
    duration: .5,
    ease: "none"
  });
});


// section-3
const con_insideEl = document.querySelector(".section-3 .container__inside");

gsap.from(con_insideEl, {
  scrollTrigger: {
  trigger: ".section-3",
  start: "top, bottom",
  end: "top, bottom"
  },
  x: 500,
  duration: .5,
  ease: "none"
});

gsap.to(".section-3 strong:first-child",{
  scrollTrigger: {
    trigger: ".section-3",
    start: "top, bottom",
    end: "top, bottom"
    },
  innerText: 85591840, duration: 2, 
  snap: {
    innerText:5
  }
});


// section-4
let sec4Arr = Array.from(document.querySelectorAll(".section-4 li"));

sec4Arr.splice(0,4).forEach(function(sec4ArrEl){
  gsap.from(sec4ArrEl,{
    scrollTrigger: {
      trigger: ".section-4",
      start: "top, bottom",
      end: "top, bottom"
    },
    x: 800,
    duration: .5,
    ease: "none"
  });
});