<template>
  <footer class="bg-light-black pb-16">
    <div class="max-w-[1815px] mx-auto px-6">
      <div class="flex flex-col md:flex-row justify-between">
        <ul class="flex items-center gap-2">
          <li><a class="text-white dm-sans-light uppercase text-sm hover:underline" href="https://www.linkedin.com/in/baptiste-gauthier-a02ab9210/">Linkedin</a></li>
          <li><a class="text-white dm-sans-light uppercase text-sm hover:underline" href="https://github.com/baptiste-gauthier">GitHub</a></li>
          <li><a class="text-white dm-sans-light uppercase text-sm hover:underline" href="#">About Me</a></li>
        </ul>
        <div class="text-white dm-sans-light uppercase text-sm">
          ©2025 Baptiste Gauthier
        </div>
        <div class="text-white dm-sans-light uppercase text-sm">
          {{ hour }}
        </div>
      </div>
    </div>
  </footer>
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