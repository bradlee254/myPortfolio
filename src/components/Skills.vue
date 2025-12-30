<script setup lang="ts">
    interface Skill {
        name: string; 
        category: string; 
        description: string;
    }

    const skills: Skill[] = [
    {   name: 'Vue.js',
        category: 'Frontend',
        description: 'Building user interfaces with Vue.js.',
    },
    {
        name: 'Node.js',
        category: 'Backend',
        description: 'Building server-side applications with Node.js.',
    },
    {
        name: 'Tailwind CSS',
        category: 'Frontend',
        description: 'Building user interfaces with Tailwind CSS.',
    },
    {
        name: 'Nuxt.js',
        category: 'Frontend',
        description: 'Building server-side applications with Nuxt.js.',
    },
    
        
    ]

</script>


<template>
    <section id="skills" class="py-24 border-t border-white/10">
        <div class="max-w-6xl mx-auto px-6">
            <!-- head -->
             <div class="mb-12">
                <h2 class="text-3xl md:text-4xl font-bold mb-4">Skills</h2>
                <p class="text-zinc-400 max-w-xl">
                Technologies and tools I've worked with in building applications.</p>
             </div>

             <!-- grid -->
              <div class="grid sm:grid-cols-2 md:grid-cols-6 gap-2">
                <div 
                v-for="skill in skills" :key="skill.name"
                class="p-6 rounded-xl bg-zinc-900 border-white/10 hover:border-emerald-500/40 transition">
                    <div class="text-emerald-400 mb-3 text-sm font-medium">
                        {{ skill.category }}
                    </div>
                    <h3 class="text-lg font-semibold mb-2">{{ skill.name }}</h3>
                    <p class="text-sm text-zinc-400">
                        {{ skill.description }}
                    </p>
                </div>
              </div>
        </div>

    </section>
</template>