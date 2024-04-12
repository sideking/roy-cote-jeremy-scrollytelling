document.addEventListener("DOMContentLoaded", (event) => {
    gsap.registerPlugin(ScrollTrigger)
    // gsap code here!
   });

gsap.timeline({repeat: -1})
.to("#call_to_action", {opacity: 1, duration: 1})
.to("#call_to_action", {y: 50, duration: 2})
.to("#call_to_action", {opacity: 0, duration: 2}, "<")