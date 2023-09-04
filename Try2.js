const menu = document.querySelector('.menu');
const close =document.querySelector('.close')
const closeBox = document.querySelector('.closeBox');
const closeBoxChildren = document.querySelector('.closeBox').children;
const navPosters = document.querySelector('.posters')
const navUI = document.querySelector('.ui')
const menuCircle = document.getElementById('menucircle')
const closeCircle = document.getElementById('closecircle');
const logo = document.querySelector('.logo');
const postersBtn = document.getElementById('posters')
const before =window.getComputedStyle(
                 document.querySelector('.postersBtn'), '::before');
const ui_uxBtn = document.getElementById('ui/ux')
const pointer = document.querySelector('.pointer')
const projectsContainer = document.querySelector('.myWorksContainerProjects')
const uiuxContainer = document.querySelector('.myWorksContainerUIUX')
const morePostersContainer = document.querySelector('.myWorksContainerProjectsTextLink')
const morePosters = document.querySelector('.myWorksContainerProjectsTextLinkA')
const morePostersBox = document.querySelector('.boxPosters')
const myWorks = document.querySelector('.myWorks')

window.onscroll = function () {
  if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80){
    menuCircle.style.display = 'block'
    menuCircle.style.animation = 'menuCircleOpenMov 0.5s ease-in-out'
  } else {
    document.getElementById('menucircle').style.display = 'none'
    document.getElementById('homecircle').style.display = 'none'
    document.getElementById('aboutcircle').style.display = 'none'
    document.getElementById('workcircle').style.display = 'none'
    document.getElementById('contactcircle').style.display = 'none'
    closeCircle.style.display = 'none'
    document.querySelector('.heroHeaderCircle').style.animation = 'menuCircleCloseMov 0.5s ease-in-out'
  }
}


menuCircle.addEventListener('click', menuResult => {   
  document.getElementById('homecircle').style.display = 'block'
  document.getElementById('aboutcircle').style.display = 'block'
  document.getElementById('workcircle').style.display = 'block'
  document.getElementById('contactcircle').style.display = 'block'
    closeCircle.style.display = 'block'
    closeCircle.style.animation = 'none'
    menuCircle.style.display = 'none'
  
});

closeCircle.addEventListener('click', closeResult => {
  document.getElementById('homecircle').style.display = 'none'
  document.getElementById('aboutcircle').style.display = 'none'
  document.getElementById('workcircle').style.display = 'none'
  document.getElementById('contactcircle').style.display = 'none'
  closeCircle.style.display = 'none'
  menuCircle.style.display = 'block'
  menuCircle.style.animation = 'none'
})


menu.addEventListener('click', result);

function result (e) {
  e.preventDefault();
  menu.style.display = 'none';
  logo.style.marginRight = '17.5em';
  closeBox.style.display = 'block';
  closeBox.style.animation = 'openBoxMov 1s ease-in-out';
  closeBox.style.transform = 'translateX(0em)'
}


close.addEventListener('click', result2)

function result2 (x) {
  x.preventDefault();
  menu.style.display = 'block';
  logo.style.marginRight = '-2em';
  closeBox.style.animation = 'closeBoxMov 1s ease-in-out';
  closeBox.style.transform = 'translateX(45em)'
}

navPosters.addEventListener('click', postersResult1);

function postersResult1 (a){
  a.preventDefault();
  myWorks.scrollIntoView();
}

postersBtn.addEventListener('click', postersResult);

