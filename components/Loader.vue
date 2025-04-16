<template>
    <div class="bg-gray-300 h-screen w-screen fixed z-30 flex justify-center items-center" id="loader">
        <img src="~/assets/images/loader.gif" alt="loader">
    </div>
</template>

<script setup>
    import gsap from 'gsap';
    import { onMounted } from 'vue';

    onMounted(() => {
        setTimeout(() => {
            gsap.to('#loader' , {
                translateY : "100vh",
                duration : 1,
                ease : "power1",
            })
        }, 3000)

        console.log("hey")
    })
</script>