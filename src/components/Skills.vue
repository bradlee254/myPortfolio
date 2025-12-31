<script setup lang="ts">
import { ref, onMounted, computed } from 'vue';

interface Skill {
  name: string;
  category: string;
  description: string;
  icon: string;
}

const isVisible = ref(false);
const observer = ref<IntersectionObserver | null>(null);
const sectionRef = ref<HTMLElement | null>(null);
const activeCategory = ref<string>('All');

const skills: Skill[] = [
  {
    name: 'Vue.js',
    category: 'Frontend',
    description: 'Building reactive user interfaces with Vue.js.',
    icon: '◈',
  },
  {
    name: 'Node.js',
    category: 'Backend',
    description: 'Building server-side applications with Node.js.',
    icon: '◉',
  },
  {
    name: 'Tailwind CSS',
    category: 'Frontend',
    description: 'Crafting beautiful UIs with utility-first CSS.',
    icon: '◪',
  },
  {
    name: 'Nuxt.js',
    category: 'Frontend',
    description: 'Building full-stack applications with Nuxt.js.',
    icon: '◆',
  },
];

const categories = computed(() => {
  const cats = ['All', ...new Set(skills.map(s => s.category))];
  return cats;
});

const filteredSkills = computed(() => {
  if (activeCategory.value === 'All') return skills;
  return skills.filter(s => s.category === activeCategory.value);
});

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
</script>

<template>
  <section
    ref="sectionRef"
    id="skills"
    class="py-32 px-6 md:px-12 lg:px-24 md:ml-96 relative overflow-hidden"
  >
    <!-- Background Decoration -->
    <div class="absolute bottom-0 left-0 w-96 h-96 border border-zinc-800/50 rounded-full translate-y-1/2 -translate-x-1/2"></div>

    <div class="max-w-6xl mx-auto relative z-10">
      <!-- Section Header -->
      <div class="mb-16">
        <div 
          class="inline-flex items-center gap-2 px-4 py-2 bg-zinc-900 border border-zinc-800 rounded-full mb-6 transition-all duration-700 transform"
          :class="isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'"
        >
          <div class="w-2 h-2 bg-emerald-400 rounded-full"></div>
          <span class="text-sm text-zinc-500 uppercase tracking-wider">My Toolkit</span>
        </div>

        <h2 
          class="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 transition-all duration-700 delay-100 transform"
          :class="isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'"
        >
          Skills & Technologies
        </h2>

        <p 
          class="text-xl text-zinc-400 max-w-2xl transition-all duration-700 delay-200 transform"
          :class="isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'"
        >
          Technologies and tools I've mastered in building modern web applications.
        </p>
      </div>

      <!-- Category Filter -->
      <div 
        class="flex flex-wrap gap-3 mb-12 transition-all duration-700 delay-300 transform"
        :class="isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'"
      >
        <button
          v-for="category in categories"
          :key="category"
          @click="activeCategory = category"
          class="px-6 py-3 rounded-xl font-medium transition-all duration-300"
          :class="activeCategory === category
            ? 'bg-emerald-400 text-zinc-900'
            : 'bg-zinc-900 border border-zinc-800 text-zinc-400 hover:border-emerald-400/30 hover:text-white'"
        >
          {{ category }}
        </button>
      </div>

      <!-- Skills Grid -->
      <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <div
          v-for="(skill, index) in filteredSkills"
          :key="skill.name"
          class="group relative p-8 bg-zinc-900 border border-zinc-800 rounded-2xl hover:border-emerald-400/30 transition-all duration-500 transform hover:scale-105 hover:-translate-y-2"
          :class="isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'"
          :style="{ transitionDelay: `${400 + index * 100}ms` }"
        >
          <!-- Hover Glow Effect -->
          <div class="absolute inset-0 bg-emerald-400/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>

          <!-- Icon -->
          <div class="relative text-5xl text-emerald-400/20 mb-6 group-hover:text-emerald-400/40 group-hover:scale-110 transition-all duration-300">
            {{ skill.icon }}
          </div>

          <!-- Category Badge -->
          <div class="relative inline-flex items-center gap-2 px-3 py-1 bg-emerald-400/10 border border-emerald-400/20 rounded-full mb-4">
            <div class="w-1.5 h-1.5 bg-emerald-400 rounded-full"></div>
            <span class="text-emerald-400 text-xs font-medium uppercase tracking-wider">
              {{ skill.category }}
            </span>
          </div>

          <!-- Skill Name -->
          <h3 class="relative text-2xl font-bold text-white mb-3 group-hover:text-emerald-400 transition-colors duration-300">
            {{ skill.name }}
          </h3>

          <!-- Description -->
          <p class="relative text-zinc-500 leading-relaxed">
            {{ skill.description }}
          </p>

          <!-- Corner Accent -->
          <div class="absolute top-0 right-0 w-20 h-20 border-t-2 border-r-2 border-zinc-800 rounded-tr-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        </div>
      </div>

      <!-- Bottom Stats -->
      <div 
        class="mt-20 grid grid-cols-2 md:grid-cols-4 gap-6 transition-all duration-700 delay-700 transform"
        :class="isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'"
      >
        <div class="text-center p-6 bg-zinc-900/50 border border-zinc-800 rounded-xl">
          <div class="text-3xl font-bold text-emerald-400 mb-2">{{ skills.length }}+</div>
          <div class="text-sm text-zinc-500">Technologies</div>
        </div>
        
        <div class="text-center p-6 bg-zinc-900/50 border border-zinc-800 rounded-xl">
          <div class="text-3xl font-bold text-emerald-400 mb-2">100%</div>
          <div class="text-sm text-zinc-500">Commitment</div>
        </div>
        
        <div class="text-center p-6 bg-zinc-900/50 border border-zinc-800 rounded-xl">
          <div class="text-3xl font-bold text-emerald-400 mb-2">24/7</div>
          <div class="text-sm text-zinc-500">Learning</div>
        </div>
        
        <div class="text-center p-6 bg-zinc-900/50 border border-zinc-800 rounded-xl">
          <div class="text-3xl font-bold text-emerald-400 mb-2">∞</div>
          <div class="text-sm text-zinc-500">Possibilities</div>
        </div>
      </div>
    </div>
  </section>
</template>