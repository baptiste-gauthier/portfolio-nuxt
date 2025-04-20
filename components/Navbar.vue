<template>
  <div class="max-w-[1815px] mx-auto flex justify-end md:block p-6 sticky top-0 bg-transparent">
    <ul class="hidden md:flex dm-sans-medium uppercase justify-between items-center">
      <li class="flex items-center gap-6">
        <div class="dm-sans-medium font-medium text-sm text-light-black">
          Full Stack Developer
        </div>
        <div class="font-medium dm-sans-medium text-sm text-light-black">
          Marseille, France, {{ hour }}
        </div>
      </li>
      <li class="flex items-center gap-6">
        <div><a class="dm-sans-medium text-sm font-medium text-light-black hover:underline" href="#">About</a></div>
        <div><a class="dm-sans-medium text-sm font-medium text-light-black hover:underline" href="#">Projects</a></div>
        <div><a class="dm-sans-medium text-sm font-medium text-light-black hover:underline" href="#">Contact</a></div>
      </li>
    </ul>

  </div>

  <div @click="burger" ref="burgerRef" class="fixed top-6 right-6 z-40 md:hidden w-[40px] h-[24px]">
    <div class="relative w-full h-full">
      <span class="line absolute left-0 h-[2px] w-full bg-light-black origin-center top-[30%]"></span>
      <span class="line absolute left-0 h-[2px] w-full bg-light-black origin-center top-[70%]"></span>
    </div>
  </div>

  <div ref="navMobileRef" class="p-6 nav-mobile h-screen bg-white fixed w-screen top-0 z-30 md:hidden translate-x-[100vw] flex flex-col justify-around">

      <ul class="flex flex-col gap-6 items-center justify-center">
        <li><a class=" text-light-black font-kenoky uppercase text-4xl hover:underline" href="#">About</a></li>
        <li><a class=" text-light-black font-kenoky uppercase text-4xl hover:underline" href="#">Projects</a></li>
        <li><a class=" text-light-black font-kenoky uppercase text-4xl hover:underline" href="#">Contact</a></li>
        <li><svg class="star w-[36px] md:w-[56px]" width="56" height="56" viewBox="0 0 56 56" fill="none"
             xmlns="http://www.w3.org/2000/svg">
          <g clip-path="url(#clip0_49_343)">
            <path d="M0 28H56" stroke="#262626" stroke-width="5" stroke-miterlimit="10"/>
            <path d="M28 0V56" stroke="#262626" stroke-width="5" stroke-miterlimit="10"/>
            <path d="M8.18945 47.8107L47.811 8.18924" stroke="#262626" stroke-width="5" stroke-miterlimit="10"/>
            <path d="M8.18945 8.18924L47.811 47.8107" stroke="#262626" stroke-width="5" stroke-miterlimit="10"/>
          </g>
          <defs>
            <clipPath id="clip0_49_343">
              <rect width="56" height="56" fill="white"/>
            </clipPath>
          </defs>
        </svg></li>
      </ul>

      <div class="flex flex-col gap-2 items-center justify-center">
        <div>
          <div class="dm-sans-medium uppercase text-light-black text-sm">Baptiste Gauthier</div>
        </div>
        <div>
          <div class="text-center dm-sans-medium uppercase text-light-black text-sm">Full Stack Developer</div>
          <div class="text-center dm-sans-medium uppercase text-light-black text-sm">Marseille, France</div>
          <div class="text-center dm-sans-medium uppercase text-light-black text-sm">{{ hour }}</div>
        </div>
      </div>
     

  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import gsap from 'gsap';

let openingBurger = ref(false);

const formatTime = () => {
  const now = new Date();
  const hours = now.getHours().toString().padStart(2, '0');
  const minutes = now.getMinutes().toString().padStart(2, '0');
  const suffix = now.getHours() >= 12 ? 'PM' : 'AM';
  return `${hours}:${minutes} ${suffix}`;
};

const hour = ref(formatTime());

onMounted(() => {

  setInterval(() => {
    hour.value = formatTime();
  }, 1000);


});

const burgerRef = ref(null);
const navMobileRef = ref(null);
const isOpen = ref(false);

const burger = (event) => {
  const lines = event.currentTarget.querySelectorAll('.line');
  const [topLine, bottomLine] = lines;

  if (burger.value) {
    // on ferme
    burger.value = false;
    gsap.to(topLine, {
      rotate: "0deg",
      top: "30%",
      duration: .3,
      ease : "power2"
    });
    gsap.to(bottomLine, {
      rotate: "0deg",
      top: "70%",
      duration: .3,
      ease : "power2"
    });

    openingHandler();
  } else {
    // on ouvre
    burger.value = true;
    gsap.to(topLine, {
      rotate: "45deg",
      top: "50%",
      duration: .3,
      ease : "power2"
    });
    gsap.to(bottomLine, {
      rotate: "-45deg",
      top: "50%",
      duration: .3,
      ease : "power2"
    });

    openingHandler();
  }
};

function openingHandler() {
  let blocNav = navMobileRef.value;
  if(burger.value) {
    // on ouvre
    gsap.to(blocNav, {
      x: 0,
      duration: 1,
      ease: "power4.in",
    })

  } else {
    // on ferme
    gsap.to(blocNav, {
      x: "100vw",
      duration: 1,
      ease: "power4.out",
    })
  }
}





</script>