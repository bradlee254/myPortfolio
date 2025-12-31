<script setup lang="ts">
import { ref, onMounted } from 'vue';

const isVisible = ref(false);
const mouseX = ref(0);
const mouseY = ref(0);

onMounted(() => {
  setTimeout(() => {
    isVisible.value = true;
  }, 100);
});

const handleMouseMove = (e: MouseEvent) => {
  const rect = (e.currentTarget as HTMLElement).getBoundingClientRect();
  mouseX.value = ((e.clientX - rect.left) / rect.width) * 100;
  mouseY.value = ((e.clientY - rect.top) / rect.height) * 100;
};
</script>

<template>
  <section 
    class="min-h-screen flex items-center px-6 md:px-12 lg:px-24 md:ml-96 relative overflow-hidden "
    @mousemove="handleMouseMove"
  >
    <!-- Animated Background Elements -->
    <div class="absolute inset-0 overflow-hidden pointer-events-none">
      <div 
        class="absolute w-96 h-96 border border-emerald-400/10 rounded-full"
        :style="{
          top: '20%',
          left: '10%',
          transform: `translate(${mouseX * 0.02}px, ${mouseY * 0.02}px)`
        }"
      ></div>
      <div 
        class="absolute w-64 h-64 border border-zinc-700/30 rounded-full"
        :style="{
          top: '60%',
          right: '15%',
          transform: `translate(${mouseX * -0.03}px, ${mouseY * -0.03}px)`
        }"
      ></div>
      <div 
        class="absolute w-32 h-32 bg-emerald-400/5 rounded-2xl rotate-45"
        :style="{
          top: '40%',
          right: '25%',
          transform: `rotate(45deg) translate(${mouseX * 0.04}px, ${mouseY * 0.04}px)`
        }"
      ></div>
    </div>

    <!-- Main Content Grid -->
    <div class="relative z-10 w-full max-w-7xl mx-auto">
      <div class="grid lg:grid-cols-2 gap-12 items-center">
        <div>
          <div 
            class="inline-flex items-center gap-2 px-4 py-2 bg-zinc-900 border border-zinc-800 rounded-full mb-8 transition-all duration-700 transform"
            :class="isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'"
          >
            <div class="w-2 h-2 bg-emerald-400 rounded-full animate-pulse"></div>
            <span class="text-sm text-zinc-400">Available for new projects</span>
          </div>

          <!-- Heading -->
          <div class="mb-6 overflow-hidden">
            <h1 
              class="text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight transition-all duration-700 delay-100 transform"
              :class="isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'"
            >
              Hey, I'm
              <span class="relative inline-block">
                <span class="relative z-10 text-emerald-400">Bashir</span>
                <div class="absolute -bottom-2 left-0 w-full h-3 bg-emerald-400/20 -rotate-1"></div>
              </span>
            </h1>
          </div>
          <div class="mb-8 overflow-hidden">
            <p 
              class="text-xl md:text-3xl text-zinc-400 font-light transition-all duration-700 delay-200 transform"
              :class="isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'"
            >
              Full-stack developer crafting
              <span class="text-white font-medium"> digital experiences</span>
            </p>
          </div>

          <!-- Description -->
          <div class="mb-12 overflow-hidden">
            <p 
              class="text-lg text-zinc-500 leading-relaxed transition-all duration-700 delay-300 transform"
              :class="isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'"
            >
              I specialize in building modern web applications with cutting-edge technologies. 
              Passionate about clean code, intuitive design, and delivering exceptional user experiences.
            </p>
          </div>

          <!-- CTA Buttons -->
          <div 
            class="flex flex-wrap gap-4 transition-all duration-700 delay-400 transform"
            :class="isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'"
          >
            <button class="group relative px-8 py-4 bg-emerald-400 text-zinc-900 rounded-xl font-semibold overflow-hidden transition-all duration-300 hover:shadow-lg hover:shadow-emerald-400/20 hover:scale-105">
              <span class="relative z-10">View My Work</span>
              <div class="absolute inset-0 bg-emerald-300 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
            </button>
            
            <button class="group px-8 py-4 bg-transparent border-2 border-zinc-800 text-white rounded-xl font-semibold transition-all duration-300 hover:border-emerald-400 hover:text-emerald-400 hover:scale-105">
              <span class="flex items-center gap-2">
                Get In Touch
                <svg class="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </span>
            </button>
          </div>
        </div>

        <!-- Right Content - Image Container -->
        <div 
          class="relative transition-all duration-700 delay-500 transform"
          :class="isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'"
        >
          <div class="absolute inset-0 bg-emerald-400/5 rounded-3xl transform rotate-3"></div>
          <div class="absolute inset-0 border border-emerald-400/20 rounded-3xl transform -rotate-3"></div>
          <div class="relative bg-zinc-900 rounded-3xl border border-zinc-800 overflow-hidden aspect-square shadow-2xl">
            <div class="absolute inset-0 flex items-center justify-center">
              <div class="text-center space-y-4">
                <div class="w-24 h-24 mx-auto bg-zinc-800 rounded-full flex items-center justify-center">
                  <svg class="w-12 h-12 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                </div>
                <p class="text-zinc-600 text-sm">Your Image Here</p>
              </div>
            </div>
            
            <!-- Image Element (uncomment and use this) -->
            <!-- <img 
              src="/path-to-your-image.jpg" 
              alt="Bashir" 
              class="w-full h-full object-cover"
            /> -->
          </div>

          <!-- Floating Badge -->
          <div class="absolute -bottom-6 -left-6 bg-zinc-900 border border-zinc-800 rounded-2xl px-6 py-4 shadow-xl">
            <div class="flex items-center gap-3">
              <div class="w-3 h-3 bg-emerald-400 rounded-full"></div>
              <div>
                <p class="text-white font-semibold">1+ Years</p>
                <p class="text-zinc-500 text-sm">Experience</p>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>

    <!-- Side Decoration -->
    <div class="hidden xl:block absolute right-12 top-1/2 -translate-y-1/2 space-y-8">
      <div 
        v-for="i in 3" 
        :key="i"
        class="w-px h-16 bg-zinc-800"
        :class="i === 2 ? 'bg-emerald-400' : ''"
      ></div>
    </div>
  </section>
</template>