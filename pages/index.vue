<template>
  <section>
    <div class="max-w-[1815px] mx-auto px-6 pt-16 2xl:pt-32">
      <div class="flex items-center gap-6">
        <div>
          <h1 class="font-light uppercase font-kenoky text-9xl text-light-black">Baptiste</h1>
          <h2 class="font-medium uppercase dm-sans-medium text-9xl tracking-[-2px] text-light-black">Gauthier</h2>
        </div>
        <svg class="star" width="56" height="56" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g clip-path="url(#clip0_49_343)">
            <path d="M0 28H56" stroke="black" stroke-width="5" stroke-miterlimit="10"/>
            <path d="M28 0V56" stroke="black" stroke-width="5" stroke-miterlimit="10"/>
            <path d="M8.18945 47.8107L47.811 8.18924" stroke="black" stroke-width="5" stroke-miterlimit="10"/>
            <path d="M8.18945 8.18924L47.811 47.8107" stroke="black" stroke-width="5" stroke-miterlimit="10"/>
          </g>
          <defs>
            <clipPath id="clip0_49_343">
              <rect width="56" height="56" fill="white"/>
            </clipPath>
          </defs>
        </svg>
      </div>
      <div class="flex justify-between">
        <p class="uppercase self-end font-medium dm-sans-medium max-w-lg text-light-black">Tiramisu sesame snaps donut chocolate cake muffin jelly-o pudding
          pie. Topping sugar plum croissant candy
          muffin bonbon lemon drops chocolate. Chocolate bar jujubes marzipan ice cream pie dragée donut cheesecake.</p>
        <div>
          <div class="py-2 flex items-center gap-2">
            <a href="#" class="text-light-black uppercase dm-sans-medium">Linkedin</a>
            <a href="#" class="text-light-black uppercase dm-sans-medium">Github</a>
          </div>
          <div class="h-[320px] w-[280px]">
            <img class="h-full w-full object-cover object-center" src="~/assets/images/image_pres.png" alt="image pres"/>
          </div>
        </div>

      </div>
    </div>
  </section>

  <SectionTitle title="projects" />

  <section class="flex flex-col-reverse border-y-2 border-light-black divide-y-2 divide-y-reverse">
    <Project title="Sud Playground" year="2020" from="Side Project" />
    <Project title="Épopée Village" year="2023" from="Synergie Family" />
    <Project title="Synergie Family" year="2021 - 2025" from="Synergie Family" />
    <Project title="Luberon ramonage" year="2024" from="Side Project" />
    <Project title="Big Mars" year="2025" from="Synergie Family" />
    <Project title="Passer le BAFA" year="2025" from="Synergie Family" />

  </section>
</template>
<script setup lang="ts">

import {gsap} from "gsap";
import {onMounted} from "vue";

onMounted(() => {
  gsap.to('.star', { rotation: 360, duration: 2, repeat: -1, transformOrigin: 'center', ease: 'none' });
})







</script>