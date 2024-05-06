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
    toggleActions: 'restart complete reverse reverse'
}})
.fromTo("#T_1", {text: "",y:"40vh", x: "40vw"}, {text: "Chapitre 1: Un Simple Rêve", duration: 10})
.to("#Simple_reve", {backgroundPosition: "0% 100%", duration:70, ease: "power1.inOut" }, "<")
.to("#T_1", {y: -500, duration: 30,  ease: "power1.inOut"}, 10)
.to(".cloud_holder", {y: -500, duration: 5,  ease: "power1.inOut"}, "<")
.fromTo(".ch1_1", {text: "",y:"60vh", x: "40vw"}, {text: "Une petite fille nommée Jade s'endort lors d'une nuit paisible.", duration: 2}, 25)
.to(".ch1_1", {y: -500, duration: 15,  ease: "power1.inOut"}, 35)
.fromTo(".ch1_2", {text: "",y:"60vh", x: "20vw"}, {text: "Son sommeil l'emporta vers un monde magique.", duration: 2}, 40)
.to(".ch1_2", {y: -500, duration: 5,  ease: "power1.inOut"}, 50)
.fromTo(".ch1_3", {text: "",y:"60vh", x: "40vw"}, {text: "Une forêt enchanté dans lequel elle pourra jouer toute la nuit.", duration: 2},55)
.to(".ch1_3", {y: -500, duration: 5,  ease: "power1.inOut"}, 65)
.fromTo(".noir_ch1", {y: 500, backgroundPosition:"50% 0" }, {y: -100, duration:10},60 )
.fromTo(".brun_ch1", {y: 1000, backgroundPosition:"50% 0"}, {y: -50, duration:10}, 60)


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
    toggleActions: 'restart complete none none'
}})
.fromTo("#T_2", {text: "",y:"60vh", x: "50vw"}, {text: "Chapitre 2: La Figure", duration: 10})
.fromTo("#La_figure", {backgroundPosition: "0% 0"}, {backgroundPosition: "100% 0", ease: "none", duration: 40})
.to("#T_2", {x: -700, duration: 10,  ease: "power1.inOut"}, "<")
.fromTo(".noir_ch2", {backgroundPosition: "10% 0", y: -100}, {backgroundPosition: "90% 0", ease: "none", duration: 40}, "<")
.fromTo(".brun_ch2", {backgroundPosition: "0% 0", y: 100}, {backgroundPosition: "100% 0", ease: "none", duration: 40}, "<")
.fromTo(".ch2_1", {text: "",y:"60vh", x: "10vw"}, {text: "Elle se promenait en forêt suivant un sentier de terre, les arbres avait l'air glisser dans le sol.", duration: 20},20)
.fromTo(".girl_ch2", {x: -500}, {x: "50%", ease: "none", duration: 20}, 20)
.fromTo("#monster_sitting", {x: 500}, {x: 0, duration: 10, ease: "none"},40)
.fromTo(".ch2_2", {text: "",y:"70vh", x: "20vw"}, {text: "Une forme noire se trouvais au bout du sentier. Assise et recroqueviller sur elle même.", duration: 10}, 60)
.fromTo("#standing_ch2", {x: 500, opacity:0}, {opacity:0, x: 0, duration: 3, ease: "none"},60)
.to("#monster_sitting", {duration: 10}, 35)
.to("#monster_sitting", {opacity:0, duration: 0.1},80)
.to("#standing_ch2", {opacity: 1, duration: 0.1,}, 80)
.to("#standing_ch2", {duration: 10}, 80)
.fromTo(".ch2_3", {text: "",y:"80vh", x: "50vw"}, {text: "La figure se déplia et regarda Jade intensément.", duration: 10},80)
.to("#background_purple", {opacity: 1, duration: 0.1,}, 90)
.to(".girl_ch2", {opacity:0, duration: 0.1, rotationY: 180}, 90)
.to(".ch2_1", {opacity:0}, 90)
.to(".ch2_2", {opacity:0}, 90)
.to(".ch2_3", {opacity:0}, 90)
.to("#standing_ch2", {opacity: 0, duration: 0.1,}, 90)
.to("#monster_face", {opacity: 1, duration: 0.1,}, 90)
.to("#monster_face", {duration: 20},90)
.to("#monster_face", {duration: 1, opacity:0}, 110)
.to("#background_purple", {duration: 20, opacity:0},120)
.fromTo("#T_3", {text: "",y:"60vh", x: "50vw"}, {text: "Chapitre 3: Un Danger Mortel", duration: 20}, 130)
.to("#T_3", {x: "100vw", duration: 10,  ease: "power1.inOut"}, 150)
.fromTo("#La_figure", {backgroundPosition: "100% 0"}, {backgroundPosition: "0% 0", ease: "none", duration: 80}, 150)
.fromTo(".noir_ch2", {backgroundPosition: "90% 0", y: -100}, {backgroundPosition: "10% 0", ease: "none", duration: 80}, 150)
.fromTo(".brun_ch2", {backgroundPosition: "100% 0", y: 100}, {backgroundPosition: "0% 0", ease: "none", duration: 80}, 150)
.fromTo(".girl_ch2", {x: "100vw", opacity:1}, {opacity:1, x: "-100vw", ease: "none", duration: 30}, 150)
.fromTo(".ch3_1", {text: "",y:"70vh", x: "50vw"}, {text: "Jade s'enfuit de l'autre l'autre côté, mais le monstre la poursuivait.", duration: 20},150)
.fromTo("#standing_ch2", {x: "150vw", opacity:1}, {opacity:1, x: "-100vw", ease: "steps(15)", duration: 30}, 160)
.fromTo(".ch3_2", {text: "",y:"80vh", x: "30vw"}, {text: "Ce monstre se téléportait en la suivant.", duration: 20},170)

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
.fromTo("#T_4", {text: "",y:"40vh", x: "10vw"}, {text: "Chapitre 4: Sans échapatoire", duration: 2})
.fromTo(".ch4_1", {text: "",y:"45vh", x: "10vw"}, {text: "Les mouvement du monstre devenant de plus en plus erratique.", duration: 2})
.fromTo(".ch4_2", {text: "",y:"50vh", x: "10vw"}, {text: "Les arbres aussi avait changé pour des versions plus défformé.", duration: 2})
.fromTo(".ch4_3", {text: "",y:"55vh", x: "10vw"}, {text: "Le monstre se rapprochait de plus en plus de Jade...", duration: 2})
.to(".girl_ch4" , {motionPath: {
    path: '#path_run', align: '#path_run' ,alignOrigin: [0.5, 1], start: 0,
    end: 0.05},  duration: 1, ease: "none",}, "0")

