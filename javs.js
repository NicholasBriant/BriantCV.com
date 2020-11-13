const container = document.querySelector(".container");
const divQuiBouge = document.querySelector(".divQuiBouge");
const info = document.querySelector(".titreInfo");
const mateteimg = document.querySelector(".mateteimg");
const parainfo = document.querySelector(".paraInfo");
const parainfo2 = document.querySelector(".paraInfo2");
const parainfo3 = document.querySelector(".paraInfo3");
const parainfo4 = document.querySelector(".paraInfo4");
const parainfo5 = document.querySelector(".paraInfo5");


container.addEventListener("mousemove", (e) => { //ça récupere les x et y de la souris et ça oriente la divQuiBouge en fonction
    let xAxis = (window.innerWidth/2 - e.pageX) / 20; // le/20 c'est pour freiner un peu le truc
    let yAxis = (window.innerHeight/2 - e.pageY) / 20;
    divQuiBouge.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
  });


  container.addEventListener("mouseenter", (event) => {
    divQuiBouge.style.transition = "none";
    //pour mettre en "3d", en fait ça met juste le texte en avant
    info.style.transform = "translateZ(130px)";
    mateteimg.style.transform = "translateZ(100px)";
    parainfo.style.transform = "translateZ(105px)";
    parainfo2.style.transform = "translateZ(110px)";
    parainfo3.style.transform = "translateZ(115px)";
    parainfo4.style.transform = "translateZ(120px)";
    parainfo5.style.transform = "translateZ(125px)";
    
  });


  container.addEventListener("mouseleave", (e) => { //Pour remettre divQuiBouge dans son état d'origine
    divQuiBouge.style.transition = "all 0.5s ease";
    divQuiBouge.style.transform = `rotateY(0deg) rotateX(0deg)`;
    mateteimg.style.transition = "all 0.5s ease";
    mateteimg.style.transform = `rotateY(0deg) rotateX(0deg)`;
    info.style.transition = "all 0.5s ease";
    info.style.transform = `rotateY(0deg) rotateX(0deg)`;
    parainfo.style.transition = "all 0.5s ease";
    parainfo.style.transform = `rotateY(0deg) rotateX(0deg)`;
    parainfo2.style.transition = "all 0.5s ease";
    parainfo2.style.transform = `rotateY(0deg) rotateX(0deg)`;
    parainfo3.style.transition = "all 0.5s ease";
    parainfo3.style.transform = `rotateY(0deg) rotateX(0deg)`;
    parainfo4.style.transition = "all 0.5s ease";
    parainfo4.style.transform = `rotateY(0deg) rotateX(0deg)`;
    parainfo5.style.transition = "all 0.5s ease";
    parainfo5.style.transform = `rotateY(0deg) rotateX(0deg)`;
  });

function cmarrant(){
    const mateteimg = document.querySelector(".mateteimg");
    mateteimg.style.src = "https://3.bp.blogspot.com/-C-inbRO9iCE/VXCBl8kw5hI/AAAAAAAAHWs/ZoRl4D4weaM/s1600/tobey-maguire.jpg";
}
