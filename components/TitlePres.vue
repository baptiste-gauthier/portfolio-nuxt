<script setup>
import "splitting/dist/splitting.css";
import "splitting/dist/splitting-cells.css";
import Splitting from "splitting";
import {onMounted} from "vue";
import {gsap} from "gsap";
import {ScrollTrigger} from "gsap/ScrollTrigger";

onMounted(() => {
  gsap.registerPlugin(ScrollTrigger);
  Splitting();
  // gsap.fromTo('.char', {y: 100, opacity: 0}, {y: 0, opacity: 1, duration: 1, ease: 'power4.out'});

  gsap.to('.char', {
    scrollTrigger: '.char',
    y: 0,
    opacity: 1,
    duration: 1,
    ease: 'power4.out'
  })
})

</script>

<template>
  <h1 class="text-center md:text-left font-light uppercase font-kenoky text-5xl sm:text-7xl lg:text-9xl text-light-black">
    Baptiste
  </h1>

  <h2 class="text-center md:text-left font-medium uppercase dm-sans-medium text-5xl sm:text-7xl lg:text-9xl tracking-[-2px] text-light-black">
    Gauthier
  </h2>
</template>
