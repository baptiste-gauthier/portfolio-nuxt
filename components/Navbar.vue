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
        <div><a class="dm-sans-medium text-sm font-medium text-light-black" href="#">About</a></div>
        <div><a class="dm-sans-medium text-sm font-medium text-light-black" href="#">Projects</a></div>
        <div><a class="dm-sans-medium text-sm font-medium text-light-black" href="#">Contact</a></div>
      </li>
    </ul>

    <div class="burger md:hidden self-end flex flex-col gap-2">
      <span class="bg-light-black h-[2px] w-[40px] block"></span>
      <span class="bg-light-black h-[2px] w-[40px] block"></span>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';

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
</script>