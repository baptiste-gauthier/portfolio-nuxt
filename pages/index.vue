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
          Je m'appelle Baptiste Gauthier, j'ai 26 ans et j'exerce le métier développeur depuis plus de 3 ans. Après
          avoir obtenu un DUT dans le domaine du multimédia,
          j'ai décider de me spécialiser dans le développement de <span class="underline">site</span> et <span
            class="underline">d'application web.</span></p>
      </div>
    </div>
  </section>

  <SectionTitle title="projects"/>

  <section id="projects" class="flex flex-col-reverse border-y-2 border-light-black divide-y-2 divide-y-reverse">
    <Project title="Sud Playground" year="2020" from="Side Project" content="Sud Playground" :image=sudPlaygrounds
             link="https://sudplaygrounds.com/"
             text-one="Sudplaygrounds est un site web conçu et designé par un graphiste porteur du projet, visant à référencer l’ensemble des terrains de basketball de Marseille sur une carte interactive. L’utilisateur peut s’inscrire, signaler sa présence sur un terrain, et consulter une feuille de match pour trouver d'autres joueurs disponibles, favorisant ainsi la rencontre et le jeu en communauté."
             text-two="Développé en PHP, CSS et JavaScript, le site intègre un système d’authentification, une fonctionnalité de terrains favoris, ainsi qu’un back-office permettant d’ajouter de nouveaux terrains et de les positionner sur la carte de manière intuitive."/>
    <Project title="Épopée Village" year="2022" from="Synergie Family" content="Épopée Village" :image=epopeeVillage
             link="https://epopee-village.com/"
             text-one="L'Épopée Village est un lieu situé à Marseille, pensé comme un écosystème vivant dédié à l’entrepreneuriat à impact, à la culture, à l’éducation et à l’engagement citoyen. Le site met en valeur les multiples espaces et initiatives du village : coworking, événements, incubateurs, ateliers créatifs et tiers-lieux éducatifs."
             text-two="J’ai développé le site en utilisant Symfony 6, SCSS et JavaScript.

Le site propose plusieurs fonctionnalités clés : un formulaire de contact avec système de mailing, un formulaire de demande de devis, un module d’agenda pour les événements, ainsi que la gestion des inscriptions à ces événements. Le contenu est également entièrement dynamique et administrable via un back-office sur mesure."/>
    <Project title="Synergie Family" year="2022" from="Synergie Family" content="Synergie Family" :image=synergieFamily
             link="https://www.synergiefamily.com/"
             text-one="Synergie Family est une association engagée dans l’insertion professionnelle à travers divers programmes d’accompagnement, l’animation en milieu scolaire et au sein des accueils collectifs de mineurs (ACM), ainsi que la gestion de centres sociaux, avec pour objectif de favoriser le lien social et l’égalité des chances."
             text-two="J’ai assuré le développement du back-end du site avec Symfony 6, puis j’ai accompagné l’évolution du front-end sur plusieurs années en assurant la maintenance et les améliorations. Le projet s’appuie sur EasyAdmin, du CSS personnalisé et JavaScript pour les fonctionnalités interactives.

