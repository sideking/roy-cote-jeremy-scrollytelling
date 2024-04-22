document.addEventListener("DOMContentLoaded", (event) => {
    gsap.registerPlugin(ScrollTrigger)
    // gsap code here!
   });


// call to action
gsap.timeline({repeat: -1})
.to("#call_to_action", {opacity: 1, duration: 1})
.to("#call_to_action", {y: 50, duration: 2})
.to("#call_to_action", {opacity: 0, duration: 2}, "<")

// spritesheet
const spriteCloudtain = document.querySelector("#cloudy_meadows");
const spriteGirlstain = document.querySelector("#seek_girl");
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

if (spriteGirlstain != null) {
    window.addEventListener("scroll", () => {
        busyBody.classList.add("is-scrolling");
        setTimeout(scrollStop, 100);
    });

    function scrollStop() {
        busyBody.classList.remove("is-scrolling");
    }
};