<template>
  <div class="js-container-project py-3 flex justify-between items-center cursor-pointer relative js-block-project text-light-black">
    <div class="pl-6 z-20 dm-sans-bold uppercase tracking-[-1px]">
      {{ title }} <span class="dm-sans-medium"> - {{ year }}</span>
    </div>
    <div class="z-20 pr-6 flex justify-between items-center gap-10">
      <div class="font-kenoky uppercase">{{ from }}</div>
      <svg class="js-arrow-project" width="17" height="18" viewBox="0 0 17 18" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M0.999999 1.25L16 16.25M16 16.25L1 16.25M16 16.25L16 1.25" stroke="#262626" stroke-width="2"/>
      </svg>
    </div>

    <div class="bg-light-black absolute bg-hide h-full w-full scale-y-0 z-10 origin-bottom"></div>

  </div>
</template>

<script setup>
import {gsap} from "gsap";
import {onMounted} from "vue";

defineProps(['b-top' , 'title' , 'year' , 'from'])

onMounted(() => {
  const block = document.querySelectorAll('.js-block-project');

  block.forEach((item) => {

    const bgBlack = item.querySelector('.bg-hide');
    const arrow = item.querySelector('.js-arrow-project');
    const arrowPath = item.querySelector('.js-arrow-project path');

    gsap.set(bgBlack, {
      scaleY: 0,
      transformOrigin: 'bottom',
    });

    item.addEventListener('mouseenter' , (e) => {

      gsap.to(bgBlack, { scaleY: 1});
      gsap.to(item, { color: "white"});
      gsap.to(arrowPath, {
        attr: {
          stroke : '#FFFFFF'
        }
      });
      gsap.to(arrow, { rotate: 45});
    })

    item.addEventListener('mouseleave' , (e) => {

      gsap.to(bgBlack, { scaleY: 0 });
      gsap.to(item, { color: "#262626"});
      gsap.to(arrowPath, {
        attr: {
          stroke : '#262626'
        }
      });
      gsap.to(arrow, { rotate: 0});
    })
  })
})


</script>