Le back-office permet une gestion complète du contenu, l’intégration de Stripe Checkout permet la réservation de séjours en ligne, et une section blog a été mise en place pour partager l’actualité de l’association."/>
    <Project title="Qwantic" year="2022" from="Synergie Family" content="Qwantic" :image=qwantic
             link="https://qwantic.co/"
             text-one="Qwantic est une plateforme dédiée à la formation professionnelle, pour laquelle j’ai développé l’ensemble du site avec Symfony 6, en utilisant Tailwind CSS, des Twig Components et des Twig Live Components pour un rendu modulaire et réactif. Le back-office a été construit avec EasyAdmin, permettant une gestion simple et efficace du contenu."
             text-two="Le site propose l’inscription aux formations en ligne, une mise en avant dynamique des formations disponibles, un système de filtres interactif pour faciliter la recherche, ainsi qu’un blog pour relayer les actualités et ressources pédagogiques."/>
    <Project title="Greenskills" year="2024" from="Synergie Family" content="Green Skills" :image=greenskills
             link="https://greenskills.synergiefamily.com/"
             text-one="GreenSkills est un programme développé par Synergie Family, ayant pour objectif de valoriser les compétences liées aux métiers de la transition écologique."
             text-two="J’ai mis en place un formulaire multi-étapes pour faciliter la collecte d’informations, un système de téléchargement de brochure, ainsi qu’une mise à jour dynamique de la carte des événements pour permettre aux utilisateurs de suivre les actions en cours."
             techno="J’ai réalisé l’intégralité du développement avec les technologies Astro, Firebase et Tailwind CSS"/>
    <Project title="Luberon ramonage" year="2024" from="Side Project" content="Luberon ramonage"
             :image="luberonRamonage" link="https://luberon-ramonage.fr/" text-one="Luberon Ramonage est un projet développé pour un ramoneur professionnel, visant à mettre en place un calendrier avec un système de prise de rendez-vous en ligne.
              Je me suis chargé de toute la partie développement, tandis que le design a été réalisé par un graphiste."
             techno="Le projet repose sur les technologies suivantes : Symfony 7, JavaScript et Tailwind CSS."
             text-two="Parmi les principales fonctionnalités, j’ai développé un back-office avec EasyAdmin permettant la gestion complète des rendez-vous, incluant l’ajout de créneaux et le blocage de certaines dates. Le système envoie automatiquement des e-mails de confirmation aux clients, contenant un lien d’intégration vers Google Agenda. J’ai également assuré la mise en production du projet sur Hostinger."/>
    <Project title="Big Mars" year="2025" from="Synergie Family" content="Big Mars" :image=bigMars
             link="https://wearebigmars.com/"
             text-one="Bigmars est une application mobile qui permet d'aider les jeunes à découvrir leurs soft skills et construire leur projet professionnel de manière ludique et interactive à travers des jeux et des événements."
             text-two="J'ai développé le site de présentation de l'application en utilisant Symfony 7 et Tailwind CSS. J'y ai intégré un système complet de gestion d'événements permettant la création d'événements multi-dates, la configuration de créneaux, et l'inscription des participants. Un back office a été mis en place avec EasyAdmin pour permettre aux équipes de gérer les utilisateurs, les contacts et l'ensemble des événements de manière autonome."
             techno="Technos utilisées : Symfony 7, JavaScript, Tailwind CSS"
             tools="Outils complémentaires : EasyAdmin, Brevo"/>

    <Project title="Passer le BAFA" year="2025" from="Synergie Family" content="Passer le BAFA" :image=passerLeBafa
             link="https://passerlebafa.com" text-one="Le site passerlebafa.com est une plateforme dédiée à 
              la formation au BAFA (Brevet d'Aptitude aux Fonctions d'Animateur) proposée par l'association Synergie Family, basée à Marseille.
               Il s'adresse aux jeunes dès 16 ans souhaitant devenir animateurs en accueils collectifs de mineurs,
              tels que les centres de loisirs ou les colonies de vacances." text-two="J'ai développé le site avec Symfony 6,
               en intégrant le front avec Twig Components, JavaScript et Tailwind CSS.
                J'ai mis en place un système de paiement via Stripe, un back office avec EasyAdmin (gestion des sessions, commandes, articles et utilisateurs),
                ainsi qu'un système de mailing automatisé avec Brevo et des tâches cron. J'ai également géré la mise en production, les crontabs et la sécurisation du site."
             techno="Technos utilisées : Symfony 6, Twig Components, JavaScript, Tailwind CSS"
             tools="Outils complémentaires : Stripe, EasyAdmin, Brevo"
    />

  </section>

  <section class="my-6 mb-28 lg:my-16 lg:mb-32 px-6 max-w-6xl mx-auto">


    <div data-splitting
         class="inline section-text lg:leading-10 dm-sans-medium text-light-black text-2xl lg:text-3xl uppercase">
      Passionné
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

    <div data-splitting
         class="inline section-text lg:leading-10  dm-sans-medium text-light-black text-2xl lg:text-3xl uppercase">Je
      suis naturellement curieux, toujours en veille sur les nouvelles technologies, les bonnes pratiques
      et les tendances du secteur.
    </div>


    <div data-splitting
         class="lg:inline mt-4 lg:mt-0 section-text lg:leading-10  dm-sans-medium text-light-black text-2xl lg:text-3xl uppercase">
      Pour moi, l’informatique, c’est avant tout comprendre le réel pour mieux le
      modéliser.
    </div>
    <span>
      <svg class="hidden lg:inline translate-y-8 star reverse mx-2" width="30" height="30" viewBox="0 0 56 56"
           fill="none"
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
    <div data-splitting
         class="inline section-text lg:leading-10  dm-sans-medium text-light-black text-2xl lg:text-3xl uppercase">
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