function postersResult (e) {
  e.preventDefault();
  postersBtn.style.textDecoration = 'underline';
  postersBtn.style.textDecorationColor = '#ff4294';
  postersBtn.style.textUnderlineOffset = '0.42em';
  ui_uxBtn.style.textDecoration = 'none';
  document.querySelector('.beforePostersBtn').style.display = 'none'
  document.querySelector('.beforeUIUXBtn').style.display = 'none'
  if($(window).width () <= 1500 && $(window).width () >= 1280){
    pointer.style.width = '5%';
    pointer.style.height = '5%';
    pointer.style.left = '18em';
    pointer.style.top = '138.8em';
    projectsContainer.style.display = 'block';
    morePostersContainer.style.display = 'block';
    uiuxContainer.style.display ='none';
  }
  if ($(window).width () <= 1280 && $(window).width () > 1080){
    pointer.style.width = '6%';
    pointer.style.height = '5%';
    pointer.style.left = '13em';
    pointer.style.top = '-0.5em';
    projectsContainer.style.display = 'block';
    morePostersContainer.style.display = 'block';
    uiuxContainer.style.display ='none';
  }

  if($(window).width () <= 1080 && $(window).width () > 1024) {
    pointer.style.width = '6%';
    pointer.style.height = '5%';
    pointer.style.left = '7em';
    pointer.style.top = '-0.5em';
    projectsContainer.style.display = 'block';
    morePostersContainer.style.display = 'block';
    uiuxContainer.style.display ='none';
  }

  if($(window).width () <= 1024 && $(window).width () > 960){
    pointer.style.width = '12%';
    pointer.style.height = '8%';
    pointer.style.left = '8em';
    pointer.style.top = '-0.5em';
    projectsContainer.style.display = 'block';
    morePostersContainer.style.display = 'block';
    uiuxContainer.style.display ='none';
  }

  if($(window).width () <= 960 && $(window).width () > 720){
    pointer.style.width = '12%';
    pointer.style.height = '8%';
    pointer.style.left = '7em';
    pointer.style.top = '-0.5em';
    projectsContainer.style.display = 'block';
    morePostersContainer.style.display = 'block';
    uiuxContainer.style.display ='none';
  }
  if ($(window).width () <= 720 && $(window).width () > 580) {
    pointer.style.width = '12%';
    pointer.style.height = '7%';
    pointer.style.left = '6em';
    pointer.style.top = '-0.5em';
    projectsContainer.style.display = 'block';
    morePostersContainer.style.display = 'block';
    uiuxContainer.style.display ='none';
  } 
  if ($(window).width () <= 580) {
    pointer.style.width = '10%';
    pointer.style.height = '5%';
    pointer.style.left = '4.5em';
    pointer.style.top = '-0.5em';
    projectsContainer.style.display = 'block';
    morePostersContainer.style.display = 'block';
    uiuxContainer.style.display ='none';
  }
  if ($(window).width () <= 10000 && $(window).width () > 1500){
    pointer.style.left = '15em';
    pointer.style.top = '-0.5em';
    projectsContainer.style.display = 'flex';
    morePostersContainer.style.display = 'block';
    uiuxContainer.style.display ='none';
  }
}

navUI.addEventListener('click', ui_uxResult1);

function ui_uxResult1 (b){
  b.preventDefault();
  myWorks.scrollIntoView();
}

ui_uxBtn.addEventListener('click', ui_uxResult);