.to(".girl_ch4" , {motionPath: {
    path: '#path_run', align: '#path_run' ,alignOrigin: [0.5, 0.9],start: 0.05,
    end: 1},  duration: 10, ease: "none",}, "1")

.to(".girl_ch4" , {y: "+=60vh", x: "+=300px", ease: "none",duration: 3}, "11")

.to(".monster_standing_ch4" , {motionPath: {
path: '#path_run', align: '#path_run' ,alignOrigin: [0.5, 1], start: 0,
end: 0.05},  duration: 1, ease: "steps(2)"}, "2")

.to(".monster_standing_ch4" , {motionPath: {
    path: '#path_run', align: '#path_run' ,alignOrigin: [0.5, 0.9],start: 0.05,
    end: 1},  duration: 10, ease: "steps(10)",}, "3")

.to(".monster_standing_ch4" , {y: "+=60vh", x: "+=300px", ease: "steps(3)",duration: 3}, "13")

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
    toggleActions: 'restart complete none none'
}})
.fromTo("#T_5", {y:"0vh", x: "40vw",scale:0}, {y:"50vw",text: "Chapitre 5: Sans échapatoire", duration: 2,scale:1})
.fromTo(".girl_ch5", {scale:0}, {scale:1, duration:5, ease:"none"})
.to("#T_5", {y:"100vw", duration: 3})
.to(".girl_ch5", {y: "20vh", duration:5, ease:"none"}, "<")
.to(".girl_ch5", {opacity:0, duration:0.1, ease:"none"})
.fromTo("#jade_fell", {y: "20vh", opacity:0, rotationZ:180}, {opacity:1, duration:0.1, y: "50vh", ease:"none", duration: 1},"<")
.to("#jade_fell", {duration:3})
.fromTo(".ch5_1", {text: "",y:"55vh", x: "10vw"}, {text: "Par épuisement, Jade trébucha sur ses pieds.", duration: 2}, "<")
.to(".monster_last", {duration:1, opacity:1})
.fromTo(".ch5_2", {text: "",y:"55vh", x: "60vw"}, {text: "Le monstre se rapprocha lentement.", duration: 2}, "<")
.to("#scared_to_death", {duration:1, opacity:1},"+=2")
.to(".monster_last", {duration:1, y:"15vh"}, "<")
.fromTo(".ch5_3", {text: "",y:"90vh", x: "40vw"}, {text: "Il se pencha et toucha le visage ensanglanté de Jade.", duration: 2}, "<")
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
gsap.set("#bave_path", {x: "-=50%", scaleY: 0})

