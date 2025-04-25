<script setup>
import "splitting/dist/splitting.css";
import "splitting/dist/splitting-cells.css";
import Splitting from "splitting";
import {onMounted} from "vue";
import {gsap} from "gsap";
import {ScrollTrigger} from "gsap/ScrollTrigger";

onMounted(() => {
  gsap.registerPlugin(ScrollTrigger);
  const results = Splitting(); // applique .char sur tous les titres

  // Boucle sur tous les containers avec data-splitting
  document.querySelectorAll(".overflow-reveal").forEach((el) => {
    // On cible les .char *dans ce container*
    const chars = el.querySelectorAll('.char');

    gsap.fromTo(chars,
      { y: 100, opacity: 0, skewX: "-10deg" },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        skewX: 0,
        delay: .2,
        ease: 'power4.out',
        stagger: 0.01,
        scrollTrigger: {
          trigger: el,
          start: "top 90%",
          toggleActions: "play none none none",
        }
      }
    );
  });

  const navigation = document.querySelector('#navigation');
  const navigationLink = navigation.querySelectorAll('.bloc_nav');
  const lines = document.querySelectorAll('.line');

  gsap.to(navigationLink, {
    color: "white",
    scrollTrigger: {
      trigger: '#infinite-slide',
      start: "top",
      scrub: true,
    }
  })

  gsap.to(lines, {
    backgroundColor: "white",
    scrollTrigger: {
      trigger: '#infinite-slide',
      start: "top",
      scrub: true,
    }
  })

  document.querySelectorAll('.fade-in').forEach((el) => {

    let target = el;

    gsap.fromTo(target, {
      y: 50,
      opacity: 0,
    }, {
      y: 0,
      opacity: 1,
      duration: 1,
      ease: 'power4.out',
      scrollTrigger: {
          trigger: target,
          start: "top 80%",
          toggleActions: "play none none none",
        }
    })
  })

  const textSection = document.querySelector('.section-text');
  const charsText = document.querySelectorAll('.section-text .char');


  gsap.fromTo(charsText,
      {opacity: .5},
      {
        opacity: 1,
        duration: .4,
        stagger: 0.15,
        ease : "power2.in",
        scrollTrigger: {
          trigger: textSection,
          scrub: true,
          start: "top 90%",
          toggleActions: "play none none none",
        }
      }
    );

    // pres 

    let titleChars = document.querySelectorAll('.title .char')

    gsap.fromTo(titleChars,
          { y: 100, opacity: 0, rotate: '15deg', skewX: "-10deg" },
          {
            y: 0,
            opacity: 1,
            duration: 1,
            skewX: 0,
            rotate: 0,
            delay: 3.5, // pour correspondre au loader
            ease: 'power4.out',
            stagger: 0.05,
          }
    );

    let titleSecondChars = document.querySelectorAll('.title-second .char')

    gsap.fromTo(titleSecondChars,
          { y: 100, opacity: 0, skewX: "-10deg" },
          {
            y: 0,
            opacity: 1,
            duration: 1,
            skewX: 0,
            delay: 3.7, // pour correspondre au loader
            ease: 'power4.out',
            stagger: 0.05,
          }
    );

    let textPres = document.querySelector('.text-presentation');

    gsap.fromTo(textPres, {
      y: 50,
      opacity: 0,
    }, {
      y: 0,
      opacity: 1,
      duration: 1,
      delay: 3.9,
      ease: 'power4.out',
    })

    let imagePres = document.querySelector('.image-pres');

    gsap.fromTo(imagePres, {
      y: 50,
      opacity: 0,
    }, {
      y: 0,
      opacity: 1,
      duration: 1,
      delay: 4.1,
      ease: 'power4.out',
    })

    let starPres = document.querySelector('.star-pres');

    gsap.fromTo(starPres, {
      opacity: 0,
    }, {
      opacity: 1,
      duration: 1,
      delay: 3.8,
      ease: 'power4.out',
    })


});



</script>

<template>
  <div class="overflow-hidden">
    <h1 data-splitting class="title text-center md:text-left font-light uppercase font-kenoky text-5xl sm:text-7xl lg:text-9xl text-light-black">
    Baptiste
  </h1>
  </div>


  <div class="overflow-hidden">
    <h2 data-splitting class="title-second text-center md:text-left font-medium uppercase dm-sans-medium text-5xl sm:text-7xl lg:text-9xl tracking-[-2px] text-light-black">
    Gauthier
  </h2>
  </div>
 
</template>
