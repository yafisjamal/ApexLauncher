/* =====================================
    APEX LAUNCHER WEBSITE SCRIPT
    Premium Animations + Effects
===================================== */



// ===============================
// 3D LAUNCHER MOCKUP PARALLAX
// ===============================


const launcherCard =
document.getElementById("launcherCard");


if(launcherCard){

document.addEventListener("mousemove",(e)=>{


const x =
(window.innerWidth / 2 - e.clientX) / 40;


const y =
(window.innerHeight / 2 - e.clientY) / 40;



launcherCard.style.transform = `

rotateY(${x}deg)

rotateX(${y}deg)

`;



});



launcherCard.addEventListener("mouseleave",()=>{


launcherCard.style.transform =
"rotateY(0deg) rotateX(0deg)";


});


}





// ===============================
// SCROLL REVEAL ANIMATION
// ===============================


const revealItems =
document.querySelectorAll(
".feature, .download-box, .roadmap, .requirements, .discord, .showcase-slider"
);



const revealObserver =
new IntersectionObserver((entries)=>{


entries.forEach(entry=>{


if(entry.isIntersecting){


entry.target.classList.add("show");


}


});


},
{
threshold:.15
});



revealItems.forEach(item=>{


item.classList.add("hidden");


revealObserver.observe(item);


});






// ===============================
// SCREENSHOT SLIDER
// ===============================


const screenshots = [

"assets/screenshot1.png",

"assets/screenshot2.png",

"assets/screenshot3.png",

"assets/screenshot4.png",

"assets/screenshot5.png",

"assets/screenshot6.png",

"assets/screenshot7.png"

];



let currentSlide = 0;



const screenshotImage =
document.getElementById("mainScreenshot");



const dots =
document.querySelectorAll(
".slider-dots span"
);




function updateSlider(){


if(!screenshotImage)
return;



screenshotImage.style.opacity="0";



setTimeout(()=>{


screenshotImage.src =
screenshots[currentSlide];


screenshotImage.style.opacity="1";


},250);




dots.forEach(dot=>{

dot.classList.remove("active");

});



if(dots[currentSlide]){

dots[currentSlide]
.classList.add("active");

}


}





function changeSlide(direction){


currentSlide += direction;



if(currentSlide >= screenshots.length){

currentSlide = 0;

}



if(currentSlide < 0){

currentSlide =
screenshots.length-1;

}



updateSlider();


}





// Make arrows work


const nextButton =
document.querySelector(".right");


const prevButton =
document.querySelector(".left");



if(nextButton){

nextButton.onclick=()=>{

changeSlide(1);

};

}



if(prevButton){

prevButton.onclick=()=>{

changeSlide(-1);

};

}





// Auto slideshow


setInterval(()=>{


changeSlide(1);


},6000);







// ===============================
// SLIDER DOT CLICK
// ===============================


dots.forEach((dot,index)=>{


dot.onclick=()=>{


currentSlide=index;


updateSlider();


};


});










// ===============================
// SMOOTH SCROLL LINKS
// ===============================


document.querySelectorAll(
"a[href^='#']"
)
.forEach(link=>{


link.addEventListener(
"click",
(e)=>{


const target =
document.querySelector(
link.getAttribute("href")
);



if(target){


e.preventDefault();


target.scrollIntoView({

behavior:"smooth"

});


}


});


});








// ===============================
// BUTTON 3D TILT
// ===============================


const buttons =
document.querySelectorAll(
".primary-btn, .secondary-btn"
);



buttons.forEach(button=>{


button.addEventListener(
"mousemove",
(e)=>{


const rect =
button.getBoundingClientRect();



const x =
e.clientX - rect.left;



const y =
e.clientY - rect.top;



button.style.transform = `

perspective(600px)

rotateX(${-(y-25)/8}deg)

rotateY(${(x-rect.width/2)/8}deg)

scale(1.05)

`;


});





button.addEventListener(
"mouseleave",
()=>{


button.style.transform="";


});


});








// ===============================
// VIDEO START FIX
// ===============================


const video =
document.querySelector(
".background-video"
);



if(video){


video.muted=true;


video.play()
.catch(()=>{});


}








// ===============================
// NAVBAR SCROLL EFFECT
// ===============================


const nav =
document.querySelector("nav");



window.addEventListener(
"scroll",
()=>{


if(window.scrollY > 50){


nav.style.background =
"rgba(0,0,0,.75)";


}

else{


nav.style.background =
"rgba(0,0,0,.35)";


}


});