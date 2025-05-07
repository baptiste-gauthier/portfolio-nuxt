import Lenis from 'lenis'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

export default defineNuxtPlugin((nuxtApp) => {
    gsap.registerPlugin(ScrollTrigger)

    const lenis = new Lenis()

    // Sync scroll with GSAP
    lenis.on('scroll', ScrollTrigger.update)
    gsap.ticker.add((time) => lenis.raf(time * 1000))
    gsap.ticker.lagSmoothing(0)

    const scrollTo = (element: string | HTMLElement) => {
        lenis.scrollTo(element, {
            offset: -50,
        })
    }

    // Inject into Nuxt app context to use via `useNuxtApp().$scrollTo`
    nuxtApp.provide('scrollTo', scrollTo)
})