<script setup lang="ts">
import { useRoute } from "vue-router";
import { ref } from "vue";

interface NavLink {
  label: string;
  to: string;
  icon: string;
}

const route = useRoute();
const mobileMenuOpen = ref(false);

const links: NavLink[] = [
  { label: "Home", to: "/", icon: "⌂" },
  { label: "About", to: "/about", icon: "◉" },
  { label: "Skills", to: "/skills", icon: "◈" },
  { label: "Projects", to: "/projects", icon: "◪" },
  { label: "Contact", to: "/contact", icon: "✉" },
];

const isActive = (path: string) => {
  if (path === "/") return route.path === "/";
  return route.path.startsWith(path);
};

const toggleMobileMenu = () => {
  mobileMenuOpen.value = !mobileMenuOpen.value;
};
</script>

<template>
  <!-- Desktop Sidebar - Floating Card Design -->
  <header
    class="fixed top-8 left-8 h-[calc(100%-4rem)] w-72 z-50 hidden md:block"
  >
    <div class="h-full bg-zinc-900 rounded-3xl border border-zinc-800 shadow-2xl p-8 flex flex-col">
      <!-- Logo with animated underline -->
      <RouterLink to="/" class="group mb-20">
        <div class="flex items-center gap-2">
          <div class="w-2 h-2 bg-emerald-400 rounded-full"></div>
          <h1 class="text-3xl font-bold text-white tracking-tight">
            Bashir
          </h1>
        </div>
        <div class="h-0.5 w-0 group-hover:w-16 bg-emerald-400 transition-all duration-300 mt-2"></div>
      </RouterLink>

      <!-- Navigation Links -->
      <nav class="flex-1">
        <ul class="flex flex-col gap-2">
          <li v-for="link in links" :key="link.to">
            <RouterLink
              :to="link.to"
              class="group relative flex items-center gap-4 px-4 py-3 rounded-xl transition-all duration-300"
              :class="isActive(link.to)
                ? 'bg-emerald-400/10 text-emerald-400'
                : 'text-zinc-400 hover:text-white hover:bg-zinc-800/50'"
            >
              <!-- Icon -->
              <span class="text-2xl transition-transform duration-300 group-hover:scale-110">
                {{ link.icon }}
              </span>
              
              <!-- Label -->
              <span class="text-lg font-medium">
                {{ link.label }}
              </span>

              <!-- Active indicator -->
              <div 
                v-if="isActive(link.to)"
                class="absolute right-4 w-1.5 h-1.5 bg-emerald-400 rounded-full"
              ></div>
            </RouterLink>
          </li>
        </ul>
      </nav>

      <!-- Social Links / Status -->
      <div class="pt-6 border-t border-zinc-800">
        <div class="flex items-center gap-3 text-sm text-zinc-500">
          <div class="w-2 h-2 bg-emerald-400 rounded-full animate-pulse"></div>
          <span>Available for work</span>
        </div>
      </div>
    </div>
  </header>

  <!-- Mobile Header - Minimal Top Bar -->
  <header
    class="fixed top-0 left-0 w-full z-50 md:hidden"
  >
    <div class="mx-4 mt-4 bg-zinc-900 rounded-2xl border border-zinc-800 shadow-xl">
      <nav class="px-6 h-16 flex items-center justify-between">
        <RouterLink to="/" class="flex items-center gap-2">
          <div class="w-2 h-2 bg-emerald-400 rounded-full"></div>
          <span class="text-xl font-bold text-white">Bashir</span>
        </RouterLink>

        <button
          @click="toggleMobileMenu"
          class="relative w-10 h-10 flex items-center justify-center text-white focus:outline-none"
          aria-label="Toggle menu"
        >
          <div class="relative w-6 h-5 flex flex-col justify-between">
            <span 
              class="block h-0.5 w-6 bg-current transition-all duration-300"
              :class="mobileMenuOpen ? 'rotate-45 translate-y-2' : ''"
            ></span>
            <span 
              class="block h-0.5 w-6 bg-current transition-all duration-300"
              :class="mobileMenuOpen ? 'opacity-0' : ''"
            ></span>
            <span 
              class="block h-0.5 w-6 bg-current transition-all duration-300"
              :class="mobileMenuOpen ? '-rotate-45 -translate-y-2' : ''"
            ></span>
          </div>
        </button>
      </nav>
    </div>
  </header>

  <!-- Mobile Menu Overlay -->
  <Transition
    enter-active-class="transition-opacity duration-300"
    leave-active-class="transition-opacity duration-300"
    enter-from-class="opacity-0"
    leave-to-class="opacity-0"
  >
    <div
      v-if="mobileMenuOpen"
      class="fixed inset-0 bg-black/60 backdrop-blur-sm z-40 md:hidden"
      @click="mobileMenuOpen = false"
    ></div>
  </Transition>

  <!-- Mobile Sidebar -->
  <Transition
    enter-active-class="transition-transform duration-300 ease-out"
    leave-active-class="transition-transform duration-300 ease-in"
    enter-from-class="-translate-x-full"
    leave-to-class="-translate-x-full"
  >
    <div
      v-if="mobileMenuOpen"
      class="fixed inset-y-0 left-0 w-80 z-50 md:hidden"
      @click.stop
    >
      <div class="h-full m-4 bg-zinc-900 rounded-3xl border border-zinc-800 shadow-2xl p-8 flex flex-col">
        <!-- Header -->
        <div class="flex items-center justify-between mb-12">
          <RouterLink
            to="/"
            class="flex items-center gap-2"
            @click="mobileMenuOpen = false"
          >
            <div class="w-2 h-2 bg-emerald-400 rounded-full"></div>
            <span class="text-2xl font-bold text-white">Bashir</span>
          </RouterLink>
          <button
            @click="mobileMenuOpen = false"
            class="text-zinc-400 hover:text-white transition-colors"
            aria-label="Close menu"
          >
            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        <!-- Mobile Navigation -->
        <nav class="flex-1">
          <ul class="flex flex-col gap-2">
            <li v-for="link in links" :key="link.to">
              <RouterLink
                :to="link.to"
                class="group flex items-center gap-4 px-4 py-3 rounded-xl transition-all duration-300"
                :class="isActive(link.to)
                  ? 'bg-emerald-400/10 text-emerald-400'
                  : 'text-zinc-400 hover:text-white hover:bg-zinc-800/50'"
                @click="mobileMenuOpen = false"
              >
                <span class="text-2xl transition-transform duration-300 group-hover:scale-110">
                  {{ link.icon }}
                </span>
                <span class="text-lg font-medium">
                  {{ link.label }}
                </span>
                <div 
                  v-if="isActive(link.to)"
                  class="ml-auto w-1.5 h-1.5 bg-emerald-400 rounded-full"
                ></div>
              </RouterLink>
            </li>
          </ul>
        </nav>

        <!-- Mobile Footer -->
        <div class="pt-6 border-t border-zinc-800">
          <div class="flex items-center gap-3 text-sm text-zinc-500">
            <div class="w-2 h-2 bg-emerald-400 rounded-full animate-pulse"></div>
            <span>Available for work</span>
          </div>
        </div>
      </div>
    </div>
  </Transition>
</template>