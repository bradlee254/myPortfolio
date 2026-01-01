<script setup lang="ts">
import { ref, onMounted } from "vue";
import { useRoute } from 'vue-router'

const route = useRoute
const isVisible = ref(false);
const mouseX = ref(0);
const mouseY = ref(0);

onMounted(() => {
  setTimeout(() => {
    isVisible.value = true;
  }, 80);
});

const handleMouseMove = (e: MouseEvent) => {
  const el = e.currentTarget as HTMLElement;
  const rect = el.getBoundingClientRect();

  mouseX.value = ((e.clientX - rect.left) / rect.width) * 100;
  mouseY.value = ((e.clientY - rect.top) / rect.height) * 100;
};
</script>

<template>
  <section
    class="relative min-h-screen flex items-center overflow-hidden
           px-6 md:px-12 lg:px-24
           pt-28 md:pt-0"
    @mousemove="handleMouseMove"
  >
    <!-- Background -->
    <div class="absolute inset-0 pointer-events-none">
      <div
        class="absolute w-96 h-96 border border-emerald-400/10 rounded-full transition-transform duration-300"
        :style="{
          top: '20%',
          left: '10%',
          transform: `translate(${mouseX * 0.02}px, ${mouseY * 0.02}px)`
        }"
      />
      <div
        class="absolute w-64 h-64 border border-zinc-700/30 rounded-full transition-transform duration-300"
        :style="{
          top: '60%',
          right: '15%',
          transform: `translate(${mouseX * -0.03}px, ${mouseY * -0.03}px)`
        }"
      />
      <div
        class="absolute w-32 h-32 bg-emerald-400/5 rounded-2xl rotate-45 transition-transform duration-300"
        :style="{
          top: '40%',
          right: '25%',
          transform: `rotate(45deg) translate(${mouseX * 0.04}px, ${mouseY * 0.04}px)`
        }"
      />
    </div>

    <!-- Content -->
    <div class="relative z-10 w-full max-w-7xl mx-auto">
    
      <div class="grid grid-cols-1 gap-14 items-center">

        <!-- Left -->
        <div>
          <div
            class="inline-flex items-center gap-2 px-4 py-2 mb-8 rounded-full
                   bg-zinc-900 border border-zinc-800
                   transition-all duration-700"
            :class="isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'"
          >
            <span class="w-2 h-2 bg-emerald-400 rounded-full animate-pulse" />
            <span class="text-sm text-zinc-400">
              Available for new projects
            </span>
          </div>

          <h1
            class="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6
                   transition-all duration-700 delay-100"
            :class="isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'"
          >
            Hey, I’m
            <span class="relative inline-block ml-2">
              <span class="relative z-10 text-emerald-400">Bradley</span>
              <span
                class="absolute -bottom-2 left-0 w-full h-3
                       bg-emerald-400/20 -rotate-1"
              />
            </span>
          </h1>

          <p
            class="text-xl md:text-2xl lg:text-3xl text-zinc-400 font-light mb-8
                   transition-all duration-700 delay-200"
            :class="isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'"
          >
            Software developer crafting
            <span class="text-white font-medium"> digital experiences</span>
          </p>

          <p
            class="text-lg text-zinc-500 leading-relaxed mb-12 max-w-xl
                   transition-all duration-700 delay-300"
            :class="isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'"
          >
            I specialize in building modern web applications with cutting-edge
            technologies, focusing on clean code, intuitive design, and
            meaningful user experiences.
          </p>

          <div
            class="flex flex-wrap gap-4 transition-all duration-700 delay-400"
            :class="isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'"
          >
            <RouterLink
              to="/projects"
              class="px-8 py-4 rounded-xl bg-emerald-400 text-zinc-900 font-semibold transition hover:scale-105 hover:shadow-lg hover:shadow-emerald-400/20"
            >
              View My Work
            </RouterLink>

            <RouterLink
              to="/contact"
              class="px-8 py-4 rounded-xl border border-zinc-800 text-white font-semibold transition hover:border-emerald-400 hover:text-emerald-400 hover:scale-105"
            >
              Get In Touch →
            </RouterLink>
          </div>
        </div>

        <!-- Right  -->
        <!--
        <div
          class="relative transition-all duration-700 delay-500"
          :class="isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'"
        >
          <div class="absolute inset-0 bg-emerald-400/5 rounded-3xl rotate-3" />
          <div class="absolute inset-0 border border-emerald-400/20 rounded-3xl -rotate-3" />

          <div
            class="relative aspect-square bg-zinc-900 rounded-3xl
                   border border-zinc-800 overflow-hidden shadow-2xl
                   flex items-center justify-center"
          >
            <div class="text-center space-y-3">
              <div
                class="w-24 h-24 mx-auto rounded-full bg-zinc-800
                       flex items-center justify-center"
              >
                <svg
                  class="w-12 h-12 text-emerald-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                  />
                </svg>
              </div>
              <p class="text-sm text-zinc-600">Profile image</p>
            </div>
          </div>

          <div
            class="absolute -bottom-6 -left-6 px-6 py-4 rounded-2xl
                   bg-zinc-900 border border-zinc-800 shadow-xl"
          >
            <p class="text-white font-semibold">1+ Years</p>
            <p class="text-sm text-zinc-500">Experience</p>
          </div>
        </div>
        -->

      </div>
    </div>

    <!-- Side accent -->
    <div
      class="hidden xl:flex absolute right-12 top-1/2 -translate-y-1/2
             flex-col gap-8"
    >
      <span class="w-px h-16 bg-zinc-800" />
      <span class="w-px h-16 bg-emerald-400" />
      <span class="w-px h-16 bg-zinc-800" />
    </div>
  </section>
</template>
