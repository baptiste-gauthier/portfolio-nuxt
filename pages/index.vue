<template>
  <section>
    <div class="max-w-[1815px] mx-auto px-6 pt-16 2xl:pt-32">
      <div class="flex flex-col md:flex-row items-center gap-6">
        <div>
          <client-only>
            <TitlePres />
          </client-only>

        </div>
        <svg class="star star-pres w-[36px] md:w-[56px]" width="56" height="56" viewBox="0 0 56 56" fill="none"
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
        </svg>
      </div>
      <div class="md:flex justify-between gap-6 image-pres">
        <div class="order-2">
          <div class="hidden lg:flex py-2 items-center gap-2">
            <a href="#" class="text-light-black uppercase dm-sans-medium">Linkedin</a>
            <a href="#" class="text-light-black uppercase dm-sans-medium">Github</a>
          </div>
          <div class="h-[320px] w-[280px] mx-auto my-8 md:my-0">
            <img class="h-full w-full object-cover object-center" src="~/assets/images/image_pres.png"
                 alt="image pres"/>
          </div>
        </div>

        <p class="text-presentation order-1 text-center md:text-left uppercase self-end font-medium dm-sans-medium md:max-w-lg text-light-black">
          Je m'appelle Baptiste Gauthier, j'ai 25 ans et j'exerce le métier développeur depuis plus de 3 ans. Après avoir obtenu un DUT dans le domaine du multimédia,
           j'ai décider de me spécialiser dans le développement de <span class="underline">site</span> et <span class="underline">d'application web.</span></p>
      </div>
    </div>
  </section>

  <SectionTitle title="projects"/>

  <section class="flex flex-col-reverse border-y-2 border-light-black divide-y-2 divide-y-reverse">
    <Project title="Sud Playground" year="2020" from="Side Project" content="Sud Playground"/>
    <Project title="Synergie Family" year="2022" from="Synergie Family" content="Synergie Family"/>
    <Project title="Épopée Village" year="2023" from="Synergie Family" content="Épopée Village"/>
    <Project title="Luberon ramonage" year="2024" from="Side Project" content="Luberon ramonage"/>
    <Project title="Big Mars" year="2025" from="Synergie Family" content="Big Mars"/>
    <Project title="Passer le BAFA" year="2025" from="Synergie Family" content="Passer le BAFA"/>

  </section>

  <section class="my-16 px-6 lg:my-32 max-w-6xl mx-auto">
    <div data-splitting class="section-text dm-sans-medium text-light-black text-2xl lg:text-3xl uppercase">
      Pudding cheesecake danish candy candy canes. Jelly-o toffee candy tootsie roll gummi bears macaroon croissant
       jujubes cupcake. Tart lemon drops marshmallow macaroon tart chocolate jujubes.
        Soufflé toffee gummies cotton candy chocolate cake caramels danish ice cream candy.
      </div>
  </section>

  <InfiniteSlider />
  <PresSection />
  <ContactSection />
</template>
<script setup>

import {gsap} from "gsap";
import {onMounted} from "vue";
import PresSection from "~/components/PresSection.vue";
import ContactSection from "~/components/ContactSection.vue";
import TitlePres from "~/components/TitlePres.vue";

onMounted( () => {

  gsap.to('.star', {rotation: 360, duration: 2, repeat: -1, transformOrigin: 'center', ease: 'none'});

})

</script>