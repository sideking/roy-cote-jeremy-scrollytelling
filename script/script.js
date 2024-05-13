document.addEventListener("DOMContentLoaded", (event) => {
    gsap.registerPlugin(ScrollTrigger,MotionPathPlugin,TextPlugin,DrawSVGPlugin,MorphSVGPlugin)
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

gsap.timeline({scrollTrigger: {
    trigger: "#Simple_reve",
    markers: true,
    start: 'center center',
}})
.to(".cloudy_meadows", {y:100, duration:3 ,  ease: "power1.inOut",yoyo:"true", repeat: -1})
.fromTo(".cloud_holder",{x:"-100vw"}, {x:"100vw", duration: 10,  ease: "none", repeat: -1}, "<")



gsap.timeline({scrollTrigger: {
    pin: true,
    trigger: "#Simple_reve",
    scrub: true,
    markers: true,
    start: 'center center',
    end: `+=${window.innerHeight * 2} top`,
}})
.fromTo("#T_1", {text: "",y:"40vh", left: 0, right: 0, }, {text: "Chapitre 1 Un Simple Rêve", duration: 10})
.to("#Simple_reve", {backgroundPosition: "0% 100%", duration:130, ease: "power1.inOut" }, "<")
.to("#T_1", {y: -500, duration: 30,  ease: "power1.inOut"}, 10)
.to(".cloud_holder", {y: -500, duration: 5,  ease: "power1.inOut"}, "<")
.fromTo(".ch1_1", {text: "",y:"60vh", right: "10vw"}, {text: "Une petite fille nommée Jade s'endort lors d'une nuit paisible.", duration: 20}, 25)
.to(".ch1_1", {y: -500, duration: 15,  ease: "power1.inOut"}, 55)
.fromTo(".ch1_2", {text: "",y:"60vh", left: "10vw"}, {text: "Son sommeil l'emporta vers un monde magique.", duration: 20}, 60)
.to(".ch1_2", {y: -500, duration: 15,  ease: "power1.inOut"}, 90)
.fromTo(".ch1_3", {text: "",y:"60vh", right: "20vw"}, {text: "Une forêt enchanté dans lequel elle pourra jouer toute la nuit.", duration: 20},95)
.to(".ch1_3", {y: -500, duration: 15,  ease: "power1.inOut"}, 125)
.fromTo(".noir_ch1", {y: 500, backgroundPosition:"50% 0" }, {y: 50, duration:10}, 130)
.fromTo(".brun_ch1", {y: 1000, backgroundPosition:"40% 0", scale: 1.5}, {y: 30, duration:10}, 130)


/*
CHAPITRE 2 & 3
*/



gsap.timeline({scrollTrigger: {
    pin: true,
    trigger: "#La_figure",
    scrub: true,
    markers: true,
    start: 'center center',
    end: '+=5000 top',
}})
.fromTo("#T_2", {text: "",y:"60vh", left: 0, right: 0}, {text: "Chapitre 2 La Figure", duration: 15, ease: "none"}, 0)
.fromTo("#La_figure", {backgroundPosition: "0% 0"}, {backgroundPosition: "100% 0", ease: "none", duration: 80}, 15)
.to("#T_2", {left: "-200vw", duration: 10,  ease: "power1.inOut"}, 20)
.fromTo(".noir_ch2", {backgroundPosition: "10% 0", y: -100}, {backgroundPosition: "90% 0", ease: "none", duration: 80}, 15)
.fromTo(".brun_ch2", {backgroundPosition: "0% 0", y: 100}, {backgroundPosition: "100% 0", ease: "none", duration: 80}, 15)
.fromTo(".ch2_1", {text: "",y:"60vh", left: "10vw"}, {text: "Elle se promenait en forêt suivant un sentier de terre, les arbres avait l'air glisser dans le sol.", duration: 25, ease: "none"},25)
.fromTo(".girl_ch2", {x: -500}, {x: "20vw", ease: "none", duration: 75}, 20)
.fromTo("#monster_sitting", {x: 500}, {x: 0, duration: 55, ease: "none"},40)
.fromTo(".ch2_2", {text: "",y:"70vh", left: "20vw"}, {text: "Une forme noire se trouvais au bout du sentier. Assise et recroquevillée sur elle même.", duration: 15}, 80)
.fromTo("#standing_ch2", {x: 500, opacity:0}, {opacity:0, x: 0, duration: 3, ease: "none"},110)
.to("#monster_sitting", {duration: 10}, 110)
.to("#monster_sitting", {opacity:0, duration: 0.1},120)
.to("#standing_ch2", {opacity: 1, duration: 0.1,}, 120)
.to("#standing_ch2", {duration: 10}, 125)
.fromTo(".ch2_3", {text: "",y:"80vh", right: "10vw"}, {text: "La figure se déplia et regarda Jade intensément.", duration: 10}, 115)
.to("#background_purple", {opacity: 1, duration: 0.1,}, 135)
.to(".girl_ch2", {opacity:0, duration: 0.1, rotationY: 180}, 135)
.to(".ch2_1", {opacity:0}, 135)
.to(".ch2_2", {opacity:0}, 135)
.to(".ch2_3", {opacity:0}, 135)
.to("#standing_ch2", {opacity: 0, duration: 0.1,}, 135)
.to("#monster_face", {opacity: 1, duration: 0.1,}, 135)
.to("#monster_face", {duration: 15}, 135)
.to("#monster_face", {duration: 1, opacity:0}, 150)
.to("#background_purple", {duration: 20, opacity:0},150)
.fromTo("#T_3", {text: "",y:"60vh", left: 0, right: 0}, {text: "Chapitre 3 Un Danger Mortel", duration: 20}, 175)
.to("#T_3", {x: "100vw", duration: 30,  ease: "power1.inOut"}, 210)
.fromTo("#La_figure", {backgroundPosition: "100% 0"}, {backgroundPosition: "0% 0", ease: "none", duration: 80}, 210)
.fromTo(".noir_ch2", {backgroundPosition: "90% 0", y: -100}, {backgroundPosition: "10% 0", ease: "none", duration: 80}, 210)
.fromTo(".brun_ch2", {backgroundPosition: "100% 0", y: 100}, {backgroundPosition: "0% 0", ease: "none", duration: 80}, 210)
.fromTo(".girl_ch2", {x: "100vw", opacity:1}, {opacity:1, x: "-100vw", ease: "none", duration: 80}, 210)
.fromTo(".ch3_1", {text: "",y:"70vh", right: "10vw"}, {text: "Jade s'enfuit de l'autre l'autre côté, mais le monstre la poursuivait.", duration: 20},210)
.fromTo("#standing_ch2", {x: "150vw", opacity:1}, {opacity:1, x: "-100vw", ease: "steps(15)", duration: 80}, 230)
.fromTo(".ch3_2", {text: "",y:"80vh", left: "30vw"}, {text: "Ce monstre se téléportait en la suivant.", duration: 20}, 250)

/*
CHAPITRE 4
*/

gsap.timeline({scrollTrigger: {
    pin: true,
    trigger: "#Sans_echapatoire",
    markers: true,
    start: 'center center',
    end: 'bottom top',
    toggleActions: 'restart complete reverse reset'
}})
.fromTo("#T_4", {text: "",y:"40vh", left: "5vw"}, {text: "Chapitre 4 Sans échapatoire", duration: 5}, 0)
.fromTo(".ch4_1", {text: "",top:"45vh", left: "5vw"}, {text: "Les mouvement du monstre devenait de plus en plus erratique.", duration: 10, ease: "none"}, 5)
.fromTo(".ch4_2", {text: "",top:"55vh", right: "5vw"}, {text: "Les arbres aussi avait changé pour des versions plus défformé.", duration: 10, ease: "none"}, 15)
.fromTo(".ch4_3", {text: "",top:"65vh", right: "5vw"}, {text: "Le monstre se rapprochait de plus en plus de Jade...", duration: 10, ease: "none"}, 25)
.to(".girl_ch4" , {motionPath: {
    path: '#path_run', align: '#path_run' ,alignOrigin: [0.5, 1], start: 0,
    end: 0.05},  duration: 5, ease: "none"}, 0)

.to(".girl_ch4" , {motionPath: {
    path: '#path_run', align: '#path_run' ,alignOrigin: [0.5, 0.9],start: 0.05,
    end: 1},  duration: 30, ease: "none",}, 5)

.to(".girl_ch4" , {y: "+=60vh", x: "+=300px", ease: "none",duration: 3}, 35)

.to(".monster_standing_ch4" , {motionPath: {
path: '#path_run', align: '#path_run' ,alignOrigin: [0.5, 1], start: 0,
end: 0.05},  duration: 5, ease: "steps(3)"}, 5)

.to(".monster_standing_ch4" , {motionPath: {
    path: '#path_run', align: '#path_run' ,alignOrigin: [0.5, 0.9],start: 0.05,
    end: 1},  duration: 30, ease: "steps(15)",}, 10)

.to(".monster_standing_ch4" , {y: "+=60vh", x: "+=300px", ease: "steps(3)",duration: 3}, 40)

/*
CHAPITRE 5
*/

gsap.timeline({scrollTrigger: {
    pin: true,
    trigger: "#Fin_abrusque",
    scrub: true,
    markers: true,
    start: 'center center',
    end: '+=5000 top',
}})
.fromTo("#T_5", {text: "",y:"0vh", left: 0, right: 0,scale:0}, {y:"50vh",text: "Chapitre 5 Sans échapatoire", duration: 2,scale:1, ease:"none"})
.fromTo(".girl_ch5", {scale:0}, {scale:1, duration:5, ease:"none"})
.to("#T_5", {y:"100vh", duration: 3})
.to(".girl_ch5", {y: "20vh", duration:5, ease:"none"}, "<")
.to(".girl_ch5", {opacity:0, duration:0.1, ease:"none"})
.fromTo("#jade_fell", {y: "20vh", opacity:0, rotationZ:180}, {opacity:1, y: "50vh", ease:"none", duration: 1},"<")
.to("#jade_fell", {duration:3})
.fromTo(".ch5_1", {text: "",bottom:"55vh", left: "5vw"}, {text: "Par épuisement, Jade trébucha sur ses pieds.", duration: 2}, "<")
.to(".monster_last", {duration:1, opacity:1})
.fromTo(".ch5_2", {text: "",bottom:"45vh", right: "5vw"}, {text: "Le monstre se rapprocha lentement.", duration: 2}, "<")
.to("#scared_to_death", {duration:1, opacity:1},"+=2")
.to(".monster_last", {duration:1, y:"15vh"}, "<")
.fromTo(".ch5_3", {text: "",bottom:"35vh", left:"5vw"}, {text: "Il se pencha et toucha le visage ensanglanté de Jade.", duration: 2}, "<")
.fromTo("#hand",{y:"10vh"}, {y:0, duration:1, opacity:1})
.to("#scared_to_death", {x:"-1vw", duration:0.3})
.to("#scared_to_death", {x:"1vw", duration:0.3})
.to("#scared_to_death", {x:"-1vw", duration:0.3})
.to("#scared_to_death", {x:"1vw", duration:0.3})
.to("#scared_to_death", {x:"-1vw", duration:0.3})
.to("#scared_to_death", {x:"1vw", duration:0.3})
.to("#scared_to_death", {x:"-1vw", duration:0.3})
.to("#scared_to_death", {x:"1vw", duration:0.3})
.to("#scared_to_death", {x:"1vw", duration:0.3})
.to(".white", {opacity:1, duration:1}, "-=1")


/*
CHAPITRE 6
*/

gsap.set("#Eye_1",{drawSVG:"0% 0%"} )
gsap.set("#Eye_2",{drawSVG:"0% 0%"} )
gsap.set("#Eye_3",{drawSVG:"100% 100%"} )
gsap.set("#Eye_4",{drawSVG:"100% 100%"} )
gsap.set("#Close_1",{drawSVG:"0% 0%"} )
gsap.set("#Close_2",{drawSVG:"0% 0%"} )
gsap.set("#Close_3",{drawSVG:"100% 100%"} )
gsap.set("#Close_4",{drawSVG:"100% 100%"} )

gsap.timeline({scrollTrigger: {
    pin: true,
    trigger: "#Reveil_brutal",
    scrub: true,
    markers: true,
    start: 'center center',
    end: '+=5000 top',
    toggleActions: 'restart complete none none'
}})
.fromTo("#T_6", {text: "",y:"50vh", left:0, right: 0}, {text: "Chapitre 6 Réveil Brutal", duration: 20}, 0)
.to("#T_6", {y:"-10vh", duration: 20}, 25)
.to("#Eye_1", {drawSVG:"0% 100%", duration:5, ease:"power1.inOut"}, 30)
.to("#Eye_2", {drawSVG:"0% 100%", duration:5, ease:"power1.inOut"},30)
.to("#Eye_4", {drawSVG:"100% 0%", duration:5, ease:"power1.inOut"}, 40)
.to("#Eye_3", {drawSVG:"100% 0%", duration:5, ease:"power1.inOut"}, 40)
.to("#Eye_1", {morphSVG: "#Close_1", duration:5, ease:"power1.inOut"}, 50)
.to("#Eye_2", {morphSVG: "#Close_2", duration:5, ease:"power1.inOut"}, 50)
.to("#Eye_4", {morphSVG: "#Close_4", duration:5, ease:"power1.inOut"}, 50)
.to("#Eye_3", {morphSVG: "#Close_3", duration:5, ease:"power1.inOut"}, 50)
.fromTo(".ch6_1", {text: "",y:"60vh", left: "30vw"}, {text: "En ouvrant les yeux, le monstre se trouvait au dessus de Jade. Il la regardait avec un sourire moqueur.", duration: 40, ease: "none"}, 40)
.fromTo(".monstre_smile.gauche", {left: "-25vw",scaleY: 0,scaleX: 0.1, opacity:0}, {opacity: 1, duration: 5, scaleY:0.1, scaleX: 0.1,ease:"power1.inOut"}, 50)
.fromTo(".monstre_smile.droite", {left: "25vw",scaleY: 0,scaleX: 0.1, opacity:0}, {opacity: 1, duration: 5, scaleY:0.1, scaleX: 0.1,ease:"power1.inOut"}, 50)
.to(".ch6_1", {opacity: 0, duration: 15}, 90)
.to("#eye_close", {scale: 20, duration: 200,ease:"power1.inOut"}, 75)
.fromTo(".ch6_2", {text: "",bottom:"5vh", left: "30vw"}, {text: "En se rapprochant, le monstre se transforma en livre et tomba.", duration: 30, ease: "none"}, 150)
.to(".monstre_smile", { scaleX: 0.5,scaleY:0.5, duration: 100, left: 0}, 75)
.to("#eye_close", {opacity: 0, duration: 50}, 200)
.to(".monstre_smile", { opacity:0, duration: 50}, 180)
.fromTo("#livre",{scale: 1,}, { opacity:1, duration: 40}, 180)
.to(".page_1", {y:"100vh", x:"35vh",rotation: 50, duration: 20}, 210)
.to(".page_2", {y:"100vh", x:"35vh",rotation: 50, duration: 20}, 220)
.to(".page_3", {y:"100vh", x:"35vh",rotation: 50, duration: 20}, 230)
.to(".page_4", {y:"100vh", x:"35vh",rotation: 50, duration: 20}, 240)
.to(".page_5", {y:"100vh", x:"35vh",rotation: 50, duration: 20}, 250)
.to(".page_6", {y:"100vh", x:"35vh",rotation: 50, duration: 20}, 260)
.to(".page_7", {y:"100vh", x:"35vh",rotation: 50, duration: 20}, 270)
.to("#cover", {y:"120vh", x:"35vh", rotation: 50, duration: 20}, 290)
.to(".ch6_2", {opacity: 0, duration: 15})
.fromTo(".ch6_3", {text: "",y:"50vh", left: "30vw"}, {text: "Le monstre n'était qu'un livre qu'elle avait lu avant d'aller dormir...", duration: 200, ease:"power1.out"})

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
console.log(spriteGirltain);