gsap.timeline({scrollTrigger: {
    pin: true,
    trigger: "#Reveil_brutal",
    scrub: true,
    markers: true,
    start: 'center center',
    end: '+=5000 top',
    toggleActions: 'restart complete none none'
}})
.fromTo("#T_6", {text: "",y:"20vh", x: "40vw"}, {text: "Chapitre 6: Réveil Brutal", duration: 2})
.to("#T_6", {y:"-10vh", duration: 5})
.to("#Eye_1", {drawSVG:"0% 100%", duration:1, ease:"power1.inOut"})
.to("#Eye_2", {drawSVG:"0% 100%", duration:1, ease:"power1.inOut"},"<")
.to("#Eye_4", {drawSVG:"100% 0%", duration:1, ease:"power1.inOut"})
.to("#Eye_3", {drawSVG:"100% 0%", duration:1, ease:"power1.inOut"},"<")
.to("#Eye_1", {morphSVG: "#Close_1", duration:1, ease:"power1.inOut"})
.to("#Eye_2", {morphSVG: "#Close_2", duration:1, ease:"power1.inOut"},"<")
.to("#Eye_4", {morphSVG: "#Close_4", duration:1, ease:"power1.inOut"},"<")
.to("#Eye_3", {morphSVG: "#Close_3", duration:1, ease:"power1.inOut"},"<")
.to("#bave_path", {scaleY: 1, duration:1, ease:"power1.inOut"})
.fromTo(".ch6_1", {text: "",y:"60vh", x: "30vw"}, {text: "En ouvrant les yeux, le monstre se trouvait au dessus de Jade et bavait du sang sur elle.", duration: 2}, "<")
.to("#bave_path", {morphSVG: {shape: "#goutte_path", shapeIndex:2}, duration:1, ease:"power1.inOut", scaleX: 0.25,scaleY: 0.5, y: "50vh", x:"30%"})
.to("#bave_path", {scaleY: 0, duration: 2, y: "60vh"})
.to(".ch6_1", {opacity: 0, duration: 2})
.fromTo("#monstre_smile", {y:"40vh", scale: 0.1, opacity:0}, {opacity: 1, duration: 2})
.to("#eye_close", {scale: 20, duration: 10,y: "-20vh", x: "190vw"})
.fromTo(".ch6_2", {text: "",y:"95vh", x: "30vw"}, {text: "En se rapprochant, le monstre se transforma en livre et tomba.", duration: 2}, "<")
.to("#monstre_smile", { scale: 1, duration: 10,}, "<")
.to("#eye_close", {opacity: 0,display:"none"})
.to("#monstre_smile", { opacity:0, duration: 5}, "<")
.fromTo("#livre",{scale: 1.5, x:"-10vw", y: "30vh"}, { opacity:1, duration: 5}, "<")
.to(".page_1", {y:"100vh", x:"35vh",rotation: 50, duration: 5})
.to(".page_2", {y:"100vh", x:"35vh",rotation: 50, duration: 5}, "-=4")
.to(".page_3", {y:"100vh", x:"35vh",rotation: 50, duration: 5}, "-=4")
.to(".page_4", {y:"100vh", x:"35vh",rotation: 50, duration: 5}, "-=4")
.to(".page_5", {y:"100vh", x:"35vh",rotation: 50, duration: 5}, "-=4")
.to(".page_6", {y:"100vh", x:"35vh",rotation: 50, duration: 5}, "-=4")
.to(".page_7", {y:"100vh", x:"35vh",rotation: 50, duration: 5}, "-=4")
.to("#livre", {y:"120vh", x:"35vh",rotation: 50, duration: 5}, "-=2")
.to(".ch6_2", {opacity: 0, duration: 2})
.fromTo(".ch6_3", {text: "",y:"50vh", x: "30vw"}, {text: "Le monstre n'était qu'un livre qu'elle avait lu avant d'aller dormir...", duration: 2})

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