function ui_uxResult (e) {
  e.preventDefault();
  ui_uxBtn.style.textDecoration = 'underline';
  ui_uxBtn.style.textDecorationColor = '#ff4294';
  ui_uxBtn.style.textUnderlineOffset = '0.42em';
  postersBtn.style.textDecoration = 'none'
  if($(window).width () <= 1500 && $(window).width () >= 1280){
    pointer.style.width = '8%';
    pointer.style.height = '8%';
    pointer.style.left = '69em';
    pointer.style.top = '138.8em';
    uiuxContainer.style.display ='block';
    projectsContainer.style.display = 'none';
    morePostersContainer.style.display = 'none';
  }
  if ($(window).width () <= 1280 && $(window).width () > 1080){
    pointer.style.width = '6%';
    pointer.style.height = '5%';
    pointer.style.left = '52.5em';
    pointer.style.top = '-0.5em';
    uiuxContainer.style.display ='block';
    projectsContainer.style.display = 'none';
    morePostersContainer.style.display = 'none';
  }

  if($(window).width () <= 1080 && $(window).width ()> 1024){
    pointer.style.width = '6%';
    pointer.style.height = '5%';
    pointer.style.left = '46.5em';
    pointer.style.top = '-0.5em';
    uiuxContainer.style.display ='block';
    projectsContainer.style.display = 'none';
    morePostersContainer.style.display = 'none';
  }

  if($(window).width () <= 1024 && $(window).width () > 960){
    pointer.style.width = '12%';
    pointer.style.height = '8%';
    pointer.style.left = '38em';
    pointer.style.top = '-0.5em';
    projectsContainer.style.display = 'none';
    morePostersContainer.style.display = 'none';
    uiuxContainer.style.display ='block';
  }

  if($(window).width () <= 960 && $(window).width () > 720){
    pointer.style.width = '12%';
    pointer.style.height = '8%';
    pointer.style.left = '36.5em';
    pointer.style.top = '-0.5em';
    projectsContainer.style.display = 'none';
    morePostersContainer.style.display = 'none';
    uiuxContainer.style.display ='block';
  }

  if ($(window).width () <= 720 && $(window).width () > 580) {
    pointer.style.width = '12%';
    pointer.style.height = '7%';
    pointer.style.left = '24em';
    pointer.style.top = '-0.5em';
    uiuxContainer.style.display ='block';
    projectsContainer.style.display = 'none';
    morePostersContainer.style.display = 'none';
  }
  if ($(window).width () <= 580) {
    pointer.style.width = '12%';
    pointer.style.height = '7%';
    pointer.style.left = '17.5em';
    pointer.style.top = '-0.5em';
    projectsContainer.style.display = 'none';
    morePostersContainer.style.display = 'none';
    uiuxContainer.style.display ='block';
  } 
  if ($(window).width () <= 10000 && $(window).width () > 1500){
    pointer.style.left = '83em';
    pointer.style.top = '-0.5em';
    uiuxContainer.style.display ='flex';
    projectsContainer.style.display = 'none';
    morePostersContainer.style.display = 'none';
  }
}

morePosters.addEventListener('click', morePostersResult);

function morePostersResult (e){
  e.preventDefault();
  morePostersBox.style.display = 'block';
  morePostersContainer.style.zIndex = '0'
}

myWorks.addEventListener('click', morePostersResultClose);

function morePostersResultClose (e){
  e.preventDefault();
  if (e.target = myWorks ){
    morePostersBox.style.display = 'none';
  } 
}


let slideIndexPosters = 1;
showSlidesPosters(slideIndexPosters);

function plusSlidesPosters(n) {
  showSlidesPosters(slideIndexPosters += n);
}

function currentSlidePosters(n) {
  showSlidesPosters(slideIndexPosters = n);
}

function showSlidesPosters(n) {
  let i;
  let slides = document.getElementsByClassName("mySlidesFade");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndexPosters = 1}    
  if (n < 1) {slideIndexPosters = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndexPosters-1].style.display = "block";  
  dots[slideIndexPosters-1].className += " active";
}


let slideIndexUI = 1;
showSlides(slideIndexUI);

function plusSlides(x) {
  showSlides(slideIndexUI += x);
}

function currentSlide(x) {
  showSlides(slideIndexUI = x);
}

function showSlides(x) {
  let a;
  let slidesUI = document.getElementsByClassName("mySlidesFadeUIUX");
  let dotsUI = document.getElementsByClassName("dotUIUX");
  if (x > slidesUI.length) {slideIndexUI = 1}    
  if (x < 1) {slideIndexUI = slidesUI.length}
  for (a = 0; a < slidesUI.length; a++) {
    slidesUI[a].style.display = "none";  
  }
  for (a = 0; a < dotsUI.length; a++) {
    dotsUI[a].className = dotsUI[a].className.replace(" active", "");
  }
  slidesUI[slideIndexUI-1].style.display = "block";  
  dotsUI[slideIndexUI-1].className += " active";
  
}

