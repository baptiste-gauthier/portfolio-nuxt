<template>
  <div class="relative">
    <!-- Le bloc visible (click) -->
    <div
        @click="toggleAccordion"
        class="js-container-project py-3 cursor-pointer relative js-block-project text-light-black"
    >
      <div class="flex justify-between items-center">
        <div class="pl-6 z-20 dm-sans-bold uppercase tracking-[-1px]">
          {{ title }} <span class="dm-sans-medium"> - {{ year }}</span>
        </div>
        <div class="z-20 pr-6 flex justify-between items-center gap-10">
          <div class="font-kenoky uppercase">{{ from }}</div>
          <svg class="js-arrow-project" width="17" height="18" viewBox="0 0 17 18" fill="none"
               xmlns="http://www.w3.org/2000/svg">
            <path d="M0.999999 1.25L16 16.25M16 16.25L1 16.25M16 16.25L16 1.25"
                  :stroke="accordionOpen ? '#FFF' : '#262626'" stroke-width="2"/>
          </svg>
        </div>
        <div class="bg-light-black absolute bg-hide h-full w-full scale-y-0 z-10 origin-bottom"></div>
      </div>
    </div>

    <!-- Le bloc accordéon (caché/montré) -->
    <div
        ref="accordionRef"
        class="accordion-content bg-light-black text-white overflow-hidden"
        :style="{ height: 0 }"
    >
      <div class="p-6 lg:flex gap-12">
        <div class="h-[300px] lg:h-[530px] mb-8 lg:mb-0 lg:flex-1">
          <img
              class="w-full h-full object-cover object-center"
              :src=image
              alt="mockup_project"
          />
        </div>
        <div class="lg:flex-1 lg:self-end">
          <hr class="bg-white my-12"/>
          <div class="space-y-6">
            <p class="dm-sans-regular uppercase text-white">
              {{ textOne }}
            </p>
            <p class="dm-sans-regular uppercase text-white">
              {{ textTwo }}
            </p>
            <p class="dm-sans-regular uppercase text-white">
              {{ techno }}
            </p>
            <p class="dm-sans-regular uppercase text-white">
              {{ tools }}
            </p>
            <a class="text-white dm-sans-regular uppercase underline" :href=link>Visiter le site</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import {ref, nextTick, defineProps, onMounted} from 'vue'
import {gsap} from 'gsap'

defineProps(['title', 'year', 'from', 'content', 'image', 'link' , 'textOne' , 'textTwo' , 'techno' , 'tools'])
const accordionOpen = ref(false)
const accordionRef = ref(null)

const toggleAccordion = async () => {
  accordionOpen.value = !accordionOpen.value

  await nextTick()

  const content = accordionRef.value

  if (!content) return

  if (accordionOpen.value) {
    // Blocage scroll body
    // document.body.classList.add('overflow-hidden')

    gsap.fromTo(
        content,
        {height: 0},
        {
          height: content.scrollHeight + 'px',
          duration: 0.5,
          ease: 'power2.out',
          onComplete: () => {
            content.style.height = 'auto'
          },
        }
    )
  } else {
    // Déblocage scroll
    // document.body.classList.remove('overflow-hidden')

    gsap.to(content, {
      height: 0,
      duration: 0.4,
      ease: 'power2.in',
    })
  }
}


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

    item.addEventListener('mouseenter', (e) => {

      gsap.to(bgBlack, {scaleY: 1});
      gsap.to(item, {color: "white"});
      gsap.to(arrowPath, {
        attr: {
          stroke: '#FFFFFF'
        }
      });
      gsap.to(arrow, {rotate: 45});
    })

    item.addEventListener('mouseleave', (e) => {
      gsap.to(bgBlack, {scaleY: 0});
      gsap.to(item, {color: "#262626"});
      gsap.to(arrowPath, {
        attr: {
          stroke: '#262626'
        }
      });
      gsap.to(arrow, {rotate: 0});
    })
  })
})
</script>