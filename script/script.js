document.addEventListener("DOMContentLoaded", (event) => {
    gsap.registerPlugin(ScrollTrigger,MotionPathPlugin,TextPlugin)

// Intro Background
gsap.timeline({yoyo: true, repeat: -1})
.to("#arbres_noir",  {x: -500, duration: 10, ease: "power1.inOut"} )
.to("#arbres_mauve",  {x: -800, duration: 10, ease: "power1.inOut"}, "<")
.to("#arbres_brun",  {x: -1100, duration: 10, ease: "power1.inOut"}, "<")
.to("#arbres_rouge", {x: -1400, duration: 10, ease: "power1.inOut"}, "<")

// call to action
gsap.timeline({repeat: -1})
.to("#call_to_action", {opacity: 1, duration: 1})
.to("#call_to_action", {y: 50, duration: 2})
.to("#call_to_action", {opacity: 0, duration: 2}, "<")

});


 


// spritesheet
const spriteCloudtain = document.querySelector(".cloudy_meadows");
const spriteGirltain = document.querySelector(".seek_girl");
const busyBody = document.querySelector("body")

if (spriteCloudtain != null) {
    window.addEventListener("scroll", () => {
        busyBody.classList.add("is-scrolling");
        setTimeout(scrollStop, 100);
    });

    function scrollStop() {
        busyBody.classList.remove("is-scrolling");
    }
};
console.log(spriteCloudtain)

if (spriteGirltain != null) {
    window.addEventListener("scroll", () => {
        busyBody.classList.add("is-scrolling");
        setTimeout(scrollStop, 100);
    });

    function scrollStop() {
        busyBody.classList.remove("is-scrolling");
    }
};
console.log(spriteGirltain)