document.addEventListener("DOMContentLoaded", (event) => {
    gsap.registerPlugin(ScrollTrigger,MotionPathPlugin,TextPlugin)
/*
INTRO BACKGROUND
*/
gsap.timeline({yoyo: true, repeat: -1})
.to("#arbres_noir",  {backgroundPosition: "-500px 0px", duration: 10, ease: "power1.inOut"} )
.to("#arbres_mauve",  {backgroundPosition: "-800px 0px", duration: 10, ease: "power1.inOut"}, "<")
.to("#arbres_brun",  {backgroundPosition: "-1100px 0px", duration: 10, ease: "power1.inOut"}, "<")
.to("#arbres_rouge", {backgroundPosition: "-1400px 0px", duration: 10, ease: "power1.inOut"}, "<")

/*
CALL TO ACTION
*/ 

gsap.timeline({repeat: -1})
.to("#call_to_action", {opacity: 1, duration: 1})
.to("#call_to_action", {y: 50, duration: 2})
.to("#call_to_action", {opacity: 0, duration: 2}, "<")

/*
CHAPITRE 1
*/

gsap.timeline({yoyo: true, repeat: -1})
.to("#Simple_reve", {backgroundPosition: "0px 100%", duration:5, ease: "power1.inOut" })
.to(".cloud_holder", {y: -500, duration: 5,  ease: "power1.inOut"}, "<")
.fromTo(".noir_ch1", {y: 500, backgroundPosition:"50% 0" }, {y: -100, duration:5}, "<")
.fromTo(".brun_ch1", {y: 1000, backgroundPosition:"50% 0"}, {y: -50, duration:5}, "<")


/*
CHAPITRE 2 & 3
*/

gsap.timeline({repeat: -1})
.fromTo("#La_figure", {backgroundPosition: "0% 0"}, {backgroundPosition: "100% 0", ease: "none", duration: 10})
.fromTo(".noir_ch2", {backgroundPosition: "10% 0", y: -100}, {backgroundPosition: "90% 0", ease: "none", duration: 10}, "<")
.fromTo(".brun_ch2", {backgroundPosition: "0% 0", y: 100}, {backgroundPosition: "100% 0", ease: "none", duration: 10}, "<")
.fromTo(".girl_ch2", {x: -500}, {x: "50%", ease: "none", duration: 10}, "<")
.fromTo("#monster_sitting", {x: 500}, {x: 0, duration: 3, ease: "none"},"-=3")
.fromTo("#standing_ch2", {x: 500, opacity:0}, {opacity:0, x: 0, duration: 3, ease: "none"},"<")
.to("#monster_sitting", {duration: 2})
.to("#monster_sitting", {opacity:0, duration: 0.1})
.to("#standing_ch2", {opacity: 1, duration: 0.1,}, "<")
.to("#standing_ch2", {duration: 2})
.to("#background_purple", {opacity: 1, duration: 0.1,})
.to(".girl_ch2", {opacity:0, duration: 0.1, rotationY: 180})
.to("#standing_ch2", {opacity: 0, duration: 0.1,}, "<")
.to("#monster_face", {opacity: 1, duration: 0.1,}, "<")
.to("#monster_face", {duration: 2})
.to("#monster_face", {duration: 1, opacity:0})
.to("#background_purple", {duration: 2, opacity:0})
.fromTo("#La_figure", {backgroundPosition: "100% 0"}, {backgroundPosition: "0% 0", ease: "none", duration: 10}, "<")
.fromTo(".noir_ch2", {backgroundPosition: "90% 0", y: -100}, {backgroundPosition: "10% 0", ease: "none", duration: 10}, "<")
.fromTo(".brun_ch2", {backgroundPosition: "100% 0", y: 100}, {backgroundPosition: "0% 0", ease: "none", duration: 10}, "<")
.fromTo(".girl_ch2", {x: "100vw", opacity:1}, {opacity:1, x: "-100vw", ease: "none", duration: 10}, "<")
.fromTo("#standing_ch2", {x: "150vw", opacity:1}, {opacity:1, x: "-100vw", ease: "steps(15)", duration: 8}, "<")



/*
CHAPITRE 5
*/

gsap.timeline({repeat: -1})
.fromTo(".girl_ch5", {scale:0}, {scale:1, duration:5, ease:"none"})
.to(".girl_ch5", {y: "20vh", duration:5, ease:"none"}, "<")
.to(".girl_ch5", {opacity:0, duration:0.1, ease:"none"})
.fromTo("#jade_fell", {y: "20vh", opacity:0, rotationZ:180}, {opacity:1, duration:0.1, y: "50vh", ease:"none", duration: 1},"<")
.to("#jade_fell", {duration:3})
.to(".monster_last", {duration:1, opacity:1})
.to("#scared_to_death", {duration:1, opacity:1},"+=2")
.to(".monster_last", {duration:1, y:"15vh"}, "<")
.fromTo("#hand",{y:"10vh"}, {y:0, duration:1, opacity:1})
.to("#scared_to_death", {x:"-1vw", duration:0.1})
.to("#scared_to_death", {x:"1vw", duration:0.1})
.to("#scared_to_death", {x:"-1vw", duration:0.1})
.to("#scared_to_death", {x:"1vw", duration:0.1})
.to("#scared_to_death", {x:"-1vw", duration:0.1})
.to("#scared_to_death", {x:"1vw", duration:0.1})
.to("#scared_to_death", {x:"-1vw", duration:0.1})
.to("#scared_to_death", {x:"1vw", duration:0.1})
.to("#scared_to_death", {x:"1vw", duration:0.1})
.to(".white", {opacity:1, duration:1}, "-=1")


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