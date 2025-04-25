<template>
  <section>
    <div class="max-w-[1815px] mx-auto px-6 pt-16 2xl:pt-32">
      <div class="flex flex-col md:flex-row items-center gap-6">
        <div>
          <client-only>
            <TitlePres/>
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
            <a href="https://www.linkedin.com/in/baptiste-gauthier-a02ab9210"
               class="text-light-black uppercase dm-sans-medium hover:underline">Linkedin</a>
            <a href="https://github.com/baptiste-gauthier"
               class="text-light-black uppercase dm-sans-medium hover:underline">Github</a>
          </div>
          <div class="h-[320px] w-[280px] mx-auto my-8 md:my-0">
            <img class="h-full w-full object-cover object-center" src="~/assets/images/image_pres.png"
                 alt="image pres"/>
          </div>
        </div>

        <p class="text-presentation order-1 text-center md:text-left uppercase self-end font-medium dm-sans-medium md:max-w-lg text-light-black">
          Je m'appelle Baptiste Gauthier, j'ai 25 ans et j'exerce le métier développeur depuis plus de 3 ans. Après
          avoir obtenu un DUT dans le domaine du multimédia,
          j'ai décider de me spécialiser dans le développement de <span class="underline">site</span> et <span
            class="underline">d'application web.</span></p>
      </div>
    </div>
  </section>

  <SectionTitle title="projects"/>

  <section id="projects" class="flex flex-col-reverse border-y-2 border-light-black divide-y-2 divide-y-reverse">
    <Project title="Sud Playground" year="2020" from="Side Project" content="Sud Playground" :image=sudPlaygrounds
             link="https://sudplaygrounds.com/"/>
    <Project title="Épopée Village" year="2022" from="Synergie Family" content="Épopée Village" :image=epopeeVillage
             link="https://epopee-village.com/"/>
    <Project title="Synergie Family" year="2022" from="Synergie Family" content="Synergie Family" :image=synergieFamily
             link="https://www.synergiefamily.com/"/>
    <Project title="Qwantic" year="2022" from="Synergie Family" content="Qwantic" :image=qwantic
             link="https://qwantic.co/"/>
    <Project title="Greenskills" year="2024" from="Synergie Family" content="Green Skills" :image=greenskills
             link="https://greenskills.synergiefamily.com/"/>
    <Project title="Luberon ramonage" year="2024" from="Side Project" content="Luberon ramonage"
             :image="luberonRamonage" link="https://luberon-ramonage.fr/"/>
    <Project title="Big Mars" year="2025" from="Synergie Family" content="Big Mars" :image=bigMars
             link="https://wearebigmars.com/"/>
    <Project title="Passer le BAFA" year="2025" from="Synergie Family" content="Passer le BAFA" :image=passerLeBafa
             link="https://passerlebafa.com"/>

  </section>

  <section class="my-6 mb-28 lg:my-16 lg:mb-32 px-6 max-w-6xl mx-auto">


    <div data-splitting class="inline section-text lg:leading-10 dm-sans-medium text-light-black text-2xl lg:text-3xl uppercase">Passionné
      d’informatique depuis toujours, j’ai à cœur de créer des applications robustes mais aussi agréables à
      utiliser
    </div>

    <span>
      <svg class="hidden lg:inline translate-y-8 star mx-2" width="30" height="30" viewBox="0 0 56 56" fill="none"
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
    </span>

    <div data-splitting class="inline section-text lg:leading-10  dm-sans-medium text-light-black text-2xl lg:text-3xl uppercase">Je suis naturellement curieux, toujours en veille sur les nouvelles technologies, les bonnes pratiques
      et les tendances du secteur.
    </div>


    <div data-splitting class="lg:inline mt-4 lg:mt-0 section-text lg:leading-10  dm-sans-medium text-light-black text-2xl lg:text-3xl uppercase">Pour moi, l’informatique, c’est avant tout comprendre le réel pour mieux le
      modéliser.
    </div>
    <span>
      <svg class="hidden lg:inline translate-y-8 star reverse mx-2" width="30" height="30" viewBox="0 0 56 56" fill="none"
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
    </span>
    <div data-splitting class="inline section-text lg:leading-10  dm-sans-medium text-light-black text-2xl lg:text-3xl uppercase">
      C’est analyser des
      problématiques métiers, s’imprégner d’un secteur, puis concevoir des outils sur mesure qui font sens et facilitent
      le
      quotidien.
    </div>


    <div data-splitting class="section-text  dm-sans-medium text-light-black text-2xl lg:text-3xl uppercase">


    </div>

  </section>

  <InfiniteSlider/>
  <PresSection/>
  <ContactSection/>
</template>
<script setup>

import {gsap} from "gsap";
import {onMounted} from "vue";
import PresSection from "~/components/PresSection.vue";
import ContactSection from "~/components/ContactSection.vue";
import TitlePres from "~/components/TitlePres.vue";

import sudPlaygrounds from '~/assets/images/projects/sudplaygrounds.jpg'
import luberonRamonage from '~/assets/images/projects/luberon-ramonage.jpg'
import bigMars from '~/assets/images/projects/bigmars.jpg'
import passerLeBafa from '~/assets/images/projects/passer-le-bafa.jpg'
import synergieFamily from '~/assets/images/projects/synergie.jpg'
import epopeeVillage from '~/assets/images/projects/epopee.jpg'
import greenskills from '~/assets/images/projects/greenskills.jpg'
import qwantic from '~/assets/images/projects/qwantic.jpg'

onMounted(() => {

  gsap.to('.star', {rotation: 360, duration: 2, repeat: -1, transformOrigin: 'center', ease: 'none'});
  gsap.to('.star.reverse', {rotation: -360, duration: 2, repeat: -1, transformOrigin: 'center', ease: 'none'});

})

</script>