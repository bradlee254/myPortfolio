<script setup lang="ts">
import { ref, onMounted } from 'vue';

const isVisible = ref(false);
const observer = ref<IntersectionObserver | null>(null);
const sectionRef = ref<HTMLElement | null>(null);

onMounted(() => {
  observer.value = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          isVisible.value = true;
        }
      });
    },
    { threshold: 0.2 }
  );

  if (sectionRef.value) {
    observer.value.observe(sectionRef.value);
  }
});

const stats = [
  { value: '2+', label: 'Years Experience', icon: '◷' },
  { value: '5+', label: 'Projects Completed', icon: '◪' },
  { value: 'Frontend', label: 'Vue • TS • Tailwind', icon: '◈' },
  { value: 'Backend', label: 'Node • MongoDB', icon: '◉' },
];
</script>

<template>
  <section
    ref="sectionRef"
    id="about"
    class="py-32 px-6 md:px-12 lg:px-24 md:ml-96 relative overflow-hidden"
  >
    <!-- Background Decoration -->
    <div class="absolute top-0 right-0 w-96 h-96 border border-zinc-800/50 rounded-full -translate-y-1/2 translate-x-1/2"></div>
    
    <div class="max-w-6xl mx-auto relative z-10">
      <!-- Section Header -->
      <div class="mb-16">
        <div 
          class="inline-flex items-center gap-2 px-4 py-2 bg-zinc-900 border border-zinc-800 rounded-full mb-6 transition-all duration-700 transform"
          :class="isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'"
        >
          <div class="w-2 h-2 bg-emerald-400 rounded-full"></div>
          <span class="text-sm text-zinc-500 uppercase tracking-wider">About Me</span>
        </div>
        
        <h2 
          class="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 transition-all duration-700 delay-100 transform"
          :class="isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'"
        >
          Building digital products with
          <span class="text-emerald-400"> passion & precision</span>
        </h2>
      </div>

      <div class="grid lg:grid-cols-2 gap-16 items-start">
        <!-- Text Content -->
        <div class="space-y-6">
          <p 
            class="text-xl text-zinc-400 leading-relaxed transition-all duration-700 delay-200 transform"
            :class="isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'"
          >
            I'm a software engineer with a strong focus on building clean,
            scalable, and user-friendly web applications.
          </p>

          <p 
            class="text-lg text-zinc-500 leading-relaxed transition-all duration-700 delay-300 transform"
            :class="isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'"
          >
            I specialize in frontend development using
            <span class="text-white font-medium"> Vue, TypeScript, and Tailwind CSS</span>,
            and I also have experience building backend APIs with 
            <span class="text-white font-medium">Node.js and MongoDB</span>.
          </p>

          <p 
            class="text-lg text-zinc-500 leading-relaxed transition-all duration-700 delay-400 transform"
            :class="isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'"
          >
            I enjoy solving real-world problems, learning new technologies,
            and continuously improving my craft.
          </p>

          <!-- CTA -->
          <div 
            class="pt-6 transition-all duration-700 delay-500 transform"
            :class="isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'"
          >
            <button class="group flex items-center gap-3 text-emerald-400 font-semibold hover:gap-4 transition-all duration-300">
              <span>Download Resume</span>
              <svg class="w-5 h-5 transition-transform duration-300 group-hover:translate-y-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M9 19l3 3m0 0l3-3m-3 3V10" />
              </svg>
            </button>
          </div>
        </div>

        <!-- Stats Grid -->
        <div class="grid grid-cols-2 gap-4">
          <div 
            v-for="(stat, index) in stats" 
            :key="stat.label"
            class="group relative p-6 bg-zinc-900 border border-zinc-800 rounded-2xl hover:border-emerald-400/30 transition-all duration-500 transform"
            :class="isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'"
            :style="{ transitionDelay: `${600 + index * 100}ms` }"
          >
            <!-- Icon -->
            <div class="text-3xl text-emerald-400/20 mb-4 group-hover:text-emerald-400/40 transition-colors duration-300">
              {{ stat.icon }}
            </div>
            
            <!-- Value -->
            <h3 class="text-2xl md:text-3xl font-bold text-white mb-2 group-hover:text-emerald-400 transition-colors duration-300">
              {{ stat.value }}
            </h3>
            
            <!-- Label -->
            <p class="text-sm text-zinc-500 leading-tight">
              {{ stat.label }}
            </p>

            <!-- Hover Effect -->
            <div class="absolute inset-0 bg-emerald-400/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
          </div>
        </div>
      </div>

      <!-- Bottom Accent -->
      <div 
        class="mt-16 flex items-center gap-4 transition-all duration-700 delay-700 transform"
        :class="isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'"
      >
        <div class="h-px flex-1 bg-zinc-800"></div>
        <div class="flex gap-2">
          <div class="w-2 h-2 bg-zinc-800 rounded-full"></div>
          <div class="w-2 h-2 bg-emerald-400 rounded-full"></div>
          <div class="w-2 h-2 bg-zinc-800 rounded-full"></div>
        </div>
        <div class="h-px flex-1 bg-zinc-800"></div>
      </div>
    </div>
  </section>
</template>